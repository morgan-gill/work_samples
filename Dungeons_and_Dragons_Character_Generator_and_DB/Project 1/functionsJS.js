function generateSubRace(arg1, arg2){

    var arg1 = document.getElementById(arg1);
    var arg2 = document.getElementById(arg2);

    arg2.innerHTML = "";

    if(arg1.value == "dwarf"){
        var subRaceArray = ["hill-dwarf|Hill Dwarf","mountain-dwarf|Mountain Dwarf"];
        clearRaceStatMod();
        document.getElementById('raceConMod').value = 2;
    }
    if(arg1.value == "dragonborn"){
        var subRaceArray = ["black|Black","blue|Blue","brass|Brass","bronze|Bronze","copper|Copper",
                            "gold|Gold","green|Green","red|Red","silver|Silver","white|White"];
        clearRaceStatMod();
        document.getElementById('raceStrMod').value = 2;
        document.getElementById('raceChaMod').value = 1;
    }
    if(arg1.value == "elf"){
        var subRaceArray = ["high-elf|High Elf","wood-elf|Wood Elf","dark-elf|Dark Elf"];
        clearRaceStatMod();
        document.getElementById('raceDexMod').value = 2;
    }
    if(arg1.value == "gnome"){
        var subRaceArray = ["forest-gnome|Forest Gnome","rock-gnome|Rock Gnome"];
        clearRaceStatMod();
        document.getElementById('raceIntMod').value = 2;
    }
    if(arg1.value == "halfelf"){
        var subRaceArray = ["none|None"];
        clearRaceStatMod();
        document.getElementById('raceChaMod').value = 2;
        /* the player should actually be able to select two stats of their choice to increase by +1,
            but I did it this way for simplicity's sake... */
        document.getElementById('raceDexMod').value = 1;
        document.getElementById('raceWisMod').value = 1;
    }
    if(arg1.value == "halfling"){
        var subRaceArray = ["light-foot|Light Foot","stout|Stout"];
        clearRaceStatMod();
        document.getElementById('raceDexMod').value = 2;
    }
    if(arg1.value == "halforc"){
        var subRaceArray = ["none|None"];
        clearRaceStatMod();
        document.getElementById('raceStrMod').value = 2;
        document.getElementById('raceConMod').value = 1;
    }
    if(arg1.value == "human"){
        var subRaceArray = ["none|None"];
        clearRaceStatMod();
        document.getElementById('raceStrMod').value = 1;
        document.getElementById('raceDexMod').value = 1;
        document.getElementById('raceConMod').value = 1;
        document.getElementById('raceIntMod').value = 1;
        document.getElementById('raceWisMod').value = 1;
        document.getElementById('raceChaMod').value = 1;
    }
    if(arg1.value == "tiefling"){
        var subRaceArray = ["none|None"];
        clearRaceStatMod();
        document.getElementById('raceChaMod').value = 2;
        document.getElementById('raceIntMod').value = 1;
    }

    for(var i = 0; i < subRaceArray.length; i++){

        var subRaceProper = subRaceArray[i].split("|");
        var subRaceOption = document.createElement("option");
        subRaceOption.value = subRaceProper[0];
        subRaceOption.innerHTML = subRaceProper[1];
        arg2.options.add(subRaceOption);
    }
}

function generateSubClass(arg1, arg2){

    var arg1 = document.getElementById(arg1);
    var arg2 = document.getElementById(arg2);

    arg2.innerHTML = "";

    if(arg1.value == "barbarian"){
        var subClassArray = ["berserker|Path of the Berserker","totem-warrior|Path of the Totem Warrior"];
    }
    else if(arg1.value == "bard"){
        var subClassArray = ["college-of-lore|College of Lore","college-of-valor|College of Valor"];
    }
    else if(arg1.value == "cleric"){
        var subClassArray = ["knowledge-domain|Knowledge Domain","life-domain|Life Domain","light-domain|Light Domain",
                             "nature-domain|Nature Domain","tempest-domain|Tempest Domain","trickery-domain|Trickery Domain",
                             "war-domain|War Domain"];
    }
    else if(arg1.value == "druid"){
        var subClassArray = ["circle-of-the-arctic|Circle of the Land: Arctic","circle-of-the-coast|Circle of the Land: Coast",
                             "circle-of-the-desert|Circle of the Land: Desert","circle-of-the-forest|Circle of the Land: Forest",
                             "circle-of-the-grassland|Circle of the Land: Grassland","circle-of-the-moon|Circle of the Land: Moon",
                             "circle-of-the-mountain|Circle of the Land: Mountain","circle-of-the-swamp|Circle of the Land: Swamp",
                             "circle-of-the-underdark|Circle of the Land: Underdark"];
    }
    else if(arg1.value == "fighter"){
        var subClassArray = ["champion|Champion","battle-master|Battle Master","eldritch-knight|Eldritch Knight"];
    }
    else if(arg1.value == "monk"){
        var subClassArray = ["way-of-the-open-hand|Way of the Open Hand","way-of-shadow|Way of Shadow",
                             "way-of-the-four-elements|Way of the Four Elements"];
    }
    else if(arg1.value == "paladin"){
        var subClassArray = ["oath-of-devotion|Oath of Devotion","oath-of-the-ancients|Oath of the Ancients",
                             "oath-of-vengeance|Oath of Vengeance"];
    }
    else if(arg1.value == "ranger"){
        var subClassArray = ["hunter|Hunter","beast-master|Beast Master"];
    }
    else if(arg1.value == "rogue"){
        var subClassArray = ["thief|Thief","assassin|Assassin","arcane-trickster|Arcane Trickster"];
    }
    else if(arg1.value == "sorcerer"){
        var subClassArray = ["draconic-bloodline|Draconic Bloodline","wild-magic|Wild Magic"];
    }
    else if(arg1.value == "warlock"){
        var subClassArray = ["pact-of-the-chain|Pact of the Chain","pact-of-the-blade|Pact of the Blade",
                             "pact-of-the-tome|Pact of the Tome"];
    }
    else if(arg1.value == "wizard"){
        var subClassArray = ["abjuration|Abjuration","conjuration|Conjuration","divination|Divination","enchantment|Enchantment","evocation|Evocation",
                             "illusion|Illusion","transmutation|Transmutation"];
    }

    for(var i = 0; i < subClassArray.length; i++){

        var subClassProper = subClassArray[i].split("|");
        var subClassOption = document.createElement("option");
        subClassOption.value = subClassProper[0];
        subClassOption.innerHTML = subClassProper[1];
        arg2.options.add(subClassOption);
    }
}

function rollStat(arg1, arg2, arg3, arg4, arg5, arg6){

    var arg1 = document.getElementById(arg1);
    var arg2 = document.getElementById(arg2);
    var arg3 = document.getElementById(arg3);
    var arg4 = document.getElementById(arg4);
    var arg5 = document.getElementById(arg5);
    var arg6 = document.getElementById(arg6);

    arg1.value = rollStatValue();
    arg2.value = rollStatValue();
    arg3.value = rollStatValue();
    arg4.value = rollStatValue();
    arg5.value = rollStatValue();
    arg6.value = rollStatValue();
}

function rollSingleStat(arg1){

    var arg1 = document.getElementById(arg1);

    arg1.value = rollStatValue();
}

function rollStatValue(){

    var statArray = []; var stat = 0; var value = 0;

    for(var i = 0; i <= 3; i++){

        value = Math.floor((Math.random() * 6) + 1);
        statArray[i] = value;
    }

    statArray.sort(function(a, b){return b-a});
    stat = statArray[0] + statArray[1] + statArray[2];
    return stat;
}

function addSubRaceStatMod(arg1){

    var arg1 = document.getElementById(arg1);

    if(arg1.value == "hill-dwarf"){
        clearSubRaceStatMod();
        document.getElementById('subRaceWisMod').value = 1;
    }
    else if(arg1.value == "mountain-dwarf"){
        clearSubRaceStatMod();
        document.getElementById('subRaceStrMod').value = 2;
    }
    else if(arg1.value == "high-elf"){
        clearSubRaceStatMod();
        document.getElementById('subRaceIntMod').value = 1;
    }
    else if(arg1.value == "wood-elf"){
        clearSubRaceStatMod();
        document.getElementById('subRaceWisMod').value = 1;
    }
    else if(arg1.value == "dark-elf"){
        clearSubRaceStatMod();
        document.getElementById('subRaceChaMod').value = 1;
    }
    else if(arg1.value == "forest-gnome"){
        clearSubRaceStatMod();
        document.getElementById('subRaceDexMod').value = 1;
    }
    else if(arg1.value == "rock-gnome"){
        clearSubRaceStatMod();
        document.getElementById('subRaceConMod').value = 1;
    }
    else if(arg1.value == "light-foot"){
        clearSubRaceStatMod();
        document.getElementById('subRaceChaMod').value = 1;
    }
    else if(arg1.value == "stout"){
        clearSubRaceStatMod();
        document.getElementById('subRaceConMod').value = 1;
    }
    else{
        clearSubRaceStatMod();
    }
}

function clearRaceStatMod(){

    document.getElementById('raceStrMod').value = "";
    document.getElementById('raceDexMod').value = "";
    document.getElementById('raceConMod').value = "";
    document.getElementById('raceIntMod').value = "";
    document.getElementById('raceWisMod').value = "";
    document.getElementById('raceChaMod').value = "";
}

function clearSubRaceStatMod(){

    document.getElementById('subRaceStrMod').value = "";
    document.getElementById('subRaceDexMod').value = "";
    document.getElementById('subRaceConMod').value = "";
    document.getElementById('subRaceIntMod').value = "";
    document.getElementById('subRaceWisMod').value = "";
    document.getElementById('subRaceChaMod').value = "";
}

/*
function totalFinalStat(){
    var finStr = 0;
    var str1 = document.getElementById('strengthRoll').value; if(str1 == NaN){str1 = 0;}
    var str2 = document.getElementById('raceStrMod').value; if(str2 == NaN){str2 = 0;}
    var str3 = document.getElementById('subRaceStrMod').value; if(str2 == NaN){str2 = 0;}
    finStr = str1 + str2 + str3;
    document.getElementById('finalStr').value = finStr;
}
*/

function generateRaceDescription(arg1, arg2){

    var arg1 = document.getElementById(arg1);
    var arg2 = document.getElementById(arg2);

    arg2.innerHTML = "";

    if(arg1.value == "dwarf"){
        var raceDescription = "Your dwarf character has an assortment of inborn " +
            "abilities, part and parcel of dwarven nature. " +
            "Ability Score Increase. Your Constitution score " +
            "increases by 2. " +
            "Age. Dwarves mature at the same rate as humans, but " +
            "they’re considered young until they reach the age of 50. " +
            "On average, they live about 350 years. " +
            "Alignment. M ost dwarves are lawful, believing firmly " +
            "in the benefits of a well-ordered society. They tend " +
            "toward good as well, with a strong sense of fair play and " +
            "a belief that everyone deserves to share in the benefits of " +
            "a just order. " +
            "Size. D warves stand between 4 and 5 feet tall and " +
            "average about 150 pounds. Your size is Medium. " +
            "Speed. Your base walking speed is 25 feet. Your " +
            "speed is not reduced by w earing heavy armor. " +
            "Darkvision. A ccustom ed to life underground, you " +
            "have superior vision in dark and dim conditions. You " +
            "can see in dim light within 60 feet of you as if it were " +
            "bright light, and in darkness as if it w ere dim light. You " +
            "can’t discern color in darkness, only shades of gray. " +
            "Dwarven Resilience. You have advantage on saving " +
            "throws against poison, and you have resistance against " +
            "poison damage (explained in chapter 9). " +
            "Dwarven Combat Training. You have proficiency " +
            "with the battleaxe, handaxe, throwing hammer, " +
            "and warhammer. " +
            "Tool Proficiency. You gain proficiency with the " +
            "artisan’s tools of your choice: smith’s tools, brewer’s " +
            "supplies, or m ason’s tools. " +
            "Stonecunning. W henever you make an Intelligence " +
            "(History) check related to the origin of stonework, you " +
            "are considered proficient in the History skill and add " +
            "double your proficiency bonus to the check, instead of " +
            "your norm al proficiency bonus. " +
            "Languages. You can speak, read, and write Common " +
            "and Dwarvish. Dwarvish is full of hard consonants and " +
            "guttural sounds, and those characteristics spill over into " +
            "whatever other language a dw arf might speak. " +
            "Subrace. Two main subraces o f dwarves populate the " +
            "worlds of D&D: hill dwarves and mountain dwarves. " +
            "Choose one of these subraces. " +
            "H i l l D w a r f " +
            "As a hill dwarf, you have keen senses, deep intuition, " +
            "and remarkable resilience. The gold dwarves of Faerun " +
            "in their mighty southern kingdom are hill dwarves, as " +
            "are the exiled Neidar and the debased Klar of Krynn in " +
            "the Dragonlance setting. " +
            "Ability Score Increase. Your Wisdom score " +
            "increases by 1. " +
            "Dwarven Toughness. Your hit point maximum " +
            "increases by 1, and it increases by 1 every time you " +
            "gain a level. " +
            "M o u n t a i n D w a r f " +
            "A s a mountain dwarf, you're strong and hardy, " +
            "accustom ed to a difficult life in rugged terrain. You’re " +
            "probably on the tall side (for a dwarf), and tend toward " +
            "lighter coloration. The shield dwarves of northern " +
            "Faerun, as well as the ruling Hylar clan and the noble " +
            "Daewar clan of Dragonlance, are mountain dwarves. " +
            "Ability Score Increase. Your Strength score " +
            "increases by 2. " +
            "Dwarven Armor Training. You have proficiency with " +
            "light and medium armor. ";
    }
    if(arg1.value == "dragonborn"){
        var raceDescription = "Your draconic heritage manifests in a variety o f traits " +
            "you share with other dragonborn. " +
            "Ability Score Increase. Your Strength score " +
            "increases by 2, and your Charisma score increases by 1. " +
            "Age. Young dragonborn grow quickly. They walk " +
            "hours after hatching, attain the size and development " +
            "o f a 10-year-old human child by the age o f 3, and reach " +
            "adulthood by 15. They live to be around 80. " +
            "Alignment. Dragonborn tend to extremes, making a " +
            "conscious choice for one side or the other in the cosmic " +
            "war between good and evil (represented by Bahamut " +
            "and Tiamat, respectively). Most dragonborn are good, " +
            "but those w ho side with Tiamat can be terrible villains. " +
            "Size. Dragonborn are taller and heavier than humans, " +
            "standing w ell over 6 feet tall and averaging almost 250 " +
            "pounds. Your size is Medium." +
            "Speed. Your base walking speed is 30 feet." + "<br><br>" +
            "Black Acid 5 by 30 ft. line (Dex. save)" +
            "Blue Lightning 5 by 30 ft. line (Dex. save)" +
            "Brass Fire 5 by 30 ft. line (Dex. save)" +
            "Bronze Lightning 5 by 30 ft. line (Dex. save)" +
            "Copper Acid 5 by 30 ft. line (Dex. save)" +
            "Cold Fire 15 ft. cone (Dex. save)" +
            "Green Poison 15 ft. cone (Con. save)" +
            "Red Fire 15 ft. cone (Dex. save)" +
            "Silver Cold 15 ft. cone (Con. save)" +
            "White Cold 15 ft. cone (Con. save)";
    }
    if(arg1.value == "elf"){
        var raceDescription = "Your elf character has a variety o f natural abilities, the\n" +
            "result o f thousands o f years o f elven refinement.\n" +
            "Ability Score Increase. Your Dexterity score\n" +
            "increases by 2.\n" +
            "Age. Although elves reach physical maturity at about\n" +
            "the same age as humans, the elven understanding of\n" +
            "adulthood goes beyond physical growth to encompass\n" +
            "worldly experience. An elf typically claims adulthood\n" +
            "and an adult name around the age o f 100 and can live\n" +
            "to be 750 years old.\n" +
            "Alignment. Elves love freedom, variety, and self expression,\n" +
            "so they lean strongly toward the gentler\n" +
            "aspects of chaos. They value and protect others'\n" +
            "freedom as well as their own, and they are more\n" +
            "often good than not. The drow are an exception; their\n" +
            "exile into the Underdark has made them vicious and\n" +
            "dangerous. Drow are more often evil than not.\n" +
            "Size. Elves range from under 5 to over 6 feet tall and\n" +
            "have slender builds. Your size is Medium.\n" +
            "Speed. Your base walking speed is 30 feet.\n" +
            "Darkvision. Accustomed to twilit forests and the night\n" +
            "sky, you have superior vision in dark and dim conditions.\n" +
            "You can see in dim light within 60 feet o f you as if it\n" +
            "were bright light, and in darkness as if it w ere dim light.\n" +
            "You can’t discern color in darkness, only shades o f gray.\n" +
            "Keen Senses. You have proficiency in the\n" +
            "Perception skill.\n" +
            "Fey Ancestry. You have advantage on saving throws\n" +
            "against being charmed, and magic can’t put you to sleep.\n" +
            "Trance. Elves don’t need to sleep. Instead, they\n" +
            "meditate deeply, remaining semiconscious, for 4\n" +
            "hours a day. (The Common word for such meditation\n" +
            "is “trance.”) While meditating, you can dream after a\n" +
            "fashion; such dreams are actually mental exercises that\n" +
            "have become reflexive through years o f practice. After\n" +
            "resting in this way, you gain the same benefit that a\n" +
            "human does from 8 hours o f sleep.\n" +
            "Languages. You can speak, read, and write Common\n" +
            "and Elvish. Elvish is fluid, with subtle intonations and\n" +
            "intricate grammar. Elven literature is rich and varied,\n" +
            "and their songs and poems are famous among other\n" +
            "races. Many bards learn their language so they can add\n" +
            "Elvish ballads to their repertoires.\n" +
            "Subrace. Ancient divides among the elven people\n" +
            "resulted in three main subraces: high elves, wood elves,\n" +
            "and dark elves, who are commonly called drow. Choose\n" +
            "one o f these subraces. In some worlds, these subraces\n" +
            "are divided still further (such as the sun elves and moon\n" +
            "elves o f the Forgotten Realms), so if you wish, you can\n" +
            "choose a narrower subrace.\n" +
            "H ig h E l f\n" +
            "As a high elf, you have a keen mind and a mastery of\n" +
            "at least the basics o f magic. In many o f the worlds\n" +
            "o f D&D, there are two kinds of high elves. One type\n" +
            "(which includes the gray elves and valley elves of\n" +
            "Greyhawk, the Silvanesti of Dragonlance, and the\n" +
            "sun elves o f the Forgotten Realms) is haughty and\n" +
            "reclusive, believing themselves to be superior to\n" +
            "non-elves and even other elves. The other type\n" +
            "(including the high elves o f Greyhawk. the\n" +
            "Qualinesti o f Dragonlance, and the moon elves\n" +
            "o f the Forgotten Realms) are more common\n" +
            "and m ore friendly, and often encountered\n" +
            "among humans and other races.\n" +
            "The sun elves o f Faerun (also called gold\n" +
            "elves or sunrise elves) have bronze skin and\n" +
            "hair of copper, black, or golden blond. Their\n" +
            "eyes are golden, silver, or black. Moon elves (also\n" +
            "called silver elves or gray elves) are much paler,\n" +
            "with alabaster skin sometimes tinged with blue.\n" +
            "They often have hair o f silver-white, black, or blue,\n" +
            "but various shades o f blond, brown, and red are\n" +
            "not uncommon. Their eyes are blue or green and\n" +
            "flecked with gold.\n" +
            "Ability Score Increase. Your Intelligence score\n" +
            "increases by 1.\n" +
            "Elf Weapon Training. You have proficiency with\n" +
            "the longsword, shortsword, shortbow, and longbow.\n" +
            "Cantrip. You know one cantrip o f your choice from\n" +
            "the wizard spell list. Intelligence is your spellcasting\n" +
            "ability for it.\n" +
            "Extra Language. You can speak, read, and write one\n" +
            "extra language o f your choice.\n" +
            "W o o d E lf\n" +
            "As a w ood elf, you have keen senses and intuition, and\n" +
            "your fleet feet carry you quickly and stealthily through\n" +
            "your native forests. This category includes the wild\n" +
            "elves (grugach) o f Greyhawk and the Kagonesti of\n" +
            "Dragonlance, as well as the races called wood elves in\n" +
            "Greyhawk and the Forgotten Realms. In Faerun, wood\n" +
            "elves (also called wild elves, green elves, or forest elves)\n" +
            "are reclusive and distrusting o f non-elves.\n" +
            "Wood elves’ skin tends to be copperish in hue,\n" +
            "sometimes with traces o f green. Their hair tends toward\n" +
            "browns and blacks, but it is occasionally blond or\n" +
            "copper-colored. Their eyes are green, brown, or hazel.\n" +
            "Ability Score Increase. Your W isdom score\n" +
            "increases by 1.\n" +
            "Elf Weapon Training. You have proficiency with the\n" +
            "longsword, shortsword, shortbow, and longbow.\n" +
            "Fleet o f Foot. Your base walking speed\n" +
            "increases to 35 feet.\n" +
            "Mask o f the Wild. You can attempt to hide even when\n" +
            "you are only lightly obscured by foliage, heavy rain,\n" +
            "falling snow, mist, and other natural phenomena.\n" +
            "T h e D a r k n e s s o f t h e D r ow\n" +
            "Were it not for one renowned exception, the race of drow\n" +
            "would be universally reviled. To most, they are a race of\n" +
            "demon-worshiping marauders dwelling in the subterranean\n" +
            "depths of the Underdark, emerging only on the blackest\n" +
            "nights to pillage and slaughter the surface dwellers they\n" +
            "despise. Their society is depraved and preoccupied with the\n" +
            "favor of Lolth, their spider-goddess, who sanctions murder\n" +
            "and the extermination of entire families as noble houses\n" +
            "vie for position.\n" +
            "Yet one drow, at least, broke the mold. In the world of the\n" +
            "Forgotten Realms, Drizzt Do'Urden, ranger of the North, has\n" +
            "proven his quality as a good-hearted defender of the weak\n" +
            "and innocent. Rejecting his heritage and adrift in a world that\n" +
            "looks upon him with terror and loathing, Drizzt is a model\n" +
            "for those few drow who follow in his footsteps, trying to find\n" +
            "a life apart from the evil society of their Underdark homes.\n" +
            "Drow grow up believing that surface-dwelling races are\n" +
            "inferior, worthless except as slaves. Drow who develop a\n" +
            "conscience or find it necessary to cooperate with members of\n" +
            "other races find it hard to overcome that prejudice, especially\n" +
            "when they are so often on the receiving end of hatred.\n" +
            "D a r k E l f (D r o w )\n" +
            "Descended from an earlier subrace of dark-skinned\n" +
            "elves, the drow w ere banished from the surface world\n" +
            "for following the goddess Lolth down the path to\n" +
            "evil and corruption. Now they have built their own\n" +
            "civilization in the depths o f the Underdark, patterned\n" +
            "after the Way o f Lolth. Also called dark elves, the drow\n" +
            "have black skin that resembles polished obsidian and\n" +
            "stark white or pale yellow hair. They commonly have\n" +
            "very pale eyes (so pale as to be mistaken for white) in\n" +
            "shades o f lilac, silver, pink, red, and blue. They tend to\n" +
            "be smaller and thinner than most elves.\n" +
            "Drow adventurers are rare, and the race does not exist\n" +
            "in all worlds. Check with your Dungeon Master to see\n" +
            "if you can play a drow character.\n" +
            "Ability Score Increase. Your Charisma score\n" +
            "increases by 1.\n" +
            "Superior Darkvision. Your darkvision has a\n" +
            "radius o f 120 feet.\n" +
            "Sunlight Sensitivity. You have disadvantage on attack\n" +
            "rolls and on Wisdom (Perception) checks that rely on\n" +
            "sight when you, the target o f your attack, or whatever\n" +
            "you are trying to perceive is in direct sunlight.\n" +
            "Drow Magic. You know the dancing lights cantrip.\n" +
            "When you reach 3rd level, you can cast the faerie fire\n" +
            "spell once per day. When you reach 5th level, you can\n" +
            "also cast the darkness spell once per day. Charisma is\n" +
            "your spellcasting ability for these spells.\n" +
            "Drow Weapon Training. You have proficiency with\n" +
            "rapiers, shortswords, and hand crossbows.";
    }
    if(arg1.value == "gnome"){
        var raceDescription = "Your gnome character has certain characteristics in\n" +
            "common with all other gnomes.\n" +
            "Ability Score Increase. Your Intelligence score\n" +
            "increases by 2.\n" +
            "Age. Gnomes mature at the same rate humans do, and\n" +
            "most are expected to settle down into an adult life by\n" +
            "around age 40. They can live 350 to almost 500 years.\n" +
            "Alignment. Gnomes are most often good. Those who\n" +
            "tend toward law are sages, engineers, researchers,\n" +
            "scholars, investigators, or inventors. Those w ho tend\n" +
            "toward chaos are minstrels, tricksters, wanderers,\n" +
            "or fanciful jewelers. Gnomes are good-hearted, and " +
            "even the tricksters among them are more playful\n" +
            "than vicious.\n" +
            "Size. Gnomes are between 3 and 4 feet tall and\n" +
            "average about 40 pounds. Your size is Small.\n" +
            "Speed. Your base walking speed is 25 feet.\n" +
            "Darkvision. Accustomed to life underground, you have\n" +
            "superior vision in dark and dim conditions. You can\n" +
            "see in dim light within 60 feet o f you as if it w ere bright\n" +
            "light, and in darkness as if it were dim light. You can't\n" +
            "discern color in darkness, only shades o f gray.\n" +
            "Gnome Cunning. You have advantage on all\n" +
            "Intelligence, Wisdom, and Charisma saving throws\n" +
            "against magic.\n" +
            "Languages. You can speak, read, and write Common\n" +
            "and Gnomish. The Gnomish language, which uses the\n" +
            "Dwarvish script, is renowned for its technical treatises\n" +
            "and its catalogs o f knowledge about the natural world.\n" +
            "Subrace. Two subraces of gnomes are found among\n" +
            "the worlds o f D&D: forest gnomes and rock gnomes.\n" +
            "Choose one o f these subraces.\n" +
            "F o r e s t G n o m e\n" +
            "As a forest gnome, you have a natural knack for illusion\n" +
            "and inherent quickness and stealth. In the worlds of\n" +
            "D&D, forest gnomes are rare and secretive. They gather\n" +
            "in hidden communities in sylvan forests, using illusions\n" +
            "and trickery to conceal themselves from threats or\n" +
            "to mask their escape should they be detected. Forest\n" +
            "gnomes tend to be friendly with other good-spirited\n" +
            "woodland folk, and they regard elves and good fey as\n" +
            "their most important allies. These gnomes also befriend\n" +
            "small forest animals and rely on them for information\n" +
            "about threats that might prowl their lands.\n" +
            "Ability Score Increase. Your Dexterity score\n" +
            "increases by 1.\n" +
            "Natural Illusionist. You know the minor illusion\n" +
            "cantrip. Intelligence is your spellcasting ability for it.\n" +
            "Speak with Small Beasts. Through sounds and\n" +
            "gestures, you can communicate simple ideas with Small\n" +
            "or smaller beasts. Forest gnomes love animals and often\n" +
            "keep squirrels, badgers, rabbits, moles, woodpeckers,\n" +
            "and other creatures as beloved pets.\n" +
            "R o c k G n o m e\n" +
            "As a rock gnome, you have a natural inventiveness and\n" +
            "hardiness beyond that o f other gnomes. Most gnomes\n" +
            "in the worlds o f D&D are rock gnomes, including the\n" +
            "tinker gnomes o f the Dragonlance setting.\n" +
            "Ability Score Increase. Your Constitution score\n" +
            "increases by 1.\n" +
            "Artificer’s Lore. Whenever you make an Intelligence\n" +
            "(History) check related to magic items, alchemical\n" +
            "objects, or technological devices, you can add twice your\n" +
            "proficiency bonus, instead o f any proficiency bonus you\n" +
            "normally apply.\n" +
            "Tinker. You have proficiency with artisan’s tools\n" +
            "(tinker’s tools). Using those tools, you can spend 1\n" +
            "hour and 10 gp worth o f materials to construct a Tiny\n" +
            "clockwork device (AC 5, 1 hp). The device ceases\n" +
            "to function after 24 hours (unless you spend 1 hour\n" +
            "repairing it to keep the device functioning), or when\n" +
            "you use your action to dismantle it; at that time, you can\n" +
            "reclaim the materials used to create it. You can have up\n" +
            "to three such devices active at a time.\n" +
            "When you create a device, choose one o f the\n" +
            "following options:\n" +
            "Clockwork Toy. This toy is a clockwork animal, monster,\n" +
            "or person, such as a frog, mouse, bird, dragon, or\n" +
            "soldier. When placed on the ground, the toy m oves\n" +
            "5 feet across the ground on each o f your turns in a\n" +
            "random direction. It makes noises as appropriate\n" +
            "to the creature it represents.\n" +
            "Fire Starter. The device produces a miniature\n" +
            "flame, which you can use to light a candle,\n" +
            "torch, or campfire. Using the device\n" +
            "requires your action.\n" +
            "Music Box. When opened, this music box\n" +
            "plays a single song at a moderate volume.\n" +
            "The box stops playing when it\n" +
            "reaches the song’s end or\n" +
            "when it is closed.";
    }
    if(arg1.value == "halfelf"){
        var raceDescription = "Your half-elf character has some qualities in common\n" +
            "with elves and some that are unique to half-elves.\n" +
            "Ability Score Increase. Your Charisma score\n" +
            "increases by 2, and two other ability scores o f your\n" +
            "choice increase by 1.\n" +
            "Age. Half-elves mature at the same rate humans\n" +
            "do and reach adulthood around the age o f 20. They\n" +
            "live much longer than humans, however, often\n" +
            "exceeding 180 years.\n" +
            "Alignment. Half-elves share the chaotic bent o f their\n" +
            "elven heritage. They value both personal freedom and " +
            "creative expression, demonstrating neither love\n" +
            "o f leaders nor desire for followers. They chafe at\n" +
            "rules, resent others’ demands, and sometimes prove\n" +
            "unreliable, or at least unpredictable.\n" +
            "Size. Half-elves are about the same size as humans,\n" +
            "ranging from 5 to 6 feet tall. Your size is Medium.\n" +
            "Speed. Your base walking speed is 30 feet.\n" +
            "Darkvision. Thanks to your elf blood, you have\n" +
            "superior vision in dark and dim conditions. You can\n" +
            "see in dim light within 60 feet o f you as if it w ere bright\n" +
            "light, and in darkness as if it were dim light. You can’t\n" +
            "discern color in darkness, only shades o f gray.\n" +
            "Fey Ancestry. You have advantage on saving throws\n" +
            "against being charmed, and magic can’t put you to sleep.\n" +
            "Skill Versatility. You gain proficiency in two skills\n" +
            "o f your choice.\n" +
            "Languages. You can speak, read, and write Common,\n" +
            "Elvish, and one extra language of your choice.";
    }
    if(arg1.value == "halfling"){
        var raceDescription = "Your halfling character has a number of traits in\n" +
            "common with all other halflings.\n" +
            "Ability Score Increase. Your Dexterity score\n" +
            "increases by 2.\n" +
            "Age. A halfling reaches adulthood at the age of\n" +
            "20 and generally lives into the middle of his or her\n" +
            "second century.\n" +
            "Alignment. Most halflings are lawful good. As a rule,\n" +
            "they are good-hearted and kind, hate to see others in\n" +
            "pain, and have no tolerance for oppression. They are\n" +
            "also very orderly and traditional, leaning heavily on\n" +
            "the support of their community and the comfort of\n" +
            "their old ways.\n" +
            "Size. Halflings average about 3 feet tall and weigh\n" +
            "about 40 pounds. Your size is Small.\n" +
            "Speed. Your base walking speed is 25 feet.\n" +
            "Lucky. When you roll a 1 on an attack roll, ability\n" +
            "check, or saving throw, you can reroll the die and must\n" +
            "use the new roll.\n" +
            "Brave. You have advantage on saving throws against\n" +
            "being frightened.\n" +
            "Halfling Nimbleness. You can move through the\n" +
            "space o f any creature that is o f a size larger than yours. " +
            "Languages. You can speak, read, and write Common\n" +
            "and Halfling. The Halfling language isn’t secret, but\n" +
            "halflings are loath to share it with others. They write\n" +
            "very little, so they don’t have a rich body o f literature.\n" +
            "Their oral tradition, however, is very strong. Almost all\n" +
            "halflings speak Common to converse with the people\n" +
            "in whose lands they dwell or through which they\n" +
            "are traveling.\n" +
            "Subrace. The two main kinds o f halfling, lightfoot and\n" +
            "stout, are more like closely related families than true\n" +
            "subraces. Choose one o f these subraces.\n" +
            "L ig h t f o o t\n" +
            "As a lightfoot halfling, you can easily hide from notice,\n" +
            "even using other people as cover. You’re inclined to be\n" +
            "affable and get along well with others. In the Forgotten\n" +
            "Realms, lightfoot halflings have spread the farthest and\n" +
            "thus are the most common variety.\n" +
            "Lightfoots are more prone to wanderlust than other\n" +
            "halflings, and often dwell alongside other races or take\n" +
            "up a nomadic life. In the world o f Greyhawk, these\n" +
            "halflings are called hairfeet or tallfellows.\n" +
            "Ability Score Increase. Your Charisma score\n" +
            "increases by 1.\n" +
            "Naturally Stealthy. You can attempt to hide even\n" +
            "when you are obscured only by a creature that is at least\n" +
            "one size larger than you.\n" +
            "St o u t\n" +
            "As a stout halfling, you’re hardier than average and have\n" +
            "some resistance to poison. Some say that stouts have\n" +
            "dwarven blood. In the Forgotten Realms, these halflings\n" +
            "are called stronghearts, and they’re most common\n" +
            "in the south.\n" +
            "Ability Score Increase. Your Constitution score\n" +
            "increases by 1.\n" +
            "Stout Resilience. You have advantage on saving\n" +
            "throws against poison, and you have resistance\n" +
            "against poison damage.";
    }
    if(arg1.value == "halforc"){
        var raceDescription = "Your half-orc character has certain traits deriving from\n" +
            "your orc ancestry. " +
            "Ability Score Increase. Your Strength score\n" +
            "increases by 2, and your Constitution score\n" +
            "increases by 1.\n" +
            "Age. Half-orcs mature a little faster than humans,\n" +
            "reaching adulthood around age 14. They age\n" +
            "noticeably faster and rarely live longer than 75 years.\n" +
            "Alignment. Half-orcs inherit a tendency toward chaos\n" +
            "from their orc parents and are not strongly inclined\n" +
            "toward good. Half-orcs raised among ores and w illing\n" +
            "to live out their lives among them are usually evil.\n" +
            "Size. Half-orcs are somewhat larger and bulkier than\n" +
            "humans, and they range from 5 to well over 6 feet tall.\n" +
            "Your size is Medium.\n" +
            "Speed. Your base walking speed is 30 feet.\n" +
            "Darkvision. Thanks to your orc blood, you have\n" +
            "superior vision in dark and dim conditions. You can\n" +
            "see in dim light within 60 feet o f you as if it w ere bright\n" +
            "light, and in darkness as if it w ere dim light. You can't\n" +
            "discern color in darkness, only shades o f gray.\n" +
            "Menacing. You gain proficiency in the\n" +
            "Intimidation skill.\n" +
            "Relentless Endurance. When you are reduced to\n" +
            "0 hit points but not k illed outright, you can drop to 1 hit\n" +
            "point instead. You can’t use this feature again until you\n" +
            "finish a long rest.\n" +
            "Savage Attacks. When you score a critical hit with\n" +
            "a melee weapon attack, you can roll one of the weapon’s\n" +
            "damage dice one additional time and add it to the extra\n" +
            "damage o f the critical hit.\n" +
            "Languages. You can speak, read, and\n" +
            "write Common and Orc . Orc is a\n" +
            "harsh, grating language with\n" +
            "hard consonants. It has\n" +
            "no script of its own\n" +
            "but is written in the\n" +
            "Dwarvish script.";
    }
    if(arg1.value == "human"){
        var raceDescription = "It’s hard to make generalizations about humans, but\n" +
            "your human character has these traits.\n" +
            "Ability Score Increase. Your ability scores each\n" +
            "increase by 1.\n" +
            "Age. Humans reach adulthood in their late teens and\n" +
            "live less than a century.\n" +
            "Alignment. Humans tend toward no\n" +
            "particular alignment. The best and the worst are\n" +
            "found among them.\n" +
            "Size. Humans vary widely in height and build, from\n" +
            "barely 5 feet to well over 6 feet tall. Regardless o f your\n" +
            "position in that range, your size is Medium.\n" +
            "Speed. Your base walking speed is 30 feet.\n" +
            "Languages. You can speak, read, and write Common\n" +
            "and one extra language o f your choice. Humans typically\n" +
            "learn the languages o f other peoples they deal with,\n" +
            "including obscure dialects. They are fond o f sprinkling\n" +
            "their speech with w ords borrowed from other tongues:\n" +
            "Orc curses, Elvish musical expressions, Dwarvish\n" +
            "military phrases, and so on.";
    }
    if(arg1.value == "tiefling"){
        var raceDescription = "Tieflings share certain racial traits as a result o f their\n" +
            "infernal descent.\n" +
            "Ability Score Increase. Your Intelligence score\n" +
            "increases by 1, and your Charisma score increases by 2.\n" +
            "Age. Tieflings mature at the same rate as humans but\n" +
            "live a few years longer.\n" +
            "Alignment. Tieflings might not have an innate\n" +
            "tendency toward evil, but many o f them end up there.\n" +
            "Evil or not, an independent nature inclines many\n" +
            "tieflings toward a chaotic alignment.\n" +
            "Size. Tieflings are about the same size and build as\n" +
            "humans. Your size is Medium.\n" +
            "Speed. Your base walking speed is 30 feet.\n" +
            "Darkvision. Thanks to your infernal heritage, you\n" +
            "have superior vision in dark and dim conditions. You\n" +
            "can see in dim light within 60 feet o f you as if it w ere\n" +
            "bright light, and in darkness as if it w ere dim light. You\n" +
            "can’t discern color in darkness, only shades o f gray.\n" +
            "Hellish Resistance. You have resistance\n" +
            "to fire damage.\n" +
            "Infernal Legacy. You know the thaumaturgy cantrip.\n" +
            "Once you reach 3rd level, you can cast the hellish\n" +
            "rebuke spell once per day as a 2nd-level spell. Once you\n" +
            "reach 5th level, you can also cast the darkness spell\n" +
            "once per day. Charisma is your spellcasting ability for\n" +
            "these spells.\n" +
            "Languages. You can speak, read, and write Common\n" +
            "and Infernal.";
    }

    arg2.innerHTML = raceDescription;

}

