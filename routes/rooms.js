import express from "express";
import { updateRoom , deleteRoom , createRoom , getRoom , getRooms } from "../controllers/room.js";
import { verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();
//Create
router.post("/:campid",verifyAdmin,createRoom);
//Update
router.put("/:id",verifyAdmin,updateRoom);
//Delete
router.delete("/:id/:cambid",verifyAdmin,deleteRoom);
//Get
router.get("/:id",getRoom);
//Get All
router.get("/",getRooms);

export default router;
