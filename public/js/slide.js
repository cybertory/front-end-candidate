
    function slideSwitch() {
        var $active = $('#slideshow .item.active');
    
        if ( $active.length == 0 ) $active = $('#slideshow .item:last');
    
        /* use this to pull the images in the order they appear in the markup */
        var $next =  $active.next().length ? $active.next()
            : $('#slideshow .item:first');
    
    
        $active.addClass('last-active');
    
        $next.css({opacity: 0.0})
            .addClass('active')
            .animate({opacity: 1.0}, 1000, function() {
                $active.removeClass('active last-active');
            });
    }
    function slideMobile() {
        var $active = $('#slideMobile .item.active');
    
        if ( $active.length == 0 ) $active = $('#slideMobile .item:last');
    
        /* use this to pull the images in the order they appear in the markup */
        var $next =  $active.next().length ? $active.next() : $('#slideMobile .item:first');
    
    
        $active.addClass('last-active');
    
        $next.css({opacity: 0.0})
            .addClass('active')
            .animate({opacity: 1.0}, 1000, function() {
                $active.removeClass('active last-active');
            });
    }
    
    