const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors'); // ✅ import cors
require('dotenv').config();

const notesRouter = require('./routes/notes');
const app = express();

// ✅ allow requests from your Vercel frontend
app.use(cors({
  origin: 'https://notes-frontend-jade.vercel.app', // Replace with your real Vercel URL
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true
}));

app.use(express.json());
app.use(express.static('public'));

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => console.log('MongoDB connected'))
.catch(err => console.error(err));

app.use('/api/notes', notesRouter);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
