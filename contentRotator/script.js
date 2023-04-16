(function () {
    "use strict";

    let counter = 1;
    function contentRotator() {
        // get the first paragraph and fade it in
        $(`#container p:nth-child(${counter})`).fadeIn(2000, function () {
            if ($(this).is("#container p:last-child")) {
                //  wait seven seconds
                // fade in the p out
                // set the counter back to 1
                // run counterrotator again
                setTimeout(function(){
                    $(`#container p:nth-child(${counter})`).fadeOut(2000, function(){
                        counter = 1;
                        contentRotator();
                    });
                }, 7000);
            }
            else {
                //  wait seven seconds
                // fade in the p out
                // increment the counter
                // run counterrotator again

                setTimeout(function () {
                    $(`#container p:nth-child(${counter})`).fadeOut(2000, function(){
                        counter++;
                        contentRotator();
                    });
                }, 7000);
            }
        });

    }

    contentRotator();

}());
