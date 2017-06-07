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
    
    if($('.get-resetPassword').hasClass('hide')){
      toggle('.get-register, .get-login');
   
    } else if ($('.get-register').hasClass('hide')) { 
      toggle('.get-resetPassword, .get-login');

    } else {
      toggle('.get-register, .get-login');
    }
   
  };

  _showRegisterForm = function(e){
    e.preventDefault();
    toggle('.get-resetPassword, .get-login');
  };

  _validate = function(e){
    e.preventDefault();
    var form = $('.auth-form:visible'),
        input = form.find('input');
        errors =[];
    
    
    input.each(function(){
      var placeholder = $(this).attr('placeholder');

      if($.trim($(this).val()) == ''){
        errors.push(placeholder);
      };

    });

    if(errors!=false){
      $('span.error').show().text('Заполните '+errors[0]);
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
