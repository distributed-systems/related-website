
	
	var   Class 		= require('ee-class')
		, log 			= require('ee-log')
		, assert 		= require('assert')
		, travis 		= require('ee-travis');



	var File = require('../')



	describe('The File', function(){
		it('should not crash when instantiated', function(){
			new File();
		});		
	});
	