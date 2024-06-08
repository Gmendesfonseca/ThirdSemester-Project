import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { createRoutes, routesResolver } from './router/router';
import ToastUI from './components/Toast/ToastUI';

function App() {
  const accountPermissions = ['HEADOFFICE', 'BRANCH', 'PROFESSOR', 'STUDENT'];
  const routes = createRoutes();
  const resolvedRoutes = routesResolver(routes, accountPermissions);

  return (
    <>
      <ToastUI />
      <Router>
        <Routes>
          {resolvedRoutes.map((route, index) => (
            <Route key={index} path={route.path} element={route.element} />
          ))}
        </Routes>
      </Router>
    </>
  );
}

export default App;
