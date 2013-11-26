var fs = require('fs');
var path = require('path');

var walk = function(dir, done,_cutof) {
	var results = [];
	if (typeof _cutof=='undefined'){
		_cutof=dir.length;
	}
	fs.readdir(dir, function(err, list) {
		if (err) return done(err);
		var pending = list.length;
		if (!pending) return done(null, results);
		list.forEach(function(file) {
			file = path.join(dir, file);
			fs.stat(file, function(err, stat) {
				if (stat && stat.isDirectory()) {
					walk(file, function(err, res) {
						results = results.concat(res);
						if (!--pending) done(null, results);
					},_cutof);
				} else {
					results.push(file.substring(_cutof));
					if (!--pending) done(null, results);
				}
			});
		});
	});
};

function init(app){
	initRoute(app);
}
var files=[];
var open=function(req,res,next){
	console.log(req);
	res.json(200,{
		success: false,
		msg: err.message
	});
}

var initRoute = function(app){
	
	walk(path.join(__dirname,'ext-4.2.1'),function(err,res){
		files = res;
	});
	//app.get(,startUI);
	if (typeof app.get('extjs')!='undefined'){
		app.get(path.join('/',app.get('extjs'),'*'),open);
	}else{
		app.get(path.join('/ext/*'),open);
	}
}
/*
walk(path.join(__dirname,'ext-4.2.1'),function(err,res){
	console.log(res);
})
*/
exports.init = init;
exports.initRoute = initRoute;