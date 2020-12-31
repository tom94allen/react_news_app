import React, {Component} from 'react';
import News from './components/News';
import Header from './components/Header';
import axios from 'axios';
import './App.css';

class App extends Component {
  state = {
    newsItems: [],
  }

  componentDidMount(){
    axios({
      "method":"GET",
      "url":"https://microsoft-azure-bing-news-search-v1.p.rapidapi.com/search",
      "headers":{
      "content-type":"application/octet-stream",
      "x-rapidapi-host":"microsoft-azure-bing-news-search-v1.p.rapidapi.com",
      "x-rapidapi-key":"9acf3cbb3fmsh402cf23f4c356f7p187affjsnab0a34909634",
      "useQueryString":true
      },"params":{
      "mkt":"en-GB",
      "q":"news"
      }
      })
      .then((response)=>{
        this.setState( {newsItems: response.data.value} )
      })
      .catch((error)=>{
        console.log(error)
      })
  }
  handleClick = (i) => {
    axios({
      "method":"GET",
      "url":"https://microsoft-azure-bing-news-search-v1.p.rapidapi.com/search",
      "headers":{
      "content-type":"application/octet-stream",
      "x-rapidapi-host":"microsoft-azure-bing-news-search-v1.p.rapidapi.com",
      "x-rapidapi-key":"9acf3cbb3fmsh402cf23f4c356f7p187affjsnab0a34909634",
      "useQueryString":true
      },"params":{
      "mkt":"en-GB",
      "q":`${i}`
      }
      })
      .then((response)=>{
        this.setState( {newsItems: response.data.value} )
      })
      .catch((error)=>{
        console.log(error)
      })
  }
  render(){
    return (
      <div className="container">
        <Header handleClick={this.handleClick}/>
        <News newsItems={this.state.newsItems}/>
      </div>
    );
  }
}

export default App;
