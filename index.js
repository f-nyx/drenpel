// Import the express module
const express = require('express');
const path = require('path');

// Create an instance of express
const app = express();

// Define a port to listen on
const PORT = process.env.PORT || 3000;

app.use(express.static('public'));

// Define a route to send the HTML file
app.get('/', (req, res) => {
  // Use path.join to construct the file path
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Start the server and listen on the specified port
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
