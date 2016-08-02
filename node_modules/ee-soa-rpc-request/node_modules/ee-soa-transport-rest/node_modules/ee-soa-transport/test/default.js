
	
	var   Class 		= require('ee-class')
		, log 			= require('ee-log')
		, assert 		= require('assert');



	var Transport = require('../')


	describe('The Transport', function(){
		it('should not throw when instantiated', function(){
			new Transport('rest');
		});

		it('should throw when instantiated without an parameter', function(){
			assert.throws(function(){
				new Transport();
			});
		});

		it('should return its type', function(){
			assert.equal(new Transport('rest').getType(), 'rest');
		});

		it('should identify itself as transport', function(){
			assert.equal(new Transport('rest').isTransport(), true);
		});
	});
	