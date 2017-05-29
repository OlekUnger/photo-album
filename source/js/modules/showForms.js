showForm =(function(){
    var socialLink = $('#editHeader-form').find('.socials_link'),
        socialItem = $('#editHeader-form').find('.socials_item'),
        editSocialForm = $('#editSocial-form'),
        on_off=$('.on-off');

        
    var init = function(){
        _setUpListners();
    };

    var _setUpListners = function(){
        $('.EditHeaderBtn').on('click', _editHeaderForm);
        socialLink.on('click', _editSocialForm);
        on_off.on('click', _togglePopup);
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


    _editHeaderForm = function(e){
        e.preventDefault();

        toggle('.overlay, #editHeader-form');
    };

    _editSocialForm = function(e){
        e.preventDefault();
        var socialLinkText = $(this).attr('href');

        $(this).parent(socialItem).addClass('active').siblings().removeClass('active');
        fopen(editSocialForm);
        editSocialForm.find('input').val(socialLinkText);                         
    };

    

    // var _setUpListners = function(){
    //     $('.EditHeaderBtn').on('click', _editHeaderForm);
    //     $('.reset').on('click', _togglePopup);
    //     socialLink.on('click', _editSocialForm);
    // };

    //  _editHeaderForm = function(e){
    //     e.preventDefault();

    //     $('.overlay, #editHeader-form').toggleClass('hide')
    //  }

    
    // _editSocialForm = function(e){
    //     e.preventDefault();
    //     var socialLinkText = $(this).attr('href');

    //     $(this).parent(socialItem).addClass('active').siblings().removeClass('active');
    //     editSocialForm.removeClass('hide').find('input').val(socialLinkText);                         
    // };


    // _togglePopup = function(e){
    //     e.preventDefault();

    //     $(this).closest('[id*=-form]').toggleClass('hide');  
    // };



    return {
        init: init
    };

})();