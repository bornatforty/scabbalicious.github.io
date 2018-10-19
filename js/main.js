jQuery(document).ready(function() {
    "use strict";
$('#slider-carousel').carouFredSel({
    responsive: true,
    width: '100%',
    circular: true,
    scroll: {
        items:1,
        duration:1000,
        pauseOnHover: true
    },
    auto: true,
    items: {
        visible: {
            min:1,
            max:1
        },
        height:"variable"
    },
    pagination: {
        container: ".sliderpager",
        pageAnchorBuilder:false
    }
});
$(window).scroll(function(){
    var top = $(window).scrollTop();
    if(top>=60){
        $("header").addClass('secondary');
    }
    else if ($("header").hasClass('secondary')){
        $("header").removeClass('secondary');
    }
});
    $('a').smoothScroll();
    $('#menu').slicknav({
        label: '',
    })

});

let currentTime = new Date().getHours()
timeCheck = () => {
    if (currentTime > 20 || currentTime < 6) {
        document.body.classList.add('night')
        document.body.classList.remove('miami')
    }
    else if (currentTime === 19) {
        document.body.classList.add('miami')
    }
}
timeCheck()