const BASE_URL='https://notes-api-86g0.onrender.com';
const request = require('supertest');
const mongoose = require('mongoose');
const { MongoMemoryServer } = require('mongodb-memory-server');
const express = require('express');
const Note = require('../models/Note');
const notesRouter = require('../routes/notes');

let app, mongoServer;

beforeAll(async () => {
  mongoServer = await MongoMemoryServer.create();
  const uri = mongoServer.getUri();

  await mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  app = express();
  app.use(express.json());
  app.use(BASE_URL, notesRouter);
});

afterAll(async () => {
  await mongoose.disconnect();
  await mongoServer.stop();
});

describe('Notes API Integration Tests', () => {
  it('should create a new note', async () => {
    const res = await request(app)
      .post(BASE_URL)
      .send({ title: 'Test Note', content: 'This is a test' });

    expect(res.statusCode).toBe(201);
    expect(res.body.title).toBe('Test Note');
  });

  it('should fetch all notes', async () => {
    const res = await request(app).get(BASE_URL);
    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });
});
