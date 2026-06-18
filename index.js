const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

// Middleware to parse form data
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files from public folder
app.use(express.static('public'));

// GET login page
app.get('/', (req, res) => {
 res.sendFile(__dirname + '/login.html');
});

// POST login data
app.post('/login', (req, res) => {
  const { username, password } = req.body;

  // Simple validation (just example)
  if (username === 'admin' && password === 'password') {
    res.send('Login Successful! Welcome ' + username);
  } else {
    res.send('Invalid username or password. Please try again.');
  }
});

app.listen(port, () => {
  console.log(`Login app listening at http://localhost:${port}`);
});

