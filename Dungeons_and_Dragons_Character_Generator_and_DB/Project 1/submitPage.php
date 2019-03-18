<head>
    <title>D&D 5e Character Creation Tool</title>
    <script src="functionsJS.js" type="text/javascript"></script>
    <link rel="stylesheet" type="text/css" href="styles.css">
    <link href="https://fonts.googleapis.com/css?family=PT+Serif" rel="stylesheet">
</head>
<?php

require "functions.php"; require "connection.php";

$playerName = ""; $charName = ""; $charLevel = 1; $charRace = ""; $charSubRace = ""; $charClass = ""; $charSubClass = "";
$charPatron = ""; $str1 = 0; $str2 = 0; $str3 = 0; $strFinal = 0; $dex1 = 0; $dex2 = 0; $dex3 = 0; $dexFinal = 0;
$con1 = 0; $con2 = 0; $con3 = 0; $conFinal = 0; $int1 = 0; $int2 = 0; $int3 = 0; $intFinal = 0;
$wis1 = 0; $wis2 = 0; $wis3 = 0; $wisFinal = 0; $cha1 = 0; $cha2 = 0; $cha3 = 0; $chaFinal = 0;


if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $playerName = $_POST["playerName"];
    $charName = $_POST["characterName"];
    // $charLevel = $_POST[""];
    $charRace = $_POST["race-choice"];
    $charSubRace = $_POST["sub-race"];
    $charClass = $_POST["character-class"];
    $charSubClass = $_POST["sub-class"];
    $charPatron = $_POST["warlock-patron"];
    $str1 = $_POST["strengthRoll"];
    $str2 = $_POST["raceStrMod"];
    $str3 = $_POST["subRaceStrMod"];
    // $strFinal = $_POST["finalStr"];
    $dex1 = $_POST["dexterityRoll"];
    $dex2 = $_POST["raceStrMod"];
    $dex3 = $_POST["subRaceStrMod"];
    // $dexFinal = $_POST["finalDex"];
    $con1 = $_POST["constitutionRoll"];
    $con2 = $_POST["raceStrMod"];
    $con3 = $_POST["subRaceStrMod"];
    // $conFinal = $_POST["finalCon"];
    $int1 = $_POST["intelligenceRoll"];
    $int2 = $_POST["raceStrMod"];
    $int3 = $_POST["subRaceStrMod"];
    // $intFinal = $_POST["finalInt"];
    $wis1 = $_POST["wisdomRoll"];
    $wis2 = $_POST["raceStrMod"];
    $wis3 = $_POST["subRaceStrMod"];
    // $wisFinal = $_POST["finalWis"];
    $cha1 = $_POST["charismaRoll"];
    $cha2 = $_POST["raceStrMod"];
    $cha3 = $_POST["subRaceStrMod"];
    // $chaFinal = $_POST["finalCha"];

    $strFinal = $str1 + $str2 + $str3;
    $dexFinal = $dex1 + $dex2 + $dex3;
    $conFinal = $con1 + $con2 + $con3;
    $intFinal = $int1 + $int2 + $int3;
    $wisFinal = $wis1 + $wis2 + $wis3;
    $chaFinal = $cha1 + $cha2 + $cha3;

    $query = "INSERT INTO characters (`playerName`, `characterName`, `characterLevel`, `characterRace`, `characterSubRace`,
              `characterClass`, `characterSubClass`, `characterPatron`, `strength`, `dexterity`, `constitution`, `intelligence`,
              `wisdom`, `charisma`, `entryNumber`) VALUES ('$playerName', '$charName', '$charLevel', '$charRace', '$charSubRace',
               '$charClass', '$charSubClass', '$charPatron', '$strFinal', '$dexFinal', '$conFinal', '$intFinal', '$wisFinal',
                '$chaFinal', '')";

    $result = $connectGBLearn -> query($query);

    print_r($result);

}
else{
    echo "<p>Something Didn't Quite Work.</p>";
}
?>
<body>
    <p><?php echo"$charName" . " ";?>has been put into the Database.</p>

    <a href="main.php">Back to the main |</a>
    <a href="dbList.php">Display Character List |</a>
    <a href="docs">To The "docs" Directory</a>
</body>
