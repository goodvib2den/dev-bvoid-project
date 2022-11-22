import express from "express";
import morgan from "morgan";

// Routers
import globalRouter from "./router/globalRouter";
import artworksRouter from "./router/artworksRouter";
import contentRouter from "./router/contentRouter";

const PORT = 4000;

const app = express();
const logger = morgan("dev");

app.use(logger);

// root URL
app.use("/", globalRouter);
app.use("/artworks", artworksRouter);
app.use("/content", contentRouter);

const handleListening = () =>
  console.log(`✅ Server listeting on port ${PORT}`);

app.listen(PORT, handleListening);
