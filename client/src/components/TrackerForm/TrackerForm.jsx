import React, { useState, useContext, useEffect } from 'react';
import { TextField, Typography, Grid, Button, FormControl, InputLabel, Select, MenuItem } from '@material-ui/core';
import { v4 as uid } from 'uuid';
import { useSpeechContext } from '@speechly/react-client';
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
//segment of voice
  const { segment } = useSpeechContext();
//const [open, setOpen] = React.useState(false);

  const createTransaction = () => {
    if(!Number(formData.amount) || !formData.date.includes('-')) return;
    const transaction=  { ...formData, amount: Number(formData.amount), id: uid() }

    //call function from context 
    addTransaction(transaction);
    
    //reset form after adding transaction
    setFormData(initialState);
  };

//when voice segment is changes, useEffect will be called
useEffect(() => {
    if(segment){
        //conditional  checking of intent to determine type of transaction to be created
        if(segment.intent.intent === "add_sale"){
            setFormData({...formData, type:"Sale"});
        } 
        else if(segment.intent.intent === "add_purchase"){
            setFormData({...formData, type:"Purchase"});
        }
        //checks if segment is finished or user has stopped speaking to determine creation or deletion of transaction
        else if(segment.isFinal && segment.intent.intent === "create_transaction"){
            return createTransaction();
        }
        else if(segment.isFinal && segment.intent.intent === "cancel_transaction"){
            return setFormData(initialState);
        }
        segment.entities.forEach((s) => {
            //capitalize first letter of each word in sentence to match entity array of speechly
            const stockName  = `${s.value.replace(/(^\w{1})|(\s+\w{1})/g, letter => letter.toUpperCase())}`;

            switch (s.type) {
            //make changes in form based on entity received from speech segment
                case 'amount':
                    setFormData({ ...formData, amount: s.value });
                    break;
                case 'stockname':
                    setFormData({ ...formData, stockName });
                    break;
                case 'date':
                    setFormData({ ...formData, date: s.value });
                    break;
                default:
                    break;
                }
          });

        if (segment.isFinal && formData.amount && formData.stockName && formData.type && formData.date) {
            createTransaction();
        }
    }
},[segment, formData]);

     
  return (
        <div>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Typography align="center" variant="subtitle2" gutterBottom>
                        {segment && segment.words.map((w) => w.value).join(" ")}
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
                    <TextField fullWidth label="Date" type="date" value={formData.date} onChange={(e) => setFormData({ ...formData, date: dateFormat(e.target.value) })} />
                </Grid>
                <Button className="button" variant="outlined" color="primary" fullWidth onClick={createTransaction}>Create</Button>
            </Grid>            
        </div>
    )
}

export default TrackerForm
