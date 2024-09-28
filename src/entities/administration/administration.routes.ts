import { Router } from "express";
import { auth } from "../../middlewares/auth";
import { generateDailyReport } from "./administration.controller";


const router = Router()

router.post('/daily-report',auth, generateDailyReport)
router.get('/reports',auth, )
router.get('/room-usage',auth, )

export { router }