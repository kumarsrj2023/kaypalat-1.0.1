document.addEventListener('DOMContentLoaded', function () {
    const homepageBanner = new Swiper('.banner-container', {
        direction: 'horizontal',
        loop: true,
        effect: 'fade',
        fadeEffect: {
            crossFade: true, // Optional: smooth fade between slides
        },
    });

    // swiper-top-category
    const swiperTopCategory = new Swiper('.swiper-top-category', {
        slidesPerView: 6,
        spaceBetween: 10,
        loop: true,
        autoplay: {
            delay: 3000,
        },
    });

    const productQuickView = new Swiper('.media-container', {
        direction: 'horizontal',
        slidesPerView: 1,
        loop: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });

    const swpBeautyCare = new Swiper('.swp-beauty-care', {
        slidesPerView: 4, // Number of slides visible at once
        spaceBetween: 20, // Space between slides in pixels
        loop: true, // Optional: Enable looping
        breakpoints: {
            640: {
                slidesPerView: 1,
                spaceBetween: 10,
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            1024: {
                slidesPerView: 3,
                spaceBetween: 30,
            },
            1280: {
                slidesPerView: 4,
                spaceBetween: 20,
            },
        },
    });
});