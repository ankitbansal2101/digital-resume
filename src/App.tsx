import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import SiteShell from './components/layout/SiteShell';
import HomePage from './pages/HomePage';
import CareerPage from './pages/CareerPage';
import CareerDetailPage from './pages/CareerDetailPage';
import ProjectsPage from './pages/ProjectsPage';
import ProjectDetailPage from './pages/ProjectDetailPage';
import SkillsPage from './pages/SkillsPage';
import ContactPage from './pages/ContactPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <SiteShell />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'career', element: <CareerPage /> },
      { path: 'career/details/:slug', element: <CareerDetailPage /> },
      { path: 'projects', element: <ProjectsPage /> },
      { path: 'projects/details/:slug', element: <ProjectDetailPage /> },
      { path: 'skills', element: <SkillsPage /> },
      { path: 'contact', element: <ContactPage /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
