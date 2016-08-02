# ee-soa-transport

Basic SOA Transport implementation. Your transport implementation should inherit from this class. This class inherits from EventEmitter.

## installation

	npm install ee-soa-transport

## build status

[![Build Status](https://travis-ci.org/eventEmitter/ee-soa-transport.png?branch=master)](https://travis-ci.org/eventEmitter/ee-soa-transport)


## usage

	var   Transport = require('ee-soa-transport')
		, Class  	= require('ee-class');

	var MyTransport = new Class({
		inherits: Transport

		, init: function init() {
			// you have to call the super constructor to
			// define the type of transport you're providing
			init.super.call(this, 'myTransportType');
		}

		// you may implement the request method 
		// for outgoing requests
		, request: function(request, response) {
			
		}
	}); 