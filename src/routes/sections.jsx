import { lazy, Suspense } from 'react';
import { Outlet, Navigate, useRoutes } from 'react-router-dom';

import DashboardLayout from 'src/layouts/dashboard';

export const IndexPage = lazy(() => import('src/pages/app'));
export const BlogPage = lazy(() => import('src/pages/blog'));
export const UserPage = lazy(() => import('src/pages/user'));
export const LoginPage = lazy(() => import('src/pages/login'));
export const ProductsPage = lazy(() => import('src/pages/products'));
export const Page404 = lazy(() => import('src/pages/page-not-found'));
export const ScanPortPage = lazy(() => import('src/pages/scanport')); // Import the ScanPortPage component
export const ScanURLPage = lazy(() => import('src/pages/urlfuzzer')); // Import the ScanPortPage component
export const ScanwordpressPage = lazy(() => import('src/pages/wordpressscanner')); // Import the ScanPortPage component
export const SqliexploiterPage = lazy(() => import('src/pages/sqliexploiter'));
export const FirewallDetectionPage = lazy(() => import('src/pages/firewalldetection'));
export const DnsenumerationPage = lazy(() => import('src/pages/dnsenumeration'));
export const DnslookupPage = lazy(() => import('src/pages/dnslookup'));
export const QualitywebPage = lazy(() => import('src/pages/qualityweb'));
export const FrameworkPage = lazy(() => import('src/pages/frameworkfinder'));
export const HeadersscanPage = lazy(() => import('src/pages/headersscan'));
export const CmsscanPage = lazy(() => import('src/pages/cmsscan'));
export const SslcheckerPage = lazy(() => import('src/pages/ssltls'));
// ----------------------------------------------------------------------

export default function Router() {
  const routes = useRoutes([
    {
      element: (
        <DashboardLayout>
          <Suspense>
            <Outlet />
          </Suspense>
        </DashboardLayout>
      ),
      children: [
        { element: <IndexPage />, index: true },
        { path: 'user', element: <UserPage /> },
        { path: 'products', element: <ProductsPage /> },
        { path: 'blog', element: <BlogPage /> },
        { path: 'scanport', element: <ScanPortPage /> }, 
        { path: 'urlfuzzer', element: <ScanURLPage /> },
        { path: 'wordpressscanner', element: <ScanwordpressPage /> },// Add the scanport path with ScanPortPage component
        { path: 'sqliexploiter', element: < SqliexploiterPage/> },
        { path: 'firewalldetection', element: < FirewallDetectionPage/> },
        { path: 'dnsenumeration', element: < DnsenumerationPage/> },
        { path: 'dnslookup', element: < DnslookupPage/> },
        { path: 'qualityweb', element: < QualitywebPage/> },
        { path: 'frameworkfinder', element: < FrameworkPage/> },
        { path: 'headersscan', element: < HeadersscanPage/> },
        { path: 'cmsscan', element: < CmsscanPage/> },
        { path: 'ssltls', element: < SslcheckerPage/> },
        
      ],
    },
    {
      path: 'login',
      element: <LoginPage />,
    },
    {
      path: '404',
      element: <Page404 />,
    },
    {
      path: '*',
      element: <Navigate to="/404" replace />,
    },
  ]);

  return routes;
}
