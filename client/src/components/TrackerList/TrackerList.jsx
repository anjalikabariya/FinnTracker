import React from 'react'
import { List as MUIList, ListItem, ListItemAvatar, Avatar, ListItemText, ListItemSecondaryAction, IconButton, Slide } from '@material-ui/core';
import { Delete, MoneyOff } from '@material-ui/icons';
import './styles.scss';

const TrackerList = () => {
    const transactions =[{id:1, type:"sale", stockName:"AAPL", amount:100, date:new Date().getDate()}, 
                        {id:2, type:"sale", stockName:"TSLA", amount:50, date:new Date().getDate()}, 
                        {id:3, type:"purchase", stockName:"MSFT", amount:200, date:new Date().getDate()}];
    return (
        <div>
            <MUIList dense={false} className="list">
                {transactions && transactions.map((transaction) => (
                    <Slide direction="down" in mountOnEnter unmountOnExit key={transaction.id}>
                    <ListItem>
                        <ListItemAvatar>
                            <Avatar>
                                <MoneyOff />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary={transaction.stockName} secondary={`$${transaction.amount} - ${transaction.date}`} />
                        <ListItemSecondaryAction>
                            <IconButton edge="end" aria-label="delete">
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
