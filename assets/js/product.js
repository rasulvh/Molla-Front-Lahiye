$(function(){
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

    let products = JSON.parse(localStorage.getItem("products"))
    let cartCount = document.querySelector(".head-up .down .right-icons .cart .cart-count")
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

    calculateCartCount()

    function calculateCartCount() {
        let sum = 0

        for (const item of products) {
            sum += item.count;
        }

        cartCount.innerText = sum
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

    let productImgs = JSON.parse(localStorage.getItem("productImg"))

    let imgTabs = document.querySelector("#product-detail .img-tab .left")
    let rightImg = document.querySelector("#product-detail .img-tab .right")

    if (productImgs != null) {
        imgTabs.innerHTML = `
        <button class="active first-img">
        <img draggable="false" src="${productImgs[0]}" alt="">
        </button>
        <button>
            <img draggable="false" src="${productImgs[1]}" alt="">
        </button>
        `
    
        rightImg.innerHTML = `
        <div class="zoomArea">
        <div id="NZoomContainer" style="width: 450px; height: 450px;"><img draggable="false" id="NZoomImg" data-nzoomscale="1.5" src="${productImgs[0]}" alt=""></div>
        </div>
        `

    }

    let imgTab = document.querySelectorAll("#product-detail .img-tab .left button")

    for (const tab of imgTab) {
        tab.addEventListener("click", function(){
            let imgSrc = this.firstElementChild.getAttribute("src");
            this.parentNode.firstElementChild.classList.remove("active")
            this.parentNode.firstElementChild.nextElementSibling.classList.remove("active")
            this.parentNode.lastElementChild.classList.remove("active")
            this.classList.add("active")
            this.parentNode.nextElementSibling.firstElementChild.firstElementChild.setAttribute("src", imgSrc)
            this.parentNode.nextElementSibling.firstElementChild.firstElementChild.firstElementChild.setAttribute("src", imgSrc)
        })
    }

    let tabMenuOptions = document.querySelectorAll("#tab-menu .header p")
    let tabs = document.querySelectorAll("#tab-menu .tabs .tab")

    for (const item of tabMenuOptions) {
        item.addEventListener("click", function (){
            document.querySelector("#tab-menu .header .active").classList.remove("active")
            item.classList.add("active")

            let id = item.getAttribute("data-id")

            for (const tab of tabs) {
                if(tab.getAttribute("data-id") == id){
                    tab.classList.remove("d-none")
                }
                else{
                    tab.classList.add("d-none")
                }
            }
        })
    }


    $('#cards .slider').owlCarousel({
        loop:false,
        margin:10,
        nav:false,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:4
            }
        }
    })

})