import { createBrowserRouter } from 'react-router-dom';

import Home from '@/pages/home/Home';
import About from '@/pages/about/About';
import App from '@/App';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '',
        element: <Home />,
      },
      {
        path: 'about',
        element: <About />,
      },
    ],
  },
]);

export default router;
