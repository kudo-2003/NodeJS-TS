const sliderContainer = document.querySelector('.slider-container');
        const images = document.querySelectorAll('.slider-img');
        const prevBtn = document.querySelector('.slider-prev');
        const nextBtn = document.querySelector('.slider-next');
        let currentIndex = 0;

        function updateSlider() {
            sliderContainer.style.transform = `translateX(-${currentIndex * 100}%)`;
        }

        nextBtn.addEventListener('click', () => {
            currentIndex = (currentIndex + 1) % images.length;
            updateSlider();
        });

        prevBtn.addEventListener('click', () => {
            currentIndex = (currentIndex - 1 + images.length) % images.length;
            updateSlider();
        });

        setInterval(() => {
            currentIndex = (currentIndex + 1) % images.length;
            updateSlider();
        }, 5000);