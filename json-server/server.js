const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 8000;

// Allow fetch from your HTML
app.use(cors());

// Hardcoded JSON (same content as your current variable)
const data = {
  fixtures: [
    { id: 1, teamA: "A", teamB: "B" }
  ]
};

app.get("/fixtures", (req, res) => {
  res.json(data);
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
