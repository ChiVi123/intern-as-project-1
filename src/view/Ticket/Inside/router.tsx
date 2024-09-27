import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

export const ticketInsideRouter: RouteObject = {
    path: '/ticket/inside-park',
    Component: lazy(() => import('./index')),
};
