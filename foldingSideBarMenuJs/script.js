(function () {
    "use strict"

          /* we create a loop that hides the menu and only
pop up when they are clicked */

let submenus = document.querySelectorAll('ul li ul');

for( let i = 0; i<submenus.length; i++){
    submenus[i].className = "hide-menu";
};

// add a click handler to the main menu 
let menulinks = document.querySelectorAll('.menulink');
for ( let i = 0; i < menulinks.length; i++){
    menulinks[i].addEventListener('click', function(event){
        event.preventDefault();
       // this key word ( tells us the menu we clicked on)
       let thisMenu = this.parentNode.querySelector('ul');
    //    console.log(thisMenu.innerHTML);

    // how to change the class for submenus from hide menu to show menu
    // thisMenu.className = "show-menu";

// we need to know how to close the menu after we have gone to the next menu

if ( thisMenu.classList.contains('hide-menu')){
    for( let i = 0; i<submenus.length; i++){
    submenus[i].className = "hide-menu";
};
    thisMenu.className = "show-menu";
}
else{
    thisMenu.className = "hide-menu";
}



    });
};
} ) ();
