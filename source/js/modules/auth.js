auth = (function(){

  var init = function(){
    _setUpListeners();
  };

  var _setUpListeners = function(){
      $('.do-enter').on('click', _showEnterForm);
      $('.do-resetPassword').on('click', _showRegisterForm);
      $('.auth-form').on('submit', _validate);

  };

  _showEnterForm = function(e){
    e.preventDefault();
    $('span.success').hide();
    $('span.error').hide();
    if($('.get-resetPassword').hasClass('hide')){
      $('.get-register, .get-login').toggleClass('hide');
   
    } else if ($('.get-register').hasClass('hide')) { 
      $('.get-resetPassword, .get-login').toggleClass('hide');

    } else {
      $('.get-register, .get-login').toggleClass('hide');
    }
   
  };

  _showRegisterForm = function(e){
    e.preventDefault();
    $('span.success').hide();
    $('span.error').hide();
    $('.get-resetPassword, .get-login').toggleClass('hide');
  };

  _validate = function(e){
    e.preventDefault();
    var form = $('.authWrapper:visible'),
        input = form.find('input'),
        errors =[],
        success;
     
    input.each(function(){
      var placeholder = $(this).attr('placeholder');

      if($.trim($(this).val()) == ''){
        errors.push(placeholder);
      };

    });

    if(errors!=false){
      $('span.error').show().text('Заполните: '+ errors[0]);
    } else { 
      $('span.error').hide();
      
      $('span.success').show().text('Успешно');

      setTimeout(function(){
        $('span.success').hide();
        input.val('');
        },1000);
      
    }
    // console.log(errors);
  };

  
  
  return {
    init: init
  };

})();
