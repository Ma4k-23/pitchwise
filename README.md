# ⚡ PitchWise - Startup Evaluation Platform

PitchWise is an intelligent startup evaluation tool that enables aspiring entrepreneurs to assess their business ideas through both **manual scoring** and **AI-powered analysis** using a local Large Language Model (LLM) — [Mistral](https://ollama.com/library/mistral) via [Ollama](https://ollama.com/).

> 🚀 Built by **Swapnil Naik** — Empowering founders with insight before the pitch!

---

## 📌 Features

- ✅ **Manual Evaluation** – Score your startup on key business parameters.
- 🤖 **AI Evaluation** – Analyze ideas using local LLM (Mistral via Ollama).
- 💡 **Startup Ideas** – View and explore sample business ideas.
- 📄 **PDF Report Generation** – Download a structured report of manual scores.

---

## 🛠️ Tech Stack

| Frontend         | Backend         | AI Engine        |
|------------------|------------------|------------------|
| React + Vite     | Node.js + Express | Ollama (Mistral) |
| Tailwind CSS     | REST API         | Local LLM        |

---

## 📸 UI Screenshots

## 📸 UI Screenshots

<details>
  <summary>Click to expand UI walkthrough</summary>

  <br>

## 📸 Screenshots

### 🏠 Home Page
![Home](./screenshots/1.png)  
Clean and modern landing page highlighting the power of local AI and manual scoring for startup evaluations.

---

### ⚙️ Choose Your Evaluation Method
![Evaluation Options](./screenshots/2.png)  
Users can choose between:
- **Manual Evaluation** (score key metrics)
- **AI Evaluation** (get insights from local AI)
- **Startup Ideas** (explore innovative ideas)

---

### 🔄 How It Works
![How It Works](./screenshots/3.png)  
Simple 3-step process:
1️⃣ Choose your method  
2️⃣ Input your idea  
3️⃣ Get actionable insights

---

### ❓ Why Choose PitchWise
![Why PitchWise](./screenshots/4.png)  
Key highlights:
- ✅ 100% Privacy-First  
- ⚡ Lightning Fast (local model)  
- 🧠 Expert Insights  
- 📊 Actionable Results

---

### 📝 Manual Startup Evaluation
![Manual Evaluation](./screenshots/5.png)  
Rate your startup on critical dimensions:  
- Innovation  
- Scalability  
- Market Demand  
- Revenue Potential  
- Team Capability  
➡️ Get an overall score and generate a **PDF Report**

---

### 🤖 AI Evaluation (Powered by Ollama + Mistral)
![AI Evaluation](./screenshots/6.png)  
Enter your startup description and get AI-powered insights – all running locally for complete privacy.

---

### 💡 Startup Ideas & Inspiration
![Startup Ideas](./screenshots/7.png)  
Browse trending startup ideas categorized by:
- FinTech, EdTech, HealthTech, Green Tech, SaaS, and more  
Each idea includes difficulty level and a brief concept summary.

</details>


---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/Ma4k-23/PitchWise.git
cd pitchwise

2. Setup and Run Backend
Install dependencies:

bash
cd backend
npm install

Start Ollama with Mistral model:

bash
ollama run mistral

Then start the backend server:
bash
node server.js

📍 Backend runs at: http://localhost:5000

3. Setup and Run Frontend
In a separate terminal:

bash
cd frontend
npm install
npm run dev

🌐 App runs at: http://localhost:5173

🧠 How AI Is Used
When a startup idea is submitted, a prompt is sent to the local LLM (Mistral) using Ollama.

The AI responds with a structured evaluation on:

Innovation

Market Demand

Scalability

Feasibility

These scores are displayed along with actionable feedback and suggestions.

🔒 No cloud APIs are used — all computation is done locally.

📝 PDF Report
Users can generate a PDF report from the manual evaluation section. It includes:

Scores per parameter

Total score and rating

🙋‍♂️ Author
Made with 💻 by Swapnil Naik

