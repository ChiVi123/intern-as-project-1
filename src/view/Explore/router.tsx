import { RouteObject } from 'react-router-dom';
// import ExplorePage from '.';
import { lazy } from 'react';

export const exploreRouter: RouteObject = {
    path: '/explore',
    Component: lazy(() => import('./index')),
    // Component: ExplorePage,
};
