require('dotenv').config();
const express = require('express');
const app = express();

// Simple test route
app.get('/', (req, res) => {
  res.send('Hello from Code Craft Backend!');
});

// Use environment variables for API keys
const OPENAI_API_KEY = process.env.OPENAI_API_KEY;
const NETLIFY_API_TOKEN = process.env.NETLIFY_API_TOKEN;

// Start server on Render port or 3000 locally
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
