//npm install express --save
//npm install mysql

var express = require('express');
var app = express();
var fs = require("fs");
var mysql  = require('mysql');  
var bodyParser = require('body-parser');

 //mysql数据库连接
var connection = mysql.createConnection({     
  host     : 'localhost',       
  user     : 'root',              
  password : '123456',       
  port: '3306',                   
  database: 'manage', 
}); 
 
connection.connect();

app.use(express.static('public'));

//body-parser 解析json格式数据
app.use(bodyParser.json({limit: '1mb'}));
//此项必须在 bodyParser.json 下面,为参数编码
app.use(bodyParser.urlencoded({
  extended: true
}));

//解决跨域控制请求
app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By",' 3.2.1')
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
});
//get提交发起活动表单数据
app.post('/add', function (req, res) {
   var response = {
       "sname":req.body.sname,
       "sno":req.body.sno,
       "keyid":req.body.keyid,
       "clas":req.body.clas
   };
   console.log("添加成功name ="+response.sname+"sno ="+response.sno+"keyid ="+response.keyid+"clas="+response.clas);
   res.send("提交成功<br>name ="+response.sname+"<br>sno ="+response.sno+"<br>keyid ="+response.keyid+"<br>clas="+response.clas);

   var  addSql = 'INSERT INTO student(sno,sname,keyid,clas) VALUES(?,?,?,?)';
   var  addSqlParams = [response.sno,response.sname,response.keyid,response.clas];
   connection.query(addSql,addSqlParams,function (err, result) {
        if(err){
         console.log('[INSERT ERROR] - ',err.message);
         return;
        }        
});

})

//删除一条活动记录
app.get('/delete', function (req, res) {
   var id = req.query.sno;
   var delSql = 'DELETE FROM student where sno='+id;
   connection.query(delSql,function (err, result) {
        if(err){
          console.log(err);
          return;
        }
   res.send("已删除学号为"+id+"的学生");
   console.log("已删除学号为"+id+"的学生");
  });
})


//获取活动列表
app.get('/list', function (req, res) {
  var  sql = 'SELECT * FROM student';
  connection.query(sql,function (err, result) {
        if(err){
          console.log('[SELECT ERROR] - ',err.message);
          return;
        }
        res.send(result);
        console.log("信息列表已输出-->"+new Date().getHours()+":"+new Date().getMinutes());
     });
})


//更新数据
app.post('/update', function (req, res) {
  var response = {
       "sname":req.body.sname,
       "sno":req.body.sno,
       "keyid":req.body.keyid,
       "clas":req.body.clas
   };
  console.log("收到数据 sname = "+response.sname+" sno = "+response.sno+" keyid = "+response.keyid+" clas= "+response.clas);
  res.send("收到数据<br>sname ="+response.sname+"<br>sno ="+response.sno+"<br>keyid ="+response.keyid+"<br>clas="+response.clas);
  var modSql = 'UPDATE student SET sname = ?,keyid = ?,clas = ? WHERE sno = ?';
  var modSqlParams = [response.sname, response.keyid,response.sno,response.clas];
  //改
  connection.query(modSql,modSqlParams,function (err, result) {
     if(err){
           console.log('[UPDATE ERROR] - ',err.message);
           return;
     }
     console.log('成功更新'+result.affectedRows+'行数据');
  });
})



var server = app.listen(3000, function () {
 
  var host = server.address().address
  var port = server.address().port
 
  console.log("应用实例，访问地址为 http://127.0.0.1:"+port)
 
})
 