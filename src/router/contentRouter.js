import express from "express";
import {
  handleArtistnews,
  handleEditorial,
} from "../controller/contentController";

const contentRouter = express.Router();

contentRouter.get("/editorial", handleEditorial);
contentRouter.get("/artist_news", handleArtistnews);

export default contentRouter;
