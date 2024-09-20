import { Router } from "express";
import { auth } from "../../middlewares/auth";
import { getCurrentAccess } from "./person.controller";


const router = Router()

router.get('/:id/current-access',auth, getCurrentAccess)

export { router }