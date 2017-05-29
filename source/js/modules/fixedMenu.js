fixedMenu =(function(){
    
    var init = function(){
        _setUpListners();
    };

    var _setUpListners = function(){
       $(window).on('scroll', _fixit);

   };

    var _fixit = function (){

       var  wScroll= $(window).scrollTop(),
            headerBottom = $('.header_bottom'),
            headerBottomFixed = $('.header_bottom--fixed'),
            albumPanel = $('.albumPanel'),
            height = headerBottom.offset().top;


        if(wScroll>height) {
            albumPanel.addClass('hide');
            headerBottom.addClass('fixed');
            headerBottomFixed.css('display', 'flex');
            
        } else{
            headerBottom.removeClass('fixed');
            headerBottomFixed.css('display', 'none');
            albumPanel.removeClass('hide');
        }
            
    };

    return {
        init: init
    };

})();
