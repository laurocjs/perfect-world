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

app.listen(2000, function () {
  console.log('Listening on port 2000');
});

app.use(session({ secret: "123456" }));

let db = {
  uploads: JSON.parse(fs.readFileSync('server/data/uploads.json'))
}

var imageFormats = ['png', 'tif', 'tiff', 'gif', 'jpeg', 'jpg', 'jif', 'jfif', 'jp2', 'jpx', 'j2k', 'j2c'];
var musicFormats = ['wav', 'aiff', 'mp3', 'aac', 'alac', 'ogg', 'wma', 'flac', '3gp', 'm4a', 'm4b', 'm4p'];

app.set('view engine', 'hbs');
app.set('views', 'server/views');


// db.background_music = 'sample_audio02.mp3';

app.get('/', function (req, res) {
  if (req.session.user) {
    db.page_title = req.session.user.textbox_title;
    db.id_user = req.session.user.user_id;
    db.browser_title = req.session.user.name + ' world';
    db.character_class = req.session.user.character;
    db.background_item = req.session.user.sky;
    db.ground_item = req.session.user.ground;
    db.page_subtitle = req.session.user.textbox;


    let millisecondsPerDay = 24 * 60 * 60 * 1000;
    db.visits_counter = Math.floor((new Date() - new Date(req.session.user.last_visit)) / millisecondsPerDay);
		// db.visits_counter = 5;

    res.render('index', db);
  }
  else {
    res.redirect('/login');
  }
});

app.get('/world/:numero_identificador/', function (req, res) {
  if (req.session.world && req.session.world !== {}) {
    console.log(req.session.world);
    dbworld = {};
    dbworld.page_title = req.session.world.textbox_title;
    dbworld.id_user = req.session.world.user_id;
    dbworld.browser_title = req.session.world.name + ' world';
    if (dbworld.character_class = req.session.user)
      dbworld.character_class = req.session.user.character;
    dbworld.person_class = req.session.world.character;
    dbworld.background_item = req.session.world.sky;
    dbworld.ground_item = req.session.world.ground;
    dbworld.page_subtitle = req.session.world.textbox;
    dbworld.visits_counter = 5;
		dao.updateLastVisit(req.session.world.user_id);

    console.log("World user: " + req.session.world.name);
    console.log("Guest name: " + req.session.user.name);
    console.log("Guest char: " + req.session.user.character);
    delete req.session.world;
    res.render('world', dbworld);
    // res.end();
  }
  else {
    console.log("World id: " + req.params.numero_identificador);
    dao.getUserById(req.params.numero_identificador, setworld, req, res);
  }
});

app.get('/uploads/:numero_identificador/', function (req, res) {
  res.render('uploads', db);
});

app.get('/cadastro', function (req, res) {
  res.render('cadastro');
});

app.get('/logout', function (req, res) {
	delete req.session.user;
});

app.post('/cadastro', function (req, res) {
  if (!req.body.nome || !req.body.email || !req.body.passwd || !req.body.passwdconfirm) {
    res.status("400");
    res.send("Campos invalidos!");
  } else {
    user = { nome: req.body.nome, email: req.body.email, passwd: req.body.passwd, passwdconfirm: req.body.passwdconfirm }
    dao.getUserByEmail(req.body.email, testMail, user, req, res);
  }
});

app.get('/login', function (req, res) {
  res.render('login');
});

app.post('/login', function (req, res) {
  if (!req.body.email || !req.body.passwd) {
    console.log("Please enter both email and password");
  } else {
    dao.getUserByEmail(req.body.email, setsession, req, res);
  }
});

app.post('/upload', function (req, res) {

  var form = new formidable.IncomingForm();
  form.multiples = true;
  form.uploadDir = path.join(__dirname, '/uploads');

  form.on('file', function (field, file) {
    if (isNew(file.name)) {
      fs.rename(file.path, path.join(form.uploadDir, file.name));
      db.uploads.default.uploads.push({ url: file.name });
      if (imageFormats.indexOf(getExtension(file.name)) > -1) {
        db.uploads.default.images.push({ url: file.name });
      } else if (musicFormats.indexOf(getExtension(file.name)) > -1) {
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


app.post('/preferences', function (req, res) {
  dao.insertUserPreferences(req.body.user, req.body.character, req.body.sky, req.body.ground, req.body.textbox, req.body.textbox_title, req.body.audio_path);
  res.status(200).end('sucess');
});

app.get('/view', function (req, res) {
  res.render('uploads', { file: db.uploads.default.uploads });
})

function isNew(nome) {
  var list = db.uploads.default.uploads;
  if (list && list.length) {
    for (var i = 0; i < list.length; i++) {
      if (nome == list[i].url) {
        return false;
      }
    }
  }
  return true;
}

function testMail(users, toadd, req, res) {
  if (users.length) {
    console.log("User Already Exists! Login or choose another user id");
  }
  else {
    if (toadd.passwd == toadd.passwdconfirm) {
      dao.insertUser(toadd.nome, toadd.email, md5(toadd.passwd))
      req.session.user = user;
      res.redirect('/login');
    }
  }
}

function setsession(users, req, res) {
  if (users.length) {
    user = users[0];
    if (user.email === req.body.email && user.password === md5(req.body.passwd)) {
      req.session.user = user;
      req.session.valid = true;
      res.redirect('/');
    }
  }
  else {
    console.log("Invalid credentials!");
  }
}

function setworld(users, req, res) {
  if (users.length) {
    user = users[0];
    req.session.world = user;
    req.session.valid = true;
    res.redirect('/world/' + req.session.world.user_id);
  }
  else {
    console.log("Invalid user!");
  }
}

function getExtension(nome) {
  var array = nome.split(".");
  return array[1];
}
