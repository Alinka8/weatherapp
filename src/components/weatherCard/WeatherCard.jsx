import React from "react";

const WeatherCard = (props) => {
  const { city, tempreture, description, feelsLikeTemp, humidity, wind } =
    props;
  return (
    <div>
      <h3>City: {city} </h3>
      <p>Tempreture: {tempreture}</p>
      <p>Description: {description}</p>
      <p>Feels like: {feelsLikeTemp}</p>
      <p>Humidity: {humidity}</p>
      <p>Wind Speed: {wind}</p>
    </div>
  );
};

export default WeatherCard;
