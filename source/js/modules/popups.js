editHeader =(function(){
    var socialLink = $('.editHeader-form').find('.socials_link'),
        socialItem = $('.editHeader-form').find('.socials_item'),
        popup_socials = $('.popup--edit-socials'),
        edit_header = $('.editHeader-form'),

        edit_btn=$('.edit-btn'),
        close_btn=$('.close-btn'),
        reset_btn=$('.reset-btn');
   
    var init = function(){
        _setUpListners();
    };

    var _setUpListners = function(){

        edit_btn.on('click', _editHeader);
        socialLink.on('click', _editSocial);
        close_btn.on('click', _togglePopup);
        reset_btn.on('click', _togglePopup);

    };

    
    var _togglePopup = function(e){
        e.preventDefault();
        toggle($(this).closest('.popup'));   
    };


    _editHeader = function(){
        hide(popup_socials);
        show('.overlay');
    };

    _editSocial = function(e){
        e.preventDefault();
        var socialLinkText = $(this).attr('href'),
            text = popup_socials.find('input').val();

        $(this).parent(socialItem).addClass('active').siblings().removeClass('active');
        show(popup_socials);
        popup_socials.find('input').val(socialLinkText);

    };


    return {
        init: init
    };

})();
