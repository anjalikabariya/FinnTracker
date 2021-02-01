import React, { useEffect, useState } from 'react';
import { Grid } from '@material-ui/core';
import { Hidden, CircularProgress } from '@material-ui/core';
import withWidth from '@material-ui/core/withWidth';
import {TrackerDetails, TrackerMain} from '../../components'
import {Provider} from '../../context/context';
import { SpeechProvider } from '@speechly/react-client';
import { PushToTalkButton, PushToTalkButtonContainer, ErrorPanel } from '@speechly/react-ui';
import './styles.scss';
import firebase from '../../firebase'

const TrackerPage = (props) => {
    if(!(firebase.getCurrentUsername())){
        //check if user logged in 
        alert('please login');
        props.history.replace('/login');
        return null;
    }

    const [quote, setQuote] = useState('')
    useEffect(() => {
        firebase.getCurrentUserQuote().then(setQuote)
    })
    
    return (
        <SpeechProvider appId="fa445f2d-2c6c-432a-8d51-d5472b7eba8f" language="en-US">
            <Provider>
                <div>
                    <Grid className="grid" container spacing={0} alignItems="center" justify="center" style={{ height: '100vh'}}>
                        <Hidden mdDown>
                            <Grid item xs={12} sm={4}>
                                <TrackerDetails title="Purchase" />
                            </Grid>    
                        </Hidden>
                        <Grid item xs={12} sm={3}>
                            <h1>hello {firebase.getCurrentUsername()} </h1>
                            <h2>{quote ? `"${quote}"` : <CircularProgress /> } </h2>
                            <TrackerMain />
                        </Grid>
                        <Hidden lgUp>
                            <Grid item xs={12} sm={4}>
                                <TrackerDetails title="Purchase" />
                            </Grid>
                        </Hidden>
                        <Grid item xs={12} sm={4}>
                            <TrackerDetails title="Sale" />
                        </Grid>
                    </Grid>  
                    <PushToTalkButtonContainer>
                        <PushToTalkButton />
                        <ErrorPanel />
                    </PushToTalkButtonContainer>              
                </div>
            </Provider>
        </SpeechProvider>
    )
}

export default withWidth()(TrackerPage);
