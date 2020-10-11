import React from 'react'
import { Forecast} from '../cmps/Forecast'
import { Footer} from '../cmps/Footer'

export  function Home() {


    return (
        <section className="home">
          <Forecast />
          <Footer />
        </section>
    )
}
