var express = require('express');
var app = express();


app.set('view engine','jade');
app.use(express.static(__dirname+'/public'));


app.get('/?',function(req,res){
	res.render('index',{layout: false});
});

app.listen(3030,function(){
	console.log('listening on 3030');
})