//http://stackoverflow.com/questions/20972788/how-to-invoke-external-scripts-programs-from-node-js
web = web || {}
web.exe=


var spawn = require('child_process').spawn;
var prc = spawn('java',  ['-jar', '-Xmx512M', '-Dfile.encoding=utf8', 'script/importlistings.jar']);

//noinspection JSUnresolvedFunction
prc.stdout.setEncoding('utf8');
prc.stdout.on('data', function (data) {
    var str = data.toString()
    var lines = str.split(/(\r?\n)/g);
    console.log(lines.join(""));
});

prc.on('close', function (code) {
    console.log('process exit code ' + code);
});


shell('java',)

shell('ping','google.com') //ping <hostname>
shell('mkdir',{'p'},'./') //mkdir [-p] <dirname>
shell('cp',//cp <source1> [source2...] <dest>
//netstat {-t|-u}



// with express 3.x
var express = require('express'); 
var app = express();
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(app.router);
app.post('/upload', function(req, res){
   if(req.files.myUpload){
     var python = require('child_process').spawn(
     'python',
     // second argument is array of parameters, e.g.:
     ["/home/me/pythonScript.py"
     , req.files.myUpload.path
     , req.files.myUpload.type]
     );
     var output = "";
     python.stdout.on('data', function(){ output += data });
     python.on('close', function(code){ 
       if (code !== 0) {  return res.send(500, code); }
       return res.send(200, output)
     });
   } else { res.send(500, 'No file found') }
});

require('http').createServer(app).listen(3000, function(){
  console.log('Listening on 3000');
});




