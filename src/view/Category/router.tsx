import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

export const categoryRouter: RouteObject = {
    path: '/category/:slug',
    Component: lazy(() => import('./index')),
};
