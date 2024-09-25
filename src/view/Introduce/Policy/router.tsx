import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

export const policyRouter: RouteObject = {
    path: '/introduce/policy',
    Component: lazy(() => import('./index')),
};
