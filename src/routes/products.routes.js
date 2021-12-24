import { Router } from "express";
import {
  createProduct,
  getProducts,
  getProductById,
  updateProductById,
  deleteProductById,
} from "../controllers/products.controller";

import { verifyToken, isModerator, isAdmin } from '../middlewares'


const router = Router();

router.get("/", getProducts);
router.post("/", [verifyToken, isModerator ] ,createProduct);
router.get("/:id", getProductById);
router.put("/:id", [verifyToken, isAdmin] ,updateProductById);
router.delete("/:id", [verifyToken, isAdmin] ,deleteProductById);

export default router;
