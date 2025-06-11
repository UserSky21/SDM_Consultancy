const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://SDM:SDM123@cluster0.itxap30.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0/CHECKSDM",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
)


.then(() => console.log("✅ MongoDB connected"))
.catch((err) => console.error("❌ MongoDB connection error:", err));

const detailSchema = new mongoose.Schema({
  name: String,
  email: String,
  number: String,
  service: String,
  message: String,
  requestDate: {
  type: Date,
  default: Date.now
}
});

const Detail = mongoose.model("Detail", detailSchema);

module.exports = { Detail };