function generateClassDescription(arg1, arg2) {

    var arg1 = document.getElementById(arg1);
    var arg2 = document.getElementById(arg2);

    arg2.innerHTML = "";

    if(arg1.value == "barbarian"){
        var classDescription = "As a barbarian, you gain the following class features.\n" +
            "H i t P o in t s\n" +
            "Hit Dice: 1d 12 per barbarian level\n" +
            "Hit Points at 1st Level: 12 + your Constitution modifier\n" +
            "Hit Points at Higher Levels: 1d 12 (or 7) + your\n" +
            "Constitution modifier per barbarian level after 1st\n" + "<br><br>" +
            "P r o f i c i e n c i e s\n" +
            "Armor: Light armor, medium armor, shields\n" +
            "Weapons: Simple weapons, martial weapons\n" +
            "Tools: None\n" +
            "Saving Throws: Strength, Constitution\n" +
            "Skills: Choose two from Animal Handling, Athletics,\n" +
            "Intimidation, Nature, Perception, and Survival" +
            "E q u i p m e n t\n" +
            "Y ou s t a r t w i th th e fo l lo w in g e q u ipm e n t , in a d d it io n to\n" +
            "th e e q u ipm e n t g r a n t e d b y y o u r b a c k g r o u n d :\n" +
            "• (a) a greataxe or (b) any martial melee weapon\n" +
            "• (a) two handaxes or (b) any simple weapon\n" +
            "• An explorer’s pack and four javelins" +
            "R a g e: " +
            "In battle, you fight with primal ferocity. On your turn,\n" +
            "you can enter a rage as a bonus action.\n" +
            "While raging, you gain the following benefits if you\n" +
            "aren’t w earing heavy armor:\n" +
            "• You have advantage on Strength checks and Strength\n" +
            "saving throws.\n" +
            "• When you make a melee weapon attack using\n" +
            "Strength, you gain a bonus to the damage roll that\n" +
            "increases as you gain levels as a barbarian, as shown\n" +
            "in the Rage Damage column o f the Barbarian table.\n" +
            "• You have resistance to bludgeoning, piercing, and\n" +
            "slashing damage.\n" +
            "If you are able to cast spells, you can’t cast them or\n" +
            "concentrate on them while raging.\n" +
            "Your rage lasts for 1 minute. It ends early if you are\n" +
            "knocked unconscious or if your turn ends and you\n" +
            "haven’t attacked a hostile creature since your last turn\n" +
            "or taken damage since then. You can also end your rage\n" +
            "on your turn as a bonus action.\n" +
            "Once you have raged the number o f times shown\n" +
            "for your barbarian level in the Rages column o f the\n" +
            "Barbarian table, you must finish a long rest before you\n" +
            "can rage again." +
            "While you are not w earing any armor, your Armor Class\n" +
            "equals 10 + your Dexterity m odifier + your Constitution\n" +
            "modifier. You can use a shield and still gain this benefit." +
            "R e c k l e s s A t t a c k: " +
            "Starting at 2nd level, you can throw aside all concern\n" +
            "for defense to attack with fierce desperation. When\n" +
            "you make your first attack on your turn, you can decide\n" +
            "to attack recklessly. Doing so gives you advantage on\n" +
            "melee weapon attack rolls using Strength during this\n" +
            "turn, but attack rolls against you have advantage until\n" +
            "your next turn." +
            "D a n g e r S e n s e: " +
            "At 2nd level, you gain an uncanny sense o f when things\n" +
            "nearby aren’t as they should be, giving you an edge\n" +
            "when you dodge away from danger.\n" +
            "You have advantage on Dexterity saving throws\n" +
            "against effects that you can see, such as traps and spells.\n" +
            "To gain this benefit, you can’t be blinded, deafened, or\n" +
            "incapacitated." +
            "P r i m a l Pa t h\n" +
            "At 3rd level, you choose a path that shapes the nature of\n" +
            "your rage. Choose the Path of the Berserker or the Path\n" +
            "o f the Totem Warrior, both detailed at the end o f the\n" +
            "class description. Your choice grants you features at 3rd\n" +
            "level and again at 6th, 10th, and 14th levels." +
            "A b i l i t y S c o r e I m p r o v e m e n t\n" +
            "When you reach 4th level, and again at 8th, 12th, 16th,\n" +
            "and 19th level, you can increase one ability score o f your\n" +
            "choice by 2, or you can increase two ability scores of\n" +
            "your choice by 1. As normal, you can’t increase an ability\n" +
            "score above 20 using this feature.\n" +
            "E x t r a A t t a c k\n" +
            "Beginning at 5th level, you can attack twice, instead of\n" +
            "once, whenever you take the Attack action on your turn.\n" +
            "Fa s t M o v e m e n t\n" +
            "Starting at 5th level, your speed increases by 10 feet\n" +
            "while you aren’t w earing heavy armor.\n" +
            "F e r a l I n s t i n c t\n" +
            "By 7th level, your instincts are so honed that you have\n" +
            "advantage on initiative rolls.\n" +
            "Additionally, if you are surprised at the beginning of\n" +
            "combat and aren’t incapacitated, you can act normally\n" +
            "on your first turn, but only if you enter your rage before\n" +
            "doing anything else on that turn.\n" +
            "B r u t a l C r i t i c a l\n" +
            "Beginning at 9th level, you can roll one additional\n" +
            "weapon damage die when determining the extra\n" +
            "damage for a critical hit with a melee attack.\n" +
            "This increases to two additional dice at 13th level\n" +
            "and three additional dice at 17th level.\n" +
            "R e l e n t l e s s R a g e\n" +
            "Starting at 11th level, your rage can keep you fighting\n" +
            "despite grievous w ounds. If you drop to 0 hit points\n" +
            "while you’re raging and don’t die outright, you can make\n" +
            "a DC 10 Constitution saving throw. If you succeed, you\n" +
            "drop to 1 hit point instead.\n" +
            "Each time you use this feature after the first, the DC\n" +
            "increases by 5. When you finish a short or long rest, the\n" +
            "DC resets to 10." +
            "P e r s i s t e n t R a g e: Beginning at 15th level, your rage is so fierce that\n" +
            "it ends early only if you fall unconscious or if you\n" +
            "choose to end it.\n" +
            "I n d o m i t a b l e M i g h t\n" +
            "Beginning at 18th level, if your total for a Strength\n" +
            "check is less than your Strength score, you can use that\n" +
            "score in place o f the total.\n" +
            "P r i m a l C h a m p i o n\n" +
            "At 20th level, you embody the power of the wilds. Your\n" +
            "Strength and Constitution scores increase by 4. Your\n" +
            "maximum for those scores is now 24.\n" +
            "Pr ima l Paths\n" +
            "Rage burns in every barbarian’s heart, a furnace\n" +
            "that drives him or her toward greatness. Different " +
            "Pa t h o f t h e B e r s e r k e r\n" +
            "For some barbarians, rage is a means to an end-—that\n" +
            "end being violence. The Path o f the Berserker is a path\n" +
            "of untrammeled fury, slick with blood. As you enter\n" +
            "the berserker’s rage, you thrill in the chaos o f battle,\n" +
            "heedless o f your own health or well-being.\n" +
            "F r e n z y\n" +
            "Starting when you choose this path at 3rd level, you\n" +
            "can go into a frenzy when you rage. If you do so, for\n" +
            "the duration o f your rage you can make a single melee\n" +
            "weapon attack as a bonus action on each o f your turns\n" +
            "after this one. When your rage ends, you suffer one level\n" +
            "o f exhaustion (as described in appendix A).\n" +
            "M in d l e s s R a g e\n" +
            "Beginning at 6th level, you can’t be charmed or\n" +
            "frightened while raging. If you are charmed or\n" +
            "frightened when you enter your rage, the effect is\n" +
            "suspended for the duration o f the rage.\n" +
            "I n t im i d a t i n g P r e s e n c e\n" +
            "Beginning at 10th level, you can use your action to\n" +
            "frighten someone with your menacing presence.\n" +
            "When you do so, choose one creature that you can see\n" +
            "within 30 feet o f you. If the creature can see or hear\n" +
            "you, it must succeed on a W isdom saving throw (DC\n" +
            "equal to 8 + your proficiency bonus + your Charisma\n" +
            "modifier) or be frightened o f you until the end o f your\n" +
            "next turn. On subsequent turns, you can use your action\n" +
            "to extend the duration o f this effect on the frightened " +
            "creature until the end of your next turn. This effect ends\n" +
            "if the creature ends its turn out o f line o f sight or more\n" +
            "than 60 feet away from you.\n" +
            "If the creature succeeds on its saving throw, you can't\n" +
            "use this feature on that creature again for 24 hours.\n" +
            "R e t a l i a t i o n\n" +
            "Starting at 14th level, when you take damage from\n" +
            "a creature that is within 5 feet o f you. you can use\n" +
            "your reaction to make a melee weapon attack against\n" +
            "that creature." +
            "Pa t h o f t h e T o t e m W a r r i o r\n" +
            "The Path o f the Totem Warrior is a spiritual journey, as\n" +
            "the barbarian accepts a spirit animal as guide, protector,\n" +
            "and inspiration. In battle, your totem spirit fills you\n" +
            "with supernatural might, adding magical fuel to your\n" +
            "barbarian rage.\n" +
            "Most barbarian tribes consider a totem animal to be\n" +
            "kin to a particular clan. In such cases, it is unusual for\n" +
            "an individual to have more than one totem animal spirit,\n" +
            "though exceptions exist.\n" +
            "S p i r i t S e e k e r\n" +
            "Yours is a path that seeks attunement with the natural\n" +
            "world, giving you a kinship with beasts. At 3rd level when\n" +
            "you adopt this path, you gain the ability to cast the beast\n" +
            "sense and speak with animals spells, but only as rituals,\n" +
            "as described in chapter 10.\n" +
            "T o t e m Sp i r i t\n" +
            "At 3rd level, when you adopt this path, you choose a\n" +
            "totem spirit and gain its feature. You must make or\n" +
            "acquire a physical totem object- an amulet or similar\n" +
            "adornment—that incorporates fur or feathers, claws,\n" +
            "teeth, or b ones o f the totem animal. At your option, you\n" +
            "also gain minor physical attributes that are reminiscent\n" +
            "o f your totem spirit. For example, if you have a bear\n" +
            "totem spirit, you might be unusually hairy and thickskinned,\n" +
            "or if your totem is the eagle, your eyes turn\n" +
            "bright yellow." +
            "Your totem animal might be an animal related to those\n" +
            "listed here but more appropriate to your homeland.\n" +
            "For example, you could choose a hawk or vulture in\n" +
            "place o f an eagle.\n" +
            "Bear. While raging, you have resistance to all damage\n" +
            "except psychic damage. The spirit o f the bear makes you\n" +
            "tough enough to stand up to any punishment.\n" +
            "Eagle. While you're raging and aren’t wearing\n" +
            "heavy armor, other creatures have disadvantage on\n" +
            "opportunity attack rolls against you, and you can use the\n" +
            "Dash action as a bonus action on your turn. The spirit\n" +
            "of the eagle makes you into a predator w ho can weave\n" +
            "through the fray with ease.\n" +
            "Wolf, While you're raging, your friends have\n" +
            "advantage on melee attack rolls against any creature\n" +
            "within 5 feet o f you that is hostile to you. The spirit of\n" +
            "the wolf makes you a leader o f hunters.\n" +
            "A s p e c t o f t h e B e a s t\n" +
            "At 6th level, you gain a magical benefit based on the\n" +
            "totem animal o f your choice. You can choose the same\n" +
            "animal you selected at 3rd level or a different one.\n" +
            "Bear. You gain the might o f a bear. Your carrying\n" +
            "capacity (including maximum load and maximum lift)\n" +
            "is doubled, and you have advantage on Strength checks\n" +
            "made to push, pull, lift, or break objects.\n" +
            "Eagle. You gain the eyesight o f an eagle. You can\n" +
            "see up to 1 mile away with no difficulty, able to discern\n" +
            "even fine details as though looking at something no\n" +
            "more than 100 feet away from you. Additionally, dim\n" +
            "light doesn't impose disadvantage on your Wisdom\n" +
            "(Perception) checks.\n" +
            "Wolf, You gain the hunting sensibilities o f a wolf. You\n" +
            "can track other creatures while traveling at a fast pace,\n" +
            "and you can move stealthily while traveling at a normal\n" +
            "pace (see chapter 8 for rules on travel pace).\n" +
            "S p i r i t W a l k e r\n" +
            "At 10th level, you can cast the commune with nature\n" +
            "spell, but only as a ritual. When you do so, a spiritual\n" +
            "version o f one o f the animals you chose for Totem Spirit\n" +
            "or Aspect o f the Beast appears to you to convey the\n" +
            "information you seek.\n" +
            "T o t e m i c A t t u n e m e n t\n" +
            "At 14th level, you gain a magical benefit based on a\n" +
            "totem animal o f your choice. You can choose the same\n" +
            "animal you selected previously or a different one.\n" +
            "Bear, While you’re raging, any creature within 5 feet\n" +
            "o f you that’s hostile to you has disadvantage on attack\n" +
            "rolls against targets other than you or another character\n" +
            "with this feature. An enemy is immune to this effect if it\n" +
            "can’t see or hear you or if it can’t be frightened.\n" +
            "Eagle. While raging, you have a flying speed equal to\n" +
            "your current walking speed. This benefit works only in\n" +
            "short bursts; you fall if you end your turn in the air and\n" +
            "nothing else is holding you aloft.\n" +
            "Wolf. While you’re raging, you can use a bonus action\n" +
            "on your turn to knock a Large or smaller creature prone\n" +
            "when you hit it with melee weapon attack.";
    }
    else if(arg1.value == "bard"){
        var classDescription = "As a bard, you gain the following class features.\n" +
            "H i t P o in t s\n" +
            "Hit Dice: 1d8 per bard level\n" +
            "Hit Points at 1st Level: 8 + your Constitution modifier\n" +
            "Hit Points at Higher Levels: 1d8 (or 5) + your\n" +
            "Constitution modifier per bard level after 1st" + "P r o f i c ie n c ie s\n" +
            "Armor: Light armor\n" +
            "Weapons: Simple weapons, hand crossbows,\n" +
            "longswords, rapiers, shortswords\n" +
            "Tools: Three musical instruments o f your choice\n" +
            "Saving Throws: Dexterity, Charisma\n" +
            "Skills: Choose any three" +
            "E q u i p m e n t\n" +
            "You start with the following equipment, in addition to\n" +
            "the equipment granted by your background:\n" +
            "• (a) a rapier, (b) a longsword, or (c) any simple weapon\n" +
            "• (a) a diplomat’s pack or (b) an entertainer's pack\n" +
            "• (a) a lute or (b) any other musical instrument\n" +
            "• Leather armor and a dagger\n" +
            "S p e l l c a s t i n g\n" +
            "You have learned to untangle and reshape the fabric of\n" +
            "reality in harmony with your wishes and music. Your\n" +
            "spells are part o f your vast repertoire, magic that you\n" +
            "can tune to different situations. See chapter 10 for the\n" +
            "general rules o f spellcasting and chapter 11 for the\n" +
            "bard spell list.\n" +
            "C a n t r i p s\n" +
            "You know two cantrips o f your choice from the bard\n" +
            "spell list. You learn additional bard cantrips o f your\n" +
            "choice at higher levels, as shown in the Cantrips Known\n" +
            "column o f the Bard table." +
            "Sp e l l Sl o t s\n" +
            "The Bard table shows how many spell slots you have to\n" +
            "cast your spells of 1st level and higher. To cast one of\n" +
            "these spells, you must expend a slot o f the spell’s level\n" +
            "or higher. You regain all expended spell slots when you\n" +
            "finish a long rest.\n" +
            "For example, if you know the 1st-level spell cure\n" +
            "wounds and have a 1st-level and a 2nd-level spell slot\n" +
            "available, you can cast cure wounds using either slot.\n" +
            "Sp e l l s K n o w n o f 1s t L e v e l a n d H ig h e r\n" +
            "You know four 1st-level spells o f your choice from the\n" +
            "bard spell list.\n" +
            "The Spells Known column of the Bard table shows\n" +
            "when you learn more bard spells o f your choice. Each of\n" +
            "these spells must be o f a level for which you have spell\n" +
            "slots, as shown on the table. For instance, when you\n" +
            "reach 3rd level in this class, you can learn one new spell\n" +
            "o f 1st or 2nd level.\n" +
            "Additionally, when you gain a level in this class, you\n" +
            "can choose one of the bard spells you know and replace\n" +
            "it with another spell from the bard spell list, which also\n" +
            "must be o f a level for which you have spell slots.\n" +
            "Sp e l l c a s t in g A b i l i t y\n" +
            "Charisma is your spellcasting ability for your bard\n" +
            "spells. Your magic comes from the heart and soul you\n" +
            "pour into the performance o f your music or oration.\n" +
            "You use your Charisma whenever a spell refers to your\n" +
            "spellcasting ability. In addition, you use your Charisma" +
            "modifier when setting the saving throw DC for a bard\n" +
            "spell you cast and when making an attack roll with one.\n" +
            "Spell save DC = 8 + your proficiency bonus +\n" +
            "your Charisma modifier\n" +
            "Spell attack modifier = your proficiency bonus +\n" +
            "your Charisma modifier\n" +
            "R i t u a l C a s t i n g\n" +
            "You can cast any bard spell you know as a ritual if that\n" +
            "spell has the ritual tag.\n" +
            "Sp e l l c a s t in g Fo c u s\n" +
            "You can use a musical instrument (found in chapter 5)\n" +
            "as a spellcasting focus for your bard spells.\n" +
            "B a r d i c I n s p i r a t i o n\n" +
            "You can inspire others through stirring w ords or music.\n" +
            "To do so, you use a bonus action on your turn to choose\n" +
            "one creature other than yourself within 60 feet of you\n" +
            "who can hear you. That creature gains one Bardic\n" +
            "Inspiration die, a d6.\n" +
            "Once within the next 10 minutes, the creature can roll\n" +
            "the die and add the number rolled to one ability check,\n" +
            "attack roll, or saving throw it makes. The creature can\n" +
            "wait until after it rolls the d20 before deciding to use the\n" +
            "Bardic Inspiration die, but must decide before the DM\n" +
            "says whether the roll succeeds or fails. Once the Bardic\n" +
            "Inspiration die is rolled, it is lost. A creature can have\n" +
            "only one Bardic Inspiration die at a time.\n" +
            "T h e B a r d\n" +
            "Level\n" +
            "Proficiency\n" +
            "Bonus Features\n" +
            "Cantrips\n" +
            "Known\n" +
            "Spells\n" +
            "Known\n" +
            "— Spell Slots per Spell Level—\n" +
            "1st 2nd 3rd 4th 5th 6th 7th 8th 9th\n" +
            "1st +2 Spellcasting, Bardic Inspiration (d6) 2 4 2 — — — — — — — —\n" +
            "2nd +2 jack of All Trades, Song of Rest (d 6) 2 5 3 — — — — — — — —\n" +
            "3rd +2 Bard College, Expertise 2 6 4 2 — — — — — — —\n" +
            "4th +2 Ability Score Improvement 3 7 4 3 — — — — — — —\n" +
            "5th +3 Bardic Inspiration (d8),\n" +
            "Font of Inspiration\n" +
            "3 8 4 3 2 — — — — — —\n" +
            "6th +3 Countercharm, Bard College feature 3 9 4 3 3 — — — — — —\n" +
            "7th +3 — 3 10 4 3 3 1 — — — — —\n" +
            "8th +3 Ability Score Improvement 3 11 4 3 3 2 — — — — —\n" +
            "9th +4 Song of Rest (d8) 3 12 4 3 3 3 1 — — — —\n" +
            "10th +4 Bardic Inspiration (d10), Expertise,\n" +
            "Magical Secrets\n" +
            "4 14 4 3 3 3 2 — — — —\n" +
            "11th +4 — 4 15 4 3 3 3 2 1 — — —\n" +
            "12th +4 Ability Score Improvement 4 15 4 3 3 3 2 1 — — —\n" +
            "13th +5 Song of Rest (d10) 4 16 4 3 3 3 2 1 1 — —\n" +
            "14th +5 Magical Secrets,\n" +
            "Bard College feature\n" +
            "4 18 4 3 3 3 2 1 1 — —\n" +
            "15th +5 Bardic Inspiration (d12) 4 19 4 3 3 3 2 1 1 1 —\n" +
            "16th +5 Ability Score Improvement 4 19 4 3 3 3 2 1 1 1 —\n" +
            "17th +6 Song of Rest (d12) 4 20 4 3 3 3 2 1 1 1 1\n" +
            "18th +6 Magical Secrets 4 22 4 3 3 3 3 1 1 1 1\n" +
            "19th +6 Ability Score Improvement 4 22 4 3 3 3 3 2 1 1 1\n" +
            "20th +6 Superior Inspiration 4 22 4 3 3 3 3 2 2 1 1\n" +
            "You can use this feature a number o f times equal\n" +
            "to your Charisma modifier (a minimum o f once). You\n" +
            "regain any expended uses when you finish a long rest.\n" +
            "Your Bardic Inspiration die changes when you reach\n" +
            "certain levels in this class. The die becomes a d8 at 5th\n" +
            "level, a d 10 at 10th level, and a d l2 at 15th level.\n" +
            "J a c k o f A l l T r a d e s\n" +
            "Starting at 2nd level, you can add half your proficiency\n" +
            "bonus, rounded down, to any ability check you make that\n" +
            "doesn’t already include your proficiency bonus.\n" +
            "S o n g o f R e s t\n" +
            "Beginning at 2nd level, you can use soothing music or\n" +
            "oration to help revitalize your wounded allies during\n" +
            "a short rest. If you or any friendly creatures w ho can\n" +
            "hear your performance regain hit points at the end of\n" +
            "the short rest, each of those creatures regains an extra\n" +
            "1d6 hit points.\n" +
            "The extra hit points increase when you reach certain\n" +
            "levels in this class: to 1d8 at 9th level, to 1d 10 at 13th\n" +
            "level, and to 1d 12 at 17th level.\n" +
            "B a r d C o l l e g e\n" +
            "At 3rd level, you delve into the advanced techniques of\n" +
            "a bard college o f your choice: the College o f Lore or the\n" +
            "College o f Valor, both detailed at the end o f the class\n" +
            "description. Your choice grants you features at 3rd level\n" +
            "and again at 6th and 14th level.\n" +
            "E x p e r t i s e\n" +
            "At 3rd level, choose two of your skill proficiencies. Your\n" +
            "proficiency bonus is doubled for any ability check you\n" +
            "make that uses either o f the chosen proficiencies.\n" +
            "At 10th level, you can choose another two skill\n" +
            "proficiencies to gain this benefit.\n" +
            "A b i l i t y S c o r e I m p r o v e m e n t\n" +
            "When you reach 4th level, and again at 8th, 12th, 16th,\n" +
            "and 19th level, you can increase one ability score o f your\n" +
            "choice by 2, or you can increase two ability s cores o f\n" +
            "your choice by 1. As normal, you can’t increase an ability\n" +
            "score above 20 using this feature.\n" +
            "F o n t o f I n s p i r a t i o n\n" +
            "Beginning when you reach 5th level, you regain all of\n" +
            "your expended uses o f Bardic Inspiration when you\n" +
            "finish a short or long rest.\n" +
            "C o u n t e r c h a r m\n" +
            "At 6th level, you gain the ability to use musical notes or\n" +
            "words o f power to disrupt mind-influencing effects. As\n" +
            "an action, you can start a performance that lasts until\n" +
            "the end o f your next turn. During that time, you and any\n" +
            "friendly creatures within 30 feet o f you have advantage\n" +
            "on saving throws against being frightened or charmed.\n" +
            "A creature must be able to hear you to gain this benefit.\n" +
            "The performance ends early if you are incapacitated or\n" +
            "silenced or if you voluntarily end it (no action required).\n" +
            "M a g i c a l S e c r e t s\n" +
            "By 10th level, you have plundered magical knowledge\n" +
            "from a w ide spectrum of disciplines. Choose two spells\n" +
            "from any class, including this one. A spell you choose\n" +
            "must be o f a level you can cast, as shown on the Bard\n" +
            "table, or a cantrip.\n" +
            "The chosen spells count as bard spells for you and are\n" +
            "included in the number in the Spells Known column of\n" +
            "the Bard table.\n" +
            "You learn two additional spells from any class at 14th\n" +
            "level and again at 18th level.\n" +
            "S u p e r i o r I n s p i r a t i o n\n" +
            "At 20th level, when you roll initiative and have no uses\n" +
            "o f Bardic Inspiration left, you regain one use.\n" +
            "Bard C olleges\n" +
            "The way o f a bard is gregarious. Bards seek each\n" +
            "other out to swap songs and stories, boast o f their\n" +
            "accomplishments, and share their knowledge. Bards\n" +
            "form loose associations, which they call colleges, to\n" +
            "facilitate their gatherings and preserve their traditions.\n" +
            "C o l l e g e o f L o r e\n" +
            "Bards o f the College o f Lore know something about\n" +
            "most things, collecting bits o f knowledge from sources\n" +
            "as diverse as scholarly tomes and peasant tales.\n" +
            "Whether singing folk ballads in taverns or elaborate\n" +
            "compositions in royal courts, these bards use their gifts\n" +
            "to hold audiences spellbound. When the applause dies\n" +
            "down, the audience members might find themselves\n" +
            "questioning everything they held to be true, from their\n" +
            "faith in the priesthood o f the local temple to their\n" +
            "loyalty to the king.\n" +
            "The loyalty of these bards lies in the pursuit o f beauty\n" +
            "and truth, not in fealty to a monarch or following the\n" +
            "tenets o f a deity. A noble who keeps such a bard as a\n" +
            "herald or advisor knows that the bard w ould rather be\n" +
            "honest than politic.\n" +
            "The college’s members gather in libraries and\n" +
            "sometimes in actual colleges, complete with classrooms\n" +
            "and dormitories, to share their lore with one another.\n" +
            "They also meet at festivals or affairs o f state, where they\n" +
            "can expose corruption, unravel lies, and poke fun at selfimportant\n" +
            "figures o f authority.\n" +
            "B o n u s P r o f i c ie n c ie s\n" +
            "When you join the College o f Lore at 3rd level, you gain\n" +
            "proficiency with three skills o f your choice.\n" +
            "C u t t i n g W o r d s\n" +
            "Also at 3rd level, you learn how to use your wit to\n" +
            "distract, confuse, and otherwise sap the confidence and\n" +
            "competence o f others. When a creature that you can\n" +
            "see within 60 feet o f you makes an attack roll, an ability\n" +
            "check, or a damage roll, you can use your reaction to\n" +
            "expend one o f your uses o f Bardic Inspiration, rolling\n" +
            "a Bardic Inspiration die and subtracting the number\n" +
            "rolled from the creature’s roll. You can choose to use\n" +
            "this feature after the creature makes its roll, but before\n" +
            "the DM determines whether the attack roll or ability";
    }
    else if(arg1.value == "cleric"){
        var classDescription = "H i t P o in t s\n" +
            "Hit Dice: 1d8 per cleric level\n" +
            "Hit Points at 1st Level: 8 + your Constitution modifier\n" +
            "Hit Points at Higher Levels: 1d8 (or 5) + your\n" +
            "Constitution modifier per cleric level after 1st\n" +
            "P r o f i c ie n c ie s\n" +
            "Armor: Light armor, medium armor, shields\n" +
            "Weapons: All simple weapons\n" +
            "Tools: None\n" +
            "Saving Throws: Wisdom, Charisma\n" +
            "Skills: Choose two from History, Insight, Medicine,\n" +
            "Persuasion, and Religion\n" +
            "E q u i p m e n t\n" +
            "You start with the following equipment, in addition to\n" +
            "the equipment granted by your background:\n" +
            "• (a) a mace or (b) a warhammer (if proficient)\n" +
            "• (a) scale mail, (b) leather armor, or (c) chain mail (if\n" +
            "proficient)\n" +
            "• (a) a light crossbow and 20 bolts or (b) any simple\n" +
            "weapon\n" +
            "• (a) a priest’s pack or (b) an explorer’s pack\n" +
            "• A shield and a holy symbol\n" +
            "T h e C l e r i c\n" +
            "Level\n" +
            "Proficiency\n" +
            "Bonus Features\n" +
            "Cantrips\n" +
            "Known\n" +
            "— Spell Slots per Spell Level—\n" +
            "1st 2nd 3rd 4th 5th 6th 7th 8th 9th\n" +
            "1st +2 Spellcasting, Divine Domain 3 2 — — — — — — — —\n" +
            "2nd +2 Channel Divinity (1/rest),\n" +
            "Divine Domain feature\n" +
            "3 3 — — — — — — — —\n" +
            "3rd +2 — 3 4 2 — — — — — — —\n" +
            "4th +2 Ability Score Improvement 4 4 3 — — — — — — —\n" +
            "5th +3 Destroy Undead (CR 1/2) 4 4 3 2 — — — — — —\n" +
            "6th +3 Channel Divinity (2/rest),\n" +
            "Divine Domain feature\n" +
            "4 4 3 3 — — — — — —\n" +
            "7th +3 — 4 4 3 3 1 — — — — —\n" +
            "8th +3 Ability Score Improvement, Destroy Undead\n" +
            "(CR 1), Divine Domain feature\n" +
            "4 4 3 3 2 — — — — —\n" +
            "9th +4 — 4 4 3 3 3 1 — — — —\n" +
            "10th +4 Divine Intervention 5 4 3 3 3 2 — — — —\n" +
            "11th +4 Destroy Undead (CR 2) 5 4 3 3 3 2 1 — — —\n" +
            "12th +4 Ability Score Improvement 5 4 3 3 3 2 1 — — —\n" +
            "13th +5 — 5 4 3 3 3 2 1 1 — —\n" +
            "14th +5 Destroy Undead (CR 3) 5 4 3 3 3 2 1 1 — —\n" +
            "15th +5 — 5 4 3 3 3 2 1 1 1 —\n" +
            "16th +5 Ability Score Improvement 5 4 3 3 3 2 1 1 1 —\n" +
            "17th +6 Destroy Undead (CR 4),\n" +
            "Divine Domain feature\n" +
            "5 4 3 3 3 2 1 1 1 1\n" +
            "18th +6 Channel Divinity (3/rest) 5 4 3 3 3 3 1 1 1 1\n" +
            "19th +6 Ability Score improvement 5 4 3 3 3 3 2 1 1 1\n" +
            "20th +6 Divine Intervention improvement 5 4 3 3 3 3 2 2 1 1\n" +
            "S p e l l c a s t i n g\n" +
            "As a conduit for divine power, you can cast cleric spells.\n" +
            "See chapter 10 for the general rules o f spellcasting and\n" +
            "chapter 11 for the cleric spell list.\n" +
            "C a n t r i p s\n" +
            "At 1st level, you know three cantrips o f your choice from\n" +
            "the cleric spell list. You learn additional cleric cantrips\n" +
            "o f your choice at higher levels, as shown in the Cantrips\n" +
            "Known column o f the Cleric table.\n" +
            "P r e p a r in g a n d C a s t in g S p e l l s\n" +
            "The Cleric table shows how many spell slots you have\n" +
            "to cast your spells o f 1st level and higher. To cast one of\n" +
            "these spells, you must expend a slot of the spell’s level\n" +
            "or higher. You regain all expended spell slots when you\n" +
            "finish a long rest.\n" +
            "You prepare the list o f cleric spells that are available\n" +
            "for you to cast, choosing from the cleric spell list. When\n" +
            "you do so, choose a number o f cleric spells equal to\n" +
            "your Wisdom modifier + your cleric level (minimum of\n" +
            "one spell). The spells must be o f a level for which you\n" +
            "have spell slots.\n" +
            "For example, if you are a 3rd-level cleric, you have four\n" +
            "1st-level and two 2nd-level spell slots. With a Wisdom\n" +
            "o f 16, your list o f prepared spells can include six spells\n" +
            "o f 1st or 2nd level, in any combination. If you prepare\n" +
            "the 1st-level spell cure wounds, you can cast it using\n" +
            "a 1st-level or 2nd-level slot. Casting the spell doesn’t\n" +
            "remove it from your list o f prepared spells.\n" +
            "You can change your list o f prepared spells when you\n" +
            "finish a long rest. Preparing a new list o f cleric spells\n" +
            "requires time spent in prayer and meditation: at least 1\n" +
            "minute per spell level for each spell on your list.\n" +
            "S p e l l c a s t in g A b i l i t y\n" +
            "Wisdom is your spellcasting ability for your cleric spells.\n" +
            "The power o f your spells comes from your devotion to\n" +
            "your deity. You use your W isdom whenever a cleric spell\n" +
            "refers to your spellcasting ability. In addition, you use\n" +
            "your Wisdom modifier when setting the saving throw\n" +
            "DC for a cleric spell you cast and when making an\n" +
            "attack roll with one.\n" +
            "Spell save DC = 8 + your proficiency bonus +\n" +
            "your Wisdom modifier\n" +
            "Spell attack modifier = your proficiency bonus +\n" +
            "your Wisdom modifier\n" +
            "R i t u a l C a s t in g\n" +
            "You can cast a cleric spell as a ritual if that spell has the\n" +
            "ritual tag and you have the spell prepared.\n" +
            "Sp e l l c a s t in g F o c u s\n" +
            "You can use a holy symbol (found in chapter 5) as a\n" +
            "spellcasting focus for your cleric spells.\n" +
            "D i v i n e D o m a i n\n" +
            "Choose one domain related to your deity: Knowledge,\n" +
            "Life, Light, Nature, Tempest, Trickery, or War. Each\n" +
            "domain is detailed at the end o f the class description,\n" +
            "and each one provides examples o f gods associated\n" +
            "with it. Your choice grants you domain spells and other\n" +
            "features when you choose it at 1st level. It also grants\n" +
            "you additional ways to use Channel Divinity when you\n" +
            "gain that feature at 2nd level, and additional benefits at\n" +
            "6th, 8th, and 17th levels.\n" +
            "D o m a in S p e l l s\n" +
            "Each domain has a list o f spells—its domain spells—\n" +
            "that you gain at the cleric levels noted in the domain\n" +
            "description. Once you gain a domain spell, you always\n" +
            "have it prepared, and it doesn’t count against the\n" +
            "number o f spells you can prepare each day.\n" +
            "If you have a domain spell that doesn’t appear on the\n" +
            "cleric spell list, the spell is nonetheless a cleric spell for you.\n" +
            "C h a n n e l D i v i n i t y\n" +
            "At 2nd level, you gain the ability to channel divine\n" +
            "energy directly from your deity, using that energy to fuel\n" +
            "magical effects. You start with two such effects: Turn\n" +
            "Undead and an effect determined by your domain. Some\n" +
            "domains grant you additional effects as you advance in\n" +
            "levels, as noted in the domain description.\n" +
            "When you use your Channel Divinity, you choose\n" +
            "which effect to create. You must then finish a short or\n" +
            "long rest to use your Channel Divinity again.\n" +
            "Some Channel Divinity effects require saving throws.\n" +
            "When you use such an effect from this class, the DC\n" +
            "equals your cleric spell save DC.\n" +
            "Beginning at 6th level, you can use your Channel\n" +
            "Divinity twice between rests, and beginning at 18th level.\n" +
            "you can use it three times between rests. When you finish\n" +
            "a short or long rest, you regain your expended uses.\n" +
            "C h a n n e l D i v i n i t y : T u r n U n d e a d\n" +
            "As an action, you present your holy symbol and speak a\n" +
            "prayer censuring the undead. Each undead that can see\n" +
            "or hear you within 30 feet o f you must make a W isdom\n" +
            "saving throw. If the creature fails its saving throw, it is\n" +
            "turned for 1 minute or until it takes any damage.\n" +
            "A turned creature must spend its turns trying to move\n" +
            "as far away from you as it can, and it can’t willingly\n" +
            "move to a space within 30 feet o f you. It also can’t take\n" +
            "reactions. For its action, it can use only the Dash action\n" +
            "or try to escape from an effect that prevents it from\n" +
            "moving. If there’s nowhere to move, the creature can use\n" +
            "the Dodge action.\n" +
            "A b i l i t y S c o r e I m p r o v e m e n t\n" +
            "When you reach 4th level, and again at 8th, 12th, 16th,\n" +
            "and 19th level, you can increase one ability score o f your\n" +
            "choice by 2, or you can increase two ability scores of\n" +
            "your choice by 1. As normal, you can’t increase an ability\n" +
            "score above 20 using this feature.\n" +
            "D e s t r o y U n d e a d\n" +
            "Starting at 5th level, when an undead fails its saving\n" +
            "throw against your Turn Undead feature, the creature is\n" +
            "instantly destroyed if its challenge rating is at or below a\n" +
            "certain threshold, as shown in the Destroy Undead table.\n" +
            "D e s t r o y U n d e a d\n" +
            "Cleric Level Destroys Undead of CR\n" +
            "5th 1/2 or lower\n" +
            "8th 1 or lower\n" +
            "11th 2 or lower\n" +
            "14th 3 or lower\n" +
            "17th 4 or lower\n" +
            "D i v i n e I n t e r v e n t i o n\n" +
            "Beginning at 10th level, you can call on your deity to\n" +
            "intervene on your behalf when your need is great.\n" +
            "Imploring your deity’s aid requires you to use your\n" +
            "action. Describe the assistance you seek, and roll\n" +
            "percentile dice. If you roll a number equal to or lower\n" +
            "than your cleric level, your deity intervenes. The DM\n" +
            "chooses the nature o f the intervention; the effect of any\n" +
            "cleric spell or cleric domain spell w ould be appropriate.\n" +
            "If your deity intervenes, you can’t use this feature\n" +
            "again for 7 days. Otherwise, you can use it again after\n" +
            "you finish a long rest.\n" +
            "At 20th level, your call for intervention succeeds\n" +
            "automatically, no roll required.\n" +
            "D ivine D oma ins\n" +
            "In a pantheon, every deity has influence over different\n" +
            "aspects o f mortal life and civilization, called a deity’s\n" +
            "domain. All the domains over which a deity has\n" +
            "influence are called the deity’s portfolio. For example,\n" +
            "the portfolio o f the Greek god Apollo includes the\n" +
            "domains o f Knowledge, Life, and Light. As a cleric, you\n" +
            "choose one aspect o f your deity’s portfolio to emphasize,\n" +
            "and you are granted powers related to that domain.\n" +
            "Your choice might correspond to a particular sect\n" +
            "dedicated to your deity. Apollo, for example, could be\n" +
            "worshiped in one region as Phoebus (“radiant”) Apollo,\n" +
            "emphasizing his influence over the Light domain,\n" +
            "and in a different place as Apollo A cesius (“healing”),\n" +
            "emphasizing his association with the Life domain.\n" +
            "Alternatively, your choice o f domain could simply be a\n" +
            "matter o f personal preference, the aspect o f the deity\n" +
            "that appeals to you most.\n" +
            "Each domain’s description gives examples o f deities\n" +
            "who have influence over that domain. Gods are included\n" +
            "from the worlds o f the Forgotten Realms, Greyhawk,\n" +
            "Dragonlance, and Eberron campaign settings, as well as\n" +
            "from the Celtic, Greek, Norse, and Egyptian pantheons\n" +
            "o f antiquity.\n" +
            "K n o w l e d g e D o m a i n\n" +
            "The gods o f knowledge—including Oghma, Boccob,\n" +
            "Gilean, Aureon, and Thoth—value learning and\n" +
            "understanding above all. Some teach that knowledge is\n" +
            "to be gathered and shared in libraries and universities,\n" +
            "or promote the practical knowledge o f craft and\n" +
            "invention. Some deities hoard knowledge and keep its\n" +
            "secrets to themselves. And some promise their followers\n" +
            "that they will gain tremendous power if they unlock the\n" +
            "secrets o f the multiverse. Followers o f these gods study\n" +
            "esoteric lore, collect old tomes, delve into the secret\n" +
            "places of the earth, and learn all they can. Some gods\n" +
            "o f knowledge promote the practical knowledge o f craft\n" +
            "and invention, including smith deities like Gond, Reorx,\n" +
            "Onatar, Moradin, Hephaestus, and Goibhniu.\n" +
            "K n o w l e d g e D o m a i n S p e l l s\n" +
            "Cleric Level Spells\n" +
            "1st command, identify\n" +
            "3rd augury, suggestion\n" +
            "5th nondetection, speak with dead\n" +
            "7th arcane eye, confusion\n" +
            "9th legend lore, scrying\n" +
            "B l e s s in g s o f K n o w l e d g e\n" +
            "At 1st level, you learn two languages o f your choice.\n" +
            "You also become proficient in your choice o f two o f the\n" +
            "following skills: Arcana, History, Nature, or Religion.\n" +
            "Your proficiency bonus is doubled for any ability check\n" +
            "you make that uses either o f those skills.\n" +
            "C h a n n e l D i v i n i t y :\n" +
            "K n o w l e d g e o f t h e A g e s\n" +
            "Starting at 2nd level, you can use your Channel Divinity\n" +
            "to tap into a divine well o f knowledge. As an action,\n" +
            "you choose one skill or tool. For 10 minutes, you have\n" +
            "proficiency with the chosen skill or tool.\n" +
            "C h a n n e l D i v i n i t y : R e a d T h o u g h t s\n" +
            "At 6th level, you can use your Channel Divinity to read a\n" +
            "creature’s thoughts. You can then use your access to the\n" +
            "creature’s mind to command it.\n" +
            "As an action, choose one creature that you can see\n" +
            "within 60 feet o f you. That creature must make a\n" +
            "Wisdom saving throw. If the creature succeeds on the\n" +
            "saving throw, you can’t use this feature on it again until\n" +
            "you finish a long rest.\n" +
            "If the creature fails its save, you can read its surface\n" +
            "thoughts (those foremost in its mind, reflecting its\n" +
            "current emotions and what it is actively thinking\n" +
            "about) when it is within 60 feet o f you. This effect lasts\n" +
            "for 1 minute.\n" +
            "During that time, you can use your action to end this\n" +
            "effect and cast the suggestion spell on the creature\n" +
            "without expending a spell slot. The target automatically\n" +
            "fails its saving throw against the spell.\n" +
            "P o t e n t S p e l l c a s t in g\n" +
            "Starting at 8th level, you add your W isdom modifier to\n" +
            "the damage you deal with any cleric cantrip.\n" +
            "V i s io n s o f t h e Pa s t\n" +
            "Starting at 17th level, you can call up visions o f the\n" +
            "past that relate to an object you hold or your immediate\n" +
            "surroundings. You spend at least 1 minute in meditation\n" +
            "and prayer, then receive dreamlike, shadowy glimpses\n" +
            "o f recent events. You can meditate in this way for a\n" +
            "number o f minutes equal to your W isdom score and\n" +
            "must maintain concentration during that time, as if you\n" +
            "were casting a spell.\n" +
            "Once you use this feature, you can’t use it again until\n" +
            "you finish a short or long rest.\n" +
            "Object Reading. Holding an object as you meditate,\n" +
            "you can see visions o f the object’s previous owner.\n" +
            "After meditating for 1 minute, you learn how the owner\n" +
            "acquired and lost the object, as w ell as the most recent\n" +
            "significant event involving the object and that owner.\n" +
            "If the object w as owned by another creature in the\n" +
            "recent past (within a number o f days equal to your\n" +
            "Wisdom score), you can spend 1 additional minute\n" +
            "for each owner to learn the same information about\n" +
            "that creature.\n" +
            "Area Reading. As you meditate, you see visions\n" +
            "o f recent events in your immediate vicinity (a room,\n" +
            "street, tunnel, clearing, or the like, up to a 50-foot cube),\n" +
            "going back a number o f days equal to your W isdom\n" +
            "score. For each minute you meditate, you learn about\n" +
            "one significant event, beginning with the most recent.\n" +
            "Significant events typically involve powerful emotions,\n" +
            "such as battles and betrayals, marriages and murders,\n" +
            "births and funerals. However, they might also include\n" +
            "more mundane events that are nevertheless important\n" +
            "in your current situation.\n" +
            "L i f e D o m a i n\n" +
            "The Life domain focuses on the vibrant positive\n" +
            "energy—one o f the fundamental forces o f the universe—\n" +
            "that sustains all life. The gods o f life promote vitality\n" +
            "and health through healing the sick and wounded,\n" +
            "caring for those in need, and driving away the forces of\n" +
            "death and undeath. Almost any non-evil deity can claim\n" +
            "influence over this domain, particularly agricultural\n" +
            "deities (such as Chauntea, Arawai, and Demeter), sun\n" +
            "gods (such as Lathander, Pelor, and Re-Horakhty), gods\n" +
            "B o n u s P r o f ic ie n c y\n" +
            "When you choose this domain at 1st level, you gain\n" +
            "proficiency with heavy armor.\n" +
            "D is c ip l e o f L if e\n" +
            "Also starting at 1st level, your healing spells are more\n" +
            "effective. Whenever you use a spell o f 1st level or higher\n" +
            "to restore hit points to a creature, the creature regains\n" +
            "additional hit points equal to 2 + the spell’s level.\n" +
            "C h a n n e l D i v i n i t y : P r e s e r v e L if e\n" +
            "Starting at 2nd level, you can use your Channel Divinity\n" +
            "to heal the badly injured.\n" +
            "As an action, you present your holy symbol and\n" +
            "evoke healing energy that can restore a number o f hit\n" +
            "points equal to five times your cleric level. Choose any\n" +
            "creatures within 30 feet o f you, and divide those hit\n" +
            "points among them. This feature can restore a creature\n" +
            "to no more than half o f its hit point maximum. You can’t\n" +
            "use this feature on an undead or a construct.\n" +
            "B l e s s e d H e a l e r\n" +
            "Beginning at 6th level, the healing spells you cast on\n" +
            "others heal you as well. When you cast a spell o f 1st\n" +
            "level or higher that restores hit points to a creature\n" +
            "other than you, you regain hit points equal to 2 + the\n" +
            "spell’s level.\n" +
            "D iv in e St r ik e\n" +
            "At 8th level, you gain the ability to infuse your w eapon\n" +
            "strikes with divine energy. Once on each o f your turns\n" +
            "when you hit a creature with a weapon attack, you can\n" +
            "cause the attack to deal an extra 1d8 radiant damage to\n" +
            "the target. When you reach 14th level, the extra damage\n" +
            "increases to 2d8.\n" +
            "Su p r e m e H e a l in g\n" +
            "Starting at 17th level, when you would normally roll\n" +
            "one or more dice to restore hit points with a spell, you\n" +
            "instead use the highest number possible for each die.\n" +
            "For example, instead o f restoring 2d6 hit points to a\n" +
            "creature, you restore 12.\n" +
            "L i g h t D o m a i n\n" +
            "Gods o f light—including Helm, Lathander, Pholtus,\n" +
            "Branchala, the Silver Flame, Belenus, Apollo, and\n" +
            "Re-Horakhty—promote the ideals o f rebirth and\n" +
            "renewal, truth, vigilance, and beauty, often using the\n" +
            "symbol o f the sun. Some o f these gods are portrayed\n" +
            "as the sun itself or as a charioteer who guides the sun\n" +
            "o f healing or endurance (such as Ilmater, Mishakal,\n" +
            "Apollo, and Diancecht), and gods of home and\n" +
            "community (such as Hestia, Hathor, and Boldrei).\n" +
            "L i f e D o m a i n S p e l l s\n" +
            "Cleric Level Spells\n" +
            "1st bless, cure wounds\n" +
            "3rd lesser restoration, spiritual weapon\n" +
            "5th beacon o f hope, revivify\n" +
            "7th death ward, guardian o f faith\n" +
            "9th mass cure wounds, raise dead\n" +
            "B o n u s C a n t r i p\n" +
            "When you choose this domain at 1st level, you gain the\n" +
            "light cantrip if you don’t already know it.\n" +
            "Wa r d in g F l a r e\n" +
            "Also at 1st level, you can interpose divine light between\n" +
            "yourself and an attacking enemy. When you are attacked\n" +
            "by a creature within 30 feet of you that you can see,\n" +
            "you can use your reaction to impose disadvantage on\n" +
            "the attack roll, causing light to flare before the attacker\n" +
            "before it hits or misses. An attacker that can’t be blinded\n" +
            "is immune to this feature.\n" +
            "You can use this feature a number o f times equal to\n" +
            "your W isdom modifier (a minimum o f once). You regain\n" +
            "all expended uses when you finish a long rest.\n" +
            "C h a n n e l D i v i n i t y : R a d ia n c e o f t h e D a w n\n" +
            "Starting at 2nd level, you can use your Channel Divinity\n" +
            "to harness sunlight, banishing darkness and dealing\n" +
            "radiant damage to your foes.\n" +
            "As an action, you present your holy symbol, and any\n" +
            "magical darkness within 30 feet o f you is dispelled.\n" +
            "Additionally, each hostile creature within 30 feet of\n" +
            "you must make a Constitution saving throw. A creature\n" +
            "takes radiant damage equal to 2d10 + your cleric level\n" +
            "on a failed saving throw, and half as much damage on a\n" +
            "successful one. A creature that has total cover from you\n" +
            "is not affected.\n" +
            "Im p r o v e d F l a r e\n" +
            "Starting at 6th level, you can also use your Warding\n" +
            "Flare feature when a creature that you can see within\n" +
            "30 feet o f you attacks a creature other than you.\n" +
            "P o t e n t S p e l l c a s t in g\n" +
            "Starting at 8th level, you add your Wisdom modifier to\n" +
            "the damage you deal with any cleric cantrip.\n" +
            "C o r o n a o f L ig h t\n" +
            "Starting at 17th level, you can use your action to activate\n" +
            "an aura o f sunlight that lasts for 1 minute or until you\n" +
            "dismiss it using another action. You emit bright light in\n" +
            "a 60-foot radius and dim light 30 feet beyond that. Your\n" +
            "enemies in the bright light have disadvantage on saving\n" +
            "throws against any spell that deals fire or radiant damage.\n" +
            "N a t u r e D o m a i n\n" +
            "Gods o f nature are as varied as the natural w orld\n" +
            "itself, from inscrutable gods o f the deep forests (such\n" +
            "as Silvanus, Obad-Hai, Chislev, Balinor, and Pan) to\n" +
            "friendly deities associated with particular springs and\n" +
            "groves (such as Eldath). Druids revere nature as a\n" +
            "whole and might serve one o f these deities, practicing\n" +
            "mysterious rites and reciting all-but-forgotten prayers in\n" +
            "their own secret tongue. But many o f these gods have\n" +
            "clerics as well, champions who take a more active role\n" +
            "in advancing the interests o f a particular nature god.\n" +
            "These clerics might hunt the evil monstrosities that\n" +
            "despoil the w oodlands, bless the harvest of the faithful,\n" +
            "or wither the crops o f those w ho anger their gods.\n" +
            "N a t u r e D o m a i n S p e l l s\n" +
            "Cleric Level Spells\n" +
            "1st animal friendship, speak with animals\n" +
            "3rd barkskin, spike growth\n" +
            "5th plant growth, wind wall\n" +
            "7th dominate beast, grasping vine\n" +
            "9th insect plague, tree stride\n" +
            "Cleric Level Spells\n" +
            "1st burning hands, faerie fire\n" +
            "3rd f laming sphere, scorching ray\n" +
            "5th daylight, f ireball\n" +
            "7th guardian o f faith, wall of f ire\n" +
            "9th f lame strike, scrying\n" +
            "across the sky. Others are tireless sentinels whose eyes\n" +
            "pierce every shadow and see through every deception.\n" +
            "Some are deities o f beauty and artistry, who teach that\n" +
            "art is a vehicle for the soul's improvement. Clerics o f a\n" +
            "god o f light are enlightened souls infused with radiance\n" +
            "and the power o f their gods’ discerning vision, charged\n" +
            "with chasing away lies and burning away darkness.\n" +
            "L i g h t D o m a i n S p e l l s\n" +
            "A c o l y t e o f N a t u r e\n" +
            "At 1st level, you learn one druid cantrip o f your choice.\n" +
            "You also gain proficiency in one o f the following skills of\n" +
            "your choice: Animal Handling, Nature, or Survival.\n" +
            "B o n u s P r o f ic ie n c y\n" +
            "Also at 1st level, you gain proficiency with heavy armor.\n" +
            "C h a n n e l D i v i n i t y : C h a r m A n im a l s\n" +
            "a n d P l a n t s\n" +
            "Starting at 2nd level, you can use your Channel Divinity\n" +
            "to charm animals and plants.\n" +
            "As an action, you present your holy symbol and invoke\n" +
            "the name o f your deity. Each beast or plant creature that\n" +
            "can see you within 30 feet of you must make a W isdom\n" +
            "saving throw. If the creature fails its saving throw, it is\n" +
            "charmed by you for 1 minute or until it takes damage.\n" +
            "While it is charmed by you, it is friendly to you and other\n" +
            "creatures you designate.\n" +
            "D a m p e n E l e m e n t s\n" +
            "Starting at 6th level, when you or a creature within 30\n" +
            "feet o f you takes acid, cold, fire, lightning, or thunder\n" +
            "damage, you can use your reaction to grant resistance to\n" +
            "the creature against that instance o f the damage.\n" +
            "D i v in e St r ik e\n" +
            "At 8th level, you gain the ability to infuse your w eapon\n" +
            "strikes with divine energy. Once on each o f your turns\n" +
            "when you hit a creature with a weapon attack, you\n" +
            "can cause the attack to deal an extra 1d8 cold, fire, or\n" +
            "lightning damage (your choice) to the target. When you\n" +
            "reach 14th level, the extra damage increases to 2d8.\n" +
            "M a s t e r o f N a t u r e\n" +
            "At 17th level, you gain the ability to command animals\n" +
            "and plant creatures. While creatures are charmed by\n" +
            "your Charm Animals and Plants feature, you can take\n" +
            "a bonus action on your turn to verbally command what\n" +
            "each o f those creatures will do on its next turn.\n" +
            "T e m p e s t D o m a i n\n" +
            "Gods whose portfolios include the Tempest d om a in -\n" +
            "including Talos, Umberlee, Kord, Zeboim, the\n" +
            "Devourer, Zeus, and Thor—govern storms, sea, and\n" +
            "sky. They include gods o f lightning and thunder, gods\n" +
            "o f earthquakes, some fire gods, and certain gods of\n" +
            "violence, physical strength, and courage. In some\n" +
            "pantheons, a god o f this domain rules over other deities\n" +
            "and is known for swift justice delivered by thunderbolts.\n" +
            "In the pantheons o f seafaring people, gods o f this\n" +
            "domain are ocean deities and the patrons o f sailors.\n" +
            "Tempest gods send their clerics to inspire fear in the\n" +
            "common folk, either to keep those folk on the path of\n" +
            "righteousness or to encourage them to offer sacrifices of\n" +
            "propitiation to w ard off divine wrath.\n" +
            "T e m p e s t D o m a i n S p e l l s\n" +
            "Cleric Level Spells\n" +
            "1st fo g cloud, thunderwave\n" +
            "3rd gust o f wind, shatter\n" +
            "5th call lightning, sleet storm\n" +
            "7th control water, ice storm\n" +
            "9th destructive wave, insect plague\n" +
            "B o n u s P r o f ic ie n c ie s\n" +
            "At 1st level, you gain proficiency with martial w eapons\n" +
            "and heavy armor.\n" +
            "W r a t h o f t h e St o r m\n" +
            "Also at 1st level, you can thunderously rebuke attackers.\n" +
            "When a creature within 5 feet o f you that you can see\n" +
            "hits you with an attack, you can use your reaction to\n" +
            "cause the creature to make a Dexterity saving throw.\n" +
            "The creature takes 2d8 lightning or thunder damage\n" +
            "(your choice) on a failed saving throw, and half as much\n" +
            "damage on a successful one.\n" +
            "You can use this feature a number o f times equal to\n" +
            "your Wisdom modifier (a minimum o f once). You regain\n" +
            "all expended uses when you finish a long rest.\n" +
            "C h a n n e l D i v i n i t y : D e s t r u c t iv e W r a t h\n" +
            "Starting at 2nd level, you can use your Channel Divinity\n" +
            "to wield the power o f the storm with unchecked ferocity.\n" +
            "When you roll lightning or thunder damage, you can\n" +
            "use your Channel Divinity to deal maximum damage,\n" +
            "instead o f rolling.\n" +
            "T h u n d e r b o l t St r ik e\n" +
            "At 6th level, when you deal lightning damage to a Large\n" +
            "or smaller creature, you can also push it up to 10 feet\n" +
            "away from you.\n" +
            "D iv in e St r ik e\n" +
            "At 8th level, you gain the ability to infuse your w eapon\n" +
            "strikes with divine energy. Once on each o f your turns\n" +
            "when you hit a creature with a w eapon attack, you can\n" +
            "cause the attack to deal an extra 1d8 thunder damage to\n" +
            "the target. When you reach 14th level, the extra damage\n" +
            "increases to 2d8.\n" +
            "St o r m b o r n\n" +
            "At 17th level, you have a flying speed equal to\n" +
            "your current walking speed whenever you are not\n" +
            "underground or indoors.\n" +
            "T r i c k e r y D o m a i n\n" +
            "Gods o f trickery—such as Tymora, Beshaba,\n" +
            "Olidammara, the Traveler, Garl Glittergold, and\n" +
            "Loki—are mischief-makers and instigators who stand\n" +
            "as a constant challenge to the accepted order among\n" +
            "both gods and mortals. They’re patrons o f thieves,\n" +
            "scoundrels, gamblers, rebels, and liberators. Their\n" +
            "clerics are a disruptive force in the world, puncturing\n" +
            "pride, mocking tyrants, stealing from the rich, freeing\n" +
            "captives, and flouting hollow traditions. They prefer\n" +
            "subterfuge, pranks, deception, and theft rather than\n" +
            "direct confrontation.\n" +
            "T r i c k e r y D o m a i n S p e l l s\n" +
            "B l e s s in g o f t h e T r i c k s t e r\n" +
            "Starting when you choose this domain at 1st level, you\n" +
            "can use your action to touch a w illing creature other\n" +
            "than yourself to give it advantage on Dexterity (Stealth)\n" +
            "checks. This blessing lasts for 1 hour or until you use\n" +
            "this feature again.\n" +
            "C h a n n e l D i v i n i t y : In v o k e D u p l i c i t y\n" +
            "Starting at 2nd level, you can use your Channel Divinity\n" +
            "to create an illusory duplicate o f yourself.\n" +
            "As an action, you create a perfect illusion of\n" +
            "yourself that lasts for 1 minute, or until you lose your\n" +
            "concentration (as if you were concentrating on a spell).\n" +
            "The illusion appears in an unoccupied space that you\n" +
            "can see within 30 feet o f you. As a bonus action on your\n" +
            "turn, you can move the illusion up to 30 feet to a space\n" +
            "you can see, but it must remain within 120 feet o f you.\n" +
            "For the duration, you can cast spells as though you\n" +
            "were in the illusion’s space, but you must use your own\n" +
            "senses. Additionally, when both you and your illusion\n" +
            "are within 5 feet o f a creature that can see the illusion,\n" +
            "you have advantage on attack rolls against that creature,\n" +
            "given how distracting the illusion is to the target.\n" +
            "C h a n n e l D i v i n i t y : C l o a k o f Sh a d o w s\n" +
            "Starting at 6th level, you can use your Channel\n" +
            "Divinity to vanish.\n" +
            "As an action, you become invisible until the end o f your\n" +
            "next turn. You become visible if you attack or cast a spell.\n" +
            "D i v in e St r i k e\n" +
            "At 8th level, you gain the ability to infuse your w eapon\n" +
            "strikes with poison—a gift from your deity. Once on each\n" +
            "o f your turns when you hit a creature with a weapon\n" +
            "attack, you can cause the attack to deal an extra 1d8\n" +
            "poison damage to the target. When you reach 14th level,\n" +
            "the extra damage increases to 2d8.\n" +
            "Im p r o v e d D u p l i c i t y\n" +
            "At 17th level, you can create up to four duplicates\n" +
            "o f yourself, instead o f one, when you use Invoke\n" +
            "Duplicity. As a bonus action on your turn, you can\n" +
            "move any number o f them up to 30 feet, to a maximum\n" +
            "range o f 120 feet.\n" +
            "W a r D o m a i n\n" +
            "War has many manifestations. It can make heroes of\n" +
            "ordinary people. It can be desperate and horrific, with\n" +
            "acts o f cruelty and cowardice eclipsing instances of\n" +
            "excellence and courage. In either case, the gods of war\n" +
            "watch over warriors and reward them for their great\n" +
            "deeds. The clerics o f such gods excel in battle, inspiring\n" +
            "others to fight the good fight or offering acts o f violence\n" +
            "as prayers. Gods o f war include champions o f honor\n" +
            "and chivalry (such as Torm, Heironeous, and Kiri-\n" +
            "Jolith) as well as gods o f destruction and pillage (such\n" +
            "as Erythnul, the Fury, Gruumsh, and Ares) and gods of\n" +
            "conquest and domination (such as Bane, Hextor, and\n" +
            "Maglubiyet). Other w ar gods (such as Tempus, Nike,\n" +
            "and Nuada) take a more neutral stance, promoting war\n" +
            "in all its manifestations and supporting w arriors in any\n" +
            "circumstance.\n" +
            "W a r D o m a i n S p e l l s\n" +
            "Cleric Level Spells\n" +
            "1st divine favor, shield o f faith\n" +
            "3rd magic weapon, spiritual weapon\n" +
            "5th crusader’s mantle, spirit guardians\n" +
            "7th freedom o f movement, stoneskin\n" +
            "9th f lame strike, hold monster\n" +
            "B o n u s P r o f i c ie n c ie s\n" +
            "At 1st level, you gain proficiency with martial w eapons\n" +
            "and heavy armor.\n" +
            "Wa r P r ie s t\n" +
            "From 1st level, your god delivers bolts o f inspiration to\n" +
            "you while you are engaged in battle. When you use the\n" +
            "Attack action, you can make one w eapon attack as a\n" +
            "bonus action.\n" +
            "You can use this feature a number o f times equal to\n" +
            "your Wisdom modifier (a minimum o f once). You regain\n" +
            "all expended uses when you finish a long rest.\n" +
            "C h a n n e l D i v i n i t y : G u id e d St r i k e\n" +
            "Starting at 2nd level, you can use your Channel Divinity\n" +
            "to strike with supernatural accuracy. When you make\n" +
            "an attack roll, you can use your Channel Divinity to gain\n" +
            "a +10 bonus to the roll. You make this choice after you\n" +
            "see the roll, but before the DM says whether the attack\n" +
            "hits or misses.\n" +
            "C h a n n e l D i v i n i t y : W a r G o d ’s B l e s s in g\n" +
            "At 6th level, when a creature within 30 feet o f you\n" +
            "makes an attack roll, you can use your reaction to grant\n" +
            "that creature a +10 bonus to the roll, using your Channel\n" +
            "Divinity. You make this choice after you see the roll, but\n" +
            "before the DM says whether the attack hits or misses.\n" +
            "D i v in e St r i k e\n" +
            "At 8th level, you gain the ability to infuse your weapon\n" +
            "strikes with divine energy. Once on each o f your turns\n" +
            "when you hit a creature with a weapon attack, you can\n" +
            "cause the attack to deal an extra 1d8 damage o f the\n" +
            "same type dealt by the weapon to the target. When you\n" +
            "reach 14th level, the extra damage increases to 2d8.\n" +
            "A v a t a r o f B a t t l e\n" +
            "At 17th level, you gain resistance to bludgeoning, piercing,\n" +
            "and slashing damage from nonmagical w eapons.";
    }
    else if(arg1.value == "druid"){
        var classDescription = "As a druid, you gain the following class features.\n" +
            "H i t P o in t s\n" +
            "Hit Dice: 1d8 per druid level\n" +
            "Hit Points at 1st Level: 8 + your Constitution modifier\n" +
            "Hit Points at Higher Levels: 1d8 (or 5) + your\n" +
            "Constitution modifier per druid level after 1st\n" +
            "P r o f ic ie n c ie s\n" +
            "Armor: Light armor, medium armor, shields (druids will\n" +
            "not wear armor or use shields made o f metal)\n" +
            "Weapons: Clubs, daggers, darts, javelins, maces,\n" +
            "quarterstaffs, scimitars, sickles, slings, spears\n" +
            "Tools: Herbalism kit\n" +
            "Saving Throws: Intelligence, Wisdom\n" +
            "T h e D r u i d\n" +
            "Level\n" +
            "Proficiency\n" +
            "Bonus Features\n" +
            "Cantrips\n" +
            "Known\n" +
            "— Spell Slots per Spell Level—\n" +
            "1st 2nd 3rd 4th 5th 6th 7th 8th 9th\n" +
            "1st +2 Druidic, Spellcasting 2 2 — — — — — — — —\n" +
            "2nd +2 Wild Shape, Druid Circle 2 3 — — — — — — — —\n" +
            "3rd +2 — 2 4 2 — — — — — — —\n" +
            "4th +2 Wild Shape improvement,\n" +
            "Ability Score Improvement\n" +
            "3 4 3 — — — — — — —\n" +
            "5th +3 — 3 4 3 2 — — — — — —\n" +
            "6th +3 Druid Circle feature 3 4 3 3 — — — — — —\n" +
            "7th +3 — 3 4 3 3 1 — — — — —\n" +
            "8th +3 Wild Shape improvement,\n" +
            "Ability Score Improvement\n" +
            "3 4 3 3 2 — — — — —\n" +
            "9th +4 — 3 4 3 3 3 1 — — — —\n" +
            "10th +4 Druid Circle feature 4 4 3 3 3 2 — — — —\n" +
            "11th +4 — 4 4 3 3 3 2 1 — —\n" +
            "—\n" +
            "12th +4 Ability Score Improvement 4 4 3 3 3 2 1 — — —\n" +
            "13th +5 — 4 4 3 3 3 2 1 1 — —\n" +
            "14th +5 Druid Circle feature 4 4 3 3 3 2 1 1 — —\n" +
            "15th +5 — 4 4 3 3 3 2 1 1 1 —\n" +
            "16th +5 Ability Score Improvement 4 4 3 3 3 2 1 1 1 —\n" +
            "17th +6 — 4 4 3 3 3 2 1 1 1 1\n" +
            "18th +6 Timeless Body, Beast Spells 4 4 3 3 3 3 1 1 1 1\n" +
            "19th +6 Ability Score Improvement 4 4 3 3 3 3 2 1 1 1\n" +
            "20th +6 Archdruid 4 4 3 3 3 3 2 2 1 1\n" +
            "Skills: Choose two from Arcana, Animal\n" +
            "Handling, Insight, Medicine, Nature, Perception,\n" +
            "Religion, and Survival\n" +
            "E q u i p m e n t\n" +
            "You start with the following equipment, in addition to\n" +
            "the equipment granted by your background:\n" +
            "• (a) a w ooden shield or (b) any simple weapon\n" +
            "• (a) a scimitar or (b) any simple melee weapon\n" +
            "• Leather armor, an explorer’s pack, and a druidic focus\n" +
            "D r u i d i c\n" +
            "You know Druidic, the secret language o f druids. You\n" +
            "can speak the language and use it to leave hidden\n" +
            "messages. You and others who know this language\n" +
            "automatically spot such a message. Others spot the\n" +
            "message’s presence with a successful DC 15 Wisdom\n" +
            "(Perception) check but can’t decipher it without magic.\n" +
            "S p e l l c a s t i n g\n" +
            "Drawing on the divine essence o f nature itself, you\n" +
            "can cast spells to shape that essence to your will. See\n" +
            "chapter 10 for the general rules o f spellcasting and\n" +
            "chapter 11 for the druid spell list.\n" +
            "C a n t r i p s\n" +
            "At 1st level, you know two cantrips o f your choice from\n" +
            "the druid spell list. You learn additional druid cantrips\n" +
            "o f your choice at higher levels, as shown in the Cantrips\n" +
            "Known column o f the Druid table.\n" +
            "P r e p a r in g a n d C a s t in g S p e l l s\n" +
            "The Druid table shows how many spell slots you have\n" +
            "to cast your spells o f 1st level and higher. To cast one of\n" +
            "these druid spells, you must expend a slot o f the spell’s\n" +
            "level or higher. You regain all expended spell slots when\n" +
            "you finish a long rest.\n" +
            "You prepare the list o f druid spells that are available\n" +
            "for you to cast, choosing from the druid spell list. When\n" +
            "you do so, choose a number o f druid spells equal to\n" +
            "your Wisdom modifier + your druid level (minimum of\n" +
            "S a c r e d P l a n t s a n d Wo o d\n" +
            "A druid holds certain plants to be sacred, particularly alder,\n" +
            "ash, birch, elder, hazel, holly, juniper, mistletoe, oak, rowan,\n" +
            "willow, and yew. Druids often use such plants as part of a\n" +
            "spellcasting focus, incorporating lengths of oak or yew or\n" +
            "sprigs o f mistletoe.\n" +
            "Similarly, a druid uses such woods to make other objects,\n" +
            "such as weapons and shields. Yew is associated with death\n" +
            "and rebirth, so weapon handles for scimitars or sickles might\n" +
            "be fashioned from it. Ash is associated with life and oak\n" +
            "with strength. These woods make excellent hafts or whole\n" +
            "weapons, such as clubs or quarterstaffs, as well as shields.\n" +
            "Alder is associated with air, and it might be used for thrown\n" +
            "weapons, such as darts or javelins.\n" +
            "Druids from regions that lack the plants described here\n" +
            "have chosen other plants to take on similar uses. For\n" +
            "instance, a druid of a desert region might value the yucca\n" +
            "tree and cactus plants.\n" +
            "one spell). The spells must be o f a level for which you\n" +
            "have spell slots.\n" +
            "For example, if you are a 3rd-level druid, you have four\n" +
            "1st-level and two 2nd-level spell slots. With a W isdom\n" +
            "o f 16, your list o f prepared spells can include six spells\n" +
            "o f 1st or 2nd level, in any combination. If you prepare\n" +
            "the 1st-level spell cure wounds, you can cast it using\n" +
            "a 1st-level or 2nd-level slot. Casting the spell doesn’t\n" +
            "remove it from your list o f prepared spells.\n" +
            "You can also change your list o f prepared spells when\n" +
            "you finish a long rest. Preparing a new list o f druid\n" +
            "spells requires time spent in prayer and meditation: at\n" +
            "least 1 minute per spell level for each spell on your list.\n" +
            "S p e l l c a s t in g A b i l i t y\n" +
            "Wisdom is your spellcasting ability for your druid\n" +
            "spells, since your magic draws upon your devotion and\n" +
            "attunement to nature. You use your Wisdom whenever\n" +
            "a spell refers to your spellcasting ability. In addition,\n" +
            "you use your Wisdom modifier when setting the saving\n" +
            "throw DC for a druid spell you cast and when making an\n" +
            "attack roll with one.\n" +
            "Spell save DC = 8 + your proficiency bonus +\n" +
            "your Wisdom modifier\n" +
            "Spell attack modifier = your proficiency bonus +\n" +
            "your Wisdom modifier\n" +
            "R i t u a l C a s t in g\n" +
            "You can cast a druid spell as a ritual if that spell has the\n" +
            "ritual tag and you have the spell prepared.\n" +
            "Sp e l l c a s t in g Fo c u s\n" +
            "You can use a druidic focus (found in chapter 5) as a\n" +
            "spellcasting focus for your druid spells.\n" +
            "W i l d S h a p e\n" +
            "Starting at 2nd level, you can use your action to\n" +
            "magically assume the shape o f a beast that you have\n" +
            "seen before. You can use this feature twice. You regain\n" +
            "expended uses when you finish a short or long rest.\n" +
            "Your druid level determines the beasts you can\n" +
            "transform into, as shown in the Beast Shapes table. At\n" +
            "2nd level, for example, you can transform into any beast\n" +
            "that has a challenge rating o f 1/4 or lower that doesn’t\n" +
            "have a flying or swimming speed.\n" +
            "Be a s t S h a p e s\n" +
            "Level Max. CR Limitations Example\n" +
            "2nd 1/4 No flying or swimming speed Wolf\n" +
            "4th 1/2 No flying speed Crocodile\n" +
            "8th 1 — Giant eagle\n" +
            "You can stay in a beast shape for a number o f hours\n" +
            "equal to half your druid level (rounded down). You then\n" +
            "revert to your normal form unless you expend another\n" +
            "use o f this feature. You can revert to your normal\n" +
            "form earlier by using a bonus action on your turn. You\n" +
            "automatically revert if you fall unconscious, drop to\n" +
            "0 hit points, or die.\n" +
            "While you are transformed, the following rules apply:\n" +
            "• Your game statistics are replaced by the statistics of\n" +
            "the beast, but you retain your alignment, personality,\n" +
            "and Intelligence, Wisdom, and Charisma scores. You\n" +
            "also retain all o f your skill and saving throw proficiencies,\n" +
            "in addition to gaining those o f the creature. If\n" +
            "the creature has the same proficiency as you and the\n" +
            "bonus in its stat block is higher than yours, use the\n" +
            "creature’s bonus instead of yours. If the creature has\n" +
            "any legendary or lair actions, you can't use them.\n" +
            "• When you transform, you assume the beast’s hit\n" +
            "points and Hit Dice. When you revert to your normal\n" +
            "form, you return to the number o f hit points you had\n" +
            "before you transformed. However, if you revert as a\n" +
            "result o f dropping to 0 hit points, any excess damage\n" +
            "carries over to your normal form. For example, if you\n" +
            "take 10 damage in animal form and have only 1 hit\n" +
            "point left, you revert and take 9 damage. As long as\n" +
            "the excess damage doesn’t reduce your normal form\n" +
            "to 0 hit points, you aren’t knocked unconscious.\n" +
            "• You can’t cast spells, and your ability to speak or\n" +
            "take any action that requires hands is limited to the\n" +
            "capabilities o f your beast form. Transforming doesn’t\n" +
            "break your concentration on a spell you’ve already\n" +
            "cast, however, or prevent you from taking actions that\n" +
            "are part o f a spell, such as call lightning, that you’ve\n" +
            "already cast.\n" +
            "• You retain the benefit o f any features from your class,\n" +
            "race, or other source and can use them if the new\n" +
            "form is physically capable o f doing so. However, you\n" +
            "can’t use any o f your special senses, such as darkvision,\n" +
            "unless your new form also has that sense.\n" +
            "• You choose whether your equipment falls to the\n" +
            "ground in your space, merges into your new form, or\n" +
            "is w orn by it. Worn equipment functions as normal,\n" +
            "but the DM decides whether it is practical for the new\n" +
            "form to wear a piece o f equipment, based on the creature’s\n" +
            "shape and size. Your equipment doesn’t change\n" +
            "size or shape to match the new\n" +
            "form, and any equipment that\n" +
            "the new form can’t w ear\n" +
            "must either fall to the\n" +
            "ground or merge with it.\n" +
            "Equipment that merges\n" +
            "with the form has no\n" +
            "effect until you leave\n" +
            "the form.\n" +
            "D r u i d C i r c l e\n" +
            "At 2nd level, you choose to\n" +
            "identify with a circle o f druids:\n" +
            "the Circle o f the Land or the Circle o f the Moon, both\n" +
            "detailed at the end o f the class description. Your choice\n" +
            "grants you features at 2nd level and again at 6th, 10th,\n" +
            "and 14th level.\n" +
            "A b i l i t y S c o r e I m p r o v e m e n t\n" +
            "When you reach 4th level, and again at 8th, 12th, 16th,\n" +
            "and 19th level, you can increase one ability score of\n" +
            "your choice by 2, or you can increase two ability scores\n" +
            "o f your choice by 1. As normal, you can’t increase an\n" +
            "ability score above 20 using this feature.\n" +
            "Starting at 18th level, the primal magic that you wield\n" +
            "causes you to age more slowly. For every 10 years that\n" +
            "pass, your body ages only 1 year.\n" +
            "B e a s t S p e l l s\n" +
            "Beginning at 18th level, you can cast many o f your druid\n" +
            "spells in any shape you assume using Wild Shape. You\n" +
            "can perform the somatic and verbal components o f a\n" +
            "druid spell while in a beast shape, but you aren’t able to\n" +
            "provide material components.\n" +
            "A r c h d r u i d\n" +
            "At 20th level, you can use your W ild Shape an unlimited\n" +
            "number o f times.\n" +
            "T im e l e s s B o d y\n" +
            "Additionally, you can ignore the verbal and somatic\n" +
            "components o f your druid spells, as well as any material\n" +
            "components that lack a cost and aren’t consumed by a\n" +
            "spell. You gain this benefit in both your normal shape\n" +
            "and your beast shape from Wild Shape.\n" +
            "D ruid C ircles\n" +
            "Though their organization is invisible to most outsiders,\n" +
            "druids are part o f a society that spans the land, ignoring\n" +
            "political borders. All druids are nominally m embers\n" +
            "o f this druidic society, though some individuals are so\n" +
            "isolated that they have never seen any high-ranking\n" +
            "members o f the society or participated in druidic\n" +
            "gatherings. Druids recognize each other as brothers and\n" +
            "sisters. Like creatures of the wilderness, however, druids\n" +
            "sometimes compete with or even prey on each other.\n" +
            "At a local scale, druids are organized into circles that\n" +
            "share certain perspectives on nature, balance, and the\n" +
            "way o f the druid.\n" +
            "C i r c l e o f t h e L a n d\n" +
            "The Circle o f the Land is made up o f mystics and sages\n" +
            "who safeguard ancient knowledge and rites through\n" +
            "a vast oral tradition. These druids meet within sacred\n" +
            "circles o f trees or standing stones to whisper primal\n" +
            "secrets in Druidic. The circle’s w isest members preside\n" +
            "as the chief priests o f communities that hold to the Old\n" +
            "Faith and serve as advisors to the rulers o f those folk.\n" +
            "As a member of this circle, your magic is influenced\n" +
            "by the land where you were initiated into the circle’s\n" +
            "mysterious rites.\n" +
            "B o n u s C a n t r i p\n" +
            "When you choose this circle at 2nd level, you learn one\n" +
            "additional druid cantrip of your choice.\n" +
            "N a t u r a l R e c o v e r y\n" +
            "Starting at 2nd level, you can regain some o f your\n" +
            "magical energy by sitting in meditation and communing\n" +
            "with nature. During a short rest, you choose expended\n" +
            "spell slots to recover. The spell slots can have a\n" +
            "combined level that is equal to or less than half your\n" +
            "druid level (rounded up), and none of the slots can be\n" +
            "6th level or higher. You can’t use this feature again until\n" +
            "you finish a long rest\n" +
            "For example, when you are a 4th-level druid, you can\n" +
            "recover up to two levels w orth of spell slots. You can\n" +
            "recover either a 2nd-level slot or two 1st-level slots.\n" +
            "C ir c l e Sp e l l s\n" +
            "Your mystical connection to the land infuses you with\n" +
            "the ability to cast certain spells. At 3rd, 5th, 7th, and\n" +
            "9th level you gain access to circle spells connected\n" +
            "to the land where you became a druid. Choose that\n" +
            "land—arctic, coast, desert, forest, grassland, mountain,\n" +
            "swamp, or Underdark—and consult the associated\n" +
            "list o f spells.\n" +
            "Once you gain access to a circle spell, you always have\n" +
            "it prepared, and it doesn’t count against the number of\n" +
            "spells you can prepare each day. If you gain access to a\n" +
            "spell that doesn’t appear on the druid spell list, the spell\n" +
            "is nonetheless a druid spell for you.\n" +
            "A r c t i c\n" +
            "Druid Level Circle Spells\n" +
            "3rd hold person, spike growth\n" +
            "5th sleet storm, slow\n" +
            "7th freedom o f movement, ice storm\n" +
            "9th commune with nature, cone o f cold\n" +
            "C o a s t\n" +
            "Druid Level Circle Spells\n" +
            "3rd mirror image, misty step\n" +
            "5th water breathing, water walk\n" +
            "7th control water, freedom o f movement\n" +
            "9th conjure elemental, scrying\n" +
            "D e s e r t\n" +
            "Druid Level Circle Spells\n" +
            "3rd blur, silence\n" +
            "5th create fo o d and water, protection from energy\n" +
            "7th blight, hallucinatory terrain\n" +
            "9th insect plague, wall o f stone\n" +
            "F o r e s t\n" +
            "Druid Level Circle Spells\n" +
            "3rd barkskin, spider climb\n" +
            "5th call lightning, plant growth\n" +
            "7th divination, freedom o f movement\n" +
            "9th commune with nature, tree stride\n" +
            "G r a s s l a n d\n" +
            "Druid Level Circle Spells\n" +
            "3rd invisibility, pass without trace\n" +
            "5th daylight, haste\n" +
            "7th divination, freedom o f movement\n" +
            "9th dream, insect plague\n" +
            "M o u n t a i n\n" +
            "Druid Level Circle Spells\n" +
            "3rd spider climb, spike growth\n" +
            "5th lightning bolt, meld into stone\n" +
            "7th stone shape, stoneskin\n" +
            "9th passwall, wall o f stone\n" +
            "S w a m p\n" +
            "Druid Level Circle Spells\n" +
            "3rd darkness, M e lf ’s acid arrow\n" +
            "5th water walk, stinking cloud\n" +
            "7th freedom o f movement, locate creature\n" +
            "9th insect plague, scrying\n" +
            "U n d e r d a r k\n" +
            "Druid Level Circle Spells\n" +
            "3rd spider climb, web\n" +
            "5th gaseous form, stinking cloud\n" +
            "7th greater invisibility, stone shape\n" +
            "9th cloudkill, insect plague\n" +
            "L a n d ’s St r id e\n" +
            "Starting at 6th level, moving through nonmagical\n" +
            "difficult terrain costs you no extra movement. You can\n" +
            "also pass through nonmagical plants without being\n" +
            "slowed by them and without taking damage from them if\n" +
            "they have thorns, spines, or a similar hazard.\n" +
            "In addition, you have advantage on saving throws against\n" +
            "plants that are magically created or manipulated to impede\n" +
            "movement, such those created by the entangle spell.\n" +
            "N a t u r e ’s W a r d\n" +
            "When you reach 10th level, you can’t be charmed or\n" +
            "frightened by elementals or fey, and you are immune to\n" +
            "poison and disease.\n" +
            "N a t u r e ’s Sa n c t u a r y\n" +
            "When you reach 14th level, creatures o f the natural\n" +
            "world sense your connection to nature and become\n" +
            "hesitant to attack you. When a beast or plant creature\n" +
            "attacks you, that creature must make a Wisdom saving\n" +
            "throw against your druid spell save DC. On a failed save,\n" +
            "the creature must choose a different target, or the attack\n" +
            "automatically misses. On a successful save, the creature\n" +
            "is immune to this effect for 24 hours.\n" +
            "The creature is aware o f this effect before it makes its\n" +
            "attack against you.\n" +
            "C i r c l e o f t h e M o o n\n" +
            "Druids o f the Circle o f the Moon are fierce guardians\n" +
            "o f the wilds. Their order gathers under the full moon to\n" +
            "share news and trade warnings. They haunt the deepest\n" +
            "parts o f the wilderness, where they might go for weeks\n" +
            "on end before crossing paths with another humanoid\n" +
            "creature, let alone another druid.\n" +
            "Changeable as the moon, a druid o f this circle might\n" +
            "prowl as a great cat one night, soar over the treetops\n" +
            "as an eagle the next day, and crash through the\n" +
            "undergrowth in bear form to drive off a trespassing\n" +
            "monster. The wild is in the druid's blood.\n" +
            "C o m b a t W i l d S h a p e\n" +
            "When you choose this circle at 2nd level, you gain the\n" +
            "ability to use Wild Shape on your turn as a bonus action,\n" +
            "rather than as an action.\n" +
            "Additionally, while you are transformed by Wild\n" +
            "Shape, you can use a bonus action to expend one\n" +
            "spell slot to regain 1d8 hit points per level o f the spell\n" +
            "slot expended.\n" +
            "C ir c l e Fo r m s\n" +
            "The rites o f your circle grant you the ability to transform\n" +
            "into more dangerous animal forms. Starting at 2nd\n" +
            "level, you can use your W ild Shape to transform into a\n" +
            "beast with a challenge rating as high as 1 (you ignore\n" +
            "the Max. CR column o f the Beast Shapes table, but must\n" +
            "abide by the other limitations there).\n" +
            "Starting at 6th level, you can transform into a beast\n" +
            "with a challenge rating as high";
    }
    else if(arg1.value == "fighter"){
        var classDescription = "As a fighter, you gain the following class features.\n" +
            "H i t P o in t s\n" +
            "Hit Dice: 1d 10 per fighter level\n" +
            "Hit Points at 1st Level: 10 + your Constitution modifier\n" +
            "Hit Points at Higher Levels: 1d 10 (or 6) + your\n" +
            "Constitution modifier per fighter level after 1st\n" +
            "P r o f ic ie n c ie s\n" +
            "Armo r : All armor, shields\n" +
            "Weapons: Simple weapons, martial weapons\n" +
            "Tools: None\n" +
            "Saving Throws: Strength, Constitution\n" +
            "T h e F i g h t e r\n" +
            "Level\n" +
            "Proficiency\n" +
            "Bonus Features\n" +
            "1st +2 Fighting Style, Second Wind\n" +
            "2nd +2 Action Surge (one use)\n" +
            "3rd +2 Martial Archetype\n" +
            "4th +2 Ability Score Improvement\n" +
            "5th +3 Extra Attack\n" +
            "6th +3 Ability Score Improvement\n" +
            "7th +3 Martial Archetype feature\n" +
            "8th +3 Ability Score Improvement\n" +
            "9th +4 Indomitable (one use)\n" +
            "10th +4 Martial Archetype feature\n" +
            "11th +4 Extra Attack (2)\n" +
            "12th +4 Ability Score Improvement\n" +
            "13th +5 Indomitable (two uses)\n" +
            "14th +5 Ability Score Improvement\n" +
            "15th +5 Martial Archetype feature\n" +
            "16th +5 Ability Score Improvement\n" +
            "17th +6 Action Surge (two uses), Indomitable\n" +
            "(three uses)\n" +
            "18th +6 Martial Archetype feature\n" +
            "19th +6 Ability Score Improvement\n" +
            "20th +6 Extra Attack (3)\n" +
            "Skills: Choose two skills from Acrobatics, Animal\n" +
            "Handling, Athletics, History, Insight, Intimidation,\n" +
            "Perception, and Survival\n" +
            "E q u i p m e n t\n" +
            "You start with the following equipment, in addition to\n" +
            "the equipment granted by your background:\n" +
            "• (a) chain mail or (b) leather, longbow, and 20 arrows\n" +
            "• (a) a martial weapon and a shield or (b) two martial\n" +
            "weapons\n" +
            "• (a) a light c rossbow and 20 bolts or (b) two handaxes\n" +
            "• (a) a dungeoneer’s pack or (b) an explorer’s pack\n" +
            "F i g h t i n g S t y l e\n" +
            "You adopt a particular style o f fighting as your specialty.\n" +
            "Choose one o f the following options. You can’t take a\n" +
            "Fighting Style option more than once, even if you later\n" +
            "get to choose again.\n" +
            "A r c h e r y\n" +
            "You gain a +2 bonus to attack rolls you make with\n" +
            "ranged w eapons.\n" +
            "D e f e n s e\n" +
            "While you are wearing armor, you gain a +1 bonus to AC.\n" +
            "D u e l in g\n" +
            "When you are wielding a melee w eapon in one hand and\n" +
            "no other w eapons, you gain a +2 bonus to damage rolls\n" +
            "with that weapon.\n" +
            "G r e a t W e a p o n F ig h t in g\n" +
            "When you roll a 1 or 2 on a damage die for an attack you\n" +
            "make with a melee w eapon that you are wielding with\n" +
            "two hands, you can reroll the die and must use the new\n" +
            "roll, even if the new roll is a 1 or a 2. The weapon must\n" +
            "have the two-handed or versatile property for you to gain\n" +
            "this benefit.\n" +
            "P r o t e c t io n\n" +
            "When a creature you can see attacks a target other\n" +
            "than you that is within 5 feet o f you, you can use your\n" +
            "reaction to impose disadvantage on the attack roll. You\n" +
            "must be w ielding a shield.\n" +
            "T w o -W e a p o n F ig h t in g\n" +
            "When you engage in two-weapon fighting, you can add\n" +
            "your ability modifier to the damage o f the second attack.\n" +
            "S e c o n d W i n d\n" +
            "You have a limited well o f stamina that you can draw on\n" +
            "to protect yourself from harm. On your turn, you can use\n" +
            "a bonus action to regain hit points equal to 1d 10 + your\n" +
            "fighter level.\n" +
            "Once you use this feature, you must finish a short or\n" +
            "long rest before you can use it again.\n" +
            "A c t i o n S u r g e\n" +
            "Starting at 2nd level, you can push yourself beyond your\n" +
            "normal limits for a moment. On your turn, you can take\n" +
            "one additional action on top o f your regular action and a\n" +
            "possible bonus action.\n" +
            "Once you use this feature, you must finish a short or\n" +
            "long rest before you can use it again. Starting at 17th\n" +
            "level, you can use it twice before a rest, but only once on\n" +
            "the same turn.\n" +
            "M a r t i a l A r c h e t y p e\n" +
            "At 3rd level, you choose an archetype that you strive to\n" +
            "emulate in your combat styles and techniques. Choose\n" +
            "Champion, Battle Master, or Eldritch Knight, all detailed\n" +
            "at the end o f the class description. The archetype you\n" +
            "choose grants you features at 3rd level and again at 7th,\n" +
            "10th, 15th, and 18th level.\n" +
            "A b i l i t y S c o r e I m p r o v e m e n t\n" +
            "When you reach 4th level, and again at 6th, 8th, 12th,\n" +
            "14th, 16th, and 19th level, you can increase one ability\n" +
            "score o f your choice by 2, or you can increase two ability\n" +
            "scores o f your choice by 1. As normal, you can’t increase\n" +
            "an ability score above 20 using this feature.\n" +
            "E x t r a A t t a c k\n" +
            "Beginning at 5th level, you can attack twice, instead o f\n" +
            "once, whenever you take the Attack action on your turn.\n" +
            "The number o f attacks increases to three when you\n" +
            "reach 11th level in this class and to four when you reach\n" +
            "20th level in this class.\n" +
            "I n d o m i t a b l e\n" +
            "Beginning at 9th level, you can reroll a saving throw that\n" +
            "you fail. If you do so, you must use the new roll, and you\n" +
            "can’t use this feature again until you finish a long rest.\n" +
            "You can use this feature twice between long rests\n" +
            "starting at 13th level and three times between long rests\n" +
            "starting at 17th level.\n" +
            "M ar t ia l A rchetypes\n" +
            "Different fighters choose different approaches to\n" +
            "perfecting their fighting prowess. The martial archetype\n" +
            "you choose to emulate reflects your approach.\n" +
            "C h a m p i o n\n" +
            "The archetypal Champion focuses on the development\n" +
            "o f raw physical power honed to deadly perfection.\n" +
            "Those who model themselves on this archetype combine\n" +
            "rigorous training with physical excellence to deal\n" +
            "devastating blows.\n" +
            "Im p r o v e d C r i t i c a l\n" +
            "Beginning when you choose this archetype at 3rd\n" +
            "level, your weapon attacks sco re a critical hit on a\n" +
            "roll o f 19 or 20.\n" +
            "R e m a r k a b l e A t h l e t e\n" +
            "Starting at 7th level, you can add half your proficiency\n" +
            "bonus (round up) to any Strength, Dexterity, or\n" +
            "Constitution check you make that doesn’t already use\n" +
            "your proficiency bonus.\n" +
            "In addition, when you make a running long jump, the\n" +
            "distance you can cover increases by a number o f feet\n" +
            "equal to your Strength modifier.\n" +
            "A d d i t io n a l F ig h t in g St y l e\n" +
            "At 10th level, you can choose a second option from the\n" +
            "Fighting Style class feature.\n" +
            "Su r v iv o r\n" +
            "At 18th level, you attain the pinnacle o f resilience in\n" +
            "battle. At the start o f each o f your turns, you regain hit\n" +
            "points equal to 5 + your Constitution modifier if you\n" +
            "have no more than half o f your hit points left. You don’t\n" +
            "gain this benefit if you have 0 hit points.\n" +
            "B a t t l e M a s t e r\n" +
            "Those who emulate the archetypal Battle Master\n" +
            "employ martial techniques passed down through\n" +
            "generations. To a Battle Master, combat is an academic\n" +
            "field, sometimes including subjects beyond battle such\n" +
            "as weaponsmithing and calligraphy. Not every fighter\n" +
            "absorbs the lessons o f history, theory, and artistry\n" +
            "that are reflected in the Battle Master archetype, but\n" +
            "those who do are well-rounded fighters o f great skill\n" +
            "and knowledge.\n" +
            "C o m b a t Su p e r io r i t y\n" +
            "When you choose this archetype at 3rd level, you\n" +
            "learn maneuvers that are fueled by special dice called\n" +
            "superiority dice.\n" +
            "Maneuvers. You learn three maneuvers o f your\n" +
            "choice, which are detailed under “Maneuvers” below.\n" +
            "Many maneuvers enhance an attack in some way. You\n" +
            "can use only one maneuver per attack.\n" +
            "You learn two additional maneuvers o f your choice\n" +
            "at 7th, 10th, and 15th level. Each time you learn new\n" +
            "maneuvers, you can also replace one maneuver you\n" +
            "know with a different one.\n" +
            "Superiority Dice. You have four superiority dice,\n" +
            "which are d8s. A superiority die is expended when you\n" +
            "use it. You regain all o f your expended superiority dice\n" +
            "when you finish a short or long rest.\n" +
            "You gain another superiority die at 7th level and one\n" +
            "more at 15th level.\n" +
            "Saving Throws. Some o f your maneuvers require\n" +
            "your target to make a saving throw to resist the\n" +
            "maneuver’s effects. The saving throw DC is calculated\n" +
            "as follows:\n" +
            "Maneuver save DC = 8 + your proficiency bonus +\n" +
            "your Strength or Dexterity modifier (your choice)\n" +
            "St u d e n t o f W a r\n" +
            "At 3rd level, you gain proficiency with one type of\n" +
            "artisan’s tools o f your choice.\n" +
            "K n o w Y o u r E n e m y\n" +
            "Starting at 7th level, if you spend at least 1 minute\n" +
            "observing or interacting with another creature outside\n" +
            "combat, you can learn certain information about its\n" +
            "capabilities compared to your own. The DM tells you if\n" +
            "the creature is your equal, superior, or inferior in regard\n" +
            "to two of the following characteristics of your choice:\n" +
            "Su p e r io r C r i t ic a l\n" +
            "Starting at 15th level, your w eapon attacks score a\n" +
            "critical hit on a roll of 18-20.\n" +
            "• Strength score\n" +
            "• Dexterity score\n" +
            "• Constitution score\n" +
            "• Armor Class\n" +
            "• Current hit points\n" +
            "• Total class levels (if any)\n" +
            "• Fighter class levels (if any)\n" +
            "Im p r o v e d C o m b a t Su p e r io r i t y\n" +
            "At 10th level, your superiority dice turn into d10s. At\n" +
            "18th level, they turn into d l2 s .\n" +
            "R e l e n t l e s s\n" +
            "Starting at 15th level, when you roll initiative and\n" +
            "have no superiority dice remaining, you regain 1\n" +
            "superiority die.\n" +
            "M a n e u v e r s\n" +
            "The maneuvers are presented in alphabetical order.\n" +
            "Commander’s Strike. When you take the Attack\n" +
            "action on your turn, you can forgo one o f your attacks\n" +
            "and use a bonus action to direct one o f your companions\n" +
            "to strike. When you do so, choose a friendly creature\n" +
            "who can see or hear you and expend one superiority die.\n" +
            "That creature can immediately use its reaction to make\n" +
            "one w eapon attack, adding the superiority die to the\n" +
            "attack’s damage roll.\n" +
            "Disarming Attack. When you hit a creature with a\n" +
            "weapon attack, you can expend one superiority die to\n" +
            "attempt to disarm the target, forcing it to drop one item\n" +
            "o f your choice that it’s holding. You add the superiority\n" +
            "die to the attack’s damage roll, and the target must\n" +
            "make a Strength saving throw. On a failed save, it drops\n" +
            "the object you choose. The object lands at its feet.\n" +
            "Distracting Strike. When you hit a creature with a\n" +
            "weapon attack, you can expend one superiority die to\n" +
            "distract the creature, giving your allies an opening. You\n" +
            "add the superiority die to the attack’s damage roll. The\n" +
            "next attack roll against the target by an attacker other\n" +
            "than you has advantage if the attack is made before the\n" +
            "start o f your next turn.\n" +
            "Evasive Footwork. When you move, you can expend\n" +
            "one superiority die, rolling the die and adding the\n" +
            "number rolled to your AC until you stop moving.\n" +
            "Feinting Attack. You can expend one superiority die\n" +
            "and use a bonus action on your turn to feint, choosing\n" +
            "one creature within 5 feet o f you as your target. You\n" +
            "have advantage on your next attack roll against that\n" +
            "creature. If that attack hits, add the superiority die to the\n" +
            "attack’s damage roll.\n" +
            "Goading Attack. When you hit a creature with a\n" +
            "weapon attack, you can expend one superiority die to\n" +
            "attempt to goad the target into attacking you. You add\n" +
            "the superiority die to the attack’s damage roll, and\n" +
            "the target must make a W isdom saving throw. On a\n" +
            "failed save, the target has disadvantage on all attack\n" +
            "rolls against targets other than you until the end of\n" +
            "your next turn.\n" +
            "Lunging Attack. When you make a melee weapon\n" +
            "attack on your turn, you can expend one superiority die\n" +
            "to increase your reach for that attack by 5 feet. If you hit,\n" +
            "you add the superiority die to the attack’s damage roll.\n" +
            "Maneuvering Attack. When you hit a creature with\n" +
            "a w eapon attack, you can expend one superiority\n" +
            "die to maneuver one o f your comrades into a more\n" +
            "advantageous position. You add the superiority die to the\n" +
            "attack’s damage roll, and you choose a friendly creature\n" +
            "who can see or hear you. That creature can use its\n" +
            "reaction to move up to half its speed without provoking\n" +
            "opportunity attacks from the target o f your attack.\n" +
            "Menacing Attack. When you hit a creature with a\n" +
            "weapon attack, you can expend one superiority die to\n" +
            "attempt to frighten the target. You add the superiority\n" +
            "die to the attack’s damage roll, and the target must\n" +
            "make a W isdom saving throw. On a failed save, it is\n" +
            "frightened o f you until the end o f your next turn.\n" +
            "Parry. When another creature damages you with a\n" +
            "melee attack, you can use your reaction and expend one\n" +
            "superiority die to reduce the damage by the number you\n" +
            "roll on your superiority die + your Dexterity modifier.\n" +
            "Precision Attack. When you make a weapon attack\n" +
            "roll against a creature, you can expend one superiority\n" +
            "die to add it to the roll. You can use this maneuver\n" +
            "before or after making the attack roll, but before any\n" +
            "effects o f the attack are applied.\n" +
            "Pushing Attack. When you hit a creature with\n" +
            "a weapon attack, you can expend one superiority\n" +
            "die to attempt to drive the target back. You add the\n" +
            "superiority die to the attack's damage roll, and if the\n" +
            "target is Large or smaller, it must make a Strength\n" +
            "saving throw. On a failed save, you push the target up\n" +
            "to 15 feet away from you.\n" +
            "Rally. On your turn, you can use a bonus action and\n" +
            "expend one superiority die to bolster the resolve o f one\n" +
            "o f your companions. When you do so, choose a friendly\n" +
            "creature w ho can see or hear you. That creature gains\n" +
            "temporary hit points equal to the superiority die roll +\n" +
            "your Charisma modifier.\n" +
            "Riposte. When a creature misses you with a melee\n" +
            "attack, you can use your reaction and expend one\n" +
            "superiority die to make a melee weapon attack against\n" +
            "the creature. If you hit, you add the superiority die to the\n" +
            "attack's damage roll.\n" +
            "Sweeping Attack. When you hit a creature with a\n" +
            "melee w eapon attack, you can expend one superiority\n" +
            "die to attempt to damage another creature with the\n" +
            "same attack. Choose another creature within 5 feet\n" +
            "o f the original target and within your reach. If the\n" +
            "original attack roll w ould hit the second creature, it\n" +
            "takes damage equal to the number you roll on your\n" +
            "superiority die. The damage is o f the same type dealt by\n" +
            "the original attack.\n" +
            "Trip Attack. When you hit a creature with a weapon\n" +
            "attack, you can expend one superiority die to attempt\n" +
            "to knock the target down. You add the superiority die\n" +
            "to the attack’s damage roll, and if the target is Large or\n" +
            "smaller, it must make a Strength saving throw. On a\n" +
            "failed save, you knock the target prone.\n" +
            "E l d r i t c h K n i g h t\n" +
            "The archetypal Eldritch Knight combines the martial\n" +
            "mastery common to all fighters with a careful study of\n" +
            "magic. Eldritch Knights use magical techniques similar\n" +
            "to those practiced by wizards. They focus their study\n" +
            "on two of the eight schools o f magic: abjuration and\n" +
            "evocation. Abjuration spells grant an Eldritch Knight\n" +
            "additional protection in battle, and evocation spells deal\n" +
            "damage to many foes at once, extending the fighter’s\n" +
            "reach in combat. These knights learn a comparatively\n" +
            "small number o f spells, committing them to memory\n" +
            "instead o f keeping them in a spellbook.\n" +
            "Sp e l l c a s t in g\n" +
            "When you reach 3rd level, you augment your martial\n" +
            "prowess with the ability to cast spells. See chapter 10\n" +
            "for the general rules o f spellcasting and chapter 11 for\n" +
            "the w izard spell list.\n" +
            "Cantrips. You learn two cantrips o f your choice from\n" +
            "the w izard spell list. You learn an additional w izard\n" +
            "cantrip o f your choice at 10th level.\n" +
            "Spell Slots. The Eldritch Knight Spellcasting table\n" +
            "shows how many spell slots you have to cast your\n" +
            "spells o f 1st level and higher. To cast one o f these\n" +
            "spells, you must expend a slot o f the spell’s level or\n" +
            "higher. You regain all expended spell slots when you\n" +
            "finish a long rest.\n" +
            "For example, if you know the 1st-level spell shield and\n" +
            "have a 1st-level and a 2nd-level spell slot available, you\n" +
            "can cast shield using either slot.\n" +
            "Spells Known o f 1st-Level and Higher. You know\n" +
            "three 1st-level w izard spells of your choice, two o f which\n" +
            "you must choose from the abjuration and evocation\n" +
            "spells on the wizard spell list.\n" +
            "The Spells Known column o f the Eldritch Knight\n" +
            "Spellcasting table shows when you learn more w izard\n" +
            "spells o f 1st level or higher. Each o f these spells must be\n" +
            "an abjuration or evocation spell o f your choice, and must\n" +
            "be o f a level for which you have spell slots. For instance,\n" +
            "when you reach 7th level in this class, you can learn one\n" +
            "new spell o f 1st or 2nd level.\n" +
            "The spells you learn at 8th, 14th, and 20th level can\n" +
            "come from any school o f magic.\n" +
            "Whenever you gain a level in this class, you can\n" +
            "replace one o f the w izard spells you know with another\n" +
            "spell o f your choice from the wizard spell list. The\n" +
            "new spell must be o f a level for which you have spell\n" +
            "slots, and it must be an abjuration or evocation spell,\n" +
            "unless you’re replacing the spell you gained at 8th, 14th,\n" +
            "or 20th level.\n" +
            "Spellcasting Ability. Intelligence is your spellcasting\n" +
            "ability for your w izard spells, since you learn your\n" +
            "spells through study and memorization. You use your\n" +
            "Intelligence whenever a spell refers to your spellcasting\n" +
            "ability. In addition, you use your Intelligence modifier\n" +
            "when setting the saving throw DC for a w izard spell you\n" +
            "cast and when making an attack roll with one.\n" +
            "Spell save DC = 8 + your proficiency bonus +\n" +
            "your Intelligence modifier\n" +
            "Spell attack modifier = your proficiency bonus +\n" +
            "your Intelligence modifier\n" +
            "W e a p o n B o n d\n" +
            "At 3rd level, you learn a ritual that creates a magical\n" +
            "bond between yourself and one weapon. You perform\n" +
            "the ritual over the course o f 1 hour, which can be done\n" +
            "during a short rest. The w eapon must be within your\n" +
            "reach throughout the ritual, at the conclusion o f which\n" +
            "you touch the weapon and forge the bond.\n" +
            "Once you have bonded a weapon to yourself, you\n" +
            "can’t be disarmed o f that w eapon unless you are\n" +
            "incapacitated. If it is on the same plane of existence,\n" +
            "you can summon that weapon as a bonus action on your\n" +
            "turn, causing it to teleport instantly to your hand.\n" +
            "You can have up to two bonded w eapons, but can\n" +
            "summon only one at a time with your bonus action.\n" +
            "If you attempt to bond with a third w eapon, you must\n" +
            "break the bond with one o f the other two.\n" +
            "W a r M a g ic\n" +
            "Beginning at 7th level, when you use your action to\n" +
            "cast a cantrip, you can make one w eapon attack as a\n" +
            "bonus action.\n" +
            "E l d r i t c h St r ik e\n" +
            "At 10th level, you learn how to make your weapon\n" +
            "strikes undercut a creature’s resistance to your spells.\n" +
            "When you hit a creature with a weapon attack, that\n" +
            "creature has disadvantage on the next saving throw\n" +
            "it makes against a spell you cast before the end of\n" +
            "your next turn.\n" +
            "A r c a n e C h a r g e\n" +
            "At 15th level, you gain the ability to teleport up to 30\n" +
            "feet to an unoccupied space you can see when you use\n" +
            "your Action Surge. You can teleport before or after the\n" +
            "additional action.\n" +
            "Im p r o v e d Wa r M a g ic\n" +
            "Starting at 18th level, when you use your action to\n" +
            "cast a spell, you can make one w eapon attack as a\n" +
            "bonus action.";
    }
    else if(arg1.value == "monk"){
        var classDescription = "As a monk, you gain the following class features.\n" +
            "H i t P o in t s\n" +
            "Hit Dice: 1d8 per monk level\n" +
            "Hit Points at 1st Level: 8 + your Constitution modifier\n" +
            "Hit Points at Higher Levels: 1d8 (or 5) + your\n" +
            "Constitution modifier per monk level after 1st\n" +
            "P r o f ic ie n c ie s\n" +
            "Armor: None\n" +
            "Weapons: Simple w eapons, shortswords\n" +
            "Tools: Choose one type o f artisan’s tools or one\n" +
            "musical instrument\n" +
            "Saving Throws: Strength, Dexterity\n" +
            "Skills: Choose two from Acrobatics, Athletics, History,\n" +
            "Insight, Religion, and Stealth\n" +
            "E q u i p m e n t\n" +
            "You start with the following equipment, in addition to\n" +
            "the equipment granted by your background:\n" +
            "• (a) a shortsword or (b) any simple weapon\n" +
            "• (a) a dungeoneer’s pack or (b) an explorer’s pack\n" +
            "• 10 darts\n" +
            "T h e M o n k\n" +
            "Level\n" +
            "Proficiency\n" +
            "Bonus\n" +
            "Martial\n" +
            "Arts\n" +
            "Ki\n" +
            "Points\n" +
            "Unarmored\n" +
            "Movement Features\n" +
            "1st +2 1d4 — — Unarmored Defense, Martial Arts\n" +
            "2nd +2 1d4 2 +10 ft. Ki, Unarmored Movement\n" +
            "3rd +2 1d4 3 +10 ft. Monastic Tradition, Deflect Missiles\n" +
            "4th +2 1d4 4 +10 ft. Ability Score Improvement, Slow Fall\n" +
            "5th +3 1d6 5 +10 ft. Extra Attack, Stunning Strike\n" +
            "6th +3 1d6 6 +15 ft. Ki-Empowered Strikes, Monastic Tradition feature\n" +
            "7th +3 1d6 7 +15 ft. Evasion, Stillness o f Mind\n" +
            "8th +3 1d6 8 +15 ft. Ability Score Improvement\n" +
            "9th +4 1d6 9 +15 ft. Unarmored Movement improvement\n" +
            "10th +4 1d6 10 +20 ft. Purity of Body\n" +
            "11th +4 1d8 11 +20 ft. Monastic Tradition feature\n" +
            "12th +4 1d8 12 +20 ft. Ability Score Improvement\n" +
            "13th +5 1d8 13 +20 ft. Tongue of the Sun and Moon\n" +
            "14th +5 1d8 14 +25 ft. Diamond Soul\n" +
            "15th +5 1d8 15 +25 ft. Timeless Body\n" +
            "16th +5 1d8 16 +25 ft. Ability Score Improvement\n" +
            "17th +6 1d10 17 +25 ft. Monastic Tradition feature\n" +
            "18th +6 1d10 18 +30 ft. Empty Body\n" +
            "19th +6 1d10 19 +30 ft. Ability Score Improvement\n" +
            "20th +6 1d10 20 +30 ft. Perfect Self\n" +
            "U n a r m o r e d D e f e n s e\n" +
            "Beginning at 1st level, while you are w earing no armor\n" +
            "and not w ielding a shield, your AC equals 10 + your\n" +
            "Dexterity m odifier + your Wisdom modifier.\n" +
            "M a r t i a l A r t s\n" +
            "At 1st level, your practice o f martial arts gives you\n" +
            "mastery o f combat styles that use unarmed strikes and\n" +
            "monk w eapons, which are shortswords and any simple\n" +
            "melee weapons that don’t have the two-handed or\n" +
            "heavy property.\n" +
            "You gain the following benefits while you are unarmed\n" +
            "or wielding only m onk weapons and you aren’t wearing\n" +
            "armor or w ielding a shield:\n" +
            "• You can use Dexterity instead o f Strength for the\n" +
            "attack and damage rolls o f your unarmed strikes and\n" +
            "monk weapons.\n" +
            "• You can roll a d4 in place o f the normal damage\n" +
            "o f your unarmed strike or monk weapon. This die\n" +
            "changes as you gain monk levels, as shown in the\n" +
            "Martial Arts column of the Monk table.\n" +
            "• When you use the Attack action with an unarmed\n" +
            "strike or a monk weapon on your turn, you can make\n" +
            "one unarmed strike as a bonus action. For example, if\n" +
            "you take the Attack action and attack with a quarterstaff,\n" +
            "you can also make an unarmed strike as a bonus\n" +
            "action, assuming you haven't already taken a bonus\n" +
            "action this turn.\n" +
            "Certain monasteries use specialized forms o f the\n" +
            "monk weapons. For example, you might use a club\n" +
            "that is two lengths o f w o od connected by a short chain\n" +
            "(called a nunchaku) or a sickle with a shorter, straighter\n" +
            "blade (called a kama). Whatever name you use for a\n" +
            "monk weapon, you can use the game statistics provided\n" +
            "for the weapon in chapter 5.\n" +
            "Ki\n" +
            "Starting at 2nd level, your training allows you to\n" +
            "harness the mystic energy o f ki. Your access to this\n" +
            "energy is represented by a number of ki points. Your\n" +
            "monk level determines the number o f points you have,\n" +
            "as shown in the Ki Points column o f the Monk table.\n" +
            "You can spend these points to fuel various ki features.\n" +
            "You start knowing three such features: Flurry o f Blows,\n" +
            "Patient Defense, and Step o f the Wind. You learn more\n" +
            "ki features as you gain levels in this class.\n" +
            "When you spend a ki point, it is unavailable until\n" +
            "you finish a short or long rest, at the end o f which you\n" +
            "draw all o f your expended ki back into yourself. You\n" +
            "must spend at least 30 minutes o f the rest meditating to\n" +
            "regain your ki points.\n" +
            "Some o f your ki features require your target to make\n" +
            "a saving throw to resist the feature’s effects. The saving\n" +
            "throw DC is calculated as follows:\n" +
            "Ki save DC = 8 + your proficiency bonus +\n" +
            "your Wisdom modifier\n" +
            "F l u r r y o f B l o w s\n" +
            "Immediately after you take the Attack action on your\n" +
            "turn, you can spend 1 ki point to make two unarmed\n" +
            "strikes as a bonus action.\n" +
            "Pa t i e n t D e f e n s e\n" +
            "You can spend 1 ki point to take the Dodge action as a\n" +
            "bonus action on your turn.\n" +
            "St e p o f t h e W in d\n" +
            "You can spend 1 ki point to take the Disengage or Dash\n" +
            "action as a bonus action on your turn, and your jump\n" +
            "distance is doubled for the turn.\n" +
            "U n a r m o r e d M o v e m e n t\n" +
            "Starting at 2nd level, your speed increases by 10 feet\n" +
            "while you are not w earing armor or w ielding a shield.\n" +
            "This bonus increases when you reach certain monk\n" +
            "levels, as shown in the Monk table.\n" +
            "At 9th level, you gain the ability to move along vertical\n" +
            "surfaces and across liquids on your turn without falling\n" +
            "during the move.\n" +
            "M o n a s t i c T r a d i t i o n\n" +
            "When you reach 3rd level, you commit yourself to a\n" +
            "monastic tradition: the Way o f the Open Hand, the Way\n" +
            "o f Shadow, or the Way o f the Four Elements, all detailed\n" +
            "at the end o f the class description. Your tradition\n" +
            "grants you features at 3rd level and again at 6th, 11th,\n" +
            "and 17th level.\n" +
            "D e f l e c t M i s s i l e s\n" +
            "Starting at 3rd level, you can use your reaction to\n" +
            "deflect or catch the missile when you are hit by a ranged\n" +
            "weapon attack. When you do so, the damage you take\n" +
            "from the attack is reduced by 1d 10 + your Dexterity\n" +
            "modifier + your monk level.\n" +
            "If you reduce the damage to 0, you can catch the\n" +
            "missile if it is small enough for you to hold in one hand\n" +
            "and you have at least one hand free. If you catch a\n" +
            "missile in this way, you can spend 1 ki point to make a\n" +
            "ranged attack with the weapon or piece o f ammunition\n" +
            "you just caught, as part o f the same reaction. You make\n" +
            "this attack with proficiency, regardless o f your w eapon\n" +
            "proficiencies, and the missile counts as a monk weapon\n" +
            "for the attack.\n" +
            "A b i l i t y S c o r e I m p r o v e m e n t\n" +
            "When you reach 4th level, and again at 8th, 12th, 16th,\n" +
            "and 19th level, you can increase one ability score o f your\n" +
            "choice by 2, or you can increase two ability scores o f\n" +
            "your choice by 1. As normal, you can’t increase an ability\n" +
            "score above 20 using this feature.\n" +
            "S l o w Fa l l\n" +
            "Beginning at 4th level, you can use your reaction when\n" +
            "you fall to reduce any falling damage you take by an\n" +
            "amount equal to five times your monk level.\n" +
            "E x t r a A t t a c k\n" +
            "Beginning at 5th level, you can attack twice, instead of\n" +
            "once, whenever you take the Attack action on your turn.\n" +
            "S t u n n i n g S t r i k e\n" +
            "Starting at 5th level, you can interfere with the flow of\n" +
            "ki in an opponent’s body. When you hit another creature\n" +
            "with a melee w eapon attack, you can spend 1 ki point to\n" +
            "attempt a stunning strike. The target must succeed on a\n" +
            "Constitution saving throw or be stunned until the end of\n" +
            "your next turn.\n" +
            "K i - E m p o w e r e d S t r i k e s\n" +
            "Starting at 6th level, your unarmed strikes count as\n" +
            "magical for the purpose o f overcoming resistance and\n" +
            "immunity to nonmagical attacks and damage.\n" +
            "E v a s i o n\n" +
            "At 7th level, your instinctive agility lets you dodge\n" +
            "out o f the way o f certain area effects, such as a blue\n" +
            "dragon’s lightning breath or a fireball spell. When you\n" +
            "are subjected to an effect that allows you to make a\n" +
            "Dexterity saving throw to take only half damage, you\n" +
            "instead take no damage if you succeed on the saving\n" +
            "throw, and only half damage if you fail.\n" +
            "S t i l l n e s s o f M i n d\n" +
            "Starting at 7th level, you can use your action to end one\n" +
            "effect on yourself that is causing you to be charmed\n" +
            "or frightened.\n" +
            "P u r i t y o f B o d y\n" +
            "At 10th level, your mastery o f the ki flowing through you\n" +
            "makes you immune to disease and poison.\n" +
            "T o n g u e o f t h e S u n a n d M o o n\n" +
            "Starting at 13th level, you learn to touch the ki o f other\n" +
            "minds so that you understand all spoken languages.\n" +
            "Moreover, any creature that can understand a language\n" +
            "can understand what you say.\n" +
            "D i a m o n d S o u l\n" +
            "Beginning at 14th level, your mastery o f ki grants you\n" +
            "proficiency in all saving throws.\n" +
            "Additionally, whenever you make a saving throw and\n" +
            "fail, you can spend 1 ki point to reroll it and take the\n" +
            "second result.\n" +
            "During that time, you also have resistance to all damage\n" +
            "but force damage.\n" +
            "Additionally, you can spend 8 ki points to cast the\n" +
            "astral projection spell, without needing material\n" +
            "components. When you do so, you can’t take any other\n" +
            "creatures with you.\n" +
            "P e r f e c t S e l f\n" +
            "At 20th level, when you roll for initiative and have no ki\n" +
            "points remaining, you regain 4 ki points.\n" +
            "M onastic T raditions\n" +
            "Three traditions o f monastic pursuit are common in\n" +
            "the monasteries scattered across the multiverse. Most\n" +
            "monasteries practice one tradition exclusively, but a\n" +
            "few honor the three traditions and instruct each monk\n" +
            "according to his or her aptitude and interest. All three\n" +
            "traditions rely on the same basic techniques, diverging\n" +
            "as the student grows more adept. Thus, a monk need\n" +
            "choose a tradition only upon reaching 3rd level.\n" +
            "W a y o f t h e O p e n H a n d\n" +
            "Monks o f the Way o f the Open Hand are the ultimate\n" +
            "masters o f martial arts combat, whether armed or\n" +
            "unarmed. They learn techniques to push and trip their\n" +
            "opponents, manipulate ki to heal damage to their\n" +
            "bodies, and practice advanced meditation that can\n" +
            "protect them from harm.\n" +
            "O p e n H a n d T e c h n iq u e\n" +
            "Starting when you choose this tradition at 3rd level,\n" +
            "you can manipulate your enemy’s ki when you harness\n" +
            "your own. Whenever you hit a creature with one o f the\n" +
            "attacks granted by your Flurry of Blows, you can impose\n" +
            "one o f the following effects on that target:\n" +
            "• It must succeed on a Dexterity saving throw or be\n" +
            "knocked prone.\n" +
            "• It must make a Strength saving throw. If it fails, you\n" +
            "can push it up to 15 feet away from you.\n" +
            "• It can’t take reactions until the end o f your next turn.\n" +
            "W h o l e n e s s o f B o d y\n" +
            "At 6th level, you gain the ability to heal yourself. As an\n" +
            "action, you can regain hit points equal to three times\n" +
            "T im e l e s s B o d y\n" +
            "At 15th level, your ki sustains you so that you suffer\n" +
            "none o f the frailty o f old age, and you can't be aged\n" +
            "magically. You can still die o f old age, however. In\n" +
            "addition, you no longer need food or water.\n" +
            "E m p t y B o d y\n" +
            "Beginning at 18th level, you can use your action to\n" +
            "spend 4 ki points to become invisible for 1 minute.\n" +
            "your monk level. You must finish a long rest before you\n" +
            "can use this feature again.\n" +
            "T r a n q u i l i t y\n" +
            "Beginning at 11th level, you can enter a special\n" +
            "meditation that surrounds you with an aura o f peace. At\n" +
            "the end of a long rest, you gain the effect o f a sanctuary\n" +
            "spell that lasts until the start o f your next long rest (the\n" +
            "spell can end early as normal). The saving throw DC\n" +
            "for the spell equals 8 + your W isdom modifier + your\n" +
            "proficiency bonus.\n" +
            "Q u i v e r in g Pa l m\n" +
            "At 17th level, you gain the ability to set up lethal\n" +
            "vibrations in someone’s body. When you hit a creature\n" +
            "with an unarmed strike, you can spend 3 ki points to\n" +
            "start these imperceptible vibrations, which last for a\n" +
            "number o f days equal to your monk level. The vibrations\n" +
            "are harmless unless you use your action to end them.\n" +
            "To do so, you and the target must be on the same plane\n" +
            "o f existence. When you use this action, the creature\n" +
            "must make a Constitution saving throw. If it fails, it is\n" +
            "reduced to 0 hit points. If it succeeds, it takes 10d 10\n" +
            "necrotic damage.\n" +
            "You can have only one creature under the effect o f this\n" +
            "feature at a time. You can choose to end the vibrations\n" +
            "harmlessly without using an action.\n" +
            "W a y o f S h a d o w\n" +
            "Monks of the Way o f Shadow follow a tradition that\n" +
            "values stealth and subterfuge. These monks might\n" +
            "be called ninjas or shadowdancers, and they serve as\n" +
            "spies and assassins. Sometimes the members o f a\n" +
            "ninja monastery are family m embers, forming a clan\n" +
            "sworn to secrecy about their arts and missions. Other\n" +
            "monasteries are more like thieves’ guilds, hiring out\n" +
            "their services to nobles, rich merchants, or anyone else\n" +
            "who can pay their fees. Regardless of their methods, the\n" +
            "heads o f these monasteries expect the unquestioning\n" +
            "obedience o f their students.\n" +
            "S h a d o w A r t s\n" +
            "Starting when you choose this tradition at 3rd level, you\n" +
            "can use your ki to duplicate the effects o f certain spells.\n" +
            "As an action, you can spend 2 ki points to cast darkness,\n" +
            "darkvision, pass without trace, or silence, without\n" +
            "providing material components. Additionally, you gain\n" +
            "the minor illusion cantrip if you don’t already know it.\n" +
            "Sh a d o w St e p\n" +
            "At 6th level, you gain the ability to step from one shadow\n" +
            "into another. When you are in dim light or darkness,\n" +
            "as a bonus action you can teleport up to 60 feet to an\n" +
            "unoccupied space you can see that is also in dim light\n" +
            "or darkness. You then have advantage on the first melee\n" +
            "attack you make before the end o f the turn.\n" +
            "C l o a k o f Sh a d o w s\n" +
            "By 11th level, you have learned to become one with\n" +
            "the shadows. When you are in an area o f dim light or\n" +
            "darkness, you can use your action to become invisible.\n" +
            "You remain invisible until you make an attack, cast a\n" +
            "spell, or are in an area o f bright light.\n" +
            "O p p o r t u n i s t\n" +
            "At 17th level, you can exploit a creature's momentary\n" +
            "distraction when it is hit by an attack. Whenever a\n" +
            "creature within 5 feet o f you is hit by an attack made by\n" +
            "a creature other than you, you can use your reaction to\n" +
            "make a melee attack against that creature.\n" +
            "W a y o f t h e F o u r E l e m e n t s\n" +
            "You follow a monastic tradition that teaches you to\n" +
            "harness the elements. When you focus your ki, you can\n" +
            "align yourself with the forces o f creation and bend the\n" +
            "four elements to your will, using them as an extension\n" +
            "o f your body. Some members o f this tradition dedicate\n" +
            "themselves to a single element, but others weave the\n" +
            "elements together.\n" +
            "Many monks o f this tradition tattoo their bodies with\n" +
            "representations o f their ki powers, commonly imagined\n" +
            "as coiling dragons, but also as phoenixes, fish, plants,\n" +
            "mountains, and cresting waves.\n" +
            "D i s c ip l e o f t h e E l e m e n t s\n" +
            "When you choose this tradition at 3rd level, you learn\n" +
            "magical disciplines that harness the power o f the four\n" +
            "elements. A discipline requires you to spend ki points\n" +
            "each time you use it.\n" +
            "You know the Elemental Attunement discipline and\n" +
            "one other elemental discipline o f your choice, which are\n" +
            "detailed in the “Elemental Disciplines” section below.\n" +
            "You learn one additional elemental discipline o f your\n" +
            "choice at 6th, 11th, and 17th level.\n" +
            "Whenever you learn a new elemental discipline,\n" +
            "you can also replace one elemental discipline that you\n" +
            "already know with a different discipline.\n" +
            "Casting Elemental Spells. Some elemental\n" +
            "disciplines allow you to cast spells. See chapter 10 for\n" +
            "the general rules o f spellcasting. To cast one o f these\n" +
            "spells, you use its casting time and other rules, but you\n" +
            "don’t need to provide material components for it.\n" +
            "Once you reach 5th level in this class, you can spend\n" +
            "additional ki points to increase the level o f an elemental\n" +
            "discipline spell that you cast, provided that the spell has\n" +
            "an enhanced effect at a higher level, as burning hands\n" +
            "does. The spell's level increases by 1 for each additional\n" +
            "ki point you spend. For example, if you are a 5th-level\n" +
            "monk and use Sweeping Cinder Strike to cast burning\n" +
            "hands, you can spend 3 ki points to cast it as a 2nd-level\n" +
            "spell (the discipline’s base cost o f 2 ki points plus 1).\n" +
            "The maximum number o f ki points you can spend to\n" +
            "cast a spell in this way (including its base ki point cost\n" +
            "and any additional ki points you spend to increase its\n" +
            "level) is determined by your monk level, as shown in the\n" +
            "Spells and Ki Points table.\n" +
            "S p e l l s a n d K i P o i n t s\n" +
            "Monk Levels Maximum Ki Points for a Spell\n" +
            "5th—8th 3\n" +
            "9th—12th 4\n" +
            "13th—16th 5\n" +
            "17th—20th 6\n" +
            "E l e m e n t a l D is c i p l in e s\n" +
            "The elemental disciplines are presented in alphabetical\n" +
            "order. If a discipline requires a level, you must be that\n" +
            "level in this class to learn the discipline.\n" +
            "Breath o f Winter (17th Level Required). You can\n" +
            "spend 6 ki points to cast cone o f cold.\n" +
            "Clench o f the North Wind (6th Level Required). You\n" +
            "can spend 3 ki points to cast hold person.\n" +
            "Elemental Attunement. You can use your action to\n" +
            "briefly control elemental forces nearby, causing one of\n" +
            "the following effects o f your choice:\n" +
            "• Create a harmless, instantaneous sensory effect\n" +
            "related to air, earth, fire, or water, such as a shower of\n" +
            "sparks, a puff o f wind, a spray o f light mist, or a gentle\n" +
            "rumbling o f stone.\n" +
            "• Instantaneously light or snuff out a candle, a torch, or\n" +
            "a small campfire.\n" +
            "• Chill or warm up to 1 pound o f nonliving material for\n" +
            "up to 1 hour.\n" +
            "• Cause earth, fire, water, or mist that can fit within a\n" +
            "1-foot cube to shape itself into a crude form you designate\n" +
            "for 1 minute.\n" +
            "Eternal Mountain Defense (11th Level Required).\n" +
            "You can spend 5 ki points to cast stoneskin,\n" +
            "targeting yourself.\n" +
            "Fangs o f the Fire Snake. When you use the Attack\n" +
            "action on your turn, you can spend 1 ki point to cause\n" +
            "tendrils o f flame to stretch out from your fists and feet.\n" +
            "Your reach with your unarmed strikes increases by\n" +
            "10 feet for that action, as well as the rest o f the turn.\n" +
            "A hit with such an attack deals fire damage instead of\n" +
            "bludgeoning damage, and if you spend 1 ki point when\n" +
            "the attack hits, it also deals an extra 1d 10 fire damage.\n" +
            "Fist o f Four Thunders. You can spend 2 ki points to\n" +
            "cast thunderwave.\n" +
            "Fist o f Unbroken Air. You can create a blast of\n" +
            "compressed air that strikes like a mighty fist. As an\n" +
            "action, you can spend 2 ki points and choose a creature\n" +
            "within 30 feet o f you. That creature must make a\n" +
            "Strength saving throw. On a failed save, the creature\n" +
            "takes 3 d 10 bludgeoning damage, plus an extra 1d10\n" +
            "bludgeoning damage for each additional ki point you\n" +
            "spend, and you can push the creature up to 20 feet away\n" +
            "from you and knock it prone. On a successful save, the\n" +
            "creature takes half as much damage, and you don’t push\n" +
            "it or knock it prone.\n" +
            "Flames o f the Phoenix (11th Level Required). You\n" +
            "can spend 4 ki points to cast fireball.\n" +
            "Gong o f the Summit (6th Level Required). You can\n" +
            "spend 3 ki points to cast shatter.\n" +
            "Mist Stance (11th Level Required). You can spend 4\n" +
            "ki points to cast gaseous form, targeting yourself.\n" +
            "Ride the Wind (11th Level Required). You can spend\n" +
            "4 ki points to cast fly, targeting yourself.\n" +
            "River o f Hungry Flame (17th Level Required). You\n" +
            "can spend 5 ki points to cast wall of fire.\n" +
            "Rush o f the Gale Spirits. You can spend 2 ki points\n" +
            "to cast gust o f wind.\n" +
            "Shape the Flowing River. As an action, you can\n" +
            "spend 1 ki point to choose an area o f ice or water no\n" +
            "larger than 30 feet on a side within 120 feet o f you. You\n" +
            "can change water to ice within the area and v ice versa,\n" +
            "and you can reshape ice in the area in any manner you\n" +
            "choose. You can raise or lower the ice’s elevation, create\n" +
            "or fill in a trench, erect or flatten a wall, or form a pillar.\n" +
            "The extent o f any such changes can’t exceed half the\n" +
            "area’s largest dimension. For example, if you affect a\n" +
            "30-foot square, you can create a pillar up to 15 feet high,\n" +
            "raise or lower the square’s elevation by up to 15 feet, dig\n" +
            "a trench up to 15 feet deep, and so on. You can’t shape\n" +
            "the ice to trap or injure a creature in the area.\n" +
            "Sweeping Cinder Strike. You can spend 2 ki points to\n" +
            "cast burning hands.\n" +
            "Water Whip. You can spend 2 ki points as a bonus\n" +
            "action to create a whip o f water that shoves and pulls\n" +
            "a creature to unbalance it. A creature that you can see\n" +
            "that is within 30 feet o f you must make a Dexterity\n" +
            "saving throw. On a failed save, the creature takes 3 d 10\n" +
            "bludgeoning damage, plus an extra 1d 10 bludgeoning\n" +
            "damage for each additional ki point you spend, and you\n" +
            "can either knock it prone or pull it up to 25 feet closer\n" +
            "to you. On a successful save, the creature takes half as\n" +
            "much damage, and you don’t pull it or knock it prone.\n" +
            "Wave o f Rolling Earth (17th Level Required). You\n" +
            "can spend 6 ki points to cast wall of stone.";
    }
    else if(arg1.value == "paladin"){
        var classDescription = "As a paladin, you gain the following class features.\n" +
            "H i t P o in t s\n" +
            "Hit Dice: 1d10 per paladin level\n" +
            "Hit Points at 1st Level: 10 + your Constitution modifier\n" +
            "Hit Points at Higher Levels: 1d 10 (or 6) + your\n" +
            "Constitution modifier per paladin level after 1st\n" +
            "P r o f ic ie n c ie s\n" +
            "Armor: All armor, shields\n" +
            "Weapons: Simple weapons, martial weapons\n" +
            "Tools: None\n" +
            "Saving Throws: Wisdom, Charisma\n" +
            "Skills: Choose two from Athletics, Insight, Intimidation,\n" +
            "Medicine, Persuasion, and Religion\n" +
            "E q u i p m e n t\n" +
            "You start with the following equipment, in addition to\n" +
            "the equipment granted by your background:\n" +
            "• (a) a martial weapon and a shield or (b) two martial\n" +
            "weapons\n" +
            "• (a) five javelins or (b) any simple melee weapon\n" +
            "• (a) a priest’s pack or (b) an explorer’s pack\n" +
            "• Chain mail and a holy symbol\n" +
            "D i v i n e S e n s e\n" +
            "The presence o f strong evil registers on your senses like\n" +
            "a noxious odor, and powerful good rings like heavenly\n" +
            "music in your ears. As an action, you can open your\n" +
            "awareness to detect such forces. Until the end o f your\n" +
            "next turn, you know the location o f any celestial, fiend,\n" +
            "or undead within 60 feet o f you that is not behind total\n" +
            "cover. You know the type (celestial, fiend, or undead) o f\n" +
            "any being w hose presence you sense, but not its identity\n" +
            "(the vampire Count Strahd von Zarovich, for instance).\n" +
            "Within the same radius, you also detect the presence\n" +
            "o f any place or object that has been consecrated or\n" +
            "desecrated, as with the hallow spell.\n" +
            "You can use this feature a number of times equal to\n" +
            "1 + your Charisma modifier. When you finish a long rest,\n" +
            "you regain all expended uses.\n" +
            "L a y o n H a n d s\n" +
            "Your blessed touch can heal wounds. You have a pool\n" +
            "o f healing power that replenishes when you take a long\n" +
            "rest. With that pool, you can restore a total number of\n" +
            "hit points equal to your paladin level x 5.\n" +
            "As an action, you can touch a creature and draw\n" +
            "power from the pool to restore a number o f hit points\n" +
            "to that creature, up to the maximum amount remaining\n" +
            "in your pool.\n" +
            "Alternatively, you can expend 5 hit points from your\n" +
            "pool o f healing to cure the target o f one disease or\n" +
            "neutralize one poison affecting it. You can cure multiple\n" +
            "diseases and neutralize multiple poisons with a single\n" +
            "use o f Lay on Hands, expending hit points separately\n" +
            "for each one.\n" +
            "This feature has no effect on undead and constructs.\n" +
            "At 2nd level, you adopt a style o f fighting as your\n" +
            "specialty. Choose one o f the following options. You can’t\n" +
            "take a Fighting Style option more than once, even if you\n" +
            "later get to choose again.\n" +
            "D e f e n s e\n" +
            "While you are w earing armor, you gain a +1 bonus to AC.\n" +
            "D u e l in g\n" +
            "When you are wielding a melee weapon in one hand and\n" +
            "no other weapons, you gain a +2 bonus to damage rolls\n" +
            "with that weapon.\n" +
            "G r e a t W e a p o n F i g h t in g\n" +
            "When you roll a 1 or 2 on a damage die for an attack you\n" +
            "make with a melee weapon that you are w ielding with\n" +
            "two hands, you can reroll the die and must use the new\n" +
            "roll. The w eapon must have the two-handed or versatile\n" +
            "property for you to gain this benefit.\n" +
            "P r o t e c t io n\n" +
            "When a creature you can see attacks a target other\n" +
            "than you that is within 5 feet o f you, you can use your\n" +
            "reaction to impose disadvantage on the attack roll.\n" +
            "You must be wielding a shield.\n" +
            "S p e l l c a s t i n g\n" +
            "By 2nd level, you have learned to draw on divine\n" +
            "magic through meditation and prayer to cast spells as\n" +
            "a cleric does. See chapter 10 for the general rules o f\n" +
            "spellcasting and chapter 11 for the paladin spell list.\n" +
            "P r e p a r in g a n d C a s t in g Sp e l l s\n" +
            "The Paladin table shows how many spell slots you have\n" +
            "to cast your spells. To cast one o f your paladin spells of\n" +
            "1st level or higher, you must expend a slot o f the spell’s\n" +
            "level or higher. You regain all expended spell slots when\n" +
            "you finish a long rest.\n" +
            "You prepare the list o f paladin spells that are available\n" +
            "for you to cast, choosing from the paladin spell list.\n" +
            "When you do so, choose a number o f paladin spells\n" +
            "equal to your Charisma modifier + half your paladin\n" +
            "level, rounded down (minimum o f one spell). The spells\n" +
            "must be o f a level for which you have spell slots.\n" +
            "For example, if you are a 5th-level paladin, you have\n" +
            "four 1st-level and two 2nd-level spell slots. With a\n" +
            "Charisma o f 14, your list o f prepared spells can include\n" +
            "four spells o f 1st or 2nd level, in any combination. If you\n" +
            "prepare the 1st-level spell cure wounds, you can cast\n" +
            "it using a 1st-level or a 2nd-level slot. Casting the spell\n" +
            "doesn’t remove it from your list o f prepared spells.\n" +
            "You can change your list o f prepared spells when you\n" +
            "finish a long rest. Preparing a new list o f paladin spells\n" +
            "requires time spent in prayer and meditation: at least 1\n" +
            "minute per spell level for each spell on your list.\n" +
            "Sp e l l c a s t in g A b i l i t y\n" +
            "Charisma is your spellcasting ability for your paladin\n" +
            "spells, since their p ower derives from the strength of\n" +
            "your convictions. You use your Charisma whenever a\n" +
            "spell refers to your spellcasting ability. In addition, you\n" +
            "use your Charisma modifier when setting the saving\n" +
            "throw DC for a paladin spell you cast and when making\n" +
            "an attack roll with one.\n" +
            "Spell save DC = 8 + your proficiency bonus +\n" +
            "your Charisma modifier\n" +
            "Spell attack modifier = your proficiency bonus +\n" +
            "your Charisma modifier\n" +
            "Sp e l l c a s t in g Fo c u s\n" +
            "You can use a holy symbol (found in chapter 5) as a\n" +
            "spellcasting focus for your paladin spells.\n" +
            "D i v i n e S m i t e\n" +
            "Starting at 2nd level, when you hit a creature with a\n" +
            "melee w eapon attack, you can expend one paladin spell\n" +
            "slot to deal radiant damage to the target, in addition to\n" +
            "the w eapon’s damage. The extra damage is 2d8 for a\n" +
            "1st-level spell slot, plus 1d8 for each spell level higher\n" +
            "than 1st, to a maximum o f 5d8. The damage increases\n" +
            "by 1d8 if the target is an undead or a fiend.\n" +
            "D i v i n e H e a l t h\n" +
            "By 3rd level, the divine magic flowing through you\n" +
            "makes you immune to disease.\n" +
            "S a c r e d O a t h\n" +
            "When you reach 3rd level, you swear the oath that binds\n" +
            "you as a paladin forever. Up to this time you have been\n" +
            "in a preparatory stage, committed to the path but not\n" +
            "yet sworn to it. Now you choose the Oath o f Devotion,\n" +
            "the Oath o f the Ancients, or the Oath of Vengeance, all\n" +
            "detailed at the end o f the class description.\n" +
            "Your choice grants you features at 3rd level and again\n" +
            "at 7th, 15th, and 20th level. Those features include oath\n" +
            "spells and the Channel Divinity feature.\n" +
            "O a t h Sp e l l s\n" +
            "Each oath has a list o f associated spells. You gain\n" +
            "access to these spells at the levels specified in the oath\n" +
            "description. Once you gain access to an oath spell, you\n" +
            "always have it prepared. Oath spells don’t count against\n" +
            "the number o f spells you can prepare each day.\n" +
            "If you gain an oath spell that doesn’t appear on the\n" +
            "paladin spell list, the spell is nonetheless a paladin\n" +
            "spell for you.\n" +
            "C h a n n e l D i v in i t y\n" +
            "Your oath allows you to channel divine energy to fuel\n" +
            "magical effects. Each Channel Divinity option provided\n" +
            "by your oath explains how to use it.\n" +
            "When you use your Channel Divinity, you choose\n" +
            "which option to use. You must then finish a short or long\n" +
            "rest to use your Channel Divinity again.\n" +
            "Some Channel Divinity effects require saving throws.\n" +
            "When you use such an effect from this class, the DC\n" +
            "equals your paladin spell save DC.\n" +
            "A b i l i t y S c o r e I m p r o v e m e n t\n" +
            "When you reach 4th level, and again at 8th, 12th, 16th,\n" +
            "and 19th level, you can increase one ability score o f your\n" +
            "choice by 2, or you can increase two ability scores of\n" +
            "your choice by 1. As normal, you can’t increase an ability\n" +
            "score above 20 using this feature.\n" +
            "E x t r a A t t a c k\n" +
            "Beginning at 5th level, you can attack twice, instead o f\n" +
            "once, whenever you take the Attack action on your turn.\n" +
            "A u r a o f P r o t e c t i o n\n" +
            "Starting at 6th level, whenever you or a friendly creature\n" +
            "within 10 feet o f you must make a saving throw, the\n" +
            "creature gains a bonus to the saving throw equal to your\n" +
            "Charisma modifier (with a minimum bonus o f +1). You\n" +
            "must be conscious to grant this bonus.\n" +
            "At 18th level, the range of this aura increases to 30 feet.\n" +
            "A u r a o f C o u r a g e\n" +
            "Starting at 10th level, you and friendly creatures\n" +
            "within 10 feet o f you can’t be frightened while you\n" +
            "are conscious.\n" +
            "At 18th level, the range of this aura increases to 30 feet.\n" +
            "I m p r o v e d D i v i n e S m i t e\n" +
            "By 11th level, you are so suffused with righteous\n" +
            "might that all your melee w eapon strikes carry divine\n" +
            "power with them. Whenever you hit a creature with a\n" +
            "melee w eapon, the creature takes an extra 1d8 radiant\n" +
            "damage. If you also use your Divine Smite with an\n" +
            "attack, you add this damage to the extra damage o f your\n" +
            "Divine Smite.\n" +
            "C l e a n s i n g T o u c h\n" +
            "Beginning at 14th level, you can use your action to\n" +
            "end one spell on yourself or on one willing creature\n" +
            "that you touch.\n" +
            "You can use this feature a number o f times equal\n" +
            "to your Charisma modifier (a minimum o f once). You\n" +
            "regain expended uses when you finish a long rest.\n" +
            "Sacred O aths\n" +
            "Becoming a paladin involves taking vows that commit\n" +
            "the paladin to the cause o f righteousness, an active\n" +
            "path o f fighting wickedness. The final oath, taken\n" +
            "when he or she reaches 3rd level, is the culmination\n" +
            "of all the paladin’s training. Some characters with this\n" +
            "class don’t consider themselves true paladins until\n" +
            "they have reached 3rd level and made this oath. For\n" +
            "others, the actual swearing of the oath is a formality,\n" +
            "an official stamp on what has always been true in the\n" +
            "paladin’s heart.\n" +
            "O a t h o f D e v o t i o n\n" +
            "The Oath o f Devotion binds a paladin to the loftiest\n" +
            "ideals o f justice, virtue, and order. Sometimes called\n" +
            "cavaliers, white knights, or holy warriors, these\n" +
            "paladins meet the ideal o f the knight in shining armor,\n" +
            "acting with honor in pursuit o f justice and the greater\n" +
            "good. They hold themselves to the highest standards of\n" +
            "conduct, and some, for better or w orse, hold the rest of\n" +
            "the world to the same standards. Many who swear this\n" +
            "oath are devoted to gods o f law and good and use their\n" +
            "gods’ tenets as the measure o f their devotion. They hold\n" +
            "angels—the perfect servants o f good—as their ideals,\n" +
            "and incorporate images of angelic wings into their\n" +
            "helmets or coats o f arms.\n" +
            "T e n e t s o f D e v o t io n\n" +
            "Though the exact w ords and strictures o f the Oath of\n" +
            "Devotion vary, paladins o f this oath share these tenets.\n" +
            "Honesty. Don’t lie or cheat. Let your word be\n" +
            "your promise.\n" +
            "Courage. Never fear to act, though caution is w ise.\n" +
            "Compassion. Aid others, protect the weak, and\n" +
            "punish those who threaten them. Show m ercy to your\n" +
            "foes, but temper it with w isdom.\n" +
            "Honor. Treat others with fairness, and let your\n" +
            "honorable deeds be an example to them. Do as\n" +
            "much good as possible while causing the least\n" +
            "amount o f harm.\n" +
            "Duty. Be responsible for your actions and their\n" +
            "consequences, protect those entrusted to your care,\n" +
            "and obey those w ho have just authority over you.\n" +
            "O a t h S p e l l s\n" +
            "You gain oath spells at the paladin levels listed.\n" +
            "B r e a k in g Y o u r O a t h\n" +
            "A paladin tries to hold to the highest standards of conduct,\n" +
            "but even the most virtuous paladin is fallible. Sometimes\n" +
            "the right path proves too demanding, sometimes a situation\n" +
            "calls for the lesser of two evils, and sometimes the heat of\n" +
            "emotion causes a paladin to transgress his or her oath.\n" +
            "A paladin who has broken a vow typically seeks absolution\n" +
            "from a cleric who shares his or her faith or from another\n" +
            "paladin of the same order. The paladin might spend an allnight\n" +
            "vigil in prayer as a sign of penitence, or undertake a\n" +
            "fast or similar act of self-denial. After a rite o f confession and\n" +
            "forgiveness, the paladin starts fresh.\n" +
            "If a paladin willfully violates his or her oath and shows no\n" +
            "sign of repentance, the consequences can be more serious.\n" +
            "At the DM's discretion, an impenitent paladin might be\n" +
            "forced to abandon this class and adopt another, or perhaps\n" +
            "to take the Oathbreaker paladin option that appears in the\n" +
            "Dungeon Master's Guide.\n" +
            "reactions. For its action, it can use only the Dash action\n" +
            "or try to escape from an effect that prevents it from\n" +
            "moving. If there’s nowhere to move, the creature can use\n" +
            "the Dodge action.\n" +
            "A u r a o f D e v o t io n\n" +
            "Starting at 7th level, you and friendly creatures within\n" +
            "10 feet o f you can’t be charmed while you are conscious.\n" +
            "At 18th level, the range of this aura increases to 30 feet.\n" +
            "P u r i t y o f S p ir it\n" +
            "Beginning at 15th level, you are always under the effects\n" +
            "o f a protection from evil and good spell.\n" +
            "H o l y N im b u s\n" +
            "At 20th level, as an action, you can emanate an aura of\n" +
            "sunlight. For 1 minute, bright light shines from you in a\n" +
            "30-foot radius, and dim light shines 30 feet beyond that.\n" +
            "Whenever an enemy creature starts its turn in the\n" +
            "bright light, the creature takes 10 radiant damage.\n" +
            "In addition, for the duration, you have advantage on\n" +
            "saving throws against spells cast by fiends or undead.\n" +
            "Once you use this feature, you can’t use it again until\n" +
            "you finish a long rest.\n" +
            "O a t h o f t h e A n c i e n t s\n" +
            "The Oath o f the Ancients is as old as the race o f elves\n" +
            "and the rituals o f the druids. Sometimes called fey\n" +
            "knights, green knights, or horned knights, paladins who\n" +
            "swear this oath cast their lot with the side o f the light\n" +
            "in the cosmic struggle against darkness because they\n" +
            "love the beautiful and life-giving things o f the world,\n" +
            "not necessarily because they believe in principles of\n" +
            "honor, courage, and justice. They adorn their armor and\n" +
            "clothing with images o f growing things—leaves, antlers,\n" +
            "or flowers—to reflect their commitment to preserving\n" +
            "life and light in the world.\n" +
            "T e n e t s o f t h e A n c ie n t s\n" +
            "The tenets of the Oath o f the Ancients have been\n" +
            "preserved for uncounted centuries. This oath\n" +
            "emphasizes the principles of good above any concerns\n" +
            "o f law or chaos. Its four central principles are simple.\n" +
            "O a t h o f D e v o t i o n S p e l l s\n" +
            "Paladin Level Spells\n" +
            "3rd protection from evil and good, sanctuary\n" +
            "5th lesser restoration, zone o f truth\n" +
            "9th beacon o f hope, dispel magic\n" +
            "13th freedom o f movement, guardian o f faith\n" +
            "17th commune, flame strike\n" +
            "C h a n n e l D i v i n i t y\n" +
            "When you take this oath at 3rd level, you gain the\n" +
            "following two Channel Divinity options.\n" +
            "Sacred Weapon. As an action, you can imbue one\n" +
            "weapon that you are holding with positive energy,\n" +
            "using your Channel Divinity. For 1 minute, you add\n" +
            "your Charisma modifier to attack rolls made with that\n" +
            "weapon (with a minimum bonus o f +1). The weapon also\n" +
            "emits bright light in a 20-foot radius and dim light 20\n" +
            "feet beyond that. If the weapon is not already magical, it\n" +
            "becomes magical for the duration.\n" +
            "You can end this effect on your turn as part o f any\n" +
            "other action. If you are no longer holding or carrying\n" +
            "this w eapon, or if you fall unconscious, this effect ends.\n" +
            "Turn the Unholy. As an action, you present your\n" +
            "holy symbol and speak a prayer censuring fiends and\n" +
            "undead, using your Channel Divinity. Each fiend or\n" +
            "undead that can see or hear you within 30 feet o f you\n" +
            "must make a W isdom saving throw. If the creature\n" +
            "fails its saving throw, it is turned for 1 minute or until\n" +
            "it takes damage.\n" +
            "A turned creature must spend its turns trying to move\n" +
            "as far away from you as it can, and it can’t willingly\n" +
            "move to a space within 30 feet o f you. It also can’t take\n" +
            "Kindle the Light. Through your acts o f mercy,\n" +
            "kindness, and forgiveness, kindle the light o f hope in the\n" +
            "world, beating back despair.\n" +
            "Shelter the Light. Where there is good, beauty, love,\n" +
            "and laughter in the world, stand against the w ickedness\n" +
            "that w ould swallow it. Where life flourishes, stand\n" +
            "against the forces that would render it barren.\n" +
            "Preserve Your Own Light. Delight in song and\n" +
            "laughter, in beauty and art. If you allow the light to die in\n" +
            "your own heart, you can’t preserve it in the world.\n" +
            "Be the Light. Be a glorious beacon for all who live in\n" +
            "despair. Let the light o f your joy and courage shine forth\n" +
            "in all your deeds.\n" +
            "O a t h Sp e l l s\n" +
            "You gain oath spells at the paladin levels listed.\n" +
            "symbol, and each fey or fiend within 30 feet o f you that\n" +
            "can hear you must make a W isdom saving throw. On a\n" +
            "failed save, the creature is turned for 1 minute or until it\n" +
            "takes damage.\n" +
            "A turned creature must spend its turns trying to move\n" +
            "as far away from you as it can, and it can’t willingly\n" +
            "move to a space within 30 feet o f you. It also can’t take\n" +
            "reactions. For its action, it can use only the Dash action\n" +
            "or try to escape from an effect that prevents it from\n" +
            "moving. If there’s nowhere to move, the creature can use\n" +
            "the Dodge action.\n" +
            "If the creature’s true form is concealed by an illusion,\n" +
            "shapeshifting, or other effect, that form is revealed while\n" +
            "it is turned.\n" +
            "A u r a o f W a r d in g\n" +
            "Beginning at 7th level, ancient magic lies so heavily\n" +
            "upon you that it forms an eldritch ward. You and friendly\n" +
            "creatures within 10 feet o f you have resistance to\n" +
            "damage from spells.\n" +
            "At 18th level, the range o f this aura increases to 30 feet.\n" +
            "U n d y in g S e n t in e l\n" +
            "Starting at 15th level, when you are reduced to 0 hit\n" +
            "points and are not killed outright, you can choose to\n" +
            "drop to 1 hit point instead. Once you use this ability, you\n" +
            "can’t use it again until you finish a long rest.\n" +
            "Additionally, you suffer none o f the drawbacks o f old\n" +
            "age, and you can’t be aged magically.\n" +
            "E l d e r C h a m p io n\n" +
            "At 20th level, you can assume the form o f an ancient\n" +
            "force of nature, taking on an appearance you choose.\n" +
            "For example, your skin might turn green or take on a\n" +
            "bark-like texture, your hair might become leafy or mosslike,\n" +
            "or you might sprout antlers or a lion-like mane.\n" +
            "Using your action, you undergo a transformation.\n" +
            "For 1 minute, you gain the following benefits:\n" +
            "• At the start o f each o f your turns, you regain 10 hit\n" +
            "points.\n" +
            "• Whenever you cast a paladin spell that has a casting\n" +
            "time o f 1 action, you can cast it using a bonus action\n" +
            "instead.\n" +
            "• Enemy creatures within 10 feet o f you have disadvantage\n" +
            "on saving throws against your paladin spells and\n" +
            "Channel Divinity options.\n" +
            "Once you use this feature, you can’t use it again until\n" +
            "you finish a long rest.\n" +
            "O a t h o f V e n g e a n c e\n" +
            "The Oath of Vengeance is a solemn commitment to\n" +
            "punish those who have committed a grievous sin. When\n" +
            "evil forces slaughter helpless villagers, when an entire\n" +
            "people turns against the w ill of the gods, when a thieves’\n" +
            "guild grows too violent and powerful, when a dragon\n" +
            "rampages through the countryside—at times like these,\n" +
            "paladins arise and swear an Oath o f Vengeance to set\n" +
            "right that which has gone wrong. To these paladins—\n" +
            "sometimes called avengers or dark knights—their own\n" +
            "purity is not as important as delivering justice.\n" +
            "O a t h o f t h e A n c i e n t s S p e l l s\n" +
            "Paladin Level Spells\n" +
            "3rd ensnaring strike, speak with animals\n" +
            "5th moonbeam, misty step\n" +
            "9th plant growth, protection from energy\n" +
            "13th ice storm, stoneskin\n" +
            "17th commune with nature, tree stride\n" +
            "C h a n n e l D i v in i t y\n" +
            "When you take this oath at 3rd level, you gain the\n" +
            "following two Channel Divinity options.\n" +
            "Nature’s Wrath. You can use your Channel Divinity\n" +
            "to invoke primeval forces to ensnare a foe. As an action,\n" +
            "you can cause spectral vines to spring up and reach\n" +
            "for a creature within 10 feet o f you that you can see.\n" +
            "The creature must succeed on a Strength or Dexterity\n" +
            "saving throw (its choice) or be restrained. While\n" +
            "restrained by the vines, the creature repeats the saving\n" +
            "throw at the end o f each o f its turns. On a success, it\n" +
            "frees itself and the v ines vanish.\n" +
            "Turn the Faithless. You can use your Channel\n" +
            "Divinity to utter ancient w ords that are painful for fey\n" +
            "and fiends to hear. As an action, you present your holy\n" +
            "T e n e t s o f V e n g e a n c e\n" +
            "The tenets o f the Oath o f Vengeance vary by paladin, but\n" +
            "all the tenets revolve around punishing wrongdoers by\n" +
            "any means necessary. Paladins w ho uphold these tenets\n" +
            "are willing to sacrifice even their own righteousness to\n" +
            "mete out justice upon those w ho do evil, so the paladins\n" +
            "are often neutral or lawful neutral in alignment. The\n" +
            "core principles of the tenets are brutally simple.\n" +
            "Fight the Greater Evil. Faced with a choice of fighting\n" +
            "my sworn foes or combating a lesser evil. I choose the\n" +
            "greater evil.\n" +
            "No Mercy for the Wicked. Ordinary foes might win\n" +
            "my mercy, but my sworn enemies do not.\n" +
            "By Any Means Necessary. My qualms can’t get in the\n" +
            "way o f exterminating my foes.\n" +
            "Restitution. If my foes w reak ruin on the world, it is\n" +
            "because I failed to stop them. I must help those harmed\n" +
            "by their misdeeds.\n" +
            "O a t h Sp e l l s\n" +
            "You gain oath spells at the paladin levels listed.\n" +
            "C h a n n e l D i v in i t y\n" +
            "When you take this oath at 3rd level, you gain the\n" +
            "following two Channel Divinity options.\n" +
            "Abjure Enemy. As an action, you present your holy\n" +
            "symbol and speak a prayer o f denunciation, using your\n" +
            "Channel Divinity. Choose one creature within 60 feet\n" +
            "o f you that you can see. That creature must make a\n" +
            "Wisdom saving throw, unless it is immune to being\n" +
            "frightened. Fiends and undead have disadvantage on\n" +
            "this saving throw.\n" +
            "On a failed save, the creature is frightened for 1\n" +
            "minute or until it takes any damage. While frightened,\n" +
            "the creature’s speed is 0, and it can’t benefit from any\n" +
            "bonus to its speed.\n" +
            "On a successful save, the creature’s speed is halved\n" +
            "for 1 minute or until the creature takes any damage.\n" +
            "Vow o f Enmity. As a bonus action, you can utter a vow\n" +
            "o f enmity against a creature you can see within 10 feet\n" +
            "o f you, using your Channel Divinity. You gain advantage\n" +
            "on attack rolls against the creature for 1 minute or until\n" +
            "it drops to 0 hit points or falls unconscious.\n" +
            "R e l e n t l e s s A v e n g e r\n" +
            "By 7th level, your supernatural focus helps you close\n" +
            "off a foe’s retreat. When you hit a creature with an\n" +
            "opportunity attack, you can move up to half your\n" +
            "speed immediately after the attack and as part of\n" +
            "the same reaction. This movement doesn’t provoke\n" +
            "opportunity attacks.\n" +
            "S o u l o f V e n g e a n c e\n" +
            "Starting at 15th level, the authority with which you\n" +
            "speak your Vow o f Enmity gives you greater power over\n" +
            "your foe. When a creature under the effect o f your Vow\n" +
            "o f Enmity m akes an attack, you can use your reaction to\n" +
            "make a melee weapon attack against that creature if it is\n" +
            "within range.\n" +
            "A v e n g in g A n g e l\n" +
            "At 20th level, you can assume the form o f an\n" +
            "angelic avenger. Using your action, you undergo a\n" +
            "transformation. For 1 hour, you gain the following\n" +
            "benefits:\n" +
            "• Wings sprout from your back and grant you a flying\n" +
            "speed o f 60 feet.\n" +
            "• You emanate an aura o f menace in a 30-foot radius.\n" +
            "The first time any enemy creature enters the aura or\n" +
            "starts its turn there during a battle, the creature must\n" +
            "succeed on a W isdom saving throw or become frightened\n" +
            "of you for 1 minute or until it takes any damage.\n" +
            "Attack rolls against the frightened creature have\n" +
            "advantage.\n" +
            "Once you use this feature, you can’t use it again until\n" +
            "you finish a long rest.";
    }
    else if(arg1.value == "ranger"){
        var classDescription = "As a ranger, you gain the following class features.\n" +
            "H i t P o in t s\n" +
            "Hit Dice: 1d 10 per ranger level\n" +
            "Hit Points at 1st Level: 10 + your Constitution modifier\n" +
            "Hit Points at Higher Levels: 1d 10 (or 6) + your\n" +
            "Constitution modifier per ranger level after 1st\n" +
            "P r o f ic ie n c ie s\n" +
            "Armor: Light armor, medium armor, shields\n" +
            "Weapons: Simple weapons, martial weapons\n" +
            "Tools: None\n" +
            "Saving Throws: Strength, Dexterity\n" +
            "Skills: Choose three from Animal Handling,\n" +
            "Athletics, Insight, Investigation, Nature, Perception,\n" +
            "Stealth, and Survival\n" +
            "E q u i p m e n t\n" +
            "You start with the following equipment, in addition to\n" +
            "the equipment granted by your background:\n" +
            "You are particularly familiar with one type o f natural\n" +
            "environment and are adept at traveling and surviving in\n" +
            "such regions. Choose one type o f favored terrain: arctic,\n" +
            "coast, desert, forest, grassland, mountain, swamp,\n" +
            "or the Underdark. When you make an Intelligence or\n" +
            "Wisdom check related to your favored terrain, your\n" +
            "proficiency bonus is doubled if you are using a skill that\n" +
            "you’re proficient in.\n" +
            "While traveling for an hour or m ore in your favored\n" +
            "terrain, you gain the following benefits:\n" +
            "• Difficult terrain doesn’t slow your group’s travel.\n" +
            "• Your group can’t become lost except by magical\n" +
            "means.\n" +
            "• Even when you are engaged in another activity while\n" +
            "traveling (such as foraging, navigating, or tracking),\n" +
            "you remain alert to danger.\n" +
            "• If you are traveling alone, you can move stealthily at\n" +
            "a normal pace.\n" +
            "• When you forage, you find twice as much food as you\n" +
            "normally would.\n" +
            "• While tracking other creatures, you also learn their\n" +
            "exact number, their sizes, and how long ago they\n" +
            "passed through the area.\n" +
            "You choose additional favored terrain types at 6th\n" +
            "and 10th level.\n" +
            "F i g h t i n g S t y l e\n" +
            "At 2nd level, you adopt a particular style o f fighting as\n" +
            "your specialty. Choose one o f the following options.\n" +
            "You can’t take a Fighting Style option more than once,\n" +
            "even if you later get to choose again.\n" +
            "A r c h e r y\n" +
            "You gain a +2 bonus to attack rolls you make with\n" +
            "ranged w eapons.\n" +
            "D e f e n s e\n" +
            "While you are wearing armor, you gain a +1 bonus to AC.\n" +
            "D u e l in g\n" +
            "When you are w ielding a melee weapon in one hand and\n" +
            "no other weapons, you gain a +2 bonus to damage rolls\n" +
            "with that weapon.\n" +
            "T w o -W e a p o n F ig h t in g\n" +
            "When you engage in two-weapon fighting, you can add\n" +
            "your ability m odifier to the damage o f the second attack.\n" +
            "S p e l l c a s t i n g\n" +
            "By the time you reach 2nd level, you have learned to\n" +
            "use the magical essence o f nature to cast spells, much\n" +
            "as a druid does. See chapter 10 for the general rules of\n" +
            "spellcasting and chapter 11 for the ranger spell list.\n" +
            "S p e l l S l o t s\n" +
            "The Ranger table shows how many spell slots you have\n" +
            "to cast your spells o f 1st level and higher. To cast one of\n" +
            "these spells, you must expend a slot o f the spell’s level\n" +
            "or higher. You regain all expended spell slots when you\n" +
            "finish a long rest.\n" +
            "For example, if you know the 1st-level spell animal\n" +
            "friendship and have a 1st-level and a 2nd-level spell slot\n" +
            "available, you can cast animal friendship using either slot.\n" +
            "Sp e l l s K n o w n o f 1s t L e v e l a n d H ig h e r\n" +
            "You know two 1st-level spells o f your choice from the\n" +
            "ranger spell list.\n" +
            "The Spells Known column o f the Ranger table shows\n" +
            "when you learn more ranger spells o f your choice. Each\n" +
            "o f these spells must be o f a level for which you have\n" +
            "• (a) scale mail or (b) leather armor\n" +
            "• (a) two shortswords or (b) two simple melee w eapons\n" +
            "• (a) a dungeoneer’s pack or (b) an explorer’s pack\n" +
            "• A longbow and a quiver o f 20 arrows\n" +
            "Fa v o r e d E n e m y\n" +
            "Beginning at 1st level, you have significant experience\n" +
            "studying, tracking, hunting, and even talking to a certain\n" +
            "type o f enemy.\n" +
            "Choose a type o f favored enemy: aberrations,\n" +
            "beasts, celestials, constructs, dragons, elementals, fey,\n" +
            "fiends, giants, monstrosities, oozes, plants, or undead.\n" +
            "Alternatively, you can select two races o f humanoid\n" +
            "(such as gnolls and orc s) as favored enemies.\n" +
            "You have advantage on W isdom (Survival) checks to\n" +
            "track your favored enemies, as w ell as on Intelligence\n" +
            "checks to recall information about them.\n" +
            "When you gain this feature, you also learn one\n" +
            "language o f your choice that is spoken by your favored\n" +
            "enemies, if they speak one at all.\n" +
            "You choose one additional favored enemy, as well as\n" +
            "an associated language, at 6th and 14th level. As you\n" +
            "gain levels, your choices should reflect the types of\n" +
            "monsters you have encountered on your adventures.\n" +
            "N a t u r a l E x p l o r e r\n" +
            "spell slots. For instance, when you reach 5th level in this\n" +
            "class, you can learn one new spell o f 1st or 2nd level.\n" +
            "Additionally, when you gain a level in this class,\n" +
            "you can choose one o f the ranger spells you know\n" +
            "and replace it with another spell from the ranger\n" +
            "spell list, which also must be o f a level for which you\n" +
            "have spell slots.\n" +
            "S p e l l c a s t in g A b i l i t y\n" +
            "Wisdom is your spellcasting ability for your ranger\n" +
            "spells, since your magic draws on your attunement to\n" +
            "nature. You use your Wisdom whenever a spell refers\n" +
            "to your spellcasting ability. In addition, you use your\n" +
            "Wisdom modifier when setting the saving throw DC for\n" +
            "a ranger spell you cast and when making an attack roll\n" +
            "with one.\n" +
            "Spell save DC = 8 + your proficiency bonus +\n" +
            "your Wisdom modifier\n" +
            "Spell attack modifier = your proficiency bonus +\n" +
            "your Wisdom modifier\n" +
            "R a n g e r A r c h e t y p e\n" +
            "At 3rd level, you choose an archetype that you strive\n" +
            "to emulate: Hunter or Beast Master, both detailed at\n" +
            "the end o f the class description. Your choice grants\n" +
            "you features at 3rd level and again at 7th, 11th,\n" +
            "and 15th level.\n" +
            "P r i m e v a l A w a r e n e s s\n" +
            "Beginning at 3rd level, you can use your action and\n" +
            "expend one ranger spell slot to focus your awareness on\n" +
            "the region around you. For 1 minute per level o f the spell\n" +
            "slot you expend, you can sense whether the following\n" +
            "types of creatures are present within 1 mile of you (or\n" +
            "within up to 6 miles if you are in your favored terrain):\n" +
            "aberrations, celestials, dragons, elementals, fey, fiends,\n" +
            "and undead. This feature doesn’t reveal the creatures’\n" +
            "location or number.\n" +
            "A b i l i t y S c o r e I m p r o v e m e n t\n" +
            "When you reach 4th level, and again at 8th, 12th, 16th,\n" +
            "and 19th level, you can increase one ability score o f your\n" +
            "choice by 2, or you can increase two ability scores of\n" +
            "your choice by 1. As normal, you can’t increase an ability\n" +
            "score above 20 using this feature.\n" +
            "E x t r a A t t a c k\n" +
            "Beginning at 5th level, you can attack twice, instead of\n" +
            "once, whenever you take the Attack action on your turn.\n" +
            "L a n d ’s S t r i d e\n" +
            "Starting at 8th level, moving through nonmagical\n" +
            "difficult terrain costs you no extra movement. You can\n" +
            "also pass through nonmagical plants without being\n" +
            "slowed by them and without taking damage from them if\n" +
            "they have thorns, spines, or a similar hazard.\n" +
            "In addition, you have advantage on saving throws\n" +
            "against plants that are magically created or manipulated\n" +
            "to impede movement, such those created by the\n" +
            "entangle spell.\n" +
            "H i d e i n P l a i n S i g h t\n" +
            "Starting at 10th level, you can spend 1 minute creating\n" +
            "camouflage for yourself. You must have access to fresh\n" +
            "mud, dirt, plants, soot, and other naturally o ccurring\n" +
            "materials with which to create your camouflage.\n" +
            "Once you are camouflaged in this way, you can try\n" +
            "to hide by p ressing yourself up against a solid surface,\n" +
            "such as a tree or wall, that is at least as tall and w ide\n" +
            "as you are. You gain a +10 bonus to Dexterity (Stealth)\n" +
            "checks as long as you remain there without moving or\n" +
            "taking actions. Once you move or take an action or a\n" +
            "reaction, you must camouflage yourself again to gain\n" +
            "this benefit.\n" +
            "V a n i s h\n" +
            "Starting at 14th level, you can use the Hide action as a\n" +
            "bonus action on your turn. Also, you can’t be tracked by\n" +
            "nonmagical means, unless you choose to leave a trail.\n" +
            "F e r a l S e n s e s\n" +
            "At 18th level, you gain preternatural senses that help\n" +
            "you fight creatures you can’t see. When you attack a\n" +
            "creature you can’t see, your inability to see it doesn’t\n" +
            "impose disadvantage on your attack rolls against it.\n" +
            "You are also aware o f the location o f any invisible\n" +
            "creature within 30 feet o f you, provided that the\n" +
            "creature isn’t hidden from you and you aren’t\n" +
            "blinded or deafened.\n" +
            "F o e S l a y e r\n" +
            "At 20th level, you become an unparalleled hunter o f your\n" +
            "enemies. Once on each o f your turns, you can add your\n" +
            "Wisdom modifier to the attack roll or the damage roll of\n" +
            "an attack you make against one o f your favored enemies.\n" +
            "You can choose to use this feature before or after the\n" +
            "roll, but before any effects of the roll are applied.\n" +
            "Ranger A rchetypes\n" +
            "The ideal o f the ranger has two classic expressions: the\n" +
            "Hunter and the Beast Master.\n" +
            "H u n t e r\n" +
            "Emulating the Hunter archetype means accepting your\n" +
            "place as a bulwark between civilization and the terrors\n" +
            "of the wilderness. As you walk the Hunter’s path, you\n" +
            "learn specialized techniques for fighting the threats\n" +
            "you face, from rampaging ogres and hordes o f orc s to\n" +
            "towering giants and terrifying dragons.\n" +
            "H u n t e r ’s P r e y\n" +
            "At 3rd level, you gain one o f the following features\n" +
            "o f your choice.\n" +
            "Colossus Slayer. Your tenacity can w ear down\n" +
            "the most potent foes. When you hit a creature with a\n" +
            "weapon attack, the creature takes an extra 1d8 damage\n" +
            "if it’s below its hit point maximum. You can deal this\n" +
            "extra damage only once per turn.\n" +
            "Giant Killer. When a Large or larger creature within\n" +
            "5 feet o f you hits or misses you with an attack, you can\n" +
            "use your reaction to attack that creature immediately\n" +
            "after its attack, provided that you can see the creature.\n" +
            "Horde Breaker. Once on each o f your turns when you\n" +
            "make a w eapon attack, you can make another attack\n" +
            "with the same weapon against a different creature that\n" +
            "is within 5 feet o f the original target and within range\n" +
            "o f your weapon.\n" +
            "D e f e n s iv e T a c t ic s\n" +
            "At 7th level, you gain one o f the following features\n" +
            "o f your choice.\n" +
            "Escape the Horde. Opportunity attacks against you\n" +
            "are made with disadvantage.\n" +
            "Multiattack Defense. When a creature hits you\n" +
            "with an attack, you gain a +4 bonus to AC against\n" +
            "all subsequent attacks made by that creature for the\n" +
            "rest o f the turn.\n" +
            "Steel Will. You have advantage on saving throws\n" +
            "against being frightened.\n" +
            "M u l t i a t t a c k\n" +
            "At 11th level, you gain one of the following features\n" +
            "o f your choice.\n" +
            "Volley. You can use your action to make a ranged\n" +
            "attack against any number o f creatures within 10 feet\n" +
            "o f a point you can see within your w eapon’s range. You\n" +
            "must have ammunition for each target, as normal, and\n" +
            "you make a separate attack roll for each target.\n" +
            "Whirlwind Attack. You can use your action to make a\n" +
            "melee attack against any number o f creatures within 5\n" +
            "feet o f you, with a separate attack roll for each target.\n" +
            "Su p e r io r H u n t e r ’s D e f e n s e\n" +
            "At 15th level, you gain one o f the following features\n" +
            "o f your choice.\n" +
            "Evasion. You can nimbly dodge out of the way o f\n" +
            "certain area effects, such as a red dragon’s fiery breath\n" +
            "or a lightning bolt spell. When you are subjected to an\n" +
            "effect that allows you to make a Dexterity saving throw\n" +
            "to take only half damage, you instead take no damage\n" +
            "if you succeed on the saving throw, and only half\n" +
            "damage if you fail.\n" +
            "Stand Against the Tide. When a hostile creature\n" +
            "misses you with a melee attack, you can use your reaction\n" +
            "to force that creature to repeat the same attack against\n" +
            "another creature (other than itself) o f your choice.\n" +
            "Uncanny Dodge. When an attacker that you can see\n" +
            "hits you with an attack, you can use your reaction to\n" +
            "halve the attack’s damage against you.\n" +
            "B e a s t M a s t e r\n" +
            "The Beast Master archetype embodies a friendship\n" +
            "between the civilized races and the beasts o f the world.\n" +
            "United in focus, beast and ranger w ork as one to fight\n" +
            "the monstrous foes that threaten civilization and the\n" +
            "wilderness alike. Emulating the Beast Master archetype\n" +
            "means committing yourself to this ideal, working in\n" +
            "partnership with an animal as its companion and friend.\n" +
            "R a n g e r ’s C o m p a n io n\n" +
            "At 3rd level, you gain a beast companion that\n" +
            "accompanies you on your adventures and is trained to\n" +
            "fight alongside you. Choose a beast that is no larger than\n" +
            "Medium and that has a challenge rating o f 1/4 or lower\n" +
            "(appendix D presents statistics for the hawk, mastiff,\n" +
            "and panther as examples). Add your proficiency bonus\n" +
            "to the beast’s AC, attack rolls, and damage rolls, as well\n" +
            "as to any saving throws and skills it is proficient in. Its\n" +
            "hit point maximum equals its normal maximum or four\n" +
            "times your ranger level, whichever is higher.\n" +
            "The beast obeys your commands as best as it can. It\n" +
            "takes its turn on your initiative, though it doesn’t take an\n" +
            "action unless you command it to. On your turn, you can\n" +
            "verbally command the beast where to move (no action\n" +
            "required by you). You can use your action to verbally\n" +
            "command it to take the Attack, Dash, Disengage, Dodge,\n" +
            "or Help action. Once you have the Extra Attack feature,\n" +
            "you can make one w eapon attack yourself when you\n" +
            "command the beast to take the Attack action.\n" +
            "While traveling through your favored terrain with only\n" +
            "the beast, you can move stealthily at a normal pace.\n" +
            "If the beast dies, you can obtain another one by\n" +
            "spending 8 hours magically bonding with another beast\n" +
            "that isn’t hostile to you, either the same type o f beast as\n" +
            "before or a different one.\n" +
            "E x c e p t io n a l T r a in in g\n" +
            "Beginning at 7th level, on any o f your turns when\n" +
            "your beast companion doesn’t attack, you can use a\n" +
            "bonus action to command the beast to take the Dash,\n" +
            "Disengage, Dodge, or Help action on its turn.\n" +
            "B e s t ia l F u r y\n" +
            "Starting at 11th level, your beast companion can\n" +
            "make two attacks when you command it to use the\n" +
            "Attack action.\n" +
            "Sh a r e S p e l l s\n" +
            "Beginning at 15th level, when you cast a spell targeting\n" +
            "yourself, you can also affect your beast companion with\n" +
            "the spell if the beast is within 30 feet o f you.";
    }
    else if(arg1.value == "rogue"){
        var classDescription = "As a rogue, you have the following class features.\n" +
            "H i t P o in t s\n" +
            "Hit Dice: 1d8 per rogue level\n" +
            "Hit Points at 1st Level: 8 + your Constitution modifier\n" +
            "Hit Points at Higher Levels: 1d8 (or 5) + your\n" +
            "Constitution modifier per rogue level after 1st\n" +
            "P r o f i c ie n c ie s\n" +
            "Armor: Light armor\n" +
            "Weapons: Simple weapons, hand crossbows,\n" +
            "longswords, rapiers, shortswords\n" +
            "Tools: Thieves’ tools\n" +
            "Saving Throws: Dexterity. Intelligence\n" +
            "Skills: Choose four from Acrobatics, Athletics,\n" +
            "Deception. Insight, Intimidation, Investigation,\n" +
            "Perception, Performance. Persuasion, Sleight of\n" +
            "Hand, and Stealth\n" +
            "E q u i p m e n t\n" +
            "You start with the following equipment, in addition to\n" +
            "the equipment granted by your background:\n" +
            "• (a) a rapier or (b) a shortsword\n" +
            "• (a) a shortbow and quiver of 20 arrows or (b) a\n" +
            "shortsword\n" +
            "• (a) a burglar’s pack, (b) a dungeoneer’s pack, or (c) an\n" +
            "explorer’s pack\n" +
            "• Leather armor, two daggers, and thieves’ tools\n" +
            "E x p e r t i s e\n" +
            "At 1st level, choose two o f your skill proficiencies, or\n" +
            "one o f your skill proficiencies and your proficiency with\n" +
            "thieves’ tools. Your proficiency bonus is doubled for any\n" +
            "ability check you make that uses either o f the chosen\n" +
            "proficiencies.\n" +
            "At 6th level, you can choose two more o f your\n" +
            "proficiencies (in skills or with thieves’ tools) to gain\n" +
            "this benefit.\n" +
            "S n e a k A t t a c k\n" +
            "Beginning at 1st level, you know how to strike subtly\n" +
            "and exploit a foe’s distraction. Once per turn, you can\n" +
            "deal an extra 1d6 damage to one creature you hit with\n" +
            "an attack if you have advantage on the attack roll. The\n" +
            "attack must use a finesse or a ranged w eapon.\n" +
            "You don’t need advantage on the attack roll if another\n" +
            "enemy o f the target is within 5 feet o f it, that enemy\n" +
            "isn’t incapacitated, and you don’t have disadvantage on\n" +
            "the attack roll.\n" +
            "The amount o f the extra damage increases as you\n" +
            "gain levels in this class, as shown in the Sneak Attack\n" +
            "column o f the Rogue table.\n" +
            "T h i e v e s ’ C a n t\n" +
            "During your rogue training you learned thieves’ cant, a\n" +
            "secret mix o f dialect, jargon, and code that allows you to\n" +
            "hide messages in seemingly normal conversation. Only\n" +
            "another creature that knows thieves’ cant understands\n" +
            "such messages. It takes four times longer to convey such\n" +
            "a message than it does to speak the same idea plainly.\n" +
            "In addition, you understand a set o f secret signs and\n" +
            "symbols used to convey short, simple messages, such\n" +
            "as whether an area is dangerous or the territory o f a\n" +
            "thieves’ guild, whether loot is nearby, or whether the\n" +
            "people in an area are easy marks or w ill provide a safe\n" +
            "house for thieves on the run.\n" +
            "C u n n i n g A c t i o n\n" +
            "Starting at 2nd level, your quick thinking and agility\n" +
            "allow you to move and act quickly. You can take a\n" +
            "bonus action on each o f your turns in combat. This\n" +
            "action can b e used only to take the Dash, Disengage,\n" +
            "or Hide action.\n" +
            "R o g u i s h A r c h e t y p e\n" +
            "At 3rd level, you choose an archetype that you emulate\n" +
            "in the exercise o f your rogue abilities: Thief, Assassin,\n" +
            "or Arcane Trickster, all detailed at the end o f the class\n" +
            "description. Your archetype choice grants you features\n" +
            "at 3rd level and then again at 9th, 13th, and 17th level.\n" +
            "A b i l i t y S c o r e I m p r o v e m e n t\n" +
            "When you reach 4th level, and again at 8th, 10th, 12th,\n" +
            "16th, and 19th level, you can increase one ability score\n" +
            "o f your choice by 2, or you can increase two ability\n" +
            "scores o f your choice by 1. As normal, you can’t increase\n" +
            "an ability score above 20 using this feature.\n" +
            "U n c a n n y D o d g e\n" +
            "Starting at 5th level, when an attacker that you can see\n" +
            "hits you with an attack, you can use your reaction to\n" +
            "halve the attack’s damage against you.\n" +
            "E v a s i o n\n" +
            "Beginning at 7th level, you can nimbly dodge out o f the\n" +
            "way o f certain area effects, such as a red dragon’s fiery\n" +
            "breath or an ice storm spell. When you are subjected\n" +
            "to an effect that allows you to make a Dexterity saving\n" +
            "throw to take only half damage, you instead take no\n" +
            "damage if you succeed on the saving throw, and only\n" +
            "half damage if you fail.\n" +
            "R e l i a b l e T a l e n t\n" +
            "By 11th level, you have refined your chosen skills until\n" +
            "they approach perfection. Whenever you make an ability\n" +
            "check that lets you add your proficiency bonus, you can\n" +
            "treat a d20 roll o f 9 or lower as a 10.\n" +
            "B l i n d s e n s e\n" +
            "Starting at 14th level, if you are able to hear, you are\n" +
            "aware o f the location o f any hidden or invisible creature\n" +
            "within 10 feet o f you.\n" +
            "S l i p p e r y M i n d\n" +
            "By 15th level, you have acquired greater mental\n" +
            "strength. You gain proficiency in W isdom saving throws.\n" +
            "E l u s i v e\n" +
            "Beginning at 18th level, you are so evasive that\n" +
            "attackers rarely gain the upper hand against you. No\n" +
            "attack roll has advantage against you while you aren’t\n" +
            "incapacitated.\n" +
            "S t r o k e o f L u c k\n" +
            "At 20th level, you have an uncanny knack for succeeding\n" +
            "when you need to. If your attack m isses a target within\n" +
            "range, you can turn the miss into a hit. Alternatively, if\n" +
            "you fail an ability check, you can treat the d20 roll as a 20.\n" +
            "Once you use this feature, you can’t use it again until\n" +
            "you finish a short or long rest.\n" +
            "Rog uish A rchetypes\n" +
            "Rogues have many features in common, including their\n" +
            "emphasis on perfecting their skills, their precise and\n" +
            "deadly approach to combat, and their increasingly quick\n" +
            "reflexes. But different rogues steer those talents in\n" +
            "varying directions, embodied by the rogue archetypes.\n" +
            "Your choice o f archetype is a reflection o f your focus—\n" +
            "not necessarily an indication o f your chosen profession,\n" +
            "but a description of your preferred techniques.\n" +
            "T h i e f\n" +
            "You hone your skills in the larcenous arts. Burglars,\n" +
            "bandits, cutpurses, and other criminals typically follow\n" +
            "this archetype, but so do rogues who prefer to think of\n" +
            "themselves as professional treasure seekers, explorers,\n" +
            "delvers, and investigators. In addition to improving your\n" +
            "agility and stealth, you learn skills useful for delving into\n" +
            "ancient ruins, reading unfamiliar languages, and using\n" +
            "magic items you normally couldn’t employ.\n" +
            "Fa s t H a n d s\n" +
            "Starting at 3rd level, you can use the bonus action\n" +
            "granted by your Cunning A ction to make a Dexterity\n" +
            "(Sleight o f Hand) check, use your thieves’ tools to\n" +
            "disarm a trap or open a lock, or take the Use an\n" +
            "Object action.\n" +
            "Se c o n d - S t o r y W o r k\n" +
            "When you choose this archetype at 3rd level, you gain\n" +
            "the ability to climb faster than normal; climbing no\n" +
            "longer costs you extra movement.\n" +
            "In addition, when you make a running jump, the\n" +
            "distance you cover increases by a number o f feet equal\n" +
            "to your Dexterity modifier.\n" +
            "Su p r e m e Sn e a k\n" +
            "Starting at 9th level, you have advantage on a Dexterity\n" +
            "(Stealth) check if you move no more than half your\n" +
            "speed on the same turn.\n" +
            "U se M a g ic D e v ic e\n" +
            "By 13th level, you have learned enough about the\n" +
            "workings o f magic that you can improvise the use of\n" +
            "items even when they are not intended for you. You\n" +
            "ignore all class, race, and level requirements on the use\n" +
            "of magic items.\n" +
            "T h i e f ’s R e f l e x e s\n" +
            "When you reach 17th level, you have become adept at\n" +
            "laying ambushes and quickly escaping danger. You can\n" +
            "take two turns during the first round o f any combat. You\n" +
            "take your first turn at your normal initiative and your\n" +
            "second turn at your initiative minus 10. You can’t use\n" +
            "this feature when you are surprised.\n" +
            "A s s a s s i n\n" +
            "You focus your training on the grim art of death. Those\n" +
            "who adhere to this archetype are diverse: hired killers,\n" +
            "spies, bounty hunters, and even specially anointed\n" +
            "priests trained to exterminate the enemies o f their deity.\n" +
            "Stealth, poison, and disguise help you eliminate your\n" +
            "foes with deadly efficiency.\n" +
            "B o n u s P r o f ic ie n c ie s\n" +
            "When you choose this archetype at 3rd level, you gain\n" +
            "proficiency with the disguise kit and the poisoner’s kit.\n" +
            "A s s a s s in a t e\n" +
            "Starting at 3rd level, you are at your deadliest when you\n" +
            "get the drop on your enemies. You have advantage on\n" +
            "attack rolls against any creature that hasn’t taken a turn\n" +
            "in the combat yet. In addition, any hit you score against\n" +
            "a creature that is surprised is a critical hit.\n" +
            "I n f i l t r a t io n E x p e r t is e\n" +
            "Starting at 9th level, you can unfailingly create false\n" +
            "identities for yourself. You must spend seven days and\n" +
            "25 gp to establish the history, profession, and affiliations\n" +
            "for an identity. You can’t establish an identity that\n" +
            "belongs to someone else. For example, you might acquire\n" +
            "appropriate clothing, letters of introduction, and officiallooking\n" +
            "certification to establish yourself as a member of\n" +
            "a trading house from a remote city so you can insinuate\n" +
            "yourself into the company o f other wealthy merchants.\n" +
            "Thereafter, if you adopt the new identity as a disguise,\n" +
            "other creatures believe you to be that person until given\n" +
            "an obvious reason not to.\n" +
            "Im p o s t o r\n" +
            "At 13th level, you gain the ability to unerringly m imic\n" +
            "another person’s speech, writing, and behavior.\n" +
            "You must spend at least three hours studying\n" +
            "these three components of the person’s behavior,\n" +
            "listening to speech, examining handwriting, and\n" +
            "observing mannerisms.\n" +
            "Your ruse is indiscernible to the casual observer. If a\n" +
            "wary creature suspects something is amiss, you have\n" +
            "advantage on any Charisma (Deception) check you make\n" +
            "to avoid detection.\n" +
            "D e a t h St r ik e\n" +
            "Starting at 17th level, you become a master o f instant\n" +
            "death. When you attack and hit a creature that is\n" +
            "surprised, it must make a Constitution saving throw\n" +
            "(DC 8 + your Dexterity modifier + your proficiency\n" +
            "bonus). On a failed save, double the damage of your\n" +
            "attack against the creature.\n" +
            "A r c a n e T r i c k s t e r\n" +
            "Some rogues enhance their fine-honed skills o f stealth\n" +
            "and agility with magic, learning tricks o f enchantment\n" +
            "and illusion. These rogues include pickpockets and\n" +
            "burglars, but also pranksters, mischief-makers, and a\n" +
            "significant number o f adventurers.\n" +
            "Sp e l l c a s t in g\n" +
            "When you reach 3rd level, you gain the ability to\n" +
            "cast spells. See chapter 10 for the general rules of\n" +
            "spellcasting and chapter 11 for the w izard spell list.\n" +
            "Cantrips. You learn three cantrips: mage hand and\n" +
            "two other cantrips o f your choice from the wizard spell\n" +
            "list. You learn another wizard cantrip o f your choice\n" +
            "at 10th level.\n" +
            "Spell Slots. The Arcane Trickster Spellcasting\n" +
            "table shows how many spell slots you have to cast\n" +
            "your spells o f 1st level and higher. To cast one o f these\n" +
            "spells, you must expend a slot o f the spell's level or\n" +
            "higher. You regain all expended spell slots when you\n" +
            "finish a long rest.\n" +
            "For example, if you know the 1st-level spell charm\n" +
            "person and have a 1st-level and a 2nd-level spell slot\n" +
            "available, you can cast charm person using either slot.\n" +
            "Spells Known o f 1st-Level and Higher. You know\n" +
            "three 1st-level wizard spells o f your choice, two o f which\n" +
            "you must choose from the enchantment and illusion\n" +
            "spells on the w izard spell list.\n" +
            "The Spells Known column o f the Arcane Trickster\n" +
            "Spellcasting table shows when you learn more wizard\n" +
            "spells o f 1st level or higher. Each of these spells must\n" +
            "be an enchantment or illusion spell of your choice, and\n" +
            "must be o f a level for which you have spell slots. For\n" +
            "instance, when you reach 7th level in this class, you can\n" +
            "learn one new spell o f 1st or 2nd level.\n" +
            "The spells you learn at 8th, 14th, and 20th level can\n" +
            "come from any school o f magic.\n" +
            "Whenever you gain a level in this class, you can\n" +
            "replace one o f the wizard spells you know with another\n" +
            "spell o f your choice from the wizard spell list. The\n" +
            "new spell must b e o f a level for which you have spell\n" +
            "slots, and it must be an enchantment or illusion spell,\n" +
            "unless you’re replacing the spell you gained at 8th, 14th,\n" +
            "or 20th level.\n" +
            "Spellcasting Ability. Intelligence is your spellcasting\n" +
            "ability for your wizard spells, since you learn your\n" +
            "spells through dedicated study and memorization.\n" +
            "You use your Intelligence whenever a spell refers to\n" +
            "your spellcasting ability. In addition, you use your\n" +
            "Intelligence modifier when setting the saving throw\n" +
            "DC for a w izard spell you cast and when making an\n" +
            "attack roll with one.\n" +
            "Spell save DC = 8 + your proficiency bonus +\n" +
            "your Intelligence modifier\n" +
            "Spell attack modifier = your proficiency bonus +\n" +
            "your Intelligence modifier\n" +
            "M a g e H a n d L e g e r d e m a i n\n" +
            "Starting at 3rd level, when you cast mage hand, you can\n" +
            "make the spectral hand invisible, and you can perform\n" +
            "the following additional tasks with it:\n" +
            "• You can stow one object the hand is holding in a\n" +
            "container w orn or carried by another creature.\n" +
            "• You can retrieve an object in a container worn or\n" +
            "carried by another creature.\n" +
            "• You can use thieves’ tools to pick locks and disarm\n" +
            "traps at range.\n" +
            "A r c a n e T r i c k s t e r S p e l l c a s t i n g\n" +
            "Rogue\n" +
            "Level\n" +
            "Cantrips\n" +
            "Known\n" +
            "Spells\n" +
            "Known\n" +
            "— Spell Slots per Spell Level—\n" +
            "1st 2nd 3rd 4th\n" +
            "3rd 3 3 2 — — —\n" +
            "4th 3 4 3 — — —\n" +
            "5th 3 4 3 — — —\n" +
            "6th 3 4 3 — — —\n" +
            "7th 3 5 4 2 — —\n" +
            "8th 3 6 4 2 — —\n" +
            "9th 3 6 4 2 — —\n" +
            "10th 4 7 4 3 — —\n" +
            "11th 4 8 4 3 — —\n" +
            "12th 4 8 4 3 — —\n" +
            "13th 4 9 4 3 2 —\n" +
            "14th 4 10 4 3 2 —\n" +
            "15th 4 10 4 3 2 —\n" +
            "16th 4 11 4 3 3 —\n" +
            "17th 4 11 4 3 3 —\n" +
            "18th 4 11 4 3 3 —\n" +
            "19th 4 12 4 3 3 1\n" +
            "20th 4 13 4 3 3 1\n" +
            "You can perform one o f these tasks without being\n" +
            "noticed by a creature if you succeed on a Dexterity\n" +
            "(Sleight o f Hand) check contested by the creature’s\n" +
            "Wisdom (Perception) check.\n" +
            "In addition, you can use the bonus action granted by\n" +
            "your Cunning Action to control the hand.\n" +
            "M a g i c a l A m b u s h\n" +
            "Starting at 9th level, if you are hidden from a\n" +
            "creature when you cast a spell on it, the creature has\n" +
            "disadvantage on any saving throw it makes against the\n" +
            "spell this turn.\n" +
            "V e r s a t il e T r i c k s t e r\n" +
            "At 13th level, you gain the ability to distract targets with\n" +
            "your mage hand. As a bonus action on your turn, you can\n" +
            "designate a creature within 5 feet o f the spectral hand\n" +
            "created by the spell. Doing so gives you advantage on\n" +
            "attack rolls against that creature until the end of the turn.\n" +
            "Sp e l l T h ie f\n" +
            "At 17th level, you gain the ability to magically\n" +
            "steal the knowledge o f how to cast a spell from\n" +
            "another spellcaster.\n" +
            "Immediately after a creature casts a spell that targets\n" +
            "you or includes you in its area o f effect, you can use your\n" +
            "reaction to force the creature to make a saving throw\n" +
            "with its spellcasting ability modifier. The DC equals\n" +
            "your spell save DC. On a failed save, you negate the\n" +
            "spell’s effect against you, and you steal the knowledge\n" +
            "o f the spell if it is at least 1st level and o f a level you can\n" +
            "cast (it doesn’t need to be a wizard spell). For the next\n" +
            "8 hours, you know the spell and can cast it using your\n" +
            "spell slots. The creature can’t cast that spell until the\n" +
            "8 hours have passed.\n" +
            "Once you use this feature, you can’t use it again until\n" +
            "you finish a long rest.";
    }
    else if(arg1.value == "sorcerer"){
        var classDescription = "As a sorcerer, you gain the following class features.\n" +
            "H it P o in t s\n" +
            "Hit Dice: 1d6 per sorcerer level\n" +
            "Hit Points at 1st Level: 6 + your Constitution modifier\n" +
            "Hit Points at Higher Levels: 1d6 (or 4) + your\n" +
            "Constitution modifier per sorcerer level after 1st\n" +
            "P r o f ic ie n c ie s\n" +
            "Armor: None\n" +
            "Weapons: Daggers, darts, slings, quarterstaffs,\n" +
            "light crossbows\n" +
            "Tools: None\n" +
            "Saving Throws: Constitution, Charisma\n" +
            "Skills: Choose two from Arcana, Deception, Insight,\n" +
            "Intimidation, Persuasion, and Religion\n" +
            "E q u i p m e n t\n" +
            "You start with the following equipment, in addition to\n" +
            "the equipment granted by your background:\n" +
            "• (a) a light c rossbow and 20 bolts or (b) any simple\n" +
            "weapon\n" +
            "• (a) a component pouch or (b) an arcane focus\n" +
            "• (a) a dungeoneer’s pack or (b) an explorer’s pack\n" +
            "• Two daggers\n" +
            "S p e l l c a s t i n g\n" +
            "An event in your past, or in the life o f a parent or\n" +
            "ancestor, left an indelible mark on you, infusing you with\n" +
            "arcane magic. This font of magic, whatever its origin,\n" +
            "fuels your spells. See chapter 10 for the general rules of\n" +
            "spellcasting and chapter 11 for the sorcerer spell list.\n" +
            "C a n t r i p s\n" +
            "At 1st level, you know four cantrips of your choice from\n" +
            "the sorcerer spell list. You learn additional sorcerer\n" +
            "cantrips o f your choice at higher levels, as shown in the\n" +
            "Cantrips Known column o f the Sorcerer table.\n" +
            "Sp e l l Sl o t s\n" +
            "The Sorcerer table shows how many spell slots you\n" +
            "have to cast your spells of 1st level and higher. To cast\n" +
            "one o f these sorcerer spells, you must expend a slot of\n" +
            "the spell’s level or higher. You regain all expended spell\n" +
            "slots when you finish a long rest.\n" +
            "For example, if you know the 1st-level spell burning\n" +
            "hands and have a 1st-level and a 2nd-level spell slot\n" +
            "available, you can cast burning hands using either slot.\n" +
            "Spe l l s K n o w n o f 1st L e v e l a n d H ig h e r\n" +
            "You know two 1st-level spells o f your choice from the\n" +
            "sorcerer spell list.\n" +
            "The Spells Known column o f the Sorcerer table\n" +
            "shows when you learn more sorcerer spells o f your\n" +
            "choice. Each of these spells must be of a level for which\n" +
            "you have spell slots. For instance, when you reach 3rd\n" +
            "level in this class, you can learn one new spell o f 1st\n" +
            "or 2nd level.\n" +
            "Additionally, when you gain a level in this class,\n" +
            "you can choose one o f the sorcerer spells you know\n" +
            "and replace it with another spell from the sorcerer\n" +
            "spell list, which also must be o f a level for which you\n" +
            "have spell slots.\n" +
            "Sp e l l c a s t in g A b i l i t y\n" +
            "Charisma is your spellcasting ability for your sorcerer\n" +
            "spells, since the power o f your magic relies on your\n" +
            "ability to project your w ill into the world. You use your\n" +
            "Charisma whenever a spell refers to your spellcasting\n" +
            "ability. In addition, you use your Charisma modifier\n" +
            "when setting the saving throw DC for a sorcerer spell\n" +
            "you cast and when making an attack roll with one.\n" +
            "Spell save DC = 8 + your proficiency bonus +\n" +
            "your Charisma modifier\n" +
            "Spell attack modifier = your proficiency bonus +\n" +
            "your Charisma modifier\n" +
            "Sp e l l c a s t in g F o c u s\n" +
            "You can use an arcane focus (found in chapter 5) as a\n" +
            "spellcasting focus for your sorcerer spells.\n" +
            "S o r c e r o u s O r i g i n\n" +
            "Choose a sorcerous origin, which describes the\n" +
            "source o f your innate magical power: Draconic\n" +
            "Bloodline or Wild Magic, both detailed at the end o f the\n" +
            "class description.\n" +
            "Your choice grants you features when you choose it at\n" +
            "1st level and again at 6th, 14th, and 18th level.\n" +
            "F o n t o f M a g i c\n" +
            "At 2nd level, you tap into a deep wellspring o f magic\n" +
            "within yourself. This w ellspring is represented by\n" +
            "sorcery points, which allow you to create a variety o f\n" +
            "magical effects.\n" +
            "S o r c e r y P o in t s\n" +
            "You have 2 sorcery points, and you gain more as you\n" +
            "reach higher levels, as shown in the Sorcery Points\n" +
            "column o f the Sorcerer table. You can never have\n" +
            "more sorcery points than shown on the table for your\n" +
            "level. You regain all spent sorcery points when you\n" +
            "finish a long rest.\n" +
            "F l e x i b l e C a s t i n g\n" +
            "You can use your sorcery points to gain additional spell\n" +
            "slots, or sacrifice spell slots to gain additional sorcery\n" +
            "points. You learn other ways to use your sorcery points\n" +
            "as you reach higher levels.\n" +
            "Creating Spell Slots. You can transform unexpended\n" +
            "sorcery points into one spell slot as a bonus action on\n" +
            "your turn. The Creating Spell Slots table shows the cost\n" +
            "o f creating a spell slot o f a given level. You can create\n" +
            "spell slots no higher in level than 5th.\n" +
            "C r e a t i n g S p e l l S l o t s\n" +
            "Spell Slot Sorcery\n" +
            "Level Point Cost\n" +
            "1st 2\n" +
            "2nd 3\n" +
            "3rd 5\n" +
            "4th 6\n" +
            "5th 7\n" +
            "Converting a Spell Slot to Sorcery Points. As a\n" +
            "bonus action on your turn, you can expend one spell\n" +
            "slot and gain a number o f sorcery points equal to the\n" +
            "slot’s level.\n" +
            "M e t a m a g i c\n" +
            "At 3rd level, you gain the ability to twist your spells\n" +
            "to suit your needs. You gain two o f the following\n" +
            "Metamagic options o f your choice. You gain another one\n" +
            "at 10th and 17th level.\n" +
            "You can use only one Metamagic option on a spell\n" +
            "when you cast it, unless otherwise noted.\n" +
            "C a r e f u l Sp e l l\n" +
            "When you cast a spell that forces other creatures to make\n" +
            "a saving throw, you can protect some o f those creatures\n" +
            "from the spell’s full force. To do so, you spend 1 sorcery\n" +
            "point and choose a number o f those creatures up to your\n" +
            "Charisma modifier (minimum o f one creature). A chosen\n" +
            "creature automatically succeeds on its saving throw\n" +
            "against the spell.\n" +
            "D i s t a n t S p e l l\n" +
            "When you cast a spell that has a range o f 5 feet or\n" +
            "greater, you can spend 1 sorcery point to double the\n" +
            "range o f the spell.\n" +
            "When you cast a spell that has a range o f touch, you\n" +
            "can spend 1 sorcery point to make the range o f the\n" +
            "spell 30 feet.\n" +
            "E m p o w e r e d Sp e l l\n" +
            "When you roll damage for a spell, you can spend 1\n" +
            "sorcery point to reroll a number o f the damage dice up\n" +
            "to your Charisma modifier (minimum of one). You must\n" +
            "use the new rolls.\n" +
            "You can use Empowered Spell even if you have\n" +
            "already used a different Metamagic option during the\n" +
            "casting o f the spell.\n" +
            "E x t e n d e d S pe l l\n" +
            "When you cast a spell that has a duration o f 1 minute\n" +
            "or longer, you can spend 1 sorcery point to double its\n" +
            "duration, to a maximum duration o f 24 hours.\n" +
            "H e ig h t e n e d S p e l l\n" +
            "When you cast a spell that forces a creature to make a\n" +
            "saving throw to resist its effects, you can spend 3 sorcery\n" +
            "points to give one target of the spell disadvantage on its\n" +
            "first saving throw made against the spell.\n" +
            "Q u i c k e n e d Sp e l l\n" +
            "When you cast a spell that has a casting time o f 1 action,\n" +
            "you can spend 2 sorcery points to change the casting\n" +
            "time to 1 bonus action for this casting.\n" +
            "Su b t l e Sp e l l\n" +
            "When you cast a spell, you can spend 1 sorcery point to\n" +
            "cast it without any somatic or verbal components.\n" +
            "Tw i n n e d Sp e l l\n" +
            "When you cast a spell that targets only one creature and\n" +
            "doesn’t have a range o f self, you can spend a number of\n" +
            "sorcery points equal to the spell’s level to target a second\n" +
            "creature in range with the same spell (1 sorcery point if\n" +
            "the spell is a cantrip).\n" +
            "A b i l i t y S c o r e I m p r o v e m e n t\n" +
            "When you reach 4th level, and again at 8th, 12th, 16th,\n" +
            "and 19th level, you can increase one ability score of your\n" +
            "choice by 2, or you can increase two ability scores of\n" +
            "your choice by 1. As normal, you can’t increase an ability\n" +
            "score above 20 using this feature.\n" +
            "S o r c e r o u s R e s t o r a t i o n\n" +
            "At 20th level, you regain 4 expended sorcery points\n" +
            "whenever you finish a short rest.\n" +
            "Sorcerous O rigins\n" +
            "Different sorcerers claim different origins for their\n" +
            "innate magic. Although many variations exist, most\n" +
            "o f these origins fall into two categories: a draconic\n" +
            "bloodline and w ild magic.\n" +
            "D r a c o n i c B l o o d l i n e\n" +
            "Your innate magic comes from draconic magic that was\n" +
            "mingled with your blood or that o f your ancestors. Most\n" +
            "often, sorcerers with this origin trace their descent\n" +
            "back to a mighty sorcerer of ancient times w ho made a\n" +
            "bargain with a dragon or who might even have claimed\n" +
            "a dragon parent. Some o f these bloodlines are well\n" +
            "established in the world, but most are obscure. Any\n" +
            "given sorcerer could be the first o f a new bloodline, as a\n" +
            "result o f a pact or some other exceptional circumstance.\n" +
            "D r a g o n A n c e s t o r\n" +
            "At 1st level, you choose one type o f dragon as your\n" +
            "ancestor. The damage type associated with each dragon\n" +
            "is used by features you gain later.\n" +
            "D r a c o n i c A n c e s t r y\n" +
            "Dragon Damage Type\n" +
            "Black Acid\n" +
            "Blue Lightning\n" +
            "Brass Fire\n" +
            "Bronze Lightning\n" +
            "Copper Acid\n" +
            "Cold Fire\n" +
            "Green Poison\n" +
            "Red Fire\n" +
            "Silver Cold\n" +
            "White Cold\n" +
            "You can speak, read, and write Draconic. Additionally,\n" +
            "whenever you make a Charisma check when interacting\n" +
            "with dragons, your proficiency bonus is doubled if it\n" +
            "applies to the check.\n" +
            "D r a c o n i c R e s il ie n c e\n" +
            "As magic flows through your body, it causes physical\n" +
            "traits o f your dragon ancestors to emerge. At 1st level,\n" +
            "your hit point maximum increases by 1 and increases by\n" +
            "1 again whenever you gain a level in this class.\n" +
            "Additionally, parts o f your skin are covered by a thin\n" +
            "sheen of dragon-like scales. When you aren’t w earing\n" +
            "armor, your AC equals 13 + your Dexterity modifier.\n" +
            "E l e m e n t a l A f f i n i t y\n" +
            "Starting at 6th level, when you cast a spell that deals\n" +
            "damage o f the type associated with your draconic\n" +
            "ancestry, add your Charisma modifier to that damage.\n" +
            "At the same time, you can spend 1 sorcery point to gain\n" +
            "resistance to that damage type for 1 hour.\n" +
            "D r a g o n W in g s\n" +
            "At 14th level, you gain the ability to sprout a pair of\n" +
            "dragon wings from your back, gaining a flying speed\n" +
            "equal to your current speed. You can create these w ings\n" +
            "as a bonus action on your turn. They last until you\n" +
            "dismiss them as a bonus action on your turn.\n" +
            "You can’t manifest your w ings while wearing armor\n" +
            "unless the armor is made to accommodate them, and\n" +
            "clothing not made to accommodate your wings might\n" +
            "be destroyed when you manifest them.\n" +
            "D r a c o n ic P r e s e n c e\n" +
            "Beginning at 18th level, you can channel the dread\n" +
            "presence o f your dragon ancestor, causing those around\n" +
            "you to become awestruck or frightened. As an action,\n" +
            "you can spend 5 sorcery points to draw on this power\n" +
            "and exude an aura of awe or fear (your choice) to a\n" +
            "distance o f 60 feet. For 1 minute or until you lose your\n" +
            "concentration (as if you w ere casting a concentration\n" +
            "spell), each hostile creature that starts its turn in this\n" +
            "aura must succeed on a W isdom saving throw or be\n" +
            "charmed (if you chose awe) or frightened (if you chose\n" +
            "fear) until the aura ends. A creature that succeeds on\n" +
            "this saving throw is immune to your aura for 24 hours.\n" +
            "W i l d M a g i c\n" +
            "Your innate magic comes from the w ild forces of chaos\n" +
            "that underlie the order o f creation. You might have\n" +
            "endured exposure to some form o f raw magic, perhaps\n" +
            "through a planar portal leading to Limbo, the Elemental\n" +
            "Planes, or the mysterious Far Realm. Perhaps you\n" +
            "were blessed by a powerful fey creature or marked by a\n" +
            "demon. Or your magic could be a fluke o f your birth, with\n" +
            "no apparent cause or reason. However it came to be, this\n" +
            "chaotic m agic churns within you, waiting for any outlet.\n" +
            "W il d M a g ic Su r g e\n" +
            "Starting when you choose this origin at 1st level, your\n" +
            "spellcasting can unleash surges o f untamed magic.\n" +
            "Immediately after you cast a sorcerer spell o f 1st level\n" +
            "or higher, the DM can have you roll a d20. If you roll a\n" +
            "1, roll on the Wild Magic Surge table to create a random\n" +
            "magical effect.\n" +
            "T id e s o f C h a o s\n" +
            "Starting at 1st level, you can manipulate the forces o f\n" +
            "chance and chaos to gain advantage on one attack roll,\n" +
            "ability check, or saving throw. Once you do so, you must\n" +
            "finish a long rest before you can use this feature again.\n" +
            "Any time before you regain the use of this feature, the\n" +
            "DM can have you roll on the Wild Magic Surge table\n" +
            "immediately after you cast a sorcerer spell of 1st level or\n" +
            "higher. You then regain the use of this feature.\n" +
            "B e n d L u c k\n" +
            "Starting at 6th level, you have the ability to twist fate\n" +
            "using your wild magic. When another creature you can\n" +
            "see makes an attack roll, an ability check, or a saving\n" +
            "throw, you can use your reaction and spend 2 sorcery\n" +
            "points to roll 1d4 and apply the number rolled as a\n" +
            "bonus or penalty (your choice) to the creature’s roll. You\n" +
            "can do so after the creature rolls but before any effects\n" +
            "o f the roll occur.\n" +
            "C o n t r o l l e d C h a o s\n" +
            "At 14th level, you gain a modicum o f control over the\n" +
            "surges o f your wild magic. Whenever you roll on the\n" +
            "Wild Magic Surge table, you can roll twice and use\n" +
            "either number.\n" +
            "Sp e l l B o m b a r d m e n t\n" +
            "Beginning at 18th level, the harmful energy o f your\n" +
            "spells intensifies. When you roll damage for a spell and\n" +
            "roll the highest number possible on any of the dice,\n" +
            "choose one o f those dice, roll it again and add that roll to";
    }
    else if(arg1.value == "warlock"){
        var classDescription = "As a warlock, you gain the following class features.\n" +
            "H i t P o i n t s\n" +
            "Hit Dice: 1d8 per warlock level\n" +
            "Hit Points at 1st Level: 8 + your Constitution modifier\n" +
            "Hit Points at Higher Levels: 1d8 (or 5) + your\n" +
            "Constitution modifier per warlock level after 1st\n" +
            "P r o f ic ie n c ie s\n" +
            "Armor: Light armor\n" +
            "Weapons: Simple weapons\n" +
            "Tools: None\n" +
            "Saving Throws: Wisdom, Charisma\n" +
            "Skills: Choose two skills from Arcana,\n" +
            "Deception, History, Intimidation, Investigation,\n" +
            "Nature, and Religion\n" +
            "E q u i p m e n t\n" +
            "You start with the following equipment, in addition to\n" +
            "the equipment granted by your background:\n" +
            "• (a) a light c rossbow and 20 bolts or (b) any simple\n" +
            "weapon\n" +
            "• (a) a component pouch or (b) an arcane focus\n" +
            "• (a) a scholar’s pack or (b) a dungeoneer’s pack\n" +
            "• Leather armor, any simple w eapon, and two daggers\n" +
            "O t h e r w o r l d l y Pa t r o n\n" +
            "At 1st level, you have struck a bargain with an\n" +
            "otherworldly being o f your choice: the Archfey, the\n" +
            "Fiend, or the Great Old One, each o f which is detailed\n" +
            "at the end o f the class description. Your choice\n" +
            "grants you features at 1st level and again at 6th, 10th,\n" +
            "and 14th level.\n" +
            "Pa c t M a g i c\n" +
            "Your arcane research and the magic bestowed on you\n" +
            "by your patron have given you facility with spells. See\n" +
            "chapter 10 for the general rules o f spellcasting and\n" +
            "chapter 11 for the w arlock spell list.\n" +
            "C a n t r i p s\n" +
            "You know two cantrips o f your choice from the w arlock\n" +
            "spell list. You learn additional warlock cantrips of your\n" +
            "choice at higher levels, as shown in the Cantrips Known\n" +
            "column o f the Warlock table.\n" +
            "Sp e l l Sl o t s\n" +
            "The Warlock table shows how many spell slots you have.\n" +
            "The table also shows what the level of those slots is; all\n" +
            "o f your spell slots are the same level. To cast one o f your\n" +
            "warlock spells o f 1st level or higher, you must expend a\n" +
            "spell slot. You regain all expended spell slots when you\n" +
            "finish a short or long rest.\n" +
            "For example, when you are 5th level, you have\n" +
            "two 3rd-level spell slots. To cast the 1st-level spell\n" +
            "thunderwave, you must spend one o f those slots, and\n" +
            "you cast it as a 3rd-level spell.\n" +
            "Sp e l l s K n o w n o f 1s t L e v e l a n d H ig h e r\n" +
            "At 1st level, you know two 1st-level spells o f your choice\n" +
            "from the w arlock spell list.\n" +
            "The Spells Known column o f the W arlock table shows\n" +
            "when you learn more w arlock spells o f your choice o f 1st\n" +
            "level and higher. A spell you choose must be o f a level\n" +
            "no higher than what’s shown in the table's Slot Level\n" +
            "column for your level. When you reach 6th level, for\n" +
            "example, you learn a new warlock spell, which can be\n" +
            "1st, 2nd, or 3rd level.\n" +
            "Additionally, when you gain a level in this class,\n" +
            "you can choose one o f the warlock spells you know\n" +
            "and replace it with another spell from the warlock\n" +
            "spell list, which also must be o f a level for which you\n" +
            "have spell slots.\n" +
            "Sp e l l c a s t in g A b i l i t y\n" +
            "Charisma is your spellcasting ability for your w arlock\n" +
            "spells, so you use your Charisma whenever a spell refers\n" +
            "to your spellcasting ability. In addition, you use your\n" +
            "Charisma modifier when setting the saving throw DC\n" +
            "for a w arlock spell you cast and when making an attack\n" +
            "roll with one.\n" +
            "Spell save DC = 8 + your proficiency bonus +\n" +
            "your Charisma modifier\n" +
            "Spell attack modifier = your proficiency bonus +\n" +
            "your Charisma modifier\n" +
            "Sp e l l c a s t in g Fo c u s\n" +
            "You can use an arcane focus (found in chapter 5) as a\n" +
            "spellcasting focus for your w arlock spells.\n" +
            "E l d r i t c h I n v o c a t i o n s\n" +
            "In your study o f occult lore, you have unearthed eldritch\n" +
            "invocations, fragments o f forbidden knowledge that\n" +
            "imbue you with an abiding magical ability.\n" +
            "At 2nd level, you gain two eldritch invocations of your\n" +
            "choice. Your invocation options are detailed at the end\n" +
            "o f the class description. When you gain certain w arlock\n" +
            "levels, you gain additional invocations of your choice,\n" +
            "as shown in the Invocations Known column o f the\n" +
            "Warlock table.\n" +
            "Additionally, when you gain a level in this class,\n" +
            "you can choose one o f the invocations you know and\n" +
            "replace it with another invocation that you could learn\n" +
            "at that level.\n" +
            "Pa c t B o o n\n" +
            "At 3rd level, your otherworldly patron bestows a gift\n" +
            "upon you for your loyal service. You gain one o f the\n" +
            "following features o f your choice.\n" +
            "Pa c t o f t h e C h a in\n" +
            "You learn the find familiar spell and can cast it as a\n" +
            "ritual. The spell doesn’t count against your number of\n" +
            "spells known.\n" +
            "When you cast the spell, you can choose one of the\n" +
            "normal forms for your familiar or one o f the following\n" +
            "special forms: imp, pseudodragon, quasit, or sprite.\n" +
            "Additionally, when you take the Attack action, you can\n" +
            "forgo one o f your own attacks to allow your familiar to\n" +
            "make one attack o f its own.\n" +
            "Pa c t o f t h e B l a d e\n" +
            "You can use your action to create a pact w eapon in your\n" +
            "empty hand. You can choose the form that this melee\n" +
            "weapon takes each time you create it (see chapter 5 for\n" +
            "weapon options). You are proficient with it while you\n" +
            "wield it. This w eapon counts as magical for the purpose\n" +
            "o f overcoming resistance and immunity to nonmagical\n" +
            "attacks and damage.\n" +
            "Your pact weapon disappears if it is more than 5 feet\n" +
            "away from you for 1 minute or more. It also disappears\n" +
            "if you use this feature again, if you dismiss the w eapon\n" +
            "(no action required), or if you die.\n" +
            "You can transform one magic w eapon into your pact\n" +
            "weapon by performing a special ritual while you hold\n" +
            "the weapon. You perform the ritual over the course\n" +
            "o f 1 hour, which can be done during a short rest.\n" +
            "You can then dismiss the weapon, shunting it into an\n" +
            "extradimensional space, and it appears whenever you\n" +
            "create your pact weapon thereafter. You can’t affect an\n" +
            "artifact or a sentient w eapon in this way. The weapon\n" +
            "ceases being your pact weapon if you die, if you perform\n" +
            "the 1-hour ritual on a different w eapon, or if you use\n" +
            "a 1-hour ritual to break your bond to it. The weapon\n" +
            "appears at your feet if it is in the extradimensional space\n" +
            "when the bond breaks.\n" +
            "Pa c t o f t h e T o m e\n" +
            "Your patron gives you a grimoire called a Book of\n" +
            "Shadows. When you gain this feature, choose three\n" +
            "cantrips from any class’s spell list. While the book is on\n" +
            "your person, you can cast those cantrips at will. They\n" +
            "don’t count against your number of cantrips known.\n" +
            "If you lose your Book o f Shadows, you can perform\n" +
            "a 1-hour ceremony to receive a replacement from your\n" +
            "patron. This ceremony can be performed during a short\n" +
            "or long rest, and it destroys the previous book. The book\n" +
            "turns to ash when you die.\n" +
            "A b i l i t y S c o r e I m p r o v e m e n t\n" +
            "When you reach 4th level, and again at 8th, 12th, 16th,\n" +
            "and 19th level, you can increase one ability score o f your\n" +
            "choice by 2, or you can increase two ability s cores of\n" +
            "your choice by 1. As normal, you can't increase an ability\n" +
            "score above 20 using this feature.\n" +
            "M y s t i c A r c a n u m\n" +
            "At 11th level, your patron bestows upon you a magical\n" +
            "secret called an arcanum. Choose one 6th-level spell\n" +
            "from the w arlock spell list as this arcanum.\n" +
            "You can cast your arcanum spell once without\n" +
            "expending a spell slot. You must finish a long rest before\n" +
            "you can do so again.\n" +
            "At higher levels, you gain more warlock spells o f your\n" +
            "choice that can be cast in this way: one 7th-level spell\n" +
            "at 13th level, one 8th-level spell at 15th level, and one\n" +
            "9th-level spell at 17th level. You regain all uses of your\n" +
            "Mystic A rcanum when you finish a long rest.\n" +
            "E l d r i t c h M a s t e r\n" +
            "At 20th level, you can draw on your inner reserve of\n" +
            "mystical power while entreating your patron to regain\n" +
            "expended spell slots. You can spend 1 minute entreating\n" +
            "your patron for aid to regain all your expended spell slots\n" +
            "from your Pact Magic feature. Once you regain spell slots\n" +
            "with this feature, you must finish a long rest before you\n" +
            "can do so again.\n" +
            "Yo u r Pa c t B o o n\n" +
            "Each Pact Boon option produces a special creature or an\n" +
            "object that reflects your patron’s nature.\n" +
            "Pact o f the Chain. Your familiar is more cunning than a\n" +
            "typical familiar. Its default form can be a reflection of your\n" +
            "patron, with sprites and pseudodragons tied to the Archfey\n" +
            "and imps and quasits tied to the Fiend. Because the Great Old\n" +
            "One’s nature is inscrutable, any familiar form is suitable for it.\n" +
            "Pact of the Blade. If your patron is the Archfey, your\n" +
            "weapon might be a slender blade wrapped in leafy vines.\n" +
            "If you serve the Fiend, your weapon could be an axe made\n" +
            "of black metal and adorned with decorative flames. If your\n" +
            "patron is the Great Old One, your weapon might be an\n" +
            "ancient-looking spear, with a gemstone embedded in its\n" +
            "head, carved to look like a terrible unblinking eye.\n" +
            "Pact o f the Tome. Your Book of Shadows might be a fine,\n" +
            "gilt-edged tome with spells of enchantment and illusion,\n" +
            "gifted to you by the lordly Archfey. It could be a weighty tome\n" +
            "bound in demon hide studded with iron, holding spells of\n" +
            "conjuration and a wealth of forbidden lore about the sinister\n" +
            "regions of the cosmos, a gift of the Fiend. Or it could be the\n" +
            "tattered diary of a lunatic driven mad by contact with the\n" +
            "Great Old One, holding scraps of spells that only your own\n" +
            "burgeoning insanity allows you to understand and cast.\n" +
            "O t h e rw o r ld ly P a tron s\n" +
            "The beings that serve as patrons for w arlocks are\n" +
            "mighty inhabitants o f other planes o f existence—not\n" +
            "gods, but almost godlike in their power. Various patrons\n" +
            "give their w arlocks access to different powers and\n" +
            "invocations, and expect significant favors in return.\n" +
            "Some patrons collect w arlocks, doling out mystic\n" +
            "knowledge relatively freely or boasting o f their ability\n" +
            "to bind mortals to their will. Other patrons bestow their\n" +
            "power only grudgingly, and might make a pact with\n" +
            "only one warlock. Warlocks who serve the same patron\n" +
            "might view each other as allies, siblings, or rivals.\n" +
            "T h e A r c h f e y\n" +
            "Your patron is a lord or lady o f the fey, a creature of\n" +
            "legend who holds secrets that w ere forgotten before\n" +
            "the mortal races w ere born. This being’s motivations\n" +
            "are often inscrutable, and sometimes whimsical, and\n" +
            "might involve a striving for greater magical power or the\n" +
            "settling o f age-old grudges. Beings of this sort include\n" +
            "the Prince o f Frost; the Queen o f Air and Darkness,\n" +
            "ruler o f the Gloaming Court; Titania of the Summer\n" +
            "Court; her consort Oberon, the Green Lord; Hyrsam,\n" +
            "the Prince o f Fools; and ancient hags.\n" +
            "E x p a n d e d Sp e l l L is t\n" +
            "The Archfey lets you choose from an expanded list of\n" +
            "spells when you learn a warlock spell. The following\n" +
            "spells are added to the w arlock spell list for you.\n" +
            "A r c h f e y E x p a n d e d S p e l l s\n" +
            "Spell Level Spells\n" +
            "1st faerie fire, sleep\n" +
            "2nd calm emotions, phantasmal force\n" +
            "3rd blink, plant growth\n" +
            "4th dominate beast, greater invisibility\n" +
            "5th dominate person, seeming\n" +
            "F e y P r e s e n c e\n" +
            "Starting at 1st level, your patron bestows upon you the\n" +
            "ability to project the beguiling and fearsome presence\n" +
            "o f the fey. As an action, you can cause each creature in\n" +
            "a 10-foot cube originating from you to make a Wisdom\n" +
            "saving throw against your w arlock spell save DC. The\n" +
            "creatures that fail their saving throws are all charmed\n" +
            "or frightened by you (your choice) until the end of\n" +
            "your next turn.\n" +
            "Once you use this feature, you can’t use it again until\n" +
            "you finish a short or long rest.\n" +
            "M i s t y E s c a p e\n" +
            "Starting at 6th level, you can vanish in a puff o f mist in\n" +
            "response to harm. When you take damage, you can use\n" +
            "your reaction to turn invisible and teleport up to 60 feet\n" +
            "to an unoccupied space you can see. You remain invisible\n" +
            "until the start o f your next turn or until you attack or\n" +
            "cast a spell.\n" +
            "Once you use this feature, you can't use it again until\n" +
            "you finish a short or long rest.\n" +
            "B e g u i l in g D e f e n s e s\n" +
            "Beginning at 10th level, your patron teaches you how to\n" +
            "turn the mind-affecting magic o f your enemies against\n" +
            "them. You are immune to being charmed, and when\n" +
            "another creature attempts to charm you, you can use\n" +
            "your reaction to attempt to turn the charm back on\n" +
            "that creature. The creature must succeed on a Wisdom\n" +
            "saving throw against your warlock spell save DC or\n" +
            "be charmed by you for 1 minute or until the creature\n" +
            "takes any damage.\n" +
            "D a r k D e l ir iu m\n" +
            "Starting at 14th level, you can plunge a creature into\n" +
            "an illusory realm. As an action, choose a creature\n" +
            "that you can see within 60 feet o f you. It must make a\n" +
            "Wisdom saving throw against your warlock spell save\n" +
            "DC. On a failed save, it is charmed or frightened by you\n" +
            "(your choice) for 1 minute or until your concentration\n" +
            "is broken (as if you are concentrating on a spell). This\n" +
            "effect ends early if the creature takes any damage.\n" +
            "Until this illusion ends, the creature thinks it is lost\n" +
            "in a misty realm, the appearance o f which you choose.\n" +
            "The creature can see and hear only itself, you, and\n" +
            "the illusion.\n" +
            "You must finish a short or long rest before you can\n" +
            "use this feature again.\n" +
            "T h e F i e n d\n" +
            "You have made a pact with a fiend from the lower\n" +
            "planes o f existence, a being w hose aims are evil,\n" +
            "even if you strive against those aims. Such beings\n" +
            "desire the corruption or destruction of all things,\n" +
            "ultimately including you. Fiends powerful enough to\n" +
            "forge a pact include demon lords such as Demogorgon,\n" +
            "Orcus, Fraz’Urb-luu, and Baphomet; archdevils such\n" +
            "as A smodeus, Dispater, Mephistopheles, and Belial;\n" +
            "pit fiends and balors that are especially mighty; and\n" +
            "ultroloths and other lords of the yugoloths.\n" +
            "E x p a n d e d Sp e l l L is t\n" +
            "The Fiend lets you choose from an expanded list of\n" +
            "spells when you learn a w arlock spell. The following\n" +
            "spells are added to the warlock spell list for you.\n" +
            "F i e n d E x p a n d e d S p e l l s\n" +
            "Spell Level Spells\n" +
            "1st burning hands, command\n" +
            "2nd blindness/deafness, scorching ray\n" +
            "3rd fireball, stinking cloud\n" +
            "4th fire shield, wall o f fire\n" +
            "5th flame strike, hallow\n" +
            "D a r k O n e ’s B l e s s in g\n" +
            "Starting at 1st level, when you reduce a hostile creature\n" +
            "to 0 hit points, you gain temporary hit points equal to your\n" +
            "Charisma modifier + your warlock level (minimum o f 1).\n" +
            "D a r k O n e ’s O w n L u c k\n" +
            "Starting at 6th level, you can call on your patron to alter\n" +
            "fate in your favor. When you make an ability check or a\n" +
            "saving throw, you can use this feature to add a d 10 to\n" +
            "your roll. You can do so after seeing the initial roll but\n" +
            "before any o f the roll’s effects occur.\n" +
            "Once you use this feature, you can’t use it again until\n" +
            "you finish a short or long rest.\n" +
            "F ie n d i s h R e s il ie n c e\n" +
            "Starting at 10th level, you can choose one damage type\n" +
            "when you finish a short or long rest. You gain resistance\n" +
            "to that damage type until you choose a different one\n" +
            "with this feature. Damage from magical w eapons or\n" +
            "silver weapons ignores this resistance.\n" +
            "H u r l T h r o u g h H e l l\n" +
            "Starting at 14th level, when you hit a creature with an\n" +
            "attack, you can use this feature to instantly transport\n" +
            "the target through the lower planes. The creature\n" +
            "disappears and hurtles through a nightmare landscape.\n" +
            "At the end o f your next turn, the target returns to the\n" +
            "space it previously occupied, or the nearest unoccupied\n" +
            "space. If the target is not a fiend, it takes 10d 10 psychic\n" +
            "damage as it reels from its horrific experience.\n" +
            "Once you use this feature, you can’t use it again until\n" +
            "you finish a long rest.\n" +
            "T h e G r e a t O l d O n e\n" +
            "Your patron is a mysterious entity whose nature is\n" +
            "utterly foreign to the fabric o f reality. It might come from\n" +
            "the Far Realm, the space beyond reality, or it could be\n" +
            "one of the elder gods known only in legends. Its motives\n" +
            "are incomprehensible to mortals, and its knowledge so\n" +
            "immense and ancient that even the greatest libraries\n" +
            "pale in comparison to the vast secrets it holds. The\n" +
            "Great Old One might be unaware o f your existence\n" +
            "or entirely indifferent to you, but the secrets you have\n" +
            "learned allow you to draw your magic from it.\n" +
            "Entities o f this type include Ghaunadar, called That\n" +
            "Which Lurks; Tharizdun, the Chained God; Dendar, the\n" +
            "Night Serpent; Zargon, the Returner; Great Cthulhu;\n" +
            "and other unfathomable beings.\n" +
            "E x p a n d e d Sp e l l L is t\n" +
            "The Great Old One lets you choose from an expanded list\n" +
            "o f spells when you learn a warlock spell. The following\n" +
            "spells are added to the w arlock spell list for you.\n" +
            "G r e a t O l d O n e E x p a n d e d S p e l l s\n" +
            "Spell Level Spells\n" +
            "1st dissonant whispers, Tasha's hideous laughter\n" +
            "2nd detect thoughts, phantasmal force\n" +
            "3rd clairvoyance, sending\n" +
            "4th dominate beast, Evard’s black tentacles\n" +
            "5th dominate person, telekinesis\n" +
            "A w a k e n e d M in d\n" +
            "Starting at 1st level, your alien knowledge gives you\n" +
            "the ability to touch the minds of other creatures. You\n" +
            "can communicate telepathically with any creature you\n" +
            "can see within 30 feet o f you. You don’t need to share\n" +
            "a language with the creature for it to understand your\n" +
            "telepathic utterances, but the creature must be able to\n" +
            "understand at least one language.\n" +
            "E n t r o p i c W a r d\n" +
            "At 6th level, you learn to magically ward yourself against\n" +
            "attack and to turn an enemy’s failed strike into good\n" +
            "luck for yourself. When a creature makes an attack\n" +
            "roll against you, you can use your reaction to impose\n" +
            "disadvantage on that roll. If the attack misses you, your\n" +
            "next attack roll against the creature has advantage if you\n" +
            "make it before the end o f your next turn.\n" +
            "Once you use this feature, you can’t use it again until\n" +
            "you finish a short or long rest.\n" +
            "T h o u g h t Sh i e l d\n" +
            "Starting at 10th level, your thoughts can’t be read by\n" +
            "telepathy or other m eans unless you allow it. You also\n" +
            "have resistance to psychic damage, and whenever a\n" +
            "creature deals psychic damage to you, that creature\n" +
            "takes the same amount o f damage that you do.\n" +
            "C r e a t e T h r a l l\n" +
            "At 14th level, you gain the ability to infect a humanoid’s\n" +
            "mind with the alien magic of your patron. You can use\n" +
            "your action to touch an incapacitated humanoid. That\n" +
            "creature is then charmed by you until a remove curse\n" +
            "spell is cast on it, the charmed condition is removed\n" +
            "from it, or you use this feature again.\n" +
            "You can communicate telepathically with the charmed\n" +
            "creature as long as the two o f you are on the same plane\n" +
            "o f existence.\n" +
            "Eldritch Invoc a t io n s\n" +
            "If an eldritch invocation has prerequisites, you must\n" +
            "meet them to learn it. You can learn the invocation at the\n" +
            "same time that you meet its prerequisites.\n" +
            "A g o n i z i n g B l a s t\n" +
            "Prerequisite: eldritch blast cantrip\n" +
            "When you cast eldritch blast, add your Charisma\n" +
            "modifier to the damage it deals on a hit.\n" +
            "A r m o r o f Sh a d o w s\n" +
            "You can cast mage armor on yourself at will, without\n" +
            "expending a spell slot or material components.\n" +
            "A s c e n d a n t St e p\n" +
            "Prerequisite: 9th level\n" +
            "You can cast levitate on yourself at will, without\n" +
            "expending a spell slot or material components.\n" +
            "B e a s t Sp e e c h\n" +
            "You can cast speak with animals at will, without\n" +
            "expending a spell slot.\n" +
            "B e g u i l in g In f l u e n c e\n" +
            "You gain proficiency in the Deception and\n" +
            "Persuasion skills.\n" +
            "B e w i t c h i n g W h i s p e r s\n" +
            "Prerequisite: 7th level\n" +
            "You can cast compulsion once using a warlock spell slot.\n" +
            "You can’t do so again until you finish a long rest.\n" +
            "B o o k o f A n c i e n t Se c r e t s\n" +
            "Prerequisite: Pact o f the Tome feature\n" +
            "You can now inscribe magical rituals in your Book o f\n" +
            "Shadows. Choose two 1st-level spells that have the\n" +
            "ritual tag from any class’s spell list. The spells appear\n" +
            "in the book and don’t count against the number o f spells\n" +
            "you know. With your Book o f Shadows in hand, you\n" +
            "can cast the chosen spells as rituals. You can’t cast the\n" +
            "spells except as rituals, unless you’ve learned them by\n" +
            "some other means. You can also cast a warlock spell\n" +
            "you know as a ritual if it has the ritual tag.\n" +
            "On your adventures, you can add other ritual spells to\n" +
            "your Book o f Shadows. When you find such a spell, you\n" +
            "can add it to the book if the spell’s level is equal to or\n" +
            "less than half your warlock level (rounded up) and if you\n" +
            "can spare the time to transcribe the spell. For each level\n" +
            "o f the spell, the transcription process takes 2 hours and\n" +
            "costs 50 gp for the rare inks needed to inscribe it.\n" +
            "C h a in s o f C a r c e r i\n" +
            "Prerequisite: 15th level, Pact o f the Chain feature\n" +
            "You can cast hold monster at w ill—targeting a celestial,\n" +
            "fiend, or elemental—without expending a spell slot or\n" +
            "material components. You must finish a long rest before\n" +
            "you can use this invocation on the same creature again.\n" +
            "D e v i l ’s Si g h t\n" +
            "You can see normally in darkness, both magical and\n" +
            "nonmagical, to a distance o f 120 feet.\n" +
            "D r e a d f u l W o r d\n" +
            "Prerequisite: 7th level\n" +
            "You can cast confusion once using a w arlock spell slot.\n" +
            "You can’t do so again until you finish a long rest.\n" +
            "E l d r i t c h Sig h t\n" +
            "You can cast detect magic at will, without expending\n" +
            "a spell slot.\n" +
            "E l d r i t c h S p e a r\n" +
            "Prerequisite: eldritch blast cantrip\n" +
            "When you cast eldritch blast, its range is 300 feet.\n" +
            "E y e s o f t h e R u n e K e e p e r\n" +
            "You can read all writing.\n" +
            "F ie n d i s h V ig o r\n" +
            "You can cast false life on yourself at will as a\n" +
            "1st-level spell, without expending a spell slot or\n" +
            "material components.\n" +
            "G a z e o f T w o M in d s\n" +
            "You can use your action to touch a willing humanoid\n" +
            "and perceive through its senses until the end o f your\n" +
            "next turn. As long as the creature is on the same\n" +
            "plane o f existence as you, you can use your action\n" +
            "on subsequent turns to maintain this connection,\n" +
            "extending the duration until the end of your next turn.\n" +
            "While perceiving through the other creature’s senses,\n" +
            "you benefit from any special senses possessed by that\n" +
            "creature, and you are blinded and deafened to your own\n" +
            "surroundings.\n" +
            "L i f e d r in k e r\n" +
            "Prerequisite: 12th level, Pact o f the Blade feature\n" +
            "When you hit a creature with your pact w eapon, the\n" +
            "creature takes extra necrotic damage equal to your\n" +
            "Charisma modifier (minimum 1).\n" +
            "M a s k o f M a n y Fa c e s\n" +
            "You can cast disguise self at will, without expending\n" +
            "a spell slot.\n" +
            "M a s t e r o f M y r i a d F o r m s\n" +
            "Prerequisite: 15th level\n" +
            "You can cast alter self at will, without expending\n" +
            "a spell slot.\n" +
            "M in io n s o f C h a o s\n" +
            "Prerequisite: 9th level\n" +
            "You can cast conjure elemental once using a\n" +
            "warlock spell slot. You can’t do so again until you\n" +
            "finish a long rest.\n" +
            "M ir e t h e M in d\n" +
            "Prerequisite: 5th level\n" +
            "You can cast slow once using a warlock spell slot. You\n" +
            "can’t do so again until you finish a long rest.\n" +
            "M i s t y V i s io n s\n" +
            "You can cast silent image at will, without expending a\n" +
            "spell slot or material components.\n" +
            "O n e w i t h Sh a d o w s\n" +
            "Prerequisite: 5th level\n" +
            "When you are in an area o f dim light or darkness, you\n" +
            "can use your action to become invisible until you move\n" +
            "or take an action or a reaction.\n" +
            "O t h e r w o r l d l y L e a p\n" +
            "Prerequisite: 9th level\n" +
            "You can cast jump on yourself at will, without expending\n" +
            "a spell slot or material components.\n" +
            "R e p e l l in g B l a s t\n" +
            "Prerequisite: eldritch blast cantrip\n" +
            "When you hit a creature with eldritch blast, you can push\n" +
            "the creature up to 10 feet away from you in a straight line.\n" +
            "S c u l p t o r o f F l e sh\n" +
            "Prerequisite: 7th level\n" +
            "You can cast polymorph once using a warlock spell slot.\n" +
            "You can’t do so again until you finish a long rest.\n" +
            "Sig n o f I l l O m e n\n" +
            "Prerequisite: 5th level\n" +
            "You can cast bestow curse once using a w arlock spell\n" +
            "slot. You can’t do so again until you finish a long rest.\n" +
            "T h ie f o f F iv e Fa t e s\n" +
            "You can cast bane once using a warlock spell slot. You\n" +
            "can’t do so again until you finish a long rest.\n" +
            "T h i r s t in g B l a d e\n" +
            "Prerequisite: 5th level, Pact o f the Blade feature\n" +
            "You can attack with your pact w eapon twice, instead of\n" +
            "once, whenever you take the Attack action on your turn.\n" +
            "V i s io n s o f D i s t a n t R e a l m s\n" +
            "Prerequisite: 15th level\n" +
            "You can cast arcane eye at will, without expending\n" +
            "a spell slot.\n" +
            "V o ic e o f t h e C h a in M a s t e r\n" +
            "Prerequisite: Pact o f the Chain feature\n" +
            "You can communicate telepathically with your familiar\n" +
            "and perceive through your familiar’s senses as long as\n" +
            "you are on the same plane of existence. Additionally,\n" +
            "while perceiving through your familiar’s senses, you can\n" +
            "also speak through your familiar in your own voice, even\n" +
            "if your familiar is normally incapable o f speech.\n" +
            "W h is p e r s o f t h e G r a v e\n" +
            "Prerequisite: 9th level\n" +
            "You can cast speak with dead at will, without expending\n" +
            "a spell slot.\n" +
            "W i t c h Sig h t\n" +
            "Prerequisite: 15th level\n" +
            "You can see the true form o f any shapechanger or\n" +
            "creature concealed by illusion or transmutation magic\n" +
            "while the creature is within 30 feet o f you and within\n" +
            "line of sight.";
    }
    else if(arg1.value == "wizard"){
        var classDescription = "As a wizard, you gain the following class features.\n" +
            "H i t P o in t s\n" +
            "Hit Dice: 1d6 per wizard level\n" +
            "Hit Points at 1st Level: 6 + your Constitution modifier\n" +
            "Hit Points at Higher Levels: 1d6 (or 4) + your\n" +
            "Constitution modifier per wizard level after 1st\n" +
            "P r o f i c ie n c ie s\n" +
            "Armor: None\n" +
            "Weapons: Daggers, darts, slings, quarterstaffs,\n" +
            "light crossbows\n" +
            "Tools: None\n" +
            "Saving Throws: Intelligence, Wisdom\n" +
            "Skills: Choose two from Arcana, History, Insight,\n" +
            "Investigation, Medicine, and Religion " +
            "E q u i p m e n t\n" +
            "You start with the following equipment, in addition to\n" +
            "the equipment granted by your background:\n" +
            "• (a) a quarterstaff or (b) a dagger\n" +
            "• (a) a component pouch or (b) an arcane focus\n" +
            "• (a) a scholar’s pack or (b) an explorer’s pack\n" +
            "• A spellbook\n" +
            "S p e l l c a s t i n g\n" +
            "As a student o f arcane magic, you have a spellbook\n" +
            "containing spells that show the first glimmerings of\n" +
            "your true power. See chapter 10 for the general rules of\n" +
            "spellcasting and chapter 11 for the w izard spell list.\n" +
            "C a n t r i p s\n" +
            "At 1st level, you know three cantrips o f your choice\n" +
            "from the wizard spell list. You learn additional w izard\n" +
            "cantrips o f your choice at higher levels, as shown in the\n" +
            "Cantrips Known column of the Wizard table." +
            "S p e l l b o o k\n" +
            "At 1st level, you have a spellbook containing six 1st-level\n" +
            "wizard spells o f your choice.\n" +
            "P r e p a r in g a n d C a s t in g Sp e l l s\n" +
            "The W izard table shows how many spell slots you have\n" +
            "to cast your spells o f 1st level and higher. To cast one of\n" +
            "these spells, you must expend a slot o f the spell’s level\n" +
            "or higher. You regain all expended spell slots when you\n" +
            "finish a long rest.\n" +
            "You prepare the list o f wizard spells that are available\n" +
            "for you to cast. To do so. choose a number o f wizard\n" +
            "spells from your spellbook equal to your Intelligence\n" +
            "modifier + your wizard level (minimum o f one spell). The\n" +
            "spells must be o f a level for which you have spell slots.\n" +
            "For example, if you're a 3rd-level wizard, you have\n" +
            "four 1st-level and two 2nd-level spell slots. With an\n" +
            "Intelligence o f 16, your list o f prepared spells can\n" +
            "include six spells o f 1st or 2nd level, in any combination,\n" +
            "chosen from your spellbook. If you prepare the 1st-level\n" +
            "spell magic missile, you can cast it using a 1st-level or a\n" +
            "2nd-level slot. Casting the spell doesn’t remove it from\n" +
            "your list o f prepared spells.\n" +
            "You can change your list of prepared spells when\n" +
            "you finish a long rest. Preparing a new list o f wizard\n" +
            "spells requires time spent studying your spellbook and\n" +
            "memorizing the incantations and gestures you must\n" +
            "make to cast the spell: at least 1 minute per spell level\n" +
            "for each spell on your list.\n" +
            "Sp e l l c a s t in g A b i l i t y\n" +
            "Intelligence is your spellcasting ability for your wizard\n" +
            "spells, since you learn your spells through dedicated\n" +
            "study and memorization. You use your Intelligence\n" +
            "whenever a spell refers to your spellcasting ability.\n" +
            "In addition, you use your Intelligence modifier when\n" +
            "setting the saving throw DC for a wizard spell you cast\n" +
            "and when making an attack roll with one.\n" +
            "Spell save DC = 8 + your proficiency bonus +\n" +
            "your Intelligence modifier\n" +
            "Spell attack modifier = your proficiency bonus +\n" +
            "your intelligence modifier\n" +
            "R i t u a l C a s t in g\n" +
            "You can cast a wizard spell as a ritual if that spell has\n" +
            "the ritual tag and you have the spell in your spellbook.\n" +
            "You don't need to have the spell prepared.\n" +
            "S p e l l c a s t in g F o c u s\n" +
            "You can use an arcane focus (found in chapter 5) as a\n" +
            "spellcasting focus for your w izard spells.\n" +
            "L e a r n in g Sp e l l s o f 1s t L e v e l a n d H ig h e r\n" +
            "Each time you gain a w izard level, you can add two\n" +
            "wizard spells o f your choice to your spellbook. Each\n" +
            "o f these spells must be of a level for which you have\n" +
            "spell slots, as shown on the Wizard table. On your\n" +
            "adventures, you might find other spells that you can add\n" +
            "to your spellbook (see the “Your Spellbook” sidebar)." +
            "A r c a n e R e c o v e r y\n" +
            "You have learned to regain some o f your magical energy\n" +
            "by studying your spellbook. Once per day when you\n" +
            "finish a short rest, you can choose expended spell slots\n" +
            "to recover. The spell slots can have a combined level that\n" +
            "is equal to or less than half your wizard level (rounded\n" +
            "up), and none o f the slots can be 6th level or higher.\n" +
            "For example, if you’re a 4th-level wizard, you can recover\n" +
            "up to two levels worth o f spell slots. You can recover either\n" +
            "a 2nd-level spell slot or two 1st-level spell slots.\n" +
            "A r c a n e T r a d i t i o n\n" +
            "When you reach 2nd level, you choose an arcane\n" +
            "tradition, shaping your practice o f magic through one\n" +
            "o f eight schools: Abjuration, Conjuration, Divination,\n" +
            "Enchantment, Evocation, Illusion, Necromancy,\n" +
            "or Transmutation, all detailed at the end o f the\n" +
            "class description.\n" +
            "Your choice grants you features at 2nd level and again\n" +
            "at 6th, 10th, and 14th level.\n" +
            "A b i l i t y S c o r e I m p r o v e m e n t\n" +
            "When you reach 4th level, and again at 8th, 12th, 16th,\n" +
            "and 19th level, you can increase one ability score o f your\n" +
            "choice by 2, or you can increase two ability s cores of\n" +
            "your choice by 1. As normal, you can’t increase an ability\n" +
            "score above 20 using this feature.\n" +
            "S p e l l M a s t e r y\n" +
            "At 18th level, you have achieved such mastery over\n" +
            "certain spells that you can cast them at will. Choose a\n" +
            "1st-level w izard spell and a 2nd-level w izard spell that\n" +
            "are in your spellbook. You can cast those spells at their\n" +
            "lowest level without expending a spell slot when you\n" +
            "have them prepared. If you want to cast either spell at a\n" +
            "higher level, you must expend a spell slot as normal.\n" +
            "By spending 8 hours in study, you can exchange one\n" +
            "or both o f the spells you chose for different spells of\n" +
            "the same levels.\n" +
            "S i g n a t u r e S p e l l s\n" +
            "When you reach 20th level, you gain mastery over two\n" +
            "powerful spells and can cast them with little effort.\n" +
            "Choose two 3rd-level wizard spells in your spellbook\n" +
            "as your signature spells. You always have these spells\n" +
            "prepared, they don’t count against the number o f spells\n" +
            "you have prepared, and you can cast each o f them once at\n" +
            "3rd level without expending a spell slot. W hen you do so,\n" +
            "you can’t do so again until you finish a short or long rest.\n" +
            "If you want to cast either spell at a higher level, you\n" +
            "must expend a spell slot as normal.\n" +
            "A rcane T raditions\n" +
            "The study o f wizardry is ancient, stretching back to\n" +
            "the earliest mortal discoveries o f magic. It is firmly\n" +
            "established in the worlds o f D&D, with various\n" +
            "traditions dedicated to its complex study.\n" +
            "The most common arcane traditions in the multiverse\n" +
            "revolve around the schools o f magic. Wizards through" +
            "the ages have cataloged thousands o f spells, grouping\n" +
            "them into eight categories called schools, as described\n" +
            "in chapter 10. In some places, these traditions are\n" +
            "literally schools; a w izard might study at the School o f\n" +
            "Illusion while another studies across town at the School\n" +
            "o f Enchantment. In other institutions, the schools are\n" +
            "more like academic departments, with rival faculties\n" +
            "competing for students and funding. Even w izards who\n" +
            "train apprentices in the solitude o f their own towers use\n" +
            "the division of magic into schools as a learning device,\n" +
            "since the spells o f each school require mastery o f\n" +
            "different techniques.\n" +
            "S c h o o l o f A b j u r a t i o n\n" +
            "The School o f Abjuration emphasizes magic that blocks,\n" +
            "banishes, or protects. Detractors o f this school say\n" +
            "that its tradition is about denial, negation rather than\n" +
            "positive assertion. You understand, however, that ending\n" +
            "harmful effects, protecting the weak, and banishing evil\n" +
            "influences is anything but a philosophical void. It is a\n" +
            "proud and respected vocation.\n" +
            "Called abjurers, members o f this school are sought\n" +
            "when baleful spirits require exorcism, when important\n" +
            "locations must be guarded against magical spying, and\n" +
            "when portals to other planes o f existence must be closed.\n" +
            "A b j u r a t io n Sa v a n t\n" +
            "Beginning when you select this school at 2nd level, the\n" +
            "gold and time you must spend to copy an abjuration\n" +
            "spell into your spellbook is halved.\n" +
            "A r c a n e W a r d\n" +
            "Starting at 2nd level, you can weave magic around\n" +
            "yourself for protection. When you cast an abjuration\n" +
            "spell o f 1st level or higher, you can simultaneously use a\n" +
            "strand of the spell’s magic to create a magical ward on\n" +
            "yourself that lasts until you finish a long rest. The ward\n" +
            "has hit points equal to twice your w izard level + your\n" +
            "Intelligence modifier. Whenever you take damage, the\n" +
            "ward takes the damage instead. If this damage reduces\n" +
            "the ward to 0 hit points, you take any remaining damage.\n" +
            "While the ward has 0 hit points, it can’t absorb\n" +
            "damage, but its magic remains. Whenever you cast an\n" +
            "abjuration spell o f 1st level or higher, the ward regains a\n" +
            "number o f hit points equal to twice the level o f the spell.\n" +
            "Once you create the ward, you can't create it again\n" +
            "until you finish a long rest.\n" +
            "P r o j e c t e d W a r d\n" +
            "Starting at 6th level, when a creature that you can see\n" +
            "within 30 feet o f you takes damage, you can use your\n" +
            "reaction to cause your Arcane Ward to absorb that\n" +
            "damage. If this damage reduces the w ard to 0 hit points,\n" +
            "the warded creature takes any remaining damage.\n" +
            "Im p r o v e d A b j u r a t io n\n" +
            "Beginning at 10th level, when you cast an abjuration\n" +
            "spell that requires you to make an ability check as\n" +
            "a part o f casting that spell (as in counterspell and\n" +
            "dispel magic), you add your proficiency bonus to that\n" +
            "ability check. " +
            "S p e l l R e s is t a n c e\n" +
            "Starting at 14th level, you have advantage on saving\n" +
            "throws against spells.\n" +
            "Furthermore, you have resistance against the\n" +
            "damage o f spells.\n" +
            "S c h o o l o f C o n j u r a t i o n\n" +
            "As a conjurer, you favor spells that produce objects\n" +
            "and creatures out o f thin air. You can conjure billowing\n" +
            "clouds of killing fog or summon creatures from\n" +
            "elsewhere to fight on your behalf. As your mastery\n" +
            "grows, you learn spells o f transportation and can\n" +
            "teleport yourself across vast distances, even to other\n" +
            "planes o f existence, in an instant.\n" +
            "C o n j u r a t io n Sa v a n t\n" +
            "Beginning when you select this school at 2nd level, the\n" +
            "gold and time you must spend to copy a conjuration spell\n" +
            "into your spellbook is halved.\n" +
            "M in o r C o n j u r a t io n\n" +
            "Starting at 2nd level when you select this school, you\n" +
            "can use your action to conjure up an inanimate object\n" +
            "in your hand or on the ground in an unoccupied space\n" +
            "that you can see within 10 feet o f you. This object can be\n" +
            "no larger than 3 feet on a side and weigh no more than\n" +
            "10 pounds, and its form must be that of a nonmagical " +
            "object that you have seen. The object is visibly magical,\n" +
            "radiating dim light out to 5 feet.\n" +
            "The object disappears after 1 hour, when you use this\n" +
            "feature again, or if it takes any damage.\n" +
            "B e n ig n T r a n s p o s i t io n\n" +
            "Starting at 6th level, you can use your action to teleport\n" +
            "up to 30 feet to an unoccupied space that you can see.\n" +
            "Alternatively, you can choose a space within range\n" +
            "that is occupied by a Small or M edium creature. If that\n" +
            "creature is willing, you both teleport, swapping places.\n" +
            "Once you use this feature, you can’t use it again until\n" +
            "you finish a long rest or you cast a conjuration spell of\n" +
            "1st level or higher.\n" +
            "F o c u s e d C o n j u r a t io n\n" +
            "Beginning at 10th level, while you are concentrating on\n" +
            "a conjuration spell, your concentration can’t be broken\n" +
            "as a result o f taking damage.\n" +
            "D u r a b l e Su m m o n s\n" +
            "Starting at 14th level, any creature that you\n" +
            "summon or create with a conjuration spell has 30\n" +
            "temporary hit points.\n" +
            "S c h o o l o f D i v i n a t i o n\n" +
            "The counsel o f a diviner is sought by royalty and\n" +
            "commoners alike, for all seek a clearer understanding\n" +
            "o f the past, present, and future. As a diviner, you strive\n" +
            "to part the veils o f space, time, and consciousness so\n" +
            "that you can see clearly. You work to master spells of\n" +
            "discernment, remote viewing, supernatural knowledge,\n" +
            "and foresight.\n" +
            "D i v in a t io n Sa v a n t\n" +
            "Beginning when you select this school at 2nd level, the\n" +
            "gold and time you must spend to copy a divination spell\n" +
            "into your spellbook is halved.\n" +
            "P o r t e n t\n" +
            "Starting at 2nd level when you choose this school,\n" +
            "glimpses o f the future begin to press in on your\n" +
            "awareness. When you finish a long rest, roll two d20s\n" +
            "and record the numbers rolled. You can replace any\n" +
            "attack roll, saving throw, or ability check made by you or\n" +
            "a creature that you can see with one o f these foretelling\n" +
            "rolls. You must choose to do so before the roll, and you\n" +
            "can replace a roll in this way only once per turn.\n" +
            "Each foretelling roll can be used only once. When you\n" +
            "finish a long rest, you lose any unused foretelling rolls.\n" +
            "E x p e r t D i v in a t io n\n" +
            "Beginning at 6th level, casting divination spells comes\n" +
            "so easily to you that it expends only a fraction o f your\n" +
            "spellcasting efforts. When you cast a divination spell\n" +
            "o f 2nd level or higher using a spell slot, you regain one\n" +
            "expended spell slot. The slot you regain must be o f a\n" +
            "level lower than the spell you cast and can’t be higher\n" +
            "than 5th level.\n" +
            "T h e T h ir d Ey e\n" +
            "Starting at 10th level, you can use your action to\n" +
            "increase your powers o f perception. When you do so, " +
            "choose one o f the following benefits, which lasts until\n" +
            "you are incapacitated or you take a short or long rest.\n" +
            "You can’t use the feature again until you finish a rest.\n" +
            "Darkvision. You gain darkvision out to a range o f 60\n" +
            "feet, as described in chapter 8.\n" +
            "Ethereal Sight. You can see into the Ethereal Plane\n" +
            "within 60 feet o f you.\n" +
            "Greater Comprehension. You can read any language.\n" +
            "See Invisibility. You can see invisible creatures and\n" +
            "objects within 10 feet o f you that are within line o f sight.\n" +
            "G r e a t e r P o r t e n t\n" +
            "Starting at 14th level, the visions in your dreams\n" +
            "intensify and paint a more accurate picture in your mind\n" +
            "o f what is to come. You roll three d20s for your Portent\n" +
            "feature, rather than two.\n" +
            "S c h o o l o f E n c h a n t m e n t\n" +
            "As a member o f the School o f Enchantment, you have\n" +
            "honed your ability to magically entrance and beguile\n" +
            "other people and monsters. Some enchanters are\n" +
            "peacemakers w ho bewitch the violent to lay down their\n" +
            "arms and charm the cruel into showing mercy. Others\n" +
            "are tyrants w ho magically bind the unwilling into their\n" +
            "service. Most enchanters fall somewhere in between.\n" +
            "E n c h a n t m e n t Sa v a n t\n" +
            "Beginning when you select this school at 2nd level, the\n" +
            "gold and time you must spend to copy an enchantment\n" +
            "spell into your spellbook is halved.\n" +
            "H y p n o t i c G a z e\n" +
            "Starting at 2nd level when you choose this school, your\n" +
            "soft w ords and enchanting gaze can magically enthrall\n" +
            "another creature. A s an action, choose one creature that\n" +
            "you can see within 5 feet of you. If the target can see or\n" +
            "hear you, it must succeed on a Wisdom saving throw\n" +
            "against your wizard spell save DC or be charmed by you\n" +
            "until the end o f your next turn. The charmed creature’s\n" +
            "speed drops to 0, and the creature is incapacitated and\n" +
            "visibly dazed.\n" +
            "On subsequent turns, you can use your action to\n" +
            "maintain this effect, extending its duration until the\n" +
            "end o f your next turn. However, the effect ends if you\n" +
            "move more than 5 feet away from the creature, if the\n" +
            "creature can neither see nor hear you, or if the creature\n" +
            "takes damage.\n" +
            "Once the effect ends, or if the creature succeeds on its\n" +
            "initial saving throw against this effect, you can’t use this\n" +
            "feature on that creature again until you finish a long rest.\n" +
            "I n s t in c t iv e C h a r m\n" +
            "Beginning at 6th level, when a creature you can see\n" +
            "within 30 feet o f you makes an attack roll against\n" +
            "you, you can use your reaction to divert the attack,\n" +
            "provided that another creature is within the attack’s\n" +
            "range. The attacker must make a W isdom saving throw\n" +
            "against your wizard spell save DC. On a failed save,\n" +
            "the attacker must target the creature that is closest\n" +
            "to it, not including you or itself. If multiple creatures\n" +
            "are closest, the attacker chooses which one to target. " +
            "On a successful save, you can’t use this feature on the\n" +
            "attacker again until you finish a long rest.\n" +
            "You must choose to use this feature before knowing\n" +
            "whether the attack hits or misses. Creatures that can’t\n" +
            "be charmed are immune to this effect.\n" +
            "Sp l i t E n c h a n t m e n t\n" +
            "Starting at 10th level, when you cast an enchantment\n" +
            "spell o f 1st level or higher that targets only one creature,\n" +
            "you can have it target a second creature.\n" +
            "A l t e r M e m o r ie s\n" +
            "At 14th level, you gain the ability to make a creature\n" +
            "unaware o f your magical influence on it. When you cast\n" +
            "an enchantment spell to charm one or more creatures,\n" +
            "you can alter one creature’s understanding so that it\n" +
            "remains unaware o f being charmed.\n" +
            "Additionally, once before the spell expires, you can\n" +
            "use your action to try to make the chosen creature\n" +
            "forget some o f the time it spent charmed. The creature\n" +
            "must succeed on an Intelligence saving throw against\n" +
            "your wizard spell save DC or lose a number of hours\n" +
            "o f its memories equal to 1 + your Charisma modifier\n" +
            "(minimum 1). You can make the creature forget less\n" +
            "time, and the amount o f time can’t exceed the duration\n" +
            "of your enchantment spell.\n" +
            "S c h o o l o f E v o c a t i o n\n" +
            "You focus your study on magic that creates powerful\n" +
            "elemental effects such as bitter cold, searing flame,\n" +
            "rolling thunder, crackling lightning, and burning acid.\n" +
            "Some evokers find employment in military forces,\n" +
            "serving as artillery to blast enemy armies from afar.\n" +
            "Others use their spectacular power to protect the weak,\n" +
            "while some seek their own gain as bandits, adventurers,\n" +
            "or aspiring tyrants.\n" +
            "Ev o c a t io n Sa v a n t\n" +
            "Beginning when you select this school at 2nd level, the\n" +
            "gold and time you must spend to copy an evocation spell\n" +
            "into your spellbook is halved.\n" +
            "S c u l p t Sp e l l s\n" +
            "Beginning at 2nd level, you can create pockets of\n" +
            "relative safety within the effects o f your evocation spells.\n" +
            "When you cast an evocation spell that affects other\n" +
            "creatures that you can see, you can choose a number\n" +
            "of them equal to 1 + the spell’s level. The chosen\n" +
            "creatures automatically succeed on their saving throws\n" +
            "against the spell, and they take no damage if they would\n" +
            "normally take half damage on a successful save.\n" +
            "P o t e n t C a n t r i p\n" +
            "Starting at 6th level, your damaging cantrips affect\n" +
            "even creatures that avoid the brunt o f the effect. When\n" +
            "a creature succeeds on a saving throw against your\n" +
            "cantrip, the creature takes half the cantrip’s damage (if\n" +
            "any) but suffers no additional effect from the cantrip.\n" +
            "E m p o w e r e d Ev o c a t io n\n" +
            "Beginning at 10th level, you can add your Intelligence\n" +
            "modifier to the damage roll of any wizard evocation\n" +
            "spell you cast. " +
            "O v e r c h a n n e l\n" +
            "Starting at 14th level, you can increase the power of\n" +
            "your simpler spells. When you cast a w izard spell of\n" +
            "5th level or lower that deals damage, you can deal\n" +
            "maximum damage with that spell.\n" +
            "The first time you do so, you suffer no adverse effect.\n" +
            "If you use this feature again before you finish a long\n" +
            "rest, you take 2d12 necrotic damage for each level of\n" +
            "the spell, immediately after you cast it. Each time you\n" +
            "use this feature again before finishing a long rest, the\n" +
            "necrotic damage per spell level increases by 1d 12. This\n" +
            "damage ignores resistance and immunity.\n" +
            "S c h o o l o f I l l u s i o n\n" +
            "You focus your studies on magic that dazzles the\n" +
            "senses, befuddles the mind, and tricks even the wisest\n" +
            "folk. Your magic is subtle, but the illusions crafted by\n" +
            "your keen mind make the impossible seem real. Some\n" +
            "illusionists—including many gnome w izards—are\n" +
            "benign tricksters w ho use their spells to entertain.\n" +
            "Others are more sinister masters o f deception, using\n" +
            "their illusions to frighten and fool others for their\n" +
            "personal gain.\n" +
            "I l l u s io n Sa v a n t\n" +
            "Beginning when you select this school at 2nd level, the\n" +
            "gold and time you must spend to copy an illusion spell\n" +
            "into your spellbook is halved.\n" +
            "I m p r o v e d M in o r I l l u s io n\n" +
            "When you choose this school at 2nd level, you learn\n" +
            "the minor illusion cantrip. If you already know this\n" +
            "cantrip, you learn a different w izard cantrip o f your " +
            "choice. The cantrip doesn’t count against your number\n" +
            "of cantrips known.\n" +
            "When you cast minor illusion, you can create both a\n" +
            "sound and an image with a single casting o f the spell.\n" +
            "M a l l e a b l e I l l u s io n s\n" +
            "Starting at 6th level, when you cast an illusion spell that\n" +
            "has a duration of 1 minute or longer, you can use your\n" +
            "action to change the nature o f that illusion (using the\n" +
            "spell’s normal parameters for the illusion), provided that\n" +
            "you can see the illusion.\n" +
            "I l l u s o r y S e l f\n" +
            "Beginning at 10th level, you can create an illusory\n" +
            "duplicate o f yourself as an instant, almost instinctual\n" +
            "reaction to danger. When a creature makes an attack\n" +
            "roll against you, you can use your reaction to interpose\n" +
            "the illusory duplicate between the attacker and\n" +
            "yourself. The attack automatically m isses you, then the\n" +
            "illusion dissipates.\n" +
            "Once you use this feature, you can’t use it again until\n" +
            "you finish a short or long rest.\n" +
            "I l l u s o r y R e a l i t y\n" +
            "By 14th level, you have learned the secret o f weaving\n" +
            "shadow magic into your illusions to give them a semireality.\n" +
            "When you cast an illusion spell o f 1st level or\n" +
            "higher, you can choose one inanimate, nonmagical\n" +
            "object that is part o f the illusion and make that object\n" +
            "real. You can do this on your turn as a bonus action\n" +
            "while the spell is ongoing. The object remains real for\n" +
            "1 minute. For example, you can create an illusion o f a\n" +
            "bridge over a chasm and then make it real long enough\n" +
            "for your allies to cross.\n" +
            "The object can’t deal damage or otherwise\n" +
            "directly harm anyone.\n" +
            "S c h o o l o f N e c r o m a n c y\n" +
            "The School o f Necromancy explores the cosmic forces\n" +
            "o f life, death, and undeath. As you focus your studies in\n" +
            "this tradition, you learn to manipulate the energy that\n" +
            "animates all living things. As you progress, you learn to\n" +
            "sap the life force from a creature as your magic destroys\n" +
            "its body, transforming that vital energy into magical\n" +
            "power you can manipulate.\n" +
            "Most people see necromancers as menacing, or even\n" +
            "villainous, due to the close association with death.\n" +
            "Not all necromancers are evil, but the forces they\n" +
            "manipulate are considered taboo by many societies.\n" +
            "N e c r o m a n c y Sa v a n t\n" +
            "Beginning when you select this school at 2nd level, the\n" +
            "gold and time you must spend to copy a necromancy\n" +
            "spell into your spellbook is halved.\n" +
            "G r im H a r v e s t\n" +
            "At 2nd level, you gain the ability to reap life energy from\n" +
            "creatures you kill with your spells. Once per turn when\n" +
            "you kill one or more creatures with a spell of 1st level\n" +
            "or higher, you regain hit points equal to twice the spell’s\n" +
            "level, or three times its level if the spell belongs to the\n" +
            "School o f Necromancy. You don’t gain this benefit for\n" +
            "killing constructs or undead. " +
            "U n d e a d T h r a l l s\n" +
            "At 6th level, you add the animate dead spell to your\n" +
            "spellbook if it is not there already. When you cast\n" +
            "animate dead, you can target one additional corpse\n" +
            "or pile o f bones, creating another zombie or skeleton,\n" +
            "as appropriate.\n" +
            "Whenever you create an undead using a necromancy\n" +
            "spell, it has additional benefits:\n" +
            "• The creature’s hit point maximum is increased by an\n" +
            "amount equal to your w izard level.\n" +
            "• The creature adds your proficiency bonus to its\n" +
            "weapon damage rolls.\n" +
            "I n u r e d t o U n d e a t h\n" +
            "Beginning at 10th level, you have resistance to necrotic\n" +
            "damage, and your hit point maximum can't be reduced.\n" +
            "You have spent so much time dealing with undead and\n" +
            "the forces that animate them that you have become\n" +
            "inured to some of their worst effects.\n" +
            "C o m m a n d U n d e a d\n" +
            "Starting at 14th level, you can use magic to bring\n" +
            "undead under your control, even those created by other\n" +
            "wizards. As an action, you can choose one undead that\n" +
            "you can see within 60 feet o f you. That creature must\n" +
            "make a Charisma saving throw against your wizard\n" +
            "spell save DC. If it succeeds, you can’t use this feature\n" +
            "on it again. If it fails, it becomes friendly to you and\n" +
            "obeys your commands until you use this feature again.\n" +
            "Intelligent undead are harder to control in this way.\n" +
            "If the target has an Intelligence o f 8 or higher, it has\n" +
            "advantage on the saving throw. If it fails the saving\n" +
            "throw and has an Intelligence o f 12 or higher, it can\n" +
            "repeat the saving throw at the end o f every hour until it\n" +
            "succeeds and breaks free.\n" +
            "S c h o o l o f T r a n s m u t a t i o n\n" +
            "You are a student of spells that modify energy and matter.\n" +
            "To you, the world is not a fixed thing, but eminently\n" +
            "mutable, and you delight in being an agent o f change.\n" +
            "You wield the raw stuff o f creation and learn to alter both\n" +
            "physical forms and mental qualities. Your m agic gives\n" +
            "you the tools to become a smith on reality’s forge.\n" +
            "Some transmuters are tinkerers and pranksters,\n" +
            "turning people into toads and transforming copper into\n" +
            "silver for fun and occasional profit. Others pursue their\n" +
            "magical studies with deadly seriousness, seeking the\n" +
            "power o f the gods to make and destroy worlds.\n" +
            "T r a n s m u t a t io n Sa v a n t\n" +
            "Beginning when you select this school at 2nd level, the\n" +
            "gold and time you must spend to copy a transmutation\n" +
            "spell into your spellbook is halved.\n" +
            "M in o r A l c h e m y\n" +
            "Starting at 2nd level when you select this school, you\n" +
            "can temporarily alter the physical properties o f one\n" +
            "nonmagical object, changing it from one substance into\n" +
            "another. You perform a special alchemical procedure\n" +
            "on one object composed entirely o f wood, stone (but not\n" +
            "a gemstone), iron, copper, or silver, transforming it into\n" +
            "a different one o f those materials. For each 10 minutes " +
            "you spend performing the procedure, you can transform\n" +
            "up to 1 cubic foot o f material. After 1 hour, or until you\n" +
            "lose your concentration (as if you w ere concentrating on\n" +
            "a spell), the material reverts to its original substance.\n" +
            "T r a n s m u t e r ’s St o n e\n" +
            "Starting at 6th level, you can spend 8 hours creating a\n" +
            "transmuter’s stone that stores transmutation magic. You\n" +
            "can benefit from the stone yourself or give it to another\n" +
            "creature. A creature gains a benefit o f your choice\n" +
            "as long as the stone is in the creature’s possession.\n" +
            "When you create the stone, choose the benefit from the\n" +
            "following options:\n" +
            "• Darkvision out to a range o f 60 feet, as described in\n" +
            "chapter 8\n" +
            "• An increase to speed o f 10 feet while the creature is\n" +
            "unencumbered\n" +
            "• Proficiency in Constitution saving throws\n" +
            "• Resistance to acid, cold, fire, lightning, or thunder\n" +
            "damage (your choice whenever you choose this\n" +
            "benefit)\n" +
            "Each time you cast a transmutation spell o f 1st level\n" +
            "or higher, you can change the effect o f your stone if the\n" +
            "stone is on your person.\n" +
            "If you create a new transmuter’s stone, the previous\n" +
            "one ceases to function.\n" +
            "Sh a p e c h a n g e r\n" +
            "At 10th level, you add the polymorph spell to your\n" +
            "spellbook, if it is not there already. You can cast\n" +
            "polymorph without expending a spell slot. When you\n" +
            "do so, you can target only yourself and transform into a\n" +
            "beast w hose challenge rating is 1 or lower.\n" +
            "Once you cast polymorph in this way, you can’t do so\n" +
            "again until you finish a short or long rest, though you\n" +
            "can still cast it normally using an available spell slot.\n" +
            "M a s t e r T r a n s m u t e r\n" +
            "Starting at 14th level, you can use your action to\n" +
            "consume the reserve of transmutation magic stored\n" +
            "within your transmuter’s stone in a single burst. When\n" +
            "you do so, choose one o f the following effects. Your\n" +
            "transmuter’s stone is destroyed and can’t be remade\n" +
            "until you finish a long rest.\n" +
            "Major Transformation. You can transmute one\n" +
            "nonmagical object—no larger than a 5-foot cube—into\n" +
            "another nonmagical object o f similar size and mass and\n" +
            "o f equal or lesser value. You must spend 10 minutes\n" +
            "handling the object to transform it.\n" +
            "Panacea. You remove all curses, diseases, and poisons\n" +
            "affecting a creature that you touch with the transmuter’s\n" +
            "stone. The creature also regains all its hit points.\n" +
            "Restore Life. You cast the raise dead spell on a\n" +
            "creature you touch with the transmuter’s stone, without\n" +
            "expending a spell slot or needing to have the spell in\n" +
            "your spellbook.\n" +
            "Restore Youth. You touch the transmuter’s stone to\n" +
            "a willing creature, and that creature’s apparent age is\n" +
            "reduced by 3 d 10 years, to a minimum o f 13 years. This\n" +
            "effect doesn’t extend the creature’s lifespan.";
    }

    arg2.innerHTML = classDescription;

}

