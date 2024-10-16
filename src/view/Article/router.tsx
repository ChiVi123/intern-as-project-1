import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

export const articleRouter: RouteObject = {
    path: '/:slug',
    Component: lazy(() => import('./index')),
};
