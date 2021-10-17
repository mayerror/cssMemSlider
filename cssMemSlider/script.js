console.log("CSS MEM SLIDER");

const slideWrapper = document.querySelector('.mem-slider__container'),
      slides = document.querySelectorAll('.mem-slider__slide'),
      bulletsAreas = document.querySelectorAll('.mem-slider__bullet-area'),
      bullets = document.querySelectorAll('.mem-slider__bullet'),
      slideWidth = slides[0].offsetWidth;
let index = 1;


function init() {
  bulletsAreas.forEach(item => {
    item.addEventListener('click', e => {
      if(+item.dataset.order != index) {
        if (item.dataset.order == "1") {
          slideWrapper.style.left = `0px`;
          index = 1;
        } else {
          slideWrapper.style.left = `-${(+item.dataset.order - 1)*slideWidth}px`;
          index = +item.dataset.order;
        }
        bulletsUpdate();
      }
    });
  });
}

function bulletsUpdate() {
  bullets.forEach(bullet => {
    bullet.classList.remove('mem-slider__bullet_active');
  });
  bullets[index-1].classList.add('mem-slider__bullet_active');
}

init();