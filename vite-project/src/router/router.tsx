import { Navigate, RouteObject } from 'react-router-dom';
import { Home } from '../pages/Home/HomeView';
import { Chat } from '../pages/Chat/ChatView';
import SignInSide from '../pages/Login/SignInView';
import Profile from '../pages/Profile/ProfileView';
import { Settings } from '../pages/Settings/SettingsView';
import { RegisterInstitution } from '../pages/Register/RegisterInstitution';
import { FormStudent } from '../components/Forms/FormStudent';
import { FormProfessor } from '../components/Forms/FormProfessor';
import { FormBranch } from '../components/Forms/FormBranch';
import { ChangePassword } from '../pages/Login/ChangePassword/ChangePassword';
import ListBranch from '../pages/Lists/ListBrach';
import ListStudent from '../pages/Lists/ListStudent';
import ListProfessor from '../pages/Lists/ListProfessor';
import { Friends } from '../pages/Friends/Friends';
import { Groups } from '../pages/Groups/Groups';

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
      permissions: ['HEADOFFICE'],
    },
    {
      path: '/branch/view',
      element: <FormBranch disabled={true} data={null} />,
    },
    {
      path: '/branch/edit',
      element: <FormBranch disabled={false} data={null} />,
    },
    {
      path: '/student/list',
      element: <ListStudent />,
    },
    {
      path: '/student/view',
      element: <FormStudent disabled={true} data={null} />,
    },
    {
      path: '/student/edit',
      element: <FormStudent disabled={false} data={null} />,
    },
    {
      path: '/professor/list',
      element: <ListProfessor />,
    },
    // {
    //   path: `/professor/view/${id}`,
    //   element: <FormProfessor disabled={true} data={data={getProfessor(id)}}/>,
    // },
    {
      path: `/professor/view`,
      element: <FormProfessor disabled={true} data={null} />,
    },
    {
      path: '/professor/edit',
      element: <FormProfessor disabled={false} data={null} />,
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
    {
      path: '/friends',
      element: <Friends />,
    },
    {
      path: '/groups',
      element: <Groups />,
    },
    {
      path: '/marketplace',
      element: <Chat />,
    },
  ];

  return routes;
}
