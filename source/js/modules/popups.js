editHeader =(function(){
    var socialLink = $('.editHeader-form').find('.socials_link'),
        socialItem = $('.editHeader-form').find('.socials_item'),
        popup_socials = $('.popup--edit-socials'),
        edit_header = $('.editHeader-form'),

        edit_btn=$('.edit-btn'),
        close_btn=$('.close-btn'),
        add_btn=$('.add-btn'),
        reset_btn=$('.reset-btn');
   
    var init = function(){
        _setUpListners();
    };

    var _setUpListners = function(){

        edit_btn.on('click', _editHeader);
        socialLink.on('click', _editSocial);
        close_btn.on('click', _togglePopup);
        reset_btn.on('click', _togglePopup);
        add_btn.on('click', _addAlbum);

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

    _addAlbum = function(){
        $('.overlay--dark').removeClass('hide');   
    }


    return {
        init: init
    };

})();
