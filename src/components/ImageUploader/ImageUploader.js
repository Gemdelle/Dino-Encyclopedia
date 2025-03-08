import React, { useState } from 'react';

const ImageUploader = () => {
    const [image, setImage] = useState(null);
    const [uploadedImage, setUploadedImage] = useState(null);
    const [predictedLabel, setPredictedLabel] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const handleImageChange = (e) => {
        const selectedImage = e.target.files[0];
        setImage(selectedImage);

        if (selectedImage) {
            const objectUrl = URL.createObjectURL(selectedImage);
            setUploadedImage(objectUrl);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!image) {
            setError('Por favor selecciona una imagen.');
            return;
        }

        const formData = new FormData();
        formData.append('image', image);

        setLoading(true);
        setError('');

        try {
            const response = await fetch('http://127.0.0.1:5000/api/predict', {
                method: 'POST',
                body: formData,
            });

            if (!response.ok) {
                throw new Error('Error en la carga de la imagen');
            }

            const result = await response.json();

            setPredictedLabel(result.predicted_label);

        } catch (error) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <h1>Subir Imagen</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange}
                />
                <button type="submit" disabled={loading}>
                    {loading ? 'Subiendo...' : 'Subir Imagen'}
                </button>
            </form>

            {error && <p style={{ color: 'red' }}>{error}</p>}

            {uploadedImage && (
                <div>
                    {predictedLabel && (
                        <h2>{predictedLabel}</h2>
                    )}
                    <img
                        src={uploadedImage}
                        alt="Imagen subida"
                        style={{ maxWidth: '100%', height: 'auto' }}
                    />
                </div>
            )}
        </div>
    );
};

export default ImageUploader;
