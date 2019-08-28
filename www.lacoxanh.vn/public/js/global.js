jQuery(document).ready(function(e) {
    // ul last li
    jQuery('ul').each(function(){ jQuery(this).find('li:last').addClass('last'); });
    // ul first li
    jQuery('ul').each(function(){ jQuery(this).find('li:first').addClass('first'); });
    // Menu fixed
    /*jQuery(window).scroll(function(){
     var height = 336;
     var height_fixed = 312;
     var width_brower = jQuery(window).width();
     if (jQuery(window).scrollTop() > height) {
     if(width_brower > 1024){
     jQuery('.logo-menu .wrapper-logo-menu').addClass('menu-fixed');
     jQuery('.logo-menu .wrapper-logo-menu').addClass('scrolled');
     }
     } else {
     jQuery('.logo-menu .wrapper-logo-menu').removeClass('menu-fixed');
     jQuery('.logo-menu .wrapper-logo-menu').removeClass('scrolled');
     }
     if (jQuery(window).scrollTop() > height_fixed) {
     jQuery('.tab_sticker').addClass('share-post-fixed');
     }else{
     jQuery('.tab_sticker').removeClass('share-post-fixed');
     }
     });*/
    jQuery(".overlay-close").click(function(){
        jQuery('.top_contact').toggleClass('active');
        jQuery('body').toggleClass('actived_topcontact');
    });
    // initialize Isotope after all images have loaded
    var container = jQuery('.isotope').imagesLoaded( function() {
        container.isotope({ filter: '*' });
        // filter items on button click
        jQuery('#filters').on( 'click', '.btn', function() {
            jQuery('.btn').removeClass('active');
            jQuery(this).addClass('active');
            var filterValue = jQuery(this).attr('data-filter');
            container.isotope({ filter: filterValue });
            return false;
        });
    });
    /*setInterval(function(){
     jQuery('.rotate').toggleClass('rotated');
     },3000);*/
    var owl_slider;
    owl_slider = jQuery("#owl-slider");
    owl_slider.owlCarousel({
        autoPlay : true,
        navigation: true, // Show next and prev buttons
        slideSpeed: 300,
        paginationSpeed: 400,
        autoHeight : true,
        singleItem: true,
        paginationNumbers : true,
        itemsDesktop: false,
        itemsDesktopSmall: false,
        itemsTablet : false,
        navigationText : ["<span class='fa fa-angle-left'></span>","<span class='fa fa-angle-right'></span>"],
    });
    var owl_reviews;
    owl_reviews = jQuery("#owl-reviews");
    owl_reviews.owlCarousel({
        autoPlay : true,
        navigation : true,
        slideSpeed : 300,
        paginationSpeed : 400,
        items : 4,
        autoHeight : true,
        pagination : false,
        paginationNumbers : true,
        itemsDesktop: false,
        itemsDesktopSmall: [640,1],
        itemsTablet : false,
        navigationText : ["<span class='fa fa-angle-left'></span>","<span class='fa fa-angle-right'></span>"],
    });

    /*Scroll to Top*/
    jQuery('.scrollTo').on('click', scrollToTop);
    function scrollToTop() {
        verticalOffset = typeof(verticalOffset) != 'undefined' ? verticalOffset : 0;
        element = jQuery('body');
        offset = element.offset();
        offsetTop = offset.top;
        jQuery('html, body').animate({scrollTop: offsetTop}, 500, 'linear');
    }

    /*Menu mobile*/
    jQuery(".navbar-toggle").click(function(){
        jQuery('body').addClass('mnopen');

    })
    jQuery(".close-menu").click(function(){
        jQuery('body').removeClass('mnopen');
    })


    /*Scroll to*/
    jQuery('a[href*=#]:not([href=#])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
            var target = jQuery(this.hash);
            target = target.length ? target : jQuery('[name=' + this.hash.slice(1) +']');
            if (target.length) {
                jQuery('html,body').animate({scrollTop: target.offset().top - 210}, 500);
                return false;
            }
        }
    });

    // Button share
    //var post_img = jQuery('meta[property="og:image"]').attr('content');
    var post_title = jQuery('meta[property="og:title"]').attr('content').replace(" | goocchovietduc.com", "");
    var post_url = jQuery('meta[property="og:url"]').attr('content').replace("", "");

    //facebook
    jQuery('a.btn_facebook').click(function(e) {
        var url = 'https://www.facebook.com/sharer/sharer.php?u=' + urlEncode(post_url) + '&t=' + post_title;
        var newwindow = window.open(url, '_blank', 'menubar=no,toolbar=no,resizable=no,scrollbars=no,height=450,width=710');
        if (window.focus) {
            newwindow.focus();
        }
        e.preventDefault();
    });

    //google+
    jQuery('a.btn_google').click(function(e) {
        var url = 'https://plus.google.com/share?url=' + urlEncode(post_url);
        var newwindow = window.open(url, '_blank', 'menubar=no,toolbar=no,resizable=no,scrollbars=no,height=450,width=520');
        if (window.focus) {
            newwindow.focus();
        }
        e.preventDefault();
    });

    //twitter
    jQuery('a.btn_twitter').click(function(e) {
        var url = 'https://twitter.com/intent/tweet?source=webclient&text=' + post_title + '+' + urlEncode(post_url);
        var newwindow = window.open(url, '_blank', 'menubar=no,toolbar=no,resizable=no,scrollbars=no,height=450,width=710');
        if (window.focus) {
            newwindow.focus();
        }
        e.preventDefault();
    });
    function urlEncode(str){
        str = (str + '').toString();
        return encodeURIComponent(str).replace(/#!/g, '%23').replace(/!/g, '%21').replace(/'/g, '%27').replace(/\(/g, '%28').replace(/\)/g, '%29').replace(/\*/g, '%2A').replace(/%20/g, '+');
    }

    // Show box contact
    jQuery('.share-networks .share_email_article').on('click', function () {
        showEmailBox();
        return false;
    });

    function showEmailBox(){
        showDialog(
            'LiĂªn láº¡c qua email',
            '<p>Viá»‡t Äá»©c Deco luĂ´n mong muá»‘n nháº­n Ä‘Æ°á»£c cĂ¡c lá»i nháº­n xĂ©t, pháº£n há»“i tá»« phĂ­a khĂ¡ch hĂ ng! Äá»ƒ hoĂ n thiá»‡n hÆ¡n vĂ  phá»¥c vá»¥ tá»‘t hÆ¡n má»i Ă½ kiáº¿n xin vui lĂ²ng gá»­i vá» Ä‘á»‹a chá»‰ email:</p>' +
            '<div style="margin: 10px 0; text-align: center; border: 1px dashed #ccc;  padding: 10px 0; border-radius: 10px; font-size: 2em;"><a href="mailto:support@e-web.vn">goocchovietduc@gmail.com</a></div>'
        );
    }

    function showDialog (title, content, actions) {
        if (content == null) {
            return;
        }
        var dialog = jQuery('#dialog');
        if (dialog.length == 0) {
            jQuery('body').append(jQuery('<div>', {
                id: 'dialog',style:'opacity:1'
            }));
            dialog = jQuery('#dialog');
            var dialogHtml = '<div>' +
                '<div class="header"></div>' +
                '<div class="content"></div>' +
                '<div class="action"><button class="btnCancel">ÄĂ³ng</button></div>' +
                '</div>';
            dialog.html(dialogHtml);
        }
        var btnSubmit = dialog.find('.action button.btnSubmit'),
            btnCancel = dialog.find('.action button.btnCancel');
        dialog.find('.header').html(title || 'ThĂ´ng bĂ¡o');
        dialog.find('.content').html(content);
        btnCancel.text('ÄĂ³ng');
        if (actions != null) {
            if (actions.cancel != null) {
                if (actions.cancel.text != null) {
                    btnCancel.html(actions.cancel.text);
                }
            }
        }
        btnCancel.on('click', function () {
            if (actions && actions.cancel && actions.cancel.action) {
                actions.cancel.action();
            }
            closeDialog();
        });
        btnCancel.show();
        dialog.find('> div').css({
            'margin-top': '-' + Math.round(jQuery('#dialog > div').height()+100) + 'px'
        });
        dialog.show();
    };

    function closeDialog() {
        var dialog = jQuery('#dialog');
        dialog.hide();
        dialog.find('.header').empty();
        dialog.find('.content').empty();
        dialog.find('.action button').unbind('click').hide();

    };

    /*Lightbox Istopo*/

    jQuery('#portfolio').magnificPopup({
        delegate: '.quick-view',
        type: 'image',
        tLoading: '',
        mainClass:'ew-popup mfp-zoom-in',
        removalDelay: 300,
        callbacks: {
            /*beforeOpen: function() {
             // just a hack that adds mfp-anim class to markup
             this.st.image.markup = this.st.image.markup.replace('mfp-figure', 'mfp-figure mfp-with-anim');
             this.st.mainClass = this.st.el.attr('data-effect');
             },*/
            open: function(){
                //overwrite default prev + next function. Add timeout for css3 crossfade animation
                jQuery.magnificPopup.instance.next = function() {
                    var self = this;
                    self.wrap.removeClass('mfp-image-loaded');
                    setTimeout(function() { jQuery.magnificPopup.proto.next.call(self); }, 120);
                }
                jQuery.magnificPopup.instance.prev = function() {
                    var self = this;
                    self.wrap.removeClass('mfp-image-loaded');
                    setTimeout(function() { jQuery.magnificPopup.proto.prev.call(self); }, 120);
                }
            },
            imageLoadComplete: function(){
                var self = this;
                setTimeout(function() { self.wrap.addClass('mfp-image-loaded'); }, 16);
            }
        },
        closeOnContentClick: true,
        midClick: true, // allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source.
        image: {
            //cursor: 'mfp-zoom-out-cur',
            cursor: null,
            titleSrc: 'title'
        },
        gallery: {
            enabled: true,
            preload: [1,1], // Will preload 0 - before current, and 1 after the current image
            navigateByImgClick: true,
            tPrev: 'Previous (Left arrow key)', // title for left button
            tNext: 'Next (Right arrow key)', // title for right button
        },
        /*retina: {
         ratio: 2 // can also be function that should retun this number
         }*/
    });



    jQuery('.post-gallery').magnificPopup({
        delegate: '.item-gallery',
        type: 'image',
        tLoading: '',
        mainClass:'ew-popup mfp-zoom-in',
        removalDelay: 300,
        callbacks: {
            /*beforeOpen: function() {
             // just a hack that adds mfp-anim class to markup
             this.st.image.markup = this.st.image.markup.replace('mfp-figure', 'mfp-figure mfp-with-anim');
             this.st.mainClass = this.st.el.attr('data-effect');
             },*/
            open: function(){
                //overwrite default prev + next function. Add timeout for css3 crossfade animation
                jQuery.magnificPopup.instance.next = function() {
                    var self = this;
                    self.wrap.removeClass('mfp-image-loaded');
                    setTimeout(function() { jQuery.magnificPopup.proto.next.call(self); }, 120);
                }
                jQuery.magnificPopup.instance.prev = function() {
                    var self = this;
                    self.wrap.removeClass('mfp-image-loaded');
                    setTimeout(function() { jQuery.magnificPopup.proto.prev.call(self); }, 120);
                }
            },
            imageLoadComplete: function(){
                var self = this;
                setTimeout(function() { self.wrap.addClass('mfp-image-loaded'); }, 16);
            }
        },
        closeOnContentClick: true,
        midClick: true, // allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source.
        image: {
            //cursor: 'mfp-zoom-out-cur',
            cursor: null,
            titleSrc: 'title'
        },
        gallery: {
            enabled: true,
            preload: [1,1], // Will preload 0 - before current, and 1 after the current image
            navigateByImgClick: true,
            tPrev: 'Previous (Left arrow key)', // title for left button
            tNext: 'Next (Right arrow key)', // title for right button
        },
        /*retina: {
         ratio: 2 // can also be function that should retun this number
         }*/
    });









    // Ninja Scroll


    jQuery(".fbsocialwidget").css({'width':'100%!important'});
    jQuery(".fb_iframe_widget").css({'width':'100%!important'});



});