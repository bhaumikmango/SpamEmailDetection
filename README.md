# ⚡ SpamSentinel (Spam Email Classifier)

**Real-time email spam detection powered by Naive Bayes + Flask**

[![Live Demo](https://img.shields.io/badge/demo-live-c8f045?style=flat-square&labelColor=0a0a0b&logo=vercel)](https://spam-sentinel-rho.vercel.app/)
[![Backend](https://img.shields.io/badge/api-render-c8f045?style=flat-square&labelColor=0a0a0b&logo=render)](https://spamemaildetectionandsentimentclassifier.onrender.com)
[![Python](https://img.shields.io/badge/python-3.10-c8f045?style=flat-square&labelColor=0a0a0b&logo=python)](https://python.org)
[![Flask](https://img.shields.io/badge/flask-2.x-c8f045?style=flat-square&labelColor=0a0a0b&logo=flask)](https://flask.palletsprojects.com)
[![License](https://img.shields.io/badge/license-MIT-c8f045?style=flat-square&labelColor=0a0a0b)](LICENSE)

Paste any email. Get a verdict in milliseconds.

[**→ Try the live demo**](https://spam-sentinel-rho.vercel.app/)

</div>

---

## What it does

SpamSentinel classifies email content as **spam** or **legitimate (ham)** using a Naive Bayes machine learning pipeline trained on the classic SMS/Email Spam Collection dataset. The model is serialised and served through a minimal Flask REST API, consumed by a zero-dependency single-file frontend deployed on Vercel.

No frameworks. No build step. No nonsense.

---

## Tech stack

| Layer | Technology |
|---|---|
| ML model | Scikit-learn · Multinomial Naive Bayes |
| Feature extraction | TF-IDF vectoriser (inside sklearn `Pipeline`) |
| Backend | Python · Flask · Gunicorn |
| Frontend | Vanilla HTML / CSS / JavaScript (single file) |
| Backend hosting | Render (free tier) |
| Frontend hosting | Vercel (free tier) |
| Training data | `spam.csv` — UCI SMS Spam Collection |

---

## Project structure

```
SpamEmailDetection/
├── app.py              # Flask API — loads model, serves POST /
├── file.pkl            # Serialised sklearn Pipeline (TF-IDF + Naive Bayes)
├── ml13b.ipynb         # Training notebook — EDA, model training, export
├── spam.csv            # Raw dataset (5,572 labelled messages)
├── index.html          # Complete frontend — no build step required
├── requirements.txt    # Python dependencies
├── render.yaml         # Render deployment config
├── .gitignore
└── README.md
```

---

## API reference

### `POST /`

Classifies a single email body.

**Request**
```json
{
  "email": "Congratulations! You have won $1,000,000. Reply now to claim."
}
```

**Response**
```json
{
  "isSpam": "true"
}
```

| `isSpam` | Meaning |
|---|---|
| `"true"` | Spam detected |
| `"false"` | Legitimate email (ham) |

**Live endpoint**
```
POST https://spamemaildetectionandsentimentclassifier.onrender.com/
```

> The Render free tier spins down after 15 min of inactivity. The first request after a cold start may take 30–50 seconds. Subsequent requests are instant.

---

## Run locally

### 1. Clone

```bash
git clone https://github.com/bhaumikmango/SpamEmailDetection.git
cd SpamEmailDetection
```

### 2. Create a virtual environment

```bash
python -m venv venv

# macOS / Linux
source venv/bin/activate

# Windows
venv\Scripts\activate
```

### 3. Install dependencies

```bash
pip install -r requirements.txt
```

### 4. Start the backend

```bash
python app.py
# → Running on http://localhost:5000
```

### 5. Open the frontend

```bash
# macOS
open index.html

# Linux
xdg-open index.html

# Windows
start index.html
```

Set the **API endpoint** field in the UI to `http://localhost:5000` and start classifying.

**Keyboard shortcut:** `Ctrl + Enter` (or `⌘ + Enter` on Mac) triggers analysis from inside the text area.

---

## Retrain the model

The full training pipeline lives in `ml13b.ipynb`.

```bash
pip install jupyter
jupyter notebook ml13b.ipynb
```

Run all cells top to bottom. The final cell exports the fitted pipeline to `file.pkl`, which the Flask app loads at startup.

---

## Deployment

### Backend — Render

Configured via `render.yaml`. Any push to `main` triggers an automatic redeploy.

```yaml
services:
  - type: web
    name: spamsentinel-api
    runtime: python
    buildCommand: "pip install -r requirements.txt"
    startCommand: "gunicorn app:app --workers 2 --bind 0.0.0.0:$PORT"
```

Manual setup: Render Dashboard → New Web Service → Connect GitHub repo → Instance Type: Free → Deploy.

### Frontend — Vercel

Single static file, zero config required.

```bash
npm i -g vercel
vercel --prod
```

Or drag-and-drop the repo folder at [vercel.com/new](https://vercel.com/new).

---

## Dependencies

```
flask
flask-cors
scikit-learn
numpy
gunicorn
```

---

## License

MIT © [bhaumikmango](https://github.com/bhaumikmango)