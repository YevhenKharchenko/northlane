import Swiper from 'swiper';
import 'swiper/css/bundle';

let progressionSwiper;

progressionSwiper = new Swiper('.progression-swiper-container', {
  direction: 'horizontal',
  loop: false,
  centeredSlides: true,
  slidesPerView: 1,
  slidesPerGroup: 1,
  initialSlide: 0,
  spaceBetween: 16,
  speed: 500,
  allowTouchMove: true,
  grabCursor: true,
  watchOverflow: true,
  breakpoints: {
    1440: {
      centeredSlides: false,
      allowTouchMove: false,
      grabCursor: false,
      slidesPerView: 5,
      spaceBetween: 0,
    },
  },

  on: {
    init(swiper) {
      document
        .querySelector('.progression-swiper-container')
        .classList.add('show');
    },
  },
});
