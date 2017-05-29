showForm =(function(){
    var socialLink = $('#editHeader-form').find('.socials_link'),
        socialItem = $('#editHeader-form').find('.socials_item'),
        editSocialForm = $('#editSocial-form');

        
    var init = function(){
        _setUpListners();
    };

    

    var _setUpListners = function(){
        $('.EditHeaderBtn').on('click', _editHeaderForm);
        $('.reset').on('click', _fhide);
        socialLink.on('click', _editSocialForm);
    };

     _editHeaderForm = function(e){
        e.preventDefault();
        $('.overlay, #editHeader-form').toggleClass('hide')
     }

    
    _editSocialForm = function(e){
        e.preventDefault();
        var socialLinkText = $(this).attr('href');

        
        
        $(this).parent('li').addClass('active').siblings().removeClass('active');

        if(editSocialForm.hasClass('hide')){
            socialItem.removeClass('active');
        } else {
            editSocialForm.removeClass('hide').find('input').val(socialLinkText);
        }

        
                               
    };

    _fhide = function(e){
        e.preventDefault();

        $(this).closest('[id*=-form]').toggleClass('hide');  
    };

    return {
        init: init
    };

})();