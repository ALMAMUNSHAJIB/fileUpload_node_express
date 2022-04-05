import express from "express";
import userController from "../controllers/userController.js";
import fileUpload from "../utils/fileUpload.js";

const router = express.Router();

router.post('/user', fileUpload("./storage/images"), userController.createUser);
router.post('/update-user/:id', fileUpload("./storage/images"), userController.updateUserById);
router.delete('/delete-user/:id', fileUpload("./storage/images"), userController.deleteUserById);



export default router;