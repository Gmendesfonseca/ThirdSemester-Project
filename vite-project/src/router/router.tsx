import { Navigate, RouteObject } from 'react-router-dom';
import { Home } from '../pages/Home/HomeView';
import { ChatView } from '../pages/Chat/ChatView';
import SignInSide from '../pages/Login/SignInView';
import Profile from '../pages/Profile/ProfileView';
import { Settings } from '../pages/Settings/SettingsView';
import { RegisterInstitution } from '../pages/Register/RegisterInstitution';
import { ChangePassword } from '../pages/Login/ChangePassword/ChangePassword';
import ListBranch from '../pages/Lists/ListBrach';
import ListStudent from '../pages/Lists/ListStudent';
import ListProfessor from '../pages/Lists/ListProfessor';
import { Friends } from '../pages/Friends/Friends';
import { Groups } from '../pages/Groups/Groups';
import ListCourse from '../pages/Lists/ListCourses';

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
      path: '/headoffice/register',
      element: <RegisterInstitution />,
    },
    {
      path: '/branch/list',
      element: <ListBranch />,
    },
    {
      path: '/student/list',
      element: <ListStudent />,
    },
    {
      path: '/professor/list',
      element: <ListProfessor />,
    },
    {
      path: '/course/list',
      element: <ListCourse />,
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
      element: <ChatView />,
    },
    {
      path: '/friends',
      element: <Friends />,
    },
    {
      path: '/groups',
      element: <Groups />,
    },
  ];

  return routes;
}
