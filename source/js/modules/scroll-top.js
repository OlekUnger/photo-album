smoothScroll =(function(){

    var init = function(){
        _setUpListners();
    };

    var _setUpListners = function(){
       $('.arrow-top').on('click', _smooth);

   };
    var _smooth = function (){

        var elementClick = $(this).attr('href'),
            destination = $(elementClick).offset().top;
    
            $('html').animate({scrollTop: destination}, 500);
            return false;
    };

    return {
        init: init
    };

})();

