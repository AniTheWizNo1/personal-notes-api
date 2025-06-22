const BASE_URL='https://notes-api-86g0.onrender.com';
const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const notesRouter = require('./routes/notes');
const app = express();
app.use(express.json());
app.use(express.static('public'));

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => console.log('MongoDB connected'))
.catch(err => console.error(err));

app.use(BASE_URL, notesRouter);
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
