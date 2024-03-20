import ManagementLoadingSkeleton from '../../components/skeleton/ManagementSkeleton';
import { create, fetchAll, search, suppress, update } from './ManagementLogic';
import {
  faArrowLeft,
  faArrowRight,
  faCheck,
  faEdit,
  faPlus,
  faSearch,
  faTimes,
  faTrash,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';

const Management: React.FC = () => {
  const registerPerPage = 6;
  const [data, setData] = useState<{ content: any[]; totalPages: number }>({ content: [], totalPages: 0 });
  const [currentType, setCurrentType] = useState<number>(1);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [newValue, setNewValue] = useState<string>('');
  const [newTypeIndex, setNewTypeIndex] = useState<number>(1);
  const [editingIndex, setEditingIndex] = useState<number | null>(null);
  const [editedValue, setEditedValue] = useState<string>('');
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const columnTarget = ['Secteur', 'Format', 'Support'];
  const propTarget = ['sector', 'format', 'name'];

  useEffect(() => {
    // Simulate loading delay
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    fetchAll(currentType, setData, currentPage - 1, registerPerPage);
  }, [currentType, currentPage]);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    setCurrentPage(1);
  };

  const searchFor =(index:number) => {
    search(index,setData,searchTerm,currentPage - 1,registerPerPage);
  };

  const handleEdit = (index: number) => {
    setEditingIndex(index);
    setEditedValue(data.content[index][propTarget[currentType - 1]]);
  };

  const handleDelete = (index: number) => {
    suppress(currentType, data.content[index]);
    const newData = { ...data };
    newData.content.splice(index, 1);
    setData(newData);
  };

  const handleSave = () => {
    if (editingIndex != null) {
      const toUpdate: any = data.content[editingIndex];
      toUpdate[propTarget[currentType - 1]] = editedValue;
      update(currentType, toUpdate);
    }
    setEditingIndex(null);
    setEditedValue('');
  };

  const handleCancel = () => {
    setEditingIndex(null);
    setEditedValue('');
  };

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <div>
      {isLoading ? (
        <ManagementLoadingSkeleton />
      ) : (
        <div className='p-10'>
          <div className='mt-5'>
            <label htmlFor='champ'>Séléctionner une option: </label>
            <select
              name='champ'
              className='ml-2 h-10 px-1 rounded-sm'
              onChange={(e) => setCurrentType(parseInt(e.target.value))}
            >
              <option value='1'>Secteurs</option>
              <option value='2'>Format de panneaux</option>
              <option value='3'>Supports</option>
              {/* <option value='1'>Zone de couverture d'un support</option> */}
            </select>
          </div>
          <div className='flex flex-row mt-6'>
            <div className='mb-4 flex justify-end'>
              <motion.button
                whileHover={{ scale: 1.05 }}
                className='block text-white !bg-slate-800 transition-all rounded-md focus:ring-4
                        focus:outline-none py-2 px-5 focus:ring-blue-300 font-semibold
                        text-sm px-2 py-1 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
                type='button'
                onClick={toggleModal}
              >
                <FontAwesomeIcon icon={faPlus} />
                Ajouter
              </motion.button>
              {isOpen && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className='flex justify-center items-start fixed z-1 left-0 top-0 w-full h-full backdrop-blur'
                  style={{
                    backgroundColor: 'rgba(0, 0, 0, 0.6)',
                  }}
                >
                  <div className='bg-[#fefefe] mt-6 rounded-xl shadow-2xl p-[20px] w-[40%]'>
                    <span
                      className='text-[#aaa] float-right text-[28px] font-bold cursor-pointer'
                      onClick={toggleModal}
                    >
                      &times;
                    </span>
                    <h2 className='p-[20px] mb-2 text-center text-[2rem] mp-0 font-semibold text-gray-500'>
                      Ajoutez une section
                    </h2>
                    <div className='max-h-[75vh] mt-0 overflow-auto modal-content'>
                      <div>
                        <label className='block text-gray-700 text-sm font-bold mb-2'>Séléctionner une option: </label>
                        <select
                          name='champ'
                          className='ml-2 h-10 px-1 rounded-sm'
                          onChange={(e) => setNewTypeIndex(parseInt(e.target.value))}
                        >
                          <option value='1'>Secteurs</option>
                          <option value='2'>Format de panneaux</option>
                          <option value='3'>Supports</option>
                          {/* <option value='1'>Zone de couverture d'un support</option> */}
                        </select>
                      </div>{' '}
                      <br />
                      <label className='block text-gray-700 text-sm font-bold mb-2'>Ajouter la valeur : </label>
                      <input
                        className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                        id='section'
                        type='text'
                        placeholder='Section...'
                        name='section'
                        onChange={(e) => setNewValue(e.target.value)}
                      />
                    </div>{' '}
                    <br />
                    <button
                      className='flex justify-end ml-auto text-white bg-primary hover:bg-secondary font-medium rounded
                                        text-sm px-5 py-2.5 text-center dark:bg-blue-600'
                      type='submit'
                      onClick={() =>
                        create(newTypeIndex, newValue, () => {
                          setNewValue('');
                          toggleModal();
                        })
                      }
                    >
                      Ajouter
                    </button>
                  </div>
                </motion.div>
              )}
            </div>
            <div className='mb-4 flex justify-start ml-auto'>
              <input
                type='text'
                placeholder='Rechercher par ...'
                className='border px-2 py-1 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500'
                value={searchTerm}
                onChange={handleSearch}
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                className='bg-[#007AB3] hover:bg-blue-600 px-3 py-1 rounded-r-md focus:outline-none focus:ring-2 focus:ring-blue-500'
                onClick={() => searchFor(currentType)}
              >
                <FontAwesomeIcon icon={faSearch} className='text-white' />
              </motion.button>
            </div>
          </div>
          <div className='flex flex-col'>
            <div className='-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8'>
              <div className='py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8'>
                <div className='shadow overflow-hidden border-b border-gray-200 sm:rounded-lg'>
                  <table className='even:bg-black min-w-full divide-y divide-gray-200'>
                    <thead className='bg-[#007AB3] w-full'>
                      <tr>
                        <th
                          scope='col'
                          className='px-28 py-3 text-left text-xs font-medium text-white uppercase tracking-wider'
                        >
                          {columnTarget[currentType - 1]}
                        </th>
                        <th
                          scope='col'
                          className='px-28 py-3 text-left text-xs font-medium text-white uppercase tracking-wider'
                        >
                          Editer
                        </th>
                        <th
                          scope='col'
                          className='px-28 py-3 text-left text-xs font-medium text-white uppercase tracking-wider'
                        >
                          Supprimer
                        </th>
                      </tr>
                    </thead>
                    <tbody className='[&>*:nth-child(even)]:bg-slate-200 bg-white divide-y divide-gray-200'>
                      {data.content.map((item, index) => (
                        <tr key={index}>
                          <td className='px-28 py-4 whitespace-nowrap'>
                            {editingIndex === index ? (
                              <input
                                type='text'
                                value={editedValue}
                                onChange={(e) => setEditedValue(e.target.value)}
                                className='border border-gray-300 px-2 py-1 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
                              />
                            ) : (
                              <div className='text-sm font-medium text-gray-900'>
                                {item[propTarget[currentType - 1]]}
                              </div>
                            )}
                          </td>
                          <td className='px-28 py-4 whitespace-nowrap'>
                            <div className='text-sm font-medium flex flex-column text-gray-900'>
                              {editingIndex === index ? (
                                <>
                                  <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    className='block text-white !bg-green-600 transition-all focus:ring-4
                                                                focus:outline-none focus:ring-blue-300 rounded-[2rem] font-semibold
                                                                text-sm px-2 py-1 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
                                    type='button'
                                    onClick={handleSave}
                                  >
                                    <FontAwesomeIcon icon={faCheck} />
                                  </motion.button>
                                  <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    className='block text-white !bg-red-600 transition-all focus:ring-4
                                                                focus:outline-none focus:ring-blue-300 rounded-[2rem] font-semibold
                                                                text-sm px-2 py-1 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 ml-2'
                                    type='button'
                                    onClick={handleCancel}
                                  >
                                    <FontAwesomeIcon icon={faTimes} />
                                  </motion.button>
                                </>
                              ) : (
                                <motion.button
                                  whileHover={{ scale: 1.05 }}
                                  className='block text-white !bg-green-600 transition-all focus:ring-4
                                                            focus:outline-none focus:ring-blue-300 rounded-[2rem] font-semibold
                                                            text-sm px-2 py-1 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
                                  type='button'
                                  onClick={() => handleEdit(index)}
                                >
                                  <FontAwesomeIcon icon={faEdit} />
                                </motion.button>
                              )}
                            </div>
                          </td>
                          <td className='px-28 py-4 whitespace-nowrap'>
                            <div className='text-sm text-gray-900'>
                              <motion.button
                                onClick={() => handleDelete(index)}
                                whileHover={{ scale: 1.05 }}
                                className='block text-white !bg-red-600 transition-all focus:ring-4
                                                        focus:outline-none focus:ring-blue-300 rounded-[2rem] font-semibold
                                                        text-sm px-2 py-1 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
                                type='button'
                              >
                                <FontAwesomeIcon icon={faTrash} />
                              </motion.button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          <div className='flex justify-between mt-4'>
            <motion.button
              whileHover={{ scale: 1.05 }}
              className='block ml-6 text-white bg-[#007AB3] hover:bg-blue-600 px-3 py-1 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
              onClick={() => paginate(currentPage - 1)}
              disabled={currentPage === 1}
            >
              <FontAwesomeIcon icon={faArrowLeft} className='mr-3' />
              Précédent
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              className='block mr-6 text-white bg-[#007AB3] hover:bg-blue-600 px-3 py-1 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
              onClick={() => paginate(currentPage + 1)}
              disabled={currentPage >= data.totalPages}
            >
              Suivant
              <FontAwesomeIcon icon={faArrowRight} className='ml-3' />
            </motion.button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Management;
