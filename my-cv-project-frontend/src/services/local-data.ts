import type { MyCvData } from "./model/mockup.model";

const myCvDataTemplate: Array<MyCvData> = [{
    ownerDisplayName: "",
    templateCode: "template1",
    personalCv: {
        id: 1,
        uuid: "mydaylight",
        cvName: "Mockup CV 1",
        publishStatus: false,
        imageUrl: "https://lh3.googleusercontent.com/d/1h_5aaDk0JC4-kPki7zHRnbd549HGazNC",
        imageUrlFlip: "https://lh3.googleusercontent.com/d/1adxpp846LrZtuCE4tu1gtL_t8vVLXrFi",
        languageCode: "TH",
        titleName: "",
        firstName: "Natthawut",
        lastName: "SANGSEE",
        jobPosition: "Software Developer",
        paragraphBgImg: [
            {
                paragraphName: "greetings",
                imageUrl: "https://img.freepik.com/premium-photo/sunrise-silicon-digital-daybreak-scene-vintage-computer-room-concept-technology-enthusiasts-retro-tech-digital-aesthetics-vintage-computers-sunrise-photography_918839-31963.jpg?semt=ais_hybrid&w=740&q=80",
                bgColor: "",
                blurLevel: "xs"
            }
        ],
        contact: [
            {
                contactTypeName: "Phone",
                link: "",
                contactInfo: "063-934-9554",
                side: "",
                sequence: 1,
                icon: "telephone"
            },
            {
                contactTypeName: "Email",
                link: "",
                contactInfo: "sangsee.natthawut@gmail.com",
                side: "",
                sequence: 2,
                icon: "envelope"
            },
            {
                contactTypeName: "Github",
                link: "https://github.com/mydaylight01",
                contactInfo: "mydaylight01",
                side: "",
                sequence: 3,
                icon: "github"
            },
            {
                contactTypeName: "LinkedIn",
                link: "https://www.linkedin.com/in/my-natthawut-sangsee",
                contactInfo: "my-natthawut-sangsee",
                side: "",
                sequence: 4,
                icon: "linkedin"
            },
            {
                contactTypeName: "Line",
                link: "",
                contactInfo: "063-934-9554",
                side: "",
                sequence: 5,
                icon: "line"
            },
        ],
        summary: [
            {
                paragraph: 1,
                content: "Full Stack Developer with 2 years of experience Familiar with front-end development using Angular and React, as well as back-end development using Java Spring Boot, C# and Node.js",
                isBlank: false
            },
            {
                paragraph: 2,
                content: "Experienced in collaborating on team projects and providing technical support. Capable of creating API documentation, implementing fundamental security measures, and contributing to system performance improvements.",
                isBlank: false
            },
        ],
        skillSet: [
            {
                paragraphSide: "L",
                sequence: 1,
                skillSetName: "Programming Languages:",
                skills: [
                    {
                        skillContent: "HTML, CSS",
                        sequence: 1,
                        skillLevel: null,
                        skillIcon: "",
                        isHighlight: false
                    },
                    {
                        skillContent: "JavaScript, TypeScript",
                        sequence: 2,
                        skillLevel: null,
                        skillIcon: "",
                        isHighlight: false
                    },
                    {
                        skillContent: "Java, C#",
                        sequence: 3,
                        skillLevel: null,
                        skillIcon: "",
                        isHighlight: false
                    },
                    {
                        skillContent: "PostgreSQL, Oracle SQL",
                        sequence: 4,
                        skillLevel: null,
                        skillIcon: "",
                        isHighlight: false
                    }
                ]
            },
            {
                paragraphSide: "L",
                sequence: 2,
                skillSetName: "Front-End Frameworks / Library",
                skills: [
                    {
                        skillContent: "Angular",
                        sequence: 1,
                        skillLevel: null,
                        skillIcon: "",
                        isHighlight: false
                    },
                    {
                        skillContent: "React (CRA, NextJS, ViteJS)",
                        sequence: 2,
                        skillLevel: null,
                        skillIcon: "",
                        isHighlight: false
                    }
                ]
            },
            {
                paragraphSide: "L",
                sequence: 3,
                skillSetName: "Back-End Frameworks:",
                skills: [
                    {
                        skillContent: "Java Spring Boot",
                        sequence: 1,
                        skillLevel: null,
                        skillIcon: "",
                        isHighlight: false
                    },
                    {
                        skillContent: "Node.js (ExpressJS, NextJS)",
                        sequence: 2,
                        skillLevel: null,
                        skillIcon: "",
                        isHighlight: false
                    },
                    {
                        skillContent: "C# .NET MVC",
                        sequence: 3,
                        skillLevel: null,
                        skillIcon: "",
                        isHighlight: false
                    }
                ]
            },
            {
                paragraphSide: "L",
                sequence: 4,
                skillSetName: "UI Component Framework:",
                skills: [
                    {
                        skillContent: "Ant Design",
                        sequence: 1,
                        skillLevel: null,
                        skillIcon: "",
                        isHighlight: false
                    },
                    {
                        skillContent: "PrimeReact",
                        sequence: 2,
                        skillLevel: null,
                        skillIcon: "",
                        isHighlight: false
                    },
                    {
                        skillContent: "PrimeNG",
                        sequence: 3,
                        skillLevel: null,
                        skillIcon: "",
                        isHighlight: false
                    }
                ]
            },
            {
                paragraphSide: "R",
                sequence: 1,
                skillSetName: "CSS Frameworks:",
                skills: [
                    {
                        skillContent: "TailwindCSS, Bootstrap",
                        sequence: 1,
                        skillLevel: null,
                        skillIcon: "",
                        isHighlight: false
                    },
                ]
            },
            {
                paragraphSide: "R",
                sequence: 2,
                skillSetName: "Database Management:",
                skills: [
                    {
                        skillContent: "DBeaver, MySQL",
                        sequence: 1,
                        skillLevel: null,
                        skillIcon: "",
                        isHighlight: false
                    }
                ]
            },
            {
                paragraphSide: "R",
                sequence: 3,
                skillSetName: "Tools & Platforms:",
                skills: [
                    {
                        skillContent: "Jaspersoft",
                        sequence: 1,
                        skillLevel: null,
                        skillIcon: "",
                        isHighlight: false
                    },
                    {
                        skillContent: "Github, Gitlabs",
                        sequence: 2,
                        skillLevel: null,
                        skillIcon: "",
                        isHighlight: false
                    },
                    {
                        skillContent: "SonarQube",
                        sequence: 3,
                        skillLevel: null,
                        skillIcon: "",
                        isHighlight: false
                    },
                    {
                        skillContent: "Postman",
                        sequence: 4,
                        skillLevel: null,
                        skillIcon: "",
                        isHighlight: false
                    },
                    {
                        skillContent: "Figma, Canva",
                        sequence: 5,
                        skillLevel: null,
                        skillIcon: "",
                        isHighlight: false
                    }
                ]
            },
        ],
        workExperiences: [
            {
                jobPositionName: "Full Stack Developer",
                jobDescription: "Full Stack Developer at Soft Square International Co. ltd",
                workplaceName: "Soft Square International Co. ltd",
                sequence: 1,
                workStartDate: new Date("2026-01-18"),
                workEndDate: null,
                projects: [
                    {
                        sequence: 1,
                        projectName: "Human Resources Management System with sales requirements",
                        projectStartDate: null,
                        projectEndDate: null,
                        projectDescription: [
                            {
                                paragraphSequence: 1,
                                description: "Developed health care benefits module."
                            },
                            {
                                paragraphSequence: 2,
                                description: "Create report using jasper reports following the functional specification."
                            },
                            {
                                paragraphSequence: 3,
                                description: "Coordinate, respond to questions, and assist the team in resolving issues"
                            }
                        ]
                    },
                    {
                        sequence: 2,
                        projectName: "Cash Reconcile System",
                        projectStartDate: null,
                        projectEndDate: null,
                        projectDescription: [
                            {
                                paragraphSequence: 1,
                                description: "Built the entire frontend foundation from scratch, including layout, routing, route guards, dynamic menu based on user roles, translation system, user validation via SAML, and all core UI components. Defined frontend coding standards using React and standardized API response formats."
                            },
                            {
                                paragraphSequence: 2,
                                description: "Developed and improved shell scripts to generate API clients from Java Spring Boot using OpenAPI, eliminating the need to manually write API code in the frontend."
                            },
                            {
                                paragraphSequence: 3,
                                description: "Created various reports using Apache POI."
                            }
                        ]
                    },
                    {
                        sequence: 3,
                        projectName: "Company Website Design",
                        projectStartDate: null,
                        projectEndDate: null,
                        projectDescription: [
                            {
                                paragraphSequence: 1,
                                description: "Designed the “Our Products” page in Figma and built a sample product page using Wix."
                            }
                        ]
                    },
                    {
                        sequence: 4,
                        projectName: "Broadcast Content Management System",
                        projectStartDate: null,
                        projectEndDate: null,
                        projectDescription: [
                            {
                                paragraphSequence: 1,
                                description: "Developed responsive and modular UI components with Next.JS, TailwindCSS."
                            },
                            {
                                paragraphSequence: 2,
                                description: "Collaborated with team members to estimate development timelines."
                            },
                            {
                                paragraphSequence: 3,
                                description: "Analyzed designs of figma to create a technical specifications for team members."
                            }
                        ]
                    },
                    {
                        sequence: 5,
                        projectName: "Customer Relationship Management with Survey & Notification",
                        projectStartDate: null,
                        projectEndDate: null,
                        projectDescription: [
                            {
                                paragraphSequence: 1,
                                description: "Assisted in developing customer data management features and handled some CRs."
                            },
                            {
                                paragraphSequence: 2,
                                description: "Contributed to building a survey module for user feedback collection."
                            }
                        ]
                    },
                    {
                        sequence: 6,
                        projectName: "Human Resources Management System Package",
                        projectStartDate: null,
                        projectEndDate: null,
                        projectDescription: [
                            {
                                paragraphSequence: 1,
                                description: "Created responsive user interfaces for desktop and mobile platforms."
                            },
                            {
                                paragraphSequence: 2,
                                description: "Analyzed functional specifications and design to create a technical specifications and APIs specifications."
                            },
                            {
                                paragraphSequence: 3,
                                description: "Analyzed standards of project to control development direction."
                            }
                        ]
                    },
                    {
                        sequence: 7,
                        projectName: "Digital-Procurement System",
                        projectStartDate: null,
                        projectEndDate: null,
                        projectDescription: [
                            {
                                paragraphSequence: 1,
                                description: "Developed user interfaces and connected APIs to display data effectively."
                            },
                            {
                                paragraphSequence: 2,
                                description: "Completed issues (ER) and supports any change request (CR)."
                            },
                            {
                                paragraphSequence: 3,
                                description: "Applied SonarQube to identify and fix basic security vulnerabilities in code."
                            },
                            {
                                paragraphSequence: 4,
                                description: "Coordinated with the pentesting team for security checks."
                            }
                        ]
                    }
                ]
            },
            {
                jobPositionName: "Full Stack Developer (Internship)",
                jobDescription: "Soft Square International Co. ltd",
                workplaceName: "",
                sequence: 1,
                workStartDate: new Date("2026-01-18"),
                workEndDate: new Date("2026-01-18"),
                projects: [
                    {
                        sequence: 1,
                        projectName: "Purchase Order and Invoice Management System",
                        projectStartDate: null,
                        projectEndDate: null,
                        projectDescription: [
                            {
                                paragraphSequence: 1,
                                description: "Developed responsive and modular UI components."
                            },
                            {
                                paragraphSequence: 2,
                                description: "Developed an API for connected to frontend."
                            },
                            {
                                paragraphSequence: 3,
                                description: "Research some useful library and how to implement to project."
                            }
                        ]
                    },
                    {
                        sequence: 2,
                        projectName: "Account Receivable System",
                        projectStartDate: null,
                        projectEndDate: null,
                        projectDescription: [
                            {
                                paragraphSequence: 1,
                                description: "Contributed to full-stack functionalities with supervision from senior developers."
                            },
                            {
                                paragraphSequence: 2,
                                description: "Generating report from Jasper Reports for printing Invoices and Receives."
                            }
                        ]
                    }
                ]
            }
        ],
        achievements: [
            {
                achievementName: "Tuksom Garage",
                description: "Represented team as a pitcher in a pitching idea competition (One Stop Service Platform for C2C)",
                achievementDate: null,
                sequence: 1,
                link: ""
            },
            {
                achievementName: "Company & Team Knowledge Sharing Session",
                description: "Contributed to knowledge-sharing sessions to enhance team productivity.",
                achievementDate: null,
                sequence: 2,
                link: ""
            },
            {
                achievementName: "Internship Student Guidance",
                description: "Provided guidance and training for internship students in each batch on fundamental programming topics",
                achievementDate: null,
                sequence: 3,
                link: ""
            }
        ],
        educationExperiences: [
            {
                sequence: 1,
                startDate: new Date("2020-01-01"),
                endDate: new Date("2024-01-01"),
                dateFormat: "YYYY",
                gpa: 3.32,
                degree: "Bachelor of Science in Computer Science",
                detail: "Information Technology (Kasetsart University, Kamphaeng Saen Campus)",
                honor: "Second Class Honors"
            },
        ],
        languageSkill: [
            {
                sequence: 1,
                languageName: "Thai (Native)",
                powerIcon: "",
                powerLevel: null
            },
            {
                sequence: 2,
                languageName: "English (Limited)",
                powerIcon: "",
                powerLevel: null
            }
        ]
    }
}];

export const findCvByUuid = (uuid: string): Promise<MyCvData | undefined> => {
    return new Promise<MyCvData | undefined>((resolve, reject) => {
        const response: MyCvData | undefined = myCvDataTemplate?.find((cv) => cv.personalCv.uuid === uuid);

        const randomTimeout = Math.floor(Math.random() * 1000); // random timeout between 0 and 1000
        console.log("[findCvByUuid] randomTimeout: ", randomTimeout);

        setTimeout(() => {
            if (response) {
                resolve(response);
            } else {
                reject(new Error("CV not found"));
            }
        }, randomTimeout);
    });
}