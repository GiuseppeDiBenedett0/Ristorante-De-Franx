import express from "express";

const API_ROOT = '/api';

import { getDishes, getDishById, postDish, patchDish, deleteDish, getContacts, postContact } from "../controllers/controller.js";

const router = express.Router();

router.get(`${API_ROOT}/dishes`, getDishes);
router.get(`${API_ROOT}/dish/:id`, getDishById);
router.post(`${API_ROOT}/dish`, postDish);
router.patch(`${API_ROOT}/dish/:id`, patchDish);
router.delete(`${API_ROOT}/dish/:id`, deleteDish);
router.get(`${API_ROOT}/contacts`, getContacts);
router.post(`${API_ROOT}/contact`, postContact);

export default router;