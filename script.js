$(document).ready(function(){
   // Smooth scrolling
   $('nav ul li a').on('click', function(event) {
       event.preventDefault();
       $('html, body').animate({
           scrollTop: $($.attr(this, 'href')).offset().top
       }, 500);
   });

   // Animate cards on scroll
   $(window).on('scroll', function() {
       $('.card').each(function() {
           var cardPos = $(this).offset().top,
               winScrollTop = $(window).scrollTop(),
               winHeight = $(window).height();

           if (cardPos <= winScrollTop + winHeight - 100) { // Trigger when card is in view
               $(this).addClass('visible');
           }
       });
   });
});
