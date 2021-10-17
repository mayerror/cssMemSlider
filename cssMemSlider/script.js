console.log("CSS MEM SLIDER");
console.log("Пожалуйста, после изменения размера слайдера не забудьте обновить страницу нажатием F5!");

const slideWrapper = document.querySelector('.mem-slider__container'),
      slides = document.querySelectorAll('.mem-slider__slide'),
      bulletsAreas = document.querySelectorAll('.mem-slider__bullet-area'),
      bullets = document.querySelectorAll('.mem-slider__bullet'),
      captions = document.querySelectorAll('.mem-slider__caption'),
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
          slideWrapper.style.left = `-${(+item.dataset.order - 1)*slideWidth + 5*(+item.dataset.order - 1)}px`;
          index = +item.dataset.order;
        }
        bulletsUpdate();
        captionUpdate();
      }
    });
  });
}

// Update active bullet
function bulletsUpdate() {
  bullets.forEach(bullet => {
    bullet.classList.remove('mem-slider__bullet_active');
  });
  bullets[index-1].classList.add('mem-slider__bullet_active');
}

// Update active caption with animation
function captionUpdate() {
  captions.forEach(caption => {
    caption.classList.remove('mem-slider__caption_active');
    caption.classList.remove('mem-slider__caption_trans');
  });
  captions[index-1].classList.add('mem-slider__caption_active');
  setTimeout(() => {
    captions[index-1].classList.add('mem-slider__caption_trans');
  }, 0);
}

init();
