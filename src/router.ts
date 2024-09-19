import { Router } from "express";
import { router as authRoutes } from './entities/auth/auth.routes'
import { router as accessesRoutes } from './entities/access/access.routes'

const router = Router()

router.use('/auth', authRoutes)
router.use('/accesses', accessesRoutes)

export default router