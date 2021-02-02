import React, { useState, useContext } from 'react';
import { TextField, Grid, Button, FormControl, InputLabel, Select, MenuItem } from '@material-ui/core';
import { v4 as uid } from 'uuid';
import dateFormat from '../../utils/dateFormat';
import {TrackerContext} from '../../context/context';

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

  const createTransaction = () => {
    if(!Number(formData.amount) || !formData.date.includes('-')) return;
    const transaction=  { ...formData, amount: Number(formData.amount), id: uid() }

    //call function from context 
    addTransaction(transaction);
    
    //reset form after adding transaction
    setFormData(initialState);
  };     
  return (
        <div>
            <Grid container spacing={2} >
                <Grid item xs={6}>
                    <FormControl fullWidth>
                        <InputLabel>Transaction Type</InputLabel>
                        <Select value={formData.type} onChange={(e) => setFormData({ ...formData, type: e.target.value })} >
                            <MenuItem value="Purchase">Purchase</MenuItem>
                            <MenuItem value="Sale">Sale</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={6} >
                    <TextField type="text" label="Stock Name" value={formData.stockName} onChange={(e) => setFormData({ ...formData, stockName: e.target.value })} />
                </Grid>
                <Grid item xs={6}>
                    <TextField type="number" label="Amount" value={formData.amount}  onChange={(e) => setFormData({ ...formData, amount: e.target.value })} fullWidth />
                </Grid>
                <Grid item xs={6} >
                    <TextField variant="outlined" fullWidth label="Date" type="date" value={formData.date} onChange={(e) => setFormData({ ...formData, date: dateFormat(e.target.value) })} />
                </Grid>
                <Button className="button" variant="outlined" fullWidth onClick={createTransaction}>Create</Button>
            </Grid>            
        </div>
    )
}

export default TrackerForm
