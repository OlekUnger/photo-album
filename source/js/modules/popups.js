showPopups =(function(){
    var socialLink = $('.popup--edit-header').find('.socials_link'),
        socialItem = $('.popup--edit-header').find('.socials_item'),
        popup_profile = $('.popup--edit-profile'),
        popup_socials = $('.popup--edit-socials'),
        popup_header = $('.popup--edit-header'),

        reset_btn=$('.reset-btn'),
        save_btn=$('.save-btn'),
        close_btn=$('.close-btn'),
        btnUpload=$('.btn--upload'),
        edit_btn=$('.edit-btn');

        
    var init = function(){
        _setUpListners();
    };

    var _setUpListners = function(){

        edit_btn.on('click', _editProfile);
        socialLink.on('click', _editSocial);
        reset_btn.on('click', _togglePopup);
        save_btn.on('click', _togglePopup);
        close_btn.on('click', _togglePopup);

    }

    var toggle = function(item){
        $(item).toggleClass('hide'); 
    };

    var hide = function(item){

        $(item).addClass('hide');
    };
    var show = function(item) {
        $(item).removeClass('hide');
    }

    var editHeader = function(){
        hide(popup_socials);
        hide(popup_profile);
        show('.overlay, .popup--edit-header');
    };

    var _togglePopup = function(e){
        e.preventDefault();
        toggle($(this).closest('.popup'));   
    };


    var _editProfile = function(e){
        if($('.overlay').hasClass('hide')){
            editHeader();
        } else {
            show(popup_profile);
            hide(popup_header);
        }   
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

showPopups.init();