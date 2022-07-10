import React, { useState, useEffect } from "react";

import ForecastDayResponse from "../../forecast_day_response";
import WeatherResponse from "../../weather_response";
import Button from "../../components/button/";
import Modal from "../../components/modal/";
import CityForm from "../../components/city_form/";
import Loading from "../../components/loading/";

import "./weather.scss";

export interface Props
{}

const KEY = "9de9e15c101a44b9b6c40544212011";
const AQI = "no";
const LANG = "es";
const FORECAST_URL = "https://api.weatherapi.com/v1/forecast.json";

const RAIN_DAY_BACKGROUND: BackgroundColor =
{
    top: [ 98, 106, 120 ],
    bottom: [ 58, 63, 80 ]
};

const RAIN_NIGHT_BACKGROUND: BackgroundColor =
{
    top: [ 50, 54, 66 ],
    bottom: [ 22, 23, 28 ]
};

const Weather: React.FunctionComponent<Props> = (props) =>
{
    const [ modalStatus, setModalStatus ] = useState<boolean>(false);
    const [ cityName, setCityName ] = useState<string>("parana");

    const [ weatherData, setWeatherData ] = useState<WeatherData>({
        loaded: false,
        name: "Buenos Aires",
        country: "Argentina",
        condition: "Soleado",
        isDay: true,
        temperature: 0,
        precipitation: 0,
        cloud: 0,
        forecast: [{
            condition: "Soleado",
            minTemperature: 0,
            maxTemperature: 0,
            chanceOfRain: 0,
            icon: "",
        }]
    });

    const getWeather = async () =>
    {
        const response = await fetch(`${FORECAST_URL}?key=${KEY}&q=${cityName}&days=2&aqi=${AQI}&lang=${LANG}`, {});
        
        if(response.status === 200)
        {
            const data = await response.json() as WeatherResponse;

            const forecast = new Array<ForecastDay>(2);
            for(let i = 0; i < 2; ++i)
            {
                const forecastDay: ForecastDayResponse = data.forecast.forecastday[i];

                forecast[i] = {
                    condition: forecastDay.day.condition.text,
                    maxTemperature: forecastDay.day.maxtemp_c,
                    minTemperature: forecastDay.day.mintemp_c,
                    chanceOfRain: forecastDay.day.daily_chance_of_rain,
                    icon: forecastDay.day.condition.icon
                };
            }

            setWeatherData({
                loaded: true,
                name: data.location.name,
                country: data.location.country,
                condition: data.current.condition.text,
                isDay: data.current.is_day === 1 ? true : false,
                temperature: data.current.temp_c,
                precipitation: data.current.precip_mm,
                cloud: data.current.cloud,
                forecast: forecast
            });
        }
        else
        {
            console.error(response.status);
        }
    };

    useEffect(() =>
    {
        getWeather();
    },
    [ cityName ]);

    useEffect(() =>
    {
        if(!weatherData.loaded)
        {
            return;
        }

        const rainContainer = document.getElementById("rain-container") as HTMLDivElement;
        const weather = document.getElementById("weather") as HTMLDivElement;

        let background: BackgroundColor;
        if(weatherData.isDay)
        {
            background = RAIN_DAY_BACKGROUND;
            weather.classList.remove("night");
            weather.classList.add("day");
        }
        else
        {
            background = RAIN_NIGHT_BACKGROUND;
            weather.classList.remove("day");
            weather.classList.add("night");
        }

        const opacity = weatherData.cloud / 100;
        const topRGB = `${background.top[0]},${background.top[1]},${background.top[2]}`;
        const bottomRGB = `${background.bottom[0]},${background.bottom[1]},${background.bottom[2]}`;

        rainContainer.style.background = `linear-gradient(180deg, rgba(${topRGB}, ${opacity}), rgba(${bottomRGB}, ${opacity}))`;
    });

    useEffect(() =>
    {
        const button = document.getElementById("change-city") as HTMLDivElement;

        button.onclick = () =>
        {
            setModalStatus(true);
        };
    },
    []);

    return <div id="weather" className="weather day">
        <div id="rain-container" className="rain">
            <header>
                <span className="city-name">
                    {weatherData.name}
                </span>

                <span className="country">
                    {weatherData.country}
                </span>
            </header>

            <section>
                <div className="temperature">
                    <span className="ammount">
                        {weatherData.temperature}
                    </span>
                    <span className="unit">°C</span>
                </div>

                <span className="condition-container">
                    <span className="condition">
                        {weatherData.condition}
                    </span>

                    <div className="precipitation">
                        <i className="fi fi-rr-raindrops"></i>
                        <span>
                            {weatherData.forecast[0].chanceOfRain}%
                        </span>
                    </div>
                </span>
            </section>

            <footer>
                <div className="forecast-container">
                    {weatherData.forecast.map((element, index) =>
                    {
                        return <div key={`forecastday-${index}`} className="forecastday">
                            <div className="left">
                                <img src={element.icon} alt={element.condition} />

                                <span className="day">
                                    {index === 0 ? "Hoy" : "Mañana"}
                                </span>

                                <span className="condition">
                                    {element.condition}
                                </span>
                            </div>

                            <div className="right">
                                <span className="max-temperature">
                                    {element.maxTemperature}°
                                </span>
                                <span className="slash">
                                    /
                                </span>
                                <span className="min-temperature">
                                    {element.minTemperature}°
                                </span>
                            </div>
                        </div>;
                    })}
                </div>

                <div className="button-container">
                    <Button id="change-city" content="Cambiar ciudad" />
                </div>
            </footer>
        </div>

        {modalStatus ?
            <Modal
                id="modal-change-city"
                closeRequest={() =>
                {
                    setModalStatus(false);
                }}
            >
                <CityForm
                    id="form-change-city"
                    onSubmit={(data) =>
                    {
                        setModalStatus(false);
                        setCityName(state =>
                        {
                            return data.cityName;
                        });
                    }}
                />
            </Modal> :
            null
        }

        {!weatherData.loaded ? <div className="loading-container">
            <Loading />
        </div> : null}
    </div>;
};

interface WeatherData
{
    loaded: boolean;
    name: string;
    country: string;
    condition: string;
    isDay: boolean;
    temperature: number;
    precipitation: number;
    cloud: number;
    forecast: Array<ForecastDay>;
}

interface ForecastDay
{
    condition: string;
    maxTemperature: number;
    minTemperature: number;
    chanceOfRain: number;
    icon: string;
}

interface BackgroundColor
{
    top: [ number, number, number ];
    bottom: [ number, number, number ];
}

export default Weather;