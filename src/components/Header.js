import React, {Component} from 'react';
import axios from 'axios';


class Header extends Component{
    state = {
        query: '',
        icon: '',
        city: '',
        temp: '',
    }
    componentDidMount = () => {
        navigator.geolocation.getCurrentPosition((position) => {
            const lat = position.coords.latitude.toString();
            const lon = position.coords.longitude.toString();
            axios({
                "url":"https://weatherbit-v1-mashape.p.rapidapi.com/current",
                "headers":{
                "content-type":"application/octet-stream",
                "x-rapidapi-host":"weatherbit-v1-mashape.p.rapidapi.com",
                "x-rapidapi-key":"63f513c43dmshdc08c9f9626da66p100472jsn5c90be5a7e9c",
                "useQueryString":true
                },"params":{
                "lang":"en",
                "lon":`${lon}`,
                "lat":`${lat}`,
                }
                })
                .then( res => 
                    this.setState({temp: res.data.data[0].app_temp, icon: res.data.data[0].weather.icon, city: res.data.data[0].city_name}))
                .catch( error => console.log(error))
        },
        (error)=> {
            if (error.code === error.PERMISSION_DENIED){
                let lat = "51.5074";
                let lon = "0.1278";
                console.log(lat, lon);
            }
        });
    }

    onChange = (e) => {
        this.setState( {[e.target.name]: e.target.value} )
    }
    onSubmit = (e) => {
        e.preventDefault();
        this.props.handleClick(this.state.query);
        this.setState({query: ''});
    }
    render(){
        return(
            <div className="parent">
                <div className="weather-info">
                    <div className="flex-row">
                        <h6>Your Local Weather</h6>
                    </div>
                    <div className="flex-row">
                        <p>{this.state.icon}</p>
                        <p>{this.state.city}</p>
                        <p>{this.state.temp} Celcius</p>
                    </div>
                </div>
                <div className="flex">
                    <h1>News by you</h1>
                </div>
                <div className="flex">
                    <h5>The only site that lets you search for news you want!</h5>
                </div>
                <form onSubmit={this.onSubmit} className="flex-form">
                    <input type="text" name="query" id="query" onChange={this.onChange} placeholder="Search terms to find related articles..." value={this.state.query}/>
                    <input type="submit" name="submit" id="submit" value="Search" />
                </form>
            </div>
            
        )
    }
}

export default Header