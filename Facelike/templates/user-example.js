
users = {};
users['ian'] = {
	'id': '000001',
	'name': 'Ian',
	'level': 'admin'
}

//I'm not sure if this is the right way to read from a file
var source = $.get("user.html");
var template = Handlebars.compile(source);
$("#user-frame").append(template(users['ian']));