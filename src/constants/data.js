// Navigation Data
export const NAV_LINKS = [
    { path: '/', label: 'Overview' },
    { path: '/skills', label: 'Abilities' },
    { path: '/experience', label: 'Experience' },
    { path: '/projects', label: 'Projects' },
    //{ path: '/lab', label: 'Lab' },
    { path: '/certifications', label: 'Certs' },
    { path: '/contact', label: 'Contact' },
];

// Profile Data (OperativeProfile)
export const PROFILE_DATA = {
    // Primary Identity
    title: 'Software Engineer',
    subtitle: '3+ Years Experience · Frontend-Heavy Full Stack',
    executiveSummary: `Developer with 3 years of experience in frontend technologies like React.js and Angular, and backend development with Java, Spring Boot, Node.js, and Python. Proven track record in creating and developing high-quality applications through collaborative agile methodologies. Committed to leveraging technical expertise and a passion for innovation to drive success in the software development landscape. Recently built a personal AI-driven execution and planning system to learn dependency management, task orchestration, and decision gating in complex product workflows.`,

    // Top 4 Tech Stack (Hero visibility)
    topTech: ['React', 'TypeScript', 'Angular', 'Java', 'Node.js'],

    // Stats
    stats: {
        location: 'Remote / India',
        experience: '3+ Years',
        joined: '2022 - Present',
        specialty: 'Frontend-Heavy Full Stack'
    },

    // Timeline
    timeline: [
        { year: '2025.05', label: 'Coupa Software' },
        { year: '2024.08', label: 'Self-Employed' },
        { year: '2022.07', label: 'Publicis Sapient' },
        { year: '2018.08', label: 'Cummins College of Engineering' }
    ]
};

// Global Stats (GlobalStatsPanel)
export const GLOBAL_STATS_DATA = {
    matrix: [
        { label: 'EXPERIENCE', value: '3+ Years', sub: 'Enterprise SaaS Development', color: 'text-primary' },
        { label: 'USERS IMPACTED', value: '500+', sub: 'Enterprise Users (SaaS Platform)', color: 'text-white' },
        { label: 'IMPACT', value: 'High', sub: 'Performance & Scalability', color: 'text-primary' },
        { label: 'OWNERSHIP', value: 'Feature Owner', sub: 'Frontend Architecture', color: 'text-white' }
    ],
    // Full tech stack (Skills Matrix displays all)
    gear: [
       'React', 'TypeScript', 'HTML', 'CSS', 'JavaScript', 'Angular', 'Bootstrap', 'Material UI', 'SASS', 'Redux', 'Node.js', 'Java', 'Spring Boot', 'Rest API', 'Microservices', 'MySQL', 'Database Design', 'Team Collaboration'
    ],
    recentLearnings: ['n8n Automation', 'AI Agent Development']
};

