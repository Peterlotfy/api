import express, { Router } from "express";
import Camb from "../models/Camb.js";
import {verifyAdmin} from "../utils/verifyToken.js";
import { countByCity, createCamb, deleteCamb, getCamb, getCambs, updateCamb , countByType , } from "../controllers/camb.js";

const router = express.Router();


//Create
router.post("/",verifyAdmin,createCamb);

//Update
router.put("/:id",verifyAdmin,updateCamb);

//Delete
router.delete("/:id",verifyAdmin,deleteCamb);

//Get
router.get("/find/:id",getCamb);

//Get All
router.get("/",getCambs);
router.get("/countByCity",countByCity);
router.get("/countByType",countByType);


export default router