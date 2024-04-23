import { Navigate, RouteObject } from 'react-router-dom';
import { Home } from '../pages/Home/HomeView';
import { Chat } from '../pages/Chat/ChatView';
import SignInSide from '../pages/Login/SignInSide';
import { Profile } from '../pages/Profile/ProfileView';
import { Register } from '../pages/Register/RegisterView';
import { Settings } from '../pages/Settings/SettingsView';
import SignUp from '../pages/Login/SignUp';

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
      element: <SignUp />,
    },
    {
      path: '/forgot-password',
      element: <Register />,
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
