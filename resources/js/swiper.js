const swiper = new Swiper('.highlights-swiper', {
    // Optional parameters
    loop: true,
    slidesPerView: 1.4,
    spaceBetween: 20,
  
    // Navigation arrows
    navigation: {
      nextEl: '.highlights-next',
      prevEl: '.highlights-prev',
    },

    breakpoints: {
      768: {
        slidesPerView: 4,
      }
    },

  });

  const swiperTestimonials = new Swiper('.testimonials-swiper', {
    // Optional parameters
    loop: true,
    slidesPerView: 1,
    spaceBetween: 20,
    effect: "fade",
    fadeEffect: {
      crossFade: true,
    },
    // Navigation arrows
    navigation: {
      nextEl: '.testimonials-next',
      prevEl: '.testimonials-prev',
    },

  });