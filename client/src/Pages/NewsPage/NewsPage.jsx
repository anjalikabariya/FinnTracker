import React, { Component } from 'react'
import NewsCard from '../../components/NewsCard/NewsCard'
import Axios from 'axios';
import {SearchForm} from '../../components';

const API_URL = 'https://finnhub.io/api/v1/';
export class NewsPage extends Component {
    state ={
        data : ""
    }
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
    render() {
        return (
            <div>
                <SearchForm submitHandler={this.getNews}/>
                <NewsCard  data={this.state.data} />
            </div>
        )
    }
}

export default NewsPage
