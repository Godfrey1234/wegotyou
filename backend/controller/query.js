const poolConnection = require("../dbConn/db");
const pool = poolConnection;

//Register fuction 
exports.query = (req, res) => {

    const {email,message} = req.body; 




  if(email && message){


    //write a code to send email with that pas string
    var nodemailer = require('nodemailer')
    var transporter = nodemailer.createTransport({
    
        service:'gmail',
        auth:{
            user:'godfrey555mabena@gmail.com',
            pass:'mpwfcscmyfokqchd'
            
        }


    });

    var mailOptions ={

        from:'godfrey555mabena@gmail.com',
        to:JSON.stringify(email),
        subject:'We got you Client Query',
        text: (message)

    };


    transporter.sendMail(mailOptions,function(error,info){

        if(error){
            console.log(error)
        }else{
            console.log('Email sent ' + info.response)
        }


    })


  }

    

}