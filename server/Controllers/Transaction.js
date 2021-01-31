import express from 'express';
import mongoose from 'mongoose';
import Transactions from '../Models/Transaction'

const router = express.Router();

export const getTransactions = async (req, res) => { 
    try {
        const transactions = await Transactions.find();
        res.status(200).json(transactions);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const getTransaction = async (req, res) => { 
    const { id } = req.params;

    try {
        const transaction = await Transactions.findById(id);
        res.status(200).json(transaction);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const createTransaction = async (req, res) => {
    const { type, stockName, amount, date } = req.body;
    const newTransaction = new Transactions({ type, stockName, amount, date })
    try {
        await newTransaction.save();
        res.status(201).json(newTransaction);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

export const updateTransaction = async (req, res) => {
    const { id } = req.params;
    const { type, stockName, amount, date } = req.body;
    
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No transaction with id: ${id}`);

    const updatedTransaction = { type, stockName, amount, date, _id: id };

    await Transactions.findByIdAndUpdate(id, updatedTransaction, { new: true });

    res.json(updatedTransaction);
}

export const deleteTransaction = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No transaction with id: ${id}`);

    await Transactions.findByIdAndRemove(id);

    res.json({ message: "transaction deleted successfully." });
}

export default router;