import { createBrowserRouter } from 'react-router-dom';

import { DefaultLayout, LayoutNoFooter } from '~layout';
import { articleRouter } from '~view/Article/router';
import { eventDetailRouter } from '~view/Event/Detail/router';
import { eventRouter } from '~view/Event/router';
import { exploreBlogRouter } from '~view/Explore/Blog/router';
import { exploreRouter } from '~view/Explore/router';
import { homeRouter } from '~view/Home/router';
import { historyRouter } from '~view/Introduce/History/router';
import { policyRouter } from '~view/Introduce/Policy/router';
import { introduceRouter } from '~view/Introduce/router';
import { staffRouter } from '~view/Introduce/Staff/router';
import { ticketExerciseRouter } from '~view/Ticket/Exercise/router';
import { ticketGroupRouter } from '~view/Ticket/Group/router';
import { ticketInsideRouter } from '~view/Ticket/Inside/router';
import { ticketServiceRouter } from '~view/Ticket/Service/router';

const browserRouter = createBrowserRouter([
    {
        path: '',
        Component: LayoutNoFooter,
        children: [homeRouter, exploreRouter],
    },
    {
        path: '',
        Component: DefaultLayout,
        children: [
            exploreBlogRouter,
            introduceRouter,
            historyRouter,
            staffRouter,
            policyRouter,
            ticketInsideRouter,
            ticketGroupRouter,
            ticketServiceRouter,
            ticketExerciseRouter,
            eventRouter,
            eventDetailRouter,
            articleRouter,
        ],
    },
]);

export default browserRouter;
