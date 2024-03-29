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


  let accountOptions = document.querySelectorAll("#login-register .head .option")

  for (const item of accountOptions) {
    item.addEventListener("click", function () {
      if (item.innerText == "Sign In") {
        this.closest(".account").firstElementChild.classList.remove("d-none")
        this.closest(".account").firstElementChild.nextElementSibling.classList.add("d-none")
      }
      if (item.innerText == "Register") {
        this.closest(".account").firstElementChild.classList.add("d-none")
        this.closest(".account").firstElementChild.nextElementSibling.classList.remove("d-none")
      }

    })

  }


  $(".head-up .logo i").on("click", function () {

    $(".sidebar").css("transform", "translateX(0px)");

    $(".sidebar .close i").on("click", function () {
      $(".sidebar").css("transform", "translateX(-300px)")
    })

  })

  let wishlistCount = document.querySelector(".head-up .down .right-icons .wishlist .wish-count")

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

  let products = JSON.parse(localStorage.getItem("products"))
  let cartCount = document.querySelector(".head-up .down .right-icons .cart .cart-count")

  calculateCartCount()

  function calculateCartCount() {
      let sum = 0

      for (const item of products) {
          sum += item.count;
      }

      cartCount.innerText = sum
  }


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


})