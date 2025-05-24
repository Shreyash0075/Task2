const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

const quotes = [
  "The best way to predict the future is to create it.",
  "Success is not final, failure is not fatal: it is the courage to continue that counts.",
  "The only limit to our realization of tomorrow is our doubts of today.",
  "Act as if what you do makes a difference. It does.",
  "Believe you can and you’re halfway there.",
];

app.get("/quote", (req, res) => {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  res.json({ text: quotes[randomIndex] });
});

app.listen(5000, () => console.log("Server running on port 5000"));
