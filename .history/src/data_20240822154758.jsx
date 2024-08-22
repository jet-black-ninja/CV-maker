import {v4 as uuidv4} from "uuid";
export const sampleData = {
    personalInfo: {
      firstName: 'John',
      lastName: 'Doe',
      title: 'Senior Software Engineer',
      email: 'abc-xyz@example.com',
      phone: '+123 ',
      address: 'Tan Binh, Ho Chi Minh',
      birthday: '27/05/1997',
    },
    objective: {
      description: 'A highly motivated and results-driven software engineer with 6 years of experience in C# and .Net Core. Graduated from Ho Chi Minh University of Science with a strong academic record. Currently serving as a Senior Software Engineer at Nashtech, where I have been recognized as the Top Excellent Developer in 2020 and Developer of the Year in 2022. Possess a strong ability to analyze and solve complex problems effectively. Committed to delivering high-quality software solutions to meet customer needs and exceed expectations.'
    },
    workExperiences: [
      {
        id: uuidv4(),
        companyName: 'Nashtech',
        workPeriod: '2020 - Present',
        jobTitle: 'Senior Software Engineer',
        sections: [
          {
            id: uuidv4(),
            title: 'Key Responsibilities',
            description: '',
            items: [
              'Designed and led the implementation of a new search system using Elasticsearch, significantly improving search performance over the previous Neo4j-based system.',
              'Designed and implemented scalable backend solutions using .NET Core.',
              'Developed real-time data processing systems with Apache Kafka and ksqlDB.',
              'Improved search capabilities with Elasticsearch, which improved the page speed by 90% after implementation.',
              'Conducted unit testing and collaborated with cross-functional teams.',
              'Mentored junior engineers.',
            ]
          },
          {
            id: uuidv4(),
            title: 'Awards',
            description: "Nashtech's Developer of the year 2022",
            
          },
          {
            id: uuidv4(),
            title: 'Skills',
            description: "Apache Kafka, MSSQL, .NET Core, Angular 2+, ksqlDB, Nservicebus, C#, Spoon, Elasticsearch, Unit Testing, Neo4j, Git, Scrum process, Pentaho kettle",
            
          }
        ]
      },
      {
        id: uuidv4(),
        companyName: 'Nashtech',
        workPeriod: 'Jul 2018 - Jan 2021',
        jobTitle: 'Software Engineer',
        sections: [
          {
            id: uuidv4(),
            title: 'Key Responsibilities',
            description: '',
            items: [
              'Provided application support and resolved production issues, achieving a 95% resolution rate within a day.',
              'Developed solutions to address and fix production issues, reducing incident recurrence by 40%.',
              'Wrote scripts to analyze and correct data in production environments.',
              'Integrated Neo4j for enhanced data relationships and queries, resulting in a 50% improvement in query performance and data retrieval times.',
            ]
          },
          {
            id: uuidv4(),
            title: 'Awards',
            description: "Nashtech's top excellent developer 2020",
            
          },
          {
            id: uuidv4(),
            title: 'Skills',
            description: "Angular 2+, Neo4j, C#, OWASP, REST APIs, Microservices, Kanban process",
            
          }
        ]
      }
    ],
    projects: [
      {
        id: uuidv4(),
        name: 'Supply Chain Platform',
        period: 'Apr 2021 - Present',
        sections: [
          {
            id: uuidv4(),
            title: 'Name of client',
            description: '(Confidential)',
            
          },
          {
            id: uuidv4(),
            title: 'Project description',
            description: 'The platform is designed to enhance supply chain sustainability by connecting clients with pre-qualified, compliant suppliers. The platform helps companies meet regulatory compliance, manage supply chain risks, and enhance sustainability initiatives.',
            
          },
          {
            id: uuidv4(),
            title: 'Project size',
            description: '> 100 members',
            
          },
          {
            id: uuidv4(),
            title: 'Position in project',
            description: 'Senior Software Engineer',
            
          },
          {
            id: uuidv4(),
            title: 'Key responsibilities',
            description: '',
            items: [
              'Designed and led the implementation of a new search system using Elasticsearch, significantly improving search performance over the previous Neo4j-based system.',
              'Architected and implemented scalable backend solutions using .NET Core.',
              'Enhanced search capabilities with Elasticsearch, resulting in a 90% improvement in page',
              'speed.',
              'Conducted comprehensive unit testing and collaborated with cross-functional teams to ensure project success.',
              'Mentored junior engineers, providing guidance and fostering their professional growth.',
            ]
          },
          {
            id: uuidv4(),
            title: 'Technologies',
            description: '',
            items: [
              'Backend: .NET core, Microservices, NServiceBus',
              'Frontend: Angular 14',
              'Database: Neo4J, Elasticsearch, MSSQL',
              'API Integration: REST APIs',
              'Data Processing: Apache Kafka, ksqlDB, Pentaho kettle',
              'Unit Testing: XUnit',
            ]
          }
        ]
      },
      {
        id: uuidv4(),
        name: 'Supply Chain Platform',
        period: 'Jul 2018 - Apr 2021',
        sections: [
          {
            id: uuidv4(),
            title: 'Name of client',
            description: '(Confidential)',
          },
          {
            id: uuidv4(),
            title: 'Project description',
            description: 'The platform is designed to enhance supply chain sustainability by connecting clients with pre-qualified, compliant suppliers. The platform helps companies meet regulatory compliance, manage supply chain risks, and enhance sustainability initiatives.',
          },
          {
            id: uuidv4(),
            title: 'Project size',
            description: '> 100 members',
          },
          {
            id: uuidv4(),
            title: 'Position in project',
            description: 'App Support Engineer',
          },
          {
            id: uuidv4(),
            title: 'Key responsibilities',
            description: '',
            items: [
              'Delivered application support, effectively resolving production issues to ensure system stability and performance.',
              'Developed targeted solutions to address and rectify production issues, minimizing downtime and enhancing user experience.',
              'Created and executed scripts for data analysis and correction in production environments, ensuring data integrity and accuracy.',
              'Optimized query performance, significantly improving data retrieval times and system efficiency.',
            ]
          },
        ]
      }
    ],
    educations: [
      {
        id: uuidv4(),
        title: 'VNUHCM - University of Science ',
        period: 'Sep 2015 - May 2018',
        subTitle: 'Major: College - Information Technology',
        sections: [
          {
            id: uuidv4(),
            title: 'GPA',
            description: '3.6 / 4.0',
          },
          {
            id: uuidv4(),
            title: 'Award',
            description: "Consolation prizes of HCMUS's Olympic Information Technology",
          }
        ]
      }
    ],
    certifications: [
      {
        id: uuidv4(),
        title: 'IBM AI Engineering',
        issuer: 'IBM',
        description: 'This certification demonstrates the ability to design, build, and deploy AI models and solutions using IBM Watson OpenScale and IBM Cloud Pak for Data.',
        issuedDate: 'Aug 2024',
      },
      {
        id: uuidv4(),
        title: 'Big-O Coding',
        issuer: 'BigO',
        description: 'Big-O is a coding platform that helps developers improve their coding skills and prepare for technical interviews',
        issuedDate: 'Sep 2021',
      },
    ],
    awards: [
      {
        id: uuidv4(),
        title: "NahTech's Developer of the year 2022",
        issuer: 'NashTech',
        issuedDate: '2022',
        description: ''
      },
      {
        id: uuidv4(),
        title: "NahTech's Top Excellent Developer 2020",
        issuer: 'NashTech',
        issuedDate: '2020',
        description: ''
      }
    ],
    skills: [
      {
        id: uuidv4(),
        title: 'Language',
        description: 'English',
      },
      {
        id: uuidv4(),
        title: 'Backend',
        description: 'C#, .NET core, Python, Apache Kafka, NServicebus',
      },
      {
        id: uuidv4(),
        title: 'Frontend',
        description: 'Angular, ReactJS, TypeScript, Javascript',
      },
      {
        id: uuidv4(),
        title: 'Database',
        description: 'Neo4J, Elasticsearch, MSSQL, Postgres',
      },
      {
        id: uuidv4(),
        title: 'AI',
        description: 'Computer Vision, Tensorflow, PyTorch',
      },
      {
        id: uuidv4(),
        title: 'Soft Skills',
        description: 'Research, problem solving, critial thinking',
      },
    ],
  };