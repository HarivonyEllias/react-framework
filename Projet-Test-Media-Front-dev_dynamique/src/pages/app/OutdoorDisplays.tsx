import FormComponent from '../../components/File-form.tsx';
import Map from '../../components/Map.tsx';
import ModalForm from '../../components/Modal-form.tsx';
import Format from '../../components/chart/Format';
import Localisation from '../../components/chart/Localisation';
import Panel from '../../components/chart/Panel';
import LoadingSkeleton from '../../components/skeleton/LoadingSkeleton.tsx';
import '../../styles/modal.css';
import { motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const OutdoorDisplays: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading delay
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timeout);
  }, []);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };
  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleImageClick = () => {
    setIsHovered(false);
    toggleModal();
  };
  const handleSubmit = () => {
    setIsOpen(false);
  };
  return (
    <div className='flex flex-1 flex-col w-full  mt-0 md:mt-0'>
      {isLoading ? (
        <LoadingSkeleton />
      ) : (
        <div className='w-full p-6 sm:p-8 md:p-10'>
          {/* Header */}
          <div className='flex flex-col gap-10 mb-10'>
            <h1 className='text-2xl font-semibold uppercase'>Gestion de clients annonceurs</h1>
            <div className='flex flex-col md:flex-row gap-3 md:gap-10 w-full'>
              <Link
                to='/brand-audit'
                className='bg-gray-300 text-center md:text-start rounded-[2rem] py-2 px-5 text-[14px] text-primary'
              >
                Audit de marque
              </Link>
              <Link
                to='/outdoor-displays'
                className='rounded-[2rem] text-center md:text-start py-2 px-5 text-[14px] text-white bg-primary'
              >
                Affichage extérieur
              </Link>
              <Link
                to='/management'
                className='bg-gray-300 rounded-[2rem] text-center md:text-start py-2 px-5 text-[14px] text-primary'
              >
                Gérer
              </Link>
            </div>
          </div>

          <hr className='my-5' />

          {/* Register import */}
          <div className='flex items-center justify-center flex-col'>
            <div className='text-center max-w-[1024px]'>
              <h1 className='text-[1.5rem] mb-2'>Ajouter un registre</h1>
              <p className='text-gray-500 font-[300] text-[14px]'>
                Clicker sur l'image pour importer des fichiers ou bien Clicker sur ajouter pour l'ajout manuelle de
                registre
              </p>
            </div>
            <div className='w-[30%] relative' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
              <img
                src='../../../assets/add-file.webp'
                alt='add register'
                onClick={handleImageClick}
                className={isHovered ? 'animate-bounce' : ''}
              />
              {isOpen && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className='flex justify-center items-center mt-50 fixed z-1 left-0 top-0 w-full h-full backdrop-blur'
                  style={{
                    backgroundColor: 'rgba(0, 0, 0, 0.6)',
                  }}
                >
                  <div className='bg-[#fefefe] rounded-xl shadow-2xl pb-[50px] p-[20px] w-[60%]'>
                    <span
                      className='text-[#aaa] float-right text-[28px] font-bold cursor-pointer'
                      onClick={toggleModal}
                    >
                      &times;
                    </span>
                    <h2 className='p-[20px] mb-2 text-center text-[2rem] mp-0 font-semibold text-gray-500'>
                      Importer une registre
                    </h2>
                    <div className='max-h-80 overflow-y-auto modal-content'>
                      <FormComponent />
                    </div>
                  </div>
                </motion.div>
              )}
            </div>
            <ModalForm onSubmit={handleSubmit} />
          </div>

          <hr className='my-5' />

          {/* Spot visualization */}
          <div className='w-full flex flex-col'>
            <Link to='/spot-visualization' className='text-2xl font-semibold uppercase text-primary'>
              Visualisation de spot
            </Link>
            <div className='wrapper' style={{ width: '100%', height: '50px' }}></div>
          </div>

          <hr className='my-5' />

          {/* Charts */}
          {/*<div className='w-full'>
          <div className='md:flex md:justify-around md:item-center'>
            <div className='w-100'>
              <Panel/>
            </div>
            <div className='md:flex md:items-center'>
              <Format />
            </div>
          </div>
          <div className=' mx-5 sm:mx-20 lg:mx-56 mt-12'>
            <Localisation />
          </div>
        </div>*/}
          <div className='mt-12 lg:grid lg:grid-cols-5 lg:grid-rows-2 lg:items-end lg:gap-y-12'>
            <div className='w-3/6 w-full lg:w-8/12 lg:col-span-2 lg:row-start-1 lg:row-end-2'>
              <Panel />
            </div>
            <div className='lg:col-span-3 lg:row-start-1 lg:row-end-2'>
              <Format />
            </div>
            <div className='lg:col-start-1 lg:col-end-6 lg:row-start-2 lg:row-end-3'>
              <Localisation />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default OutdoorDisplays;
