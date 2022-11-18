import express from "express";

const PORT = 4000;

const app = express();

// middleware

// controller
const handleHome = (req, res) => {
  return res.send("Here is MAIN HOMEPAGE");
};

// route
app.use(logger);
app.get("/", handleHome);

const handleListening = () =>
  console.log(`✅ Server listeting on port ${PORT}`);

app.listen(PORT, handleListening);
