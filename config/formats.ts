// Note: This is the list of formats
// The rules that formats use are stored in data/rulesets.ts
/*
If you want to add custom formats, create a file in this folder named: "custom-formats.ts"

Paste the following code into the file and add your desired formats and their sections between the brackets:
--------------------------------------------------------------------------------
// Note: This is the list of formats
// The rules that formats use are stored in data/rulesets.ts

export const Formats: FormatList = [
];
--------------------------------------------------------------------------------

If you specify a section that already exists, your format will be added to the bottom of that section.
New sections will be added to the bottom of the specified column.
The column value will be ignored for repeat sections.
*/

export const Formats: FormatList = [
	///////////////////////////////////////////////////////////////
	///////////////////// Gen 9 Pet Mods //////////////////////////
	///////////////////////////////////////////////////////////////
	{
		section: "Gen 9 Pet Mods",
		column: 1,
		// name: "gen9petmods",
	},
	{
		name: "[Gen 9] Alternatium EX",
		desc: `<b>Alternatium EX</b>: A metagame made up of only Pokemon with alternate forms exist, with all of them being seperate and unique Pokemon.`,
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/alternatium-ex-slate-1-starter-pack.3701560/">Alternatium EX on Smogon Forums</a>`,
			`&bullet; <a href="https://docs.google.com/spreadsheets/d/1bvvkPg1CrUBJFJJeuwkts8elfJcEcahGOoHm-vGBXOI/edit?usp=sharing">Spreadsheet</a>`,
		],
		mod: 'alternatiumex',
		ruleset: ['Standard NatDex', 'OHKO Clause', 'Evasion Moves Clause', 'Species Clause', 'Sleep Clause Mod', 'Min Source Gen = 3', 'Terastal Clause'],
		banlist: ['All Pokemon', 'Baton Pass'],
		unbanlist: [
				'Decidueye-Hermit', 'Decidueye-Autumn', 'Typhlosion-Explosive', 'Typhlosion-Warlock', 'Samurott-Foamy', 'Samurott-Rogue',
				'Oricorio', 'Oricorio-Cheerleader','Oricorio-Pa\u2019u', 'Horrorcorio',
				'Pikachu-Kanto', 'Pikachu-Hoenn', 'Pikachu-Sinnoh', 'Pikachu-Unova', 'Pikachu-Tactic', 'Pikachu-Alola', 'Pikachu-World',
				'Ribombee', 'Ribombee-Totem', 'Araquanid', 'Araquanid-Totem', 'Vikavolt', 'Vikavolt-Totem',
				'Urshifu', 'Urshifu-Erosion', 'Calyrex-Mythic', 'Calyrex-Glacier','Calyrex-Midnight',
				'Kommo-o', 'Rockmo-o', 'Salazzle', 'Salazzle-Ruler', 'Lurantis', 'Lurantio',
				'Mr. Mime', 'Mr. Mime-Prance', 'Stunfisk', 'Stunfisk-Trap',
				'Necrozma', 'Necrozma-Lionheart', 'Necrozma-Batwing', 'Necrozma-Dragon',
				'Braviary-Patriot', 'Braviary-Hisui', 'Lilligant-Bard', 'Mistlegant', 'Electrode-Screwball','Electrode-Ringo',
				'Persian-Bandit', 'Persian-Omen', 'Meowstic-Untethered', 'Meowstic-TwoTales',
				"Indeedee-Devil", "Indeedee-Angel", "Polteageist", "Polteageist-Antique", "Toxtricity-Rock-Star", "Toxtricity-Low-Key",
				"Articuno-Mistral", "Articuno-Tsunami", "Zapdos", "Charpados", "Moltres", "Bennutres",
				"Marowak", "Alolawak", "Marowak-Alola-Totem", "Enamorus", "Violentine",
				"Dialga", "Archronos", "Palkia", "Palkia-Origin",
				"Basculin-Hot-Headed","Basculectric", "Basculin-Skyship", "Basculegion", "Basculagoon",
				"Magearna", "Magearna-Prototype", "Zarude", "Zarude-Hero",
				"Qwilfish", "Aquattack", "Zoroark-Jorogumo", "Zoroark-Hoarfrost", "Goodra-Tsunade", "Goodra-Symbiotic",
				"Maushold-Raider", "Maushold-Extended", "Oinkologne", "Oinkologne-F", "Dudunsparce", "Dududunsparce",
				"Greninja", "Greninja-Ronin", "Imperil", "Hoopa-Ifrit",
				"Kyurem", "Kyurem-Black", "Kyurem-White", "Xerneas-Dormant", "Xerneas-Justice",
				"Arcanine-Water Balloon", "Arcanine-Noble", "Avalugg-Prism", "Avalugg-Plated",
				"Squawkabilly", "Squawkabiluck", "Squawkalone", "Squawkabilly-Yellow",
				"Wishiwashi-Lonesome", "Winardin", "Palafin", "Hercuphin",
				'Gumshoos', 'Gumshoos-Totem', 'Togedemaru', 'Totemaru',
				'Tauros', 'Bravatoro', 'Tauros-Steam', 'Tauros-Azul',
				'Raichu', 'Raichu-Soft', 'Rapidash', 'Rapidash-Galar', 'Golem-Berserker', 'Golem-Alola',
				'Cherrim', 'Cherrine', 'Minior', 'Minior-Meteor', 'Eevee', 'Eevee-Starter',
		],
		onValidateTeam(team, format) {
			/**@type {{[k: string]: true}} */
			let speciesTable = {};
			for (const set of team) {
				let template = this.dex.species.get(set.species);
				if (speciesTable[template.id]) {
					return ["You are limited to one of each Pokémon by Species Clause (except for different formes). ", "You have more than one " + template.id + "."];
				}
				speciesTable[template.id] = true;
			}
		},
	},
	{
		name: "[Gen 4] Back to Sinnoh",
		desc: `Recreation of Gen 4 OU, with a lot of new Fakemons, moves, and abilities! No vanilla Gen 4 Pokemon allowed!`,
		threads: [],
		mod: 'backtosinnoh',
		ruleset: ['Standard', 'Data Mod'],
		banlist: ['Uber', 'Arena Trap', 'Sand Veil', 'Quick Claw', 'Soul Dew', 'Baton Pass'],
	},
	{
		name: "[Gen 1] Back to the Past",
		   desc: `<b>[Gen 1] Back to the Past</b>: Adapting future gen moves and Pokemon into RBY`,
		   threads: [
				`&bullet; <a href="https://www.smogon.com/forums/threads/gen-1-back-to-the-past-slate-1-moves.3757618/">Back to the Past on Smogon Forums</a>`,
		   ],
		  mod: 'gen1backtothepast',
		  ruleset: ['Standard', 'Data Mod'],
			banlist: ['Uber'],
			unbanlist: ['Seismitoad', 'Masquerain', 'Cursola', 'Skitter Smack', 'Burn Up', 'Drain Punch', 'Sappy Seed', "Focus Punch", 'Mud Shot',
						],
		},
	{
		name: "[Gen 9] Banhammers Cycle 3",
		desc: `<b>Banhammers</b>: A metagame where players are allowed to ban Pokemon, Moves, Items, and Abilities through earning points in room tournaments.`,
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/banhammers-cycle-2-week-2-second-roomtour-6-17.3711488/">Banhammers on Smogon Forums</a>`,
         `&bullet; <a href="https://docs.google.com/spreadsheets/d/1prtFrCj_mdOpFtKPpsCH6S3CsO12tEgTIWaQJOEnUcY/edit?usp=sharing">Spreadsheet</a>`,
		],
		mod: 'banhammersc3',
		ruleset: ['Standard', 'Sleep Moves Clause', 'Data Mod', '!Sleep Clause Mod'],
		banlist: [
			'Uber', 'AG', 'Arena Trap', 'Moody', 'Sand Veil', 'Shadow Tag', 'Snow Cloak', 'King\'s Rock', 'Razor Fang', 'Baton Pass',
			'Last Respects', 'Shed Tail', 'Barraskewda', 'Cinderace', 'Clodsire', 'Dragapult', 'Enamorus-Base', 'Gholdengo', 'Gliscor', 'Hatterene',
			'Iron Treads', 'Kingambit', 'Ogerpon-Wellspring', 'Pelipper', 'Rillaboom', 'Walking Wake', 'Zamazenta', 'Earth Power', 'Flip Turn',
			'Freeze-Dry', 'Ice Beam', 'Knock Off', 'Spikes', 'Taunt', 'Thunder Wave', 'Toxic', 'Volt Switch', 'Booster Energy', 'Light Clay',
			'Protosynthesis', 'Clefable', 'Corviknight', 'Darkrai', 'Dragonite', 'Maushold', 'Primarina', 'Samurott-Hisui', 'Slowking-Galar',
			'Weavile', 'Focus Blast', 'Glare', 'Sticky Web', 'Unaware', 'Quark Drive', 'Blissey', 'Ceruledge', 'Chansey', 'Garchomp', 'Garganacl',
			'Glimmora', 'Hydreigon', 'Ogerpon-Cornerstone', 'Ting-Lu', 'Close Combat', 'Dragon Dance', 'Meteor Beam', 'Roost', 'Scale Shot', 'Stealth Rock',
			'Tera Blast', 'Heavy-Duty-Boots', 'Chlorophyll', 'Swift Swim', 'Regenerator', 'Draco Meteor', 'Intimidate', 'Levitate',
			'Focus Sash', 'Leftovers', 'Life Orb', 'Belly Drum', 'Calm Mind', 'Nasty Plot', 'Azumarill', 'Blaziken', 'Deoxys-Defense', 'Greninja',
			'Heatran', 'Kleavor', 'Kommo-o', 'Meowscarada', 'Moltres-Galar', 'Ninetales-Alola', 'Pecharunt', 'Politoed', 'Sinistcha', 'Skarmory',
			'Ursaluna', 'Zapdos-Base',
		],
    },
	{
		name: "[Gen 9] Beartic Phone",
	   desc: '<b>[Gen 9] Beartic Phone</b>: A group of 5 people unknowingly work together to create a fakemon, very similar to the online game "Gartic Phone".',
		threads: [
			'&bullet; <a href="https://www.smogon.com/forums/threads/beartic-phone.3727739/">Beartic Phone</a>',
			'https://docs.google.com/spreadsheets/d/1-Hfz-p0nomMLVFa4-4nGbLKaoWSl0xFTZA5Aiapw-Ko/edit#gid=1161734506">Spreadsheet</a>',
		],
		mod: 'bearticphone',
	  ruleset: ['Standard', 'Terastal Clause', 'Data Mod'],
		banlist: [
			'Arena Trap', 'Moody', 'Shadow Tag', 'Baton Pass',
		],
		onValidateTeam(team, format) {
			/**@type {{[k: string]: true}} */
			let speciesTable = {};
			for (const set of team) {
				let template = this.dex.species.get(set.species);
				if (template.tier !== 'bear') {
					return [set.species + ' is not usable in Beartic Phone.'];
				}
			}
		},
	},
	{
		name: "[Gen 9] Blank Canvas Meta A",
		threads: [
			`<a href="https://www.smogon.com/forums/threads/3748841/">Blank Canvas</a>`,
		],
		mod: 'blankcanvas',
		ruleset: ['Standard', 'Terastal Clause', 'Data Mod', 'Sleep Moves Clause', '!Sleep Clause Mod'],
		banlist: [
			'AG', 'Uber', 'Arena Trap', 'Moody', 'Shadow Tag', 'King\'s Rock', 'Baton Pass', 'Last Respects', 'Shed Tail',
			'Actaniathan', 'Flarenheit', 'Groundead', 'Deadward', 'Obaki', 'Sylravage', 'Twinkaton', 'Fausteil', 'Geoporka',
			'Porcupyre', 'Plasmage', 'Seaode', 'Bellolysk', 'Tryonite', 'Scarachnid', 'Serpvoltidae', 'Maldractice', 'Geigeramp',
			'Bufferfly', 'Dastard', 'Sheepquake', 'Cottentration', 'Sorrowcean', 'Psyllapse', 'Haarstorm', 'Borealis', 'Bazhigangquan',
			'Leechmonner', 'Iron Crest', 'Odonata', 'Hebicikuga', 'Devestial', 'Lundicare', 'Razor Fang',
		],
		onValidateTeam(team, format) {
			/**@type {{[k: string]: true}}*/
			let speciesTable = {};
			let allowedTiers = ['BC UU'];
			for (const set of team) {
				let template = this.dex.species.get(set.species);
				if (!allowedTiers.includes(template.tier)) {
					return [set.species + ' is not legal in Blank Canvas Meta A.'];
				}
			}
		},
	},
	{
		name: "[Gen 9] Blank Canvas Meta B",
		threads: [
			`<a href="https://www.smogon.com/forums/threads/3748841/">Blank Canvas</a>`,
		],
		mod: 'blankcanvas',
		ruleset: ['Standard', 'Terastal Clause', 'Data Mod', 'Sleep Moves Clause', '!Sleep Clause Mod'],
		banlist: ['AG', 'Uber', 'Arena Trap', 'Moody', 'Shadow Tag', 'King\'s Rock', 'Baton Pass', 'Last Respects', 'Shed Tail',  'Razor Fang'],
		onValidateTeam(team, format) {
			/**@type {{[k: string]: true}}*/
			let speciesTable = {};
			let allowedTiers = ['BC OU', 'BC UU'];
			for (const set of team) {
				let template = this.dex.species.get(set.species);
				if (!allowedTiers.includes(template.tier)) {
					return [set.species + ' is not legal in Blank Canvas Meta B.'];
				}
			}
		},
	},
	{
        name: "[Gen 9] Gen 9 Blindsided",
        desc: `<b>[Gen 9] Blindsided</b>: the monkey has awoken`,
        threads: [
            `&bullet; <a href="https://docs.google.com/spreadsheets/d/1263L6g2BPzf4eQQNfqJrp2FO1UMtGdxWXcyfz9OBqkM/edit#gid=1545907772">spreadsheet</a>`,
        ],
        mod: 'g9blindsided',
        ruleset: ['Standard NatDex', 'OHKO Clause', 'Evasion Moves Clause', 'Dynamax Clause', 'Sleep Clause Mod', 'Data Mod', 'Z-Move Clause'],
        banlist: [
			'Chelperela', 'Terrapollo', 'Dualifer',
			'Shed Tail', 'Last Respects',

			  // i apologize

			'Karate Chop', 'Double Slap', 'Comet Punch', 'Razor Wind', 'Jump Kick', 'Rolling Kick', 'Twineedle', 'Sonic Boom', 'Submission', 'Dragon Rage', 'Meditate',
			'Rage', 'Barrier', 'Bide', 'Mirror Move', 'Egg Bomb', 'Bone Club', 'Clamp', 'Skull Bash', 'Spike Cannon', 'Constrict', 'Kinesis', 'Barrage', 'Lovely Kiss',
			'Bubble', 'Dizzy Punch', 'Flash', 'Psywave', 'Bonemerang', 'Hyper Fang', 'Sharpen', 'Conversion', 'Sketch', 'Triple Kick', 'Spider Web', 'Mind Reader',
			'Nightmare', 'Conversion 2', 'Aeroblast', 'Feint Attack', 'Octazooka', 'Foresight', 'Return', 'Frustration', 'Sacred Fire', 'Magnitude', 'Pursuit',
			'Vital Throw', 'Hidden Power', 'Hail', 'Smelling Salts', 'Nature Power', 'Assist', 'Magic Coat', 'Revenge', 'Refresh', 'Grudge', 'Snatch', 'Secret Power',
			'Camouflage', 'Tail Glow', 'Luster Purge', 'Mist Ball', 'Mud Sport', 'Ice Ball', 'Needle Arm', 'Aromatherapy', 'Odor Sleuth', 'Silver Wind', 'Grass Whistle',
			'Signal Beam', 'Sky Uppercut', 'Water Sport', 'Doom Desire', 'Psycho Boost', 'Miracle Eye', 'Wake-Up Slap', 'Natural Gift', 'Embargo', 'Psycho Shift',
			'Trump Card', 'Heal Block', 'Wring Out', 'Lucky Chant', 'Me First', 'Punishment', 'Mud Bomb', 'Mirror Shot', 'Rock Climb', 'Rock Wrecker', 'Magnet Bomb',
			'Captivate', 'Chatter', 'Heal Order', 'Crush Grip', 'Dark Void', 'Seed Flare', 'Ominous Wind', 'Autotomize', 'Telekinesis', 'Storm Throw', 'Flame Burst',
			'Synchronoise', 'Chip Away', 'Sky Drop', 'Bestow', 'Dual Chop', 'Heart Stamp', 'Leaf Tornado', 'Steamroller', 'Head Charge', 'Gear Grind', 'Searing Shot',
			'Techno Blast', 'Secret Sword', 'Glaciate', 'Bolt Strike', 'Blue Flare', 'Freeze Shock', 'Ice Burn', 'Fusion Flare', 'Fusion Bolt', 'Mat Block', 'Rototiller',
			'Trick-or-Treat', 'Ion Deluge', 'Forest\'s Curse', 'Topsy-Turvy', 'Crafty Shield', 'Flower Shield', 'Electrify', 'King\'s Shield', 'Venom Drench', 'Powder',
			'Geomancy', 'Power-Up Punch', 'Oblivion Wing', 'Thousand Arrows', 'Thousand Waves', 'Land\'s Wrath', 'Light of Ruin', 'Sparkling Aria', 'Floral Healing',
			'Spotlight', 'Toxic Thread', 'Laser Focus', 'Gear Up', 'Anchor Shot', 'Purify', 'Core Enforcer', 'Beak Blast', 'Clanging Scales', 'Dragon Hammer',
			'Shell Trap', 'Shadow Bone', 'Prismatic Laser', 'Spectral Thief', 'Sunsteel Strike', 'Moongeist Beam', 'Nature\'s Madness', 'Multi-Attack',
			'Mind Blown', 'Plasma Fists', 'Photon Geyser', 'Double Iron Bash', 'Max Guard', 'Octolock', 'Bolt Beak', 'Fishious Rend', 'Clangorous Soul', 'Decorate',
			'Snap Trap', 'Aura Wheel', 'Strange Steam', 'Obstruct', 'Meteor Assault', 'Eternabeam',
		],

        onValidateTeam(team, format) {
            let speciesTable = {};
            let allowedTiers = ['hi'];
            for (const set of team) {
                let template = this.dex.species.get(set.species);
                if (template.tier !== 'hi') {
                    return [set.species + ' is not legal in [Gen 9] Blindsided.'];
                }
            }
        },
     },
	{
        name: "[Gen 9] Gen 9 Blindsided Group B",
        desc: `<b>[Gen 9] Blindsided</b>: the monkey has awoken part 2`,
        threads: [
            `&bullet; <a href="https://docs.google.com/spreadsheets/d/1263L6g2BPzf4eQQNfqJrp2FO1UMtGdxWXcyfz9OBqkM/edit#gid=1545907772">spreadsheet</a>`,
        ],
        mod: 'g9blindsided',
        ruleset: ['Standard NatDex', 'OHKO Clause', 'Evasion Moves Clause', 'Dynamax Clause', 'Sleep Clause Mod', 'Data Mod', 'Z-Move Clause'],
        banlist: [
			'All Pokemon',
			'Shed Tail', 'Last Respects',

			  // i apologize

			'Karate Chop', 'Double Slap', 'Comet Punch', 'Razor Wind', 'Jump Kick', 'Rolling Kick', 'Twineedle', 'Sonic Boom', 'Submission', 'Dragon Rage', 'Meditate',
			'Rage', 'Barrier', 'Bide', 'Mirror Move', 'Egg Bomb', 'Bone Club', 'Clamp', 'Skull Bash', 'Spike Cannon', 'Constrict', 'Kinesis', 'Barrage', 'Lovely Kiss',
			'Bubble', 'Dizzy Punch', 'Flash', 'Psywave', 'Bonemerang', 'Hyper Fang', 'Sharpen', 'Conversion', 'Sketch', 'Triple Kick', 'Spider Web', 'Mind Reader',
			'Nightmare', 'Conversion 2', 'Aeroblast', 'Feint Attack', 'Octazooka', 'Foresight', 'Return', 'Frustration', 'Sacred Fire', 'Magnitude', 'Pursuit',
			'Vital Throw', 'Hidden Power', 'Hail', 'Smelling Salts', 'Nature Power', 'Assist', 'Magic Coat', 'Revenge', 'Refresh', 'Grudge', 'Snatch', 'Secret Power',
			'Camouflage', 'Tail Glow', 'Luster Purge', 'Mist Ball', 'Mud Sport', 'Ice Ball', 'Needle Arm', 'Aromatherapy', 'Odor Sleuth', 'Silver Wind', 'Grass Whistle',
			'Signal Beam', 'Sky Uppercut', 'Water Sport', 'Doom Desire', 'Psycho Boost', 'Miracle Eye', 'Wake-Up Slap', 'Natural Gift', 'Embargo', 'Psycho Shift',
			'Trump Card', 'Heal Block', 'Wring Out', 'Lucky Chant', 'Me First', 'Punishment', 'Mud Bomb', 'Mirror Shot', 'Rock Climb', 'Rock Wrecker', 'Magnet Bomb',
			'Captivate', 'Chatter', 'Heal Order', 'Crush Grip', 'Dark Void', 'Seed Flare', 'Ominous Wind', 'Autotomize', 'Telekinesis', 'Storm Throw', 'Flame Burst',
			'Synchronoise', 'Chip Away', 'Sky Drop', 'Bestow', 'Dual Chop', 'Heart Stamp', 'Leaf Tornado', 'Steamroller', 'Head Charge', 'Gear Grind', 'Searing Shot',
			'Techno Blast', 'Secret Sword', 'Glaciate', 'Bolt Strike', 'Blue Flare', 'Freeze Shock', 'Ice Burn', 'Fusion Flare', 'Fusion Bolt', 'Mat Block', 'Rototiller',
			'Trick-or-Treat', 'Ion Deluge', 'Forest\'s Curse', 'Topsy-Turvy', 'Crafty Shield', 'Flower Shield', 'Electrify', 'King\'s Shield', 'Venom Drench', 'Powder',
			'Geomancy', 'Power-Up Punch', 'Oblivion Wing', 'Thousand Arrows', 'Thousand Waves', 'Land\'s Wrath', 'Light of Ruin', 'Sparkling Aria', 'Floral Healing',
			'Spotlight', 'Toxic Thread', 'Laser Focus', 'Gear Up', 'Anchor Shot', 'Purify', 'Core Enforcer', 'Beak Blast', 'Clanging Scales', 'Dragon Hammer',
			'Shell Trap', 'Shadow Bone', 'Prismatic Laser', 'Spectral Thief', 'Sunsteel Strike', 'Moongeist Beam', 'Nature\'s Madness', 'Multi-Attack',
			'Mind Blown', 'Plasma Fists', 'Photon Geyser', 'Double Iron Bash', 'Max Guard', 'Octolock', 'Bolt Beak', 'Fishious Rend', 'Clangorous Soul', 'Decorate',
			'Snap Trap', 'Aura Wheel', 'Strange Steam', 'Obstruct', 'Meteor Assault', 'Eternabeam',
		],
		unbanlist: [
			"Agonette", "Alchevul", "Androimatide", "Armaruin", "Awesdruk", "Baashful", "Basilud", "Brasshopper", "Bruined", "Caddismith", "Caeruleto", "Capanopy", "Cardborg", "Carecrow", "Cavvage", "Chitana", "Chloravage", "Chubee", "Cloconstruct", "Covloris", "Croakast", "Cryosaurite", "Diabol", "Draatle", "Dreampunk", "Faeraith", "Falstiletto", "Fendeerie", "Ferticotta", "Flumflare", "Fridgeate", "Frozalisk", "Fulmineus", "Funera", "Gachacha", "Gastrel", "Gnomeush", "Gorilax", "Harmadillo", "Hydrongea", "IronRailgun", "Jamborai", "Kaledzi", "Kepa-ying", "Klimausion", "Kurayami", "Lepwozectur", "Libuble", "Lizhaman", "Locustab", "Marshwift", "Matitrick", "Melethyst", "Mochiknight", "Mon-Chi", "Mustank", "Neuranium", "Ohlmagoon", "Orbitgami", "Origyrant", "Phantasail", "Phanthazem", "Plasmacaw", "Pompadork", "Possabomb", "Pyrelic", "Pyroccult", "Pyrove", "Ralirulero", "Rexxon", "Roquack", "Roseaphot", "Sail-Goshi", "Sapparine", "Scorjester", "Scorpdyceps", "Searberus", "Shockatrice", "Snowpea", "Spectache", "Spirem", "Spongimney", "Squwhirrl", "Sundon", "Surchin", "Thorbarage", "Tiramitzu", "Tometex", "Tusquoka-Agent", "Tyrannyan", "Vamperilico", "Velvittle", "Vesquadron", "Vulchar", "Wiifii", "Wildemyst", "Zassansa", "Zauryo", "Zenoise", "Zunowy"
		],
        onValidateTeam(team, format) {
            let speciesTable = {};
            let allowedTiers = ['hi'];
            for (const set of team) {
                let template = this.dex.species.get(set.species);
                if (template.tier !== 'hi') {
                    return [set.species + ' is not legal in [Gen 9] Blindsided.'];
                }
            }
        },
    },
	{
        name: "[Gen 9] Gen 9 Blindsided Group C",
        desc: `<b>[Gen 9] Blindsided</b>: the monkey has awoken part 3`,
        threads: [
            `&bullet; <a href="https://docs.google.com/spreadsheets/d/1263L6g2BPzf4eQQNfqJrp2FO1UMtGdxWXcyfz9OBqkM/edit#gid=1545907772">spreadsheet</a>`,
        ],
        mod: 'g9blindsided',
        ruleset: ['Standard NatDex', 'OHKO Clause', 'Evasion Moves Clause', 'Dynamax Clause', 'Sleep Clause Mod', 'Data Mod', 'Z-Move Clause'],
        banlist: [
			'All Pokemon',
			'Shed Tail', 'Last Respects', 'Baton Pass',

			  // i apologize

			'Karate Chop', 'Double Slap', 'Comet Punch', 'Razor Wind', 'Jump Kick', 'Rolling Kick', 'Twineedle', 'Sonic Boom', 'Submission', 'Dragon Rage', 'Meditate',
			'Rage', 'Barrier', 'Bide', 'Mirror Move', 'Egg Bomb', 'Bone Club', 'Clamp', 'Skull Bash', 'Spike Cannon', 'Constrict', 'Kinesis', 'Barrage', 'Lovely Kiss',
			'Bubble', 'Dizzy Punch', 'Flash', 'Psywave', 'Bonemerang', 'Hyper Fang', 'Sharpen', 'Conversion', 'Sketch', 'Triple Kick', 'Spider Web', 'Mind Reader',
			'Nightmare', 'Conversion 2', 'Aeroblast', 'Feint Attack', 'Octazooka', 'Foresight', 'Return', 'Frustration', 'Sacred Fire', 'Magnitude', 'Pursuit',
			'Vital Throw', 'Hidden Power', 'Hail', 'Smelling Salts', 'Nature Power', 'Assist', 'Magic Coat', 'Revenge', 'Refresh', 'Grudge', 'Snatch', 'Secret Power',
			'Camouflage', 'Tail Glow', 'Luster Purge', 'Mist Ball', 'Mud Sport', 'Ice Ball', 'Needle Arm', 'Aromatherapy', 'Odor Sleuth', 'Silver Wind', 'Grass Whistle',
			'Signal Beam', 'Sky Uppercut', 'Water Sport', 'Doom Desire', 'Psycho Boost', 'Miracle Eye', 'Wake-Up Slap', 'Natural Gift', 'Embargo', 'Psycho Shift',
			'Trump Card', 'Heal Block', 'Wring Out', 'Lucky Chant', 'Me First', 'Punishment', 'Mud Bomb', 'Mirror Shot', 'Rock Climb', 'Rock Wrecker', 'Magnet Bomb',
			'Captivate', 'Chatter', 'Heal Order', 'Crush Grip', 'Dark Void', 'Seed Flare', 'Ominous Wind', 'Autotomize', 'Telekinesis', 'Storm Throw', 'Flame Burst',
			'Synchronoise', 'Chip Away', 'Sky Drop', 'Bestow', 'Dual Chop', 'Heart Stamp', 'Leaf Tornado', 'Steamroller', 'Head Charge', 'Gear Grind', 'Searing Shot',
			'Techno Blast', 'Secret Sword', 'Glaciate', 'Bolt Strike', 'Blue Flare', 'Freeze Shock', 'Ice Burn', 'Fusion Flare', 'Fusion Bolt', 'Mat Block', 'Rototiller',
			'Trick-or-Treat', 'Ion Deluge', 'Forest\'s Curse', 'Topsy-Turvy', 'Crafty Shield', 'Flower Shield', 'Electrify', 'King\'s Shield', 'Venom Drench', 'Powder',
			'Geomancy', 'Power-Up Punch', 'Oblivion Wing', 'Thousand Arrows', 'Thousand Waves', 'Land\'s Wrath', 'Light of Ruin', 'Sparkling Aria', 'Floral Healing',
			'Spotlight', 'Toxic Thread', 'Laser Focus', 'Gear Up', 'Anchor Shot', 'Purify', 'Core Enforcer', 'Beak Blast', 'Clanging Scales', 'Dragon Hammer',
			'Shell Trap', 'Shadow Bone', 'Prismatic Laser', 'Spectral Thief', 'Sunsteel Strike', 'Moongeist Beam', 'Nature\'s Madness', 'Multi-Attack',
			'Mind Blown', 'Plasma Fists', 'Photon Geyser', 'Double Iron Bash', 'Max Guard', 'Octolock', 'Bolt Beak', 'Fishious Rend', 'Clangorous Soul', 'Decorate',
			'Snap Trap', 'Aura Wheel', 'Strange Steam', 'Obstruct', 'Meteor Assault', 'Eternabeam',
		],
		unbanlist: [
			"ExPl0r3REx3", "Androimatide", "Aparism", "Armaruin", "Averse", "Baashful", "Bardisco", "Bonnetform", "Bruined", "Capanopy", "Cardborg", "Chalquine", "Champimimus", "Chinchimra", "Chitana", "Cloconstruct", "Croakast", "Crushave", "Cryosaurite", "Diabol", "Draatle", "Driveel", "Drukrackoon", "Dynamantis", "Electhog", "Elyctron", "Faeraith", "Falstiletto", "Fendeerie", "Fridgeate", "Frozalisk", "Gachacha", "Gastrel", "Gnomeush", "Grrilla", "Harmadillo", "Heacluster", "Helmekh", "Hydrongea", "Iron Aspis", "Iron Rebel", "Jerboulda", "Kaledzi", "Kepa-ying", "Klimausion", "Kurayami", "Lizhaman", "Luxsectus", "Majestapis", "Marshwift", "Matryocha", "Melethyst", "Mochiknight", "Molar Bear", "Mon-Chi", "Moriwarty", "Mustank", "Neuranium", "Notfly", "Obbyplex", "Offendage", "Onion Wings", "Orbitgami", "Pestispine", "Phantasail", "Phanthazem", "Plasmacaw", "Plasmelion", "Polarpants", "Pompadork", "Possabomb", "Potatron", "Ralirulero", "Rexxon", "Rockick", "Rodendrain", "Roquack", "Roseaphot", "Sail-Goshi", "Scorjester", "Scorpdyceps", "Searberus", "Serprizius", "Shadellisk", "Shockatrice", "Skullpion", "Spectache", "Spirem", "Squwhirrl", "Stringle", "Sundon", "Surchin", "Terralauri", "Thorbarage", "Tiramitzu", "Tusquoka-Agent", "Twirlava", "Tyrannyan", "Vamperilico", "Velocipastor", "Velvittle", "Vesquadron", "Vulchar", "Wellowish", "Wyvking", "Zassansa", "Zauryo", "Zenoise", "Cucurbella"
		],
        onValidateTeam(team, format) {
            let speciesTable = {};
            let allowedTiers = ['hi', 'C'];
            for (const set of team) {
                let template = this.dex.species.get(set.species);
                if ((template.tier !== 'hi') && (template.tier !== 'C')) {
                    return [set.species + ' is not legal in [Gen 9] Blindsided.'];
                }
            }
        },
    },
	{
		name: "[Gen 9] Blindsided Draft",
		mod: "g9blindsided",
		desc: `<b>[Gen 9] Blindsided</b>: the monkey has awoken part draft`,
    threads: [
      `&bullet; <a href="https://docs.google.com/spreadsheets/d/1263L6g2BPzf4eQQNfqJrp2FO1UMtGdxWXcyfz9OBqkM/edit#gid=1545907772">spreadsheet</a>`,
     ],
    ruleset: ['Standard NatDex', 'OHKO Clause', 'Evasion Moves Clause', 'Dynamax Clause', 'Sleep Clause Mod', 'Data Mod', 'Z-Move Clause', 'Terastal Clause'],
		banlist: [
			'Shed Tail', 'Last Respects', 'Baton Pass',

			  // i apologize

			'Karate Chop', 'Double Slap', 'Comet Punch', 'Razor Wind', 'Jump Kick', 'Rolling Kick', 'Twineedle', 'Sonic Boom', 'Submission', 'Dragon Rage', 'Meditate',
			'Rage', 'Barrier', 'Bide', 'Mirror Move', 'Egg Bomb', 'Bone Club', 'Clamp', 'Skull Bash', 'Spike Cannon', 'Constrict', 'Kinesis', 'Barrage', 'Lovely Kiss',
			'Bubble', 'Dizzy Punch', 'Flash', 'Psywave', 'Bonemerang', 'Hyper Fang', 'Sharpen', 'Spider Web', 'Mind Reader', 'Nightmare', 'Feint Attack', 'Octazooka', 
			'Foresight', 'Return', 'Frustration', 'Magnitude', 'Pursuit', 'Vital Throw', 'Hidden Power', 'Hail', 'Smelling Salts', 'Nature Power', 'Assist', 'Magic Coat', 
			'Revenge', 'Refresh', 'Grudge', 'Snatch', 'Secret Power', 'Camouflage', 'Mud Sport', 'Ice Ball', 'Needle Arm', 'Aromatherapy', 'Odor Sleuth', 'Silver Wind', 
			'Grass Whistle', 'Signal Beam', 'Sky Uppercut', 'Water Sport', 'Miracle Eye', 'Wake-Up Slap', 'Natural Gift', 'Embargo', 'Psycho Shift', 'Trump Card', 
			'Heal Block', 'Wring Out', 'Lucky Chant', 'Me First', 'Punishment', 'Mud Bomb', 'Mirror Shot', 'Rock Climb', 'Magnet Bomb', 'Captivate', 'Chatter', 
			'Heal Order', 'Ominous Wind', 'Autotomize', 'Telekinesis', 'Storm Throw', 'Flame Burst', 'Synchronoise', 'Chip Away', 'Sky Drop', 'Bestow', 'Dual Chop', 
			'Heart Stamp', 'Leaf Tornado', 'Steamroller', 'Head Charge', 'Gear Grind', 'Searing Shot', 'Techno Blast', 'Mat Block', 'Rototiller',	'Trick-or-Treat', 
			'Ion Deluge', 'Forest\'s Curse', 'Crafty Shield', 'Flower Shield', 'Electrify', 'King\'s Shield', 'Venom Drench', 'Powder',	'Geomancy', 'Power-Up Punch', 
			'Oblivion Wing', 'Thousand Arrows', 'Thousand Waves', 'Land\'s Wrath', 'Light of Ruin', 'Spotlight', 'Laser Focus', 'Gear Up', 'Anchor Shot', 'Purify', 
			'Core Enforcer', 'Shell Trap', 'Shadow Bone', 'Spectral Thief', 'Nature\'s Madness', 'Multi-Attack', 'Mind Blown', 'Plasma Fists', 'Double Iron Bash', 
			'Max Guard', 'Octolock', 'Bolt Beak', 'Fishious Rend', 'Snap Trap', 'Aura Wheel', 'Obstruct', 'Meteor Assault', 'Eternabeam',
			
			'Aparism', 'Chalquine', 'Driveel', 'Drukrackoon', 'Jerboulda', 'Molar Bear', 'Moriwarty', 'Notfly', 'Polarpants', 'Shadellisk', 'Stringle', 
		],
    onValidateTeam(team, format) {
      let speciesTable = {};
      let allowedTiers = ['hi', 'C'];
				for (const set of team) {
					let template = this.dex.species.get(set.species);
          if ((template.tier !== 'hi') && (template.tier !== 'C')) {
            return [set.species + ' is not legal in [Gen 9] Blindsided.'];
          }
        }
     },
	},
	{
		name: "[Gen 1] Burgundy Version",
		desc: `<b>[Gen 1] Burgundy Version</b>: An expansion of the Gen 1 OU metagame that changes some mechanics and adds new Pokemon and moves, both original and from later gens.`,
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/gen-1-burgundy-version-slate-3-new-moves-voting.3711525/">Burgundy Version on Smogon Forums</a>`,
		],
		mod: 'gen1burgundy',
		ruleset: ['Standard With Dig and Fly', 'Data Mod', 'Allow Tradeback'],
		banlist: ['Uber'],
		unbanlist: ['Anorith', 'Armaldo', 'Meditite', 'Medicham', 'Fletchling', 'Fletchinder', 'Talonflame', 'Sneasel-Hisui', 'Sneasler', 'Snover', 'Abomasnow',
					  ],
    },
	{
		name: "[Gen 9] Book of Enigmas",
		desc: [
			"<b>Book of Enigmas</b>: A Pet Mod that aims to create new Paradox Pokemon based on Ho-oh and Lugia - the sky and the sea, respectively.",
		],
		threads: [
			`&bullet: <a href="https://www.smogon.com/forums/threads/book-of-enigmas-slate-0-the-beginning-custom-abilities-names.3711490/">Thread on Smogon.`,
		],
		ruleset: ['Standard NatDex', 'Data Mod', 'Terastal Clause'],
		banlist: [
			'Arena Trap', 'Moody', 'Shadow Tag', 'Baton Pass',
			'Sceptilite', 'Blazikenite', 'Swampertite', 'Gardevoirite', 'Galladite', 'Alakazite', 'Gyaradosite',
			'Sablenite', 'Mawilite', 'Aggronite', 'Medichamite', 'Manectite', 'Sharpedonite', 'Cameruptite',
			'Altarianite', 'Absolite', 'Glalitite', 'Salamencite', 'Metagrossite', 'Latiasite', 'Latiosite',
			'Garchompite', 'Steelixite', 'Beedrillite', 'Pidgeotite',
			'Blue Orb', 'Red Orb', //this is just copied from ANL's lol
			'Beedrill-Mega', 'Pidgeot-Mega', //?????
		],
		onValidateTeam(team, format) {
			/**@type {{[k: string]: true}} */
			let speciesTable = {};
			let allowedTiers = ['BoE OU', "BoE NFE", "BoE LC"];
			for (const set of team) {
				let template = this.dex.species.get(set.species);
				if (!allowedTiers.includes(template.tier)) {
					return [set.species + ' is not legal in Book of Enigmas OU.'];
				}
			}
		},
		mod: 'bookofenigmas',
	},
	{
		name: "[Gen 9] Breeding Variants V4",
		desc: `A NatDex format that adds alternate forms for Pokemon based around inheriting elements from a possible breeding partner.`,
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/breeding-variants-v4.3760184/">Breeding Variants V4</a>`,
		],
		mod: 'breedingvariantsnatdex',
		teambuilderFormat: "National Dex",
		ruleset: ['Standard NatDex', 'OHKO Clause', 'Evasion Moves Clause', 'Species Clause', 'Dynamax Clause', 'Data Mod', 'Sleep Clause Mod', 'Terastal Clause', 'Mega Data Mod'],
		banlist: [
			'Uber', 'AG', 'Arena Trap', 'Moody', 'Power Construct', 'Shadow Tag', 'King\'s Rock',
			'Quick Claw', 'Razor Fang', 'Assist', 'Baton Pass', 'Last Respects', 'Shed Tail',
		],
	},
	{
		name: "[Gen 9] CCAPM 2024",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3754552/">Community Create-A-Pet Mod 2024</a>`,
		],
		mod: 'ccapm2024',
		teambuilderFormat: "National Dex",
		ruleset: ['Standard NatDex', 'OHKO Clause', 'Evasion Moves Clause', 'Sleep Clause Mod', 'Data Mod', 'Terastal Clause'],
		banlist: [],
		onValidateTeam(team, format) {
			/**@type {{[k: string]: true}}*/
			let speciesTable = {};
			let allowedTiers = ['CCAPM2024'];
			for (const set of team) {
				let template = this.dex.species.get(set.species);
				if (!allowedTiers.includes(template.tier)) {
					return [set.species + ' is not legal in CCAPM 2024.'];
				}
			}
		},
	},
	{
		name: "[Gen 9] CCAPM 2024 Random Battle",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3754552/">Community Create-A-Pet Mod 2024</a>`,
		],
		mod: 'ccapm2024',
		team: 'random',
		ruleset: ['Obtainable', 'Species Clause', 'HP Percentage Mod', 'Sleep Clause Mod', 'Terastal Clause', 'Cancel Mod', 'Data Mod'],
	},
	{
		name: "[Gen 9] Clean Slate Micro 2",
		desc: `Clean Slate.`,
		threads: [
			`<a href="https://www.smogon.com/forums/threads/clean-slate-micro-2.3696166/">Clean Slate Micro 2</a>`,
		],
		mod: 'csm2',
		ruleset: ['Standard', 'Dynamax Clause'],
		// onSwitchIn(pokemon) {
			// this.add('-start', pokemon, 'typechange', pokemon.types.join('/'), '[silent]');
		// },
		onValidateTeam(team, format) {
			/**@type {{[k: string]: true}} */
			let speciesTable = {};
			for (const set of team) {
				let template = this.dex.species.get(set.species);
				if (template.tier !== 'CSM2') {
					return [set.species + ' is not useable in Clean Slate Micro 2.'];
				}
			}
		},
	},
	{
		name: "[Gen 9] Crossover Chaos [Ver. C]",
		desc: `Crossover Chaos, a micrometa designed to crossover characters from video game titles.`,
		threads: [
			`<a href="https://www.smogon.com/forums/threads/gen-9-crossover-chaos-ver-c.3757316/">Gen 9 Crossover Chaos (Ver. C)</a>`,
		],
		mod: 'gen9crossoverchaosc',
		teambuilderFormat: "National Dex",
		ruleset: ['Standard NatDex', 'OHKO Clause', 'Evasion Moves Clause', 'Species Clause', 'Dynamax Clause', 'Data Mod', 'Sleep Clause Mod', 'Terastal Clause', 'Mega Data Mod'],
		onValidateTeam(team, format) {
			/**@type {{[k: string]: true}}*/
			let speciesTable = {};
			let allowedTiers = ['CC OU'];
			for (const set of team) {
				let template = this.dex.species.get(set.species);
				if (!allowedTiers.includes(template.tier)) {
					return [set.species + ' is not legal in Crossover Chaos Version C.'];
				}
			}
		},
	},
	{
		name: "[Gen 6] DLCmons V3",
		desc: ["<b>DLCmons</b>: This Pet Mods aims at creating DLCs for Pokemon games, like how the Expansion Pass worked for Galar. This will include adding existing Pokemon that are not in the chosen regional Pokedex, adding new ones, creating regional formes, items, moves... This will be a pretty diverse project!",
		      ],
		threads: [
				`&bullet; <a href="https://www.smogon.com/forums/threads/dlcmons-v3-returns.3754885/">DLCmons v3 on Smogon Forums</a>`,
				`&bullet; <a href="https://docs.google.com/spreadsheets/d/1TdeAUUtjh0f_tcIBllbF_imgepwV-dV2YomoTCRlPgI/edit?usp=sharing">Spreadsheet</a>`,
		      ],
		ruleset: ['Standard'],
		banlist: [
			'AG', 'Uber',
			'Aegislash', 'Hoopa-Unbound', 'Greninja', 'Mawilite',
			'Arena Trap', 'Power Construct', 'Shadow Tag',
			'Baton Pass',
			'King\'s Rock', 'Razor Fang', 'Quick Claw',
		],
		onValidateTeam(team, format) {
			/**@type {{[k: string]: true}} */
			let speciesTable = {};
			for (const set of team) {
				let template = this.dex.species.get(set.species);
				if (template.tier !== 'Kalos' && template.tier !== 'Kalos (NFE)') {
					return [set.species + ' is not a part of the Kalos Pokédex.'];
				}
			}
		},
		mod: 'dlcmons',
	},
	{
		name: "[Gen 6] DLCmons V3 VGC",
		desc: `A fun metagame where we try to make everything viable, or at least usable. We also have new Fakemons!`,
		threads: [
			`&bullet; <a href="https://docs.google.com/spreadsheets/d/1YJXE8wUNJijWSfNKIUqgObN5uEVgTliewTluGe0w4Y4/edit?usp=sharing">Spreadsheet for the mod</a>`,
		],
		mod: 'dlcmons',
		gameType: 'doubles',
		ruleset: ['Adjust Level = 50', 'VGC Timer', 'Data Mod', 'Mega Data Mod'],
		banlist: [
			'Mewtwo', 'Mew',
			'Lugia', 'Ho-Oh', 'Celebi',
			'Kyogre', 'Groudon', 'Rayquaza', 'Jirachi', 'Deoxys',
			'Dialga', 'Palkia', 'Giratina', 'Phione', 'Manaphy', 'Darkrai', 'Shaymin', 'Arceus',
			'Victini', 'Reshiram', 'Zekrom', 'Kyurem', 'Keldeo', 'Meloetta', 'Genesect',
			'Xerneas', 'Yveltal', 'Zygarde', 'Diancie', 'Hoopa', 'Volcanion',
			'Cosmog', 'Cosmoem', 'Solgaleo', 'Lunala', 'Necrozma', 'Magearna', 'Marshadow', 'Zeraora',
			'Zacian', 'Zamazenta', 'Eternatus', 'Zarude', 'Calyrex',
			'Koraidon', 'Miraidon',
		],
		onValidateTeam(team, format) {
			/**@type {{[k: string]: true}} */
			let speciesTable = {};
			for (const set of team) {
				let template = this.dex.species.get(set.species);
				if (template.tier !== 'Kalos' && template.tier !== 'Kalos (NFE)') {
					return [set.species + ' is not a part of the Kalos Pokédex.'];
				}
			}
		},
	},
	{
		name: "[Gen 9] Dollhouse",
		desc: [
			"<b>Dollhouse</b>: An OU-based mod where, instead of bans, Pokemon are removed from the metagame by being turned into held items.",
		],
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/dollhouse.3731495/">Thread on the Smogon Forums</a>`,
		],
		mod: 'dollhouse',
		ruleset: ['Standard', 'Terastal Clause'],
		banlist: ['Uber', 'AG', 'Arena Trap', 'Moody', 'Sand Veil', 'Shadow Tag', 'Snow Cloak', 'King\'s Rock', 'Razor Fang', 'Baton Pass', 'Last Respects', 'Shed Tail'],
	},
	{
		name: "[Gen 9] Do Not Use: The Pet Mod: The Musical",
		desc: [
			"<b>Do Not Use: The Pet Mod: The Musical</b>: A National Dex Pet Mod where only Pokemon with 280 BST or less, with some exception, are allowed. New Pokemon are added and edited into the existing DNU metagame."
		],
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3749356/">Do Not Use: The Pet Mod: The Musical</a>`,
		],
		mod: 'donotusetmptm',
		ruleset: ['Standard NatDex', 'OHKO Clause', 'Evasion Moves Clause', 'Evasion Items Clause', 'Species Clause', 'Sleep Clause Mod', 'Mega Rayquaza Clause', 'Terastal Clause', 'Z-Move Clause', 'Data Mod'],
		teambuilderFormat: 'National Dex',
		banlist: ['Huge Power', 'Pure Power', 'Shadow Tag', 'Arena Trap', 'Baton Pass', 'Moody', 'Cute Charm'],
		unbanlist: ['Assist'],
		onValidateTeam(team, format) {
			let speciesTable = {};
			let allowedTiers = ['DoNU', 'DoNU UUBL', 'DoNU UU', 'DoNU RUBL', 'DoNU RU'];
			for (const set of team) {
				let template = this.dex.species.get(set.species);
				if (!allowedTiers.includes(template.tier)) {
					return [set.species + ' is not legal in [Gen 9] Do Not Use: The Pet Mod: The Musical.'];
				}
			}
		},
	},
	{
		name: "[Gen 9] Ebb and Flow",
		threads: [
			`<a href="https://www.smogon.com/forums/threads/.3748857/">Ebb and Flow</a>`,
		],
		mod: 'ebbandflow',
		ruleset: ['Standard', 'Terastal Clause'],
		banlist: ['Uber', 'AG', 'Baton Pass', 'King\'s Rock', 'Razor Fang', 'Moody'],
	},
	{
		name: "[Gen 9] Elimination War",
		mod: 'eliminationwar',
		ruleset: ['Standard NatDex', 'OHKO Clause', 'Evasion Clause', 'Species Clause', 'Terastal Clause', 'Sleep Clause Mod', 'Z-Move Clause', 'Mega Data Mod', 'Data Mod'],
		banlist: ['Uber', 'AG', 'Arena Trap', 'Moody', 'Shadow Tag', 'King\'s Rock', 'Baton Pass', 'Last Respects', 'Shed Tail'],
		onValidateTeam(team, format) {
			let speciesTable = {};
			let allowedTiers = ['Legal'/*, 'Eliminated'*/];
			for (const set of team) {
				let template = this.dex.species.get(set.species);
				if (!allowedTiers.includes(template.tier)) {
					return [set.species + ' is not legal in Elimination War'];
				}
			}
		},
	},
	{
		name: "[Gen 9] Eternal Pokémon",
		mod: 'eternalpokemon',
		desc: 'A Pet Mod that aims to give Eternal Floette-like formes to other NFE Pokémon.',
		ruleset: ['Standard NatDex', 'OHKO Clause', 'Evasion Moves Clause', 'Evasion Items Clause', 'Species Clause', 'Sleep Moves Clause', 'Z-Move Clause', 'Data Mod', 'Terastal Clause', 'Picked Team Size = 6'], // temporarily asks for team order until Magikarp-Eternal situation is solved 
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/eternal-pok%C3%A9mon.3755140/">Eternal Pokémon on Smogon Forums</a>`,
		],
		banlist: ['Aegislash', 'Aerodactylite', 'Gardevoirite', 'Gengarite', 'Kangaskhanite', 'Lucarionite', 'Power Construct', 'Salamencite', 'Zygarde', 'Arena Trap', 'Baton Pass', 'Moody', 'Sand Veil', 'Shadow Tag', 'Snow Cloak', 'King\'s Rock', 'Razor Fang', 'Quick Claw'],
		teambuilderFormat: 'National Dex',
		onValidateTeam(team, format) {
			/**@type {{[k: string]: true}}*/
			let speciesTable = {};
			let allowedTiers = ['FE', '1x NFE', '2x NFE'];
			for (const set of team) {
				let template = this.dex.species.get(set.species);
				if (template.tier == 'Banned') return [set.species + ' is banned in Eteral Pokémon'];
				if (template.tier == 'WIP') return [set.species + ' has some coding challenges, so it\'s not allowed yet!'];
				if (!allowedTiers.includes(template.tier)) {
					return [set.species + ' is not available in Eternal Pokémon.'];
				}
			}
		},
	},
	{
		name: "[Gen 9] Eramons",
		desc: [
			`<b>Eramons</b>: A Gen 9 Pet Mod based on broad strokes of real-life historical time periods.`,
		],
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3727769/">Gen 9 Eramons</a>`,
		],

		mod: 'eramons',
		ruleset: ['Standard', 'Terastal Clause'],
		banlist: ['Arena Trap', 'Moody', 'Sand Veil', 'Shadow Tag', 'Snow Cloak', 'King\'s Rock', 'Razor Fang', 'Baton Pass', 'Last Respects', 'Shed Tail'],
		onValidateTeam(team, format, teamHas) {
			/**@type {{[k: string]: true}} */
			let speciesTable = {};
			let era : string[] = [];
			let allowedTiers = ['ECiv', 'Med', 'PrDay', 'FFut'];
			for (const set of team) {
				let template = this.dex.species.get(set.species);
				let tier = template.tier;
				if (!allowedTiers.includes(template.tier)) {
					return [set.species + ' is not legal in Eramons.'];
				}
				if (!(era.includes(tier))) {
					era.push(tier)
				}
			}
			if (era.length > 1) return ['Each Pokemon needs to be from the same era.'];
		},
	},
	{
		name: "[Gen 9] Fakemon Frontier OU",
		desc: `<b>[Gen 9] Fakemon Frontier OU</b>: A meta where the only legal Pokemon are community-made Fakemon that follow two of four predetermined "rules."`,
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3722349/">Fakemon Frontier on Smogon Forums</a>`,
		],
		mod: 'fakemonfrontier',
		ruleset: ['Standard NatDex', 'OHKO Clause', 'Evasion Clause', 'Species Clause', 'Terastal Clause', 'Sleep Clause Mod', 'Z-Move Clause', 'Mega Data Mod', 'Data Mod'],
		banlist: [
			'Karate Chop', 'Double Slap', 'Comet Punch', 'Razor Wind', 'Jump Kick', 'Rolling Kick', 'Sonic Boom', 'Submission',
			'Dragon Rage', 'Meditate', 'Rage', 'Barrier', 'Bide', 'Mirror Move', 'Egg Bomb', 'Bone Club', 'Clamp', 'Skull Bash',
			'Spike Cannon', 'Constrict', 'Kinesis', 'Barrage', 'Lovely Kiss', 'Bubble', 'Dizzy Punch', 'Flash', 'Psywave', 'Bonemerang',
			'Hyper Fang', 'Sharpen', 'Triple Kick', 'Spider Web', 'Mind Reader', 'Nightmare', 'Feint Attack', 'Octazooka', 'Foresight',
			'Return', 'Frustration', 'Magnitude', 'Pursuit', 'Vital Throw', 'Hidden Power', 'Hail', 'Smelling Salts', 'Nature Power',
			'Assist', 'Magic Coat', 'Revenge', 'Refresh', 'Grudge', 'Snatch', 'Secret Power', 'Camouflage', 'Mud Sport', 'Ice Ball',
			'Needle Arm', 'Aromatherapy', 'Odor Sleuth', 'Silver Wind', 'Grass Whistle', 'Signal Beam', 'Sky Uppercut', 'Water Sport',
			'Miracle Eye', 'WakeUp Slap', 'Natural Gift', 'Embargo', 'Psycho Shift', 'Trump Card', 'Heal Block', 'Wring Out', 'Lucky Chant',
			'Me First', 'Punishment', 'Mud Bomb', 'Mirror Shot', 'Rock Climb', 'Rock Wrecker', 'Magnet Bomb', 'Captivate', 'Dark Void',
			'Ominous Wind', 'Autotomize', 'Telekinesis', 'Storm Throw', 'Flame Burst', 'Synchronoise', 'Chip Away', 'Sky Drop', 'Bestow',
			'Dual Chop', 'Heart Stamp', 'Leaf Tornado', 'Steamroller', 'Rototiller', 'Ion Deluge', 'Crafty Shield', 'Flower Shield', 'Electrify',
			'Venom Drench', 'Powder', 'PowerUp Punch', 'Light of Ruin', 'Sparkling Aria', 'Floral Healing', 'Laser Focus', 'Gear Up', 'Aura Wheel',
			'Last Respects', 'Shed Tail', 'Baton Pass'
		],
		onValidateTeam(team, format) {
			let speciesTable = {};
			let allowedTiers = ['FFOU'];
			for (const set of team) {
				let template = this.dex.species.get(set.species);
				if (template.tier !== 'FFOU') {
					return [set.species + ' is not legal in [Gen 9] Fakemon Frontier OU.'];
				}
			}
		},
	},
	{
		name: "[Gen 9] Fusion Evolution Random Battle",
		mod: 'gen9fe',
		team: 'random',
		desc: `gen9fe`,
		ruleset: ['Data Mod', 'Cancel Mod', 'Sleep Clause Mod', 'Endless Battle Clause', 'OHKO Clause', 'Evasion Moves Clause', 'Species Clause', 'Dynamax Clause', 'Z-Move Clause', 'OU Terastal Clause'],
	},
	{
		name: "[Gen 9] Fusion Evolution",
		threads: [
			`<a href="https://www.smogon.com/forums/threads/3717085/">Gen 9 Fusion Evolution</a>`,
		],
		mod: 'gen9fe',
		ruleset: ['Standard NatDex', 'OHKO Clause', 'Evasion Clause', 'Species Clause', 'OU Terastal Clause', 'Sleep Clause Mod', 'Z-Move Clause', 'Mega Data Mod', 'Data Mod'],
		banlist: ['Metagrossite', 'Revival Blessing', 'Shed Tail', 'Last Respects', 'Gengarite', 'Ampharosite', 'Salamencite', 'Baton Pass', 'Light Clay', 'Absolite', 'Medichamite'],
		onValidateTeam(team, format) {
			/**@type {{[k: string]: true}}*/
			let speciesTable = {};
			let allowedTiers = ['FEOU', 'FEUUBL', 'FEUU', 'FENFE', "FELC"];
			for (const set of team) {
				let template = this.dex.species.get(set.species);
				if (!allowedTiers.includes(template.tier)) {
					return [set.species + ' is not legal in Fusion Evolution.'];
				}
			}
		},
	},
	{
		name: "[Gen 9] Fusion Evolution UU",
		threads: [
			`<a href="https://www.smogon.com/forums/threads/fusion-evolution-uu-gen-9-slate-0-drop-slate-discussion-phase.3737223/#post-9994453/">Gen 9 Fusion Evolution UU</a>`,
		],
		mod: 'gen9fe',
		ruleset: ['Standard NatDex', 'OHKO Clause', 'Evasion Clause', 'Species Clause', 'Terastal Clause', 'Sleep Clause Mod', 'Z-Move Clause', 'Mega Data Mod', 'Data Mod'],
		//While the first users of the mega stone will be made illegal with them if the respective megas are banned and not the stones,
		//banning other megas accessed through said stone will not ban the use of said mega stone on the base forms
		banlist: ['Altarianite', 'Revival Blessing', 'Shed Tail', 'Last Respects', 'Mawilite', 'Alakazite', 'Baton Pass', 'Light Clay',
			'Aero Wake', 'Amigotrio-Alola', 'Amphamence', 'Anoraidon', 'Arbolosion-Hisui', 'Baxgeist-Large', 'Bellikiss', 'Bouffa-Lu', 'Brambleswine',
			'Celedos', 'Cresserace', 'Crygargonal', 'Deciperior-Hisui', 'Deliraidon', 'Deoxyslash-Speed', 'Drampiclus', 'Druddizor',
			'Floatzera', 'Florgerouge', 'Gargamise', 'Garpyuku', 'Great Kleav', 'Icekrai', 'Iron Dirge', 'Iron Legion', 'Iron Matcha', 'Medichamite',
			'Iron Meta', 'Iron Mimic', 'Iron Tornado', 'Lelecuno-Galar', 'Meowscorio-Sensu', 'Necrotrik-Dawn-Wings', 'Necrotrik-Ultra', 'Primeleo',
			'Relishadow', 'Revarantis', 'Roaring Sal', 'Rotoghold', 'Samuraiai-Hisui', 'Scream Cormorant', 'Sol Valiant', 'Stargrowth', 'Tapu Titan', 'Tinkovish', 'Toedieleki',
			'Urshiluxe-Rapid-Strike', 'Varantis', 'Vikadrago', 'Weezaluna-Bloodmoon', 'Whimsy Sands', 'Wopple', 'Yu-Clod', 'Yveltox', 'Slither King',
			'Muktaria-Alola-Mega', 'Mawlakazam-Mega-X', 'Mawlakazam-Mega-Y', 'Goopert-Hisui-Mega', 'Scizorite', 'Tentazor-Mega', 'Zoroshark-Hisui-Mega'
		],
			//Just slapping "FEOU" in the banlist exclude these mons from the teambuilder... but an error ('Nothing matches "FEOU"') was thrown in dex-formats on the server side
			//Hence why bans were done manually
		onValidateTeam(team, format) {
			/**@type {{[k: string]: true}}*/
			let speciesTable = {};
			let allowedTiers = ['FEUU', 'FENFE', "FELC"];
			for (const set of team) {
				let template = this.dex.species.get(set.species);
				if (!allowedTiers.includes(template.tier)) {
					return [set.species + ' is not legal in Fusion Evolution UU.'];
				}
			}
		},
	},
	{
	name: "[Gen 9] Generation X: Brunica [Uber]",
		desc: ["<b>Generation X</b>: A pet mod that aims to develop new regions with brand-new Pokemon and select realmons, including ones that are absent from Scarlet and Violet. This format is based in Brunica, the mod's second region in Generation 9 after Desvega and fourth overall."],
		threads: [
			`<a href="https://www.smogon.com/forums/threads/3722319/">Gen 9 Generation X</a>`,
			`<a href="https://www.smogon.com/forums/threads/3722319/post-10114743">Announcement of Generation X's fourth iteration</a>`,
		],
		mod: 'genxbrunica',
		ruleset: ['Standard NatDex', 'OHKO Clause', 'Evasion Moves Clause', 'Species Clause', 'Terastal Clause', 'Sleep Clause Mod', 'Z-Move Clause', 'Mega Data Mod', 'Data Mod'],
		banlist: [],
		unbanlist: ['Last Respects', 'Shed Tail', 'Bright Powder', 'Razor Fang', 'Arena Trap', 'Moody', 'Shadow Tag'], //Uber unbans
		onValidateTeam(team, format) {
			/**@type {{[k: string]: true}}*/
			let speciesTable = {};
			let allowedTiers = ['Brunica Uber', 'Brunica OU', 'Brunica NFE', "Brunica LC"];
			for (const set of team) {
				let template = this.dex.species.get(set.species);
				if (!allowedTiers.includes(template.tier)) {
					return [set.species + ' is not available in Generation X\'s Brunica formats.'];
				}
			}
		},/*
		onChangeSet(set) {
			if (set.species.startsWith('Lutakon')) {
				const item = this.toID(set.item);
				if (item === 'awakeningseed') {
					set.species = 'Lutakon-Awakened';
					set.ability = 'Guardian of Nature';
					let synthesis = set.moves.indexOf('Synthesis');
					if (synthesis < 0) {
						synthesis = set.moves.indexOf('synthesis');
					}
					if (synthesis >= 0) {
						let gaiaRecoveryIndex = set.moves.indexOf('gaiarecovery');
						if (gaiaRecoveryIndex < 0) {
							gaiaRecoveryIndex = set.moves.indexOf('Gaia Recovery');
						}
						if (gaiaRecoveryIndex >= 0) {
							delete set.moves[synthesis];
						}
						else {
							set.moves[synthesis] = 'gaiarecovery';
						}
					}
				} else {
					set.species = 'Lutakon';
				}
			}
		},*/
	},
	{
	name: "[Gen 9] Generation X: Brunica [OU]",
		desc: ["<b>Generation X</b>: A pet mod that aims to develop new regions with brand-new Pokemon and select realmons, including ones that are absent from Scarlet and Violet. This format is based in Brunica, the mod's second region in Generation 9 after Desvega and fourth overall."],
		threads: [
			`<a href="https://www.smogon.com/forums/threads/3722319/">Gen 9 Generation X</a>`,
			`<a href="https://www.smogon.com/forums/threads/3722319/post-10114743">Announcement of Generation X's fourth iteration</a>`,
		],
		mod: 'genxbrunica',
		ruleset: ['Standard NatDex', 'OHKO Clause', 'Evasion Clause', 'Species Clause', 'Terastal Clause', 'Sleep Clause Mod', 'Z-Move Clause', 'Mega Data Mod', 'Data Mod'],
		banlist: ['Akulut', 'Kaiwakaw', 'Lutakon', 'Lutakon-Awakened', 'Tinozous'], //Ubers
		onValidateTeam(team, format) {
			/**@type {{[k: string]: true}}*/
			let speciesTable = {};
			let allowedTiers = ['Brunica OU', 'Brunica NFE', "Brunica LC"];
			for (const set of team) {
				let template = this.dex.species.get(set.species);
				if (template.tier === 'Brunica Uber') {
					return [set.species + ' is banned in Generation X\'s OU format for Brunica.'];
				}
				if (!allowedTiers.includes(template.tier)) {
					return [set.species + ' is not available in Generation X\'s Brunica formats.'];
				}
			}
		},
	},
	{
	name: "[Gen 9] Generation X: Desvega [Uber]",
		desc: ["<b>Generation X</b>: A pet mod that aims to develop new regions with brand-new Pokemon and select realmons, including ones that are absent from Scarlet and Violet. This format is based in Desvega, the mod's first region in Generation 9 and third region overall, as the successor to Loria from Generation 8."],
		threads: [
			`<a href="https://www.smogon.com/forums/threads/3722319/">Gen 9 Generation X</a>`,
		],
		mod: 'genxdesvega',
		ruleset: ['Standard NatDex', 'OHKO Clause', 'Evasion Moves Clause', 'Species Clause', 'Terastal Clause', 'Sleep Clause Mod', 'Z-Move Clause', 'Mega Data Mod', 'Data Mod'],
		banlist: [],
		unbanlist: ['Last Respects', 'Shed Tail', 'Bright Powder', 'Razor Fang', 'Arena Trap', 'Moody', 'Shadow Tag'], //Uber unbans
		onValidateTeam(team, format) {
			/**@type {{[k: string]: true}}*/
			let speciesTable = {};
			let allowedTiers = ['Desvega Uber', 'Desvega OU', 'Desvega NFE', "Desvega LC"];
			for (const set of team) {
				let template = this.dex.species.get(set.species);
				if (!allowedTiers.includes(template.tier)) {
					return [set.species + ' is not available in Generation X\'s Desvega formats.'];
				}
			}
		},
	},
	{
	name: "[Gen 9] Generation X: Desvega [OU]",
		desc: ["<b>Generation X</b>: A pet mod that aims to develop new regions with both brand-new Pokemon and select realmons, including ones that are absent from Scarlet and Violet. This format is based in Desvega, the mod's first region in Generation 9 and third region overall, as the successor to Loria from Generation 8."],
		threads: [
			`<a href="https://www.smogon.com/forums/threads/3722319/">Gen 9 Generation X</a>`,
		],
		mod: 'genxdesvega',
		ruleset: ['Standard NatDex', 'OHKO Clause', 'Evasion Clause', 'Species Clause', 'Terastal Clause', 'Sleep Clause Mod', 'Z-Move Clause', 'Mega Data Mod', 'Data Mod'],
		banlist: ['Ursaluna-Bloodmoon', 'Naganadel', 'Arcognition', 'Janutcher', 'Virulope'], //Ubers
		onValidateTeam(team, format) {
			/**@type {{[k: string]: true}}*/
			let speciesTable = {};
			let allowedTiers = ['Desvega OU', 'Desvega NFE', "Desvega LC"];
			for (const set of team) {
				let template = this.dex.species.get(set.species);
				if (template.tier === 'Brunica Uber') {
					return [set.species + ' is banned in Generation X\'s OU format for Desvega.'];
				}
				if (!allowedTiers.includes(template.tier)) {
					return [set.species + ' is not available in Generation X\'s Desvega formats.'];
				}
			}
		},
	},
	{
		name: "[Gen 9] GlaceMons",
		desc: [
			"<b>GlaceMons</b>: The fourth mod in the SylveMons series where Pokemon, items, abilities and moves are redesigned for Gen 9 NatDex OU (and new items, abilities and moves are added) without changing base stats.",
		],
		threads: [
			`&bullet; <a href="">Spreadsheet for the mod</a>`,
		],
		mod: 'glacemons',
		ruleset: ['Standard NatDex', 'Terastal Clause', 'OHKO Clause', 'Evasion Moves Clause', 'Species Clause', 'Dynamax Clause', 'Sleep Clause Mod', 'Data Mod', 'Mega Data Mod'],
		banlist: ['AG', 'Uber', 'Power Construct', 'Berserk Gene', 'Arena Trap', 'Sand Veil', 'Snow Cloak', 'Shadow Tag', 'King\'s Rock', 'Quick Claw', 'Razor Fang', 'Baton Pass', 'Last Respects', 'Shed Tail',
			// 'Blastoise + Parallel Mega Orb', 'Salamence + Parallel Mega Orb', 'Gengar + Parallel Mega Orb', 'Alakazam + Parallel Mega Orb', 'Blaziken + Parallel Mega Orb', 'Lucario + Parallel Mega Orb', 'Gallade + Parallel Mega Orb', 
			'Special Tera Orb',
		],
		unbanlist: ['Light of Ruin'],
		teambuilderFormat: 'National Dex',
		// onModifySpeciesPriority: 2,
		// onModifySpecies(species, target, source, effect) {
		// 	if (source?.forme && source.forme.startsWith('Mega') && source.hasItem('parallelmegaorb')) {
		// 		let newAbility = source.set.ability
		// 		const oldAbility = source.setAbility(newAbility);
		// 	}
		// 	return {...species};
		// },
	},
	{
		name: "[Gen 9] GlaceMons Uber",
		desc: [
			"<b>GlaceMons</b>: The fourth mod in the SylveMons series where Pokemon, items, abilities and moves are redesigned for Gen 9 NatDex OU (and new items, abilities and moves are added) without changing base stats.",
		],
		threads: [
			`&bullet; <a href="">Spreadsheet for the mod</a>`,
		],
		mod: 'glacemonsuber',
		ruleset: ['Standard NatDex', 'OHKO Clause', 'Evasion Moves Clause', 'Species Clause', 'Dynamax Clause', 'Sleep Clause Mod', 'Data Mod', 'Mega Data Mod'],
		banlist: ['AG', 'Berserk Gene', 'Sand Veil', 'Snow Cloak', 'King\'s Rock', 'Quick Claw', 'Razor Fang', 'Baton Pass', // 'Gengar + Parallel Mega Orb',
		],
		unbanlist: ['Light of Ruin'],
		teambuilderFormat: 'National Dex Uber',
		onModifySpeciesPriority: 2,
		onModifySpecies(species, target, source, effect) {
			if (source?.forme && source.forme.startsWith('Mega') && source.hasItem('parallelmegaorb')) {
				let newAbility = source.set.ability
				const oldAbility = source.setAbility(newAbility);
			}
			return {...species};
		},
	},
	{
		name: "[Gen 9] Hide and Seaking",
		threads: [
			`<a href="https://www.smogon.com/forums/threads/hide-and-seaking.3743214/">Hide and Seaking</a>`,
		],
		teambuilderFormat: "National Dex",
		mod: 'littleestcup',
		ruleset: ['Standard NatDex', 'OHKO Clause', 'Evasion Clause', 'Species Clause', 'Sleep Clause Mod', 'Terastal Clause', 'big dog Clause', 'Moniker Clause'],
		banlist: [
			'Uber', 'AG', 'Arena Trap', 'Moody', 'Power Construct', 'Shadow Tag', 'King\'s Rock',
			'Quick Claw', 'Razor Fang', 'Assist', 'Baton Pass', 'Last Respects', 'Shed Tail', 'Houndoominite',
		],
	},
	{
		name: "[Gen 9] Hidden Gems",
		threads: [
			`<a href="https://www.smogon.com/forums/threads/3737861/">Hidden Gems</a>`,
		],
		mod: 'hiddengems',
		ruleset: ['Standard', 'Terastal Clause', 'Sleep Moves Clause', '!Sleep Clause Mod'],
		banlist: ['Uber', 'AG', 'Arena Trap', 'Moody', 'Shadow Tag', 'King\'s Rock', 'Baton Pass', 'Last Respects', 'Shed Tail'],
	},
	{
		name: "[Gen 3] Hoenn Gaiden OU",
		desc: ["<b>Hoenn Gaiden</b>: A Gen 3 pet mod that aims to devamp Gen 4-8 Pokemon, moves and items into the Gen 3 mechanics."],
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/hoenn-gaiden-pet-mod-of-the-season.3714737/">Hoenn Gaiden on Smogon Forums</a>`,
		],
		mod: 'gen3hoenngaiden',
		ruleset: ['HG Standard', 'Data Mod', 'Freeze Clause Mod'],
		banlist: ['Uber'],
		unbanlist: ['Sand Veil'],
	},
	{
		name: "[Gen 9] Iron Fist",
		threads: [
			`<a href="https://www.smogon.com/forums/threads/.3748853/">Iron Fist</a>`,
		],
		mod: 'sharedpowerironfist',
		teambuilderFormat: "National Dex",
		ruleset: ['Standard NatDex', 'OHKO Clause', 'Evasion Moves Clause', 'Sleep Clause Mod', 'Data Mod', 'Mega Data Mod', 'Species Clause', 'Mega Rayquaza Clause', 'Big Button Rule', 'MILF Rule', 'Ohmyrod Rule', 'Serious Rule', 'Mario Kart Wii Clause'],
		banlist: ['Baton Pass', 'King\'s Rock', 'Razor Fang', 'Moody',
		'Buginium Z', 'Darkinium Z', 'Dragonium Z', 'Electrium Z', 'Fairium Z', 'Fightinium Z', 'Firium Z', 'Flyinium Z', 'Ghostium Z', 'Grassium Z', 'Groundium Z', 'Icium Z', 'Normalium Z', 'Poisonium Z', 'Psychium Z', 'Rockium Z', 'Steelium Z', 'Waterium Z',
		'Absolite', 'Houndoominite', 'Red Orb', 'Blue Orb', 'Fish', 'Diamond Hand', 'Hoenn'],
		unbanlist: ['Light of Ruin', 'Baddy Bad'],
		onValidateTeam(team, format) {
			/**@type {{[k: string]: true}}*/
			let speciesTable = {};
			let allowedTiers = ['Viable', 'Unviable', 'Untested'];
			for (const set of team) {
				let template = this.dex.species.get(set.species);
				if (!allowedTiers.includes(template.tier)) {
					return [set.species + ' is not legal in Iron Fist.'];
				}
				if (set.species === 'Mario Kart Wii' && set.ability !== 'Gorilla Tactics') {
					return [set.species + ' must use Gorilla Tactics.'];
				}
			}
		},
	},
	{
		name: "[Gen 9] Ironmons",
		desc: ["<b>Ironmons</b>: A OU based Pet Mod that aims to create new Paradox forms for existing Pokemon, both past and future.",
		      ],
		threads: [
				`&bullet; <a href="https://www.smogon.com/forums/threads/ironmons.3731566/">Ironmons on Smogon Forums</a>`
		      ],
		mod: 'ironmons',
		ruleset: ['Standard'],
		banlist: ['Uber', 'AG', 'Arena Trap', 'Moody', 'Sand Veil', 'Shadow Tag', 'Snow Cloak', 'King\'s Rock', 'Baton Pass'],
	},
	{
		name: "[Gen 9] Little Colosseum LC",
		desc: ["<b>Little Colosseum</b>: A Gen 9 Little Cup Pet Mod that aims to buff weaker LC Pokemon and nerf LC Ubers to create a more diverse metagame."],
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3749020/">Little Colosseum on Smogon Forums</a>`,
		],
		mod: 'littlecolosseum',
		teambuilderFormat: "LC",
		ruleset: ['Little Cup', 'Standard', 'Data Mod'],
		banlist: [
			'Aipom', 'Basculin-White-Striped', 'Diglett-Base', 'Dunsparce', 'Duraludon', 'Girafarig', 'Gligar',
			'Meditite', 'Misdreavus', 'Murkrow', 'Porygon', 'Qwilfish-Hisui', 'Rufflet', 'Scraggy', 'Sneasel', 'Sneasel-Hisui',
			'Snivy', 'Stantler', 'Vulpix', 'Vulpix-Alola', 'Yanma', 'Moody', 'Baton Pass', 'Sticky Web',
		],
	},
	{
	  name: "[Gen 9] Masquerade",
     desc: '<b>Masquerade</b>: A micrometa where every Pokemon has at least one Ogerpon-like Mask form that can Terastalize to change its ability.',
	  threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/masquerade-slate-2-winners.3731477/">Masquerade on Smogon Forums</a>`,
		],
     mod: 'masquerade',
	  ruleset: ['Standard', 'Data Mod', 'Terastal Clause'],
	  banlist: ['Uber', 'AG', 'Arena Trap', 'Moody', 'Sand Veil', 'Shadow Tag', 'Snow Cloak', 'King\'s Rock',
					'Baton Pass', 'Last Respects', 'Shed Tail', 'Cornerstone Mask'],
		onValidateTeam(team, format) {
			let speciesTable = {};
			let allowedTiers = ['MSQ'];
			for (const set of team) {
				let template = this.dex.species.get(set.species);
				if (template.tier !== 'MSQ') {
					return [set.species + ' is not legal in [Gen 9] Masquerade.'];
				}
			}
		},
	},
	{
		name: "[Gen 9] Megas for All: Paldea",
		desc: ["<b>Megas for All</b>: A Pet Mod that aims to create unique Mega Evolutions for every fully evolved Pokémon. Current season is focused on the Paldea dex, pre DLC!",
		      ],
		threads: [
				`&bullet; <a href="https://www.smogon.com/forums/threads/3671140/">Megas for All v7 on Smogon Forums</a>`,
				`&bullet; <a href="https://docs.google.com/spreadsheets/d/1TdeAUUtjh0f_tcIBllbF_imgepwV-dV2YomoTCRlPgI/edit?usp=sharing">Spreadsheet</a>`,
				`&bullet; <a href="http://megasforall.wikidot.com/">Wiki</a>`
		      ],
		ruleset: ['Standard', 'Z-Move Clause', 'Terastal Clause', 'Mega Data Mod'],
		banlist: [
			'AG', 'Uber',
			'Arena Trap', 'Moody', 'Power Construct', 'Shadow Tag',
			'Baton Pass', 'Last Respects', 'Shed Tail',
			'King\'s Rock', 'Razor Fang', 'Quick Claw',
		],
		onValidateSet(set) {
			const problems: string[] = [];
			const setHas: {[k: string]: true} = {};
			let species = this.dex.species.get(set.species);
			let item = this.dex.items.get(set.item);
			let tierSpecies = species;

			if (item.megaEvolves === species.name) {
				if (item.megaStone && this.dex.species.get(item.megaStone).tier !== 'Mega') return [item.name + ' is not a legal Mega Stone.'];
			}
		},
		onHitPriority: 1,
		onHit(target, source, move) {
			const forte = source.m.forte;
			if (move?.category !== 'Status' && forte) {
				this.singleEvent('Hit', forte, {}, target, source, move);
				if (forte.self) this.singleEvent('Hit', forte.self, {}, source, source, move);
				this.singleEvent('AfterHit', forte, {}, target, source, move);
			}
		},
		onAfterSubDamage(damage, target, source, move) {
			const forte = source.m.forte;
			if (move?.category !== 'Status' && forte) {
				this.singleEvent('AfterSubDamage', forte, null, target, source, move, damage);
			}
		},
		onModifySecondaries(secondaries, target, source, move) {
			if (secondaries.some(s => !!s.self)) move.selfDropped = false;
		},
		onAfterMoveSecondaryPriority: 1,
		onAfterMoveSecondarySelf(source, target, move) {
			const forte = source.m.forte;
			if (move?.category !== 'Status' && forte) {
				this.singleEvent('AfterMoveSecondarySelf', forte, null, source, target, move);
			}
		},
		onBasePowerPriority: 1,
		onBasePower(basePower, source, target, move) {
			const forte = source.m.forte;
			if (move.category !== 'Status' && forte?.onBasePower) {
				forte.onBasePower.call(this, basePower, source, target, move);
			}
		},
		pokemon: {
			getItem() {
				const move = this.battle.dex.moves.get(this.m.forte);
				if (!move.exists) return Object.getPrototypeOf(this).getItem.call(this);
				return {
					...this.battle.dex.items.get('mail'),
					name: move.name, id: move.id, ignoreKlutz: true, onTakeItem: false,
				};
			},
		},
		mod: 'm4apaldea',
	},
	{
		name: "[Gen 9] M4A Paldea VGC",
		desc: ["Megas for All v7 but it's a VGC format",
		      ],
		threads: [
				`&bullet; <a href="https://www.smogon.com/forums/threads/3671140/">Megas for All v7 on Smogon Forums</a>`,
				`&bullet; <a href="https://docs.google.com/spreadsheets/d/1TdeAUUtjh0f_tcIBllbF_imgepwV-dV2YomoTCRlPgI/edit?usp=sharing">Spreadsheet</a>`,
				`&bullet; <a href="http://megasforall.wikidot.com/">Wiki</a>`
		      ],
		gameType: 'doubles',
		ruleset: ['Team Preview', 'Species Clause', 'Nickname Clause', 'Item Clause', 'Cancel Mod', 'Picked Team Size = 4', 'Adjust Level = 50', 'VGC Timer', 'Mega Data Mod', 'Terastal Clause'],
		banlist: [
			'Koraidon', 'Miraidon', 'Pecharunt',
		],
		mod: 'm4apaldea',
		onValidateSet(set) {
			const problems: string[] = [];
			const setHas: {[k: string]: true} = {};
			let species = this.dex.species.get(set.species);
			let item = this.dex.items.get(set.item);
			let tierSpecies = species;

			if (item.megaEvolves === species.name) {
				if (item.megaStone && this.dex.species.get(item.megaStone).tier !== 'Mega') return [item.name + ' is not a legal Mega Stone.'];
			}
		},
	},
	{
		name: "[Gen 9] M4A OU NatDex",
		desc: ["<b>Megas for All</b>: A Pet Mod that aims to create unique Mega Evolutions for every fully evolved Pokémon. Plays like National Dex, just with more Megas.",
		      ],
		threads: [
				`&bullet; <a href="https://www.smogon.com/forums/threads/megas-for-all-v7-slate-33-electrode-golurk-and-silvally-please-read-the-first-post-fully-playable-through-slate-32.3671140/">Megas for All v7 on Smogon Forums</a>`,
				`&bullet; <a href="https://docs.google.com/spreadsheets/d/1TdeAUUtjh0f_tcIBllbF_imgepwV-dV2YomoTCRlPgI/edit?usp=sharing">Spreadsheet</a>`,
				`&bullet; <a href="http://megasforall.wikidot.com/">Wiki</a>`
		      ],
		ruleset: ['Standard NatDex', 'Terastal Clause', 'OHKO Clause', 'Evasion Moves Clause', 'Species Clause', 'Dynamax Clause', 'Sleep Clause Mod', 'Data Mod', 'Mega Data Mod'],
		// ruleset: ['Standard NatDex', 'Standard M4A', 'Mega Data Mod', 'Terastal Clause'],
		mod: 'm4ag9',
		banlist: ['Slowking-Galar-Mega', 'Slowking-Galar + Slowkinite', 'Uber', 'AG', 'Baton Pass', 'King\'s Rock', 'Razor Fang', 'Moody',
			'Arena Trap', 'Power Construct', 'Shadow Tag', 'Snow Cloak', 'Sand Veil'
		],
		// teambuilderFormat: 'OU',
		onValidateTeam(team, format) {
			let speciesTable = {};
			let allowedTiers = ['Mega of the Day!', 'Popular', 'Popular Megas', 'Other Megas', 'Heat!', 'NFE'];
			for (const set of team) {
				let template = this.dex.species.get(set.species);
				if (!allowedTiers.includes(template.tier)) {
					return [set.species + ' is not legal in M4A OU NatDex.'];
				}
			}
		},
	},
	{
		name: "[Gen 8] M4A OU NatDex",
		desc: ["<b>Megas for All</b>: A Pet Mod that aims to create unique Mega Evolutions for every fully evolved Pokémon. Plays like National Dex, just with more Megas.",
		      ],
		threads: [
				`&bullet; <a href="https://www.smogon.com/forums/threads/megas-for-all-v7-slate-33-electrode-golurk-and-silvally-please-read-the-first-post-fully-playable-through-slate-32.3671140/">Megas for All v7 on Smogon Forums</a>`,
				`&bullet; <a href="https://docs.google.com/spreadsheets/d/1TdeAUUtjh0f_tcIBllbF_imgepwV-dV2YomoTCRlPgI/edit?usp=sharing">Spreadsheet</a>`,
				`&bullet; <a href="http://megasforall.wikidot.com/">Wiki</a>`
		      ],
		ruleset: ['Standard NatDex', 'Terastal Clause', 'OHKO Clause', 'Evasion Moves Clause', 'Species Clause', 'Dynamax Clause', 'Sleep Clause Mod', 'Data Mod', 'Mega Data Mod'],
		// ruleset: ['Standard NatDex', 'Standard M4A', 'Mega Data Mod', 'Dynamax Clause'],
		mod: 'm4av6',
		banlist: ['Slowking-Galar-Mega', 'Slowking-Galar + Slowkinite', 'Uber', 'AG', 'Baton Pass', 'King\'s Rock', 'Razor Fang', 'Moody',
			'Arena Trap', 'Power Construct', 'Shadow Tag', 'Snow Cloak', 'Sand Veil'
		],
		// teambuilderFormat: 'OU',
		onValidateTeam(team, format) {
			let speciesTable = {};
			let allowedTiers = ['Mega of the Day!', 'Popular', 'Popular Megas', 'Other Megas', 'Heat!', 'NFE'];
			for (const set of team) {
				let template = this.dex.species.get(set.species);
				if (!allowedTiers.includes(template.tier)) {
					return [set.species + ' is not legal in M4A OU NatDex.'];
				}
			}
		},
	},
	{
		name: "[Gen 6] Megas Revisited",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3713949/">Megas Revisited on Smogon Forums</a>`,
			`&bullet; <a href="https://docs.google.com/spreadsheets/d/1wK11cPHnPCmH7JFss6leKW6_-cumn3DuZA-YMzrzF-U/edit?usp=sharing">Spreadsheet</a>`,
		],
		mod: 'gen6megasrevisited',
		ruleset: ['Standard', 'Swagger Clause', 'Mega Data Mod'],
		banlist: ['Uber', 'Arena Trap', 'Shadow Tag', 'Soul Dew', 'Baton Pass', 'Blaziken + Speed Boost'],
	},
	{
		name: "[Gen 9] MetaMons",
		desc: [
			"In this Pet Mod, we will aim to create a decently-sized micrometa that will expand in the unique niches of some Pokémon, giving them the spotlight after all the time they have been waiting.",
		],
		threads: [
			'&bullet; <a href="https://www.smogon.com/forums/threads/metamons-slate-3-galarian-slowbro-sableye-grapploct.3703361/">MetaMons</a>',
			'&bullet; <a href="https://docs.google.com/spreadsheets/d/142lxuFtTgQCY56Wz_ZjAGaqlk7HgJj0CVKMChQcei1U/edit#gid=0">Spreadsheet</a>',
		],
		mod: 'metamons',
		ruleset:['Standard NatDex', 'OHKO Clause', 'Evasion Moves Clause', 'Species Clause', 'Terastal Clause', 'Dynamax Clause', 'Sleep Clause Mod', 'Data Mod', 'Mega Data Mod', 'Z-Move Clause'],
		banlist: [
			'Arena Trap', 'Moody', 'Shadow Tag', 'Baton Pass', 'Beedrillite'
		],
		teambuilderFormat: "National Dex",
		onValidateTeam(team, format) {
			/**@type {{[k: string]: true}} */
			let speciesTable = {};
			for (const set of team) {
				let template = this.dex.species.get(set.species);
				if (template.tier !== 'MetaMons') {
					return [set.species + ' is not usable in MetaMons.'];
				}
			}
		},
	},
	{
        name: "[Gen 9] Micrometa Mafia 2",
        desc: [
            "micrometa mafia 2",
        ],
        threads: [
            `&bullet; <a href="https://www.youtube.com/shorts/bbZCltuyZlM">Micrometa Mafia 2 on Smogon Forums</a>`,
              ],
        ruleset: ['Standard NatDex', 'Terastal Clause', 'OHKO Clause', 'Evasion Moves Clause', 'Species Clause', 'Dynamax Clause', 'Sleep Clause Mod', 'Data Mod', 'Z-Move Clause'],
        banlist: [],
		teambuilderFormat: "National Dex",
        onValidateTeam(team, format) {
            /**@type {{[k: string]: true}} */
            let speciesTable = {};
            for (const set of team) {
                let template = this.dex.species.get(set.species);
                if (template.tier !== 'MMM2') {
                    return [set.species + ' is not usable in Micrometa Mafia 2.'];
                }
            }
        },
        mod: 'mmm2',
    },
	{
        name: "[Gen 9] Micrometa Mafia 3",
        desc: [
            "micrometa mafia 3",
        ],
        threads: [
            `&bullet; <a href="https://www.youtube.com/shorts/bbZCltuyZlM">Micrometa Mafia 3 on Smogon Forums</a>`,
              ],
        ruleset: ['Standard NatDex', 'Terastal Clause', 'OHKO Clause', 'Evasion Moves Clause', 'Species Clause', 'Dynamax Clause', 'Sleep Clause Mod', 'Data Mod', 'Z-Move Clause'],
        banlist: ['Baton Pass', 'Assist', 'Last Respects', 'Shed Tail', 'King\'s Rock', 'Razor Fang', 'Quick Claw', 'Arena Trap', 'Moody', 'Power Construct', 'Shadow Tag'],
		teambuilderFormat: "National Dex",
        onValidateTeam(team, format) {
            /**@type {{[k: string]: true}} */
            let speciesTable = {};
            for (const set of team) {
                let template = this.dex.species.get(set.species);
                if (template.tier !== 'MMM3') {
                    return [set.species + ' is not usable in Micrometa Mafia 3.'];
                }
            }
        },
        mod: 'mmm3',
    },
	{
		name: "[Gen 9] More Balanced Hackmons v4",
		desc: `Balanced Hackmons with National Dex elements mixed in.`,
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3711482/">More Balanced Hackmons v4</a>`,
		],
		mod: 'morebalancedhackmons',
		// debug: true,
		ruleset: ['-Nonexistent', 'Standard NatDex', 'Forme Clause', 'Sleep Moves Clause', 'Ability Clause = 2', 'OHKO Clause', 'Evasion Moves Clause', 'Dynamax Clause', 'CFZ Clause', 'Terastal Clause', '!Obtainable'],
		banlist: [
			'Eternatus-Eternamax', 'Groudon-Primal', 'Rayquaza-Mega', 'Shedinja', 'Arena Trap',
			'Gorilla Tactics', 'Huge Power', 'Illusion', 'Innards Out', 'Magnet Pull', 'Moody', 'Parental Bond',
			'Stakeout', 'Wonder Guard', 'Gengarite', 'Belly Drum', 'Chatter', 'Double Iron Bash', 'Electrify',
			'Last Respects', 'Octolock', 'Revival Blessing', 'Shed Tail', 'Shell Smash', 'Comatose + Sleep Talk', 'Imprison + Transform',
		],
		restricted: ['Arceus'],
		onValidateTeam(team, format) {
			// baseSpecies:count
			const restrictedPokemonCount = new Map<string, number>();
			for (const set of team) {
				const species = this.dex.species.get(set.species);
				if (!this.ruleTable.isRestrictedSpecies(species)) continue;
				restrictedPokemonCount.set(species.baseSpecies, (restrictedPokemonCount.get(species.baseSpecies) || 0) + 1);
			}
			for (const [baseSpecies, count] of restrictedPokemonCount) {
				if (count > 1) {
					return [
						`You are limited to one ${baseSpecies} forme.`,
						`(You have ${count} ${baseSpecies} forme${count === 1 ? '' : 's'}.)`,
					];
				}
			}
		},
	},
	{
		name: "[Gen 9] Multiverse",
		threads: [
			'&bullet; <a href="https://www.smogon.com/forums/threads/multiverse-gen-9-slate-4-voting.3723507/">Multiverse</a>',
			'&bullet; <a href="https://docs.google.com/spreadsheets/d/1Bu2Mm9L7vURggEI9mkkFM7mo-eLtLj2K95f4Rchaolg/edit?usp=sharing">Spreadsheet</a>',
		],
		mod: 'gen9multiverse',
		ruleset: ['Standard', 'Terastal Clause', 'Data Mod'],
		banlist: ['Moody', 'Baton Pass'],
		onValidateTeam(team, format) {
			/**@type {{[k: string]: true}}*/
			let speciesTable = {};
			let allowedTiers = ['MV'];
			for (const set of team) {
				let template = this.dex.species.get(set.species);
				if (!allowedTiers.includes(template.tier)) {
					return [set.species + ' is not legal in Multiverse.'];
				}
			}
		},
	},
	{
	  name: "[Gen 9] Natural Selection",
     desc: '<b>Natural Selection</b>: A micrometa where Pokemon actively evolve, fill new niches, and go extinct based on usage stats.',
	  threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/natural-selection.3732415/">Natural Selection on Smogon Forums</a>`,
		],
     mod: 'naturalselection',
	  ruleset: ['Standard', 'Data Mod', 'Terastal Clause'],
	  banlist: ['Uber', 'AG', 'Arena Trap', 'Moody', 'Sand Veil', 'Shadow Tag', 'Snow Cloak', 'King\'s Rock', 'Baton Pass', 'Last Respects', 'Shed Tail'],
		onValidateTeam(team, format) {
			let speciesTable = {};
			let allowedTiers = ['NS'];
			for (const set of team) {
				let template = this.dex.species.get(set.species);
				if (template.tier !== 'NS') {
					return [set.species + ' is not legal in [Gen 9] Natural Selection.'];
				}
			}
		},
	},
	{
		name: "[Gen 6] NEXT OU",
		mod: 'gennext',
		searchShow: false,
		challengeShow: false,
		ruleset: ['Obtainable', 'Standard NEXT', 'Team Preview'],
		banlist: ['Uber'],
	},
	{
	  name: "[Gen 9] OU Theorymons",
     desc: '<b>[Gen 9] OU Theorymons</b>: Fixing niche and unseen Pokemon in the SV OU Metagame with small buffs.',
	  threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/sv-ou-theorymon.3723892/">OU Theorymon on Smogon Forums</a>`,
		],
     mod: 'outheorymons',
	  ruleset: ['Standard', 'Data Mod'],
	  banlist: ['Uber', 'AG', 'Arena Trap', 'Moody', 'Sand Veil', 'Shadow Tag', 'Snow Cloak', 'King\'s Rock', 'Baton Pass', 'Last Respects', 'Shed Tail'],
	},
	{
		name: "[Gen 9] Paleomons",
	   desc: '<b>[Gen 9] Paleomons</b>: In this mod, we will be creating an SV OU-based micrometa of Pokémon based on real critters from the Paleozoic, Mesozoic, and Cenozoic eras.',
		threads: [
			'&bullet; <a href="https://www.smogon.com/forums/threads/paleomons-slate-1-winners.3727753/">Paleomons</a>',
		//	'&bullet; <a href="https://docs.google.com/spreadsheets/d/1wbFWGR5pVcnTTyuy7vAUSrPxqSZsNF-Okx-v1hvD2Vc/edit?usp=sharing">Spreadsheet</a>',
		],
		mod: 'paleomons',
		teambuilderFormat: "National Dex",
	  ruleset: ['Standard', 'Terastal Clause', 'Data Mod', '!! Min Source Gen = 8'],
		banlist: [
			'Arena Trap', 'Moody', 'Shadow Tag', 'Baton Pass',
		],
		onValidateTeam(team, format) {
			/**@type {{[k: string]: true}} */
			let speciesTable = {};
			for (const set of team) {
				let template = this.dex.species.get(set.species);
				if (template.tier !== 'Paleomons') {
					return [set.species + ' is not usable in Paleomons.'];
				}
			}
		},
	},
	{
		name: "[Gen 9] Poketypos",
		desc: `<b>[Gen 9] Poketypos</b>: A NatDex metagame that alters the names of Pokemon and change said Pokemon to fit their new name.`,
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/pok%C3%A9typos-slate-2-single-stage-pokemon.3711498/">Poketypos on Smogon Forums</a>`,
		],
		mod: 'poketypos',
		ruleset: ['Standard NatDex', 'OHKO Clause', 'Evasion Moves Clause', 'Terastal Clause', 'Species Clause', 'Dynamax Clause', 'Sleep Clause Mod', 'Z-Move Clause', 'Data Mod', 'Mega Data Mod'],
		banlist: [
			'Arena Trap', 'Moody', 'Shadow Tag', 'Baton Pass',
		],
		onValidateTeam(team, format) {
			/**@type {{[k: string]: true}} */
			let speciesTable = {};
			let allowedTiers = ['Poketypos', 'Poketypos NFE', 'Poketypos LC'];
			for (const set of team) {
				let template = this.dex.species.get(set.species);
				if (template.tier !== 'Poketypos' && template.tier !== 'Poketypos NFE' && template.tier !== 'Poketypos LC') {
					return [set.species + ' is not legal in the Poketypos format.'];
				}
			}
		},
	},
	{
		name: "[Gen 1] RBY CAP",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3737699/">RBY CAP on Smogon Forums</a>`,
		],
		mod: 'gen1rbycap',
		ruleset: ['Standard', 'Data Mod'],
		banlist: ['Uber', 'Camouflage'],
	},
	{
		name: "[Gen 9] Roulettemons 2",
		desc: `<b>[Gen 9] Roulettemons 2</b>: A meta where the only legal Pokemon are randomly-generated Fakemon.`,
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3717145/">Roulettemons 2 on Smogon Forums</a>`,
		],
		mod: 'roulettemons2',
		ruleset: ['Standard NatDex', 'OHKO Clause', 'Evasion Moves Clause', 'Species Clause', 'Terastal Clause', 'Dynamax Clause', 'Sleep Clause Mod', 'Z-Move Clause', 'Data Mod', 'Mega Data Mod'],
		banlist: [
			'Arena Trap', 'Moody', 'Shadow Tag', 'Baton Pass',
		],
		onValidateTeam(team, format) {
			let speciesTable = {};
			let allowedTiers = ['R2'];
			for (const set of team) {
				let template = this.dex.species.get(set.species);
				if (template.tier !== 'R2') {
					return [set.species + ' is not legal in [Gen 9] Roulettemons 2.'];
				}
			}
		},
	},
	{
		name: "[Gen 9] Roulettemons 2 Ubers",
		desc: `<b>[Gen 9] Roulettemons 2 Ubers</b>: A broken meta where the only legal Pokemon are randomly-generated Fakemon.`,
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3717145/">Roulettemons 2 on Smogon Forums</a>`,
		],
		mod: 'roulettemons2',
		ruleset: ['Standard NatDex', 'OHKO Clause', 'Evasion Moves Clause', 'Species Clause', 'Dynamax Clause', 'Sleep Clause Mod', 'Z-Move Clause', 'Data Mod', 'Mega Data Mod'],
		banlist: [
			'Arena Trap', 'Moody', 'Shadow Tag', 'Baton Pass',
		],
		onValidateTeam(team, format) {
			let speciesTable = {};
			let allowedTiers = ['R2', 'R2Ubers'];
			for (const set of team) {
				let template = this.dex.species.get(set.species);
				if (template.tier !== 'R2' && template.tier !== 'R2Ubers') {
					return [set.species + ' is not legal in [Gen 9] Roulettemons 2.'];
				}
			}
		},
	},
	{
		name: "[Gen 9] ReGeneration",
	   desc: [
			"In this Pet Mod, we will redesign the competitive functions of the Kantonian Pokemon after a Paldean counterpart.",
		],
		threads: [
			'&bullet; <a href="https://www.smogon.com/forums/threads/regeneration-slate-4-seadra-dodrio-wigglytuff.3718196/">ReGeneration</a>',
			'&bullet; <a href="https://docs.google.com/spreadsheets/d/1wbFWGR5pVcnTTyuy7vAUSrPxqSZsNF-Okx-v1hvD2Vc/edit?usp=sharing">Spreadsheet</a>',
		],
		mod: 'regeneration',
		ruleset: ['Standard NatDex', 'OHKO Clause', 'Evasion Moves Clause', 'Species Clause', 'Dynamax Clause', 'Sleep Clause Mod'],
		banlist: [
			'Arena Trap', 'Moody', 'Shadow Tag', 'Baton Pass',
		   'Aerodactylite', 'Alakazite', 'Beedrillite', 'Blastoisinite', 'Charizardite X', 'Charizardite Y', 'Gengarite',
         'Gyaradosite', 'Kangaskhanite', 'Mewtwonite X', 'Mewtwonite Y', 'Pidgeotite', 'Pinsirite', 'Slowbronite', 'Venusaurite'
		],
		onValidateTeam(team, format) {
			/**@type {{[k: string]: true}} */
			let speciesTable = {};
			for (const set of team) {
				let template = this.dex.species.get(set.species);
				if (template.tier !== 'ReGeneration' && template.tier !== 'ReGeneration NFE' && template.tier !== 'ReGeneration LC') {
					return [set.species + ' is not usable in ReGeneration.'];
				}
			}
		},
	},
	{
		name: "[Gen 9] Regional Evolutions",
		desc: 'A NatDex micrometa, with only new regional forms and regional evolutions!',
		threads: [],
		ruleset: ['Standard NatDex', 'OHKO Clause', 'Evasion Moves Clause', 'Evasion Items Clause', 'Species Clause', 'Sleep Clause Mod', 'Z-Move Clause', 'Data Mod', 'Mega Data Mod', 'Terastal Clause'],
		banlist: ['Arena Trap', 'Moody', 'Sand Veil', 'Shadow Tag', 'Snow Cloak', 'King\'s Rock', 'Quick Claw', 'Baton Pass'],
		teambuilderFormat: 'National Dex',
		onValidateTeam(team, format) {
			let speciesTable = {};
			let allowedTiers = ['RegEvo', 'RegEvo NFE'];
			for (const set of team) {
				let template = this.dex.species.get(set.species);
				if (!allowedTiers.includes(template.tier)) {
					return [set.species + ' is not legal in RegEvo.'];
				}
			}
		},
		mod: 'regionalevolutions',
	},
	{
		name: "[Gen 9] Return to Orre: Tercera",
	   desc: [
			"This is a micrometa that only uses Pokemon obtainable in Colosseum and XD.",
		],
		threads: [
			'&bullet; <a href="https://www.smogon.com/forums/threads/return-to-orre-tercera-open-for-submissions.3722389/">RTO: Tercera</a>',
		],
		mod: 'returntoorretercera',
		ruleset: ['Standard NatDex', 'Terastal Clause', 'Picked Team Size = 3', 'Adjust Level = 50', 'VGC Timer'],
		banlist: [
			'Arena Trap', 'Moody', 'Shadow Tag', 'Baton Pass',
		   'Aerodactylite', 'Alakazite', 'Beedrillite', 'Blastoisinite', 'Charizardite X', 'Charizardite Y', 'Gengarite',
         'Gyaradosite', 'Kangaskhanite', 'Mewtwonite X', 'Mewtwonite Y', 'Pidgeotite', 'Pinsirite', 'Slowbronite', 'Venusaurite',
			'Lugia', 'Ho-Oh', 'All Items'
		],
		onValidateTeam(team, format) {
			/**@type {{[k: string]: true}} */
			let speciesTable = {};
			for (const set of team) {
				let template = this.dex.species.get(set.species);
				if (template.tier !== 'TERCERA' && template.tier !== 'TERCERA NFE') {
					return [set.species + ' is not usable in Return to Orre: Tercera.'];
				}
			}
		},
	},
	{
		name: "[Gen 9] Set in Stone",
		desc: [
			"<b>Set in Stone</b>: A micrometa where Pokemon are customized based on a combination of two player's set ideas.",
		],
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/set-in-stone-phase-2-slate-2.3722451/post-9648171"> Set in Stone on Smogon Forums</a>`,
		      ],
		ruleset: ['Standard NatDex', 'Terastal Clause', 'OHKO Clause', 'Evasion Moves Clause', 'Species Clause', 'Dynamax Clause', 'Sleep Clause Mod', 'Z-Move Clause', 'Data Mod', 'Mega Data Mod'],
		banlist: [],
		onValidateTeam(team, format) {
			/**@type {{[k: string]: true}} */
			let speciesTable = {};
			for (const set of team) {
				let template = this.dex.species.get(set.species);
				if ( template.tier !== 'SS') {
					return [set.species + ' is not usable in Set in Stone.'];
				}
			}
		},
		mod: 'setinstone',
	},
	{
		name: "[Gen 9] Secret Santa",
	   desc: '<b>[Gen 9] Secret Santa</b>: One person sets restrictions for another to follow in the creation of a fakemon".',
		threads: [
			'&bullet; <a href="https://www.smogon.com/forums/threads/secret-santa-the-pet-mod.3727745/">Secret Santa</a>',
			'https://docs.google.com/spreadsheets/d/1IPFlVP4osQhGtjNRheycCX0AnZiUVipumGwqKdhOS2s/edit#gid=1272593335">Spreadsheet</a>',
		],
		mod: 'secretsanta',
	  ruleset: ['Standard', 'Terastal Clause', 'Data Mod', '+Past'],
		banlist: [
			'Arena Trap', 'Moody', 'Shadow Tag', 'Baton Pass',
		],
		onValidateTeam(team, format) {
			/**@type {{[k: string]: true}} */
			let speciesTable = {};
			for (const set of team) {
				let template = this.dex.species.get(set.species);
				if (template.tier !== 'santa') {
					return [set.species + ' is not usable in Secret Santa.'];
				}
			}
		},
	},
	/* still work in progress
	{
		name: "[Gen 9] Super Smash OMs",
		desc: [
			"<b>Super Smash Stereotypes</b>: A project that aims to create a micrometa containing a Pokemon from other mods for all 171 possible types.",
		],
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/super-smash-stereotypes-fire-grass-water.3690227/">Super Smash Mods Melee on Smogon Forums</a>`,
		      ],
		ruleset: ['Standard', 'Z-Move Clause', 'Data Mod', 'Mega Data Mod'],
		banlist: ['Baton Pass'],
		onValidateTeam(team, format) {
			@type {{[k: string]: true}} 
			let speciesTable = {};
			for (const set of team) {
				let template = this.dex.species.get(set.species);
				let allowedTiers = ['Flipped', 'Tier Shift', 'Convergence', 'Mix and Mega', 'STABmons', 'Inheritance', 'Re-Evolution', 'Pokebilities', 'Sketchmons', 'Cross Evolution', 'Almost Any Ability', '350 Cup', 'Frantic Fusions', 'Bonus Type', 'Revelationmons', 'Nature Swap','Formemons'];
				if (!allowedTiers.contains(template.tier)) {
					return [set.species + ' is not usable in Super Smash OMs.'];
				}
			}
		},
		mod: 'supersmashoms',
	},*/
	{
		name: "[Gen 9] Super Smash Stereotypes",
		desc: [
			"<b>Super Smash Stereotypes</b>: A project that aims to create a micrometa containing a Pokemon from other mods for all 171 possible types.",
		],
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/super-smash-stereotypes-fire-grass-water.3690227/">Super Smash Mods Melee on Smogon Forums</a>`,
		      ],
		ruleset: ['Standard NatDex', 'Z-Move Clause', 'Data Mod', 'Mega Data Mod'],
		banlist: ['Gardevoirite', 'Chillytite', 'Bisharpite', 'Baton Pass'],
		onValidateTeam(team, format) {
			/**@type {{[k: string]: true}} */
			let speciesTable = {};
			for (const set of team) {
				let template = this.dex.species.get(set.species);
				if ( template.tier !== 'SSS') {
					return [set.species + ' is not usable in Super Smash Stereotypes.'];
				}
			}
		},
		mod: 'smashstereotypes',
	},
	{
		name: "[Gen 9] TeraForming",
		threads: [
      	`&bullet; <a href="https://docs.google.com/spreadsheets/d/1uWX0cN1m6h4fMIhmfFLPwwjiV1y0DIG-YdX8F4Q4qeg/edit?usp=sharing">Spreadsheet</a>`,
		],
		mod: 'teraforming',
		ruleset: ['Standard', 'Terastal Clause', 'Sleep Moves Clause', '!Sleep Clause Mod', 'Data Mod', 'Mega Data Mod'],
		banlist: ['Uber', 'AG', 'Arena Trap', 'Moody', 'Shadow Tag', 'King\'s Rock', 'Baton Pass', 'Last Respects', 'Shed Tail', 'Stellar Orb'],
	},
	{
		name: "[Gen 9] TeraMax",
		mod: 'teramax',
		ruleset: ['Standard', 'Data Mod'],
		banlist: [
			'Arena Trap', 'Power Construct', 'Moody', 'Shadow Tag', 'Stellar Shift', 'Stellar Shell', 'King\'s Rock', 'Baton Pass',
			'Last Respects', 'Shed Tail', 'Wishing Stone > 1', 'Light Clay',
		],
		onValidateTeam(team, format) {
			/**@type {{[k: string]: true}}*/
			let speciesTable = {};
			let allowedTiers = ['TMOU', 'TMFE', 'TMNFE', "TMLC"];
			for (const set of team) {
				let template = this.dex.species.get(set.species);
				if (!allowedTiers.includes(template.tier)) {
					return [set.species + ' is not legal in TeraMax.'];
				}
			}
		},
		onSwitchOut(pokemon) {
			const isTeraStellar = pokemon.terastallized === 'Stellar';
			if (isTeraStellar) {
			   pokemon.stellarBoostedTypes = [];
			}
		},
	},
	{
		name: "[Gen 9] Trainer Support",
		mod: 'trainersupport',
		ruleset: ['Standard', 'Trainer Support Rule', 'Sleep Moves Clause', '!Sleep Clause Mod'],
		banlist: ['Uber', 'AG', 'Arena Trap', 'Moody', 'Sand Veil', 'Shadow Tag', 'Snow Cloak', 'King\'s Rock', 'Razor Fang', 'Baton Pass', 'Last Respects', 'Shed Tail'],
	},
	{
		name: "[Gen 9] Triple Threat",
		desc: [
			"<b>Triple Threat</b>: A micrometa where Pokemon are allowed to have up to three types.",
		],
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/triple-threat-slate-2-dragon-fairy-steel.3722322">Triple Threat on Smogon Forums</a>`,
		      ],
		ruleset: ['Standard NatDex', 'OHKO Clause', 'Evasion Moves Clause', 'Species Clause', 'Dynamax Clause', 'Sleep Clause Mod', 'Z-Move Clause', 'Data Mod', 'Mega Data Mod'],
		banlist: [],
		onValidateTeam(team, format) {
			/**@type {{[k: string]: true}} */
			let speciesTable = {};
			for (const set of team) {
				let template = this.dex.species.get(set.species);
				if ( template.tier !== 'TT') {
					return [set.species + ' is not usable in Triple Threat.'];
				}
			}
		},
		mod: 'triplethreat',
	},
	{
		name: "[Gen 9] Two-Step Mons v3",
		mod: 'twostepmonsv3',
		ruleset: ['Standard NatDex', 'Terastal Clause', 'OHKO Clause', 'Evasion Moves Clause', 'Species Clause', 'Dynamax Clause', 'Sleep Clause Mod', 'Z-Move Clause', 'Data Mod', 'Mega Data Mod'],
		banlist: ['Arena Trap', 'Moody', 'Sand Veil', 'Shadow Tag', 'Snow Cloak', 'King\'s Rock', 'Razor Fang', 'Baton Pass', 'Last Respects', 'Shed Tail'],
		onValidateTeam(team, format) {
			/**@type {{[k: string]: true}} */
			let speciesTable = {};
			for (const set of team) {
				let template = this.dex.species.get(set.species);
				if ( template.tier !== 'TSMv3') {
					return [set.species + ' is not usable in Two-Step Mons v3.'];
				}
			}
		},
	},
	{
		name: "[Gen 9] Ubermons",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/ubermons-gen-9-natdex-slate-1-come-as-you-are-ogerpon-hearthflame-urshifu-landorus.3748813/">Ubermons Thread</a>`,
		],

		mod: 'gen9ubermons',
		ruleset: ['Standard NatDex', 'OHKO Clause', 'Evasion Clause', 'Species Clause', 'Sleep Clause Mod', 'Terastal Clause'],
		banlist: ['AG', 'Uber', 'Arena Trap', 'Moody', 'Power Construct', 'Shadow Tag', 'King\'s Rock', 'Quick Claw', 'Razor Fang', 'Baton Pass'],
		teambuilderFormat: "National Dex",
	},
	{
		name: "[Gen 9] VaporeMons",
		desc: [
			"<b>VaporeMons</b>: The third mod in the SylveMons series where Pokemon, items, abilities and moves are redesigned for OU (and new items, abilities and moves are added) without changing base stats.",
		],
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/vaporemons-slate-1-discussion-phase.3722917/">Thread on the Smogon Forums</a>`,
			`&bullet; <a href="https://docs.google.com/spreadsheets/d/1_5AwZ24dPu3-5m5yOyIO4OTPmW9OwIWXXzZ5IJZkj4c/edit?usp=sharing">Spreadsheet</a>`,
		],
		mod: 'gen9vaporemons',
		ruleset: ['Standard', 'Terastal Clause', 'Data Mod', 'Sleep Moves Clause', '!Sleep Clause Mod'],
		banlist: ['AG', 'Uber', 'Arena Trap', 'Moody', 'Shadow Tag', 'King\'s Rock', 'Baton Pass', 'Last Respects', 'Shed Tail', 'Light Clay', 'Fling + Segin Star Shard', /*'Damp Rock'*/],
	},
	// Start
	{
		name: "[Gen 9] VGC 20xx",
		desc: ["Custom VGC format by sugarbear",
		      ],
		threads: [
				`&bullet; <a href="https://www.smogon.com/forums/threads/vgc-20xx-slate-11-regional-starters.3748800/">VGC 20xx on Smogon Forums</a>`,
				`&bullet; <a href="https://docs.google.com/spreadsheets/d/1QCYYfW_sW13N7ZjympTL3k0QraBAa42qWl8sJRJw63s/edit?gid=0#gid=0">Spreadsheet New Stuff</a>`,
				`&bullet; <a href="https://docs.google.com/spreadsheets/d/1C-SvNhnPrRbzfZ-zPIWEi-ylVJzwhlmCCK9xK_ErGOE/edit?gid=0#gid=0">Spreadsheet Returning Stuff and Changes</a>`,
		      ],
	//	searchShow: false,
		gameType: 'doubles',
		ruleset: ['Flat Rules', '!! Adjust Level = 50', 'Min Source Gen = 9', 'VGC Timer', 'Terastal Clause', 'Data Mod', 'Force Open Team Sheets', 'Best of = 3'],
		mod: 'gen9vgc20xx',
		onValidateTeam(team, format) {
			/**@type {{[k: string]: true}}*/
			let speciesTable = {};
			let allowedTiers = ['VGC', 'VGC NFE'];
			for (const set of team) {
				let template = this.dex.species.get(set.species);
				if (!allowedTiers.includes(template.tier)) {
					return [set.species + ' is not legal in VGC 20xx.'];
				}
			}
		},
	},
	// End
	///////////////////////////////////////////////////////////////
	///////////////////// Gen 8 Pet Mods //////////////////////////
	///////////////////////////////////////////////////////////////
	{
		section: "Genzie",
		column: 1,
		// name: "gen8petmods",
	},
	{
	name: "[Gen 1] FutureProofing",
	   desc: `<b>[Gen 1] FutureProofing</b>: Adapting Dark, Steel, and Fairy-type moves and Pokemon to the Gen 1 OU metagame.`,
	   threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/gen-1-futureproofing-slate-1-discussion.3703375/">FutureProofing on Smogon Forums</a>`,
	   ],
      mod: 'gen1futureproofing',
      ruleset: ['Standard', 'Data Mod'],
		banlist: ['Uber'],
		unbanlist: ['Tyranitar', 'Gardevoir', 'Escavalier', 'Karrablast', 'Ralts', 'Kirlia', 'Pupitar', 'Larvitar',
					   'Snarl', 'Steel Wing', 'Strange Steam',
					   'Deino', 'Zweilous', 'Hydreigon', 'Scizor', 'Cottonee', 'Whimsicott',
						'Nature\'s Madness', 'Fake Tears', 'Gear Up',
						'Steelix', 'Spiritomb', 'Swablu', 'Altaria',
						'Fleur Cannon', 'Taunt', 'Heavy Slam',
						'Yveltal', 'Skarmory', 'Tapu Koko',
						'Lash Out', 'Crafty Shield', 'Sunsteel Strike',
						'Cacnea', 'Cacturne', 'Duraludon', 'Milcery', 'Alcremie',
						'Zigzagoon-Galar', 'Linoone-Galar', 'Obstagoon', 'Stunfisk-Galar', 'Mimikyu', 'Mimikyu-Busted',
						'Oshawott', 'Dewott', 'Samurott-Hisui', 'Riolu', 'Lucario', 'Popplio', 'Brionne', 'Primarina',
						'Grimmsnarl', 'Impidimp', 'Morgrem', 'Sylveon', 'Diglett-Alola', 'Dugtrio-Alola',
						'Magnezone', 'Houndour', 'Houndoom', 'Cutiefly', 'Ribombee',
						'Zarude', 'Zarude-Dada', 'Vulpix-Alola', 'Ninetales-Alola', 'Piplup', 'Prinplup', 'Empoleon',
					  ],
    },
	///////////////////////////////////////////////////////////////
	//////////////////////// Solomods /////////////////////////////
	///////////////////////////////////////////////////////////////
	{
		section: "Solomods",
		column: 2,
	},
	{
		name: "[Gen 9] Monster Hunter AG",
		teambuilderFormat: 'National Dex',
		threads: [],
		mod: 'monsterhunter',
		ruleset: ['Standard NatDex', 'Data Mod', 'Mega Data Mod', 'Status Mod'],
		banlist: [],
		onBegin() {
			this.add('-message', `Welcome to Monster Hunter Showdown!`);
			this.add('-message', `Coded by KnivesMK, it reimagines the Monsters from Monster Hunter as Competitive Pokemon!`);
			this.add('-message', `Community Discord can be found here:`);
			this.add('-message', `https://discord.gg/JjjRGVrEvc`);
			this.add('-message', `Format Wikia can be found here:`);
			this.add('-message', `https://tinyurl.com/MonHunShow`);
			this.add('-message', `Special thanks to EggEggEgg for most of the Sprites, and Kestis for the Icons!`);
		},
		onValidateTeam(team, format) {
			/**@type {{[k: string]: true}}*/
			let speciesTable = {};
			let allowedTiers = ['MHAG', 'MEGAS', 'MHOU', 'MHUU', 'MHRU'];
			for (const set of team) {
				let template = this.dex.species.get(set.species);
				if (!allowedTiers.includes(template.tier)) {
					return [set.species + ' is not legal in Monster Hunter AG.'];
				}
			}
		},
	 },
	 {
		name: "[Gen 9] Monster Hunter Doubles",
		teambuilderFormat: 'National Dex',
		threads: [],
		mod: 'monsterhunter',
		gameType: 'doubles',
		ruleset: ['Standard NatDex', 'Data Mod', 'Mega Data Mod', 'Status Mod', 'OHKO Clause', 'Evasion Clause', 'Species Clause', 'Terastal Clause', 'Baton Pass Clause'],
		banlist: ['Normalium Z', 'Fairium Z', 'Fightinium Z', 'Firium Z', 'Flyinium Z', 'Darkinium Z', 'Dragonium Z', 'Buginium Z', 'Waterium Z', 'Electrium Z', 'Ghostium Z', 'Grassium Z', 
			'Groundium Z', 'Icium Z', 'Poisonium Z', 'Psychium Z', 'Rockium Z', 'Steelium Z',  'Shed Tail'],
		onBegin() {
			this.add('-message', `Welcome to Monster Hunter Showdown!`);
			this.add('-message', `Coded by KnivesMK, it reimagines the Monsters from Monster Hunter as Competitive Pokemon!`);
			this.add('-message', `Community Discord can be found here:`);
			this.add('-message', `https://discord.gg/JjjRGVrEvc`);
			this.add('-message', `Format Wikia can be found here:`);
			this.add('-message', `https://tinyurl.com/MonHunShow`);
			this.add('-message', `Special thanks to EggEggEgg for most of the Sprites, and Kestis for the Icons!`);
		},
		onValidateTeam(team, format) {
			/**@type {{[k: string]: true}}*/
			let speciesTable = {};
			let allowedTiers = ['MHAG', 'MEGAS', 'MHOU', 'MHUU', 'MHRU'];
			for (const set of team) {
				let template = this.dex.species.get(set.species);
				if (!allowedTiers.includes(template.tier)) {
					return [set.species + ' is not legal in Monster Hunter Doubles.'];
				}
			}
		},
	 },
	 {
		name: "[Gen 9] Monster Hunter Free-For-Alls",
		teambuilderFormat: 'National Dex',
		threads: [],
		mod: 'monsterhunter',
		gameType: 'freeforall',
		ruleset: ['Standard NatDex', 'Data Mod', 'Mega Data Mod', 'Status Mod', 'OHKO Clause', 'Evasion Clause', 'Species Clause', 'Baton Pass Clause'],
		banlist: ['Shed Tail', 'Baton Pass'],
		onBegin() {
			this.add('-message', `Welcome to Monster Hunter Showdown!`);
			this.add('-message', `Coded by KnivesMK, it reimagines the Monsters from Monster Hunter as Competitive Pokemon!`);
			this.add('-message', `Community Discord can be found here:`);
			this.add('-message', `https://discord.gg/JjjRGVrEvc`);
			this.add('-message', `Format Wikia can be found here:`);
			this.add('-message', `https://tinyurl.com/MonHunShow`);
			this.add('-message', `Special thanks to EggEggEgg for most of the Sprites, and Kestis for the Icons!`);
		},
		onValidateTeam(team, format) {
			/**@type {{[k: string]: true}}*/
			let speciesTable = {};
			let allowedTiers = ['MHAG', 'MEGAS', 'MHOU', 'MHUU', 'MHRU'];
			for (const set of team) {
				let template = this.dex.species.get(set.species);
				if (!allowedTiers.includes(template.tier)) {
					return [set.species + ' is not legal in Monster Hunter FFA.'];
				}
			}
		},
	 },
	 {
		name: "[Gen 9] Monster Hunter VGC",
		teambuilderFormat: 'National Dex',
		threads: [],
		mod: 'monsterhunter',
		gameType: 'doubles',
		bestOfDefault: true,
		ruleset: ['Standard NatDex', 'Data Mod', 'Mega Data Mod', 'Status Mod', 'Species Clause', 'Item Clause', 'Picked Team Size = 4', 'Adjust Level = 50', 'VGC Timer', 
			'Open Team Sheets'],
		banlist: ['Normalium Z', 'Fairium Z', 'Fightinium Z', 'Firium Z', 'Flyinium Z', 'Darkinium Z', 'Dragonium Z', 'Buginium Z', 'Waterium Z', 'Electrium Z', 'Ghostium Z', 'Grassium Z', 
			'Groundium Z', 'Icium Z', 'Poisonium Z', 'Psychium Z', 'Rockium Z', 'Steelium Z'],
		onBegin() {
			this.add('-message', `Welcome to Monster Hunter Showdown!`);
			this.add('-message', `Coded by KnivesMK, it reimagines the Monsters from Monster Hunter as Competitive Pokemon!`);
			this.add('-message', `Community Discord can be found here:`);
			this.add('-message', `https://discord.gg/JjjRGVrEvc`);
			this.add('-message', `Format Wikia can be found here:`);
			this.add('-message', `https://tinyurl.com/MonHunShow`);
			this.add('-message', `Special thanks to EggEggEgg for most of the Sprites, and Kestis for the Icons!`);
		},
		onValidateTeam(team, format) {
			/**@type {{[k: string]: true}}*/
			let speciesTable = {};
			let allowedTiers = ['MHAG', 'MEGAS', 'MHOU', 'MHUU', 'MHRU'];
			for (const set of team) {
				let template = this.dex.species.get(set.species);
				if (!allowedTiers.includes(template.tier)) {
					return [set.species + ' is not legal in Monster Hunter VGC.'];
				}
			}
		},
	 },
	 {
		name: "[Gen 9] Monster Hunter OU",
		teambuilderFormat: 'National Dex',
		threads: [],
		mod: 'monsterhunter',
		ruleset: ['Standard NatDex', 'Data Mod', 'Mega Data Mod', 'Status Mod', 'OHKO Clause', 'Evasion Clause', 'Species Clause', 'Terastal Clause', 'Baton Pass Clause'],
		banlist: ['Normalium Z', 'Fairium Z', 'Fightinium Z', 'Firium Z', 'Flyinium Z', 'Darkinium Z', 'Dragonium Z', 'Buginium Z', 'Waterium Z', 'Electrium Z', 'Ghostium Z', 'Grassium Z', 
			'Groundium Z', 'Icium Z', 'Poisonium Z', 'Psychium Z', 'Rockium Z', 'Steelium Z',  'Shed Tail', 'Baton Pass'],
		onBegin() {
			this.add('-message', `Welcome to Monster Hunter Showdown!`);
			this.add('-message', `Coded by KnivesMK, it reimagines the Monsters from Monster Hunter as Competitive Pokemon!`);
			this.add('-message', `Community Discord can be found here:`);
			this.add('-message', `https://discord.gg/JjjRGVrEvc`);
			this.add('-message', `Format Wikia can be found here:`);
			this.add('-message', `https://tinyurl.com/MonHunShow`);
			this.add('-message', `Special thanks to EggEggEgg for most of the Sprites, and Kestis for the Icons!`);
		},
		onValidateTeam(team, format) {
			/**@type {{[k: string]: true}}*/
			let speciesTable = {};
			let allowedTiers = ['MEGAS', 'MHOU', 'MHUU', 'MHRU'];
			for (const set of team) {
				let template = this.dex.species.get(set.species);
				if (!allowedTiers.includes(template.tier)) {
					return [set.species + ' is not legal in Monster Hunter OU.'];
				}
			}
		},
	},
	{
		name: "[Gen 9] Monster Hunter UU",
		teambuilderFormat: 'National Dex',
		threads: [],
		mod: 'monsterhunter',
		ruleset: ['Standard NatDex', 'Data Mod', 'Mega Data Mod', 'Status Mod', 'OHKO Clause', 'Evasion Clause', 'Species Clause', 'Terastal Clause', 'Baton Pass Clause'],
		banlist: [ 'Narwanite', 'Astalite', 'Bazelnite', 'Magnamalite', /*'Malzenite',*/ 'Mizutsunite', 'Rajanite', 'Rathalosite', 'Rathianite', 'Valstraxite', 'Zinogrite', 
			'Normalium Z', 'Fairium Z', 'Fightinium Z', 'Firium Z', 'Flyinium Z', 'Darkinium Z', 'Dragonium Z', 'Buginium Z', 'Waterium Z', 'Electrium Z', 'Ghostium Z', 'Grassium Z', 
			'Groundium Z', 'Icium Z', 'Poisonium Z', 'Psychium Z', 'Rockium Z', 'Steelium Z',  'Shed Tail', 'Baton Pass'],
		onBegin() {
			this.add('-message', `Welcome to Monster Hunter Showdown!`);
			this.add('-message', `Coded by KnivesMK, it reimagines the Monsters from Monster Hunter as Competitive Pokemon!`);
			this.add('-message', `Format Wikia can be found here:`);
			this.add('-message', `https://tinyurl.com/MonHunShow`);
			this.add('-message', `Special thanks to EggEggEgg for most of the Sprites, and Kestis for the Icons!`);
		},
		onValidateTeam(team, format) {
			/**@type {{[k: string]: true}}*/
			let speciesTable = {};
			let allowedTiers = ['MHUU', 'MHRU'];
			for (const set of team) {
				let template = this.dex.species.get(set.species);
				if (!allowedTiers.includes(template.tier)) {
					return [set.species + ' is not legal in Monster Hunter UU.'];
				}
			}
		},
	},
	{
		name: "[Gen 9] Monster Hunter RU",
		teambuilderFormat: 'National Dex',
		threads: [],
		mod: 'monsterhunter',
		ruleset: ['Standard NatDex', 'Data Mod', 'Mega Data Mod', 'Status Mod', 'OHKO Clause', 'Evasion Clause', 'Species Clause', 'Terastal Clause', 'Baton Pass Clause'],
		banlist: [ 'Narwanite', 'Astalite', 'Bazelnite', 'Magnamalite', /*'Malzenite',*/ 'Mizutsunite', 'Rajanite', 'Rathalosite', 'Rathianite', 'Valstraxite', 'Zinogrite', 
			'Normalium Z', 'Fairium Z', 'Fightinium Z', 'Firium Z', 'Flyinium Z', 'Darkinium Z', 'Dragonium Z', 'Buginium Z', 'Waterium Z', 'Electrium Z', 'Ghostium Z', 'Grassium Z', 
			'Groundium Z', 'Icium Z', 'Poisonium Z', 'Psychium Z', 'Rockium Z', 'Steelium Z',  'Shed Tail', 'Baton Pass'],
		onBegin() {
			this.add('-message', `Welcome to Monster Hunter Showdown!`);
			this.add('-message', `Coded by KnivesMK, it reimagines the Monsters from Monster Hunter as Competitive Pokemon!`);
			this.add('-message', `Format Wikia can be found here:`);
			this.add('-message', `https://tinyurl.com/MonHunShow`);
			this.add('-message', `Special thanks to EggEggEgg for most of the Sprites, and Kestis for the Icons!`);
		},
		onValidateTeam(team, format) {
			/**@type {{[k: string]: true}}*/
			let speciesTable = {};
			let allowedTiers = ['MHRU'];
			for (const set of team) {
				let template = this.dex.species.get(set.species);
				if (!allowedTiers.includes(template.tier)) {
					return [set.species + ' is not legal in Monster Hunter RU.'];
				}
			}
		},
	},
	{
		section: "Official Smogon Formats",
		column: 3,
		// name: "officialsmogonformats",
	},
	{
		name: "[Gen 9] OU",

		mod: 'gen9',
		ruleset: ['Standard', 'Sleep Moves Clause', '!Sleep Clause Mod'],
		banlist: ['Uber', 'AG', 'Arena Trap', 'Moody', 'Sand Veil', 'Shadow Tag', 'Snow Cloak', 'King\'s Rock', 'Razor Fang', 'Baton Pass', 'Last Respects', 'Shed Tail'],
	},
	{
		name: "[Gen 9] LC",
		mod: 'gen9',
		ruleset: ['Little Cup', 'Standard'],
		banlist: [
			'Aipom', 'Basculin-White-Striped', 'Cutiefly', 'Diglett-Base', 'Dunsparce', 'Duraludon', 'Flittle', 'Gastly', 'Girafarig', 'Gligar',
			'Meditite', 'Misdreavus', 'Murkrow', 'Porygon', 'Qwilfish-Hisui', 'Rufflet', 'Scraggy', 'Scyther', 'Sneasel', 'Sneasel-Hisui',
			'Snivy', 'Stantler', 'Vulpix', 'Vulpix-Alola', 'Yanma', 'Moody', 'Baton Pass', 'Sticky Web',
		],
	},
	{
		name: "[Gen 9] Anything Goes",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3710911/">AG Metagame Discussion</a>`,
		],

		mod: 'gen9',
		ruleset: ['Min Source Gen = 9', 'Obtainable', 'Team Preview', 'HP Percentage Mod', 'Cancel Mod', 'Endless Battle Clause'],
	},
	{
		name: "[Gen 9] Custom Game",

		mod: 'gen9',
		searchShow: false,
		debug: true,
		battle: {trunc: Math.trunc},
		// no restrictions, for serious (other than team preview)
		ruleset: ['Team Preview', 'Cancel Mod', 'Max Team Size = 24', 'Max Move Count = 24', 'Max Level = 9999', 'Default Level = 100'],
	},
	{
		name: "[Gen 9] Doubles OU",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3710876/">Doubles OU Sample Teams</a>`,
		],

		mod: 'gen9',
		gameType: 'doubles',
		ruleset: ['Standard Doubles'],
		banlist: ['DUber', 'Shadow Tag'],
	},
	{
		name: "[Gen 9] Doubles Custom Game",

		mod: 'gen9',
		gameType: 'doubles',
		searchShow: false,
		battle: {trunc: Math.trunc},
		debug: true,
		// no restrictions, for serious (other than team preview)
		ruleset: ['Team Preview', 'Cancel Mod', 'Max Team Size = 24', 'Max Move Count = 24', 'Max Level = 9999', 'Default Level = 100'],
	},
	{
		name: "[Gen 9] National Dex",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3710848/">National Dex Metagame Discussion</a>`,
		],

		mod: 'gen9',
		ruleset: ['Standard NatDex', 'OHKO Clause', 'Evasion Clause', 'Species Clause', 'Sleep Clause Mod', 'Terastal Clause'],
		banlist: [
			'ND Uber', 'ND AG', 'Arena Trap', 'Moody', 'Power Construct', 'Shadow Tag', 'King\'s Rock',
			'Quick Claw', 'Razor Fang', 'Assist', 'Baton Pass', 'Last Respects', 'Shed Tail',
		],
	},
	{
		name: "[Gen 9] National Dex AG",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3672423/">National Dex AG</a>`,
		],

		mod: 'gen9',
		ruleset: ['Standard NatDex'],
	},
	{
		name: "[Gen 8] OU",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3710887/">SS OU Metagame Discussion</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3710892/">SS OU Sample Teams</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3717979/">SS OU Viability Rankings</a>`,
		],

		mod: 'gen8',
		ruleset: ['Standard', 'Dynamax Clause'],
		banlist: ['Uber', 'AG', 'Arena Trap', 'Moody', 'Power Construct', 'Sand Veil', 'Shadow Tag', 'Snow Cloak', 'King\'s Rock', 'Baton Pass'],
	},
	{
		name: "[Gen 7] OU",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3685980/">USM OU Metagame Discussion</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3695427/">USM OU Sample Teams</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3667522/">USM OU Viability Rankings</a>`,
		],

		mod: 'gen7',
		ruleset: ['Standard'],
		banlist: ['Uber', 'Arena Trap', 'Power Construct', 'Shadow Tag', 'Baton Pass'],
	},
	{
		name: "[Gen 6] OU",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3719305/">ORAS OU Metagame Discussion</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3694551/">ORAS OU Sample Teams</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3623399/">ORAS OU Viability Rankings</a>`,
		],

		mod: 'gen6',
		ruleset: ['Standard', 'Swagger Clause'],
		banlist: ['Uber', 'Arena Trap', 'Shadow Tag', 'Soul Dew', 'Baton Pass'],
	},
	{
		name: "[Gen 5] OU",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3666724/">BW2 OU Metagame Discussion</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3686880/">BW2 OU Sample Teams</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3668699/">BW2 OU Viability Rankings</a>`,
		],

		mod: 'gen5',
		ruleset: ['Standard', 'Evasion Abilities Clause', 'Sleep Moves Clause', 'Swagger Clause', 'Gems Clause', 'Baton Pass Stat Clause'],
		banlist: ['Uber', 'Arena Trap', 'Drizzle ++ Swift Swim', 'Drought ++ Chlorophyll', 'Sand Rush', 'Shadow Tag', 'King\'s Rock', 'Razor Fang', 'Soul Dew', 'Assist'],
	},
	{
		name: "[Gen 4] OU",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3685887/">DPP OU Metagame Discussion</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3687351/">DPP OU Sample Teams</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3683332/">DPP OU Viability Rankings</a>`,
		],

		mod: 'gen4',
		ruleset: ['Standard', 'Evasion Abilities Clause', 'Baton Pass Stat Trap Clause', 'Freeze Clause Mod'],
		banlist: ['AG', 'Uber', 'Arena Trap', 'Quick Claw', 'Soul Dew', 'Swagger'],
	},
	{
		name: "[Gen 3] OU",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3687814/">ADV OU Metagame Discussion</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3687813/">ADV OU Sample Teams</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3503019/">ADV OU Viability Rankings</a>`,
		],

		mod: 'gen3',
		ruleset: ['Standard', 'One Boost Passer Clause', 'Freeze Clause Mod'],
		banlist: ['Uber', 'Smeargle + Ingrain', 'Sand Veil', 'Soundproof', 'Assist', 'Baton Pass + Block', 'Baton Pass + Mean Look', 'Baton Pass + Spider Web', 'Swagger'],
	},
	{
		name: "[Gen 2] OU",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3688141/">GSC OU Metagame Discussion</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3688523/">GSC OU Sample Teams</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3633233/">GSC OU Viability Rankings</a>`,
		],

		mod: 'gen2',
		ruleset: ['Standard'],
		banlist: ['Uber', 'Mean Look + Baton Pass', 'Spider Web + Baton Pass'],
	},
	{
		name: "[Gen 1] OU",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3685846/">RBY OU Metagame Discussion</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3689726/">RBY OU Sample Teams</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3685861/">RBY OU Viability Rankings</a>`,
		],

		mod: 'gen1',
		ruleset: ['Standard'],
		banlist: ['Uber'],
	},
	{
		name: "[Gen 1] Custom Game",
		mod: 'gen1',
		searchShow: false,
		debug: true,
		battle: {trunc: Math.trunc},
		ruleset: ['HP Percentage Mod', 'Cancel Mod', 'Desync Clause Mod', 'Max Team Size = 24', 'Max Move Count = 24', 'Max Level = 9999', 'Default Level = 100'],
	},
	{
		name: "[Gen 2] Custom Game",

		mod: 'gen2',
		searchShow: false,
		debug: true,
		battle: {trunc: Math.trunc},
		ruleset: ['HP Percentage Mod', 'Cancel Mod', 'Max Team Size = 24', 'Max Move Count = 24', 'Max Level = 9999', 'Default Level = 100'],
	},
	{
		name: "[Gen 3] Custom Game",
		mod: 'gen3',
		searchShow: false,
		debug: true,
		battle: {trunc: Math.trunc},
		ruleset: ['HP Percentage Mod', 'Cancel Mod', 'Max Team Size = 24', 'Max Move Count = 24', 'Max Level = 9999', 'Default Level = 100'],
	}
];
