import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

export const eventRouter: RouteObject = {
    path: '/event',
    Component: lazy(() => import('./index')),
};
