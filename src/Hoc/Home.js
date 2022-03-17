import React from 'react'
import ExperienceTwo from './ExperienceTwo';
import ExperienceOne from './ExperienceOne';
import TopPage from './TopPage';
import SecondTopPage from './SecondTopPage';
// import bgCircle from '../img/Ellipse8.png';


function Home() {
    return (
        <div className="home">
            {/* <img src={bgCircle} alt="icon" className="circlebg" /> */}
            <TopPage />
            <SecondTopPage />
            <ExperienceOne />
            <ExperienceTwo />
        </div>
    )
}

export default Home
