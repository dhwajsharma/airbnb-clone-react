import React from 'react'
import Banner from '../Banner/Banner'
import Card from '../Card/Card'
import "./Home.css"

const Home = () => {
    return (
        <div className="home">
            <Banner />

            <div className="home__section">
                <Card />
            </div>
        </div>
    )
}

export default Home
