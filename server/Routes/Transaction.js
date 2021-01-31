import express from 'express';

import { getTransactions, getTransaction, createTransaction, updateTransaction, deleteTransaction } from '../controllers/Transactions.js';

const router = express.Router();

router.get('/', getTransactions);
router.post('/', createTransaction);
router.get('/:id', getTransaction);
router.patch('/:id', updateTransaction);
router.delete('/:id', deleteTransaction);

export default router;