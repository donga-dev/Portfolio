import React, { useEffect } from 'react';

// Importing TagCloud for  3D Rotating Text Sphere
import TagCloud from 'TagCloud';

import '../../styles/Skill/Skill.scss';

const Skill = () => {
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
  //   const heading = document.getElementById("skill__heading");
  //   heading.classList.add("skill__heading");
  // }

  // Animation settings for Text Cloud

  useEffect(() => {

    const container = '.tagcloud';
    let radii;
    const texts = [
      'HTML',
      'CSS',
      'SASS',
      'JavaScript',
      'React',
      'NodeJS',
      'ES6',
      'GIT',
      'GitHub',
      'TypeScript',
      'MongoDB',
      'MySQL',
      'PostgreSQL',
      'Express.js',
      'Nest.js',
      'AWS',
      'Azure',
      'CI/CD',
      'Docker',
      'AWS Lambda',
      'EC2',
      'Basiq',
      'Akahu',
      'MailChimp',
      'HubSpot',
      'Xero',
      'Stripe',
      'Sanity',
      'Plaid',
      'Swagger',
    ];


    function radiusValue() {
      if (window.screen.width <= 778) {
        radii = 150;
      } else {
        radii = 290;
      }
      return radii;
    }

    const options = {
      radius: radiusValue(),
      maxSpeed: 'normal',
      initSpeed: 'normal',
      keep: true,
    };

    TagCloud(container, texts, options);
  }, []);

  return (
    <>
      <div className="skill">
        <div className="skill__main-container">
          <div className="skill__header" id="skill__heading">
            <h1>
              <span
                data-aos="fade-down"
                data-aos-delay="0"
                data-aos-offset="200"
              >
                S
              </span>
              <span
                data-aos="fade-down"
                data-aos-delay="200"
                data-aos-offset="200"
              >
                K
              </span>
              <span
                data-aos="fade-down"
                data-aos-delay="400"
                data-aos-offset="200"
              >
                I
              </span>
              <span
                data-aos="fade-down"
                data-aos-delay="600"
                data-aos-offset="200"
              >
                L
              </span>
              <span
                data-aos="fade-down"
                data-aos-delay="800"
                data-aos-offset="200"
              >
                L
              </span>
              <span
                data-aos="fade-down"
                data-aos-delay="1000"
                data-aos-offset="200"
              >
                .
              </span>
            </h1>
          </div>
          <div className="skill__inner-container">
            <div className="skill__info">
              <div className="skill__details-container">

                <div className="skill__details">
                  <h4>HTML / CSS</h4>
                  <ul>
                    <li><span>HTML5, CSS3</span></li>
                    <li><span><b>Preprocessors:</b> SASS</span></li>
                    <li><span><b>Frameworks:</b> Bootstrap, Tailwind CSS</span></li>
                  </ul>
                </div>

                <div className="skill__details">
                  <h4>JavaScript & TypeScript</h4>
                  <ul>
                    <li><span><b>Frameworks & Libraries:</b> React.js, Redux, Next.js</span></li>
                    <li><span>ES6+, TypeScript</span></li>
                    <li><span>Axios, Formik</span></li>
                  </ul>
                </div>

                <div className="skill__details">
                  <h4>Version Control & Tools</h4>
                  <ul>
                    <li><span>Git, GitHub</span></li>
                    <li><span>Jira, Atlassian Suite</span></li>
                    <li><span>Swagger</span></li>
                  </ul>
                </div>

                <div className="skill__details">
                  <h4>Backend & Databases</h4>
                  <ul>
                    <li><span>Node.js, Express.js, NestJS</span></li>
                    <li><span>MySQL, PostgreSQL, MongoDB</span></li>
                    <li><span>TypeORM, Prisma, Sequelize</span></li>
                  </ul>
                </div>

                <div className="skill__details">
                  <h4>Cloud & DevOps</h4>
                  <ul>
                    <li><span>AWS (EC2, S3, Lambda, Lightsail, ECR, ECS, RDS)</span></li>
                    <li><span>AWS CDK, AWS SDK</span></li>
                    <li><span>Azure App Service</span></li>
                    <li><span>CI/CD (GitHub Actions, AWS CodeBuild)</span></li>
                    <li><span>Docker</span></li>
                  </ul>
                </div>

                <div className="skill__details">
                  <h4>Third-Party Integrations</h4>
                  <ul>
                    <li><span>Stripe, Plaid, Basiq, Akahu</span></li>
                    <li><span>Xero, QuickBooks</span></li>
                    <li><span>MailChimp, SendGrid</span></li>
                    <li><span>HubSpot, Zendesk</span></li>
                    <li><span>Sanity, UIPath</span></li>
                  </ul>
                </div>

              </div>
            </div>

            <div className="skill__cloud">
              <div className="tagcloud"></div>
            </div>
          </div>

        </div>
      </div>
    </>
  );
};

export default Skill;
