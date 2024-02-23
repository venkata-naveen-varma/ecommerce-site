import express from "express";
import userRoutes from "./userRoutes.js";
import productRoutes from "./productRoutes.js";

const router = express.Router();

router.get('/user', userRoutes);
router.get('/product', productRoutes);

export default router;