
// Initializing Hero Swiper
let hero_swiper = new Swiper('#hero-slider', {

    // Custom options
    direction: 'horizontal',
    slidesPerView: 1,
    effect: "fade",
    loop: true,

    // Autoplay parameters
    autoplay: {

        // Transition delay between each slide
        delay: 7000,

        // Autoplay will be restarted automatically after user interactions
        disableOnInteraction: true
    },

    // Enabling pagination
    pagination: {
        el: '#hero-slider .swiper-pagination',
        clickable: true
    },

});

// // Initializing Missions Slider
const missions_swiper = new Swiper('#missions-slider', {

    // Custom options
    direction: 'horizontal',
    slidesPerView: 5,
    spaceBetween: 55,

    loop: true,

    // Autoplay parameters
    autoplay: {

        // Transition delay between each slide
        delay: 5000,

        // Autoplay will be restarted automatically after user interactions
        disableOnInteraction: true
    },

    // Enabling navigation
    navigation: {
        nextEl: '#missions-slider .missions-btn-next',
        prevEl: '#missions-slider .missions-btn-prev',
    },
  
});
