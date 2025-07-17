const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const axios = require("axios");

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.post("/analyze", async (req, res) => {
  const { idea } = req.body;

  const prompt = `Evaluate the following startup idea:
"${idea}"
Provide scores (out of 10) for:
- Innovation
- Market Potential
- Scalability
- Feasibility

Also include a brief analysis (2-3 sentences).`;

  try {
    const response = await axios.post("http://localhost:11434/api/generate", {
      model: "mistral",
      prompt,
      stream: false,
    });

    res.json({ result: response.data.response });
  } catch (err) {
    res.status(500).json({ error: "LLM server error: " + err.message });
  }
});

app.listen(5000, () => {
  console.log("🚀 LLM API running at http://localhost:5000");
});