// Role Impact Log Data (keeps "Quest" visual styling)
export const QUEST_DATA = {
    sectionTitle: 'Role Impact Log', // Used in display
    professional: [
        {
            role: 'Software Engineer',
            company: 'Coupa Software',
            description: 'Frontend modernization and feature development for enterprise spend management platform.',
            duration: 'May 2025 - Present',
            status: 'Current',
            type: 'PROFESSIONAL'
        },
        {
            role: 'Full-stack Developer',
            company: 'Self Employed',
            description: 'Built web applications for multi-trade companies and cooperative societies (Angular, React).',
            duration: 'Aug 2024 - Apr 2025',
            status: 'Completed',
            type: 'PROFESSIONAL'
        },
        {
            role: 'Associate Software Development Engineer 1',
            company: 'Publicis Sapient',
            description: 'Built React.js + TypeScript components for client-facing platforms with focus on accessibility.',
            duration: 'Jul 2022 - Jun 2024',
            status: 'Completed',
            type: 'PROFESSIONAL'
        },
        {
            role: 'Junior Angular Developer',
            company: 'RewaWorks IT Solutions',
            description: 'Developed responsive UI components for pet e-commerce platform (Angular, Bootstrap).',
            duration: 'Jun 2021 - Aug 2021',
            status: 'Completed',
            type: 'PROFESSIONAL'
        }
    ],
    side: [
        {
            role: 'Hiring Nurse Platform',
            company: 'Personal',
            description: 'A TypeScript-based platform to connect nurses with employers — user profiles, job listings and hiring/scheduling workflows (frontend + platform features).',
            status: 'Work in Progress',
            type: 'SIDE'
        },
        {
            role: 'saas-dynamic-pricing',
            company: 'Personal',
            description: 'TypeScript-first SaaS dynamic pricing project — pricing rules engine and UI for subscription/tiered plans.',
            status: 'Production',
            type: 'SIDE'
        },
        {
            role: 'Snake Game',
            company: 'Personal',
            description: 'Classic Snake implemented for the browser using JavaScript, HTML and CSS — gameplay, scoring and responsive canvas controls.',
            status: 'Demo',
            type: 'SIDE'
        },
        {
            role: 'Dot and Box Game',
            company: 'Personal',
            description: 'Browser implementation of Dots & Boxes (two-player turn-based game) using JavaScript and HTML/CSS.',
            status: 'Demo',
            type: 'SIDE'
        },
        {
            role: '2048 Game',
            company: 'Personal',
            description: '2048 sliding-tile puzzle implemented with JavaScript and CSS — grid movement, merging tiles and score tracking.',
            status: 'Demo',
            type: 'SIDE'
        }
    ]
};

