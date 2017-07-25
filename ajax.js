'use strict';

var http = require('http')
var fs = require('fs')
var url = require('url')

//console.log(Object.keys(http))
var port =8080;

var server = http.createServer(function(request, response){

  var temp = url.parse(request.url, true)
  var path = temp.pathname
  var query = temp.query
  var method = request.method

  //从这里开始看，上面不要看
  if(method === 'GET'){
    if(path === '/'){  // 如果用户请求的是 / 路径
      var string = fs.readFileSync('./index.html')  
      response.setHeader('Content-Type', 'text/html;charset=utf-8')  
      response.end(string)   
    }else if(path === '/xxx'){   
     response.setHeader('Content-Type', 'text/html;charset=utf-8')
      response.end('hello AJAX!')
    }else{  
      response.statusCode = 404
      response.setHeader('Content-Type', 'text/html;charset=utf-8') 
      response.end('找不到对应的路径，你需要自行修改 index.js')
    }
  }
