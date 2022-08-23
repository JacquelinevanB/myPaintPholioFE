import React, { useState, useContext } from "react";
import axios from 'axios';
import { AuthContext } from "../../context/AuthContext";

//CONNECTIE MET UPDATE EN USER
//CSS

function AddOrEditImage() {

    const token = localStorage.getItem('token');
    const { user: { username } } = useContext(AuthContext);
    const [file, setFile] = useState([]);
    const [previewUrl, setPreviewUrl] = useState('');

    function handleImageChange(e) {
        // Sla het gekozen bestand op
        const uploadedFile = e.target.files[0];
        console.log(uploadedFile);
        // Sla het gekozen bestand op in de state
        setFile(uploadedFile);
        // Sla de preview URL op zodat we deze kunnen laten zien in een <img>
        setPreviewUrl(URL.createObjectURL(uploadedFile));
    }

    async function sendImage(e) {
        // Voorkom een refresh op submit
        e.preventDefault();
        // maak een nieuw FormData object (ingebouwd type van JavaScript)
        const formData = new FormData();
        // Voeg daar ons bestand uit de state aan toe onder de key "file"
        formData.append("file", file);

        try {
            // verstuur ons formData object en geef in de header aan dat het om een form-data type gaat
            // Let op: we wijzigen nu ALTIJD de afbeelding voor student 1001, als je een andere student wil kiezen of dit dynamisch wil maken, pas je de url aan!
            const result = await axios.post(`http://localhost:8080/updates/${update_id}/image`, formData,
                {
                    headers: {
                        "Content-Type": "multipart/form-data",
                        "Authorization": `Bearer ${token}`,
                    },
                })
            console.log(result.data);
        } catch (e) {
            console.error(e)
        }
    }

    return (
        <div className="upload-image-page-container">
            <h1>Afbeelding uploaden en preview bekijken</h1>
            <form onSubmit={sendImage}>
                <label htmlFor="profile-image">
                    Kies afbeelding:
                    <input type="file" name="image-field" id="project-image" onChange={handleImageChange}/>
                </label>
                {/*Als er een preview url is, dan willen we deze in een afbeelding tonen*/}
                {previewUrl &&
                    <label>
                        Preview:
                        <img src={previewUrl} alt="Voorbeeld van de afbeelding die zojuist gekozen is" className="image-preview"/>
                    </label>
                }
                <Button type={submit}>Uploaden</Button>
            </form>
        </div>
    );
}

export default AddOrEditImage;
