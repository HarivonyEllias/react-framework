import React, { useState } from 'react';
import { motion } from 'framer-motion';
import ButtonModal from './Button-modal.tsx';
import Register from './register.tsx';

interface ModalFormProps {
  onSubmit: (data: FormData) => void;
}

interface FormData {
  nom: string;
  email: string;
}

const ModalForm: React.FC<ModalFormProps> = ({ onSubmit }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    nom: '',
    email: '',
  });

  const [step, setStep] = useState(1);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit(formData);
    toggleModal();
  };

  return (
    <>
      <ButtonModal onClick={toggleModal} children={'Ajouter'} />
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className='flex justify-center items-center fixed z-1 left-0 top-0 w-full h-full backdrop-blur'
          style={{
            backgroundColor: 'rgba(0, 0, 0, 0.6)',
          }}
        >
          <div className={`bg-[#fefefe] rounded-xl shadow-2xl p-[20px] ${step === 1 ? 'w-[40%]' : 'w-[80%]'}`}>
            <span className='text-[#aaa] float-right text-[28px] font-bold cursor-pointer' onClick={toggleModal}>
              &times;
            </span>
            <h2 className='p-[20px] mb-2 text-center text-[2rem] mp-0 font-semibold text-gray-500'>
              Soumettre un registre
            </h2>
            <div className="max-h-[75vh] mt-0 overflow-auto modal-content">
              <Register step={step} setStep={setStep} />
            </div>
          </div>
        </motion.div>
      )}
    </>
  );
};

export default ModalForm;
