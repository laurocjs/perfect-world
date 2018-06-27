var express = require('express'),
  fs = require('fs'),
  app = express(),
  path = require('path'),
  formidable = require('formidable');

app.use(express.static('client'));
app.use(express.static(path.join(__dirname, 'public')));

app.listen(3000, function () {
  console.log('Listening on port 3000');
});

var db = {
   uploads: JSON.parse(fs.readFileSync('server/data/uploads.json'))
}

var imageFormats = ['png', 'tif', 'tiff', 'gif', 'jpeg', 'jpg', 'jif', 'jfif', 'jp2', 'jpx', 'j2k', 'j2c' ];
var musicFormats = ['wav', 'aiff', 'mp3', 'aac', 'alac', 'ogg', 'wma', 'flac', '3gp', 'm4a', 'm4b', 'm4p' ];

app.set('view engine', 'hbs');
app.set('views', 'server/views');


// db.background_music = 'sample_audio02.mp3';

app.get('/', function (req, res) {
  db.page_title = 'TESTE LOKO';
  db.browser_title = 'Titulo janela';
  db.character_class = 'pato';
  db.background_item = 1;
  db.ground_item = 0;
  db.visits_counter = 5;
  res.render('index', db);
});

app.get('/world/:numero_identificador/', function (req, res) {
  db.page_title = 'Visita';
  db.browser_title = 'Titulo da visita';
  db.character_class = 'coelho';
  db.person_class = 'coelho';
  db.background_item = 2;
  db.ground_item = 1;
  db.visits_counter = 10;
  res.render('world', db);
});

app.get('/login', function (req, res) {
  res.sendFile(path.join(__dirname, 'login.html'));
});

app.post('/upload', function (req, res) {

  var form = new formidable.IncomingForm();
  form.multiples = true;
  form.uploadDir = path.join(__dirname, '/uploads');

  form.on('file', function (field, file) {
    if (isNew(file.name)){
      fs.rename(file.path, path.join(form.uploadDir, file.name));
      db.uploads.default.uploads.push({ url: file.name });
      if (imageFormats.indexOf(getExtension(file.name)) > -1){
        db.uploads.default.images.push({ url: file.name });
      } else if (musicFormats.indexOf(getExtension(file.name)) > -1){
        db.uploads.default.music.push({ url: file.name });
      }       
      var jsonFile = JSON.stringify(db.uploads)
      fs.writeFileSync('server/data/uploads.json', jsonFile);
    }
  });

  form.on('error', function (err) {
    console.log('An error has occured: \n' + err);
  });

  form.on('end', function () {
    res.end('success');
  });

  form.parse(req);

});

app.get('/view', function (req, res) {
  res.render('uploads', { file: db.uploads.default.uploads });
})

function isNew(nome){
  var list = db.uploads.default.uploads;
  if (list && list.length) {
    for  (var i = 0; i < list.length; i++){
      if (nome == list[i].url){
        return false; 
      }          
    }    
  }
  return true;
}

function getExtension(nome){
  var array = nome.split(".");
  return array[1];  
}

