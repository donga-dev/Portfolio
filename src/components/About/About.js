import React from "react";
import { Link } from "react-router-dom";

// Importing TagCloud for  3D Rotating Text Sphere
// import TagCloud from 'TagCloud'

import "../../styles/About/About.scss";

const About = () => {
  // function useScrollPosition() {
  //   const [scrollPosition, setScrollPosition] = useState(0);

  //   useEffect(() => {
  //     const updatePosition = () => {
  //       setScrollPosition(window.pageYOffset);
  //     };
  //     window.addEventListener("scroll", updatePosition);
  //     updatePosition();

  //     return () => {
  //       window.removeEventListener("scroll", updatePosition);
  //     };
  //   }, []);

  //   return scrollPosition;
  // }

  // if (useScrollPosition() > 850) {
  //   const heading = document.getElementById("about__heading");
  //   heading.classList.add("about__heading");
  // }

  // useEffect(() => {
  //     return () => {
  //         const container = '.tagcloud';
  //         const texts = [
  //             'HTML', 'CSS', 'JavaScript',
  //             'React', 'Vue', 'NodeJS', 'Shopify',
  //             'Jquery', 'ES6', 'GIT', 'GITHUB'
  //         ];

  //         const options = {
  //             radius: 230,
  //             maxSpeed: 'normal',
  //             initSpeed: 'normal',
  //             keep: true
  //         };

  //         TagCloud(container, texts, options);
  //     }
  // }, [])

  return (
    <>
      <div className="about" id="about">
        <div className="about__container">
          <div className="about__header" id="about__heading">
            <h1 data-aos="fade-down" data-aos-delay="0" data-aos-offset="20">
              <span
                data-aos="fade-down"
                data-aos-delay="0"
                data-aos-offset="200"
              >
                A
              </span>
              <span
                data-aos="fade-down"
                data-aos-delay="200"
                data-aos-offset="200"
              >
                B
              </span>
              <span
                data-aos="fade-down"
                data-aos-delay="400"
                data-aos-offset="200"
              >
                O
              </span>
              <span
                data-aos="fade-down"
                data-aos-delay="600"
                data-aos-offset="200"
              >
                U
              </span>
              <span
                data-aos="fade-down"
                data-aos-delay="800"
                data-aos-offset="200"
              >
                T
              </span>
              <span
                data-aos="fade-down"
                data-aos-delay="1000"
                data-aos-offset="200"
              >
                .
              </span>
            </h1>
            <p></p>
          </div>

          <div className="about__details-container">
            <div
              className="about__details"
              data-aos="fade-down"
              data-aos-offset="0"
              data-aos-delay="0"
              data-aos-once="true"
            >
              <Link to="/about/intro">
                <h1>
                  0<span>1</span>
                </h1>
                <h2>
                  H<span>ello,</span>
                </h2>
                <p>
                  I am <span>Siddharth Donga.</span> <br /> Highly passoinate
                  full-stack Developer with more than 3.5+ years of experience.
                </p>
                <p className="about__read-more">Read more...</p>
              </Link>
            </div>
            <div
              className="about__details"
              data-aos="fade-down"
              data-aos-offset="-180"
              data-aos-delay="200"
              data-aos-once="true"
            >
              {/* <Link to="/about/experience">
                <h1>
                  0<span>2</span>
                </h1>
                <h2>
                  E<span>xperience</span>
                </h2>
                <p>
                  <span>6 month of experience.</span>
                  <br />I have more than 6 months of experience in developing
                  highly responsive frontend of websites using React.js and
                  Vue.js
                </p>
                <p className="about__read-more">Read more...</p>
              </Link> */}
            </div>
            <div
              className="about__details"
              data-aos="fade-down"
              data-aos-offset="50"
              data-aos-delay="500"
              data-aos-once="true"
            >
              {/* <Link to="/about/internships">
                <h1>
                  0<span>3</span>
                </h1>
                <h2>
                  I<span>nternships</span>
                </h2>
                <p>
                  <span>Interned at -</span> <br />
                </p>
                <ul>
                  <li>
                    <span>Dyeus</span> - Front-end Developer{" "}
                  </li>
                  <li>
                    <span>ONGC</span> - Industrial Trainee{" "}
                  </li>
                  <li>
                    <span>Clear Exam</span> - HTML Developer{" "}
                  </li>
                </ul>
                <p className="about__read-more">Read more...</p>
              </Link> */}
            </div>
            <div
              className="about__details"
              data-aos="fade-down"
              data-aos-offset="-180"
              data-aos-delay="700"
              data-aos-once="true"
            >
              <Link to="/about/experience">
                <h1>
                  0<span>2</span>
                </h1>
                <h2>
                  E<span>xperience</span>
                </h2>
                <p>
                  <span>3.5+ years of experience.</span>
                  <br />I have more than 3.5+ years of experience as a Full-Stack Web Developer, specializing in building highly responsive front-end applications using React.js and Next.js, along with robust back-end systems using Node.js, Express.js, and Nest.js.
                </p>
                <p className="about__read-more">Read more...</p>
              </Link>
            </div>
          </div>

        </div>
      </div>
    </>
  );
};

export default About;
