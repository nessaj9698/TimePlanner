import axios from "axios";
import { useDispatch } from "react-redux";
import { fetchForecast } from "../redux/reducers/rootReducer";
import { createAsyncThunk } from "@reduxjs/toolkit";


const getForecast = (dispatch) => {
    axios.get("https://ipapi.co/json/").then((response) => {
        let city = response.data.city
        axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&lang=Ru&appid=3dcf5fc3a4c113457010db72f93c7ad5`)
          .then((response) => {
            let forecast = response.data.list
            let result = []
            for (let i = 0; i < forecast.length; i++) {
              result.push({
                date:{
                  fullDate:forecast[i].dt_txt.split(' ')[0].split('-').reverse().join('-'),
                  time:forecast[i].dt_txt.split(' ')[1].split(':')[0]
                },
                temperature:Math.round(forecast[i].main.temp),
               
                icon:forecast[i].weather[0].icon
              });
             
            }
            dispatch(fetchForecast(result))
          })
      })
}


export default getForecast