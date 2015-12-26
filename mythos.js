
$(document).ready(function () { // When Document Loads

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Menu Functions

function toggleMenuDropdown () {
  $( '.mobile-menu' ).animate( { height : 'toggle' }, 250, function () {});
}

function slideDropdownMenuUp () {
  $( '.mobile-menu' ).slideUp();
}

// Menu Event bindings
$( '.mobile-menu-button' ).on( 'click', toggleMenuDropdown );
$( '.mobile-menu-item' ).on( 'click', toggleMenuDropdown );
$( 'a' ).on( ' click', slideDropdownMenuUp );


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Select Hero functions

var heroHealth = 5;
var selectedHero;
var selectedHeroIndex;


function showHeroPanel () {
  $( '.first.section' ).hide();
  $( '.character-selection.section' ).slideDown();
}

function showHeroes () {
  $( '.show-heroes-button' ).hide();
  $( '.character-select.textbox-container' ).show();
  $( '.character-selection-panel' ).slideDown();
}

function selectHero ( e ) {
  var $currentElement = $( e.target ); // refers to the current element selected
  var characterIndex = $currentElement.attr( 'data-character' );
  var character = heroes[characterIndex];

  $( '.character-select.textbox-container' ).hide();
  $( '.show-heroes-button' ).show();
  $( '.character-selection-panel' ).slideUp();
  $( '.level-selection.section' ).slideDown();
}

function getSelectedHero () {
  var $currentElement = $(this); // refers to the current element selected
  $currentElement.addClass( 'active' );
  
  if ( $( '.knight' ).hasClass( 'active' ) ) {
      selectedHero = 'Knight';
      selectedHeroIndex = heroes[0];
      console.log( 'You have selected the ' + selectedHero );
    } 
    else if ( $( '.archer' ).hasClass( 'active' ) ) {
      selectedHero = 'Archer';
      selectedHeroIndex = heroes[1];
      console.log( 'You have selected the ' + selectedHero );
    } 
    else if ( $( '.doctor' ).hasClass('active') ) {
      selectedHero = 'Witch Doctor';
      selectedHeroIndex = heroes[2];
      console.log( 'You have selected the ' + selectedHero );
    } 
    else if ( $( '.templar' ).hasClass( 'active' ) ) {
      selectedHero = 'Templar';
      selectedHeroIndex = heroes[3];
      console.log( 'You have selected the ' + selectedHero );
    }
    else if ( $( '.trapper' ).hasClass( 'active' ) ) {
      selectedHero = 'Trapper';
      selectedHeroIndex = heroes[4];
      console.log( 'You have selected the ' + selectedHero );
    }

    return selectedHeroIndex;
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
$( '.play-button' ).on( 'click', showHeroPanel );
$( '.show-heroes-button' ).on( 'click', showHeroes );
$( document ).on( 'click', '.hero.character-card', selectHero );
$( document ).on( 'click', '.hero.character-card', getSelectedHero );
$( document ).on( 'click', '.hero.character-card', addSelectedHeroToTextPrompts );

displayHeroes();

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Select level functions

function showLevels () {
  $( '.show-levels-button' ).hide();
  $( '.level-select.textbox-container' ).show();
  $( '.level-selection-panel' ).slideDown();
}

function selectLevel ( e ) {
  var $currentElement = $( e.target ); // refers to the current element selected
  var levelIndex = $currentElement.attr( 'data-level' );
  var level = levels[levelIndex];
  var selectedLevelBackground = $currentElement.css('background-color')

  $( '.level-select.textbox-container' ).hide();
  $( '.show-levels-button' ).show();
  $( '.level-selection-panel' ).slideUp();
  $( '.pre-combat.section' ).slideDown();
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
    '<p class="hero move-2 move-name"><%= attacks[1].attackName %></p>',
    '<p class="hero counter-2 move-counter"><%= attacks[1].attackCounter %></p>',
    '</div>',
    '<div class="hero moves-button">',
    '<p class="hero move-3 move-name"><%= attacks[2].attackName %></p>',
    '<p class="hero counter-3 move-counter"><%= attacks[2].attackCounter %></p>',
    '</div>',
    '<div class="hero moves-button">',
    '<p class="hero move-4 move-name"><%= attacks[3].attackName %></p>',
    '<p class="hero counter-4 move-counter"><%= attacks[3].attackCounter %></p>',
    '</div>',
    '</div>',
    '</div>',
    ].join( '' );

  var hero = selectedHeroIndex;
  var compiledTemplate = _.template( heroTemplate );
  var compiledHTML = compiledTemplate( hero );
  console.log( compiledHTML );
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
    console.log( 'A ' + villains[0].name + ' approaches' )
    villainName = 'Medusa';
    villainIndex = villains[0];
    } 
  else if ( randomizedVillain === villains[1] ) {
    console.log('A ' +  villains[1].name + ' approaches' )
    villainName = 'Dragon';
    villainIndex = villains[1];
    } 
  else if ( randomizedVillain === villains[2] ) {
    console.log( 'A ' + villains[2].name + ' approaches' )
    villainName = 'Cerberus';
    villainIndex = villains[2];
    } 
  else if ( randomizedVillain === villains[3] ) {
    console.log( 'A ' + villains[3].name + ' approaches' )
    villainName = 'Hydra';
    villainIndex = villains[3];
    }
  else if ( randomizedVillain === villains[4] ) {
    console.log( 'A ' + villains[4].name + ' approaches' )
    villainName = 'Minotaur';
    villainIndex = villains[4];
    }

  return villainIndex;
}

function getRandomVillainLevel () {
  // Returns a random integer between min and max [min = 10, max = 25]
  return Math.floor(Math.random() + 1 * 5) * 10;
}

function getRandomVillainHealth () {
  villainHealth = Math.floor(Math.random() * getRandomVillainLevel() + 100);
  return villainHealth;
}

function villainAppears () {
  var villainLevel = getRandomVillainLevel();
  var villainHealth = getRandomVillainHealth();

  alert( 'A Wild ' + villainIndex.name + ' appears!' );
  alert( villainIndex.name + ' Stats : ' + 'Level : ' + villainLevel + ' ' + ' Health : ' + villainHealth);
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
   '<p class="villain move-2 move-name"><%= attacks[1].attackName %></p>',
    '<p class="villain counter-2 move-counter"><%= attacks[1].attackCounter %></p>',
    '</div>',
    '<div class="villain moves-button">',
    '<p class="villain move-3 move-name"><%= attacks[2].attackName %></p>',
    '<p class="villain counter-3 move-counter"><%= attacks[2].attackCounter %></p>',
    '</div>',
    '<div class="villain moves-button">',
    '<p class="villain move-4 move-name"><%= attacks[3].attackName %></p>',
    '<p class="villain counter-4 move-counter"><%= attacks[3].attackCounter %></p>',
    '</div>',
    '</div>',
    '</div>',
    ].join( '' );

  var villain = villainIndex;
  var compiledTemplate = _.template( villainTemplate );
  var compiledHTML = compiledTemplate( villain );
  console.log( compiledHTML );
  $RandomizedVillainCharacterContainer.html( compiledHTML );
}

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
  $( '.combat.textbox-container' ).slideDown();
  $( '.first.combat.textbox-prompt' ).slideDown();
  $( '.first.combat-continue-button' ).slideDown();
}

