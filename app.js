var express     = require('express');
var bodyParser  = require('body-parser');

const path = require('path');

var app = express();
const adminRoutes = require('./routes/admin');


//app.set('view engine','ejs');
app.set('view engine', 'html');
app.use(bodyParser.urlencoded({extended:true,limit:'50mb',parameterLimit:50000}));
app.use('/jquery',express.static(__dirname+'/node_modules/jquery/dist/'));

app.use("/register",adminRoutes);

app.use(adminRoutes);



var port  = process.env.port || 8083;
app.listen(port,()=>console.log('server run at port '+port));
