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
  // uploads: JSON.parse(fs.readFileSync('server/data/uploads.json'))
}

app.set('view engine', 'hbs');
app.set('views', 'server/views');

db.page_title = 'TESTE LOKO';
db.browser_title = 'Titulo janela';
db.character_class = 'coelho';
db.background_item = 1;
db.ground_item = 0;
// db.background_music = 'sample_audio02.mp3';

app.get('/', function (req, res) {
  res.render('index', db);
});

app.get('/login', function (req, res) {
  res.sendFile(path.join(__dirname, 'login.html'));
});

app.post('/upload', function (req, res) {

  console.log(req);
  var form = new formidable.IncomingForm();
  form.multiples = true;
  form.uploadDir = path.join(__dirname, '/uploads');

  form.on('file', function (field, file) {
    fs.rename(file.path, path.join(form.uploadDir, file.name));
    console.log(file.name);
    db.uploads.default.uploads.push({ url: file.name });
    console.log(db.uploads);
    var jsonFile = JSON.stringify(db.uploads)
    fs.writeFileSync('server/data/uploads.json', jsonFile);
  });

  form.on('error', function (err) {
    console.log('An error has occured: \n' + err);
  });

  form.on('end', function () {
    res.end('success');
  });

  console.log("saindo");
  form.parse(req);

});

app.get('/view', function (req, res) {
  res.render('uploads', { file: db.uploads.default.uploads });
  console.log(db.uploads.default.uploads)
})


