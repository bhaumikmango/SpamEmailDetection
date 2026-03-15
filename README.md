# ⚡ SpamSentinel

A lightweight, real-time email spam classifier powered by a Naive Bayes ML model served via Flask, with a zero-latency dark-theme frontend.

![SpamSentinel Preview](https://img.shields.io/badge/ML-Naive%20Bayes-c8f045?style=flat-square&labelColor=0a0a0b)
![Flask](https://img.shields.io/badge/Backend-Flask-c8f045?style=flat-square&labelColor=0a0a0b)
![Vercel](https://img.shields.io/badge/Frontend-Vercel%20Ready-c8f045?style=flat-square&labelColor=0a0a0b)

---

## 📁 Project Structure

```
spamsentinel/
├── app.py          # Flask backend — loads model & serves /POST endpoint
├── file.pkl        # Serialised Naive Bayes pipeline (sklearn)
├── ml13b.ipynb     # Training notebook
├── index.html      # Frontend (single-file, Vercel-deployable)
└── README.md
```

---

## 🚀 Quick Start

### 1. Clone the repository

```bash
git clone https://github.com/<your-username>/spamsentinel.git
cd spamsentinel
```

### 2. Set up a Python virtual environment

```bash
python -m venv venv

# macOS / Linux
source venv/bin/activate

# Windows
venv\Scripts\activate
```

### 3. Install dependencies

```bash
pip install flask flask-cors scikit-learn
```

> **Note:** `numpy` and `scipy` are pulled in automatically as scikit-learn dependencies.

### 4. Run the Flask server

```bash
python app.py
```

The API will be available at `http://localhost:5000`.

---

## 🌐 API Reference

### `POST /`

Classifies a single email as spam or ham.

**Request body (JSON):**

```json
{
  "email": "Congratulations! You have won $1,000,000..."
}
```

**Response (JSON):**

```json
{
  "isSpam": "true"
}
```

| `isSpam` value | Meaning             |
|----------------|---------------------|
| `"true"`       | Email is spam       |
| `"false"`      | Email is legitimate |
| `"null"`       | Prediction error    |

---

## 🖥️ Frontend

Open `index.html` directly in your browser — no build step required.

```bash
# macOS
open index.html

# Linux
xdg-open index.html

# Windows
start index.html
```

Set the **API endpoint** field in the UI to point to your running Flask server (default: `http://localhost:5000`).

### Keyboard shortcut

Press **Ctrl + Enter** (or **⌘ + Enter** on Mac) inside the text area to trigger analysis instantly.

---

## ☁️ Deploying the Frontend to Vercel

The frontend is a single static HTML file — no framework, no build step.

### Option A — Vercel CLI

```bash
npm i -g vercel
vercel
```

Follow the prompts. Vercel will detect a static site automatically.

### Option B — Vercel Dashboard (drag & drop)

1. Go to [vercel.com/new](https://vercel.com/new)
2. Drag the folder (containing `index.html`) into the import area
3. Click **Deploy**

> ⚠️ **CORS note:** When the frontend is hosted on Vercel (HTTPS), the Flask backend must be publicly accessible too (not `localhost`). Either deploy the Flask app to a server/cloud service, or use a tunnel like [ngrok](https://ngrok.com) during development.

---

## 🔧 Deploying the Flask Backend

### Option A — Render (free tier)

1. Push the repo to GitHub.
2. Go to [render.com](https://render.com) → New → Web Service.
3. Set **Build command:** `pip install flask flask-cors scikit-learn`
4. Set **Start command:** `python app.py`

### Option B — Railway

```bash
railway init
railway up
```

### Option C — ngrok (local tunnel for testing)

```bash
pip install pyngrok
ngrok http 5000
```

Copy the generated HTTPS URL and paste it into the frontend's **API endpoint** field.

---

## 🛠️ Retraining the Model

Open `ml13b.ipynb` in Jupyter and run all cells. The notebook saves the trained pipeline to `file.pkl`.

```bash
pip install jupyter scikit-learn pandas
jupyter notebook ml13b.ipynb
```

---

## 📦 Dependencies

| Package       | Purpose                        |
|---------------|--------------------------------|
| `flask`       | HTTP server & routing          |
| `flask-cors`  | Cross-origin request handling  |
| `scikit-learn`| ML pipeline + Naive Bayes      |
| `pickle`      | Model serialisation (stdlib)   |

---

## 🔒 Security Notes

- `file.pkl` is loaded on every request — consider caching it as a module-level global for production.
- Do not expose your Flask server directly to the internet without a reverse proxy (nginx / caddy) in production.
- Add rate limiting (e.g. `flask-limiter`) before public deployment.

---

## 📄 License

MIT © 2024 — feel free to use, modify, and distribute.
