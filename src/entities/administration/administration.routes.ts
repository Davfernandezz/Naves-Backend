import { Router } from "express";
import { auth } from "../../middlewares/auth";
import { generateDailyReport, getDateReport, getRoomUsageStats } from "./administration.controller";


const router = Router()

router.post('/daily-report',auth, generateDailyReport)
router.get('/room-usage',auth, getRoomUsageStats)
router.get('/reports',auth, getDateReport)

export { router }