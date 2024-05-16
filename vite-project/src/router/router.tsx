import { Navigate, RouteObject } from 'react-router-dom';
import { Home } from '../pages/Home/HomeView';
import { Chat } from '../pages/Chat/ChatView';
import SignInSide from '../pages/Login/SignInView';
import Profile from '../pages/Profile/ProfileView';
import { Settings } from '../pages/Settings/SettingsView';
import { RegisterInstitution } from '../pages/Register/RegisterInstitution';
import { RegisterStudent } from '../components/Register/FormStudent';
import { RegisterProfessor } from '../components/Register/FormProfessor';
import { ChangePassword } from '../pages/Login/ChangePassword/ChangePassword';
import { RegisterMenu } from '../pages/Register/RegisterMenu';

export type RouteType = {
  path: string;
  element?: JSX.Element;
  options?: Omit<RouteObject, 'path' | 'element' | 'children'>;
  permissions?: string[];
  children?: RouteType[];
} & Partial<RouteObject>;

export function routesResolver(
  routes: RouteType[],
  accountPermissions: string[],
): RouteObject[] {
  return routes.reduce<RouteObject[]>((acc, route) => {
    const { path, element, options, children, permissions } = route;

    if (permissions) {
      const hasPermission = permissions.some((permission) =>
        accountPermissions.includes(permission),
      );
      if (!hasPermission) {
        return [
          ...acc,
          {
            path,
            element: <SignInSide />,
            children: children
              ? routesResolver(children, accountPermissions)
              : undefined,
            ...options,
          } as RouteObject,
        ];
      }
    }

    return [
      ...acc,
      {
        path,
        element,
        children: children
          ? routesResolver(children, accountPermissions)
          : undefined,
        ...options,
      } as RouteObject,
    ];
  }, []);
}

export function createRoutes() {
  const routes: RouteType[] = [
    {
      path: '/',
      element: <Navigate to="/login" replace />,
    },
    {
      path: '/login',
      element: <SignInSide />,
    },
    {
      path: '/home',
      element: <Home />,
    },
    {
      path: '/profile',
      element: <Profile />,
    },
    {
      path: '/register',
      element: <RegisterMenu />,
    },
    {
      path: '/register/institution',
      element: <RegisterInstitution />,
    },
    {
      path: '/register/student',
      element: <RegisterStudent />,
    },
    {
      path: '/register/professor',
      element: <RegisterProfessor />,
    },
    {
      path: '/forgot-password',
      element: <ChangePassword />,
    },
    {
      path: '/settings',
      element: <Settings />,
    },
    {
      path: '/chat',
      element: <Chat />,
    },
  ];

  return routes;
}
