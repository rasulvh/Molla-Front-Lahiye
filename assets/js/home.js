$(function () {

  window.onscroll = function () { myFunction() };

  var navbar = document.querySelector(".navbar");
  var sticky = navbar.offsetTop;

  function myFunction() {
    if (window.pageYOffset >= sticky) {
      navbar.classList.add("sticky")
    } else {
      navbar.classList.remove("sticky");
    }
  }

  $('#slider-banner .slider .slide').slick({
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
          slider.firstElementChild.click()
        }
        else {
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

  $('#firms .slider').owlCarousel({
    loop: false,
    margin: 15,
    items: 7,
    dots: false,
    nav: false
  })

  $('#trending-products .products .right .slider').slick({
    infinite: false,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: "#trending-products .products .right .fa-chevron-right",
    prevArrow: "#trending-products .products .right .fa-chevron-left",
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

  $('#top-selling-products .products .slide-first .slider').slick({
    infinite: false,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: "#top-selling-products .products .slide-first .fa-chevron-right",
    prevArrow: "#top-selling-products .products .slide-first .fa-chevron-left",
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

  let trendingProductsOptions = document.querySelectorAll("#trending-products .head .right ul li")
  for (const item of trendingProductsOptions) {

    item.addEventListener("click", function () {

      for (const option of trendingProductsOptions) {
        if (option.classList.contains("trend-active")) {
          option.classList.remove("trend-active")
        }
      }

      item.classList.add("trend-active")

      let id = item.getAttribute("data-id")

      let sliders = document.querySelectorAll("#trending-products .products .right .slide-specific")

      for (const slide of sliders) {
        if (slide.getAttribute("data-id") == id) {
          slide.classList.remove("d-none")

          if (slide.classList.contains("slider")) {
            slide.previousElementSibling.classList.remove("d-none")
            slide.nextElementSibling.classList.remove("d-none")
          }
        }
        else {
          if (slide.classList.contains("slider")) {
            slide.previousElementSibling.classList.add("d-none")
            slide.nextElementSibling.classList.add("d-none")
          }
          slide.classList.add("d-none")
        }
      }


    })

  }

  let topSellingProductsOptions = document.querySelectorAll("#top-selling-products .head .right ul li")
  for (const item of topSellingProductsOptions) {

    item.addEventListener("click", function () {

      for (const option of topSellingProductsOptions) {
        if (option.classList.contains("trend-active")) {
          option.classList.remove("trend-active")
        }
      }

      item.classList.add("trend-active")

      let id = item.getAttribute("data-id")

      let sliders = document.querySelectorAll("#top-selling-products .products .slide-specific")

      for (const slide of sliders) {
        if (slide.getAttribute("data-id") == id) {
          slide.classList.remove("d-none")

          if (slide.classList.contains("slider")) {
            slide.previousElementSibling.classList.remove("d-none")
            slide.nextElementSibling.classList.remove("d-none")
          }
        }
        else {
          if (slide.classList.contains("slider")) {
            slide.previousElementSibling.classList.add("d-none")
            slide.nextElementSibling.classList.add("d-none")
          }
          slide.classList.add("d-none")
        }
      }


    })

  }

  let cartCount = document.querySelector(".head-up .down .right-icons .cart .cart-count")
  let wishlistCount = document.querySelector(".head-up .down .right-icons .wishlist .wish-count")

  function calculateCartCount() {
    let sum = 0

    if (JSON.parse(localStorage.getItem("products")) != null) {
      for (const item of JSON.parse(localStorage.getItem("products"))) {
        sum += item.count;
      }

      cartCount.innerText = sum
    }
    else {
      cartCount.innerText = "0"
    }

  }

  calculateCartCount()

  function calculateWishlistCount() {
    if (JSON.parse(localStorage.getItem("wishlist")) != null) {
      let sum = 0

      for (const item of JSON.parse(localStorage.getItem("wishlist"))) {
        sum++
      }

      wishlistCount.innerText = sum
    }
    else {
      wishlistCount.innerText = "0"
    }
  }

  calculateWishlistCount()

  let wishlistProduct = []
  if (JSON.parse(localStorage.getItem("wishlist") != null)) {
    wishlistProduct = JSON.parse(localStorage.getItem("wishlist"));
  }

  let addWishlist = document.querySelectorAll(".add-wishlist-icon")
  for (const item of addWishlist) {
    item.addEventListener("mouseover", function () {
      this.previousElementSibling.classList.add("add-wishlist-hover")
    })
    item.addEventListener("mouseout", function () {
      this.previousElementSibling.classList.remove("add-wishlist-hover")
    })

    item.addEventListener("click", function () {
      if (JSON.parse(localStorage.getItem("wishlist") == null)) {
        wishlistProduct = []
      }

      checkWishlist(item)

      let proImage = item.closest(".img").firstElementChild.getAttribute("src")
      let proName = item.closest(".img").nextElementSibling.getElementsByTagName("a")[0].innerText
      let proPrice = item.closest(".img").nextElementSibling.getElementsByTagName("p")[0].innerText
      let proId = parseInt(item.closest(".card").getAttribute("data-id"))

      let existProduct = wishlistProduct.find((m) => m.id == proId);

      if (existProduct != undefined) {
        let index = wishlistProduct.indexOf(existProduct)

        if (index > -1) {
          wishlistProduct.splice(index, 1)
        }

        this.className = "fa-regular fa-heart add-wishlist-icon"
      }
      else {
        wishlistProduct.push({
          id: proId,
          name: proName,
          price: proPrice,
          image: proImage
        })

        this.className = "fa-solid fa-heart add-wishlist-icon"
      }

      localStorage.setItem("wishlist", JSON.stringify(wishlistProduct))

      calculateWishlistCount()
    })

    checkWishlist(item)
  }

  function checkWishlist(item) {
    let card = item.closest(".card")
    let existProduct = wishlistProduct.find((m) => m.id == card.getAttribute("data-id"));

    if (existProduct != undefined) {
      item.className = "fa-solid fa-heart add-wishlist-icon"
      calculateWishlistCount()
    }
    else {
      item.className = "fa-regular fa-heart add-wishlist-icon"
      calculateWishlistCount()
    }
  }

  let basketProducts = []
  if (JSON.parse(localStorage.getItem("products") != null)) {
    basketProducts = JSON.parse(localStorage.getItem("products"));
  }
  let addCartIcons = document.querySelectorAll(".add-cart")
  for (const item of addCartIcons) {

    item.addEventListener("click", function () {
      if (JSON.parse(localStorage.getItem("products") == null)) {
        basketProducts = []
      }

      let proImage = item.closest(".img").firstElementChild.getAttribute("src")
      let proName = item.closest(".img").nextElementSibling.getElementsByTagName("a")[0].innerText
      let proPrice = Number(item.closest(".img").nextElementSibling.getElementsByTagName("p")[0].innerText.replace(/[^0-9.-]+/g, ""))
      let proId = parseInt(item.closest(".card").getAttribute("data-id"))

      let existProduct = basketProducts.find((m) => m.id == proId);

      if (existProduct != undefined) {
        existProduct.count++;
      }
      else {
        basketProducts.push({
          id: proId,
          name: proName,
          price: proPrice,
          count: 1,
          image: proImage
        })
      }

      localStorage.setItem("products", JSON.stringify(basketProducts))

      calculateCartCount()
    })
  }

  $(".head-up .logo i").on("click", function () {

    $(".sidebar").css("transform", "translateX(0px)");

    $(".sidebar .close i").on("click", function () {
      $(".sidebar").css("transform", "translateX(-300px)")
    })

  })


  let sidebarHeader = $(".sidebar .tab-menu .header .head");

  sidebarHeader.on("click", function () {
    for (const item of sidebarHeader) {
      if ($(item).hasClass("active-head")) {
        $(item).removeClass("active-head");
      }
      if (!$(this).hasClass("active-head")) {
        $(this).addClass("active-head");
      }
    }

    let sidebarUl = $(".sidebar .tab-menu .content ul")

    for (const link of sidebarUl) {
      if ($(link).hasClass("show")) {
        $(link).removeClass("show");
      }
      if ($(this).attr("data-id") == $(link).attr("data-id")) {
        if (!$(link).hasClass("show")) {
          $(link).addClass("show");
        }
      }
    }
  })

  $(".content .menu .menu-item:nth-child(4)").on("click", function () {
    $(".content .menu .menu-item:nth-child(4) .pages").slideToggle("slow");
  })


  AOS.init();

})
