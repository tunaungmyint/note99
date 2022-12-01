const express = require('express');
require('dotenv').config();
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const path = require('path');

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, './frontend/build')));

// connect to mongoose
mongoose.connect(process.env.MONGO_URI, () =>
  console.log('mongodb is running')
);

// require route
app.use('/', require('./routes/noteRoute.js'));

app.listen(3001, function () {
  console.log('express server is running on port 3001');
});
