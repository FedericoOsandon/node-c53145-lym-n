import { Router } from "express";
import usersController from "../controllers/users.controller.js";

const router = Router();
// a08 deber{ia solo admin
router.get('/',usersController.getUsers);
router.get('/:uid',usersController.getUser);
// a09 loggin and monitoring

export default router;