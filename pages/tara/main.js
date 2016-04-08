var $loginsubmit = $('.login-submit');
var $loginwrap = $('.loginwrap');

var password = 'google2016';

$('.login-submit').click(function(){
	
	enteredPassword = $('.login-password').val();
	
	console.log(enteredPassword);	
	
	if (enteredPassword == password) {
		// if password is correct...
		console.log("password is correct");
		
		$('.loginitem').attr("disabled", true);
		
		loginSuccess();
	} else {
		// set funciton for when password is incorrect
		
		console.log('failure');
	}

})


function loginSuccess() {
	// set function for when correct password is entered
	console.log('success');
	
	$loginwrap.remove();
}
