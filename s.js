$(document).ready(function() {
	$.post('json.php',  function(data) {
		arr = JSON.parse(data);
			for (var i = 0; i < arr.length; i++){
				subarr = arr[i];
					subarr = "<div class='stroka' data-name='" 
					+ i 
					+ "'><div class='tabl tabl1' data-name='"	
					+ i + "'>"
					+ subarr.pn 
					+ "</div><div class='tabl tabl2' data-name='" 
					+ i + "'>"
					+ subarr.descr 
					+ "</div><div class='tabl tabl3' data-name='" 
					+ i + "'>"
					+ subarr.qnty 
					+ "</div><div class='tabl tabl4' data-name='" 
					+ i + "'>"
					+ subarr.price 
					+ "</div><div class='tabl5' data-name='" 
					+ i + "'>"	
					+ subarr.prim + "</div></div>";
				$('div.zamena').append(subarr);
			};
	});
});

$('div').one('click', function() {
	$.get( "tovar.php", { name: event.target.getAttribute('data-name') } )
	.done(function( data ) {
		$('div.zamena').html(data);
	});  
});

// $("div").click(function(event) {
// 	$.post('json.php',  function(data) {
// 		arr = JSON.parse(data);
// 			subarr = arr[event.target.getAttribute('data-name')];
// 				subarr = "<div class='tovar'>"
// 				+ subarr.pn
// 				+ "</div><div class='tovar'>"
// 				+ subarr.descr 
// 				+ "</div><div class='tovar'>"
// 				+ subarr.qnty 
// 				+ "</div><div class='tovar'>"
// 				+ subarr.price 
// 				+ "</div><div class='tovar'>"	
// 				+ subarr.prim + "</div><div class='tovimg'><img class='img' src='imgs/"
// 				+ subarr.pn	+ ".JPG></div>";
// 	$('div.zamena').html(subarr);
// 	});
// });