import React, { Component } from 'react'
import Axios from 'axios';
import {SearchForm} from './components'
const API_URL = "https://finnhub.io/api/v1/";

export class App extends Component {
  state = {
    quote : ""
  }
  getQuote = (symbol) => {
    Axios.get(API_URL+`/quote?`, {params: {
      symbol: symbol,
      token: "c04d8tn48v6u76cjevm0"
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
        <SearchForm submitHandler={this.getQuote}/>
      </div>
    )
  }
}

export default App;