// Experience Data
export const EXPERIENCE_DATA = [
    {
        company: "Coupa Software",
        role: "Software Engineer",
        period: "May 2025 — Present",
        location: "Bangalore, Hybrid",
        type: "Full-time",
        active: true,
        respnsibility: "Frontend Ownership within Supplier Domain",
        visibility: "NDA / Enterprise Platform",
        description:
        "Contributor to the supplier-facing platform of a large-scale enterprise spend management system. Focused on enhancing existing UI components, improving performance, and maintaining consistency within a complex, production-grade frontend ecosystem.",
        highlights: [
            "Developed and enhanced core frontend features for supplier-facing workflows used by enterprise customers at scale.",
            "Actively participated in Agile ceremonies, peer code reviews, and cross-team discussions to maintain high code quality and consistency.",
            "Improved performance and user experience of critical UI components through optimized rendering strategies and state management patterns.",
            "Worked within a complex microservices architecture, collaborating closely with backend and platform teams.",
            "Contributed to ongoing frontend modernization efforts aligned with long-term platform scalability goals."
        ],
        tech: ["React", "TypeScript", "Enterprise UI", "Ruby on Rails", "Feature Flags"],
        projects: [
            {
                title: "Supplier Platform",
                xpCategory: "Enterprise SaaS",
                status: "Enterprise Product",
                logo: null,
                description:
                "Worked on supplier onboarding and profile-related workflows within a high-traffic enterprise platform used by global customers.",
                contributions: [
                    "Enhanced existing UI components to improve usability and responsiveness.",
                    "Refactored legacy components as part of frontend modernization efforts.",
                    "Resolved performance bottlenecks affecting key supplier-facing screens.",
                    "Participated in peer code reviews to maintain code quality and consistency."
                ],
                tags: [ "Prod", "Enterprise Deployment", "UX", "Performance Improvements"]
            }
        ],
        metrics: [
            { value: "Enterprise", label: "Scale Platform" },
            { value: "Supplier", label: "Domain Focus" },
            { value: "UX", label: "Performance Improvements" }
        ]
    },
    {
        company: "Self-Employed",
        role: "Full Stack Developer",
        period: "Jul 2024 — Apr 2025",
        location: "Remote",
        type: "Freelance",
        active: false,
        visibility: "Client Work / NDA",
        responsibility: "End-to-End System Design & Delivery",
        description:
        "Delivered full-stack and frontend-heavy solutions independently, owning system design, development, deployment, and post-release support.",
        tech: ["React", "Node.js", "SQL Server", "Angular", "Vercel", "Rest APIs"],
        highlights: [
            "Built the Prince Multi-Trade internal platform with complete end-to-end ownership: frontend in React, backend in Node.js, SQL Server database design, and production deployment.",
            "Designed and implemented full user journeys including project tracking, site progress monitoring, and role-based access control.",
            "Developed the Angular-based frontend for eLekhapal, an accounting platform for cooperative societies, focusing on usability and performance.",
            "Delivered a responsive personal portfolio website for a public-facing client, emphasizing brand identity and cross-device compatibility.",
            "Handled deployment, environment configuration, and post-launch iterations independently."
        ],
        projects: [
            {
                title: "Prince Multi-Trade",
                xpCategory: "Construction Management System",
                status: "Private Client",
                logo: null,
                description:
                "An end-to-end system built to digitize and streamline construction project tracking for a multi-trade organization previously reliant on manual record-keeping.",
                contributions: [
                    "Designed and developed the complete frontend using React.",
                    "Built backend services using Node.js and SQL Server.",
                    "Designed database schema from scratch, including audit and history tracking.",
                    "Implemented role-based access for owners and field-level users.",
                    "Enabled image uploads for construction site progress tracking.",
                    "Handled environment configuration, deployment, and production bug fixes."
                ],
                tags: [ "E2E", "Full Ownership", "Prod", "Actively Used"]
            },
            {
                title: "eLekhapal",
                xpCategory: "Accounting Platform",
                status: "Private Client",
                logo: null,
                description:
                "Frontend redevelopment of an accounting platform for cooperative societies, focusing on usability for non-technical users.",
                contributions: [
                "Designed Angular frontend architecture from scratch.",
                "Implemented complex forms, tables, and validation-heavy workflows.",
                "Worked with real accounting data structures.",
                "Simplified accounting terminology and UI flows for better usability."
                ],
                tags: [ "Angular", "Frontend Rebuild", "UX", "Usability Improved"]
            }
        ],
        metrics: [
            { value: "E2E", label: "Ownership" },
            { value: "3+", label: "Client Projects" },
            { value: "Prod", label: "Live Deployments" }
        ]
    },
    {
        company: "Publicis Sapient",
        role: "Associate Software Development Engineer",
        period: "Jul 2022 — Jun 2024",
        location: "Pune · Remote",
        type: "Full-time",
        active: false,
        visibility: "Client Projects / NDA",
        responsibility: "Frontend + Backend Integration",
        description:
        "Worked on large client-facing platforms as part of cross-functional Agile teams. Contributed to frontend development, backend integration, accessibility compliance, and performance optimization across multiple enterprise projects.",
        tech: ["React", "TypeScript", "Java", "Spring Boot", "SWR", "Accessibility (WCAG)", "REST APIs"],
        highlights: [
            "Built and maintained scalable React + TypeScript components for enterprise client platforms.",
            "Integrated frontend applications with Spring Boot APIs, implementing caching strategies using SWR.",
            "Reduced redundant API calls by approximately 30%, improving load times and overall performance.",
            "Ensured WCAG accessibility compliance using semantic HTML, ARIA roles, and NVDA testing.",
            "Actively contributed to sprint planning, code reviews, and documentation to ensure maintainable codebases."
        ],
        projects: [
            {
                title: "Women in Retail",
                xpCategory: "Social Media Platform",
                status: "Internal Project",
                logo: null,
                signature: true,
                description:
                "A greenfield, production-grade social media platform built to support multiple user roles and complex interaction flows across user, admin, and super-admin journeys.",
                contributions: [
                    "Built frontend architecture using a component-based approach following Atomic Design principles.",
                    "Developed and synchronized complex user journeys across User, Admin, and Super Admin roles.",
                    "Implemented role-based authorization logic on the frontend.",
                    "Collaborated on backend APIs for discussion groups and selected user workflows.",
                    "Improved frontend load performance by approximately 20%.",
                    "Reduced redundant API calls by ~30% using optimized data-fetching strategies.",
                    "Actively contributed to bug reduction by restructuring unclear responsibility boundaries."
                ],
                tags: ["3 User Roles", "Load Time Improved", "API Calls Reduced"]
            },
            {
                title: "Keurig",
                xpCategory: "E-commerce",
                status: "External Client",
                logo: null,
                description:
                "Long-running consumer-facing platform engagement for a global beverage brand, operating under strict enterprise and accessibility standards.",
                contributions: [
                    "Implemented UI enhancements and feature upgrades within an existing React + TypeScript codebase.",
                    "Worked on performance improvements to enhance perceived responsiveness.",
                    "Adhered to a centralized design system and enterprise-level code review processes.",
                    "Worked with feature flags and environment-based configurations.",
                    "Gained hands-on exposure to accessibility and multilingual support constraints."
                ],
                tags: [ "Prod", "Customer-Facing Release", "UX", "Responsiveness Improved"]
            }
        ],
        metrics: [
            { value: "3", label: "User Roles" },
            { value: "30%", label: "API Call Reduction" },
            { value: "20%", label: "Load Time Improved" },
            { value: "WCAG", label: "Accessibility Compliance" },
            { value: "Agile", label: "Team Delivery" },
            { value: "Prod", label: "Customer-Facing Release" }
        ]
    },
    {
        company: "RewaWorks IT Solutions",
        role: "Junior Angular Developer",
        period: "Jun 2021 — Oct 2021",
        location: "Pune, Remote",
        type: "Internship",
        active: false,
        visibility: "Client Projects / NDA",
        responsibility: "Frontend Feature Development",
        description:
        "Early-career internship focused on frontend fundamentals and real-world Angular application development.",
        tech: ["Angular", "TypeScript", "Bootstrap"],
        highlights: [
            "Developed responsive UI components using Angular, TypeScript, and Bootstrap.",
            "Implemented reusable modules that improved development efficiency across features.",
            "Worked on API integration and data binding to deliver smooth customer experiences.",
            "Gained hands-on experience in frontend performance optimization and debugging."
        ],
        projects: [
            {
                title: "Pet Shopping Platform",
                xpCategory: "E-commerce",
                status: "External Client",
                logo: null,
                description:
                "A multi-page e-commerce platform built to support pet product discovery and purchasing.",
                contributions: [
                    "Developed responsive UI components using Angular and Bootstrap.",
                    "Worked on product listing and cart functionality.",
                    "Integrated APIs and implemented component-level data flow.",
                    "Learned core Angular concepts including component communication and state handling."
                ],
                tags: [ "Angular","Foundational Learning", "UI", "Component Development"]
            }
        ],
        metrics: [
            { value: "SPA", label: "E-commerce App" },
            { value: "UI", label: "Component Development" }
        ]
    }
];

