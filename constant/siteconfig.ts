export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: 'Banda UI',
  description: 'Blueprint NextJs with tailwindcss',
  mainNav: [
    {
      title: 'Home',
      href: '/',
    },
  ],
  url: 'https://bandaui.dev',
};

export const menuConfig = [
  {
    title: 'Service',
    path: '/service',
  },
  {
    title: 'Vehicles',
    path: '/vehicles',
  },
  {
    title: 'About',
    path: '/About',
  },
  {
    title: 'Blog',
    path: '/blog',
  },
  {
    title: 'Contact',
    path: '/contact',
  },
];
