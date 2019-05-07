$(document).ready(function() {
	$.post('json.php',  function(data) {
		arr = JSON.parse(data);
			for (var i = 0; i < arr.length; i++){
				subarr = arr[i];
					zz = subarr.prim != "" ? subarr.prim : "без примечаний";
					cenagrn = subarr.price*27;
					cenagrnokr = cenagrn.toFixed(2);
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
					+ cenagrnokr
					+ "</div><div class='tabl5' data-name='" 
					+ i + "'>"	
					+ zz + "</div></div>";
				$('div.zamena').append(subarr);
			};
	});
});



// create page tovar.php by taking event.target data-name from table row 
// and fully changed div zamena
$('div').one('click', function() {
	$.get( "tovar.php", { name: event.target.getAttribute('data-name') } )
	.done(function( data ) {
		z = "";
		$('div.zamena').html(data);
		// $('div.zamena2').html(z);
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