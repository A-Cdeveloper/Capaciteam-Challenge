export const routes = {
  home: '/',
  bills: '/bills',
  parties: '/parties',
  houses: '/houses',
  notFound: '*',
} as const;

export type RouteKey = keyof typeof routes;
