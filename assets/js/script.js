/**
* this is where all custom client-side javascript is housed
*/

$(function(){

	// user logic
	$('div.new-user-btn').on('click', function() {
		window.location.href= '/user/new';
	});

	$('div.existing-user-btn').on('click', function() {
		window.location.href= '/session/new';
	});

	$('div.show-users-btn').on('click', function() {
		$.get( "/user/list", function( data ) {
		  $( "div.users-list-view" ).html( data );
		});
	});

	// logout logic
	$('div.logout-btn').on('click', function() {
		$('div.small.modal')
			.modal('show');
	});
	$('div.logout-confirm-btn').on('click', function() {
		window.location.href= '/session/destroy';
	});

	// initialize checkboxes
	// $('.ui.checkbox')
 //  	.checkbox();
});