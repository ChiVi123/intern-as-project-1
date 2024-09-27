import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

export const ticketExerciseRouter: RouteObject = {
    path: '/ticket/exercise',
    Component: lazy(() => import('./index')),
};
