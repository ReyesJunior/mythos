function Attack ( attackName, baseDmg, attackCounter ) {
  this.attackName = attackName;
  this.baseDmg = baseDmg;
  this.attackCounter = attackCounter ;
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
    background_image: 'url'
  },
  {
    name: 'Archer',
    attacks: [
    	new Attack('Poison Dart', 5, 15),
    	new Attack('Armor Pierce', 10, 10),
    	new Attack('Hell-fire Arrow\'s', 15, 5),
    	new Attack('Archer\'s Wrath', 25, 1)
    ],
    background_image: 'url'
  },
  {
    name: 'Witch Doctor',
    attacks: [
    	new Attack('Voodoo Spell', 5, 15),
    	new Attack('Hailstorm', 15, 10),
    	new Attack('Inferno Blast', 15, 10),
    	new Attack('Conjourer\'s Rage', 25, 1)
    ],
    background_image: 'url'
  },
  {
    name: 'Templar',
    attacks: [
    	new Attack('Furious Charge', 10, 5),
    	new Attack('Haunting', 5, 10),
    	new Attack('Desecrate', 5, 10),
    	new Attack('Templar\'s Vengance', 15, 1)
    ],
    background_image: 'url'
  },
  {
    name: 'Trapper',
    attacks: [
    	new Attack('Spike Trap', 10, 5),
    	new Attack('Blinding Light', 5, 10),
    	new Attack('Spear Hook', 5, 10),
    	new Attack('Trapper\'s Smite', 15, 1)
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