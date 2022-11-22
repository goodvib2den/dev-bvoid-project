import express from "express";

const artworksRouter = express.Router();

// const handleArtwoks = (req, res) => res.send("Our All artworks.");
const handleToy = (req, res) => res.send("Here is art toys.");
const handleTextile = (req, res) => res.send("Here is textile");
const handleObject = (req, res) => res.send("Here is object");
const handleFrame = (req, res) => res.send("Here is frame");
const handleHomeware = (req, res) => res.send("Here is homeware");

// artworksRouter.get("", handleArtwoks);
artworksRouter.get("/toy", handleToy);
artworksRouter.get("/textile", handleTextile);
artworksRouter.get("/object", handleObject);
artworksRouter.get("/frame", handleFrame);
artworksRouter.get("/homeware", handleHomeware);

export default artworksRouter;
