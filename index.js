/*
* @Author: mike
* @Date:   2016-03-29 14:58:21
* @Last Modified 2016-03-29eich
* @Last Modified time: 2016-03-29 14:58:24
*/

'use strict';


require('babel-register');

var App = require('@nxus/core').Application

var app = new App();

app.start()

module.exports = app;
