
/*
  ========================================
  BURGER-MENU
  ========================================
*/
document.addEventListener("DOMContentLoaded", function() {
    const burgerMenu = document.querySelector(".burger-menu");
    const menu = document.querySelector(".menu");

    burgerMenu.addEventListener("click", function() {
        menu.classList.toggle("show");
        burgerMenu.classList.toggle("active"); // Додали цей рядок
    });

    const menuLinks = menu.querySelectorAll("a");
    menuLinks.forEach(function(link) {
        link.addEventListener("click", function() {
            menu.classList.remove("show");
            burgerMenu.classList.remove("active"); // Додали цей рядок
        });
    });
});

/*slider*/
$(document).ready(function() {
    $('.slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        dots: true,
        autoplay: true,
        autoplaySpeed: 10000,
        cssEase: 'linear'
    })
})


/*
  ========================================
  Hidden menu
  ========================================
*/
// Отримуємо посилання на елементи списку та підменю
const items = document.querySelectorAll('.items');

// Проходимося по кожному елементу з класом .items
items.forEach(function(item) {
    const hiddenMenu = item.querySelector('.hidden-menu');

    // Додаємо події наведення курсора та відведення курсора для поточного елементу
    item.addEventListener('mouseover', showHiddenMenu);
    item.addEventListener('mouseout', hideHiddenMenu);

    // Функція для відображення прихованого підменю
    function showHiddenMenu() {
        hiddenMenu.classList.add('visible');
    }

    // Функція для приховування прихованого підменю
    function hideHiddenMenu() {
        hiddenMenu.classList.remove('visible');
    }
});




/*
  ========================================
  For form
  ========================================
*/
$(document).ready(function() {
    // Show the form
    $('.connection').click(function() {
        $('.feedback-hidden-menu').addClass('visible');
    });

    // Close the form
    $('.feedback-hidden-menu .submit').click(function() {
        if (isFormValid()) {
            $('.feedback-hidden-menu').removeClass('visible');
        } else {
            return false;
        }
    });

    // Close the form when clicked outside
    $(document).click(function(event) {
        if (!$(event.target).closest('.connection').length && !$(event.target).closest('.feedback-hidden-menu').length) {
            $('.feedback-hidden-menu').removeClass('visible');
        }
    });

    // Close the form when close button is clicked
    $('.feedback-hidden-menu .close-button').click(function() {
        $('.feedback-hidden-menu').removeClass('visible');
        return false;
    });

    // Form validation
    function isFormValid() {
        var inputs = $('.feedback-hidden-menu form input[type="text"], .feedback-hidden-menu form input[type="tel"], .feedback-hidden-menu form input[type="email"], .feedback-hidden-menu form textarea');
        var isValid = true;

        inputs.each(function() {
            var input = $(this);

            if (input.val().trim() === '') {
                input.addClass('error');
                isValid = false;
            } else {
                input.removeClass('error');
            }
        });

        return isValid;
    }
});


/*
  ========================================
  Validation
  ========================================
*/

$(document).ready(function() {
    // Show the form
    $('.connection').click(function() {
        $('.feedback-hidden-menu').addClass('visible');
    });

    // Close the form when clicked outside
    $(document).click(function(event) {
        if (!$(event.target).closest('.connection').length && !$(event.target).closest('.feedback-hidden-menu').length) {
            $('.feedback-hidden-menu').removeClass('visible');
        }
    });

    // Close the form when close button is clicked
    $('.feedback-hidden-menu .close-button').click(function() {
        $('.feedback-hidden-menu').removeClass('visible');
        return false;
    });

    // Form validation
    $(".feedback-hidden-menu form").submit(function(event) {
        event.preventDefault();

        var form = $(this);
        var inputs = form.find("input[type='text'], input[type='tel'], input[type='email'], textarea");
        var isValid = true;

        inputs.each(function() {
            var input = $(this);
            var errorContainer = input.siblings(".error-message");
            var errorMessage = input.data("error");
            var fieldType = input.attr("type");

            if (input.val().trim() === "") {
                input.addClass("error");
                input.attr("placeholder", errorMessage);
                isValid = false;
            } else {
                if (fieldType === "text" && !/^[a-zA-Zа-яА-ЯіїєІЇЄґҐ']{2,}$/.test(input.val())) {
                    input.addClass("error");
                    input.val("");
                    input.attr("placeholder", "Введіть коректно ім'я.");
                    isValid = false;
                } else if (fieldType === "tel" && !/^[\d-()+ ]{10,}$/.test(input.val())) {
                    input.addClass("error");
                    input.val("");
                    input.attr("placeholder", "Введіть коректний номер телефону.");
                    isValid = false;
                } else if (fieldType === "email" && (!/^.{15,}$/.test(input.val()) || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input.val()))) {
                    input.addClass("error");
                    input.val("");
                    input.attr("placeholder", "Введіть коректну адресу електронної пошти.");
                    isValid = false;
                } else if (input.is("textarea[name='message']") && input.val().length < 10) {
                    input.addClass("error");
                    input.val("поле обов'язкове");
                    input.attr("placeholder", "Введіть повідомлення (мінімум 10 символів).");
                    isValid = false;
                } else {
                    input.removeClass("error");
                }
            }
        });

        if (isValid) {
            $('.feedback-hidden-menu').removeClass('visible');
            form[0].reset();
        }
    });
});
