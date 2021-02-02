import React, { Component } from 'react'
import NewsCard from '../../components/NewsCard/NewsCard'
import Axios from 'axios';
import dateFormat from '../../utils/dateFormat'
import {SearchForm} from '../../components';

const API_URL = 'https://finnhub.io/api/v1/';

export class NewsPage extends Component {
    state ={
        data : ""
    }
    //fetch general news on page render
    componentDidMount =() => {
        this.getNews();
    }
    getNews = async() => {
        const response = await Axios.get(API_URL+`/news?`, {params: {
            category: "general",
            token: "c04d8tn48v6u76cjevm0",
            }})
            try{
                this.setState({
                    data:response.data
                })
            }
            catch(error){
                console.log(error);
            } 
    }
    //api call to fetch company related news when searched for symbol/company name
    getCompanyNews = async (symbol) =>{
        const response = await Axios.get(API_URL+`/company-news?`, {params: {
            symbol: symbol,
            from: dateFormat(new Date().setUTCFullYear(new Date().getUTCFullYear()-1)),
            to: dateFormat(new Date().setUTCHours(new Date().getUTCHours()-1)),
            token: "c04d8tn48v6u76cjevm0",
            }})
            try{
                this.setState({
                    data:response.data
                })
            }
            catch(error){
                console.log(error);
            } 
    }
    render() {
        return (
            <div>
                <SearchForm submitHandler={this.getCompanyNews}/>
                <NewsCard  data={this.state.data} />
            </div>
        )
    }
}

export default NewsPage
