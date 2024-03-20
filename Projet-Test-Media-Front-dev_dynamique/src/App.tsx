import AppLayout from './layout/AppLayout.tsx';
import BrandAudit from './pages/app/BrandAudit.tsx';
import OutdoorDisplays from './pages/app/OutdoorDisplays.tsx';
import SpotVisualization from './pages/app/SpotVisualization.tsx';
import BrandAuditDashboard from './pages/app/BrandAuditDashboard.tsx';
import Page404 from './pages/error/Page404.tsx';
import React from 'react';
import { Navigate, useRoutes } from 'react-router-dom';
import Register from './components/register.tsx';
import Management from './pages/app/Management.tsx';
import Map from './components/Map.tsx';
import LoadingSkeleton from './components/skeleton/LoadingSkeleton.tsx';
import ManagementLoadingSkeleton from './components/skeleton/ManagementSkeleton.tsx';
import AuditBrandPage from './pages/audit/AuditHeader.tsx';
import AuditHeader from './pages/audit/AuditHeader.tsx';
import ApexChart from './pages/audit/DonutChart.tsx';
import AuditLayout from './pages/audit/AuditLayout.tsx';
import Categorie from './view/categorie/Categorie.jsx';

const App: React.FC = () => {
  return useRoutes([
    {
      path: '/kanteco',
      element: <AppLayout />,
      children: [
        { element: <Navigate to='/outdoor-displays' replace />, index: true },
        { path: 'outdoor-displays', element: <OutdoorDisplays /> },
        { path: 'brand-audit', element: <BrandAudit /> },
        { path: 'brand-audit-dashboard', element: <BrandAuditDashboard /> },
        { path: 'management', element: <Management /> },
        { path: 'spot-visualization', element: <SpotVisualization /> },
        { path: 'audit', element: <AuditLayout /> },
        { path: '404', element: <Page404 /> },
      ],
    },
    {
      path: '/demo',
      element: <Categorie />,
    },
    {
      path: '/apex',
      element: <ApexChart/>,
    },
  ]);
};

export default App;
