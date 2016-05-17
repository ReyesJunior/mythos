
$(document).ready(function () { // When Document Loads

function pageReload() {
  window.location.reload();
}

$( '.restart.button' ).on( 'click', pageReload )


// Activate 'red-transforms' class + reveal play-button

$('#game-title').fadeIn(500, function() {
  $("#game-title").addClass("red-transformation");

});

$('.main-title-play-button').hide().delay(500).fadeIn(500, function() {
  $('#game-title').addClass('fire-animation');
  $('.main-title-play-button').addClass('red-pulse');
});



var storyCarouselActiveClassIndex = $( '.main-story-carousel.carousel-inner.item.active' ).index();

function hideLeftCarouselControlForStoryCarousel() {

  var totalSlides = $('.story-slide').length;
  var lastSlide = totalSlides - 1;


  storyCarouselActiveClassIndex ++;

      if ( storyCarouselActiveClassIndex == (lastSlide - 1) ) {
        $('.main-story-carousel.right.carousel-control').hide();
      } else {
        $('.main-story-carousel.right.carousel-control').show();
      }
  }

$('.main-story-carousel.right.carousel-control').on('click', hideLeftCarouselControlForStoryCarousel );




var combatCarouselActiveClassIndex = $( '.combat-story-carousel.carousel-inner.item.active' ).index();

function hideLeftCarouselControlForCombatCarousel() {

  var totalSlides = $('.combat-slide').length;
  var lastSlide = totalSlides - 1;


  combatCarouselActiveClassIndex ++;

      if ( combatCarouselActiveClassIndex == (lastSlide - 1) ) {
        $('.combat-story-carousel.right.carousel-control').hide();
      } else {
        $('.combat-story-carousel.right.carousel-control').show();
      }
  }

$('.combat-story-carousel.right.carousel-control').on('click', hideLeftCarouselControlForCombatCarousel );


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Start Game
function startGame() {
  $('.main-story-carousel').slideUp().delay(500, function() {
    $('.hero-selection').delay(250).slideDown();
  });
}

$('.start-game').on( 'click', startGame );


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Select Hero functions

// hero stats
var heroHealth = 115;
var selectedHero;
var selectedHeroIndex;

//close hero-selection accordion 
function transitionFromHeroSelectionToLevelSelection () {
  $( '#collapseOne' ).removeClass( 'in' );
  $('.hero-selection-well').slideUp();
  $( '.level-selection' ).slideDown();
}

function showHeroes () {
  $( '.character-select.textbox-container' ).show();
  $( '.hero-selection-panel' ).slideDown();
}

function selectHero ( e ) {
  var $currentElement = $( e.target ); // refers to the current element selected
  var characterIndex = $currentElement.attr( 'data-character' );
  var character = heroes[characterIndex];

  $( '.character-select.textbox-container' ).hide();
  $( '.show-heroes.button' ).show();
  $( '.character-selection-panel' ).slideUp();
  $( '.level-selection.section' ).slideDown();
}

function getSelectedHero () {
  var $currentElement = $(this); // refers to the current element selected
  var $allElements = $( '.hero.character-card');

  $allElements.removeClass( 'active' );
  $currentElement.addClass( 'active' );
  
  if ( $( '.knight' ).hasClass( 'active' ) ) {
      selectedHero = 'Knight';
      selectedHeroIndex = heroes[0];
  }

  else if ( $( '.archer' ).hasClass( 'active' ) ) {
      selectedHero = 'Archer';
      selectedHeroIndex = heroes[1];
  }

  else if ( $( '.doctor' ).hasClass( 'active' ) ) {
      selectedHero = 'Witch Doctor';
      selectedHeroIndex = heroes[2];
  } 

  else if ( $( '.templar' ).hasClass( 'active' ) ) {
      selectedHero = 'Templar';
      selectedHeroIndex = heroes[3];
  }

  else if ( $( '.trapper' ).hasClass( 'active' ) ) {
      selectedHero = 'Trapper';
      selectedHeroIndex = heroes[4];
  }

  else if ( $( '.savage' ).hasClass( 'active' ) ) {
      selectedHero = 'Savage';
      selectedHeroIndex = heroes[5];
  }
}

function displayHeroes () {
  var heroDisplayTemplate = [
    '<% for (var i = 0; i < heroes.length; i++) { %>',
      '<div class="col-xs-12 col-sm-6 col-md-4">',
        '<div data-character="<%= i %>" class="hero <%= heroes[ i ].name.toLowerCase() %> character-card">',
          '<div class="display-character-name"> <%= heroes[ i ].name %></div>',
        '</div>',
      '</div>',
    '<% } %>'
  ].join('');

  var compiledTemplate = _.template( heroDisplayTemplate );
  var compiledHTML = compiledTemplate( heroes );
  $( '.js-character-selection' ).html( compiledHTML );
}

function addSelectedHeroToTextPrompts ( e ) {
  var $currentElement = $( e.target ); // refers to the current element selected
  var characterIndex = $currentElement.attr( 'data-character' );
  var characterName = heroes[characterIndex].name ;
  
  $( '.selected-hero').html( characterName );
}

// Heroes Event bindings
$( '.show-heroes' ).on( 'click', function () {
    showHeroes();
}); 

$( document ).on( 'click', '.hero.character-card', selectHero );
$( document ).on( 'click', '.hero.character-card', getSelectedHero );
$( document ).on( 'click', '.hero.character-card', addSelectedHeroToTextPrompts );
$( document ).on( 'click', '.hero.character-card', transitionFromHeroSelectionToLevelSelection );

displayHeroes();

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Select level functions

function transitionFromLevelSelectionToStartQuest () {
  $('#collapseTwo').removeClass( 'in' );
  $('.level-selection-well').slideUp();
  $('.start-quest').slideDown();
}

function showLevels () {
  $( '.show-levels.button' ).hide();
  $( '.level-select.textbox-container' ).show();
  $( '.level-selection-panel' ).slideDown();
}

function selectLevel ( e ) {
  var $currentElement = $( e.target ); // refers to the current element selected
  var levelIndex = $currentElement.attr( 'data-level' );
  var level = levels[levelIndex];
  var selectedLevelBackground = level.background_image[0].src;

  $( '.selected-level-stage' ).css( 'background-image', 'url(' + selectedLevelBackground + ')' );
}

function displayLevels () {
  var levelDisplayTemplate = [
    '<% for (var i = 0; i < levels.length; i++) { %>',
      '<div class="col-xs-12 col-sm-6 col-md-4">',
        '<div data-level="<%= i %>" class="level <%= levels[ i ].location.toLowerCase() %> level-card">',
        '<div class="display-level-name"> <%= levels[ i ].location %></div>',
        '</div>',
      '</div>',
    '<% } %>'
  ].join('');

  var compiledTemplate = _.template( levelDisplayTemplate );
  var compiledHTML = compiledTemplate( levels );
  $( '.js-level-selection' ).html( compiledHTML );
}

function addSelectedLevelToTextPrompts ( e ) {
  var $currentElement = $( e.target ); // refers to the current element selected
  var levelIndex = $currentElement.attr( 'data-level' );
  var levelName = levels[levelIndex].location ;

  $( '.selected-level' ).html( levelName );
}

// Level Event bindings
$( '.show-levels' ).on( 'click', function () {
    showLevels();
}); 

$( document ).on( 'click', '.level.level-card', selectLevel );
$( document ).on ('click', '.level.level-card', addSelectedLevelToTextPrompts );
$( document ).on( 'click', '.level.level-card', transitionFromLevelSelectionToStartQuest );

displayLevels();

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Hero Templates

var $SelectedHeroCharacterContainer = $( '.hero.combat-card' );

// Use underscore with inlined template
function addHeroCharacterWithTemplates () {
  var heroTemplate = [
    '<div class="hero top-character-content">',
      '<div class="hero character-name"><%= name %></div>',
      '<img src="<%= background_image[0].src %>"/>',
    '</div>',
    '<div class="hero character-content-panel">',
      '<div class="hero moves-button">',
        '<p class="hero move-1 move-name"><%= attacks[0].attackName %></p>',
        '<p class="hero damage-1 move-damage"><%= attacks[0].baseDmg %> Dmg</p>',
        '<p class="hero counter-1 move-counter"><%= attacks[0].attackCounter %> PP</p>',
      '</div>',
      '<div class="hero moves-button">',
        '<p class="hero move-2 move-name"><%= attacks[1].attackName %></p>',
        '<p class="hero damage-2 move-damage"><%= attacks[1].baseDmg %> Dmg</p>',
        '<p class="hero counter-2 move-counter"><%= attacks[1].attackCounter %> PP</p>',
      '</div>',
      '<div class="hero moves-button">',
        '<p class="hero move-3 move-name"><%= attacks[2].attackName %></p>',
        '<p class="hero damage-3 move-damage"><%= attacks[2].baseDmg %> Dmg</p>',
        '<p class="hero counter-3 move-counter"><%= attacks[2].attackCounter %> PP</p>',
      '</div>',
      '<div class="hero moves-button">',
        '<p class="hero move-4 move-name"><%= attacks[3].attackName %></p>',
        '<p class="hero damage-4 move-damage"><%= attacks[3].baseDmg %> Dmg</p>',
        '<p class="hero counter-4 move-counter"><%= attacks[3].attackCounter %> PP</p>',
      '</div>',
    '</div>',

    ].join( '' );

  var hero = selectedHeroIndex;
  var compiledTemplate = _.template( heroTemplate );
  var compiledHTML = compiledTemplate( hero );
  $SelectedHeroCharacterContainer.html( compiledHTML );
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Villain Functions

var villainName;
var villainIndex;
var villainHealth;
var $RandomizedVillainCharacterContainer = $( '.villain.combat-card' );

function getRandomVillainCharacter () {
  var randomizedVillain = villains[Math.floor(Math.random() * villains.length)];

  if ( randomizedVillain === villains[0] ) {
    villainName = 'Medusa';
    villainIndex = villains[0];
  } 

  else if ( randomizedVillain === villains[1] ) {
    villainName = 'Dragon';
    villainIndex = villains[1];
  } 

  else if ( randomizedVillain === villains[2] ) {
    villainName = 'Cerberus';
    villainIndex = villains[2];
  } 

  else if ( randomizedVillain === villains[3] ) {
    villainName = 'Hydra';
    villainIndex = villains[3];
  }

  else if ( randomizedVillain === villains[4] ) {
    villainName = 'Minotaur';
    villainIndex = villains[4];
  }

  addRandomizedVillainToTextPrompts();
}

function addRandomizedVillainToTextPrompts () {  
  $( '.randomized-villain' ).html( villainName );
}

function getRandomVillainLevel () {
  // Returns a random integer between min and max [min = 10, max = 25]
  return Math.floor(Math.random() + 1 * 5 ) * 10;
}

function getRandomVillainHealth () {
  villainHealth = Math.floor(Math.random() * getRandomVillainLevel() + 100 );
  return villainHealth;
}

function villainAppears () {
  var villainLevel = getRandomVillainLevel();
  var villainHealth = getRandomVillainHealth();

  alert( 'The Wild ' + villainIndex.name + ' attacks!' );
  alert( villainIndex.name + ' Stats : ' + 'Level : ' + villainLevel + ' ' + ' Health : ' + villainHealth);
}

// Use underscore with inlined template
function addRandomVillainCharacterWithTemplates () {
  var villainTemplate = [
    '<div class="villain top-character-content">',
      '<div class="villain character-name"><%= name %></div>',
      '<img src="<%= background_image[0].src %>"/>',
    '</div>',
    '<div class="villain character-content-panel">',
      '<div class="villain character-description"><%= villain_description %></div>',
      '<div class="villain tap-card-prompt"> [ Tap combat-card ]</div>',
    '</div>',

    ].join( '' );

  var villain = villainIndex;
  var compiledTemplate = _.template( villainTemplate );
  var compiledHTML = compiledTemplate( villain );
  $RandomizedVillainCharacterContainer.html( compiledHTML );
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Start-quest functions

function hideAllNonCombatRows () {
  $( '.hero-selection.row' ).slideUp();
  $( '.level-selection.row' ).slideUp();
  $( '.start-quest.row' ).slideUp();
}

function revealCombatRowandSelectedLevelStage () {
  $( '.combat.row' ).slideDown();  
  $( '.selected-level-stage' ).delay(500).slideDown();
}

function getCombatStage() {
  $( '.combat-story-carousel.row' ).slideUp();
  $( '#stage' ).delay(100).slideDown();
  $( '.stage-relative' ).delay(100).slideDown();
}

// Start Quest Event bindings
$( '.stage-prep ' ).on( 'click', function () {
    getCombatStage();
    villainAppears();
});
$( '.start-quest' ).on( 'click', function() {
    hideAllNonCombatRows();
    revealCombatRowandSelectedLevelStage();
    getRandomVillainCharacter();
    addHeroCharacterWithTemplates();
    addRandomVillainCharacterWithTemplates();
});

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Combat-Stage functions
var damage;
var newCounter1;
var newCounter2;
var newCounter3;
var newCounter4;

function startFight () {
  $( '#stage' ).slideUp();
  $( '.start-fight' ).slideUp();
  $( '#hero-character' ).delay(250).animate( { left : '0%' }, 500 );
  playerTurn = true;

  attackLoop();
}

function displayCombatVictory () {
  $( '.post-fight-section').slideDown();
  $( '.victory.section' ).show();
  $( '#randomized-character' ).animate( { left : '200%' }, 500 );
  $( '#hero-character' ).animate( { left : '-200%' }, 500 );
}

function displayCombatDefeat () {
  $( '.post-fight-section').slideDown();
  $( '.defeat.section' ).show();
  $( '#randomized-character' ).animate( { left : '200%' }, 500 );
  $( '#hero-character' ).animate( { left : '-200%' }, 500 );
}

function attackLoop() {

  if ( playerTurn === false ) {
    switchToVillainCard();
    playerTurn = true;
  } 

  else  { // if PlayerTurn === True
    switchToHeroCard();
    selectMove();
    playerTurn = false;
  }
}

function selectMove () {
  var attack1 = $( '.hero.move-1.move-name' ).html();
  var attack2 = $( '.hero.move-2.move-name' ).html();
  var attack3 = $( '.hero.move-3.move-name' ).html();
  var attack4 = $( '.hero.move-4.move-name' ).html();

  alert( 'Your ' + selectedHero + ' has 4 moves: ' + attack1 + ', ' + attack2 + ', ' + attack3 + ' and ' + attack4 + ', Select the move you want to use!');
}

function updateHeroAttackCounter1 () {
  var $firstCounter = $( '.hero.counter-1.move-counter' );

  $firstCounter.html( newCounter1 + ' PP' );
}

function updateHeroAttackCounter2 () {
  var $secondCounter = $( '.hero.counter-2.move-counter' );

  $secondCounter.html( newCounter2 + ' PP' );
}

function updateHeroAttackCounter3 () {
  var $thirdCounter = $( '.hero.counter-3.move-counter' );

  $thirdCounter.html( newCounter3 + ' PP' );
}

function updateHeroAttackCounter4 () {
  var $fourthCounter = $( '.hero.counter-4.move-counter' );

  $fourthCounter.html( newCounter4 + ' PP' );
}

function heroAttacks ( e ) {
  var $currentElement = $( e.target ); // refers to the current element selected
  var attack1 = selectedHeroIndex.attacks[0].attackName;
  var attack2 = selectedHeroIndex.attacks[1].attackName;
  var attack3 = selectedHeroIndex.attacks[2].attackName;
  var attack4 = selectedHeroIndex.attacks[3].attackName;

  var $firstCounter = $( '.hero.counter-1.move-counter' );
  var $secondCounter = $( '.hero.counter-2.move-counter' );
  var $thirdCounter = $( '.hero.counter-3.move-counter' );
  var $fourthCounter = $( '.hero.counter-4.move-counter' );

  var $firstCounterValue = $firstCounter.html();
  var $secondCounterValue = $secondCounter.html();
  var $thirdCounterValue = $thirdCounter.html();
  var $fourthCounterValue = $fourthCounter.html();



  if ( $currentElement.hasClass( 'move-1' ) ) {

    if ( $firstCounterValue === '0 PP' ) {
      alert( 'Your Hero is unable to use ' + selectedHeroIndex.attacks[0].attackName + ' Please Select another attack.' )
    }

    else {
      alert( 'Your ' + selectedHeroIndex.name + ' uses ' + selectedHeroIndex.attacks[0].attackName + ' dealing ' + selectedHeroIndex.attacks[0].baseDmg + ' damage!');
      damage = selectedHeroIndex.attacks[0].baseDmg;
      newCounter1 = selectedHeroIndex.attacks[0].attackCounter -= 1;
      callHeroAttackDamage();
      updateHeroAttackCounter1();
    }
  } 

  else if ( $currentElement.hasClass( 'move-2' ) ) {

    if ( $secondCounterValue === '0 PP' ) {
      alert( 'Your Hero is unable to use ' + selectedHeroIndex.attacks[1].attackName + ' Please Select another attack.' )
    }

    else {
      alert( 'Your ' + selectedHeroIndex.name + ' uses ' + selectedHeroIndex.attacks[1].attackName + ' dealing ' + selectedHeroIndex.attacks[1].baseDmg + ' damage!');
      damage = selectedHeroIndex.attacks[1].baseDmg;
      newCounter2 = selectedHeroIndex.attacks[1].attackCounter -= 1;
      callHeroAttackDamage();
      updateHeroAttackCounter2();
    }
  } 
  else if ( $currentElement.hasClass( 'move-3' ) ) {

    if ( $thirdCounterValue === '0 PP' ) {
      alert( 'Your Hero is unable to use ' + selectedHeroIndex.attacks[2].attackName + ' Please Select another attack.' )
    }

    else {
      alert( 'Your ' + selectedHeroIndex.name + ' uses ' + selectedHeroIndex.attacks[2].attackName + ' dealing ' + selectedHeroIndex.attacks[2].baseDmg + ' damage!');
      damage = selectedHeroIndex.attacks[2].baseDmg;
      newCounter3 = selectedHeroIndex.attacks[2].attackCounter -= 1;
      callHeroAttackDamage();
      updateHeroAttackCounter3();
    }
  } 

  else if ( $currentElement.hasClass( 'move-4' ) ) {

    if ( $fourthCounterValue === '0 PP' ) {
        alert( 'Your Hero is unable to use ' + selectedHeroIndex.attacks[3].attackName + ' Please Select another attack.' )
        selectMove();
    }

    else {
      alert( 'Your ' + selectedHeroIndex.name + ' uses ' + selectedHeroIndex.attacks[3].attackName + ' dealing ' + selectedHeroIndex.attacks[3].baseDmg + ' damage!');
      damage = selectedHeroIndex.attacks[3].baseDmg;
      newCounter4 = selectedHeroIndex.attacks[3].attackCounter -= 1;
      callHeroAttackDamage();
      updateHeroAttackCounter4();
    }
  }
}

function callHeroAttackDamage () {

  if ( villainHealth > 0 ) {
    villainHealth = villainHealth - damage;
    alert( 'The ' + villainName + ' has ' + villainHealth + ' health remaining!');
    playerTurn = false;
  }

  else {
      alert( 'The wild ' + villainIndex.name + ' was Defeated!' );
  }

  villainDefeated();
}

function villainAttacks () {
  var randomAttackIndex = Math.floor(Math.random() * 4); // selects a value between 0-3
  var randomVillainAttack = villainIndex.attacks[randomAttackIndex].attackName;
  var attack1 = villainIndex.attacks[0].attackName;
  var attack2 = villainIndex.attacks[1].attackName;
  var attack3 = villainIndex.attacks[2].attackName;
  var attack4 = villainIndex.attacks[3].attackName;

  if ( randomVillainAttack === attack1 ) {
    alert( 'The wild ' + villainIndex.name + ' uses ' + attack1 + ' dealing ' + villainIndex.attacks[0].baseDmg + ' damage!');
    damage = villainIndex.attacks[0].baseDmg;
    } 
  else if ( randomVillainAttack === attack2 ) {
    alert( 'The wild ' + villainIndex.name + ' uses ' + attack2 + ' dealing ' + villainIndex.attacks[1].baseDmg + ' damage!');
    damage = villainIndex.attacks[1].baseDmg;
    } 
  else if ( randomVillainAttack === attack3 ) {
    alert( 'The wild ' + villainIndex.name + ' uses ' + attack3 + ' dealing ' + villainIndex.attacks[2].baseDmg + ' damage!');
    damage = villainIndex.attacks[2].baseDmg;
    } 
  else if ( randomVillainAttack === attack4 ) {
    alert( 'The wild ' + villainIndex.name + ' uses ' + attack4 + ' dealing ' + villainIndex.attacks[3].baseDmg + ' damage!');
    damage = villainIndex.attacks[3].baseDmg;
    }
  else {
    alert( 'The wild ' + villainIndex.name + ' flinched!' );
    attackLoop();
    }

    callVillainAttackDamage();
}


function callVillainAttackDamage () {

  if ( heroHealth > 0 ) {
    heroHealth = heroHealth - damage;
    alert( 'Your ' + selectedHeroIndex.name + ' has ' + heroHealth + ' health remaining!' );
    switchToHeroCard();
    playerTurn = true;
  }

  else {
    alert( selectedHeroIndex.name + ' has been defeated!' );
  }

    heroDefeated();
}

function switchToVillainCard () {
  $( '#hero-character' ).animate( { left : '-200%' }, 500 );
  $( '#randomized-character' ).animate( { left : '0%' }, 500 );
}

function switchToHeroCard () {
  $( '#randomized-character' ).animate( { left : '200%' }, 500 );
  $( '#hero-character' ).animate( { left : '0%' }, 500 );
}

function villainDefeated () {

  if ( villainHealth < 1) {
    alert( villainIndex.name + ' has been defeated!' );
    displayCombatVictory();
  }

  else {
    attackLoop();
  }
}

function heroDefeated () {

  if ( heroHealth < 1) {
    alert( 'Your ' + selectedHeroIndex.name + ' has been defeated!' );
    displayCombatDefeat();
  }

  else {
    switchToHeroCard();
  }
}

// Combat Stage Event Bindings 
$( '.start-fight' ).on( 'click', startFight );
$( document ).on( 'click', '.hero.move-name', heroAttacks );
$( document ).on( 'click', '.villain.combat-card', villainAttacks );


}); // End of $(document).ready function

