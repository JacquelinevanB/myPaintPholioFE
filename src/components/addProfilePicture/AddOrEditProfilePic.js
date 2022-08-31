import React, { useState, useContext } from "react";
import axios from 'axios';
import { AuthContext } from "../../context/AuthContext";
import './AddOrEditProfilePic.css';

function AddOrEditProfilePic() {
    const [file, setFile] = useState([]);
    const [previewUrl, setPreviewUrl] = useState('');
    const { user: { username } } = useContext(AuthContext);
    const token = localStorage.getItem('token');

    function handleImageChange(e) {
        const uploadedFile = e.target.files[0];
        console.log(uploadedFile);
        setFile(uploadedFile);
        setPreviewUrl(URL.createObjectURL(uploadedFile));
    }

    async function sendImage(e) {
        e.preventDefault();
        const formData = new FormData();
        formData.append("file", file);

        try {
            const result = await axios.post(`http://localhost:8080/users/${username}/image`, formData,
                {
                    headers: {
                        "Content-Type": "multipart/form-data",
                        "Authorization": `Bearer ${token}`,
                    },
                })
            console.log(result.data);
            window.location.reload();
        } catch (e) {
            console.error(e)
        }
    }

    return (
        <div className="upload-profileimage-container">
            <form onSubmit={sendImage} className="image-form">
                <label htmlFor="profile-image">
                    Kies een afbeelding:
                    <input type="file" name="image-field" id="project-image" onChange={handleImageChange}/>
                </label>
                {previewUrl &&
                    <label className="preview-container">
                        <p>Preview:</p>
                        <img src={previewUrl} alt="Voorbeeld van de afbeelding die zojuist gekozen is" className="image-preview"/>
                    </label>
                }
                <button
                    type="submit"
                    className="form-button"
                >
                    Bewaren
                </button>
            </form>
        </div>
    );
}

export default AddOrEditProfilePic;
