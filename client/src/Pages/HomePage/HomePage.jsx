import {SearchForm} from '../../components';
import React, { Component } from 'react'
import Axios from 'axios';
import CanvasJS from "canvasjs-react-charts"

const API_URL = "https://finnhub.io/api/v1/";

export class HomePage extends Component {
    state = {
        quote : ""
      }
      getQuote = (symbol) => {
        Axios.get(API_URL+`/stock/candle?`, {params: {
          symbol: symbol,
          token: "c04d8tn48v6u76cjevm0",
          resolution: 15,
          from: 1605543327,
          to: 1605629727
          }})
          .then(response => {
            console.log(response.data);
            this.setState({quote:response.data})
            console.log(this.state.quote);
          })
          .catch(error => console.log(error));
      } 
    render() {
        return (
            <div>
                <SearchForm submitHandler={this.getQuote} />
                <CanvasJsChart 
                    options={{
                        data:[{
                            type:"candlestick",
                            
                        }]
                    }}
                />    
            </div>
        )
    }
}

export default HomePage