// Projects Data
export const PROJECTS_DATA = {
    projects: [
        {
            title: 'Hiring Nurse Platform',
            description: 'A TypeScript-based web platform to connect nurses with employers — includes user profiles, job listings and hiring/scheduling workflows (inferred from repo name and language composition).',
            status: 'production',
            tags: ['TypeScript', 'JavaScript', 'Web App', 'Healthcare', 'Platform'],
            xp: 600,
            xpCategory: 'Enterprise_App',
            githubLink:'https://github.com/samruddhi0903/Hiring-nurse-platform'
        },
        {
            title: 'Snake Game',
            description: 'Classic Snake game implemented for the browser using JavaScript, HTML and CSS (player controls, scoring and responsive canvas/grid inferred).',
            status: 'demo',
            tags: ['JavaScript', 'HTML', 'CSS', 'Game', 'Browser'],
            xp: 150,
            xpCategory: 'Game',
            githubLink: 'https://github.com/samruddhi0903/Snake-Game'
        },
        {
            title: 'Dot and Box Game',
            description: 'Browser implementation of the Dots & Boxes game (JavaScript + HTML/CSS) — two-player turn-based puzzle/strategy game (inferred).',
            status: 'demo',
            tags: ['JavaScript', 'HTML', 'CSS', 'Game', 'Multiplayer'],
            xp: 140,
            xpCategory: 'Game',
            githubLink: 'https://github.com/samruddhi0903/Dot-and-Box-Game'
        },
        {
            title: 'saas-dynamic-pricing',
            description: 'TypeScript-first SaaS dynamic pricing project — likely a pricing rules engine / pricing UI for subscriptions or tiered plans (inferred).',
            status: 'production',
            tags: ['TypeScript', 'CSS', 'SaaS', 'Pricing', 'Web App'],
            xp: 520,
            xpCategory: 'SaaS_Tool',
            githubLink: 'https://github.com/samruddhi0903/saas-dynamic-pricing'
        },
        {
            title: '2048 Game',
            description: 'Browser implementation of the 2048 puzzle game using JavaScript, HTML and CSS (grid sliding, merging tiles, score tracking inferred).',
            status: 'demo',
            tags: ['JavaScript', 'HTML', 'CSS', 'Game', 'Puzzle'],
            xp: 180,
            xpCategory: 'Game',
            githubLink: 'https://github.com/samruddhi0903/2048-game'
        }
    ],
    xpSummary: [
        { skill: 'Enterprise Systems', level: 'High' },
        { skill: 'SaaS & Pricing Engines', level: 'High' },
        { skill: 'TypeScript & Frontend Engineering', level: 'Expert' },
        { skill: 'JavaScript & Browser Games', level: 'High' },
        { skill: 'Healthcare Domain Knowledge', level: 'Medium' },
        { skill: 'UI/UX & Responsive Design', level: 'Medium' },
        { skill: 'Algorithms & Game Logic', level: 'Medium' },
        { skill: 'Accessibility', level: 'Medium' },
    ]
};

