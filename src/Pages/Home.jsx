import React from 'react'
import Banner from '../Component/Home/Banner'
import Ambitions from '../Component/Home/Ambitions'
import Service from '../Component/Home/Service'
import CaseStudy from '../Component/Home/CaseStudy'

const Home = () => {
    return (
        <>
            <Banner />

            <div id="aboutus">
                <Ambitions />
            </div>

            <div id="service">
                <Service />
            </div>

            <div id="casestudy">
                <CaseStudy />
            </div>
        </>
    )
}

export default Home