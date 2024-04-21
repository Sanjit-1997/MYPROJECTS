let currentSlide = 0;
const slides = document.querySelectorAll('.advertise');

function showSlide(n) {
    slides.forEach(slide => {
        slide.style.display = 'none';
    });
    slides[n].style.display = 'block';
}

function prevSlide() {
    currentSlide--;
    if (currentSlide < 0) {
        currentSlide = slides.length - 1;
    }
    showSlide(currentSlide);
}

function nextSlide() {
    currentSlide++;
    if (currentSlide >= slides.length) {
        currentSlide = 0;
    }
    showSlide(currentSlide);
}

// Initially display the first slide
showSlide(currentSlide);
//for menu toggle

let menu = document.getElementById("menucontainer");
function toggleMenu(){
    menu.classList.toggle("open-menu");
}