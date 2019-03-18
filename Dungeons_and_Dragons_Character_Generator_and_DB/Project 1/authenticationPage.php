<?php

require "functions.php";

$userName = ""; $passWord = "";

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $userName = $_POST["userName"];
    $passWord = $_POST["passWord"];
}

authenticate($userName, $passWord);

?>