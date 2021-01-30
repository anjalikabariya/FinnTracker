import React from 'react';
import { Card, CardHeader, CardContent, Typography } from '@material-ui/core';
// import { Doughnut } from 'react-chartjs-2';

import './styles.scss';
// import useTransactions from '../../useTransactions';

const TrackerDetails = ({ title, subheader }) => {
//   const { total, chartData } = useTransactions(title);
  return (
    <Card className={title === 'Stocks Sold' ? `purchase` : `sale`}>
      <CardHeader title={title} subheader={subheader} />
      <CardContent>
        <Typography variant="h5">$50</Typography>
        {/* <Doughnut data={chartData} /> */}
      </CardContent>
    </Card>
  );
};

export default TrackerDetails;