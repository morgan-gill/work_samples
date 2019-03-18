<head>
    <title>D&D 5e Character Creation Tool</title>
    <script src="functionsJS.js" type="text/javascript"></script>
    <link rel="stylesheet" type="text/css" href="styles.css">
    <link href="https://fonts.googleapis.com/css?family=PT+Serif" rel="stylesheet">
</head>
<body>
<h1>D&D 5e Character Creation Tool</h1>
    <form action="submitPage.php" method="post">
        <label><strong>Race:</strong></label>
        <select name="race-choice" id="race-choice" onchange="generateSubRace('race-choice', 'sub-race'),
        generateRaceDescription('race-choice', 'race-choice-paragraph'), changeImage('race-choice')">
            <option value="">--Please Select--</option>
            <option value="dwarf">Dwarf</option>
            <option value="dragonborn">Dragon Born</option>
            <option value="elf">Elf</option>
            <option value="gnome">Gnome</option>
            <option value="halfelf">Half Elf</option>
            <option value="halfling">Halfling</option>
            <option value="halforc">Half Orc</option>
            <option value="human">Human</option>
            <option value="tiefling">Tiefling</option>
        </select>

        <select name="sub-race" id="sub-race" onchange="addSubRaceStatMod('sub-race')">
        </select>

        <div class="raceContainer">
            <div class="imgcontainer">
                <img src="images/dwarf-png-500.png" alt="Student Image" id="raceImage" class="raceImage">
            </div>

            <p name="race-choice-paragraph" id="race-choice-paragraph"></p>
        </div>

        <br><br>

        <label><strong>Class:</strong></label>
        <select name="character-class" id="character-class" onchange="generateSubClass('character-class','sub-class'),
        generateClassDescription('character-class', 'class-choice-paragraph'),
        warlockPatronChoice('character-class','warlock-patron')">
            <option value="">--Please Select--</option>
            <option value="barbarian">Barbarian</option>
            <option value="bard">Bard</option>
            <option value="cleric">Cleric</option>
            <option value="druid">Druid</option>
            <option value="fighter">Fighter</option>
            <option value="monk">Monk</option>
            <option value="paladin">Paladin</option>
            <option value="ranger">Ranger</option>
            <option value="rogue">Rogue</option>
            <option value="sorcerer">Sorcerer</option>
            <option value="warlock">Warlock</option>
            <option value="wizard">Wizard</option>
        </select>

        <select name="sub-class" id="sub-class">
        </select>

        <select name="warlock-patron" id="warlock-patron">
        </select>

        <p name="class-choice-paragraph" id="class-choice-paragraph"></p>

        <label><strong>Player Name:</strong></label>
        <input type="text" name="playerName"  placeholder="Player Name"><br><br>

        <label><strong>Character Name:</strong></label>
        <input type="text" name="characterName" placeholder="Character Name"><br><br>

        <button type="button" onclick="rollStat('strengthRoll','dexterityRoll','constitutionRoll','intelligenceRoll','wisdomRoll','charismaRoll')">Roll All Stats</button><br>

        <div class="statContainer">
        <label><strong>Strength:</strong></label>
        <input type="text" name="strengthRoll" id="strengthRoll" class="rollStatBox" placeholder="0"><span> + </span>
        <input type="text" name="raceStrMod" id="raceStrMod" class="statBox" placeholder="0"><span> + </span>
        <input type="text" name="subRaceStrMod" id="subRaceStrMod" class="statBox" placeholder="0"><span>  </span>
        <button type="button" onclick="rollSingleStat('strengthRoll')">Re-roll Stat</button><br>

        <label><strong>Dexterity:</strong></label>
        <input type="text" name="dexterityRoll" id="dexterityRoll" class="rollStatBox" placeholder="0"><span> + </span>
        <input type="text" name="raceDexMod" id="raceDexMod" class="raceStatBox" placeholder="0"><span> + </span>
        <input type="text" name="subRaceDexMod" id="subRaceDexMod" class="raceStatBox" placeholder="0"><span>  </span>
        <button type="button" onclick="rollSingleStat('dexterityRoll')">Re-roll Stat</button><br>

        <label><strong>Constitution:</strong></label>
        <input type="text" name="constitutionRoll" id="constitutionRoll" class="rollStatBox" placeholder="0"><span> + </span>
        <input type="text" name="raceConMod" id="raceConMod" class="raceStatBox" placeholder="0"><span> + </span>
        <input type="text" name="subRaceConMod" id="subRaceConMod" class="raceStatBox" placeholder="0"><span>  </span>
        <button type="button" onclick="rollSingleStat('constitutionRoll')">Re-roll Stat</button><br>

        <label><strong>Intelligence:</strong></label>
        <input type="text" name="intelligenceRoll" id="intelligenceRoll" class="rollStatBox" placeholder="0"><span> + </span>
        <input type="text" name="raceIntMod" id="raceIntMod" class="raceStatBox" placeholder="0"><span> + </span>
        <input type="text" name="subRaceIntMod" id="subRaceIntMod" class="raceStatBox" placeholder="0"><span>  </span>
        <button type="button" onclick="rollSingleStat('intelligenceRoll')">Re-roll Stat</button><br>

        <label><strong>Wisdom:</strong></label>
        <input type="text" name="wisdomRoll" id="wisdomRoll" class="rollStatBox" placeholder="0"><span> + </span>
        <input type="text" name="raceWisMod" id="raceWisMod" class="raceStatBox" placeholder="0"><span> + </span>
        <input type="text" name="subRaceWisMod" id="subRaceWisMod" class="raceStatBox" placeholder="0"><span>  </span>
        <button type="button" onclick="rollSingleStat('wisdomRoll')">Re-roll Stat</button><br>

        <label><strong>Charisma:</strong></label>
        <input type="text" name="charismaRoll" id="charismaRoll" class="rollStatBox" placeholder="0"><span> + </span>
        <input type="text" name="raceChaMod" id="raceChaMod" class="raceStatBox" placeholder="0"><span> + </span>
        <input type="text" name="subRaceChaMod" id="subRaceChaMod" class="raceStatBox" placeholder="0"><span>  </span>
        <button type="button" onclick="rollSingleStat('charismaRoll')">Re-roll Stat</button><br>
        </div>

        <button type="submit">Submit</button>

    </form>

</body>

<?php

/*require "functions.php";

$str = rollStat(); $dex = rollStat(); $con = rollStat(); $int = rollStat(); $wis = rollStat(); $cha = rollStat();

echo "--- Start of PHP within this page. ---";
echo "<p>You logged in successfully!</p>";
echo "<br>"; echo "<br>";

echo "Strength: " . $str . "<br>";
echo "Dexterity: " . $dex . "<br>";
echo "Constitution: " . $con . "<br>";
echo "Intelligence: " . $int . "<br>";
echo "Wisdom: " . $wis . "<br>";
echo "Charisma: " . $cha . "<br>";*/

?>