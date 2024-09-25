import { RouteObject } from 'react-router-dom';
// import Home from '.';
import { lazy } from 'react';

export const homeRouter: RouteObject = {
    path: '/',
    // Component: Home,
    Component: lazy(() => import('./index')),
};
