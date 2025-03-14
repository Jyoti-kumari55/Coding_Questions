// import { authServerAxios } from './lib';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { GithubProfile, GoogleProfile, Home } from './components';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/profile',
    element: <Home />,
  },
  {
    path: '/v1/profile/github',
    element: <GithubProfile />,
  },
  {
    path: '/v2/profile/github',
    element: <GithubProfile />,
  },
  {
    path: '/v1/profile/google',
    element: <GoogleProfile />,
  },
  {
    path: '/v2/profile/google',
    element: <GoogleProfile />,
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
