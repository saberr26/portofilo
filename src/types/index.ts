export type Skill = {
  name: string;
  icon: string;
  items: string[];
};

export type Project = {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubUrl?: string;
  demoUrl?: string;
};

export type Service = {
  title: string;
  description: string;
  icon: string;
  price: string;
};

export type ThemeType = 'light' | 'dark';