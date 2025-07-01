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
                        <p data-aos='fade-right' data-aos-delay='200'>A passionate Full-Stack Web Developer with 4.4+ years of hands-on experience building scalable, secure, and user-centric applications.</p>
                        <p data-aos='fade-right' data-aos-delay='400'>I specialize in front-end frameworks like React.js, Redux, Next.js, and TypeScript, crafting clean, responsive, and accessible interfaces.</p>
                        <p data-aos='fade-right' data-aos-delay='600'>On the backend, I work extensively with Node.js, Express.js, and NestJS, building RESTful APIs and microservices with robust database integration using MongoDB, MySQL, and PostgreSQL.</p>
                        <p data-aos='fade-right' data-aos-delay='800'>I have deployed full-stack apps across cloud platforms like AWS and Azure—leveraging EC2, S3, Lambda, Lightsail, Docker, and CDK for scalable cloud-native solutions.</p>
                        <p data-aos='fade-right' data-aos-delay='1000'>Experienced in integrating third-party APIs (Stripe, Xero, Basiq, Akahu, QuickBooks, etc.), setting up CI/CD pipelines, and contributing to high-impact production projects for clients across the US, Australia, and New Zealand.</p>
                        <p data-aos='fade-right' data-aos-delay='1200'>I continuously explore emerging technologies and am always open to freelance or remote collaboration opportunities!</p>
                        <div className="about-intro__emoji">:&nbsp;)</div>
                    </div>



                </div>
            </div>
        </>
    )
}

export default Intro