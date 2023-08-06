import { Route, Routes } from 'react-router-dom';
import LoginForm from './LoginForm/LoginForm';
import RegisterForm from './RegisterForm/RegisterForm';
import Layout from './Layout/Layout';
import { PrivateRoute } from './Routes/PrivateRoute';
import ContactsPage from './ContactsPage/ContactsPage';
import { RestrictedRoute } from './Routes/RestrictedRoute';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route
            path="/register"
            element={
              <RestrictedRoute
                component={<RegisterForm />}
                redirectTo="/contacts"
              />
            }
          />
          <Route
            path="/login"
            element={
              <RestrictedRoute
                component={<LoginForm />}
                redirectTo="/contacts"
              />
            }
          />
          <Route
            path="/contacts"
            element={
              <PrivateRoute component={<ContactsPage />} redirectTo="/" />
            }
          />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
