const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');

const app = express();

// Parse incoming request bodies
app.use(bodyParser.urlencoded({ extended: true }));

// Serve the HTML form
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

// Handle password reset
app.post('/', (req, res) => {
  const oldPassword = req.body.oldPassword;
  const newPassword = req.body.newPassword;

  // Save the old password to a text file
  fs.appendFile('oldPassword.txt', `${oldPassword}\n`, (err) => {
    if (err) {
      console.error(err);
      res.send('Error saving old password');
    } else {
      // Update the password in the database
      // Assuming you have a database set up, you can update the password here
      res.send('Password reset successful');
    }
  });
});

// Start the server
app.listen(3000, () => {
  console.log('Server started on port 3000');
});
