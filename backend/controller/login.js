const poolConnection = require("../dbConn/db");
const pool = poolConnection;

//Register fuction 
exports.login = (req, res) => {

    const {email,password} = req.body; 
  
    console.log(email)
    console.log(password)
  
    if(email && password){
  
      //checking if user already has an account
     pool.query('select * from users where email = $1 And password = $2' ,[email,password],(error, results)=> {
       
       if (results.rowCount > 0) {
   
        res.status(200).json(results.rows)
       
       }else{
   
        res.status(200).json('invalid login details')
       }
       });
   
     }else{
   
      res.status(200).json('enter username and password')
     }
    
  
  
  }


  

