import React from 'react'


import '../../../styles/About/Route/Internships.scss'

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faCalendarDays } from '@fortawesome/free-solid-svg-icons'
import Internship from '../../Internship';

import data from '../../../data'

const Internships = () => {
    return (
        <>
            <div className="internships">
                <div className="internships__container">
                    <div className="experience__header">
                        <h2 className="experience__number">0<span>2</span></h2>
                        <h1 data-aos='fade-down' data-aos-offset="0">E<span>xperience</span>.</h1>
                    </div>
                    <div className="internships__description">
                        <div className="internships__main-box">
                            {data.portfolio.internships.internship.map((content) => (
                                <Internship key={content.companyName} details={content} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Internships