import { faMagnifyingGlass, faRightFromBracket, faSolarPanel, faUser, faBars, faClose } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, {useState} from 'react';
import { Link } from 'react-router-dom';

const Sidebar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean> (false)

  const handleChangeBarMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <>
      <div className='hidden md:block bg-primary !w-[278px] h-screen p-5 sticky top-0 left-0 right-0'>
      <div className='h-full text-white flex flex-col items-start justify-between p-5'>
        <div className='text-center text-2xl font-medium w-full uppercase'>Logo</div>
        <hr className='w-full my-[2rem]' />
        {/* TODO: We should map this part */}
        <div className='flex flex-1 mt-5 flex-col gap-10'>
          <Link to='/brand-audit' className='flex gap-5 items-center'>
            <FontAwesomeIcon icon={faMagnifyingGlass} className='text-xl' />
            <span className='text-[16px]'>Audit de marque</span>
          </Link>
          <Link to='/outdoor-displays ' className='flex gap-5 items-center'>
            <FontAwesomeIcon icon={faSolarPanel} className='text-xl' />
            <span className='text-[16px]'>Affichage extérieur</span>
          </Link>
        </div>
        <hr className='w-full my-[2rem]' />
        <div className='flex flex-col gap-10'>
          <div className='flex gap-5 items-center'>
            <FontAwesomeIcon icon={faUser} className='text-xl' />
            <span className='text-[16px]'>Profile</span>
          </div>
          <div className='flex gap-5 items-center'>
            <FontAwesomeIcon icon={faRightFromBracket} className='text-xl' />
            <span className='text-[16px]'>Déconnexion</span>
          </div>
        </div>
      </div>
    </div>
    <div className='relative md:hidden px-6 pt-8 sm:p-8'>
      <FontAwesomeIcon
        icon={isMenuOpen ? faClose : faBars}
        className='text-2xl text-[#007AB3] cursor-pointer absolute right-5 z-10'
        onClick={handleChangeBarMenu}
      />
      {
        isMenuOpen && (
          <div className='relative z-0 mt-3 w-full border border-2 border-slate-900 rounded-md px-4 py-3'>
            <div className='text-center text-lg font-medium w-full uppercase'>Logo</div>
            <div className='flex flex-1 mt-5 flex-col gap-5'>
              <Link to='/brand-audit' className='flex gap-2 items-center'>
                <FontAwesomeIcon icon={faMagnifyingGlass} className='text-xl' />
                <span className='text-[16px]'>Audit de marque</span>
              </Link>
              <Link to='/outdoor-displays ' className='flex gap-2 items-center'>
                <FontAwesomeIcon icon={faSolarPanel} className='text-xl' />
                <span className='text-[16px]'>Affichage extérieur</span>
              </Link>
            </div>
            <hr className='w-full my-4' />
            <div className='flex flex-col gap-5'>
              <div className='flex gap-2 items-center'>
                <FontAwesomeIcon icon={faUser} className='text-xl' />
                <span className='text-[16px]'>Profile</span>
              </div>
              <div className='flex gap-2 items-center'>
                <FontAwesomeIcon icon={faRightFromBracket} className='text-xl' />
                <span className='text-[16px]'>Déconnexion</span>
              </div>
            </div>
          </div>
        )
      }
      {/*
        isMenuOpen ?
          (
            <>
              <div className='relative w-full border border-2 border-black rounded-md px-4 py-3'>
              <FontAwesomeIcon icon={faClose} className='text-xl absolute right-0' onClick={handleChangeBarMenu} />
                <div className='text-center text-lg font-medium w-full uppercase'>Logo</div>
                <div className='flex flex-1 mt-5 flex-col gap-5'>
                  <Link to='/brand-audit' className='flex gap-2 items-center'>
                    <FontAwesomeIcon icon={faMagnifyingGlass} className='text-xl' />
                    <span className='text-[16px]'>Audit de marque</span>
                  </Link>
                  <Link to='/outdoor-displays ' className='flex gap-2 items-center'>
                    <FontAwesomeIcon icon={faSolarPanel} className='text-xl' />
                    <span className='text-[16px]'>Affichage extérieur</span>
                  </Link>
                </div>
              </div>
            </>
          )
        :
          (
            <>
              <FontAwesomeIcon icon={faBars} className='text-xl' onClick={handleChangeBarMenu} />
            </>
          )
          */}         
    </div>
    </>
  );
};

export default Sidebar;
