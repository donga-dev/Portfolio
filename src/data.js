export const config = {
  portfolio: {
    portfolioLogo: 'Portfolio',
    projectCard: {
      cards: [
        {
          heading: 'Realtime Conveyancer',
          description:
            "Australia's leading digital property SaaS solution, addressing key challenges in conveyancing by reducing business risk and enhancing performance. Built using React.js, Node.js, TypeScript, PostgreSQL, and AWS.",
          animationDelay: '300',
          buttonLink: 'https://web.realtimeconveyancer.com.au/',
          buttonText: 'CHECK OUT',
        },
        {
          heading: 'Rooster',
          description:
            "Web app for New Zealand's healthcare sector, streamlining hospital shift scheduling and tenant management. Built with React.js, Node.js, TypeScript, and PostgreSQL.",
          animationDelay: '500',
          buttonLink: 'https://web.rooster.nz/',
          buttonText: 'CHECK OUT',
        },
        {
          heading: 'BudgetBuddie',
          description:
            "Comprehensive budget management platform for Australian users, featuring goal setting, account integration, automated updates, and secure payment processing.",
          animationDelay: '700',
          buttonLink: 'https://www.budgetbuddie.com/',
          buttonText: 'CHECK OUT',
        },
        {
          heading: 'Bank Account Verification System',
          description:
            "System with web portal and Basiq integration for secure client management and timely processing of account verification requests.",
          animationDelay: '900',
          buttonLink: 'https://zealous-moss-0ab453310.5.azurestaticapps.net/',
          buttonText: 'CHECK OUT',
        },
        {
          heading: 'Vehicle Protection System',
          description:
            "Advanced vehicle registration system for managing personal details, aftercare services, and dealer interactions.",
          animationDelay: '1100',
          buttonLink: 'https://registrations.delphidistributors.com.au/',
          buttonText: 'CHECK OUT',
        },
        {
          heading: 'Wordibly – Transcription Platform',
          description: 'Built a US-based transcription platform from scratch. Implemented role-based access for Editors, Reviewers, and Owners; integrated audio/video upload and editing tools. Developed secure payment flow with Stripe and connected accounting via QuickBooks. Tech stack: React.js, Node.js, TypeScript, MySQL, AWS.',
          animationDelay: '2100',
          buttonText: 'Visit',
          url: 'https://app.wordibly.com/',
        }

      ],
    }
    ,
    internships: {
      internship: [
        {
          companyName: 'Freelancing',
          role: 'Full-Stack Web Developer (Remote)',
          introText: '',
          duration: '03/2025 - Present',
          keyPointOne: 'Worked on a U.S.-based transcription platform (Wordibly) using React.js, TypeScript, Node.js, and AWS.',
          keyPointTwo: 'Built responsive UI, backend APIs, and integrated cloud services for secure transcription workflows.',
          keyPointThree: 'Collaborated with clients to deliver scalable, high-performance web solutions.',
          keyPointFour: 'Handled end-to-end development and deployment with a focus on quality and security.',
          offsetValue: '0',
        },
        {
          companyName: 'Proaxiom',
          role: 'Full-Stack Web Developer (Remote)',
          introText: '',
          duration: '10/2023 - 02/2025',
          keyPointOne: 'Developed a robust SQL sanitizer function to prevent SQL injection and implemented solutions using AWS Lambda and Azure App Service.',
          keyPointTwo: 'Leveraged the MERN stack (MySQL, Express.js, React.js, Node.js) alongside Docker, EC2, ECS, and ECR to deploy scalable web applications.',
          keyPointThree: 'Set up automated CI/CD pipelines using AWS CodeBuild and GitHub Actions.',
          keyPointFour: 'Contributed to code reviews, debugging, performance optimization, and deployment across AWS and Azure environments.',
          offsetValue: '-300',
        },
        {
          companyName: 'Skyline Infosys',
          role: 'Full-Stack Web Developer',
          introText: '',
          duration: '08/2022 - 09/2023',
          keyPointOne: 'Designed and developed secure, scalable web applications using React.js, Node.js, and MongoDB.',
          keyPointTwo: 'Built APIs and integrated third-party services, adhering to industry standards and best practices.',
          keyPointThree: 'Participated in code reviews, providing constructive feedback to enhance code quality.',
          keyPointFour: 'Focused on delivering high-performance and maintainable web applications.',
          offsetValue: '-600',
        },
        {
          companyName: 'BVM Infotech',
          role: 'MERN Stack Developer',
          introText: '',
          duration: '04/2021 - 07/2022',
          keyPointOne: 'Implemented various authentication and authorization mechanisms to secure web applications.',
          keyPointTwo: 'Collaborated with designers to create attractive, user-friendly interfaces with a focus on accessibility.',
          keyPointThree: 'Stayed updated with web development trends, applying them to enhance the development process.',
          keyPointFour: 'Developed solutions that ensure performance and scalability.',
          offsetValue: '-900',
        }
      ],

    },

  },
  portfolio2: {
    brandName: 'Brand Two',
    location: 'Online Store',
    metas: [
      {
        name: 'description',
        content: 'This is Brand Two',
      },
    ],
  },
  portfolio3: {
    brandName: 'Brand Three',
    location: 'Online Store',
    metas: [
      {
        name: 'description',
        content: 'This is Brand Three',
      },
    ],
  },
};

export default config;
