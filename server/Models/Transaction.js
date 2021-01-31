import mongoose from 'mongoose';

const transactionSchema = mongoose.Schema({
    type:String,
    stockName:String,
    amount:Number,
    date: {
        type: Date,
        default: new Date(),
    },
})

var Transactions = mongoose.model('Transactions', transactionSchema);

export default Transactions;