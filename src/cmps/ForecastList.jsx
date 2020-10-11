import React from 'react'
import { ForecastPreview } from './ForecastPreview';

export  function ForecastList(props) {
 
    return (
       <section className="forecasts-list">
          {props.forecasts.DailyForecasts.map((forecast, idx) => {
            return (
                <ForecastPreview id={forecast.id} onFav={props.onFav} key={idx} forecast={forecast} />
            );
          })}
      </section>
    )
}
