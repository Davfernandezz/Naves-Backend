import { Router } from "express";
import { auth } from "../../middlewares/auth";
import { generateDailyReport, getRoomUsageStats } from "./administration.controller";


const router = Router()

router.post('/daily-report',auth, generateDailyReport)
router.get('/reports',auth, )
router.get('/room-usage',auth, getRoomUsageStats)

export { router }