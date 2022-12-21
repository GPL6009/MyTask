const database = require('../controller/database');
var fs          = require('fs');

exports.add_user = function (req, res) {
    var path     = __dirname+'/'+req.body.filename;
    var filename = req.body.filename;
  var fname    = req.body.fname;
  var image    = req.body.file;
var last_name = req.body.last_name;

var number = req.body.number;

var email = req.body.email;

var gender = req.body.gender;

var address = req.body.address;

var password = req.body.password;

var cpassword = req.body.cpassword;

  var data     = image.split(',')[1];
  fs.writeFileSync(path,data,{encoding:'base64'});
   var temp        = fs.readFileSync(path);
   var buff        = new Buffer(temp);
   var base64data  = buff.toString('base64');




    var query = 'SELECT * FROM users_sample WHERE email ="' + email + '"';
    database.query(query, function (err, result) {
        if (err) throw err;

    
   if (result.length === 0) {
   var query = `
INSERT INTO users_sample 
(first_name, last_name, number, email, gender, address, password, cpassword, profile ) 
VALUES ("${fname}", "${last_name}", "${number}", "${email}", "${gender}", "${address}", "${password}", "${cpassword}", "${filename}")
`;

            database.query(query, function (error, data) {
                if (data < 0) {
                    console.log('no data');
                }
                if (error) {

                    throw error;
                }
                else {

                    return res.send(console.log("inserted"));
                }
                //res.send(console.log('wow you done..!'));

            });

   res.json({
       msg:'success',
       data:base64data,
       fname:fname
    });
}

else {
    //console.log('This email is already exists..!');
    return res.send(console.log("This name is already exists..!"));
}

});
}
