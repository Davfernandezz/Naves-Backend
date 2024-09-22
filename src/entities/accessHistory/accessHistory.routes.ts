import { Router } from "express";
import { auth } from "../../middlewares/auth";
import { getAccessHistories } from "./accessHitory.controller";

const router = Router()

router.get('/',auth, getAccessHistories)

export { router }