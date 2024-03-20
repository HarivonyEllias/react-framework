const FileInput = () => {
  return (
    <>
      <label className='block mb-2 text-sm font-medium text-gray-500'>Versez un fichier</label>
      <input
        className='block p-2 w-1/2 text-sm text-gray-700 rounded-lg cursor-pointer bg-gray-300'
        id='file_input'
        type='file'
      />
    </>
  );
};

export default FileInput;
