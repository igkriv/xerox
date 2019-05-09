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
	arrind = event.target.getAttribute('data-name');
		if ( arrind != null ) {
			$.get( "tovar.php", { name: arrind } )
			.done(function( data ) {
				$('div.zamena').html(data);
			});  
		} else {
			location.reload();
		};
});