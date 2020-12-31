import React, { Component } from 'react';

class newsItem extends Component{
    render(){
        const {name, description, datePublished, url} = this.props.newsItems;
        const dateString = (new Date(datePublished)).toDateString();
        return(
            <div className="parent">
                <div className="flex">
                    <div className="card">
                        <h2>{name}</h2>
                        <p>{description}</p>
                        <p>{dateString}</p>
                        <div className="flex-btn">
                            <a id="read-more" href={url} target="_blank" rel="noopener noreferrer">Read more...</a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    
}

export default newsItem;