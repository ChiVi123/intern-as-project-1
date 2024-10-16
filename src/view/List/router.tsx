import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

export const exploreListRouter: RouteObject = {
    path: '/list',
    Component: lazy(() => import('./index')),
};
