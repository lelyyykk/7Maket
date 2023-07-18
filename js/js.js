/*
    ========================================
    slider
    ========================================
*/
$(document).ready(function() {
    $('.banner__slider .row, .share__slider, .features__slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        /*autoplay: true,
        autoplaySpeed: 1000,*/
        cssEase: 'linear'
    });
});
/*
    ========================================
    gallery
    ========================================
*/
document.addEventListener("DOMContentLoaded", function() {
    const galleryBlocks = document.querySelectorAll(".gallery__block");

    galleryBlocks.forEach(function(block) {
        const galleryImage = block.querySelector(".photo");
        const blockUnder = block.querySelector(".gallery__block-under");

        block.addEventListener("mouseenter", function() {
            galleryImage.style.transform = "translateY(-84px)";
            blockUnder.style.backgroundColor = "#000000";
        });

        block.addEventListener("mouseleave", function() {
            galleryImage.style.transform = "none";
            blockUnder.style.backgroundColor = "rgba(0, 0, 0, 1)";
        });
    });
});

/*
    ========================================
    like
    ========================================
*/
document.addEventListener("DOMContentLoaded", function() {
    const likeButtons = document.querySelectorAll(".like-button");

    likeButtons.forEach(function(likeButton) {
        const filledHeart = likeButton.querySelector(".fas");
        const emptyHeart = likeButton.querySelector(".far");
        const likeCount = likeButton.querySelector(".like-count");
        let isLiked = false;
        let count = parseInt(likeCount.innerText);

        likeButton.addEventListener("click", function() {
            if (isLiked) {
                filledHeart.style.display = "none";
                emptyHeart.style.display = "inline-block";
                count--;
            } else {
                filledHeart.style.display = "inline-block";
                emptyHeart.style.display = "none";
                count++;
            }
            likeCount.innerText = count;
            isLiked = !isLiked;
        });
    });
});
/*
    ========================================
    Validation
    ========================================
*/
$(document).ready(function() {
    // Form validation
    $(".form-inline").submit(function(event) {
        event.preventDefault();

        var form = $(this);
        var input = form.find("input[type='text']");
        var isValid = true;
        var errorContainer = input.siblings(".error-message");
        var errorMessage = input.data("error");

        if (input.val().trim() === "") {
            input.addClass("error");
            input.attr("placeholder", errorMessage);
            isValid = false;
        } else if (!/^.{15,}$/.test(input.val()) || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input.val())) {
            input.addClass("error");
            input.val("");
            input.attr("placeholder", "Enter the correct email");
            isValid = false;
        } else {
            input.removeClass("error");
        }

        if (isValid) {
            form[0].reset();
            input.attr("placeholder", "Your email");
        }
    });
});


/*
    ========================================
    BURGER-MENU
    ========================================
*/
document.addEventListener("DOMContentLoaded", function() {
    const burgerMenu = document.querySelector(".header__burger-menu");
    const menu = document.querySelector("ul");

    burgerMenu.addEventListener("click", function() {
        menu.parentElement.classList.toggle("show");
        burgerMenu.classList.toggle("active");
    });

    const menuLinks = menu.querySelectorAll("a");
    menuLinks.forEach(function(link) {
        link.addEventListener("click", function() {
            menu.parentElement.classList.remove("show");
            burgerMenu.classList.remove("active");
        });
    });
});