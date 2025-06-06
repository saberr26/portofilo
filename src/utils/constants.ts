import { Skill, Project, Service, ContactInfo } from '../types';

export const SKILLS: Skill[] = [
  {
    name: 'Programming',
    icon: 'Code',
    items: [
      'Python (Automation, Scripts, Web Apps)',
      'Bash Scripting',
      'Basic Web Development (HTML, CSS, JS)',
      'AI-Assisted Coding'
    ]
  },
  {
    name: 'Linux & Systems',
    icon: 'Terminal',
    items: [
      'Arch Linux Daily User',
      'Command Line Expert (CLI)',
      'System Administration',
      'File Management & Processing'
    ]
  },
  {
    name: 'Automation & Tools',
    icon: 'Cog',
    items: [
      'Web Scraping (BeautifulSoup, Scrapy)',
      'Data Processing (Pandas)',
      'Task Automation (Cron)',
      'Report Generation'
    ]
  },
  {
    name: 'Development Tools',
    icon: 'Wrench',
    items: [
      'Git Version Control',
      'Docker Containers',
      'VS Code & Vim',
      'Continuous Integration'
    ]
  }
];

export const PROJECTS: Project[] = [
  {
    title: 'Reddit Data Scraper & Analyzer',
    description: 'Automated tool for collecting and analyzing post data from subreddits. Features include data export and trend identification.',
    image: 'https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    technologies: ['Python', 'PRAW/Scrapy', 'Pandas', 'Data Analysis'],
    githubUrl: 'https://github.com'
  },
  {
    title: 'Automated File Management System',
    description: 'A system that automatically organizes files based on type, content, and metadata. Includes advanced search and tagging capabilities.',
    image: 'https://images.pexels.com/photos/4197491/pexels-photo-4197491.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    technologies: ['Python', 'Linux', 'File Systems', 'Automation'],
    githubUrl: 'https://github.com'
  },
  {
    title: 'Server Monitoring Dashboard',
    description: 'Real-time monitoring tool for Linux servers that tracks system resources, services, and network activity with configurable alerts.',
    image: 'https://images.pexels.com/photos/7988079/pexels-photo-7988079.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    technologies: ['Python', 'Bash', 'Monitoring', 'Dashboard'],
    githubUrl: 'https://github.com'
  }
];

export const SERVICES: Service[] = [
  {
    name: 'Backend Development',
    description: 'Building robust and scalable backend systems using Python frameworks like Django or Flask.',
    icon: 'Code',
    features: ['RESTful API Design', 'Database Integration', 'Server-Side Logic', 'Performance Optimization']
  },
  {
    name: 'Automation Scripting',
    description: 'Developing custom Python and Bash scripts to automate repetitive tasks, workflows, and system operations.',
    icon: 'Terminal',
    features: ['Workflow Automation', 'Data Processing Automation', 'Report Generation', 'System Maintenance Scripts']
  },
  {
    name: 'System Administration',
    description: 'Configuration, maintenance, and monitoring of Linux servers and systems for optimal performance and security.',
    icon: 'Terminal',
    features: ['Server Setup & Configuration', 'Security Hardening', 'Performance Tuning', 'Troubleshooting']
  },
  {
    name: 'Cloud Deployment',
    description: 'Deploying and managing applications on cloud platforms like AWS, Azure, or Google Cloud.',
    icon: 'Cloud',
    features: ['Infrastructure as Code (IaC)', 'Serverless Computing', 'Scalability Solutions', 'Cost Optimization']
  },
  {
    name: 'CI/CD Implementation',
    description: 'Setting up Continuous Integration and Continuous Delivery pipelines to streamline your development process.',
    icon: 'GitBranch',
    features: ['Automated Testing', 'Automated Deployment', 'Workflow Automation', 'Integration with Version Control']
  },
  {
    name: 'Technical Consulting',
    description: 'Providing expert guidance and solutions for technical challenges in automation, system architecture, and development.',
    icon: 'MessageSquare',
    features: ['System Design', 'Technology Stack Advice', 'Process Improvement', 'Problem Solving']
  }
];

export const CONTACT_INFO: ContactInfo = {
  email: 'your.email@example.com', // Replace with your actual email
  github: 'yourgithub', // Replace with your GitHub username
  linkedin: 'yourlinkedin', // Replace with your LinkedIn username
  discord: 'yourdiscordid' // Replace with your Discord user ID (the numbers)
};