var path = require('path');

var _root = path.resolve(__dirname, '..');

function root(args) {
	args = Array.prototype.slice.call(arguments, 0);
	return path.join.apply(path, [_root].concat(args));
}

exports.root = root;

function stringifyProperties(config){
	for( var key in config ){
		config[key] = JSON.stringify(config[key]);
	}
	return config;
}

exports.stringifyProperties = stringifyProperties;
