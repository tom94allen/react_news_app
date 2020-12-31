import React, {Component} from 'react';
import Newsitem from './Newsitem';

class News extends Component{
    render(){
        return this.props.newsItems.map((item) => (
            <Newsitem key={item.url} newsItems={item}/>
        ));
    }
}

export default News