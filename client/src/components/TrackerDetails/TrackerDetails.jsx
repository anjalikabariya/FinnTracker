import React from 'react';
import { Card, CardHeader, CardContent, Typography } from '@material-ui/core';
import { Doughnut } from 'react-chartjs-2';
import './styles.scss';
import useTransactions from '../../useTransactions';


const TrackerDetails = ({ title, subheader }) => {
  
  const { total, chartData } = useTransactions(title);
  return (
    <Card className={title === 'Purchase' ? `purchase` : `sale`}>
      <CardHeader title={title} subheader={subheader} />
      <CardContent>
        <Typography variant="h5">${total}</Typography>
        <Doughnut data={chartData} />
      </CardContent>
    </Card>
  );
};

export default TrackerDetails;