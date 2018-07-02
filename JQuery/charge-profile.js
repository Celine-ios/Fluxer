$(document).ready(function() {
	$.get('../php/charge-profile.php', function(response) {
		$('#profile-photo').attr('src', response);
	});
});