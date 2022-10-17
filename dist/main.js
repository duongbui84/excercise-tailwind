var swiper = new Swiper(".mySwiper", {
    effect: "coverflow",   
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 3,
    spaceBetween: 10,
    speed: 800,
    initialSlide: 3,
    coverflowEffect: {
      rotate: 0,
    },
    pagination: {
      el: ".swiper-pagination",
      dynamicBullets: true,
    },
    navigation: {
        nextEl: '.nextBtn',
        prevEl: '.prevBtn',
      },
  });

  var isLoop = true;

