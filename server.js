const express = require("express");
const app = express();

// Middleware to parse JSON payloads
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Route to handle the incoming webhook
app.post("/webhook", (req, res) => {
  try {
    const payload = req.body; // The received payload
    console.log("Secret Code:", payload);
    res.status(200).send("Secret Code received successfully");
  } catch (error) {
    console.error("Error handling webhook:", error);
    res.status(500).send("An error occurred");
  }
});

// Start the server
const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Webhook server is running on port ${port}`);
});
