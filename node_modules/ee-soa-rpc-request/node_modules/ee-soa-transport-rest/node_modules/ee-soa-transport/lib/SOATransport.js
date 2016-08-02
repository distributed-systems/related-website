!function(){

	var   Class 		= require('ee-class')
		, EventEmitter 	= require('ee-event-emitter')
		, SOAResponse 	= require('ee-soa-response')
		, type 			= require('ee-types')
		, log 			= require('ee-log');



	module.exports = new Class({
		inherits: EventEmitter

		, _transportType: 'invalid'

		, init: function(transportType){
			if (!transportType || !type.string(transportType)) throw new Error('you must specifiy the transport type!');
			this._transportType = transportType;
		}

		, isTransport: function() {
			return true;
		}

		, getType: function() {
			return this._transportType;
		}

		, request: function(request, response) {
			response.send(SOAResponse.statusCodes.TRANSPORT_NOT_AVAILABLE);
		}
	});
}();
