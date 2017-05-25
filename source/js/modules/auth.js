var showFormModule = (function(){

  var init = function(){
    _setUpListeners();
  };

  var _setUpListeners = function(){
    $('.do-enter').on('click', _showEnterForm);
    $('.do-resetPassword').on('click', _showRegisterForm);

  };

  var _showEnterForm = function(e){
    e.preventDefault();
    
    if($('.authWrapper_resetPassword').hasClass('hide')){
      $('.authWrapper_register, .authWrapper_login').toggleClass("hide");
   
    }else if($('.authWrapper_register').hasClass('hide')) {
      $('.authWrapper_resetPassword, .authWrapper_login' ).toggleClass("hide");

    } else {
      $('.authWrapper_register, .authWrapper_login').toggleClass("hide");
    }
   
  };

  var _showRegisterForm = function(e){
    e.preventDefault();
    $('.authWrapper_resetPassword, .authWrapper_login' ).toggleClass("hide");
  };
  
  
  return {
    init: init
  };

})();