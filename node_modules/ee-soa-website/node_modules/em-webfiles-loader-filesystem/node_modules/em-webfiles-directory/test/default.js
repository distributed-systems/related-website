
	
	var   Class 		= require('ee-class')
		, log 			= require('ee-log')
		, assert 		= require('assert');



	var WebfilesDirectory = require('../')



	describe('The WebfilesDirectory', function(){
		it('should not crash when instantiated', function(){
			new WebfilesDirectory();
		});		
	});
	