import React from 'react';
import { Link } from 'react-router-dom';
import ImportExcel from '../audit/ImportExcel';

const BrandAudit: React.FC = () => {
  return (
    <div>
      <div>Audit de marque</div>
      <Link to='/brand-audit-dashboard' className='text-blue-700 underline hover:no-underline'>
        Tableau de bord
      </Link>
      <ImportExcel />
    </div>
  );
};

export default BrandAudit;
