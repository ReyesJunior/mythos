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
  $('.landing.section').hide();
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
  $('.character-selection-panel').slideUp(500);
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
  $('.level-selection-panel').slideUp(500);
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


// pre-combat section

$('.load-match-button').on('click', function() {
  $('.character-selection.section').hide();
  $('.level-selection.section').hide();
  $('.pre-combat.section').hide();
  $('.combat.section').slideDown(500);
});

// Combat section

$('#stage').click(function() {
  $(this).hide();
  $('#user-character').animate({left:'5%'}, 500);
});

// toggle alternating combat cards between attacks

$('#user-character').click(function() {
  $(this).animate({
      left: '-150%',
    }, 500 );
  $('#randomized-character').animate({
      left: '5%',
    }, 500 );
});

$('#randomized-character').click(function() {
  $(this).animate({
      left: '150%',
    }, 500 );
  $('#user-character').animate({
      left: '5%',
    }, 500 );
});



// On window resize 
 /* $(window).resize(function(){
     var width = $(window).width();
     if(width >= x){
   



} else if ($(this).offset().left < $('.combat-stage').width()) {
          $(this).animate({
              left: '50%',
          }, 500 );




     }
     else{
         
     }
  }).resize() // Trigger resize function on page load */

////////////////////////////////////////////// After Level is Loaded and Pre-Combat Section slide's up
//////////////////////////////////////////////
// Combat Start 
$('.start-match-button').click(function() {
  $(this).hide();
  return mythosCombatFunction ();
})

}); // End of $(document).ready function

