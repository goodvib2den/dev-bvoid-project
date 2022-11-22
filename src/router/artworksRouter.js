import express from "express";
import {
  handleFrame,
  handleToy,
  handleObject,
  handleTextile,
  handleHomeware,
} from "../controller/artworksController";

const artworksRouter = express.Router();

artworksRouter.get("/toy", handleToy);
artworksRouter.get("/textile", handleTextile);
artworksRouter.get("/object", handleObject);
artworksRouter.get("/frame", handleFrame);
artworksRouter.get("/homeware", handleHomeware);

export default artworksRouter;

// COMMIT TEST
