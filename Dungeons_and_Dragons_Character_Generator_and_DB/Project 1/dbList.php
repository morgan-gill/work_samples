<head>
    <title>D&D 5e Character Creation Tool</title>
    <script src="functionsJS.js" type="text/javascript"></script>
    <link rel="stylesheet" type="text/css" href="styles.css">
    <link href="https://fonts.googleapis.com/css?family=PT+Serif" rel="stylesheet">
</head>
<?php

require "functions2.php"; require "connection.php";


/*echo listCharacters();*/

$query = "select * from characters";
$connectGBLearn = new PDO("mysql:host=f7566959.gblearn.com;dbname=f7566959_project_PHP",
    "f7566959_bobbro","wvy7a278um");
$result = $connectGBLearn -> query($query);

foreach ($result as $res) {
    echo "<br>" . "<strong>Character Name: </strong>" . $res['characterName'] . ", " . "<strong>Player Name: </strong>" . $res['playerName'] . ", " .
        "<strong>Level: </strong>" . $res['characterLevel'] . ", " . "<strong>Race: </strong>" . $res['characterRace'] . ", " .
        "<strong>Sub-Race: </strong>" . $res['characterSubRace'] . ", " . "<br>" . "<strong>Class: </strong>" . $res['characterClass'] . ", " .
        "<strong>Sub-Class: </strong>" . $res['characterSubClass'] . ", " . "<strong>Patron: </strong>" . $res['characterPatron'] . ", " . "<br>" . "<strong>Str: </strong>"
        . $res['strength'] . ", " . "<strong>Dex: </strong>" . $res['dexterity'] . ", " . "<strong>Con: </strong>" . $res['constitution'] .
        ", " . "<strong>Int: </strong>" . $res['intelligence'] . ", " . "<strong>Wis: </strong>" . $res['wisdom'] . ", " . "<strong>Wis: </strong>" . $res['charisma'] .
        "<br>" . "<strong>Entry Number: </strong>" . $res['entryNumber'] . "<br>";
}

// echo $result;

?>
