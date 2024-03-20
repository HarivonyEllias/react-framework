import React, { useState } from 'react';
import { motion } from 'framer-motion';

const ManagementLoadingSkeleton: React.FC = () => {
  return (
    <div className='p-10'>
      <div className='mt-5'>
        <label htmlFor="champ">Séléctionner une option: </label>
        <select name="champ" className='ml-2 h-10 px-1 rounded-sm'>
          <option value="0" selected>Choisir un champ</option>
          <option value="1">Secteurs</option>
          <option value="1">Format de panneaux</option>
          <option value="1">Supports</option>
          <option value="1">Zone de couverture d'un support</option>
          <option value="1">Contenu panneau publicitaire</option>
        </select>
      </div>
      <div className='flex flex-row mt-6'>
        <div className='mb-4 flex justify-end'>
          {/* Placeholder for "Ajouter" button */}
          <div className="bg-gray-300 h-10 w-36 rounded-[2rem]"></div>
        </div>
        <div className="mb-4 flex justify-start ml-auto">
          {/* Placeholder for search input */}
          <input
            type="text"
            placeholder="Rechercher par ..."
            className="border px-2 py-1 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {/* Placeholder for search button */}
          <div className="bg-[#007AB3] hover:bg-blue-600 px-3 py-1 rounded-r-md focus:outline-none focus:ring-2 focus:ring-blue-500"></div>
        </div>
      </div>
      <div className="flex flex-col">
        <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
              <table className="even:bg-black min-w-full divide-y divide-gray-200">
                <thead className="bg-[#007AB3] w-full">
                  <tr>
                    <th
                      scope="col"
                      className="px-28 py-3 text-left text-xs font-medium text-white uppercase tracking-wider"
                    >
                      Secteur
                    </th>
                    <th
                      scope="col"
                      className="px-28 py-3 text-left text-xs font-medium text-white uppercase tracking-wider"
                    >
                      Editer
                    </th>
                    <th
                      scope="col"
                      className="px-28 py-3 text-left text-xs font-medium text-white uppercase tracking-wider"
                    >
                      Supprimer
                    </th>
                  </tr>
                </thead>
                <tbody className="[&>*:nth-child(even)]:bg-slate-200 bg-white divide-y divide-gray-200">
                  {/* Placeholder for table rows */}
                  {[1, 2, 3, 4, 5, 6].map((item, index) => (
                    <tr key={index}>
                      <td className="px-28 py-4 whitespace-nowrap">
                        <div className="bg-gray-300 h-8 w-60 rounded-md"></div>
                      </td>
                      <td className="px-28 py-4 whitespace-nowrap">
                        <div className="bg-gray-300 h-10 w-24 rounded-[2rem]"></div>
                      </td>
                      <td className="px-28 py-4 whitespace-nowrap">
                        <div className="bg-gray-300 h-10 w-24 rounded-[2rem]"></div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-between mt-4">
        <div className="block ml-6 text-white bg-[#007AB3] hover:bg-blue-600 px-3 py-1 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"></div>
        <div className="block mr-6 text-white bg-[#007AB3] hover:bg-blue-600 px-3 py-1 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"></div>
      </div>
    </div>
  );
};

export default ManagementLoadingSkeleton;
