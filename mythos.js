// When Document Loads

$(document).ready(function () {

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
  // alert User to select character
  alert ("Welcome to Mythos. please select a character from the following CHARACTER SELECTION PANEL.")
  $('.character-selection-panel').show();
});

// When character is selected 
$('.character-card').click(function () {
  $('.character-selection-panel').hide();
  // alert User to select level
  alert ("Please select a level from the following LEVEL SELECTION PANEL.")
  $('.level-selection-panel').show();
});

//Change background image of site (depending on which level-card was selected)
$('#cave').on('click', function() {
  $('.page-wrapper').css('background-color', 'black');
  $('.level-selection-panel').hide();
});
$('#forrest').on('click', function() {
  $('.page-wrapper').css('background-color', 'lime');
  $('.level-selection-panel').hide();
});
$('#city').on('click', function() {
  $('.page-wrapper').css('background-color', 'yellow');
  $('.level-selection-panel').hide();
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

