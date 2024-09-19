import { Router } from "express";
import { registerEntry } from "./acccess.controller";
import { auth } from "../../middlewares/auth";


const router = Router()

router.post('/entry',auth, registerEntry)

export { router }