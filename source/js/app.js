
auth.init();
editHeader.init();

fixedMenu =(function(){
  var headerBottom = $('.header_bottom'),
      headerBottomFixed = $('.header_bottom--fixed'),
      albumPanel = $('.header .panel'),
      height = headerBottom.offset().top;
         

   $(window).on('scroll', function(){
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
            
   });


})();
