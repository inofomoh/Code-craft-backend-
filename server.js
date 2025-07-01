
require('dotenv').config();
const express = require('express');
const app = express();

// Example route
app.get('/', (req, res) => {
  res.send('Hello from Code Craft Backend!');
});

// Access environment variables
const OPENAI_API_KEY = process.env.OPENAI_API_KEY;
const NETLIFY_API_TOKEN = process.env.NETLIFY_API_TOKEN;

// Start server on Render's dynamic port or 5000 locally
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
