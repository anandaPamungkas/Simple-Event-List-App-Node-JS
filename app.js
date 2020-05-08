var express = require('express');
var app = express();
var http = require('http');
var mysql = require('mysql');
var bodyParser = require('body-parser');
var dateFormat = require('dateformat');
const ejsLint = require('ejs-lint');
var now = new Date();

app.use(bodyParser.urlencoded({extended: true}));

app.set('view engine', 'ejs');


app.use('/js', express.static(__dirname + '/node_modules/bootstrap/dist/js'));
app.use('/js', express.static(__dirname + '/node_modules/tether/dist/js'));
app.use('/js', express.static(__dirname + '/node_modules/jquery/dist'));
app.use('/css', express.static(__dirname + '/node_modules/bootstrap/dist/css'));

var con = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '',
    database : 'my_db'
  });

const siteTitle = "Simple Application";
const baseURL = "http://localhost:3000/"; 

app.get('/', function(req, res){
  console.log('request was made : '+ req.url);
  con.query("SELECT * FROM e_events ORDER BY e_start_date DESC", function(err, result){
    
    res.render('index', {
        siteTitle : siteTitle,
        pageTitle : "Event list",
        items : result

    });
  });
});

app.get('/event/add', function(req, res){
  console.log('request was made : '+ req.url);
    
   
      res.render('add-event', {
          siteTitle : siteTitle,
          pageTitle : "Event list",
          
  
      
  });
});

app.post('/event/add', function(req, res){
  console.log('request was made : '+ req.url);
  var query = "INSERT INTO `e_events` (`e_name`, `e_start_date`, `e_end_date`, `e_desc`, `e_location`) VALUES (";
      query+= "'"+req.body.e_name+"',";
      query+= "'"+dateFormat(req.body.e_start_date,"yyyy-mm-dd")+"',";
      query+= "'"+dateFormat(req.body.e_end_date,"yyyy-mm-dd")+"',";
      query+= "'"+req.body.e_desc+"',";
      query+= "'"+req.body.e_location+"')";
    

      con.query(query, function(err, result){
        if (err) throw err;  
        console.log("1 record inserted");  
        res.redirect(baseURL);
      });
});


app.get('/event/edit/:id', function(req, res){
  console.log('request was made : '+ req.url);


      con.query("SELECT * FROM `e_events` WHERE e_id='"+req.params.id+"'", function(err, result){
        
        result[0].e_start_date = dateFormat(result[0].e_start_date,'yyyy-mm-dd');
        result[0].e_end_date = dateFormat(result[0].e_end_date,'yyyy-mm-dd');

        if(err) throw err;
        res.render('edit-event', {
            siteTitle : siteTitle,
            pageTitle : "Editing Event : " + result[0].e_name,
            item : result
    
        });
      });
      
});

app.post('/event/edit/:id', function(req, res){
  console.log('request was made : '+ req.url);
  var query = "UPDATE `e_events` SET";
      query+= "`e_name` = '"+req.body.e_name+"',";
      query+= "`e_start_date` = '"+req.body.e_start_date+"',";
      query+= "`e_end_date` = '"+req.body.e_end_date+"',";
      query+= "`e_desc` = '"+req.body.e_desc+"',";
      query+= "`e_location` = '"+req.body.e_location+"'";
      query+= " WHERE `e_events`.`e_id`= "+req.body.e_id+"";

      con.query(query, function(err, result){
        if (err) throw err;  
        if(result.affectedRows){ 
          console.log("1 record changed");  
          res.redirect(baseURL);
        }
      });
      
      
});

app.get('/event/delete/:id', function(req, res){
  console.log('request was made : '+ req.url);
  console.log(req.params.e_id)
  
      con.query("DELETE FROM `e_events` WHERE `e_events`.`e_id` = "+req.params.id, function(err, result){

        if(err) throw err;
        if(result.affectedRows){ 
          console.log("1 record deleted");  
          res.redirect(baseURL);
        }
      });
    
});


console.log('server is listening on port 3000');
app.listen(3000);