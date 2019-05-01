		<div class="box sidebar"></div>
		<div id='android' class="box sidebar2">
		<button id='menu1'>МЕНЮ (показать/скрыть)</button>
			<div class='androidf'>
			<?php include ("sidebar2i.php"); ?>
			</div>
		</div>
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
		</div><br><br><br><br><br><br>
<style>
body {
	font-size: 150%;
}
.androidf {
	display: none;
}
#menu1, #menu1:hover {
  font-size: 150%;
  background: #191970; /* фон кнопки */
  color: #fff; /* цвет текста */
}
#about, #schedule, #photo, #nisio, #video, #aikido, #iaido, #qujutsu, #jodo, #japan, #faq, #usefull {
  font-size: 150%;
  background: #ddd; /* фон кнопки */
  color: #aaa; /* цвет текста */
	cursor: pointer;
}
#about:hover, #schedule:hover, #photo:hover, #video:hover, #nisio:hover, #aikido:hover, #iaido:hover, #qujutsu:hover, #jodo:hover, #japan:hover, #faq:hover, #usefull:hover {
  font-size: 150%;
  background: #ddd; /* фон кнопки */
  color: #333; /* цвет текста */
	cursor: pointer;
}
</style>
		<script src="sb.js"></script>
</body>
</html>