// Skills Data
export const SKILLS_DATA = {
    // Core Technologies (Primary ownership)
    core: [,
        { name: 'React', level: 'Intermediate', exp: '3y+', icon: 'devicon-react-original' },
        { name: 'TypeScript', level: 'Intermediate', exp: '3y+', icon: 'devicon-typescript-plain' },
        { name: 'HTML', level: 'Expert', exp: '3y+', icon: 'devicon-html5-plain' },
        { name: 'CSS', level: 'Intermediate', exp: '3y+', icon: 'devicon-css3-plain' },
        { name: 'JavaScript', level: 'Intermediate', exp: '3y+', icon: 'devicon-javascript-plain' },
        { name: 'Angular', level: 'Intermediate', exp: '2y+', icon: 'devicon-angularjs-plain' },
        { name: 'Bootstrap', level: 'Expert', exp: '2y+', icon: 'devicon-bootstrap-plain' },
        { name: 'Material UI', level: 'Intermediate', exp: '1y+', icon: 'devicon-materialui-plain' },
        { name: 'SASS', level: 'Intermediate', exp: '2y+', icon: 'devicon-sass-plain' },
        { name: 'Redux', level: 'Intermediate', exp: '<1y', icon: 'devicon-redux-plain' },
        { name: 'Node.js', level: 'Intermediate', exp: '2y', icon: 'devicon-nodejs-plain' },
        { name: 'Java', level: 'Intermediate', exp: '2y+', icon: 'devicon-java-plain' },
        { name: 'Spring Boot', level: 'Intermediate', exp: '2y+', icon: 'devicon-spring-plain' },
        { name: 'Rest API', level: 'Intermediate', exp: '3y+', icon: 'devicon-fastapi-plain' },
        { name: 'Microservices', level: 'Intermediate', exp: '2y', icon: 'devicon-kubernetes-plain' },
        { name: 'MySQL', level: 'Intermediate', exp: '2y+', icon: 'devicon-mysql-plain' },
        { name: 'Database Design', level: 'Intermediate', exp: '3y+', icon: 'devicon-azuresqldatabase-plain' },
        { name: 'Team Collaboration', level: 'Expert', exp: '3y+', icon: 'si si-asana' },
    ],

    // Working Knowledge (Supporting)
    working: [
        { name: 'SQL Server', level: 'Intermediate', exp: '2y+', icon: 'devicon-microsoftsqlserver-plain' },
        { name: 'Tailwind', level: 'Beginner', exp: '<1y', icon: 'devicon-tailwindcss-plain' },
        { name: 'Next.js', level: 'Beginner', exp: '<1y', icon: 'devicon-nextjs-plain' },
        { name: 'Python', level: 'Beginner', exp: '1y+', icon: 'devicon-python-plain' },
        { name: 'Django', level: 'Beginner', exp: '<1y', icon: 'devicon-django-plain' },
        { name: 'Ruby on Rails', level: 'Beginner', exp: '1y+', icon: 'devicon-ruby-plain' },
        { name: 'PostgreSQL', level: 'Beginner', exp: '1y+', icon: 'devicon-postgresql-plain' },
        { name: 'MongoDB', level: 'Beginner', exp: '1y+', icon: 'devicon-mongodb-plain' },
        { name: 'SQLite', level: 'Beginner', exp: '1y+', icon: 'devicon-sqlite-plain' },
    ],

    // Exposure / Familiarity
    exposure: [
        { name: 'n8n', level: 'Beginner', exp: '<1y', icon: 'si si-n8n' },
        { name: 'AI Agents', level: 'Beginner', exp: '<1y', icon: 'si si-probot' },
        { name: 'Automation', level: 'Beginner', exp: '<1y', icon: 'devicon-nodered-plain' },
    ],

    radar: {
        labels: ['Problem Framing', 'Ownership', 'Collaboration', 'Communication', 'Adaptability'],
        data: [90, 85, 82, 80, 92],
        stats: {
            leadership: 88,
            softSkills: 92
        }
    },

    infrastructure: [
        { name: 'Git / GitHub', status: 'Version Control', icon: 'devicon-github-plain', color: 'text-slate-400' },
        { name: 'Figma', status: 'Design Collaboration', icon: 'devicon-figma-plain', color: 'text-purple-400' },
        { name: 'Visual Studio Code', status: 'IDE', icon: 'devicon-vscode-plain', color: 'text-blue-400' },
        { name: 'Cursor', status: 'IDE', icon: 'si si-cursor', color: 'text-white-400' },
        { name: 'Jira', status: 'Task Management Tool', icon: 'devicon-jira-plain', color: 'text-blue-400' },
        { name: 'Confluence', status: 'Document Management Tool', icon: 'devicon-confluence-plain', color: 'text-blue-400' },
        { name: 'Postman', status: 'API Testing Tool', icon: 'devicon-postman-plain', color: 'text-orange-400' },
        { name: 'ChatGPT', status: 'AI model', icon: 'si si-robotframework', color: 'text-blue-400' },
        { name: 'Gemini', status: 'AI model', icon: 'si si-googlegemini', color: 'text-blue-400' },
        { name: 'Claude', status: 'AI model', icon: 'si si-claude', color: 'text-blue-400' },
        { name: 'Anthropic', status: 'AI model', icon: 'si si-anthropic', color: 'text-blue-400' },
        { name: 'Vercel', status: 'Deployment Platform', icon: 'devicon-vercel-plain', color: 'text-blue-400' },
    ]
};

