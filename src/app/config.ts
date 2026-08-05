// Centralized portfolio content. Keep profile copy here so every section stays in sync.
export const personal = {
  name: 'Mohamed Ali Khan',
  initials: 'MAK',
  role: 'Senior Software Engineer',
  tagline: 'Engineering secure, scalable enterprise systems from user experience to cloud infrastructure.',
  email: 'Mokhan0867@gmail.com',
  phone: '(225) 421-0403',
  phoneHref: '+12254210403',
  location: 'Naperville, IL',
  availability: 'Senior Software Engineer opportunities',
  education: 'B.S. in Engineering, University of Mysore',
  github: 'https://github.com/mokhan0867',
  linkedin: 'https://www.linkedin.com/in/mohammed-ali-khan-09bb841b7/',
  instagram: '',
  bio: [
    'Senior Software Engineer with 14+ years of experience designing, developing, and supporting enterprise web and client/server applications. My work spans C#, ASP.NET Core, MVC, Web API, Angular, Entity Framework, SQL Server, Azure, microservices, and CI/CD.',
    'I build secure, maintainable systems using N-tier and clean architecture, integrate REST and SOAP services, tune database performance, and automate testing and delivery. I also lead technical design and code reviews, mentor developers, and partner with product, QA, architecture, and DevOps teams in Agile environments.',
  ],
  cvPath: 'assets/Resume.pdf',
};

export interface Experience {
  company: string;
  role: string;
  city: string;
  industry: string;
  startDate: string;
  endDate: string;
  highlights: string[];
}

export const experiences: Experience[] = [
  {
    company: 'NCR Atleos',
    role: 'Senior Software Engineer',
    city: 'Chicago, IL',
    industry: 'FinTech · ATM & Self-Service Banking · Transaction Processing',
    startDate: 'Jul 2021',
    endDate: 'Aug 2026',
    highlights: [
      'Designed, developed, and supported enterprise self-service and transaction-processing applications using C#, .NET 6, ASP.NET Core, and RESTful Web APIs.',
      'Built modular microservices and reusable business components using clean architecture, SOLID principles, dependency injection, and established design patterns.',
      'Developed responsive interfaces with Angular, TypeScript, HTML5, CSS3, Bootstrap, and Angular Material, integrating internal, third-party, and legacy systems through REST, JSON, XML, and messaging.',
      'Created Entity Framework Core and LINQ data-access layers and optimized SQL Server queries, indexes, and stored procedures.',
      'Deployed Azure App Service, Functions, Service Bus, Key Vault, Storage, and Application Insights workloads; containerized services with Docker and supported Kubernetes deployments.',
      'Implemented OAuth 2.0, OpenID Connect, JWT, RBAC, and Microsoft Entra ID, plus Azure DevOps CI/CD pipelines for automated builds, tests, and releases.',
      'Expanded regression coverage with xUnit, NUnit, Moq, and Postman and improved performance through async programming, caching, profiling, centralized logging, and distributed tracing.',
      'Led technical design and code reviews, mentored developers, collaborated across product, architecture, QA, DevOps, and support, and drove root-cause analysis for production incidents.',
    ],
  },
  {
    company: 'Hill-Rom, Inc.',
    role: 'Senior Software Engineer',
    city: 'Chicago, IL',
    industry: 'Healthcare Technology · Medical Devices · Connected Care',
    startDate: 'Dec 2018',
    endDate: 'Apr 2021',
    highlights: [
      'Delivered full-stack applications using C#, ASP.NET MVC, Web API, Angular, JavaScript, HTML5, CSS3, and Angular Material in an Agile environment.',
      'Built Angular components, pipes, services, routing, and HTTP integrations for responsive single-page workflows.',
      'Developed reusable business and middleware components with dependency injection, IOC containers, MVVM, MVC, WPF, XAML, and WCF.',
      'Implemented Entity Framework repositories and LINQ data access for SQL Server and Oracle; designed stored procedures, triggers, views, indexes, and SSIS data workflows.',
      'Created UML diagrams and technical design documents, built NUnit and Moq tests, reviewed code, and promoted engineering standards.',
      'Collaborated with analysts, architects, developers, managers, users, and support teams while providing maintenance, troubleshooting, deployment, and production support.',
    ],
  },
  {
    company: 'Cyber Coders',
    role: 'Full Stack Engineer',
    city: 'Austin, TX',
    industry: 'Staffing · Recruiting · Talent Management',
    startDate: 'Jul 2017',
    endDate: 'Nov 2018',
    highlights: [
      'Designed Microsoft-based business applications and provided technical direction, design reviews, and code reviews to distributed teams.',
      'Built three-tier applications with C#, ASP.NET MVC, Web API, AngularJS, JavaScript, jQuery, Bootstrap, HTML5, and CSS3.',
      'Created MVC controllers, Razor and partial views, shared templates, HTML helpers, web grids, and client- and server-side validation.',
      'Developed and tested SOAP and REST services and established automated functional and regression testing processes.',
      'Designed SQL Server stored procedures, functions, views, triggers, indexes, and data access using T-SQL and PL/SQL.',
      'Implemented form- and role-based authentication and state management, resolved production issues, and supported Azure releases and CI/CD delivery.',
    ],
  },
  {
    company: 'T. Rowe Price',
    role: 'Senior Backend Developer',
    city: 'Baltimore, MD',
    industry: 'Investment Management · Asset Management · Financial Services',
    startDate: 'Mar 2016',
    endDate: 'Apr 2017',
    highlights: [
      'Contributed across the SDLC, from requirements, design, and coding through testing, deployment, Scrum ceremonies, and defect reviews.',
      'Developed ASP.NET Web Forms and MVC applications with C#, HTML, CSS, JavaScript, custom controls, master pages, and reusable components.',
      'Designed application patterns for WCF communication, exception handling, validation, and layered business logic.',
      'Implemented ADO.NET and LINQ access for SQL Server and XML and improved performance through query tuning, indexing, deadlock remediation, and stored procedure optimization.',
      'Built drill-down and drill-through SSRS reports and data-rich interfaces with Telerik RadControls.',
      'Used TFS for source control, work tracking, defects, and release coordination and created NUnit functional and performance tests.',
    ],
  },
  {
    company: 'Raytheon Technologies',
    role: 'Associate Full Stack Developer',
    city: 'San Francisco, CA',
    industry: 'Aerospace · Defense · Mission-Critical Systems',
    startDate: 'May 2013',
    endDate: 'Aug 2015',
    highlights: [
      'Gathered requirements and created UML use cases, class diagrams, and sequence diagrams for N-tier .NET applications.',
      'Designed database schemas and reusable data-access components with C#, ADO.NET, Microsoft Application Blocks, and LINQ.',
      'Created SQL Server tables, views, and stored procedures and optimized queries with Query Analyzer, SQL Profiler, and connection pooling.',
      'Developed Crystal Reports and SSRS operational reports and supported database migrations.',
      'Built master pages, managed ASP.NET client- and server-side state, created builds, and promoted releases using TFS and Visual SourceSafe.',
      'Performed unit, integration, stress, regression, and database testing throughout the SDLC.',
    ],
  },
  {
    company: 'AAXA',
    role: 'Web Developer',
    city: 'San Francisco, CA',
    industry: 'Consumer Electronics · Display Technology · Manufacturing',
    startDate: 'Nov 2012',
    endDate: 'Apr 2013',
    highlights: [
      'Designed and maintained internal interface applications for reliable data sharing across enterprise systems.',
      'Analyzed interface changes, coordinated work across applications and developers, and maintained internal and external data models.',
      'Designed Oracle structures and developed DDL, DML, functions, procedures, and packages.',
      'Defined application security, storage, performance, and database-change requirements with administrators and configuration teams.',
      'Led interface maintenance and support under configuration-management and SDLC processes.',
      'Produced requirements, analysis, design, technical documentation, and Microsoft Project schedules for large initiatives.',
    ],
  },
];

