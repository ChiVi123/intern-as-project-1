import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

export const exploreBlogRouter: RouteObject = {
    path: '/explore/:id',
    Component: lazy(() => import('./index')),
};
