;(function($, window, document) {
	$('document').ready(function(){
		var $span = $('#marttiphpbb_emailonlypasswordreset');
		$('label[for="username"]').text($span.text());
		if ($span.data('auth-method') === 'db_email'){
			$('#username').attr('type', 'email');
		}
	});
})(jQuery, window, document);
