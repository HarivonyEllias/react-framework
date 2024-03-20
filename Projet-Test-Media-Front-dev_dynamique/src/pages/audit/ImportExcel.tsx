import React, { ChangeEvent, useState } from 'react';
import axios from '../../axios';

const ImportExcel: React.FC = () => {
    const [file, setFile] = useState<File | null>(null);

    const handleFile = (e: ChangeEvent<HTMLInputElement>) => {
        if(e.target.files && e.target.files.length >  0){
            const uploaded = e.target.files[0];
            setFile(uploaded);
        }
    }

    const handleUpload = async () =>{
        if(file){
            try {
                const formData = new FormData();
                formData.append("excelFile", file);
    
                const response = await axios.post("http://localhost:8080/mark-registers/v1", formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    }
                })
                console.log(response.data);
            } catch (error) {
                console.error("Fichier non envoyée");
            }
        }
    }


    return (
        <div>
            Choisir le fichier excel à importer
            <input type="file" name="excelFile" id="" onChange={handleFile}/>
            <br />
            <button onClick={handleUpload}>Importer</button>
        </div>
    )
}

export default ImportExcel;