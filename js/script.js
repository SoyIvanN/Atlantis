function scrollUp(){
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
}

mapboxgl.accessToken = 'pk.eyJ1Ijoic295aXZhbm4iLCJhIjoiY2x3cTllbHR4MDAyNDJtc2RmamFvamgxOSJ9.IiYxo2s5Vh0CW-TrROAn4A';

const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    // style: 'mapbox://styles/mapbox/streets-v11',
    style: 'mapbox://styles/mapbox/satellite-streets-v11',
    center: [-7.61626772385272, 42.807649927831746],
    zoom: 11
});

const marker = new mapboxgl.Marker()
    .setLngLat([-7.61626772385272, 42.807649927831746])
    .setPopup(new mapboxgl.Popup().setHTML('<h3>Portomarín</h3><p>Un lugar lleno de historia</p>'))
    .addTo(map);
    console.log(marker);

let slideIndex = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;
const slider = document.querySelector('.slider');

function moveSlide() {
    slideIndex++;

    if (slideIndex >= totalSlides) {
        slideIndex = 0;

        slider.style.transition = 'none';
        slider.style.transform = `translateX(0%)`;

        setTimeout(() => {
            slider.style.transition = 'transform 0.5s ease-in-out';
        }, 0);
    }

    slider.style.transform = `translateX(-${slideIndex * 100}%)`;
}

setInterval(moveSlide, 5000);

slider.style.transition = 'transform 0.5s ease-in-out'; 

