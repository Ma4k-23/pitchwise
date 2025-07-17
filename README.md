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

  🔹 **1. Home Page** – Landing interface of PitchWise  
  ![](./screenshots/1.png)

  🔹 **2. Startup Idea Submission** – Input box to submit your startup idea  
  ![](./screenshots/2.png)

  🔹 **3. Manual Evaluation** – Rate the idea on parameters like Innovation, Team, Revenue  
  ![](./screenshots/3.png)

  🔹 **4. AI Evaluation Prompt** – AI analyzes the idea using a local LLM  
  ![](./screenshots/4.png)

  🔹 **5. LLM Evaluation Result** – AI gives scores and suggestions based on Mistral  
  ![](./screenshots/5.png)

  🔹 **6. PDF Report Generation** – One-click button to download detailed evaluation  
  ![](./screenshots/6.png)

  🔹 **7. Dashboard Overview** – Complete interface showing scores, insights, and options  
  ![](./screenshots/7.png)

</details>


---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/Ma4k-23/pitchwise.git
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

