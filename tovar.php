<?php
    // if( $_GET["pn"] ) {
    //     echo "you get a pn - ". $_GET['pn']. "<br />";
    //     exit();
    // }
    $pn = "801K24091";
    var_dump($pn);
    // Get the contents of the JSON file 
    $strJson = file_get_contents("xerox.json");
    $array = json_decode($strJson, true);
    
    $key = array_search($pn, $array); 
    print_r($key); // show contents

    
?>