# em-webfiles-file

file representation for ee-webfiles

## installation

	npm install em-webfiles-file

## build status

[![Build Status](https://travis-ci.org/eventEmitter/em-webfiles-file.png?branch=master)](https://travis-ci.org/eventEmitter/em-webfiles-file)


## usage


	var WebFile = require('em-webfiles-file');

	// all options are optional
	var myFile = new WebFile({
		  path   	: '/relative/path/to/webroot'
		, data 		: Buffer || String
		, filename 	: 'filesystem.html'
		, abspath 	: '/absolute/path/on/filesystem.html'
		, mimeType 	: 'Text/HTML'
		, charset 	: 'UTF-8'
		, etag 		: 'p9854v7b9874bc84f340tqzb'
	});