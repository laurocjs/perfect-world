const { Pool, Client } = require('pg')

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'webpw',
  password: 'WebTop1',
  port: 5432,
})


getUserById(2, console.log)
function getUserById(user_id, callback){
  pool.query('select * from "user" u left join user_preferences up on u.user_id=up.user_fk left join user_image ui on u.user_id=ui.user_fk where u.user_id=$1;',[user_id], (err, res) => {
    if(err){
      console.log(err);
      res.status(400).send(err);
    }
    callback(res.rows)
  })
}

function getUserByEmail(email, callback){
  pool.query('select * from "user" u left join user_preferences up on u.user_id=up.user_fk left join user_image ui on u.user_id=ui.user_fk where u.email=$1;',[email], (err, res) => {
    if(err){
      console.log(err);
      res.status(400).send(err);
    }
    callback(res.rows)
  })
}

function insertUser(name,email,password){
  pool.query('insert into "user" (name,email,password) values ($1,$2,$3)',[name,email,password], (err, res) => {
    if(err){
      console.log(err);
      res.status(400).send(err);
    }
  })
  pool.query('COMMIT')
}

function insertUserPreferences(user,character,sky,ground,textbox,textbox_title,audio_path){
  pool.query('insert into user_preferences(user_id,character,sky,ground,textbox,textbox_title,audio_path) values ($1,$2,$3,$4.$5,$6,$7)',[user,character,sky,ground,textbox,textbox_title,audio_path], (err, res) => {
    if(err){
      console.log(err);
      res.status(400).send(err);
    }
  })
  pool.query('COMMIT')
}

function insertImagetoUser(user,path){
  pool.query(' insert into user_image (user_fk,image_path) values ($1,$2);',[user,path], (err, res) => {
    if(err){
      console.log(err);
      res.status(400).send(err);
    }
  })
  pool.query('COMMIT')
}

pool.end()
