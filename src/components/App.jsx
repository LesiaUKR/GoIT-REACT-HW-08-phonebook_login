import { Navigate, Route, Routes } from 'react-router-dom';
import { Layout } from './Layout/Layout';
import HomePage from 'pages/HomePage/HomePage';
import Register from 'pages/Register/Register';
import LogIn from 'pages/LogIn/LogIn';
import Contacts from 'pages/Contacts/Contacts';
import { PrivateRoute } from './PrivateRoute';
import { useDispatch } from 'react-redux';
import { useAuth } from 'hooks/useAuth';
import { RestrictedRoute } from './RestrictedRoute';
import { useEffect } from 'react';
import { refreshUser } from 'redux/auth/operations';

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <p>Refreshing user...</p>
  ) : (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route
          path="/login"
          element={<RestrictedRoute component={LogIn} redirectTo="/contacts" />}
        />
        <Route
          path="register"
          element={
            <RestrictedRoute component={Register} redirectTo="/contacts" />
          }
        />
        <Route
          path="/contacts"
          element={<PrivateRoute component={Contacts} redirectTo="/login" />}
        />
        <Route path="*" element={<Navigate to="/" />} />
      </Route>
    </Routes>
  );
};
