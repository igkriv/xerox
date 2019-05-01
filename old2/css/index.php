<?php 
      include ('hd.php');
$brw = $_SERVER['HTTP_USER_AGENT'];
  if(stristr($brw, 'trident') or stristr($brw, 'msie')) {
	  include ('indexi.php');
  } elseif (stristr($brw, 'android')) {
	  include ('indexa.php');
  } else {
		include ('indexm.php');
  }
?>