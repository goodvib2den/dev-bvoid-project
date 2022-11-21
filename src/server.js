import express from "express";
import morgan from "morgan";

const PORT = 4000;

const app = express();
const logger = morgan("dev");

app.use(logger);

// routers
const globalRouter = express.Router();
const artworksRouter = express.Router();

// controller
const handleHome = (req, res) => res.send("Home");
const handleArtwoks = (req, res) => res.send("Our All artworks.");
const handleToyArtworks = (req, res) => res.send("Here is art toys.");

globalRouter.get("/", handleHome);
artworksRouter.get("/", handleArtwoks);
artworksRouter.get("/toy", handleToyArtworks);

// route
app.use("/", globalRouter);
app.use("/artworks", artworksRouter);

const handleListening = () =>
  console.log(`✅ Server listeting on port ${PORT}`);

app.listen(PORT, handleListening);
