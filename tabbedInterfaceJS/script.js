(function() {
    "use strict"

    // get all tabs and put them in variable

    let tabs = document.querySelectorAll('#tabs > ul > li > a');

    // add a click handler
    for( let i = 0; i < tabs.length; i++){
        tabs[i].addEventListener('click', selectTab);
    };

    function selectTab(event){
        event.preventDefault();
        for(let i=o; i < tabs.length; i++){
            tabs[i].removeAttribute('class');
        }

        event.target.className = "active";

        let thisTab = event.target.getAttribute('href');
        let thisContent = document.querySelector(thisTab);

        let oldContent = document.querySelector('.visible');

        oldContent.className = "visuallyhidden";
        oldContent.addEventListener('transitionend', function(){
            oldContent.className = "hidden";
            thisContent.className = "visible  visuallyhidden";
            setTimeout(function(){
                thisContent.classList.remove('visuallyhidden');
            }, 20);
        });
    }
} ());