function showSecondCombatText () {
  $( '.first.combat.textbox-prompt' ).slideUp();
  $( '.first.combat-continue-button' ).slideUp();
  $( '.second.combat.textbox-prompt' ).slideDown();
  $( '.second.combat-continue-button' ).slideDown();
}

function getCombatStage() {
  $( '.second.combat-continue-button' ).hide();
  $( '#stage' ).show();
}

// Start Quest Event bindings
$( '.first.combat-continue-button ' ).on( 'click', showSecondCombatText );
$( '.second.combat-continue-button ' ).on( 'click', function () {
    villainAppears();
    getCombatStage();
});
$( '.start-quest-button' ).on('click', function() {
    hideSelectionPanels();
    showFirstCombatText();
    getRandomVillainCharacter();
});

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Combat-Stage functions
var damage;

function startFight () {
  $( '#stage' ).hide();
  $( '#hero-character' ).animate( { left :'5%' }, 500 );
  playerTurn = true;

  addHeroCharacterWithTemplates();
  addRandomVillainCharacterWithTemplates();
  attackLoop();
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
  var attack1 = $('.hero.move-1.move-name' ).html();
  var attack2 = $('.hero.move-2.move-name' ).html();
  var attack3 = $('.hero.move-3.move-name' ).html();
  var attack4 = $('.hero.move-4.move-name' ).html();

  alert( 'Your ' + selectedHero + ' has 4 moves: ' + attack1 + ', ' + attack2 + ', ' + attack3 + ' and ' + attack4 + ', Select the move you want to use!');
}

