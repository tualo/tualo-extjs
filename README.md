Description
===========

tualo-extjs is route for module express.js, that adds all needed Ext Js files as a route.
Note: This module is just a wrapper of Sencha's Ext JS Library.

Using
=====

Node part:

	var express = require('express');
	...
	app = express();
	require('tualo-extjs').init(app);

Browser part:

	<link rel="stylesheet" href="/extjs/resources/ext-theme-neptune/ext-theme-neptune-all.css">
	<script src="/extjs/ext-all.js"></script>
