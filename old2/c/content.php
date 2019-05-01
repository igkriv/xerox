Новости:<br>
<?php include ("base.php");
// выборка данных
$stmt = $db->query('SELECT * from glav ORDER BY vremia DESC');
//Установка fetch mode
$stmt->setFetchMode(PDO::FETCH_ASSOC);
while($row = $stmt->fetch())
{
    $date = substr($row['vremia'], 0, 19);
    echo $date . "<br>" . $row['opis'] . "<br>";
}
?>