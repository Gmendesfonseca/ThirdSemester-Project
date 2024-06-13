import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { createRoutes, routesResolver } from './router/router';
import ToastUI from './components/Toast/ToastUI';
import SessionProvider from './context/SessionContext';
import { ThemeProvider } from '@emotion/react';
import { darkTheme } from './Themes';

function App() {
  const accountPermissions = ['HEADOFFICE', 'BRANCH', 'PROFESSOR', 'STUDENT'];
  const routes = createRoutes();
  const resolvedRoutes = routesResolver(routes, accountPermissions);

  return (
    <ThemeProvider theme={darkTheme}>
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
    </ThemeProvider>
  );
}

export default App;
