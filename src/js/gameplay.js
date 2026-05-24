import Swiper from 'swiper';
import 'swiper/css/bundle';

const gameplayLeftArrow = document.getElementById('gameplayLeftArrow');
const gameplayRightArrow = document.getElementById('gameplayRightArrow');

let gameplaySwiper;

gameplaySwiper = new Swiper('.gameplay-swiper-container', {
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
      slidesPerView: 'auto',
      spaceBetween: 32,
    },
  },

  on: {
    init(swiper) {
      document
        .querySelector('.gameplay-swiper-container')
        .classList.add('show');
      updateGameplayArrows(swiper);
    },
    slideChange(swiper) {
      updateGameplayArrows(swiper);
    },
    reachEnd(swiper) {
      updateGameplayArrows(swiper);
    },
    reachBeginning(swiper) {
      updateGameplayArrows(swiper);
    },
  },
});

updateGameplayArrows(gameplaySwiper);

function updateGameplayArrows(swiper) {
  gameplayLeftArrow.disabled = swiper.isBeginning;
  gameplayRightArrow.disabled = swiper.isEnd;
}

gameplayLeftArrow.addEventListener('click', () => {
  gameplaySwiper.slidePrev();
});

gameplayRightArrow.addEventListener('click', () => {
  gameplaySwiper.slideNext();
});
