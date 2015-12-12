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
$('.play-button').click(function () {
  $('.play-button').hide();
  $('.character-selection.section').slideDown(500);
});

// Show character button
$('.show-characters-button').click(function () {
    $(this).hide();
    $('.character-select.textbox-container').show();
  $('.character-selection-panel').slideDown(500);
});

// When character is selected 
$('.character-card').click(function () {
  $('.character-select.textbox-container').hide();
  $('.show-characters-button').show();
  $('.character-selection-panel').slideUp();
  $('.level-selection.section').slideDown(500);
  $('.character-card').removeClass('active');
  $(this).addClass('active');

  if($('.knight').hasClass('active')) {
    $('.selected-character').text('knight');
  }
  else if($('.archer').hasClass('active')) {
    $('.selected-character').text('archer');
  }
  else if($('.mage').hasClass('active')) {
    $('.selected-character').text('mage');
  };
});

// Show level button
$('.show-levels-button').click(function () {
  $(this).hide();
  $('.level-select.textbox-container').show();
  $('.level-selection-panel').slideDown(500);
});

//Change background image of site (depending on which level-card was selected)
$('.level-card').click(function () {
  $('.level-select.textbox-container').hide();
  $('.show-levels-button').show();
  $('.level-selection-panel').slideUp();
  $('.pre-combat.section').slideDown(500);
  $('.level-card').removeClass('active');
  $(this).addClass('active');

  if($('#cave').hasClass('active')) {
    $('.page-wrapper').css('background-color', 'black');
    $('.selected-level').text('cave');
  }
  else if($('#forrest').hasClass('active')) {
    $('.page-wrapper').css('background-color', 'lime');
    $('.selected-level').text('forrest');
  }
  else if($('#city').hasClass('active')) {
    $('.page-wrapper').css('background-color', 'yellow');
    $('.selected-level').text('city');
  };
});


// pre-combat summary panel

// On window resize 
 /* $(window).resize(function(){
     var width = $(window).width();
     if(width >= x){
   
     }
     else{
         
     }
  }).resize() // Trigger resize function on page load */

}); // End of $(document).ready function

