import React from 'react'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

function InfoCard({title, value}) {
    return (
        <div>
            <Card>
                <CardContent>
                    <Typography>
                        {title}
                    </Typography>
                    <Typography>
                        {value}    
                    </Typography>
                </CardContent>
            </Card>
        </div>
    )
}

export default InfoCard
