import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

export const eventDetailRouter: RouteObject = {
    path: '/event/:id',
    Component: lazy(() => import('./index')),
};
