function Attack ( attackName, baseDmg, attackCounter ) {
  this.attackName = attackName;
  this.baseDmg = baseDmg;
  this.attackCounter = attackCounter ;
}

// subtract attackCounter during fightLoop function

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Hero character Data

var heroes = [
  {
    name: 'Knight',
    attacks: [
    	new Attack('Attack_1', 10, 5),
    	new Attack('Attack_2', 5, 10),
    	new Attack('Attack_3', 5, 10),
    	new Attack('Attack_4', 15, 1)
    ],
    background_image: 'url'
  },
  {
    name: 'Archer',
    attacks: [
    	new Attack('Attack_1', 10, 5),
    	new Attack('Attack_2', 5, 10),
    	new Attack('Attack_3', 5, 10),
    	new Attack('Attack_4', 15, 1)
    ],
    background_image: 'url'
  },
  {
    name: 'Witch Doctor',
    attacks: [
    	new Attack('Attack_1', 10, 5),
    	new Attack('Attack_2', 5, 10),
    	new Attack('Attack_3', 5, 10),
    	new Attack('Attack_4', 15, 1)
    ],
    background_image: 'url'
  },
  {
    name: 'Templar',
    attacks: [
    	new Attack('Attack_1', 10, 5),
    	new Attack('Attack_2', 5, 10),
    	new Attack('Attack_3', 5, 10),
    	new Attack('Attack_4', 15, 1)
    ],
    background_image: 'url'
  },
  {
    name: 'Trapper',
    attacks: [
    	new Attack('Attack_1', 10, 5),
    	new Attack('Attack_2', 5, 10),
    	new Attack('Attack_3', 5, 10),
    	new Attack('Attack_4', 15, 1)
    ],
    background_image: 'url'
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
    background_image: 'url'
  },
  {
    name: 'Dragon',
    attacks: [
    	new Attack('Attack_1', 10, 5),
    	new Attack('Attack_2', 5, 10),
    	new Attack('Attack_3', 5, 10),
    	new Attack('Attack_4', 15, 1)
    ],
    background_image: 'url',
  },
  {
    name: 'Cerberus',
    attacks: [
    	new Attack('Attack_1', 10, 5),
    	new Attack('Attack_2', 5, 10),
    	new Attack('Attack_3', 5, 10),
    	new Attack('Attack_4', 15, 1)
    ],
    background_image: 'url'
  },
  {
    name: 'Hydra',
    attacks: [
    	new Attack('Attack_1', 10, 5),
    	new Attack('Attack_2', 5, 10),
    	new Attack('Attack_3', 5, 10),
    	new Attack('Attack_4', 15, 1)
    ],
    background_image: 'url'
  },
  {
    name: 'Minotaur',
    attacks: [
    	new Attack('Attack_1', 10, 5),
    	new Attack('Attack_2', 5, 10),
    	new Attack('Attack_3', 5, 10),
    	new Attack('Attack_4', 15, 1)
    ],
    background_image: 'url'
  }
];

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Level Data

var levels = [

	{
		location: 'Cave'
	},
	{
		location: 'Forrest'
	},
	{
		location: 'City'
	},
	{
		location: 'Mountain'
	},
	{
		location: 'Runes'
	},
	{
		location: 'Desert'
	}
];