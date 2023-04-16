(function () {
    "use strict"

    document.getElementById('convert').addEventListener('submit', function (event) {
        event.preventDefault();
        let distance = document.getElementById('distance').value;
        /*  when you type the number in the distance field js see it as String
         we need to use a method that converts it to number */
        distance = parseFloat(distance);
        let answer = document.getElementById('answer');

        //  check if distance contains a number
        if (distance) {
            let conversion = distance * 1.609344;
            let roundedConversion = conversion.toFixed(3);
            //  alert(roundedConversion);
            answer.innerHTML = `<h2>${distance} miles converts to ${roundedConversion} kilometers</h2>`;

        }
        else {
            answer.innerHTML = "<h2>Please provide a number</h2>"
        }

    });
    let convertType = "miles";
    let heading = document.querySelector('h1');
    let intro = document.querySelector('p');
    let answerDiv = document.getElementById('answer');
    let form = document.getElementById('convert');

    // lets add two event listeners for when keys are pressed and submission
    document.addEventListener('keydown', function (event) {
        event.preventDefault();
        let key = event.code;
        if (key === "KeyK") {
            // change the heading
            // change intro paragraph
            // change the value of convert type
            convertType = "kilometers";
            heading.innerHTML = "kilometers to miles Converter";
            intro.innerHTML = "Type in a number of kilometers and click the button to convert to miles"
        }
        else if (key === "KeyM") {
            convertType = "Miles";
            heading.innerHTML = "miles to kilometers Converter";
            intro.innerHTML = "Type in a number of miles and click the button to convert to kilometers"
        }
    });

    form.addEventListener('submit', function (event) {
     event.preventDefault();
     let distance = parseFloat(document.getElementById ('distance').value);
     if (distance){ 
        // convert miles to km 1.609344
        // convert k to m 0.621371192
        if (convertType ==="miles"){
            let converted = (distance * 1.609344).toFixed[3];
            answer.innerHTML = `${distance} miles converts to ${converted} kilometers`;
        }
        else {
            converted =  (distance * 0.621371192).toFixed[3];
            answer.innerHTML = `${distance} kilometers converts to ${converted} miles`;
        }
     }
     else{ answer.innerHTML = "<h2>Please provide a number!</h2>"}
    });
})();