import express from "express";

const app = express();

const PORT = 4000;

const handleListening = () =>
  console.log(`✅ Server listeting on port ${PORT}`);

app.listen(PORT, handleListening);
