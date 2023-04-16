// we are getting all the links
const navLinks = document.querySelectorAll('nav ul li a');
// loop through them and put click handler on each
navLinks.forEach(function (eachLink) {
   eachLink.addEventListener('click', smoothScroll);
});


function smoothScroll(event) {
   event.preventDefault();

   // we are getting the href of every link that we clicked
   const targetID = event.target.getAttribute('href');
   const targetSection = document.querySelector(targetID);

   const originalTop = Math.floor(targetSection.getBoundingClientRect().top) - 200;

   window.scrollBy({ top: originalTop, left: 0, behavior: 'smooth' });

   console.log(originalTop);

}

window.addEventListener('load', function () {
   const posts = document.querySelectorAll('section');
   let postTops = [];
   let pagetop;
   let counter = 1;
   let prevCounter = 1;
   let doneResizing;
   //   console.log(posts[0].getBoundingClientRect().top) + this.window.pageYOffset;

   resetPagePosition();
   //   console.log(postTops);

   // add eventlistener for capturing scroll
   window.addEventListener('scroll', function () {
      pagetop = window.pageYOffset + 250;
      // console.log(pagetop) + 250;

      if (pageTop > postTops[counter]) {
         counter++;
         console.log(`scrolling down ${counter}`);
      }

      else if (counter > 1 && pagetop < postTops[counter - 1]) {
         counter--;
         console.log(`scrolling up !!! ${counter}`);
      }
      if (counter != prevCounter) {
         navLinks.forEach(function (eachLink) {
            eachLink.removeAttribute('class');
         });

         const thisLink = document.querySelector(`nav ul li:nth-child(${counter}) a`);
         thisLink.className = 'selected';
         prevCounter = counter;

      }

   });

   this.window.addEventListener('resisize', function () {
      clearTimeout(doneResizing);
      doneResizing = setTimeout(function () {
         resetPagePosition();
      }, 500);
   });
   function resetPagePosition() {
      postTops = [];

      posts.forEach(function (post) {
         postTops.push(Math.floor(posts.getBoundingClientRect().top + this.window.pageYOffset))
      });
      const pagePosition = window.pageYOffset + 250;
      counter = 0;

      postTops.forEach(function(post) {
         if(pagePosition > post ){
            counter++;

         }
      });
// remove the class for each links
      navLinks.forEach(function (eachLink) {
         eachLink.removeAttribute('class');
      });

      const thisLink = document.querySelector(`nav ul li:nth-child(${counter}) a`);
         thisLink.className = 'selected';
   }
});