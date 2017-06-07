// scroll to header

smoothScroll =(function(){

   $('.arrow-top').on('click', function(e){
      e.preventDefault();
      
      var   elementClick = $(this).attr('href'),
            destination = $(elementClick).offset().top;
    
      $('html').animate({scrollTop: destination}, 500);
      return false;

      });

})();
