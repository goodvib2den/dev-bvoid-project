import express from "express";
import morgan from "morgan";

const PORT = 4000;

const app = express();
const logger = morgan("dev");

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
