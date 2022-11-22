import express from "express";

const contentRouter = express.Router();

const handleEditorial = (req, res) =>
  res.send("Here is our editorial content page");
const handleArtistnews = (req, res) => res.send("Artist news feed");

contentRouter.get("/editorial", handleEditorial);
contentRouter.get("/artist_news", handleArtistnews);

export default contentRouter;
