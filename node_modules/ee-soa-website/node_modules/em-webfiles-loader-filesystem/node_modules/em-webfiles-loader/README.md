# em-webfiles-loader

Basic webfiles laoder Class which should be inherited by webfiles loaders

## installation

	npm install em-webfiles-loader

## build status

[![Build Status](https://travis-ci.org/eventEmitter/em-webfiles-loader.png?branch=master)](https://travis-ci.org/eventEmitter/em-webfiles-loader)


## usage


	var   WebFilesLoader 	= require('em-webfiles-loader')
		, Class 			= require('ee-class');



	var MyLoader = new Class({
		inherits: WebFilesLoader

		, init: function init(){
			init.super.call();
		}

		// is called when loading the files for the first time
		, load: function(callback) {

		}
	});