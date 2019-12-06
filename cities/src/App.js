import React from "react";
import Info from "./components/Info";
import Form from "./components/Form";
import Weather from "./components/Weather";

const API_KEY = '7b6d16b9aad94f104b9310d42ef9ebf0';

class App extends React.Component {

    state = {
        temp: undefined,
        city: undefined,
        country: undefined,
        sunrise: undefined,
        sunset: undefined,
        error: undefined
    }


    gettingWeather = async (e) => {
        e.preventDefault();
        const city = e.target.elements.city.value;
     
        
        if(city) {
            const apiURL = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`);
            const data = await apiURL.json();
            
            let sunset = data.sys.sunset;
            let date = new Date();
            date.setTime(sunset);
            let sunset_date = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
            
            let sunrise = data.sys.sunrise;
            let date1 = new Date();
            date1.setTime(sunrise);
            let sunrise_date = date1.getHours() + ":" + date1.getMinutes() + ":" + date1.getSeconds();

            this.setState({
                temp: data.main.temp,
                city: data.name,
                country: data.sys.country,
                sunrise: sunrise_date,
                sunset: sunset_date,
                error: ''
            });
        }
    }

    render() {
        return ( 
            <div>
                <Info />
                <Form weatherMethod={this.gettingWeather}/>
                <Weather
                temp={this.state.temp}
                city={this.state.city}
                country={this.state.country}
                sunrise={this.state.sunrise}
                sunset={this.state.sunset}
                error={this.state.error}
                />
            </div>

        );
    }
}

export default App;