(function () {
    "use strict"

        // $('ul li ul').css('display', 'none');

    // jq has a helper function to help hide things 

    $('ul li ul').hide();

    $('.menulink').click(function(){
        let thisMenu = $(this).next('ul');
      /*   if(thisMenu.is(':visible')){
            thisMenu.hide();
        }

        else {
            thisMenu.show();
        } */
       $('ul li ul').not(thisMenu).hide();
        thisMenu.toggle();
    });
} () );