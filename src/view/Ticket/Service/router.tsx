import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

export const ticketServiceRouter: RouteObject = {
    path: '/ticket/service',
    Component: lazy(() => import('./index')),
};
