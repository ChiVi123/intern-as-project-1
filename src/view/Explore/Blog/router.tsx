import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

export const exploreBlogRouter: RouteObject = {
    path: '/explore/:slug',
    Component: lazy(() => import('./index')),
};
