import express from "express";

const PORT = 4000;

const app = express();

app.get("/", (req, res) => {
  return res.send("Here is home");
});

const handleListening = () =>
  console.log(`✅ Server listeting on port ${PORT}`);

app.listen(PORT, handleListening);
