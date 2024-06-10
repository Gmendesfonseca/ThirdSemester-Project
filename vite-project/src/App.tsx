import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { createRoutes, routesResolver } from './router/router';
import ToastUI from './components/Toast/ToastUI';
import SessionProvider from './context/SessionContext';

function App() {
  const accountPermissions = ['HEADOFFICE', 'BRANCH', 'PROFESSOR', 'STUDENT'];
  const routes = createRoutes();
  const resolvedRoutes = routesResolver(routes, accountPermissions);

  return (
    <SessionProvider>
      <ToastUI />
      <Router>
        <Routes>
          {resolvedRoutes.map((route, index) => (
            <Route key={index} path={route.path} element={route.element} />
          ))}
        </Routes>
      </Router>
    </SessionProvider>
  );
}

export default App;
