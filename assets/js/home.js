$(function () {


  $('.slide').slick({
    'setting-name': 'setting-value',
    'infinite': false,
    'nextArrow': '.fa-chevron-right',
    'prevArrow': '.fa-chevron-left'
  });

  function sliderTextAnimation() {
    let slides = document.querySelectorAll(".slick-slide")

    for (const slide of slides) {
      if (slide.classList.contains("slick-active")) {
        slide.lastElementChild.classList.add("content-animation")
      }
      else {
        slide.lastElementChild.classList.remove("content-animation")
      }
    }
  }

  sliderTextAnimation()

  let leftButton = document.querySelector("#slider-banner .fa-chevron-left")
  let rightButton = document.querySelector("#slider-banner .fa-chevron-right")

  leftButton.addEventListener("click", sliderTextAnimation)
  rightButton.addEventListener("click", sliderTextAnimation)

  let slides = document.querySelectorAll(".slick-slide")

  for (const slide of slides) {
    slide.addEventListener("mouseleave", sliderTextAnimation)
  }



  let language = document.querySelector(".head-up .right .language-dropdown")
  if (localStorage.getItem("language") != null) {
    language.innerHTML = localStorage.getItem("language") + `<i class="fa-solid fa-chevron-down"></i>
    <ul class="dropdown">
        <li class="english">English</li>
        <li class="french">French</li>
        <li class="spanish">Spanish</li>
    </ul>`
  }
  else {
    language.innerHTML = `English <i class="fa-solid fa-chevron-down"></i>
    <ul class="dropdown">
        <li class="english">English</li>
        <li class="french">French</li>
        <li class="spanish">Spanish</li>
    </ul>`
  }
  language.addEventListener("mouseenter", function () {
    let languageChoices = document.querySelectorAll(".head-up .right .language-dropdown .dropdown li")

    for (const item of languageChoices) {
      item.addEventListener("click", function () {
        language.innerHTML = item.innerText + `<i class="fa-solid fa-chevron-down"></i>
        <ul class="dropdown">
            <li class="english">English</li>
            <li class="french">French</li>
            <li class="spanish">Spanish</li>
        </ul>`

        localStorage.setItem("language", item.innerText)
      })
    }

  })

  let currency = document.querySelector(".head-up .right .currency-dropdown")
  if (localStorage.getItem("currency") != null) {
    currency.innerHTML = localStorage.getItem("currency").toUpperCase() + `<i class="fa-solid fa-chevron-down"></i>
    <ul class="dropdown">
        <li class="euro">Eur</li>
        <li class="dollar">Usd</li>
    </ul>`
  }
  else {
    currency.innerHTML = `USD <i class="fa-solid fa-chevron-down"></i>
    <ul class="dropdown">
        <li class="euro">Eur</li>
        <li class="dollar">Usd</li>
    </ul>`
  }
  currency.addEventListener("mouseenter", function () {
    let currencyChoices = document.querySelectorAll(".head-up .right .currency-dropdown .dropdown li")

    for (const item of currencyChoices) {
      item.addEventListener("click", function () {
        currency.innerHTML = item.innerText.toUpperCase() + `<i class="fa-solid fa-chevron-down"></i>
        <ul class="dropdown">
            <li class="euro">Eur</li>
            <li class="dollar">Usd</li>
        </ul>`

        localStorage.setItem("currency", item.innerText)
      })
    }
  })


  let productsOptions = document.querySelectorAll("#products .head h4")
  for (const item of productsOptions) {

    item.addEventListener("click", function () {

      for (const item of productsOptions) {
        if (item.classList.contains("active")) {
          item.classList.remove("active")
        }
      }

      item.classList.add("active")

      let sliders = document.querySelectorAll("#products .cards .carousel-self")

      for (const slider of sliders) {
        if (slider.getAttribute("data-id") == item.getAttribute("data-id")) {
           slider.classList.remove("d-none")
        }
        else{
          slider.classList.add("d-none")
        }
      }
      
    })
  }


  $('.featured .slider').slick({
    infinite: false,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: ".featured .fa-chevron-right",
    prevArrow: ".featured .fa-chevron-left",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });

  $('.on-sale .slider').slick({
    infinite: false,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: ".on-sale .fa-chevron-right",
    prevArrow: ".on-sale .fa-chevron-left",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });

  $('.top-rated .slider').slick({
    infinite: false,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: ".top-rated .fa-chevron-right",
    prevArrow: ".top-rated .fa-chevron-left",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });


  let addWishlist = document.querySelectorAll(".cards .add-wishlist-icon")

  for (const item of addWishlist) {
    item.addEventListener("mouseover", function () {
      this.previousElementSibling.classList.add("add-wishlist-hover")
    })
    item.addEventListener("mouseout", function () {
      this.previousElementSibling.classList.remove("add-wishlist-hover")
    })
  }
})