// Certifications Data
export const CERTIFICATIONS_DATA = {
    verificationStatement: 'All credentials verified via official issuer platforms.',
    list: [
        {
            title: 'Google Cloud Certified Cloud Digital Leader',
            issuer: 'Google',
            tier: 'Foundation',
            iconColor: 'blue'
        },
        {
            title: 'AWS Partner: Accreditation (Technical)',
            issuer: 'Amazon Web Services',
            tier: 'Accreditation',
            iconColor: 'primary'
        },
        {
            title: 'Generative AI Mastermind',
            issuer: 'Outskill',
            tier: 'Associate',
            iconColor: 'purple'
        },
        {
            title: 'AI Tools Workshop',
            issuer: 'Be10x',
            tier: 'Associate',
            iconColor: 'teal'
        },
    ]
};

// Contact Data
export const CONTACT_DATA = {
    uplinks: [
        { name: 'LINKEDIN', handle: 'linkedin.com/in/samruddhi-umarkar', icon: 'in', color: 'bg-blue-900/30 text-blue-400 border-blue-900/50' },
        { name: 'GITHUB', handle: 'github.com/samruddhi0903', icon: 'Git', color: 'bg-gray-800 text-gray-400 border-gray-700' },
    ],
};

// Lab Data
export const LAB_DATA = {
    harryPotter: {
        original: {
            stack: ['Java', 'JSP', 'Servlet', 'MySQL', 'Bootstrap'],
            limitations: [
                'Monolithic architecture made updates painful',
                'Page reloads for every interaction (bad UX)',
                'Tight coupling between frontend and backend logic',
                'No reusable components'
            ]
        },
        trigger: [
            'Discovered React\'s component-based model',
            'Realized the power of client-side routing',
            'Wanted to decouple UI from backend logic'
        ],
        rebuild: {
            stack: ['React 18', 'Tailwind CSS', 'Framer Motion', 'Vite', 'Node.js'],
            intent: [
                'Atomic Design for maximum reusability',
                'Dark mode first UI/UX',
                'Smooth page transitions without reloads',
                'Mock backend for rapid prototyping'
            ]
        }
    },
    futureClass: {
        current: ['AI Agents', 'n8n Automation', 'RAG Pipelines', 'Vector DBs'],
        problems: [
            'Bridging the gap between deterministic logic and LLM reasoning',
            'Reducing hallucination in production RAG systems',
            'Automating repetitive dev workflows intelligently'
        ],
        vision: [
            'Build a "Second Brain" knowledge system',
            'Deploy autonomous agents for code review',
            'Master localized LLM deployment'
        ],
        trajectory: ['Frontend Engineer', 'Full Stack Engineer', 'System Architect', ' AI Solutions Architect']
    },
    loot: [
        'Agentic Workflow',
        'Automated Pipeline',
        'RAG Knowledge Base',
        'Prompt Engineering'
    ]
};

