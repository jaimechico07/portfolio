import { lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';

// import Home from "../pages/Home";
const LazyHome = lazy(() => import('../pages/Home'));

export const router = createBrowserRouter([
  {
    path: '/',
    element: <LazyHome />,
  },
]);
