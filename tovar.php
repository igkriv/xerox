<?php
//get the key from ajax for beginning it would be 1
// Get the contents of the JSON file 
// $strJson = file_get_contents("xerox.json");
//creating JSON into multi array
// $array = json_decode($strJson, true);
//extract included array from multi array
// $arr = $array[$key];

$multikey = 4;

    $arr = json_decode(file_get_contents("xerox.json"), true)[$multikey];

    echo "<div>";
    print_r($arr['pn']);
    echo "</div>";

    foreach ($arr as $key => $value) {
        echo "<span>$key</span><span>$value</span>";
        }

    echo "\n";