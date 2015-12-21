
$(document).ready(function () { // When Document Loads

// Global JS

// Toggle Mobile menu when clicking mobile-menu-button
$( '.mobile-menu-button' ).click( function() {
  $( '.mobile-menu' ).animate( { height : ' toggle '}, 250, function () {
  });
});

// Toggle Mobile menu when clicking gi-mobile-menu-item
$( '.mobile-menu-item' ).click( function() {
  $( '.mobile-menu' ).animate( { height : ' toggle' }, 250, function () {
  });
});

// Hide gi-mobile-menu when any anchor is clicked 
$( 'a' ).click(function() {
  $( '.mobile-menu' ).hide();
});

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Select Hero functions

function showHeroPanel () {
  $( '.first.section' ).hide();
  $( '.character-selection.section' ).slideDown( 500 );
}

function showHeroes () {
  $( '.show-heroes-button' ).hide();
  $( '.character-select.textbox-container' ).show();
  $( '.character-selection-panel' ).slideDown( 500 );
}

function selectHero ( e ) {
  var $currentElement = $( e.target ); // refers to the current element selected
  var characterIndex = $currentElement.attr( 'data-character' );
  var character = heroes[characterIndex];

  $( '.character-select.textbox-container' ).hide();
  $( '.show-heroes-button' ).show();
  $( '.character-selection-panel' ).slideUp( 500 );
  $( '.level-selection.section' ).slideDown( 500 );
}

function getSelectedHero () {
  var currentElement = $(this); // refers to the current element selected
  var theId = currentElement.attr( 'id' );
   currentElement.addClass( 'active' );

  if ( $( '.knight' ).hasClass( 'active' ) ) {
    return heroes[0];
    } 
    else if ( $( '.archer' ).hasClass( 'active' ) ) {
    return heroes[1];
    } 
    else if ( $( '.mage' ).hasClass( 'active' ) ) {
    return heroes[2];
    }
    else if ( $( '.doctor' ).hasClass('active') ) {
    return heroes[1];
    } 
    else if ( $( '.templar' ).hasClass( 'active' ) ) {
    return heroes[2];
    }
    else if ( $( '.trapper' ).hasClass( 'active' ) ) {
    return heroes[1];
    }

}

function displayHeroes () {
  var heroDisplayTemplate = [
    '<% for (var i = 0; i < heroes.length; i++) { %>',
      '<div data-character="<%= i %>" class="hero <%= heroes[ i ].name.toLowerCase() %> character-card"><%= heroes[ i ].name %></div>',
    '<% } %>'
  ].join('');

  var compiledTemplate = _.template( heroDisplayTemplate );
  var compiledHTML = compiledTemplate( heroes );
  console.log( compiledHTML );
  $( '.js-character-selection' ).html( compiledHTML );

}

function addSelectedHeroToTextPrompts ( e ) {
  var $currentElement = $( e.target ); // refers to the current element selected
  var characterIndex = $currentElement.attr( 'data-character' );
  var characterName = heroes[characterIndex].name ;
  
  $( '.selected-hero').html( characterName );
}

// Heroes Event bindings
$( '.play-button' ).click( showHeroPanel );
$( '.show-heroes-button' ).click( showHeroes);
$( '.hero.character-card' ).click( getSelectedHero );
$( document ).on( 'click', '.hero.character-card', selectHero ); // better practice for add/remove things from DOM!
$( document ).on( 'click', '.hero.character-card', getSelectedHero ); // better practice for add/remove things from DOM!
$( document ).on( 'click', '.hero.character-card', addSelectedHeroToTextPrompts ); // better practice for add/remove things from DOM!


displayHeroes();

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Select level functions

function showLevels () {
  $( '.show-levels-button' ).hide();
  $( '.level-select.textbox-container' ).show();
  $( '.level-selection-panel' ).slideDown( 500 );
}

function selectLevel ( e ) {
  var $currentElement = $( e.target ); // refers to the current element selected
  var levelIndex = $currentElement.attr( 'data-level' );
  var level = levels[levelIndex];
  var selectedLevelBackground = $currentElement.css('background-color')

  $( '.level-select.textbox-container' ).hide();
  $( '.show-levels-button' ).show();
  $( '.level-selection-panel' ).slideUp( 500 );
  $( '.pre-combat.section' ).slideDown( 500 );
  $( '.combat.section' ).css( 'background-color', selectedLevelBackground );
  $( '.combat-stage' ).css( 'background-color', selectedLevelBackground );

}

function displayLevels () {
  var levelDisplayTemplate = [
    '<% for (var i = 0; i < levels.length; i++) { %>',
      '<div data-level="<%= i %>" class="level <%= levels[ i ].location.toLowerCase() %> level-card"><%= levels[ i ].location %></div>',
    '<% } %>'
  ].join('');

  var compiledTemplate = _.template( levelDisplayTemplate );
  var compiledHTML = compiledTemplate( levels );
  console.log( compiledHTML );
  $( '.js-level-selection' ).html( compiledHTML );

}

function addSelectedLevelToTextPrompts ( e ) {
  var $currentElement = $( e.target ); // refers to the current element selected
  var levelIndex = $currentElement.attr( 'data-level' );
  var levelName = levels[levelIndex].location ;

  $( '.selected-level' ).html( levelName );
}

// Level Event bindings
$( '.show-levels-button' ).click( showLevels );
$( document ).on( 'click', '.level.level-card', selectLevel );
$( document ).on ('click', '.level.level-card', addSelectedLevelToTextPrompts );

displayLevels();


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Hero Templates

var $SelectedHeroCharacterContainer = $( '.hero.combat-card' );


// Use underscore with inlined template
function addHeroCharacterWithTemplates () {
  var heroTemplate = [
    '<div class="hero character-name"><%= name %></div>',
    '<div class="hero character-image"><%= background_image %></div>',
    '<div class="hero character-content-panel">',
    '<div class="hero moves-button">',
    '<p class="hero move-1 move-name"><%= attacks[0].attackName %></p>',
    '<p class="hero counter-1 move-counter"><%= attacks[0].attackCounter %></p>',
    '</div>',
    '<div class="hero moves-button">',
   '<p class="hero move-1 move-name"><%= attacks[1].attackName %></p>',
    '<p class="hero counter-1 move-counter"><%= attacks[1].attackCounter %></p>',
    '</div>',
    '<div class="hero moves-button">',
    '<p class="hero move-1 move-name"><%= attacks[2].attackName %></p>',
    '<p class="hero counter-1 move-counter"><%= attacks[2].attackCounter %></p>',
    '</div>',
    '<div class="hero moves-button">',
    '<p class="hero move-1 move-name"><%= attacks[3].attackName %></p>',
    '<p class="hero counter-1 move-counter"><%= attacks[3].attackCounter %></p>',
    '</div>',
    '</div>',
    '</div>',
    ].join( '' );

  var hero = getSelectedHero();
  var compiledTemplate = _.template( heroTemplate );
  var compiledHTML = compiledTemplate( hero );
  console.log( compiledHTML );
  $SelectedHeroCharacterContainer.html( compiledHTML );
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Villain Templates

var $RandomizedVillainCharacterContainer = $( '.villain.combat-card' );

function getRandomVillainCharacter () {
  var selectedBoss = villains[Math.floor(Math.random() * villains.length)];
  return selectedBoss;

}

// Use underscore with inlined template
function addRandomVillainCharacterWithTemplates () {
  var villainTemplate = [
    '<div class="villain character-name"><%= name %></div>',
    '<div class="villain character-image"><%= background_image %></div>',
    '<div class="villain character-content-panel">',
    '<div class="villain moves-button">',
    '<p class="villain move-1 move-name"><%= attacks[0].attackName %></p>',
    '<p class="villain counter-1 move-counter"><%= attacks[0].attackCounter %></p>',
    '</div>',
    '<div class="villain moves-button">',
   '<p class="villain move-1 move-name"><%= attacks[1].attackName %></p>',
    '<p class="villain counter-1 move-counter"><%= attacks[1].attackCounter %></p>',
    '</div>',
    '<div class="villain moves-button">',
    '<p class="villain move-1 move-name"><%= attacks[2].attackName %></p>',
    '<p class="villain counter-1 move-counter"><%= attacks[2].attackCounter %></p>',
    '</div>',
    '<div class="villain moves-button">',
    '<p class="villain move-1 move-name"><%= attacks[3].attackName %></p>',
    '<p class="villain counter-1 move-counter"><%= attacks[3].attackCounter %></p>',
    '</div>',
    '</div>',
    '</div>',
    ].join( '' );

  var villain = getRandomVillainCharacter();
  var compiledTemplate = _.template( villainTemplate );
  var compiledHTML = compiledTemplate( villain );
  console.log( compiledHTML );
  $RandomizedVillainCharacterContainer.html( compiledHTML );
}


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Launch Quest functions

function hideSelectionPanels () {
  $( '.character-selection.section' ).hide();
  $( '.level-selection.section' ).hide();
  $( '.pre-combat.section' ).hide();

}

function showFirstCombatText () {
  $( '.combat.section' ).show();
  $( '.combat-1' ).slideDown();
  $( '.first.combat-continue-button' ).hide().delay( 2000 ).slideDown( 500 );
}

function showSecondCombatText () {
  $( '.combat.section' ).hide().delay( 5000 ).show();
  $( '.combat-1.textbox-container' ).hide();
  $( '.combat-2' ).slideDown();
  $( '.second.combat-continue-button' ).hide().delay( 2000 ).slideDown( 500 );
}

function getCombatStage() {
  $( '.second.combat-continue-button' ).hide();
  $( '#stage' ).show();
}

// Start Quest Event bindings
$(function() {
    $( '.start-quest-button' ).click(function() {
        hideSelectionPanels ();
        showFirstCombatText();
    });
});

$( '.first.combat-continue-button ' ).on( 'click', showSecondCombatText );
$( '.second.combat-continue-button ' ).on( 'click', getCombatStage );


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Combat functions

$( '#stage' ).click(function() {
  $( this ).hide();
  $( '#hero-character' ).animate({left:'5%'}, 500 );

});

// toggle alternating combat cards between attacks

$( '#hero-character' ).click(function() {
  $( this ).animate({
    left: '-150%',
  }, 500 );
  $( '#randomized-character' ).animate({
    left: '5%',
  }, 500 );

});

$( '#randomized-character' ).click(function() {
  $( this ).animate({
    left: '150%',
  }, 500 );
  $( '#hero-character' ).animate({
    left: '5%',
  }, 500 );

});


// Clicking initiates the Quest and will 'load' the randomized enemy and 'load' the user selected hero for ensuing combat

$( '.stage.combat-card' ).click(function() {

  getRandomVillainCharacter();
  addHeroCharacterWithTemplates();
  addRandomVillainCharacterWithTemplates();

});



}); // End of $(document).ready function

