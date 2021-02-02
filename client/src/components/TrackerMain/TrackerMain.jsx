import React from 'react'
import { Card, CardHeader, CardContent, Typography, Grid, Divider } from '@material-ui/core';
import {TrackerForm, TrackerList} from '../'
import './styles.scss';

const TrackerMain = () => {
    return (
        <div>
            <Card className="root" style={{backgroundColor: '#f7f7f6'}}>
                <CardHeader title="Stock Tracker" subheader="Keep track of stock purchase/sales" />
                <CardContent>
                    <Typography align="center" variant="h5">Total Balance ${}</Typography>
                    <Divider className="divider" />
                    <TrackerForm />
                </CardContent>
                <CardContent className="cartContent">
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <TrackerList />
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
        </div>
    )
}

export default TrackerMain
