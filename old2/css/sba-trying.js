/*
$(function() {             
	$('div.androidf').slideToggle(250);
});

$('button#about').one( "click", function() {
    console.log( "You just clicked this for the first time!" );
    $( this ).click(function() {
        console.log( "You have clicked this before!" );
    });
});


function zame()
{
     $('div#zamena').html(data);
	 $('div.androidf').slideToggle(250);
	 
}

$('button#about').on('click', function() {
			$.post('c/about.php',  function() {
			zame();
		});

});
*/

function zame() {
	$('div#zamena').html(data);
}

function vipad() {
	$('div.androidf').Toggle(100);
}

$(document).ready(function() {

$('button#about').on('click', function() {
			$.post('c/about.php', zame());
});


$('button#schedule').on('click', function() {
			$.post('c/schedule.php',  function(data) {
			$('div#zamena').html(data);
		});
		
});

$('button#photo').on('click', function() {
			$.post('c/photo.php',  function(data) {
			$('div#zamena').html(data);
		});
		
});

$('button#nisio').on('click', function() {
			$.post('c/nisio.php',  function(data) {
			$('div#zamena').html(data);
		});

		
});

$('button#aikido').on('click', function() {
			$.post('c/aikido.php',  function(data) {
			$('div#zamena').html(data);
		});
		
});

$('button#iaido').on('click', function() {
			$.post('c/iaido.php',  function(data) {
			$('div#zamena').html(data);
		});
		
});

$('button#qujutsu').on('click', function() {
			$.post('c/qujutsu.php',  function(data) {
			$('div#zamena').html(data);
		});
		
});

$('button#jodo').on('click', function() {
			$.post('c/jodo.php',  function(data) {
			$('div#zamena').html(data);
		});
		
});

$('button#japan').on('click', function() {
			$.post('c/japan.php',  function(data) {
			$('div#zamena').html(data);
		});
		
});

$('button#faq').on('click', function() {
			$.post('c/faq.php',  function(data) {
			$('div#zamena').html(data);
		});
		
});

$('button#usefull').on('click', function() {
			$.post('c/usefull.php',  function(data) {
			$('div#zamena').html(data);
		});
		
});

$('button#menu1').on('click', vipad());

/*$('button#menu1').click(function(){
				$('div.androidf').Toggle(100);			   
			return false;
});*/

});