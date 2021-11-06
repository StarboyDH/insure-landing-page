/* Handle Nav-menu when get opened and closed */
$(function() {
    var clicks = 0;
    $(".hamburger").click(function() {
        $(".nav-menu").slideToggle();

        $(".nav-menu").css({
            "display": "flex",
        });

        if (clicks % 2 === 0) {
            $(".hamburger").attr("src", "./images/icon-close.svg");

            $("body").css({
                "height": "100%",
                "overflow": "hidden",
            });
        }

        else {
            $(".hamburger").attr("src", "./images/icon-hamburger.svg");

            $("body").css({
                "height": "auto",
                "overflow": "auto",
            });
        }

        clicks++;
    });
});

/* Laptop Screen Sizes stuff */
if (window.matchMedia("(min-width: 1024px)").matches) {
    const mainImage = document.querySelector(".header-img");
    mainImage.src = "./images/image-intro-desktop.jpg";
}