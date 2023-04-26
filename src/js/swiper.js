const swiper = new Swiper('.swiper', {
  direction: 'horizontal',
  slidesPerView: 1,
  grabCursor: true,
  autoHeight: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});