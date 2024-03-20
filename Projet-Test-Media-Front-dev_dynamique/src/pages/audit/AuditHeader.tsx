import React from 'react';
import { faChartBar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const AuditHeader: React.FC = () => {
  return (
    <div className="flex justify-between mt-4 gap-3 p-2">
      <div className="w-1/4 h-[4rem] bg-[#AF74A0] p-4 rounded-lg flex items-center justify-center">
      <FontAwesomeIcon icon={faChartBar} className="text-white w-8 h-8" />
        <div className="ml-12">
          <h2 className="text-white text-[10px]">Investissement Totale</h2>
          <p className="text-white mt-2">1,931,013,586 Ar</p>
        </div>
      </div>

      <div className="w-1/4 h-[4rem] bg-[#F26D6D] p-4 rounded-lg flex items-center justify-center">
      <FontAwesomeIcon icon={faChartBar} className="text-white w-8 h-8" />
        <div className="ml-12">
          <h2 className="text-white text-[10px]">Investissement Presse</h2>
          <p className="text-white mt-2">763,750,870 Ar</p>
        </div>
      </div>

      <div className="w-1/4 h-[4rem] bg-[#007AB3] p-4 rounded-lg flex items-center justify-center">
      <FontAwesomeIcon icon={faChartBar} className="text-white w-8 h-8" />
        <div className="ml-12">
          <h2 className="text-white text-[10px]">Investissement Radio</h2>
          <p className="text-white mt-2">251,731,468 Ar</p>
        </div>
      </div>

      <div className="w-1/4 h-[4rem] bg-[#F2994B] p-4 rounded-lg flex items-center justify-center">
      <FontAwesomeIcon icon={faChartBar} className="text-white w-8 h-8" />
        <div className="ml-12">
          <h2 className="text-white text-[10px]">Investissement Télévision</h2>
          <p className="text-white mt-2">915,531,248 Ar</p>
        </div>
      </div>
    </div>
  );
};

export default AuditHeader;
