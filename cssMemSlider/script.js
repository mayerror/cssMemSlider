console.log("CSS MEM SLIDER");

const slideWrapper = document.querySelector('.mem-slider__container'),
      slides = document.querySelectorAll('.mem-slider__slide'),
      bullets = document.querySelectorAll('.mem-slider__bullet-area'),
      slideWidth = slides[0].offsetWidth;


function init() {
  // if (slides.length) {
  //   const firstNode = slides[0].cloneNode(true),
  //         lastNode = slides[slides.length-1].cloneNode(true);


  //   slide_wrapper.appendChild(firstNode);
  //   // slide_wrapper.insertBefore(lastNode, slides[0]);
  // }
  bullets.forEach(item => {
    item.addEventListener('click', e => {
      switch (item.dataset.order) {
        case "1":
          slideWrapper.style.left = `0px`;
          index = 1;
          break;
        case "2":
          slideWrapper.style.left = `-${slideWidth}px`;
          index = 2;
          break;
        case "3":
          slideWrapper.style.left = `-${2*slideWidth}px`;
          index = 3;
          break;
        case "4":
          slideWrapper.style.left = `-${3*slideWidth}px`;
          index = 4;
          break;
        default:
          break;
      }
      // if (item.dataset.order = "2") {
      //   slideWrapper.style.left = `-${slideWidth}px`;
      // }
    });
  });
}

function slide() {

}

init();