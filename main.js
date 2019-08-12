(function($){
    "use strict";
    new WOW().init();
    if ($(window).width() <= 991){
        $(".wow").removeClass("wow");
    }
    jQuery(document).ready(function(){

        // Sticky Menu
        var scrollTop = $(document).scrollTop();
        var contentHeight = $('.site-header').outerHeight();
        jQuery('.site-header-hoder').css('height',contentHeight);
        $(window).scroll(function() {
            var headerscroll = $(document).scrollTop();

            if (headerscroll > contentHeight){
                jQuery('.header-fixed').addClass('fixed');

            }else{
                jQuery('.header-fixed').removeClass('fixed');
            }
            scrollTop = $(document).scrollTop();
        });

        //videos
        jQuery('.modal-video').on('hidden.bs.modal', function (e) {
            jQuery('#na-videos').attr("src", jQuery("#na-videos").attr("src"));
            jQuery('#na-video1').attr("src", jQuery("#na-video1").attr("src"));
            jQuery('#na-video2').attr("src", jQuery("#na-video2").attr("src"));
            jQuery('#na-video3').attr("src", jQuery("#na-video3").attr("src"));
            jQuery('#na-video4').attr("src", jQuery("#na-video4").attr("src"));
            jQuery('#na-video5').attr("src", jQuery("#na-video5").attr("src"));
            jQuery('#na-video6').attr("src", jQuery("#na-video6").attr("src"));
        });


        //carousel
        jQuery(".owl-carousel").each(function(){
            var number = jQuery(this).data('number');
            var number_table = jQuery(this).data('number-table');
            var number_mintable = jQuery(this).data('number-mintable');
            var number_mobile = jQuery(this).data('number-mobile');
            var dots = jQuery(this).data('dots');
            var arrows = jQuery(this).data('arrows');
            var loop = jQuery(this).data('loop');
            var table = jQuery(this).data('table');
            var mobile = jQuery(this).data('mobile');
            var mobilemin = jQuery(this).data('mobilemin');
            jQuery(this).owlCarousel({
                items : number,
                dots: true,
                loop  : loop,
                autoplay: false,
                autoplayTimeout:5000,
                smartSpeed :1000,
                nav:false,
                responsiveClass:true,
                responsive:{
                    0:{
                        items:1,
                    },
                    600:{
                        items:number_mobile,
                        margin : 120,
                    },
                    1024:{
                        items:number_mintable,
                        loop:true,
                        autoplay: false,
                        autoplayTimeout: 2000,
                    },
                    1200:{
                        items:number_table,
                        loop:true,
                        autoplay: false,
                        autoplayTimeout: 2000,
                    },
                    1300:{
                        items:number,
                        loop:true,
                        autoplay: false,
                        autoplayTimeout: 2000,
                    }
                }
            });
        });


    });

    jQuery.fn.goTo = function() {
        $('html, body').animate({
            scrollTop: $(this).offset().top + 'px'
        }, 'slow');
        return this; // for chaining...
    }

})(jQuery);

