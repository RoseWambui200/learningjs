(function () {
    "use strict"

    let detailsForm = document.querySelector ('#destination_details_form');
    detailsForm.addEventListener ( 'submit', handleFormSubmit );
/* extract the value from each form 
clear out the form 
run a fun that creates a new card 
if needed change the header 
add the card */
    function handleFormSubmit(event) {
        event.preventDefault ();

        // here you get each value from each field and assign it a variable
        let destName = event.target.elements ["name"].value;
        let destLocation = event.target.elements ["location"].value;
        let destPhoto = event.target.elements ["photo"].value;
        let destDesc = event.target.elements ["description"].value;

        // clearing out the fields so the form is empty
        for (  let i= 0; i < detailsForm.length; i++){
              detailsForm.elements[i].value = "";
        };

        // step 3 we create the card
        let destCard = createDestinationCard (destName, destLocation, destPhoto, destDesc);

        // changing the heading when adding a card for the first time
        let wishListContainer = document.getElementById('destinations_container');

        if( wishListContainer.children.length === 0){
            document.getElementById('title').innerHTML = "My Wish List";
        }

        // here we append the destcard 
        document.querySelector('#destinations_container').appendChild (destCard);
        
    };
// this is the function for creating the card body//
    function createDestinationCard (name, location, photoUrl, description){
       let card = document.createElement('div');
       card.className = "card";

       let img = document.createElement('img');
       img.setAttribute('alt', name);

       let constantPhotoUrl = "images/image4.jpg";
       if(photoUrl.length === 0) {
        img.setAttribute('src', constantPhotoUrl);
       }
       else {
        img.setAttribute('src', photoUrl);
       }

    //    we need to add the image to the card
    card.appendChild(img);

    //    add the variable for the card body
    let cardBody = document.createElement('div');
    cardBody.className = "card-body";

    // add the variable for the h3
    let cardTitle = document.createElement('h3');
    cardTitle.innerText = name;
    cardBody.appendChild(cardTitle);

    // add the variable for the subtitle which is h4
    let cardSubtitle = document.createElement('h4');
    cardSubtitle.innerText = location;
    cardBody.appendChild(cardSubtitle);

    // check and see if someone type something in the description to make sure its not empty
    if (description.length !== 0){
        let cardText = document.createElement('p');
        cardText.className = "card-text";
        cardText.innerText = description;
        cardBody.appendChild(cardText);
    }
    // add the remove button
    let cardDeleteBtn = document.createElement('button');
    cardDeleteBtn.innerText = "Remove";

    // add an event listener
    cardDeleteBtn.addEventListener('click', removeDestination);
    cardBody.appendChild(cardDeleteBtn);
    card.appendChild(cardBody);

    return card ;
    }

    // write a function that removes the card

    function removeDestination(event) {
        let card = event.target.parentElement.parentElement;
        card.remove();
    }
} ());

