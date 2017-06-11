editHeader =(function(){
    var socialLink = $('.editHeader-form').find('.socials_link'),
        socialItem = $('.editHeader-form').find('.socials_item'),
        popup_socials = $('.popup--edit-socials'),
        edit_header = $('.editHeader-form'),
        title=$('title'),

        edit_header_btn=$('.edit-header_btn'),
        edit_popup_btn=$('.edit-popup_btn'),
        close_btn=$('.close-btn'),
        add_popup_btn=$('.add-btn'),
        reset_btn=$('.reset-btn');
   
    var init = function(){
        _setUpListners();
    };

    var _setUpListners = function(){

        edit_header_btn.on('click', _editHeader);
        edit_popup_btn.on('click', _editPopup);
        socialLink.on('click', _editSocial);
        close_btn.on('click', _togglePopup);
        reset_btn.on('click', _togglePopup);
        add_popup_btn.on('click', _addPopup);

    };

    
    var _togglePopup = function(e){
        e.preventDefault();
        $(this).closest('.popup').toggleClass('hide');   
    };


    _editHeader = function(){
        popup_socials.addClass('hide');
        $('.overlay').removeClass('hide');
    };

    _editSocial = function(e){
        e.preventDefault();
        var socialLinkText = $(this).attr('href'),
            text = popup_socials.find('input').val();

        $(this).parent(socialItem).addClass('active').siblings().removeClass('active');
        popup_socials.removeClass('hide');
        popup_socials.find('input').val(socialLinkText);

    };

    _addPopup = function(){
        $('.overlay--dark, [class*=popup--add-]').removeClass('hide');   
    };

    _editPopup = function(){

        $('.overlay--dark, [class*=popup--edit-]').removeClass('hide');   
    }


    return {
        init: init
    };

})();
