import React, {useContext} from 'react';
import { List as MUIList, ListItem, ListItemAvatar, Avatar, ListItemText, ListItemSecondaryAction, IconButton, Slide } from '@material-ui/core';
import { Delete, MoneyOff } from '@material-ui/icons';
import {TrackerContext} from '../../context/context';
import './styles.scss';

const TrackerList = () => {
    const { transactions, deleteTransaction } = useContext(TrackerContext);

    return (
        <div>
            <MUIList dense={false} className="list">
                {transactions && transactions.map((transaction) => (
                    <Slide direction="down" in mountOnEnter unmountOnExit key={transaction.id}>
                    <ListItem>
                        <ListItemAvatar>
                            <Avatar style={transaction.type==="Sale" ? {backgroundColor:'green'} : {backgroundColor:'red'}}>
                                <MoneyOff />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary={transaction.stockName} secondary={`$${transaction.amount} - ${transaction.date}`} />
                        <ListItemSecondaryAction>
                            <IconButton edge="end" aria-label="delete"  onClick={() => deleteTransaction(transaction.id)}>
                                <Delete />
                            </IconButton>
                        </ListItemSecondaryAction>
                    </ListItem>
                    </Slide>
                ))}
                </MUIList>            
        </div>
    )
}

export default TrackerList
