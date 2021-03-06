import express from 'express';
import {
  addOrderItems,
  getOrderItem,
  updateOrderToPaid,
  getUserOrders,
} from '../controllers/orderControllers.js';
import { protect } from '../middlewares/authMiddleware.js';

const router = express.Router();

router.route('/').post(protect, addOrderItems);
router.route('/myorders').get(protect, getUserOrders);
router.route('/:id').get(protect, getOrderItem);
router.route('/:id/pay').put(protect, updateOrderToPaid);

export default router;
