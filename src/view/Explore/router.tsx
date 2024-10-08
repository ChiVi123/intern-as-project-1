import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

export const exploreRouter: RouteObject = {
    path: '/explore',
    Component: lazy(() => import('./index')),
};
