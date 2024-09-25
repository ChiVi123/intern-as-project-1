import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

export const staffRouter: RouteObject = {
    path: '/introduce/staff',
    Component: lazy(() => import('./index')),
};
