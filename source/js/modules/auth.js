auth = (function(){

  var init = function(){
    _setUpListeners();
  };

  var _setUpListeners = function(){
    $('.do-enter').on('click', _showEnterForm);
    $('.do-resetPassword').on('click', _showRegisterForm);

  };

  var _showEnterForm = function(e){
    e.preventDefault();
    
    if($('.get-resetPassword').hasClass('hide')){
      $('.get-register, .get-login').toggleClass("hide");
   
    }else if($('.get-register').hasClass('hide')) {
      $('.get-resetPassword, .get-login' ).toggleClass("hide");

    } else {
      $('.get-register, .get-login').toggleClass("hide");
    }
   
  };

  var _showRegisterForm = function(e){
    e.preventDefault();
    $('.get-resetPassword, .get-login' ).toggleClass("hide");
  };
  
  
  return {
    init: init
  };

})();

auth.init();