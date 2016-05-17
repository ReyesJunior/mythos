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
    	new Attack('Shield Bash', 8, 10),
    	new Attack('Valor Hack', 10, 8),
    	new Attack('Death Stroke', 20, 3),
    	new Attack('Knight\'s Frenzy', 35, 1)
    ],
    background_image: [
    	new HeroImageItem('http://i.imgur.com/TNAFgZI.jpg?1')
    ]
  },
  {
    name: 'Archer',
    attacks: [
    	new Attack('Poison Arrow\'s', 8, 10),
    	new Attack('Armor Pierce', 15, 5),
    	new Attack('Hell-fire Arrow\'s', 15, 5),
    	new Attack('Archer\'s Wrath', 35, 1)
    ],
    background_image: [
    	new HeroImageItem('http://i.imgur.com/vwr5yTO.jpg?1')
    ]
  },
  {
    name: 'Witch Doctor',
    attacks: [
    	new Attack('Voodoo Spell', 10, 5),
    	new Attack('Hailstorm', 20, 3),
    	new Attack('Inferno Blast', 20, 3),
    	new Attack('Conjourer\'s Rage', 35, 1)
    ],
    background_image: [
    	new HeroImageItem('http://i.imgur.com/gEuMU55.jpg?1')
    ]
  },
  {
    name: 'Templar',
    attacks: [
    	new Attack('Charge', 10, 10),
    	new Attack('Haunting', 10, 10),
    	new Attack('Desecrate', 20, 3),
    	new Attack('Templar\'s Vengance', 35, 1)
    ],
    background_image: [
    	new HeroImageItem('http://i.imgur.com/QSPb1DL.png?1')
    ]
  },
  {
    name: 'Trapper',
    attacks: [
    	new Attack('Spike Snares', 5, 15),
    	new Attack('Blinding Light', 15, 8),
    	new Attack('Spear Hook', 15, 8),
    	new Attack('Trapper\'s Smite', 35, 1)
    ],
    background_image: [
    	new HeroImageItem('http://i.imgur.com/79qnZfO.jpg?1')
    ]
  },
  {
    name: 'Savage',
    attacks: [
    	new Attack('Barbed Dagger', 10, 10),
    	new Attack('Primal Thrash', 25, 1),
    	new Attack('Brute\'s Strike', 25, 1),
    	new Attack('Savages\'s Fury', 45, 1)
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
    	new Attack('Shriek', 8, 10),
    	new Attack('Serpent\'s Venom', 12, 10),
    	new Attack('Viper Bite', 15, 10),
    	new Attack('Gorgon\'s Glare', 20, 10)
    ],
    background_image: [
    	new VillainImageItem('http://i.imgur.com/fTZOsnc.jpg?1')
    ],
    villain_description: 'Medusa has venomous snakes for hair. She inspires fear and disgust to the mind\'s of onlookers. Her gaze turns her enemy\'s into stone.'
  },
  {
    name: 'Dragon',
    attacks: [
    	new Attack('Slash', 8, 10),
    	new Attack('Flamethrower', 12, 10),
    	new Attack('Dragon\'s Claw', 15, 10),
    	new Attack('Dragon\'s Fang', 20, 10)
    ],
    background_image: [
    	new VillainImageItem('http://i.imgur.com/dwG7U26.jpg?1')
    ],
    villain_description: 'The Dragon\'s scales are as strong as plates of armor. It breathes fire and uses it\'s razor sharp claws and teeth to rip into prey.' 
  },
  {
    name: 'Cerberus',
    attacks: [
    	new Attack('Slash', 8, 10),
    	new Attack('Howl', 12, 10),
    	new Attack('Bite', 15, 10),
    	new Attack('Maul', 20, 10)
    ],
    background_image: [
    	new VillainImageItem('http://i.imgur.com/6Xcn6Xx.jpg?1')
    ],
    villain_description: 'A gigantic, three-headed hound that guards the gates of Haides. It uses it\'s three heads to simultaneously attack multiple enemies.'
  },
  {
    name: 'Hydra',
    attacks: [
    	new Attack('Flank', 8, 5),
    	new Attack('Viper\'s Bite', 12, 10),
    	new Attack('Thrash', 15, 10),
    	new Attack('Basilisk Fang', 20, 1)
    ],
    background_image: [
    	new VillainImageItem('http://i.imgur.com/HFYfyUh.jpg?1')
    ],
    villain_description: 'A gigantic monster with nine serpent-like heads, with the center head is immortal. When one is cut-off, two more grow in it\s place.'
  },
  {
    name: 'Minotaur',
    attacks: [
    	new Attack('Horn', 10, 5),
    	new Attack('Fury Charge', 10, 10),
    	new Attack('Bull Rush', 12, 10),
    	new Attack('Axe Hack', 15, 1)
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
// 2000x1500

var levels = [

	{
		location: 'Cave',
		background_image: [
    	new LevelImageItem('http://i.imgur.com/LgKo4gQ.jpg?1')
    ]
	},
	{
		location: 'Forest',
		background_image: [
    	new LevelImageItem('http://i.imgur.com/ozWDTnP.jpg?1')
    ]
	},
	{
		location: 'City',
		background_image: [
    	new LevelImageItem('http://i.imgur.com/iEX6XJF.jpg?1')
    ]
	},
	{
		location: 'Mountain',
		background_image: [
    	new LevelImageItem('http://i.imgur.com/mfjcz4H.jpg?1')
    ]
	},
	{
		location: 'Ruins',
		background_image: [
    	new LevelImageItem('http://i.imgur.com/CEJ1e5f.jpg?1')
    ]
	},
	{
		location: 'Desert',
		background_image: [
    	new LevelImageItem('http://i.imgur.com/6j28Wch.jpg?1')
    ]
	}
];

