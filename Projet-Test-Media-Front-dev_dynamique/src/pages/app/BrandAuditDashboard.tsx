import React from 'react'
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { faArrowLeft, faBell } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import MediaInvesting from '../../components/brand-audit-chart/MediaInvesting';

const BrandAuditDashboard: React.FC = () => {
    const navigate = useNavigate()

    const returnToBrandAudit = () => {
        return navigate('/brand-audit')
    }

    return (
        <div className='p-6 sm:p-8 md:p-10'>
            <motion.button
                whileHover={{ scale: 1.05 }}
                onClick={returnToBrandAudit}
                className='block text-white !bg-primary transition-all hover:!bg-secondary focus:ring-4
                focus:outline-none focus:ring-blue-300 rounded-[2rem] font-semibold
                text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
                type='button'
            >
                    <FontAwesomeIcon icon={faArrowLeft} className='mr-2' />
                    Retour
            </motion.button>
            <div className='flex items-center my-8 px-8 py-6 bg-red-500 text-white rounded-md'>
                <FontAwesomeIcon icon={faBell} className='mr-4' />
                <p className='pb-0'>Alert sur les nouvelles campagnes</p>
            </div>
            <div>
                <h1 className='text-3xl mb-4'>Bonjour, Miora</h1>
                <div className='flex gap-x-6'>
                    <select name="zone" className='h-10 w-80 px-1 rounded-sm'>
                        <option value="z">zone</option>
                        <option value="s">secteur</option>
                    </select>
                    <select name="media" className='h-10 w-80 px-1 rounded-sm'>
                        <option value="m">média</option>
                        <option value="c">contenu</option>
                    </select>
                    <input type="text" placeholder='période' className='w-80 h-10 px-1 rounded-sm bg-slate-100 focus-visible:outline-2 focus-visible:outline focus-visible:outline-[#007AB3]' />
                </div>
            </div>
            <div className='grid grid-cols-5 mt-8 gap-6'>
                <div className='col-span-2 grid grid-cols-1'>
                    <div className='shadow- rounded-md p-6 mb-6 bg-[#04AADC12]'>
                        <h6 className='mb-1'>Investissemnt média</h6>
                        <p className='font-bold text-[#007AB3]'>1.000.000 MGA</p>
                    </div>
                    <div className='p-6 shadow- rounded-md bg-[#04AADC12]'>
                        <h6 className='mb-1'>Part de vois</h6>
                        <p className='font-bold text-[#007AB3]'>10%</p>
                    </div>
                </div>
                <div className='col-span-3'>
                    <div className='shadow- rounded-md bg-[#04AADC12]'>
                        <MediaInvesting/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BrandAuditDashboard