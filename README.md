# 📘 Personal Notes API

A simple API server built with Express.js and MongoDB for managing personal notes with optional frontend.

## 🔧 Features

- Create, Read, Update, Delete Notes
- MongoDB integration
- Minimal HTML frontend
- Postman test-ready endpoints

---

## ⚙️ How to Run Locally

### 🧱 Backend

````bash
npm install
npm run dev

🌐 Frontend
Visit: http://localhost:5000/
Frontend is served from the /public folder.

🧪 API Endpoints
Method	Endpoint	    Description
GET	    /api/notes	    Get all notes
POST	/api/notes	    Create a new note
PUT	    /api/notes/:id	Update a note
DELETE	/api/notes/:id	Delete a note

📬 Sample POST Body
json
Copy
Edit
{
  "title": "Sample",
  "content": "This is a test note"
}
🛠 Tech Stack
Node.js + Express
MongoDB Atlas
HTML + JS (Optional UI)
## 🧪 Testing

This project uses **Jest** and **Supertest** for writing tests.

### ✅ Types of Tests
- **Unit Tests** (mocked MongoDB)
- **Integration Tests** (real MongoDB using `mongodb-memory-server`)
- **API Tests** (end-to-end with Supertest)

### 📦 Run Tests
```bash
npm test

## 🧪 Code Coverage Screenshot

![Coverage Report](https://raw.githubusercontent.com/AniTheWizNo1/personal-notes-api/docs/coverage.png)
## ✅ Keploy API Test Integration

- API tests auto-generated using [Keploy](https://keploy.io)
- CI/CD Integration using GitHub Actions
- [CI Config File](.github/workflows/ci.yml)

### 🔍 Test Report Screenshot:
![Keploy Test Output](https://raw.githubusercontent.com/AniTheWizNo1/personal-notes-api/docs/TestsRunReport.png)

✍️ Author
Aniket Das
GitHub: AniTheWizNo1

📝 License
MIT
````
