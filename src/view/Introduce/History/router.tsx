import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

export const historyRouter: RouteObject = {
    path: '/introduce/history',
    Component: lazy(() => import('./index')),
};
