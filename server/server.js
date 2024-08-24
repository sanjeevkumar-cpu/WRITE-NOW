const mongoose = require("mongoose");
const Document = require('./document');

// Connect to MongoDB
mongoose.connect('mongodb://localhost/google-docs-clone', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Set up Socket.IO with CORS
const io = require('socket.io')(3001, {
  cors: {
    origin: "http://localhost:3000",
    methods: ['GET', 'POST'],
  },
});

const defaultValue = "";

// Handle client connections
io.on("connection", socket => {
  console.log('New client connected');

  socket.on("get-document", async documentId => {
    // Ensure the correct document ID is used
    const document = await findOrCreateDocument(documentId);
    
    // Join the document room
    socket.join(documentId);
    
    // Load the document data
    socket.emit("load-document", document.data);

    // Handle incoming changes
    socket.on('send-changes', delta => {
      socket.broadcast.to(documentId).emit("receive-changes", delta);
    });

    // Save the document periodically
    socket.on("save-document", async data => {
      await Document.findByIdAndUpdate(documentId, { data });
    });
  });
});

// Find or create a document by ID
async function findOrCreateDocument(id) {
  if (id == null) return;

  // Check if the document exists
  const document = await Document.findById(id);
  
  if (document) return document;

  // Create a new document if it doesn't exist
  return await Document.create({ _id: id, data: defaultValue });
}
