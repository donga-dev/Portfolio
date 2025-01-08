import React from 'react'

import '../../../styles/About/Route/Intro.scss'
const Intro = () => {
    return (
        <>
            <div className="about-intro">
                <div className="about-intro__container">
                    <div className="about-intro__header">
                        <h2 className="about-intro__number">0<span>1</span></h2>
                        <h1 data-aos='fade-down' data-aos-offset="0">H<span>ello</span>.</h1>
                    </div>
                    <div className="about-intro__description">
                        <p data-aos='fade-right'>I am <span>Siddharth Donga.</span></p>
                        <p data-aos='fade-right' data-aos-delay='200'>With over 3.4+ years of experience, I specialize as a Full-Stack Web Developer, focusing strongly on front-end development.</p>
                        <p data-aos='fade-right' data-aos-delay='400'>Proficient in React.js, Redux, Next.js, and Axios, I craft intuitive user interfaces while staying updated on the latest front-end trends.</p>
                        <p data-aos='fade-right' data-aos-delay='600'>I excel in backend frameworks like Node.js, Express.js, and Nest.js, with a solid understanding of databases including MongoDB, MySQL, and PostgreSQL.</p>
                        <p data-aos='fade-right' data-aos-delay='800'>Skilled in cloud platforms like AWS and Azure, I implement CI/CD pipelines, deploy AWS Lambda functions, and work with Docker for containerization.</p>
                        <p data-aos='fade-right' data-aos-delay='1000'>Driven by curiosity, I constantly expand my skill set to deliver innovative and scalable web solutions. Always open to explore FREELANCE opportunities!</p>
                        <div className="about-intro__emoji">:&nbsp;)</div>
                    </div>


                </div>
            </div>
        </>
    )
}

export default Intro