<!-- подключение к базе и константы, включаемый во все файлы -->
<?php
$db = new PDO(
  "mysql:host=127.1;dbname=budo;charset=utf8",
  'budo',
  '695322Home476295home',
  [
    PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
    PDO::MYSQL_ATTR_INIT_COMMAND => "SET NAMES utf8",
  ]
);
?>