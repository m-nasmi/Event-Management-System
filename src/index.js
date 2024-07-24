import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './components/Home';
import AddEvent from './components/AddEvent';
import ViewEvent from './components/ViewEvent';
import EditEvent from './components/EditEvent';
import ContactUs from './components/ContactUs';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: 'addevent',
        element: <AddEvent />,
      },
      {
        path: 'viewevents',
        element: <ViewEvent/>,
      },
      {
        path: 'editevents/:eventId',
        element: <EditEvent/>,
      },
      {
        path: 'contactus',
        element: <ContactUs/>,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </React.StrictMode>,
);
