<?php

// require "functions.php";

try {

    //$connectLocal = new PDO("mysql:host=localhost;dbname=project_PHP", "root", "");

    $connectGBLearn = new PDO("mysql:host=f7566959.gblearn.com;dbname=f7566959_project_PHP",
        "f7566959_bobbro","wvy7a278um");

    $connectGBLearn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    echo "Connected:";
}
catch(PDOException $e){

    print $e->getMessage();
    // print $e->getTraceAsString()
}


?>