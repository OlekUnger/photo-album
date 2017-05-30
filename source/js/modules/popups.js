showPopups =(function(){
    var socialLink = $('#editHeader-form').find('.socials_link'),
        socialItem = $('#editHeader-form').find('.socials_item'),
        editSocialForm = $('#editSocial-form'),
        resetBtn=$('.reset-btn');

        
    var init = function(){
        _setUpListners();
    };

    var _setUpListners = function(){
        $('.editHeader-btn').on('click', _editHeader);
        socialLink.on('click', _editSocial);
        resetBtn.on('click', _togglePopup);
        $('.save').on('click', _togglePopup);

    }

    var toggle = function(item){
        $(item).toggleClass('hide'); 
    };

    var fhide = function(item){

        $(item).addClass('hide');
    };
    var fopen = function(item) {
        $(item).removeClass('hide');
    }

    var _togglePopup = function(e){
        e.preventDefault();
         $(this).closest('.popup').toggleClass('hide');   
    };


    _editHeader = function(e){
        e.preventDefault();
        fhide(editSocialForm);
        toggle('.overlay, #editHeader-form');
    };

    _editSocial = function(e){
        e.preventDefault();
        var socialLinkText = $(this).attr('href'),
            text = editSocialForm.find('input').val();

        $(this).parent(socialItem).addClass('active').siblings().removeClass('active');
        fopen(editSocialForm);
        editSocialForm.find('input').val(socialLinkText);

    };

    


    return {
        init: init
    };

})();