var express = require('express'),
  fs = require('fs'),
  app = express(),
  path = require('path'),
  formidable = require('formidable');
  session = require('express-session');
  bodyParser = require('body-parser');
  md5 = require('md5');


let dao = require('./dao.js');

app.use(express.static('client'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded());
app.use(bodyParser.json());

app.listen(3000, function () {
  console.log('Listening on port 3000');
});

app.use(session({secret: "123456"}));

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

app.get('/uploads/:numero_identificador/', function (req, res) {
  res.render('uploads', db);
});

app.get('/cadastro', function (req, res) {
  res.render('cadastro');
});

app.post('/cadastro', function(req, res){
   if(!req.body.nome || !req.body.email || !req.body.passwd || !req.body.passwdconfirm){
      res.status("400");
      res.send("Campos invalidos!");
   } else {
      user={nome:req.body.nome,email:req.body.email,passwd:req.body.passwd,passwdconfirm:req.body.passwdconfirm}
      dao.getUserByEmail(req.body.email,testMail,user,req,res);
   }
});

app.get('/login', function (req, res) {
  res.render('login');
});

app.post('/login', function(req, res){
   if(!req.body.email || !req.body.passwd){
      console.log("Please enter both email and password");
   } else {
     dao.getUserByEmail(req.body.email,setsession,req,res);
   }
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

function testMail(users,toadd,req,res){
  if(users.length){
     console.log("User Already Exists! Login or choose another user id");
  }
  else{
    if(toadd.passwd==toadd.passwdconfirm){
      dao.insertUser(toadd.nome,toadd.email,md5(toadd.passwd))
      req.session.user = user;
      res.redirect('/');
    }
  }
}

function setsession(users,req,res){
  if(users.length){
     user=users[0];
     if(user.email === req.body.email && user.password === md5(req.body.passwd)){
        req.session.user = user;
        res.redirect('/');
     }
  }
  console.log("Invalid credentials!");
}

function getExtension(nome){
  var array = nome.split(".");
  return array[1];
}
