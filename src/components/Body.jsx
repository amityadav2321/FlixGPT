import React, { useEffect } from 'react';
import Login from './Login';
import Browse from './Browse';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { onAuthStateChanged } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser, setLoading } from '../utils/userSlice';
import ProtectedRoute from './ProtectedRoute';

const Body = () => {
  const dispatch = useDispatch();
  const { loading } = useSelector((store) => store.user);

  useEffect(() => {
    dispatch(setLoading(true)); // start loading
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid, email, displayName }));
      } else {
        //dispatch action
        dispatch(removeUser());
      }
    });

    return () => unsubscribe();
  }, []);

  const appRouter = createBrowserRouter([
    {
      path: '/',
      element: <Login />,
    },
    {
      path: '/browse',
      element: (
        <ProtectedRoute>
          <Browse />
        </ProtectedRoute>
      ),
    },
  ]);

  if (loading) return <div className="text-white p-10">Loading...</div>; // or a spinner

  return <RouterProvider router={appRouter} />;
};

export default Body;
