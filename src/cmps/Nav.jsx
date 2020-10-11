import React from 'react'
//Icons
import { GiHamburgerMenu } from 'react-icons/gi'
import { Link } from 'react-router-dom'
//Images

export function Nav() {
    return (
        <section className="nav ">
            <div className="container flex space-between align-center p-x-30">
                <div className="col flex justify-center align-center">
                    <h1>AccuWeather</h1>
                </div>
                <div className="col flex justify-center align-center">
                    <Link to='/'>
                        <button>home</button>
                    </Link>
                    <Link to='/favorite'>
                        <button>favorites</button>
                    </Link>
                </div>
                <div className="hamburger">
                    <GiHamburgerMenu />
                </div>
            </div>
        </section>
    )
}
