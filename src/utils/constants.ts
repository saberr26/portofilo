import { Skill, Project, Service } from '../types';

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
    githubUrl: 'https://github.com',
    demoUrl: 'https://demo.com'
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
    githubUrl: 'https://github.com',
    demoUrl: 'https://demo.com'
  }
];

export const SERVICES: Service[] = [
  {
    title: 'Python Automation',
    description: 'Custom scripts for data processing, file management, API integration, and general task automation. Clean & maintainable code.',
    icon: 'PythonLogo',
    price: '$30-150 per script'
  },
  {
    title: 'Linux System Administration',
    description: 'Server setup, maintenance, security hardening, and performance optimization for your Linux systems and servers.',
    icon: 'Terminal',
    price: '$50-200 per system'
  },
  {
    title: 'Web Scraping Solutions',
    description: 'Custom scrapers to extract data from websites, transform it into useful formats, and integrate with your existing systems.',
    icon: 'Database',
    price: '$100-500 per project'
  },
  {
    title: 'Technical Consulting',
    description: 'Expert advice on automation, system architecture, and technical solutions tailored to your specific business needs.',
    icon: 'HeadSideBrain',
    price: '$75/hour'
  }
];

export const CONTACT_INFO = {
  email: 'your.email@example.com',
  discord: 'YourHandle#1234',
  github: 'yourusername',
  linkedin: 'yourlinkedin'
};