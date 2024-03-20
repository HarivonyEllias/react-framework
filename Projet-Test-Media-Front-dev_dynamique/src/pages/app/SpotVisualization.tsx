import React, {useEffect, useState} from 'react';
import { faArrowLeft, faPlus, faEye } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import Viewer from 'react-viewer'
import axios from '../../axios/index';

const SpotVisualization: React.FC = () => {
  const [viewerVisible, setViewerVisible] = useState<boolean> (false);
  const [isAddSpotOpen, setIsAddSpotOpen] = useState<boolean> (false);
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [registers, setRegisters] = useState<any>(null);
  const navigate = useNavigate()

  const returnToOutdoorDisplays = () => {
    return navigate('/outdoor-displays')
  }

  const handleOpenAddSpot = () => {
    setIsAddSpotOpen(!isAddSpotOpen)
  }

  const handleImageFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      setImageFile(file);
    }
  };

  const handleRemoveImage = () => {
    setImageFile(null);
  };

  const fetchValidatedRegisters = async () => {
    await axios.get("/outdoor-registers/v1/validated")
      .then((response) => {
        setRegisters(response.data.payload);
      })
      .catch((error) => {
        console.error("Error fetching validated registers:", error);
      });
  };
  
  useEffect(() => {
    fetchValidatedRegisters();
  }, []); 

  return (
    <div className='p-10'>
        <motion.button
            whileHover={{ scale: 1.05 }}
            onClick={returnToOutdoorDisplays}
            className='block text-white !bg-primary transition-all hover:!bg-secondary focus:ring-4
            focus:outline-none focus:ring-blue-300 rounded-[2rem] font-semibold mb-5
            text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
            type='button'
            >
                <FontAwesomeIcon icon={faArrowLeft} className='mr-2' />
                Retour
        </motion.button>
        <h2 className='mb-6 text-center text-2xl'>Registres</h2>
        <div className="flex flex-col">
          <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
              <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                <table className="even:bg-black min-w-full divide-y divide-gray-200">
                  <thead className="bg-[#007AB3]">
                    <tr>
                    <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider"
                      >
                        Date
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider"
                      >
                        Secteur
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider"
                      >
                        Annonceur
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider"
                      >
                        Contenu
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider"
                      >
                        Régisseur
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider"
                      >
                        format
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider"
                      >
                        Ajouter spot
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider"
                      >
                        Visualiser spot
                      </th>
                    </tr>
                  </thead>
                  <tbody className="[&>*:nth-child(even)]:bg-slate-200 bg-white divide-y divide-gray-200">
                    {registers && registers.map((item, index) => (
                      <tr key={index}>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm font-medium text-gray-900">{item.date}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm font-medium text-gray-900">{item.sector.sector}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900">{item.advertiser}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          {/*<span
                            className="px-2 inline-flex text-xs leading-5
                          font-semibold rounded-full bg-green-100 text-green-800"
                          >
                            Active
                    </span>*/}
                          <div className="text-sm text-gray-900">{item.content}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm">
                          {item.manager}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm">
                          {item.panelFormat.format}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                          <motion.button
                            whileHover={{ scale: 1.05 }}
                            onClick={handleOpenAddSpot}
                            className='block text-white !bg-primary transition-all hover:!bg-secondary focus:ring-4
                            focus:outline-none focus:ring-blue-300 rounded-[2rem] font-semibold
                            text-sm px-2 py-1 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
                            type='button'
                            >
                              <FontAwesomeIcon icon={faPlus} />
                          </motion.button>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                          <motion.button
                            whileHover={{ scale: 1.05 }}
                            onClick={() => {setViewerVisible(true)}}
                            className='block text-white !bg-slate-600 transition-all hover:!bg-secondary focus:ring-4
                            focus:outline-none focus:ring-blue-300 rounded-[2rem] font-semibold
                            text-sm px-2 py-1 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
                            type='button'
                            >
                              <FontAwesomeIcon icon={faEye} />
                          </motion.button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <div className='mt-8'>
          <Viewer
            visible={viewerVisible}
            onClose={() => {setViewerVisible(false)}}
            images={[
              {src: '/assets/1.jpg', alt: 'Call of duty 1'},
              {src: '/assets/4.jpg', alt: 'city 1'},
              {src: '/assets/2.jpg', alt: 'Call of duty 2'},
              {src: '/assets/5.jpg', alt: 'city 2'}
            ]}
          />
        </div>
        {isAddSpotOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className='flex justify-center items-center fixed z-1 left-0 top-0 w-full h-full backdrop-blur'
            style={{
              backgroundColor: 'rgba(0, 0, 0, 0.6)',
            }}
          >
            <div className='bg-[#fefefe] rounded-xl shadow-2xl p-[20px] w-[60%]'>
              <span className='text-[#aaa] float-right text-[28px] font-bold cursor-pointer' onClick={handleOpenAddSpot}>
                &times;
              </span>
              <h2
                className='p-[20px] mb-2 text-center text-[2rem] font-semibold text-gray-500'
              >
                Ajouter spot
              </h2>
              <input
                type="file"
                id='image-file'
                multiple
                name='file[]'
                onChange={handleImageFileChange}
                className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              />
              {imageFile && (
                <div className="mt-2 relative">
                  <img src={URL.createObjectURL(imageFile)} alt="Uploaded" className="max-w-xs" />
                  <button
                    onClick={handleRemoveImage}
                    className="absolute bottom-0 left-0 mb-2 ml-2 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
                  >
                    Supprimer
                  </button>
                </div>
              )}
              <div className='flex justify-center my-5'>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  onClick={handleOpenAddSpot}
                  className='block text-white !bg-[#007AB3] transition-all hover:!bg-secondary focus:ring-4
                  focus:outline-none rounded-sm focus:ring-blue-300 font-semibold mb-5
                  text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
                  type='button'
                >
                  Ajouter
                </motion.button>
              </div>
            </div>
          </motion.div>
        )}
      </div>
  );
};

export default SpotVisualization;
