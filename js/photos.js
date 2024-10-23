const fullscreenImages = document.querySelectorAll('.fullscreen-trigger');
        const fullscreenContainer = document.querySelector('.fullscreen-image');
        const fullscreenContent = document.querySelector('.fullscreen-content');
        const photoDescription = document.querySelector('.photo-description');
        let currentIndex = 0;

        // Add event listener to each image
        fullscreenImages.forEach((image, index) => {
            image.addEventListener('click', function() {
                currentIndex = index;
                fullscreenContainer.style.display = 'flex';
                fullscreenContent.src = this.src;
                photoDescription.textContent = this.getAttribute('data-description');
            });
        });

        // Close full-screen image view
        const closeFullscreen = document.querySelector('.close-fullscreen');
        closeFullscreen.addEventListener('click', function() {
            fullscreenContainer.style.display = 'none';
        });

        // Next and previous buttons functionality
        const nextButton = document.querySelector('.next');
        const previousButton = document.querySelector('.previous');

        nextButton.addEventListener('click', function() {
            currentIndex = (currentIndex + 1) % fullscreenImages.length;
            fullscreenContent.src = fullscreenImages[currentIndex].src;
            photoDescription.textContent = fullscreenImages[currentIndex].getAttribute('data-description');
        });

        previousButton.addEventListener('click', function() {
            currentIndex = (currentIndex - 1 + fullscreenImages.length) % fullscreenImages.length;
            fullscreenContent.src = fullscreenImages[currentIndex].src;
            photoDescription.textContent = fullscreenImages[currentIndex].getAttribute('data-description');
        });
