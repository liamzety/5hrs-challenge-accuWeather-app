import moment from 'moment-js'
import sun from "../assets/images/sun.png";
import { BsStar, BsStarFill } from 'react-icons/bs'
import React from 'react'

export function ForecastPreview(props) {

  function getIcon(num) {
    console.log('icon?', num)
    switch (num) {
      case '1':
        return <img src={sun} alt="" />
      default:
        return <img src={sun} alt="" />
    }

  }
  return (
    <div className="forecast">
      {getIcon(props.forecast.Day.Icon)}

      <h2>{  moment(props.forecast.EpochDate).format('DD/MM/YY')}</h2>
      <h4>
        {props.forecast.Day.IconPhrase}
      </h4>
      <h4>
        Anywhere From {props.forecast.Temperature.Minimum.Value}
        {props.forecast.Temperature.Minimum.Unit} To{' '}
        {props.forecast.Temperature.Maximum.Value}
        {props.forecast.Temperature.Minimum.Unit}
      </h4>
      {props.forecast.isFav ? <BsStarFill className="fav-fill" onClick={() => props.onFav(props.id)} />
        : <BsStar onClick={() => props.onFav(props.id)} />
      }

    </div>
  )
}
