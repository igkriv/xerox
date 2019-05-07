<?php
//get the key from ajax for beginning it would be 1
// Get the contents of the JSON file 
// $strJson = file_get_contents("xerox.json");
//creating JSON into multi array
// $array = json_decode($strJson, true);
//extract included array from multi array
// $arr = $array[$key];
echo("<button id='back'>НАЗАД</button>");

    if ($_GET) {
      
        $multikey = ($_GET['name']);
      
            $arr = json_decode(file_get_contents("xerox.json"), true)[$multikey];

            $prim = ($arr['prim'] != "" ? $arr['prim'] : "без примечаний");

            $kurs = 27;

            $cenagrn = $kurs*$arr['price'];

            echo "<h3><div class='good'>";

                echo "<div class='key'>part number</div><div class='value'>";
                print_r($arr['pn']);
                echo "</div><br>";
                
                echo "<div class='key'>название</div><div class='value'>";
                print_r($arr['descr']);
                echo "</div><br>";

                echo "<div class='key'>кол-во, шт.</div><div class='value'>";
                print_r($arr['qnty']);
                echo "</div><br>";

                echo "<div class='key'>цена</div><div class='value'>";
                print_r($cenagrn);
                echo " грн.</div><br>";

                echo "<div class='key'>примечание</div><div class='value'>";
                print_r($prim);
                echo "</div>";

            echo "<div class='imgs'><img class='img' src='imgs/";
            print_r($arr['pn']);
            echo ".JPG'></div></div></h3>";

    }
echo("<script>
        $('#back').on('click', function() {
            location.reload();
        });
      </script>");