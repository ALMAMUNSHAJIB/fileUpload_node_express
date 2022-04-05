import express from "express";
import userController from "../controllers/userController.js";
import fileUpload from "../utils/fileUpload.js";

const router = express.Router();

router.post('/user', fileUpload("./storage/images"), userController.createUser);


export default router;