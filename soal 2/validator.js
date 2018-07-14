function validate_email(email) {
	var checker = /^[a-z._-]+@[a-z.-]+\.[a-z]{2,4}$/;
	return checker.test(email);
} 

function validate_username(username) {
	var checker = /^[a-z]*$/;
	return checker.test(username);
}

function validate_phone(phone) {
	var checker = /^\+?[0-9]*$/;
	return checker.test(phone);
}