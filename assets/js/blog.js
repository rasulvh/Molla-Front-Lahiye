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