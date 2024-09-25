import { createBrowserRouter } from 'react-router-dom';
import { LayoutNoFooter } from '~layout';
import { exploreRouter } from '~view/Explore/router';
import { homeRouter } from '~view/Home/router';

const browserRouter = createBrowserRouter([
    {
        path: '',
        Component: LayoutNoFooter,
        children: [homeRouter, exploreRouter],
    },
]);

export default browserRouter;
