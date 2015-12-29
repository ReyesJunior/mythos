function Attack ( attackName, baseDmg, attackCounter ) {
  this.attackName = attackName;
  this.baseDmg = baseDmg;
  this.attackCounter = attackCounter ;
}

function HeroImageItem ( src ) {
	this.image = new Image ();
	this.src = src;
}

function VillainImageItem ( src ) {
	this.image = new Image ();
	this.src = src;
}

function LevelImageItem ( src ) {
	this.image = new Image ();
	this.src = src;
}

// subtract attackCounter during AttackLoop function

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Hero character Data

var heroes = [
  {
    name: 'Knight',
    attacks: [
    	new Attack('Stab', 5, 15),
    	new Attack('Valor Hack', 10, 5),
    	new Attack('Death Stroke', 10, 5),
    	new Attack('Knight\'s Frenzy', 35, 1)
    ],
    background_image: [
    	new HeroImageItem('http://i.imgur.com/TNAFgZI.jpg?1')
    ]
  },
  {
    name: 'Archer',
    attacks: [
    	new Attack('Poison Dart', 5, 15),
    	new Attack('Armor Pierce', 10, 10),
    	new Attack('Hell-fire Arrow\'s', 15, 5),
    	new Attack('Archer\'s Wrath', 25, 1)
    ],
    background_image: [
    	new HeroImageItem('http://i.imgur.com/vwr5yTO.jpg?1')
    ]
  },
  {
    name: 'Witch Doctor',
    attacks: [
    	new Attack('Voodoo Spell', 5, 15),
    	new Attack('Hailstorm', 15, 10),
    	new Attack('Inferno Blast', 15, 10),
    	new Attack('Conjourer\'s Rage', 25, 1)
    ],
    background_image: [
    	new HeroImageItem('http://i.imgur.com/gEuMU55.jpg?1')
    ]
  },
  {
    name: 'Templar',
    attacks: [
    	new Attack('Furious Charge', 10, 5),
    	new Attack('Haunting', 5, 10),
    	new Attack('Desecrate', 5, 10),
    	new Attack('Templar\'s Vengance', 15, 1)
    ],
    background_image: [
    	new HeroImageItem('http://i.imgur.com/QSPb1DL.png?1')
    ]
  },
  {
    name: 'Trapper',
    attacks: [
    	new Attack('Spike Trap', 10, 5),
    	new Attack('Blinding Light', 5, 10),
    	new Attack('Spear Hook', 5, 10),
    	new Attack('Trapper\'s Smite', 15, 1)
    ],
    background_image: [
    	new HeroImageItem('http://i.imgur.com/79qnZfO.jpg?1')
    ]
  },
  {
    name: 'Savage',
    attacks: [
    	new Attack('Spike Trap', 10, 5),
    	new Attack('Blinding Light', 5, 10),
    	new Attack('Spear Hook', 5, 10),
    	new Attack('Trapper\'s Smite', 15, 1)
    ],
    background_image: [
    	new HeroImageItem('http://i.imgur.com/msf53dF.jpg?1')
    ]
  }
];

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Boss character Data

var villains = [
  {
    name: 'Medusa',
    attacks: [
    	new Attack('Attack_1', 10, 5),
    	new Attack('Attack_2', 5, 10),
    	new Attack('Attack_3', 5, 10),
    	new Attack('Attack_4', 15, 1)
    ],
    background_image: [
    	new VillainImageItem('http://i.imgur.com/fTZOsnc.jpg?1')
    ],
    villain_description: 'Medusa has venomous snakes for hair. She inspires fear and disgust to the mind\'s of onlookers. Her gaze turns her enemy\'s into stone.'
  },
  {
    name: 'Dragon',
    attacks: [
    	new Attack('Attack_1', 10, 5),
    	new Attack('Attack_2', 5, 10),
    	new Attack('Attack_3', 5, 10),
    	new Attack('Attack_4', 15, 1)
    ],
    background_image: [
    	new VillainImageItem('http://i.imgur.com/dwG7U26.jpg?1')
    ],
    villain_description: 'The Dragon\'s scales are as strong as plates of armor. It breathes fire and uses it\'s razor sharp claws and teeth to rip into prey.' 
  },
  {
    name: 'Cerberus',
    attacks: [
    	new Attack('Attack_1', 10, 5),
    	new Attack('Attack_2', 5, 10),
    	new Attack('Attack_3', 5, 10),
    	new Attack('Attack_4', 15, 1)
    ],
    background_image: [
    	new VillainImageItem('http://i.imgur.com/6Xcn6Xx.jpg?1')
    ],
    villain_description: 'A gigantic, three-headed hound that guards the gates of Haides. It uses it\'s three heads to simultaneously attack multiple enemies.'
  },
  {
    name: 'Hydra',
    attacks: [
    	new Attack('Attack_1', 10, 5),
    	new Attack('Attack_2', 5, 10),
    	new Attack('Attack_3', 5, 10),
    	new Attack('Attack_4', 15, 1)
    ],
    background_image: [
    	new VillainImageItem('http://i.imgur.com/HFYfyUh.jpg?1')
    ],
    villain_description: 'A gigantic monster with nine serpent-like heads, with the center head is immortal. When one is cut-off, two more grow in it\s place.'
  },
  {
    name: 'Minotaur',
    attacks: [
    	new Attack('Attack_1', 10, 5),
    	new Attack('Attack_2', 5, 10),
    	new Attack('Attack_3', 5, 10),
    	new Attack('Attack_4', 15, 1)
    ],
    background_image: [
    	new VillainImageItem('http://i.imgur.com/zoscc5a.jpg?1')
    ],
    villain_description: 'The Minotaur has the body of a man and the head of a bull. Brandishing an axe, it escaped it\'s labyrinth prison to seek retribution.'
  }
];

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Level Data

var levels = [

	{
		location: 'Cave',
		background_image: [
    	new LevelImageItem('http://www.xcrforum.com/forum/attachments/6426d1378946504-garden-edam-deer_cave_mulu_national_park_borneo_malaysia.jpg')
    ]
	},
	{
		location: 'Forest',
		background_image: [
    	new LevelImageItem('http://www.timberupdate.com/wp-content/uploads/2015/04/pine_forest.jpg')
    ]
	},
	{
		location: 'City',
		background_image: [
    	new LevelImageItem('http://extrawall.net/images/wallpapers/171_1920x1080_medieval_town.jpg')
    ]
	},
	{
		location: 'Mountain',
		background_image: [
    	new LevelImageItem('http://images.summitpost.org/original/815426.jpg')
    ]
	},
	{
		location: 'Ruins',
		background_image: [
    	new LevelImageItem('http://www.eggplante.com/wp-content/uploads/2014/10/The-Maze-Runner-Footage-7.jpg')
    ]
	},
	{
		location: 'Desert',
		background_image: [
    	new LevelImageItem('http://images2.alphacoders.com/267/267032.jpg')
    ]
	}
];

