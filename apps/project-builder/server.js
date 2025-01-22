const express = require('express');
const { exec } = require('child_process');
const path = require('path');
const app = express();
const port = 3001;

// Absolute path to the Node.js script
const scriptPath = path.join(__dirname, 'turbo-repo-starter.js');

// Endpoint to run the script
app.get('/run-script', (req, res) => {
  exec(`node ${scriptPath}`, (error, stdout, stderr) => {
    if (error) {
      console.error(`Error: ${error.message}`);
      return res.status(500).send(`Error: ${error.message}`);
    }
    if (stderr) {
      console.error(`Stderr: ${stderr}`);
      return res.status(500).send(`Stderr: ${stderr}`);
    }
    console.log(`Stdout: ${stdout}`);
    res.send(`Script executed successfully: ${stdout}`);
  });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});