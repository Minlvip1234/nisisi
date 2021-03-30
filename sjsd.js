var express = require('express')
var app = express();
var hbs =require('hbs');

app.set('view engine', 'hbs')

var Image = require('path').join(__dirname,'/Image');
app.use(express.static(Image))

app.get('/', (req,res)=> {
    res.write("nsnjsdnsjd")
    res.end()
})



app.listen(5000);
console.log('Node.js web server at port 5000 is running..')