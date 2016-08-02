!function(){
	var   type 	= require('ee-types')
		, Class = require('ee-class')
		, log 	= require('ee-log');

	
	var classDefinition = {
		init: function(args) {
			this._args = args;
		}


		, get: function(desiredType, defaultValue) {
			return this.getByIndex(desiredType, 0, defaultValue);
		}


		, getByIndex: function(desiredType, index, defaultValue) {
			var i, item;

			index = index || 0;

			for(i in this._args) {
				item = this._args[i];

				if (type(item) === desiredType) {
					if (index === 0) return item;
					else index--;
				}
			}

			return defaultValue;
		}
	};


	// generate methods for all types
	['string', 'number', 'boolean', 'array', 'object', 'function', 'date', 'regexp', 'error', 'undefined', 'buffer', 'null'].forEach(function(typeName){
		classDefinition['get'+typeName[0].toUpperCase()+typeName.substr(1)] = function(defaultValue){
			return this.getByIndex(typeName, 0, defaultValue);
		};

		classDefinition['get'+typeName[0].toUpperCase()+typeName.substr(1)+'ByIndex'] = function(index, defaultValue){
			return this.getByIndex(typeName, index, defaultValue);
		};
	});



	module.exports = new Class(classDefinition);

}();
