WRITE-NOW
Overview
WRITE-NOW is a Google Docs clone developed using React, Socket.io, and MongoDB. This project allows multiple users to collaboratively edit documents in real-time, leveraging modern web technologies to provide a seamless user experience.

Project Structure
Live_Docs/
│
├── client/
│   ├── node_modules/
│   ├── public/
│   ├── src/
│   ├── package-lock.json
│   ├── package.json
│   └── README.md
│
├── server/
│   ├── node_modules/
│   ├── Document.js
│   ├── package-lock.json
│   ├── package.json
│   ├── server.js
│   └── README.md
│
└── README.md
Key Features
Real-time Collaborative Editing: Multiple users can edit the same document simultaneously, with changes reflected in real-time.
Text Formatting: Users can format text using various styles provided by the Quill text editor.
Document Storage: Documents are stored in MongoDB, allowing for persistent data storage and retrieval.
Document Management: Users can create new documents, share them with others, and undo/redo changes.
Installation and Setup
Prerequisites
Node.js
MongoDB
npm (Node Package Manager)
Client Setup
Navigate to the client directory:

cd client
Install the required dependencies:

npm install
Start the client:

npm start
Server Setup
Navigate to the server directory:

cd server
Install the required dependencies:

npm install
Start the server:

node server.js
MongoDB Setup
Ensure MongoDB is installed and running on your machine. You can download and install MongoDB from the official website.

Usage
Open your browser and navigate to the client application (typically at http://localhost:3000 if using the default React setup).
Create or open a document.
Share the document URL with collaborators.
Start editing and see changes in real-time!
Development Process
Project Setup: Created a new React project and installed necessary dependencies, including Quill, Socket.io, and MongoDB.
Text Editor Component: Developed a text editor component using the Quill library to allow text editing and formatting.
Server Setup: Set up a Node.js server with Express.js to handle WebSocket connections using Socket.io and database interactions with MongoDB.
Real-time Communication: Implemented real-time communication between clients using Socket.io, enabling multiple users to edit the same document simultaneously.
Data Storage: Utilized MongoDB for document data storage, allowing for saving and retrieving documents.
Document Synchronization: Implemented synchronization mechanisms to ensure all users see the same content.
Additional Features: Added features such as document creation, sharing, and undo/redo functionality.
Contributing
Contributions are welcome! Please open an issue or submit a pull request.

License
This project is licensed under the MIT License. See the LICENSE file for details.
