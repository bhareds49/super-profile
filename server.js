const express = require('express');
const connectDB = require('./config/db');
const path = require('path');
const cors = require('cors');

 
const app = express();

//Connect Database
connectDB();  
 
//Init Middleware
app.use(express.json({ extended: false }));

//use cors middleware
app.use(cors());

//app.use(express.static("public"));

//get route to serve index.html
//app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'public', 'index.html')));

app.get('/', (req, res) =>  res.send('Hello World!'));

//Define Routes

app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/profile', require('./routes/api/profile'));
app.use('/api/posts', require('./routes/api/posts'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));