function heroAttacks ( e ) {
  var $currentElement = $( e.target ); // refers to the current element selected
  var attack1 = selectedHeroIndex.attacks[0].attackName;
  var attack2 = selectedHeroIndex.attacks[1].attackName;
  var attack3 = selectedHeroIndex.attacks[2].attackName;
  var attack4 = selectedHeroIndex.attacks[3].attackName;


  if ( $currentElement.hasClass( 'move-1') ) {
    alert( 'Your ' + selectedHeroIndex.name + ' uses ' + attack1 + ' dealing ' + selectedHeroIndex.attacks[0].baseDmg + ' damage!');
    damage = selectedHeroIndex.attacks[0].baseDmg;
    } 
  else if ( $currentElement.hasClass( 'move-2') ) {
    alert( 'Your ' + selectedHeroIndex.name + ' uses ' + attack2 + ' dealing ' + selectedHeroIndex.attacks[1].baseDmg + ' damage!');
    damage = selectedHeroIndex.attacks[1].baseDmg;
    } 
  else if ( $currentElement.hasClass( 'move-3') ) {
    alert( 'Your ' + selectedHeroIndex.name + ' uses ' + attack3 + ' dealing ' + selectedHeroIndex.attacks[2].baseDmg + ' damage!');
    damage = selectedHeroIndex.attacks[2].baseDmg;
    } 
  else if ( $currentElement.hasClass( 'move-4') ) {
    alert( 'Your ' + selectedHeroIndex.name + ' uses ' + attack4 + ' dealing ' + selectedHeroIndex.attacks[3].baseDmg + ' damage!');
    damage = selectedHeroIndex.attacks[3].baseDmg;
    }
  else {
    alert( 'Please Select an Attack' )
    heroAttacks();
    }

  callHeroAttackDamage();
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
    alert( 'Your ' + selectedHeroIndex.name + ' has ' + heroHealth + ' health remaining!');
    playerTurn = true;
    switchToHeroCard();
    }
  else {
    alert( selectedHeroIndex.name + " has been defeated!");
    }

    heroDefeated();
}

function switchToVillainCard () {
  $( '#hero-character').animate( { left : '-150%' }, 500 );
  $( '#randomized-character').animate( { left : '5%' }, 500 );
}

function switchToHeroCard () {
  $( '#randomized-character').animate( { left : '150%' }, 500 );
  $( '#hero-character').animate( { left : '5%' }, 500 );
}

function villainDefeated () {

  if ( villainHealth < 1) {
    alert( villainIndex.name + " has been defeated!");
    prompt( ' You WIN! want to play again?');
  }
  else {
    attackLoop();
  }
}

function heroDefeated () {

  if ( heroHealth < 1) {
    alert( 'Your ' + selectedHeroIndex.name + " has been defeated!");
    prompt( 'You LOST! want to play again?');
  }
  else {
    attackLoop();
  }
}

// Combat Stage Event Bindings 
$( '#stage' ).on( 'click', startFight );
$( document ).on( 'click', '.hero.move-name', heroAttacks );
$( document ).on( 'click', '.villain.combat-card', villainAttacks );

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
}); // End of $(document).ready function

