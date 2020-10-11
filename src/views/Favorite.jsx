import React, { Fragment } from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { ForecastList } from '../cmps/ForecastList'
import { Footer } from '../cmps/Footer'
import { weatherService } from '../services/weatherService'

export  function Favorite() {

    const [favForecasts, setfavForecasts] = useState(null)

    useEffect(() => {
        const favForecasts = weatherService.getFavForecasts()
        console.log('favForecasts?', favForecasts)
        setfavForecasts(favForecasts)
    }, [])

    return (
        <Fragment>
        <main className="fav p-x-30">
            <h1>Your Favorite List!</h1>
            {favForecasts &&
                favForecasts.length !== 0 &&
                <ForecastList forecasts={favForecasts}/>
            }
        </main>
            <Footer />
        </Fragment>
    )
}
