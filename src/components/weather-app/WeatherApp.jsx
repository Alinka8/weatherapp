import React, { useState, useEffect } from "react";
import axios from "axios";
import WeatherCard from "../weatherCard/WeatherCard";
import { getDayofTheWeek } from "../../utils/helperFunction";
import "./weatherApp.style.css";

const WeatherApp = () => {
  const [tempreture, setTempreture] = useState(0);
  const [description, setDescription] = useState();
  const [feelsLikeTemp, setFeelsLikeTemp] = useState(0);
  const [humidity, setHumidity] = useState(0);
  const [wind, setWind] = useState(0);
  const [city, setCity] = useState("");
  const [searchCity, setSearchCity] = useState("");
  const [todaysDate, setTodaysDate] = useState(new Date());

  const getSearchCity = async () => {
    const todaysDate = new Date();

    console.log("todays date", todaysDate);

    try {
      // const response = await axios.get(
      //   "https://api.openweathermap.org/data/2.5/weather?lat=42.09&lon=-87.99&units=imperial&appid=355cf3bff397cfe55bf144d10da9b2d8"
      // );

      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=
        ${searchCity ? searchCity : "Chicago"}
        &units=imperial&appid=355cf3bff397cfe55bf144d10da9b2d8`
      );

      const { data } = response;

      //set the data
      setCity(data.name);
      setTempreture(data.main.temp);
      setDescription(data.weather[0].description);
      setFeelsLikeTemp(data.main.feels_like);
      setHumidity(data.main.humidity);
      setWind(data.wind.speed);

      // console.log(response.data);

      console.log("response", response);
    } catch (error) {
      console.log("error", error);
    }
  };

  useEffect(() => {
    getSearchCity();
  }, []);

  // side effect

  const onClickHandler = async () => {
    console.log("searched city", searchCity);
  };

  const onChangeHandler = (e) => {
    setSearchCity(e.target.value);
    // console.log("e value", e.target.value);
  };

  return (
    <div className="container">
      <input
        placeholder="enter city name"
        onChange={onChangeHandler}
        value={searchCity}
      />
      <button onClick={onChangeHandler}>Get the weather</button>
      <p>time: {todaysDate.toLocaleTimeString()}</p>
      <p>date: {todaysDate.toLocaleDateString()}</p>
      <p>date and time {todaysDate.toLocaleString()}</p>
      <p>Happy {getDayofTheWeek(new Date("2001/10/08"))} </p>
      <div className="data">
        <WeatherCard
          city={city}
          tempreture={tempreture}
          description={description}
          feelsLikeTemp={feelsLikeTemp}
          humidity={humidity}
          wind={wind}
        />
      </div>
    </div>
  );
};

export default WeatherApp;
