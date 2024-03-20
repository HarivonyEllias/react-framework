import React, { useState } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
/*import { faChevronRight, faChevronLeft, faTimes } from '@fortawesome/free-solid-svg-icons';*/
import { faImage } from '@fortawesome/free-solid-svg-icons';

interface FormDataType {
  date: string;
  secteur: string;
  annonceur: string;
  contenu: string;
  regisseur: string;
  arrondissement: string;
  localisation: string;
  repere: string;
  latitude: string;
  longitude: string;
  format: string;
  visuel: string;
  prix: string;
  audit: string;
  image: File | null;
}

interface RegisterProps {
  step: number;
  setStep: React.Dispatch<React.SetStateAction<number>>;
}

const Register: React.FC<RegisterProps> = ({ step, setStep }) => {
  const [formData, setFormData] = useState<FormDataType>({
    date:'',
    secteur: '',
    annonceur: '',
    contenu: '',
    regisseur: '',
    arrondissement: '',
    localisation: '',
    repere: '',
    latitude: '',
    longitude: '',
    format: '',
    visuel: '',
    prix: '',
    audit: '',
    image: null,
  });

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    const file = e.dataTransfer.files[0];
    if (file.type.startsWith('image/')) {
      setFormData({ ...formData, image: file });
    }
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const file = e.target.files[0];
      if (file.type.startsWith('image/')) {
        setFormData({ ...formData, image: file });
      }
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleNext = () => {
    setStep(step + 1);
  };

  const handlePreview = () => {
    setStep(step - 1);
  };

  const handleSubmit = async(e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await axios.post("http://localhost:8080/outdoor-registers/v1",formData)
  };

  const steps = [
    {
      title: "Importer votre photo ici",
      fields: []
    },
    {
      title: "Informations générales",
      fields: ['secteur', 'annonceur', 'contenu', 'regisseur', 'arrondissement', 'localisation','repere', 'format', 'visuel', 'prix', 'audit']
    }
  ];

  return (
    <div className="mx-auto mb-4 p-4">
      <form onSubmit={(e) => handleSubmit(e)}>
        <h2 className="text-lg font-semibold mb-4">{steps[step - 1].title} : </h2>
        <div className="grid grid-cols-2 gap-4">
          {step === 1 && (
            <div className="mb-4 col-span-2 flex justify-center items-center">
              <div className="border border-dashed border-gray-400 rounded-lg w-[80%] h-80 flex justify-center items-center cursor-pointer"
                onClick={() => document.getElementById('image')?.click()}
                onDrop={handleDrop}
                onDragOver={handleDragOver}
              >
               {formData.image ? (
                 <img src={URL.createObjectURL(formData.image)}alt="Uploaded"className="max-w-full max-h-full"/>
                 ) : (
                  <span className="text-gray-500 m-[20px] flex flex-col items-center">
                    Glissez et déposez ou cliquez <br /> <br />
                    <FontAwesomeIcon icon={faImage} className="mr-2" /> 
                  </span>              
                )}
             </div>
              <input
                className="hidden"
                id="image"
                type="file"
                name="image"
                accept="image/*"
                onChange={handleImageChange}
              />
            </div>
          )}
          {step === 2 && steps[step - 1].fields.map(field => (
            <div key={field} className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor={field}>
                {field.charAt(0).toUpperCase() + field.slice(1)}
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id={field}
                type="text"
                placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
                name={field}
                value={(formData[field as keyof FormDataType] as string) || ''}
                onChange={handleChange}
              />
            </div>
          ))}
        </div>
        <div className="flex justify-between">
          {step > 1 && (
            <button
              className="text-white !bg-primary hover:!bg-secondary font-medium rounded
              text-sm px-5 py-2.5 text-center dark:bg-blue-600"
              type="button"
              onClick={handlePreview}
            >
              Précédent
            </button>
          )}
          {step < steps.length ? (
            <button
              className="text-white !bg-primary hover:!bg-secondary font-medium rounded
              text-sm px-5 py-2.5 text-center dark:bg-blue-600 ml-auto"
              type="button"
              onClick={handleNext}
            >
              Suivant
            </button>
          ) : (
            <button
              className="text-white !bg-primary hover:!bg-secondary font-medium rounded
              text-sm px-5 py-2.5 text-center dark:bg-blue-600"
              type="submit"
            >
              Enregistrer
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default Register;
