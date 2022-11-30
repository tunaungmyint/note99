const express = require('express');
require('dotenv').config();
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');

app.use(cors());
app.use(express.json());

// connect to mongoose
mongoose.connect(process.env.MONGO_URI, () =>
  console.log('mongodb is running')
);

// require route
app.use('/', require('./routes/noteRoute.js'));

app.listen(3001, function () {
  console.log('express server is running on port 3001');
});
