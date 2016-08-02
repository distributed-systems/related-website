
	
	var   Class 		= require('ee-class')
		, log 			= require('ee-log')
		, assert 		= require('assert')
		, travis 		= require('ee-travis');



	var Loader = require('../')



	describe('the Loader', function(){
		it('should not crash when instantiated', function(){
			new Loader();
		});	

		it('should identify itself as loader', function(){
			assert.equal(new Loader().isLoader(), true);
		});		
	});
	