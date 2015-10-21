

jQuery(document).ready(function(){
	console.log ("document ready");
	jquery ("h1")
})

console.log ("hello world")

$(document).ready(function() {
	$('button').on('click', function() {
		var price = $('<p>From $399.99</p>');
		$('.vacation').append(price);
		$('button').remove();
	});
});