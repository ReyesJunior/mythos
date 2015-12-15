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

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// After Level is Loaded and Pre-Combat Section slide's up


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Boss character Data

var array = [
  {
    name: 'Medusa',
    description:'Blah Blah Blah. Blah Blah Blah Blah Blah Blah Blah Blah Blah. Blah Blah BlahBlah Blah BlahBlah Blah Blah. Blah Blah Blah.',
    move_one: 'Gorgon\'s Glare',
    move_two: 'Slash',
    move_three: 'Corrode Sting',
    move_four: 'Serpant\s Bite',
    move_counter_one: '5/5',
    move_counter_two: '10/10',
    move_counter_three: '5/5',
    move_counter_four: '1/1',
    background_image: 'url',
  },
  {
    name: 'Dragon',
    description:'Blah Blah Blah. Blah Blah Blah Blah Blah Blah Blah Blah Blah. Blah Blah BlahBlah Blah BlahBlah Blah Blah. Blah Blah Blah.',
    move_one: 'Razor Wing',
    move_two: 'Dragon Claw',
    move_three: 'Blaze',
    move_four: 'Tail Whip',
    move_counter_one: '5/5',
    move_counter_two: '10/10',
    move_counter_three: '5/5',
    move_counter_four: '1/1',
    background_image: 'url',
  },
  {
    name: 'Cerberus',
    description:'Blah Blah Blah. Blah Blah Blah Blah Blah Blah Blah Blah Blah. Blah Blah BlahBlah Blah BlahBlah Blah Blah. Blah Blah Blah.',
    move_one: 'Triple Bite',
    move_two: 'Fang',
    move_three: 'Maul',
    move_four: 'Sinister Bark',
    move_counter_one: '5/5',
    move_counter_two: '10/10',
    move_counter_three: '5/5',
    move_counter_four: '1/1',
    background_image: 'url',
  },
  {
    name: 'Hydra',
    description:'Blah Blah Blah. Blah Blah Blah Blah Blah Blah Blah Blah Blah. Blah Blah BlahBlah Blah BlahBlah Blah Blah. Blah Blah Blah.',
    move_one: 'Vicious Bite',
    move_two: 'Thrash',
    move_three: 'Hydra Flank',
    move_four: 'Regenerate',
    move_counter_one: '5/5',
    move_counter_two: '10/10',
    move_counter_three: '5/5',
    move_counter_four: '1/1',
    background_image: 'url',
  },
  {
    name: 'Minotaur',
    description:'Blah Blah Blah. Blah Blah Blah Blah Blah Blah Blah Blah Blah. Blah Blah BlahBlah Blah BlahBlah Blah Blah. Blah Blah Blah.',
    move_one: 'Frenzy Horn',
    move_two: 'Trample',
    move_three: 'Bull Rush',
    move_four: 'Axe Charge',
    move_counter_one: '5/5',
    move_counter_two: '10/10',
    move_counter_three: '5/5',
    move_counter_four: '1/1',
    background_image: 'url',
  }
];

// Cache jQuery
var $RandomizedBossCharacterContainer = $( '.boss.combat-card' );

function getRandomBossCharacter () {
  return array[Math.floor(Math.random() * array.length)];
}

// Use underscore with inlined template
function addRandomBossCharacterWithTemplates () {
  var template = [
    '<div class="boss character-name"><%= name %></div>',
      '<div class="boss character-image"><%= background_image %></div>',
        '<div class="boss character-content-panel">',
          '<div class="boss moves-button">',
            '<p class="boss move-1 move-name"><%= move_one %></p>',
            '<p class="boss counter-1 move-counter"><%= move_counter_one %></p>',
          '</div>',
          '<div class="boss moves-button">',
            '<p class="boss move-2 move-name"><%= move_two %></p>',
            '<p class="boss counter-2 move-counter"><%= move_counter_two %></p>',
          '</div>',
          '<div class="boss moves-button">',
            '<p class="boss move-3 move-name"><%= move_three %></p>',
            '<p class="boss counter-3 move-counter"><%= move_counter_three %></p>',
          '</div>',
          '<div class="boss moves-button">',
            '<p class="boss move-4 move-name"><%= move_four %></p>',
            '<p class="boss counter-4 move-counter"><%= move_counter_four %></p>',
          '</div>',
      '</div>',
    '</div>',
  ].join( '' );

  var boss = getRandomBossCharacter();
  var compiledTemplate = _.template( template );
  var compiledHTML = compiledTemplate( boss );
  console.log( compiledHTML );
  $RandomizedBossCharacterContainer.html( compiledHTML );
}

$( '.js-random-character' ).on( 'click',
  addRandomBossCharacterWithTemplates
);


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// User character Data

}); // End of $(document).ready function

