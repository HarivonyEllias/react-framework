import React, { useState } from 'react';
import axios from 'axios';

const FormComponent: React.FC = () => {
  const [excelFile, setExcelFile] = useState<File | null>(null);
  //const [imageFile, setImageFile] = useState<File | null>(null);

  const handleExcelFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      setExcelFile(file);
    }
  };

  /*const handleImageFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      setImageFile(file);
    }
  };

  const handleRemoveImage = () => {
    setImageFile(null);
  };*/
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData();
    if (excelFile) {
      formData.append('file', excelFile as Blob);
    }
    try {
      const response = await axios.put("http://localhost:8080/outdoor-registers/v1/uploadExcel", formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log(response.data); 
      alert("The Excel file has been successfully uploaded and saved.");
    } catch (error) {
      console.error('Failed to upload excelFile', error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
      <div className="flex flex-col">
      <div className="mb-4">
        <label htmlFor="excelFile" className="block text-gray-700 font-bold mb-2">
          Importer un fichier Excel :
        </label>
        <input
          type="file"
          id="excelFile"
          accept=".xlsx, .xls"
          onChange={handleExcelFileChange}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div> <br /> <br />

      <button
        className="mt-auto text-white bg-primary hover:bg-secondary font-medium rounded
        text-sm px-5 py-2.5 text-center dark:bg-blue-600"
        type="submit"
      >
        Enregistrer
      </button>
    </div>
    </form>
    </div>
  );
};

export default FormComponent;
