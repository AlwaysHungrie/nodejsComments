var express = require('express');
var app = express();


app.set('view engine','jade');
app.use(express.static(__dirname+'/public'));

app.set('port', (process.env.PORT || 5000));

app.get('/?',function(req,res){
	res.render('index',{layout: false});
});

app.listen(app.get('port'),function(){
	console.log('listening on ' + app.get('port'));
})
