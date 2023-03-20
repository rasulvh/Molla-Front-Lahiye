$(function () {
  $('.slide').slick({
    'setting-name': 'setting-value',
    'infinite': false,
    'nextArrow': '.fa-chevron-right',
    'prevArrow': '.fa-chevron-left'
  });

  function sliderTextAnimation(){
    let slides = document.querySelectorAll(".slick-slide")

    for (const slide of slides) {
      if (slide.classList.contains("slick-active")) {
        slide.lastElementChild.classList.add("content-animation")
      }
      else{
        slide.lastElementChild.classList.remove("content-animation")
      }
    }
  }

  sliderTextAnimation()

  let leftButton = document.querySelector(".fa-chevron-left")
  let rightButton = document.querySelector(".fa-chevron-right")

  leftButton.addEventListener("click",sliderTextAnimation)
  rightButton.addEventListener("click",sliderTextAnimation)

  let slides = document.querySelectorAll(".slick-slide")

  for (const slide of slides) {
    slide.addEventListener("mouseleave",sliderTextAnimation)
  }

})
