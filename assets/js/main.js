$(document).ready(function() {

    //hide ribbon of header
    $(".header-top .close-header-top").click(function() {
        $.when($(".header-top").fadeOut()).then(setTimeout(function() {
            $(".header-bottom").css('top', '0')
        }, 600));
    });

    //open mobile main menu
    $(".navbar .navbar-toggler").on("click", function() {
        $(".navbar .navbar-collapse").toggleClass("active");
        $('body').toggleClass('overflow-hidden');
    });

    //close mobile main menu by click on close button
    $(".navbar .close-nav").on("click", function() {
        $(".navbar .navbar-collapse").removeClass("active");
        $('body').removeClass('overflow-hidden');
    });

    // close mobile main menu
    $('.navbar-collapse').on('click', function() {
        $(this).removeClass('active');
        $('body').removeClass('overflow-hidden');
        $('.sub-menu').removeClass('menu-opened');
    });

    $('.navbar-nav').on('click', function(e) {
        e.stopPropagation();
    });

    //toggle dropdown menu in mobile
    $('.navbar-nav > li.nav-item > i').on('click', function() {
        $(this).siblings('.sub-menu').addClass('menu-opened');
    });

    //back to main menu
    $('.back-nav').on('click', function(e) {
        $('.sub-menu').removeClass('menu-opened');
        e.stopPropagation();
    });

    //show and hide level 1
    $('header .navbar-light .navbar-nav .first-level>i').on('click', function() {
        $(this).parent().siblings('.first-level-cat').toggleClass('active')
    });

    //add and remove plus icon of first level
    $('header .navbar-light .navbar-nav .first-level>i').on('click', function() {
        if ($(".first-level-cat").hasClass("active")) {
            $(this).parent().find(".fas").addClass("fa-minus").removeClass("fa-plus")
        } else {
            $(this).parent().find(".fas").removeClass("fa-minus").addClass("fa-plus")
        }
    });


    //add and remove plus icon of second level
    $('header .navbar-light .navbar-nav .second-level>i').on('click', function() {
        let iconeList = $(".second-level-cat");
        // if (iconeList.hasClass('active')) {
        // if($(this).find.hasClass(iconeList)){

        // }
        // #step One 
        if ($(this).parent().find('.fas').hasClass('fa-plus')) {

            $(this).parent().parent().find(iconeList).addClass('active');
            $(this).parent().find(".fas").removeClass("fa-plus").addClass("fa-minus");

            $(this).parent().parent().siblings().find(iconeList).removeClass('active');
            $(this).parent().parent().siblings().find(".fas").removeClass("fa-minus").addClass("fa-plus");

        } else {
            if ($(this).parent().find('.fas').hasClass('fa-minus') && $(this).parent().parent().find(iconeList).hasClass('active')) {
                $(this).parent().parent().find(iconeList).removeClass('active');
                $(this).parent().parent().find(".fas").removeClass("fa-minus").addClass("fa-plus")

            } else {

                $(this).parent().parent().find(iconeList).addClass('active');
                $(this).parent().find(".fas").removeClass("fa-plus").addClass("fa-minus");
            }
        }



        // #step two




    });

    //show and hide level 2
    // $('header .navbar-light .navbar-nav .second-level>i').on('click', function() {
    //     $(this).parent().siblings('.second-level-cat').toggleClass('active')
    // });

    //sticky navbar
    // $(window).scroll(function() {
    //     if ($(this).scrollTop() > 50) {
    //         $(".header-bottom").addClass('sticky');
    //     } else {
    //         $(".header-bottom").removeClass('sticky');
    //     }
    // });
    $(".header-bottom").sticky({ topSpacing: 0 });

    //header top slider
    $('.header-top-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        swipeToSlide: true,
        arrows: false,
        infinite: true,
        autoplay: true,
    });

    //mega slider
    $('.mega-banner-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        swipeToSlide: true,
        arrows: false,
    });

    //brands slider
    $('.brands-slider').slick({
        dots: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 3000,
        speed: 2000,
        variableWidth: true,
        slidesToShow: 6,
        slidesToScroll: 1,
        responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            }
        ]
    });

    /*related product slider*/
    $('.related-product-slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        dots: false,
        swipeToSlide: true,
        arrows: true,

        responsive: [{
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1
                }
            },
            {
                breakpoint: 575,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });
    /*best find slider*/
    $('.best-find-slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        dots: false,
        swipeToSlide: true,
        arrows: true,

        responsive: [{
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1
                }
            },
            {
                breakpoint: 575,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });


    /*other viewed slider*/
    $('.other-viewed-slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        dots: false,
        swipeToSlide: true,
        arrows: true,

        responsive: [{
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1
                }
            },
            {
                breakpoint: 575,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });


    /*recently viewed slider*/
    $('.recently-viewed-slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        dots: false,
        swipeToSlide: true,
        arrows: true,

        responsive: [{
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1
                }
            },
            {
                breakpoint: 575,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });
    /*best seller slider*/
    $('.best-seller-slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        dots: false,
        swipeToSlide: true,
        arrows: true,

        responsive: [{
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1
                }
            },
            {
                breakpoint: 575,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });

    /*inner product slider*/
    $('.inner-product-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        arrows: false,
    });


    //flex slider

    $('.slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        // rtl: true,
        asNavFor: '.slider-nav'
    });
    $('.slider-nav').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        asNavFor: '.slider-for',
        dots: false,
        infinite: false,
        focusOnSelect: true,
        vertical: true,
        // adaptiveHeight: true,

        responsive: [{
                breakpoint: 2000,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 1400,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                }
            }
        ],
    });

    /*new arrival slider*/
    $('.new-arrival-slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        dots: false,
        swipeToSlide: true,
        arrows: true,

        responsive: [{
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1
                }
            },
            {
                breakpoint: 575,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });
    /*trendy now slider*/
    $('.trendy-now-slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        dots: false,
        swipeToSlide: true,
        arrows: true,

        responsive: [{
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1
                }
            },
            {
                breakpoint: 575,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });

    //shopby-collection slider
    $('.shopby-collection-slider').slick({
        dots: true,
        infinite: true,
        autoplay: false,
        autoplaySpeed: 3000,
        speed: 2000,
        variableWidth: true,
        slidesToShow: 5,
        slidesToScroll: 4,
        responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 2,
                    dots: false,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    dots: false,
                }
            }
        ]
    });

    // range slider
    var $rangeSlider = $('#slider-range'),
        $rangeSliderResultMin = $('#minrangeSliderResult'),
        $rangeSliderResultMax = $('#maxrangeSliderResult');
    $rangeSlider.slider({
        range: true,
        min: 10,
        max: 4000,
        values: [10, 4000],
        slide: function(event, ui) {
            $rangeSliderResultMin.text(
                ui.values[0] + ' EGP'
            );
            $rangeSliderResultMax.text(
                ui.values[1] + ' EGP'
            );
        }
    });
    $rangeSliderResultMin.text($rangeSlider.slider('values', 0) + ' EGP');
    $rangeSliderResultMax.text($rangeSlider.slider('values', 1) + ' EGP');

    //show and hide filter popup
    $('.filter-button').on("click", function() {
        $('.grid-filter-popup').addClass('active');
    });
    $('.close__nav').on("click", function() {
        $('.grid-filter-popup').removeClass('active');
    });
    $(document).mouseup(function(e) {

        var container = $(".grid-filter-popup");

        if ($(e.target).closest(".grid-filter-popup").length === 0) {

            container.removeClass("active");

        }
    });

    // if ($(window).width() > 991) {
    //     $(".btn-link , .accordion").click(function(e) {
    //         e.stopPropagation();
    //     });
    // }

    //zoom image
    $('.image-zoom').each(function() {
        $(this).imageZoom({ zoom: 200 });
    });

    //payment slider
    $('.payment-slider').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        dots: false,
        swipeToSlide: true,
        arrows: true,
        infinite: false,

        responsive: [{
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1
                }
            },
            {
                breakpoint: 575,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });
    //my-items slider
    $('.my-items-slider').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        dots: false,
        swipeToSlide: true,
        arrows: true,
        infinite: false,

        responsive: [{
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1
                }
            },
            {
                breakpoint: 575,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });
});