// Side Quest Data (Distributed Event Bus)
export const SIDE_QUEST_DATA = {
    techStack: {
        frontend: ['React', 'Tailwind', 'Vite', 'Socket.io Client'],
        backend: ['Node.js', 'Express', 'Redis', 'RabbitMQ'],
        database: ['PostgreSQL', 'TimescaleDB'],
        devops: ['Docker', 'Nginx', 'GitHub Actions']
    },
    logEntries: [
        { id: 'CMS-892', date: '2025-02-14', title: 'Throughput Optimization', description: 'Implemented batch processing for high-volume event streams, increasing throughput by 400%.', isLatest: true },
        { id: 'CMS-845', date: '2025-02-10', title: 'Fault Tolerance', description: 'Added dead-letter queues and retry mechanisms for failed message delivery.', isLatest: false },
        { id: 'CMS-801', date: '2025-02-01', title: 'Core Architecture', description: 'Established basic pub/sub mechanism using Redis streams as the primary message broker.', isLatest: false },
    ],
    xpGains: [
        { skill: 'System Design', xp: 500, icon: 'architecture' },
        { skill: 'Network I/O', xp: 300, icon: 'settings_ethernet' },
        { skill: 'Data Consistency', xp: 450, icon: 'database' },
        { skill: 'Latency Tuning', xp: 250, icon: 'speed' },
    ]
};
