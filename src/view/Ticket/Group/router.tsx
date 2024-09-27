import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

export const ticketGroupRouter: RouteObject = {
    path: '/ticket/group',
    Component: lazy(() => import('./index')),
};
