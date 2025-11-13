
// proxy-server.js
const express = require("express");
const fetch = require("node-fetch"); // v2
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// IMPORTANT — put your REAL webhook URL here:
const N8N_WEBHOOK = "https://readyourgit.app.n8n.cloud/webhook/read-git";

app.post("/api/read-git", async (req, res) => {
  try {
    console.log("➡ Forwarding request to n8n:", req.body);

    const response = await fetch(N8N_WEBHOOK, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(req.body),
    });

    const data = await response.json();
    console.log("✔ n8n responded:", data);

    res.json(data);
  } catch (err) {
    console.error("❌ Proxy error:", err);
    res.status(500).json({ error: "Proxy failed" });
  }
});

app.listen(4000, () => {
  console.log("🚀 Proxy server RUNNING at http://localhost:4000");
});
