<head>
    <title>Login | D&D 5e Character Creation Tool</title>
    <script src="functionsJS.js" type="text/javascript"></script>
    <link rel="stylesheet" type="text/css" href="styles.css">
    <link href="https://fonts.googleapis.com/css?family=PT+Serif" rel="stylesheet">
</head>
<?php

require "functions.php";

$userName = ""; $passWord = "";

?>
<body>
<div class="centeredContainer">
    <h1>Welcome to the character <br> creation utility</h1>
    <p>This utility is designed to save you time in your <br> Dungeons & Dragons character creation process.</p>

    <form action="authenticationPage.php" method="post">
        <div class="imgcontainer">
            <img src="images/d20.png" alt="Student Image" class="loginImage">
        </div>

        <div>
            <label><strong>Username:</strong></label>
            <input type="text" placeholder="Enter Username" name="userName" value="<?php echo $userName;?>" required>
        </div>

        <div>
            <label><strong>Password:</strong></label>
            <input type="password" placeholder="Enter Password" name="passWord" value="<?php echo $passWord;?>" required>
        </div>

        <div>
            <button type="submit">Login</button>
        </div>
    </form>
</div>

</body>
<?php

$userName = isset($_POST['userName']) ? $_POST['userName'] : "";

$passWord = isset($_POST['passWord']) ? $_POST['passWord'] : "";


?>