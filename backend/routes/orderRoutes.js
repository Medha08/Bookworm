import express from 'express';
import {
  addOrderItems,
  getOrderItem,
  updateOrderToPaid,
} from '../controllers/orderControllers.js';
import { protect } from '../middlewares/authMiddleware.js';

const router = express.Router();

router.route('/').post(protect, addOrderItems);
router.route('/:id').get(protect, getOrderItem);
router.route('/:id/pay').put(protect, updateOrderToPaid);

export default router;
