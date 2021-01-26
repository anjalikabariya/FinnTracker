import {SearchForm} from '../../components';
import React, { Component } from 'react'
import Axios from 'axios';
import CanvasJSReact from "canvasjs-react-charts";
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

const API_URL = "https://finnhub.io/api/v1/";

export class HomePage extends Component {
    state = {
        quote : ""
      }
    componentDidMount = () => {
        this.getQuote("AAPL")
    }
    getQuote = (symbol) => {
        Axios.get(API_URL+`/stock/candle?`, {params: {
            symbol: symbol,
            token: "c04d8tn48v6u76cjevm0",
            resolution: 1,
            from: Math.floor((new Date().setUTCFullYear(new Date().getUTCFullYear()-1)) / 1000),
            to: Math.floor((new Date().setUTCHours(new Date().getUTCHours()-1)) / 1000),
            }})
            .then(response => {
                console.log((new Date().setUTCHours(new Date().getUTCHours()-1)) / 1000)
                console.log(response.data);
                this.setState({
                    quote:this.formatData(response.data)
                })
            console.log(this.state.quote);
            })
            .catch(error => console.log(error));
        } 
    formatData = (data) => {
        const formattedData = []
        for(let i=0; i<Object.entries(data)[0][1].length;i++){
            formattedData[i] = {
                "close":Object.entries(data)[0][1][i+1],
                "high":Object.entries(data)[1][1][i+1],
                "low":Object.entries(data)[2][1][i+1],
                "open":Object.entries(data)[3][1][i+1],
                "status":Object.entries(data)[4][1],
                "date":Object.entries(data)[5][1][i+1],
                "volume":Object.entries(data)[6][1][i+1]
            }
        }
        return formattedData;
    }
    render() {
        const stockData = this.state.quote;
        return (
            <div>
                <SearchForm submitHandler={this.getQuote} />
                <CanvasJSChart
                    options={{
                        data:[{
                            type:"candlestick",
                            dataPoints: stockData && stockData.map(element => ({
                                x: new Date(element.date *1000),
                                y: [element.open, element.high, element.low, element.close]
                            }))
                        }]
                    }}
                />    
            </div>
        )
    }
}

export default HomePage
