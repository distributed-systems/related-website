!function(){

	var   Class 		= require('ee-class')
		, EventEmitter 	= require('ee-event-emitter')
		, log 			= require('ee-log')
		, Directory 	= require('em-webfiles-directory');



	module.exports = new Class({
		inherits: EventEmitter
		
		, isLoader: function() {
			return true;
		}


		, init: function() {
			this.tree = new Directory();
			Class.define(this, '_hashTree', Class({}));
		}


		, hasFile: function(pathname) {
			return !!this._hashTree[pathname];
		}


		, getFile: function(pathname) {
			return this._hashTree[pathname];
		}
	});
}();
