import express from "express";

const API_ROOT = '/api';

import { getDish, getDishById, postDish, patchDish, deleteDish } from "../controllers/controller.js";

const router = express.Router();

router.get(`${API_ROOT}/dish`, getDish);
router.get(`${API_ROOT}/dish/:id`, getDishById);
router.post(`${API_ROOT}/dish`, postDish);
router.patch(`${API_ROOT}/dish/:id`, patchDish);
router.delete(`${API_ROOT}/dish/:id`, deleteDish);

export default router;