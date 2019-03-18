<?php

function authenticate($userName, $passWord){

    if (strtolower($userName) == "student" && strtolower($passWord) == "student"){
        header('Location: main.php');
    }
    else {
        header('Location: loginFailure.php');
    }
}

function rollStat(){

    $statArray = array(); $stat = 0; $value = 0;

    for($i = 0; $i <= 3; $i++){

        $value = mt_rand(1,6);
        $statArray[$i] = $value;
    }

    rsort($statArray);
    $stat = $statArray[0] + $statArray[1] + $statArray[2];
    return $stat;
}

function listCharacters(){

    require 'connection.php';

    $query = "select * from character";

    $result_2 = $connectGBLearn -> query($query); // get all courses
}

?>