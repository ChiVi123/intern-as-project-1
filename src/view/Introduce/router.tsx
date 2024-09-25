import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

export const introduceRouter: RouteObject = {
    path: '/introduce',
    Component: lazy(() => import('./index')),
};
