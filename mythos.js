// When Document Loads

$(document).ready(function () {

// promp User when page loads

prompt ()

// Global JS

// Toggle Mobile menu when clicking mobile-menu-button

  $('.mobile-menu-button').click( function() {
    $('.mobile-menu').animate({height: 'toggle'}, 250, function () {
    });
  });

// Toggle Mobile menu when clicking gi-mobile-menu-item

  $('.mobile-menu-item').click( function() {
    $('.mobile-menu').animate({height: 'toggle'}, 250, function () {
    });
  });

// Hide gi-mobile-menu when any anchor is clicked 

$('a').click(function() {
  $('.mobile-menu').hide();
});

// When play button is pressed 

$('.button-text').click(function () {
  $('.play-button').hide();
  $('.character-selection-panel').show();

});

// On window resize 
 /* $(window).resize(function(){
     var width = $(window).width();
     if(width >= x){
   
     }
     else{
         
     }
  }).resize() // Trigger resize function on page load */

}); // End of $(document).ready function

