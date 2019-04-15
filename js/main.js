"use strict";

jQuery(document).on('ready', function() {

      // Loader
    jQuery(window).on('load', function() {
      jQuery("#loader").fadeOut(300, function() { $(this).remove(); });
    });

    jQuery('#open-button').on('click', function() {
        var mainNav = jQuery('.menu'),
            $self = jQuery(this);

        if (mainNav.hasClass('active')) {
            mainNav.removeClass('active');
            $self.removeClass('active');
        } else {
            mainNav.addClass('active');
            $self.addClass('active');
        }

    });

    jQuery('#search-btn').on('click', function() {
        var searchinput = jQuery('.serach-input');

        searchinput.addClass('active');

    });
    jQuery('#close-btn').on('click', function() {
        var searchinput = jQuery('.serach-input');

        searchinput.removeClass('active');

    });


    // Client Say
    if (jQuery("#owl-carousel").length > 0) {
        jQuery("#owl-carousel").owlCarousel({
            navigation: true, // Show next and prev buttons
            slideSpeed: 300,
            autoPlay: 3000,
            paginationSpeed: 400,
            singleItem: true,
            margin: 10,
            // dots: true,
            nav: true,
            navigationText: [
                "<i class='pe-7s-angle-right-circle'></i>",
                "<i class='pe-7s-angle-left-circle'></i>"
            ],

        });

    }

    // Team 
    if (jQuery("#owl-demo").length > 0) {
        jQuery("#owl-demo").owlCarousel({
            // autoPlay: 3000, //Set AutoPlay to 3 seconds
            navigation: true,
            items: 3,
            itemsDesktop: [1199, 3],
            itemsDesktopSmall: [979, 2],
            itemsTablet: [768, 2],
            itemsTabletSmall: [687, 1],
            itemsMobile: [479, 1],
            stopOnHover: true,
            navigationText: [
                "<i class='pe-7s-angle-left-circle'></i>",
                "<i class='pe-7s-angle-right-circle'></i>"
            ]
        });
    }


    // Fun facts 
    var numberanimation = jQuery('.count');
    if ((numberanimation.length > 0)) {
        numberanimation.counterUp({
            delay: 20,
            time: 1000
        });
    }


    //Check to see if the window is top if not then display button
    jQuery(window).on('scroll', function() {
        if (jQuery(this).scrollTop() > 600) {
            jQuery('.scrollToTop').fadeIn();
        } else {
            jQuery('.scrollToTop').fadeOut();
        }
    });

    //Click event to scroll to top
    jQuery('.scrollToTop').on('click', function() {
        jQuery('html, body').animate({
            scrollTop: 0
        }, 800);
        return false;
    });

    //** Slider **/
     if (jQuery("#element").length > 0) {
        jQuery("#element").kenburnsy({
                fullscreen: false
        });
    }
});


// Isotope Filter
jQuery(window).on('load', function(b) {
    var container = jQuery("#work-grid")
    if (container.length > 0) {
        container.isotope({
            layoutMode: "masonry",
            transitionDuration: "0.7s",
            columnWidth: 60
        });
    }

    jQuery("a.filter").on("click", function() {
        var filter = jQuery(this).attr("data-filter");
        jQuery("a.filter").removeClass("active");
        jQuery(this).addClass("active");
        if (filter == "all") {
            container.isotope({
                filter: ".mix"
            });
        } else {
            container.isotope({
                filter: "." + filter
            });
        }
    });


    if (jQuery('.wow').length > 0) {
        new WOW().init();
    }

});
