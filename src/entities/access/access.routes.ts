import { Router } from "express";
import { registerEntry, registerExit } from "./acccess.controller";
import { auth } from "../../middlewares/auth";


const router = Router()

router.post('/entry',auth, registerEntry)
router.post('/exit',auth, registerExit)

export { router }
