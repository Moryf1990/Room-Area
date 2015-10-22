'use strict';
var $ = require('jquery');

var length = $('#length');
var width = $('#width');
var form = $('#form')
var submit = $('#submit');

form.hide();

$('#button1').click(function() {
	form.toggle();
});



function calculate(e) {
	e.preventDefault();

	if (length.val() > 0 && width.val() > 0) {
		var lengthValue = parseFloat(length.val());
		var widthValue = parseFloat(width.val());
		var area = lengthValue*widthValue;
		var squareMeters = area*0.09290304;
		$('#area').val('What is the length of the room in feet? ' + lengthValue + ' What is the width of the room in feet? ' + widthValue
			+ ' You entered the dimensions of ' + lengthValue + ' feet by ' + widthValue + ' feet. The area is ' + area + ' square feet. ' + squareMeters + ' square meters.');
	}
}

submit.on('click', calculate);

























