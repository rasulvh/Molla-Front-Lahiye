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

    let cartCount = document.querySelector(".head-up .down .right-icons .cart .cart-count")

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
})