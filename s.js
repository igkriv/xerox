$(document).ready(function() {
	$.post('json.php',  function(data) {
		arr = JSON.parse(data);
			for (var i = 0; i < arr.length; i++){
				subarr = arr[i];
					subarr = "<div class='stroka'><div class='tabl tabl1'>"
					+ subarr.pn + "</div><div class='tabl tabl2'>"
					+ subarr.descr + "</div><div class='tabl tabl3'>"
					+ subarr.qnty + "</div><div class='tabl tabl4'>"
					+ subarr.price + "</div><div class='tabl5'>"	
					+ subarr.prim + "</div></div>";
				$('div.zamena').append(subarr);
			};
	});
});
$('.stroka').hover(
	function(){ $(this).addClass('toclick') },
	function(){ $(this).removeClass('toclick') }
)
$(".toclick").click(function(){
	alert("The paragraph was clicked.");
  }); 