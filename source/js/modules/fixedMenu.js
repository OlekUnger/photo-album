fixedMenu =(function(){
  var headerBottom = $('.header_bottom'),
      headerBottomFixed = $('.header_bottom--fixed'),
      albumPanel = $('.header .panel'),
      height = headerBottom.offset().top;
  
  var init = function(){
      _setUpListners();
  };

  var _setUpListners = function(){
     $(window).on('scroll', _fixit);

  };

  _fixit = function (){
    var wScroll= $(window).scrollTop();
    
    if(wScroll>height) {
      
      headerBottom.addClass('fixed');
      albumPanel.addClass('hide');
      headerBottomFixed.css('display', 'flex'); 

    } else {
      headerBottom.removeClass('fixed');
      headerBottomFixed.css('display', 'none');
      albumPanel.removeClass('hide');
    }
            
  };

  return {
      init: init
  };

})();

fixedMenu.init();
