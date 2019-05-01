		<div class="box sidebar"><?php include ("sidebar.php"); ?></div>
		<div class="box sidebar2"><?php include ("sidebar2i.php"); ?></div>
		<div  id='zamena' class="box content">Новости:<br>
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
		</div>
	<script src="sb.js"></script>
</body>
</html>