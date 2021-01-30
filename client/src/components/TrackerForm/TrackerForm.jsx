import React, { useState, useContext } from 'react';
import { TextField, Typography, Grid, Button, FormControl, InputLabel, Select, MenuItem } from '@material-ui/core';
import { v4 as uid } from 'uuid';
// import { useSpeechContext } from '@speechly/react-client';
// import Snackbar from '../../Snackbar/Snackbar';
import dateFormat from '../../utils/dateFormat';
import {TrackerContext} from '../../context/context';
// import { incomeCategories, expenseCategories } from '../../../constants/categories';

const initialState = {
  amount: '',
  stockName: '',
  type: 'Sale',
  date: dateFormat(new Date()),
};

const TrackerForm = () => {
    //accept reducer functions into component
  const { addTransaction } = useContext(TrackerContext);
  const [formData, setFormData] = useState(initialState);
//   const { segment } = useSpeechContext();
//   const [open, setOpen] = React.useState(false);

  const createTransaction = () => {
    const transaction=  { ...formData, amount: Number(formData.amount), id: uid() }

    //call function from context 
    addTransaction(transaction);
    
    //reset form after adding transaction
    setFormData(initialState);
  };

//   useEffect(() => {
//     if (segment) {
//       if (segment.intent.intent === 'add_expense') {
//         setFormData({ ...formData, type: 'Expense' });
//       } else if (segment.intent.intent === 'add_income') {
//         setFormData({ ...formData, type: 'Income' });
//       } else if (segment.isFinal && segment.intent.intent === 'create_transaction') {
//         return createTransaction();
//       } else if (segment.isFinal && segment.intent.intent === 'cancel_transaction') {
//         return setFormData(initialState);
//       }

//       segment.entities.forEach((s) => {
//         const category = `${s.value.charAt(0)}${s.value.slice(1).toLowerCase()}`;

//         switch (s.type) {
//           case 'amount':
//             setFormData({ ...formData, amount: s.value });
//             break;
//         //   case 'category':
//         //     if (incomeCategories.map((iC) => iC.type).includes(category)) {
//         //       setFormData({ ...formData, type: 'Income', category });
//         //     } else if (expenseCategories.map((iC) => iC.type).includes(category)) {
//         //       setFormData({ ...formData, type: 'Expense', category });
//         //     }
//         //     break;
//           case 'date':
//             setFormData({ ...formData, date: s.value });
//             break;
//           default:
//             break;
//         }
//       });

//       if (segment.isFinal && formData.amount && formData.category && formData.type && formData.date) {
//         createTransaction();
//       }
//     }
//   }, [segment]);

//   const selectedCategories = formData.type === 'Income' ? incomeCategories : expenseCategories;

  return (
        <div>
            <Grid container spacing={2}>
                {/* <Snackbar open={open} setOpen={setOpen} /> */}
                <Grid item xs={12}>
                    <Typography align="center" variant="subtitle2" gutterBottom>
                    {/* {segment ? (
                    <div className="segment">
                    {segment.words.map((w) => w.value).join(" ")}
                    </div>
                ) : null} */}
                    {/* {isSpeaking ? <BigTranscript /> : 'Start adding transactions'}  */}
                    </Typography>
                </Grid>
                <Grid item xs={6}>
                    <FormControl fullWidth>
                        <InputLabel>Transaction Type</InputLabel>
                        <Select value={formData.type} onChange={(e) => setFormData({ ...formData, type: e.target.value })} >
                            <MenuItem value="Purchase">Purchase</MenuItem>
                            <MenuItem value="Sale">Sale</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={6}>
                    <TextField type="text" label="Stock Name" value={formData.stockName} onChange={(e) => setFormData({ ...formData, stockName: e.target.value })} />
                </Grid>
                <Grid item xs={6}>
                    <TextField type="number" label="Amount" value={formData.amount} onChange={(e) => setFormData({ ...formData, amount: e.target.value })} fullWidth />
                </Grid>
                <Grid item xs={6}>
                    <TextField fullWidth label="date" type="date" value={formData.date} onChange={(e) => setFormData({ ...formData, date: dateFormat(e.target.value) })} />
                </Grid>
                <Button className="button" variant="outlined" color="primary" fullWidth onClick={createTransaction}>Create</Button>
            </Grid>            
        </div>
    )
}

export default TrackerForm