export interface SkillGroup {
  category: string;
  skills: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    category: 'Languages & Frameworks',
    skills: ['C#', 'VB.NET', 'JavaScript', 'TypeScript', '.NET 6', '.NET Framework', 'ASP.NET Core', 'ASP.NET MVC', 'WCF', 'WPF', 'Angular', 'AngularJS'],
  },
  {
    category: 'Frontend Engineering',
    skills: ['HTML5', 'CSS3', 'Angular Material', 'Bootstrap', 'jQuery', 'AJAX', 'Razor Views', 'XAML', 'Telerik RadControls', 'Responsive Design', 'Single-Page Applications'],
  },
  {
    category: 'Backend, APIs & Integration',
    skills: ['ASP.NET Core Web API', 'REST', 'SOAP', 'XML', 'JSON', 'gRPC', 'Microservices', 'Middleware', 'Dependency Injection', 'EF Core', 'LINQ', 'ADO.NET', 'Message-Based Integration'],
  },
  {
    category: 'Data & Messaging',
    skills: ['SQL Server', 'Oracle', 'MySQL', 'T-SQL', 'PL/SQL', 'Stored Procedures', 'Triggers', 'Views', 'Indexes', 'SSIS', 'Azure Service Bus'],
  },
  {
    category: 'Cloud & DevOps',
    skills: ['Azure App Service', 'Azure Functions', 'Key Vault', 'Azure Storage', 'Application Insights', 'AWS', 'Docker', 'Kubernetes', 'Azure DevOps', 'Git', 'TFS', 'CI/CD'],
  },
  {
    category: 'Security & Identity',
    skills: ['OAuth 2.0', 'OpenID Connect', 'JWT', 'RBAC', 'Microsoft Entra ID', 'Secrets Management', 'Secure API Design'],
  },
  {
    category: 'Testing & Quality',
    skills: ['NUnit', 'xUnit', 'Moq', 'Postman', 'Unit Testing', 'Integration Testing', 'Functional Testing', 'Regression Testing', 'Code Reviews'],
  },
  {
    category: 'Reporting & Analytics',
    skills: ['SSRS', 'Crystal Reports', 'Power BI', 'Tableau', 'Drill-Down Reporting', 'SQL Performance Tuning', 'Data Migration'],
  },
  {
    category: 'Architecture & Performance',
    skills: ['N-tier Architecture', 'Clean Architecture', 'MVC', 'MVVM', 'SOLID', 'IOC', 'Repository Pattern', 'Design Patterns', 'UML', 'Async Programming', 'Caching', 'Profiling', 'Centralized Logging', 'Distributed Tracing'],
  },
  {
    category: 'Delivery & Leadership',
    skills: ['Agile / Scrum', 'Requirements Analysis', 'Sprint Planning', 'Technical Leadership', 'Mentoring', 'Troubleshooting', 'Root-Cause Analysis', 'Production Support'],
  },
];