function warlockPatronChoice(arg1, arg2) {

    var arg1 = document.getElementById(arg1);
    var arg2 = document.getElementById(arg2);

    arg2.innerHTML = "";

    if(arg1.value == "warlock"){

        arg2.style.display = "inline-block";
        var patronChoiceArray = ["the-archfey|The Archfey","the-fiend|The Fiend","the-great-old-one|The Great Old One"];

        for(var i = 0; i < patronChoiceArray.length; i++){

            var patronChoiceProper = patronChoiceArray[i].split("|");
            var patronChoiceOption = document.createElement("option");
            patronChoiceOption.value = patronChoiceProper[0];
            patronChoiceOption.innerHTML = patronChoiceProper[1];
            arg2.options.add(patronChoiceOption);
        }
    }
    else if(arg1.value != "warlock"){
        arg2.style.display = "none";
    }

}

function changeImage(arg1){

    var arg1 = document.getElementById(arg1);
    var arg2 = document.getElementById('raceImage');

    if(arg1.value == "dwarf"){
        arg2.src = "images/dwarf-png-500.png";
    }
    else if(arg1.value == "dragonborn"){
        arg2.src = "images/dragonborn.png";
    }
    else if(arg1.value == "elf"){
        arg2.src = "images/elf.png";
    }
    else if(arg1.value == "gnome"){
        arg2.src = "images/gnome.png";
    }
    else if(arg1.value == "halfelf"){
        arg2.src = "images/halfelf.png";
    }
    else if(arg1.value == "halfling"){
        arg2.src = "images/halfling.png";
    }
    else if(arg1.value == "halforc"){
        arg2.src = "images/halforc.png";
    }
    else if(arg1.value == "human"){
        arg2.src = "images/human.png";
    }
    else if(arg1.value == "tiefling"){
        arg2.src = "images/tiefling.png";
    }
    else{
        arg2.src = "images/dwarf-png-500.png";
    }
}
