import React, { useRef, useState } from 'react';
import { weatherService } from '../services/weatherService';
import { Search } from './Search';
import { ForecastList } from './ForecastList';
import { useEffect } from 'react';

export function Forecast() {
  const [forecasts, setForecasts] = useState(null);

  useEffect(() => {
    loadForecasts()
  }, [])

  function loadForecasts() {
    const forecasts = weatherService.loadForecasts()
    setForecasts(forecasts)
  }
  function updateForecasts(forecasts) {
    setForecasts(forecasts)
  }

   function onFav(forecastId) {
    const updatedForecasts = {...forecasts} 
    updatedForecasts.DailyForecasts.map(forecast => {
      if(forecast.id === forecastId) {
        forecast.isFav = true
      }
      return forecast
    })
    weatherService.update(updatedForecasts)
          setForecasts(updatedForecasts)
  }

  return (
    <section className="forecast-container">
     
     <Search updateForecasts={updateForecasts} />

      {forecasts &&
          forecasts.length !== 0 &&
        <div className="headline flex justify-center align-center column">
           <h3>
            Weather to expect - {forecasts.Headline.Category}
          </h3>
          <p>{forecasts.Headline.Text}</p>
        </div>
        }

        {forecasts &&
          forecasts.length !== 0 &&
          <ForecastList onFav={onFav}  forecasts={forecasts} />
          }
    </section>
  );
}
