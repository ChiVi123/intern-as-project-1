import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

export const managementRouter: RouteObject = {
    path: '/management',
    Component: lazy(() => import('./index')),
};
