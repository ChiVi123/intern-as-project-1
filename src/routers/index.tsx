import { createBrowserRouter } from 'react-router-dom';

import { DefaultLayout, LayoutNoFooter } from '~layout';
import { exploreRouter } from '~view/Explore/router';
import { homeRouter } from '~view/Home/router';
import { historyRouter } from '~view/Introduce/History/router';
import { policyRouter } from '~view/Introduce/Policy/router';
import { introduceRouter } from '~view/Introduce/router';
import { staffRouter } from '~view/Introduce/Staff/router';

const browserRouter = createBrowserRouter([
    {
        path: '',
        Component: LayoutNoFooter,
        children: [homeRouter, exploreRouter],
    },
    {
        path: '',
        Component: DefaultLayout,
        children: [introduceRouter, historyRouter, staffRouter, policyRouter],
    },
]);

export default browserRouter;
