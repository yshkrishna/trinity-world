$(document).ready(function(){
   // Smooth scrolling
   $('nav ul li a').on('click', function(event) {
       event.preventDefault();
       $('html, body').animate({
           scrollTop: $($.attr(this, 'href')).offset().top
       }, 500);
   });
});
