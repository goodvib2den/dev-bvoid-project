import express from "express";
import morgan from "morgan";

// Routers
import globalRouter from "./router/globalRouter";
import artworksRouter from "./router/artworksRouter";

const PORT = 4000;

const app = express();
const logger = morgan("dev");

app.use(logger);

// root URL
app.use("/", globalRouter);
app.use("/artworks", artworksRouter);

const handleListening = () =>
  console.log(`✅ Server listeting on port ${PORT}`);

app.listen(PORT, handleListening);
