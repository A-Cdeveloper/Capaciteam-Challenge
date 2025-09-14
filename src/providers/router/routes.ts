export const routes = {
  home: '/',
  bills: '/bills',
  parties: '/parties',
  notFound: '*',
} as const;

export type RouteKey = keyof typeof routes;
