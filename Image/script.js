function filterImages(category) {
    const images = document.querySelectorAll('.gallery-item');

    images.forEach(image => {
        if (category === 'all') {
            image.style.display = 'block';
        } else {
            if (image.classList.contains(category)) {
                image.style.display = 'block';
            } else {
                image.style.display = 'none';
            }
        }
    });
}
