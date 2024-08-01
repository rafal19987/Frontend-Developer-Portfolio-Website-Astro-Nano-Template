import type { Site, Metadata, Socials } from '@types';

export const SITE: Site = {
  NAME: 'Rafał Izdebski',
  EMAIL: 'rizdebski29@gmail.com',
  NUM_WORKS_ON_HOMEPAGE: 3,
  NUM_PROJECTS_ON_HOMEPAGE: 4,
};

export const HOME: Metadata = {
  TITLE: 'Home',
  DESCRIPTION: 'Rafał Izdebski Portfolio Website - Developer Poland.',
};

export const WORK: Metadata = {
  TITLE: 'Work',
  DESCRIPTION: 'Where I have worked and what I have done.',
};

export const PROJECTS: Metadata = {
  TITLE: 'Projects',
  DESCRIPTION:
    'A collection of my projects, with links to repositories and demos.',
};

export const SOCIALS: Socials = [
  {
    NAME: 'github',
    HREF: 'https://github.com/rafal19987',
  },
  {
    NAME: 'linkedin',
    HREF: 'https://www.linkedin.com/in/rafal-izdebski/',
  },
];
