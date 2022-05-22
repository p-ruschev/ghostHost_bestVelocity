const track = document.querySelector('.carousel__track');
const slides = Array.from(track.children);
const carouselNav = document.querySelector('.carousel__nav');
const carouselName = document.querySelector('.carousel__name');
const carouselDots = Array.from(document.querySelectorAll('.carousel__indicator'));
const cardNames = Array.from(document.querySelectorAll('.card__name'));
const slideName = document.querySelector('.carousel__name');
const slideWidth = slides[0].getBoundingClientRect().width;
const header = document.querySelector('header');

let currentDot = document.querySelector('.current-slide');
let carouselSlide;

const switchSlide = () => {
        currentDot.classList.remove('current-slide');

        let index = carouselDots.indexOf(currentDot);

        if(index >= slides.length - 1) {
            index = 0;
        } else {
            index++;
        }

        const nextSlide = slides[index];
        const nextDot = carouselDots[index];

        nextDot.classList.add('current-slide');
        currentSlide = nextSlide;
        track.style.transform = 'translateX(-' + nextSlide.style.left + ')';
        currentDot = carouselDots[index];
        carouselName.textContent = cardNames[index].textContent;
        carouselSlide = setTimeout(() => {
        switchSlide();
    }, 5000)
}
const refreshSlide = () => {
    clearTimeout(carouselSlide);
    carouselSlide = setTimeout(() => {
    switchSlide();
    }, 5000)
}

const initialSlidePosition = (slide, index) => {
    slide.style.left = slideWidth * index + 'px';
}

const navAction = (event) => {
    if(event.target.classList.contains('carousel__indicator')) {
        currentDot.classList.remove('current-slide');
        const index = carouselDots.indexOf(event.target);
        const nextSlide = slides[index];
        track.style.transform = 'translateX(-' + nextSlide.style.left + ')';
        carouselDots[index].classList.add('current-slide');
        currentDot = carouselDots[index];
        carouselName.textContent = cardNames[index].textContent;
        refreshSlide();
    }
}

carouselSlide = setTimeout(() => {
    switchSlide();
    }, 5000);

slides.forEach(initialSlidePosition);

carouselNav.addEventListener('click', navAction);
window.addEventListener('scroll', function () {
    header.classList.toggle('nav-scrolling', window.scrollY > 0);
})
