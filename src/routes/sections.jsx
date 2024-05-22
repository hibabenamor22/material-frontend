import { lazy, Suspense } from 'react';
import { Outlet, Navigate, useRoutes } from 'react-router-dom';

import DashboardLayout from 'src/layouts/dashboard';

export const IndexPage = lazy(() => import('src/blog6.jsx/app'));
export const BlogPage = lazy(() => import('src/blog6.jsx/blog'));
export const Domains = lazy(() => import('src/blog6.jsx/Domains'));
export const LoginPage = lazy(() => import('src/blog6.jsx/login'));
export const ProductsPage = lazy(() => import('src/blog6.jsx/products'));
export const Page404 = lazy(() => import('src/blog6.jsx/page-not-found'));
export const ScanPortPage = lazy(() => import('src/blog6.jsx/scanport')); // Import the ScanPortPage component
export const ScanURLPage = lazy(() => import('src/blog6.jsx/urlfuzzer')); // Import the ScanPortPage component
export const ScanwordpressPage = lazy(() => import('src/blog6.jsx/wordpressscanner')); // Import the ScanPortPage component
export const SqliexploiterPage = lazy(() => import('src/blog6.jsx/sqliexploiter'));
export const FirewallDetectionPage = lazy(() => import('src/blog6.jsx/firewalldetection'));
export const DnsenumerationPage = lazy(() => import('src/blog6.jsx/dnsenumeration'));
export const DnslookupPage = lazy(() => import('src/blog6.jsx/dnslookup'));
export const QualitywebPage = lazy(() => import('src/blog6.jsx/qualityweb'));
export const FrameworkPage = lazy(() => import('src/blog6.jsx/frameworkfinder'));
export const HeadersscanPage = lazy(() => import('src/blog6.jsx/headersscan'));
export const CmsscanPage = lazy(() => import('src/blog6.jsx/cmsscan'));
export const SslcheckerPage = lazy(() => import('src/blog6.jsx/ssltls'));
export const ScansPage = lazy(() => import('src/blog6.jsx/templateScan'));
export const VulnerabilityPage = lazy(() => import('src/blog6.jsx/vulnerability'));
export const ReconPage = lazy(() => import('src/blog6.jsx/recon'));
export const ExploitationPage = lazy(() => import('src/blog6.jsx/exploitation'));
export const Blog1Page = lazy(() => import('src/blog6.jsx/blog1'));
export const Blog2Page = lazy(() => import('src/blog6.jsx/blog2'));
export const Blog3Page = lazy(() => import('src/blog6.jsx/blog3')); 
export const Blog4Page = lazy(() => import('src/blog6.jsx/blog4')); 
export const Blog5Page = lazy(() => import('src/blog6.jsx/blog5')); 
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
        { path: 'domains', element: <Domains /> },
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
        { path: 'templateScan', element: < ScansPage/> },
        { path: 'vulnerability', element: < VulnerabilityPage/> },
        { path: 'recon', element: < ReconPage/> },
        { path: 'exploitation', element: < ExploitationPage/> },
        { path: 'blog1', element: < Blog1Page/> },
        { path: 'blog2', element: < Blog2Page/> },
        { path: 'blog3', element: < Blog3Page/> },
        { path: 'blog4', element: < Blog4Page/> },
        { path: 'blog5', element: < Blog5Page/> },
        
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
