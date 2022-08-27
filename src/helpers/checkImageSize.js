function checkImageSize(image) {
    const size = Math.round((image.size / 1024));
    if (size >= 2000) {
        return (
            <p className="error-label">Kies bij voorkeur een afbeelding die kleiner dan 2Mb is.</p>
        )
    }
}

export default checkImageSize;