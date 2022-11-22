import express from "express";

const globalRouter = express.Router();

const handleHome = (req, res) => res.send("Home");
const handleArtwoks = (req, res) => res.send("Our All artworks.");
const handleEdition = (req, res) => res.send("Our edittion line.");
const handleJoin = (req, res) => res.send("Join our web");
const handlelogin = (req, res) => res.send("login page");

globalRouter.get("/", handleHome);
globalRouter.get("/artworks", handleArtwoks);
globalRouter.get("/edition", handleEdition);
globalRouter.get("/join", handleJoin);
globalRouter.get("/login", handlelogin);

export default globalRouter;
