import { createBrowserRouter } from 'react-router-dom';
import DefaultLayout from '~layout';
import { exploreRouter } from '~view/Explore/router';
import { homeRouter } from '~view/Home/router';

const browserRouter = createBrowserRouter([
    {
        path: '',
        Component: DefaultLayout,
        children: [homeRouter, exploreRouter],
    },
]);

export default browserRouter;
