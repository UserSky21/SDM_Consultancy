const express = require("express");
const app = express();
const cors = require("cors");

const { Detail } = require("./model");

app.use(express.json());
app.use(cors());


app.post("/contact", async (req, res) => {
  try {
    const { name, email, number, service, msg } = req.body;

    const saved = await Detail.create({
      name:name,
      email:email,
      number:number,
      service:service,
      message: msg,
      requestDate:new Date()
    });

    console.log("✅ Saved to DB:", saved);  // Add this line

    res.status(201).json({
      msg: "Details added successfully",
    });
  } catch (error) {
    console.error("❌ Error saving details:", error);
    res.status(500).json({
      msg: "Something went wrong",
      error: error.message,
    });
  }
});

app.get("/details", async (req, res) => {
  try {
    const all = await Detail.find();
    res.json(all);
  } catch (err) {
    res.status(500).json({ error: "Fetch failed" });
  }
});



app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});