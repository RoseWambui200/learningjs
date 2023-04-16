(function () {
    "use strict"

    document.getElementById('convert').addEventListener('submit', function(event){
          event.preventDefault();
          let distance = document.getElementById('distance').value;
         /*  when you type the number in the distance field js see it as String
          we need to use a method that converts it to number */
         distance = parseFloat(distance) ;
         let answer = document.getElementById('answer');

        //  check if distance contains a number
          if( distance){
         let conversion = distance * 1.609344;
         let roundedConversion = conversion.toFixed(3);
        //  alert(roundedConversion);
        answer.innerHTML = `<h2>${distance} miles converts to ${roundedConversion} kilometers</h2>`;
         
          }
          else{
            answer.innerHTML = "<h2>Please provide a number</h2>"
          }
          
    });
}) ();