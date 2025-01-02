# WRITE-NOW

**WRITE-NOW** is a Google Docs clone developed using React, Socket.io, and MongoDB. This project enables multiple users to edit documents in real-time collaboratively, leveraging modern web technologies to provide a seamless user experience.

---

## Project Structure
WRITE-NOW/ │ ├── client/ │ ├── node_modules/ │ ├── public/ │ ├── src/ │ ├── package-lock.json │ ├── package.json │ └── README.md │ ├── server/ │ ├── node_modules/ │ ├── Document.js │ ├── package-lock.json │ ├── package.json │ ├── server.js │ └── README.md │ └── README.md


---

## Key Features

- **Real-time Collaborative Editing**: Multiple users can edit the same document simultaneously, and changes are reflected in real time.
- **Text Formatting**: Users can format text using various styles provided by the Quill text editor.
- **Document Storage**: Documents are stored in MongoDB, allowing for persistent data storage and retrieval.
- **Document Management**: Users can create new documents, share them with others, and undo/redo changes.

---

## Installation and Setup

### Prerequisites

- [Node.js](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/)
- npm (Node Package Manager)

### Client Setup

1. Navigate to the client directory:
   ```bash
   cd client

