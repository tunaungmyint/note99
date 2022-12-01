const express = require('express');
require('dotenv').config();
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const path = require('path');

app.use(cors());
app.use(express.json());

//middleware
app.use(express.static(path.join(__dirname, './frontend/build')));

// app.get('*', function (_, res) {
//   res.sendFile(
//     path.join(__dirname, './frontend/build/index.html'),
//     function (err) {
//       if (err) {
//         res.status(500).send(err);
//       }
//     }
//   );
// });

// connect to mongoose
mongoose.connect(process.env.MONGO_URI, () =>
  console.log('mongodb is running')
);

// require route
app.use('/api', require('./routes/noteRoute.js'));

app.listen(3001, function () {
  console.log('express server is running on port 3001');
});
