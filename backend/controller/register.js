const poolConnection = require("../dbConn/db");
const pool = poolConnection;


//Register fuction 
exports.register = (req, res) => {
    
    const {email,name,password,confirm} = req.body; 
    let profilepic = "https://www.kindpng.com/picc/m/22-223863_no-avatar-png-circle-transparent-png.png"
   
     console.log(email)
     console.log(name)
     console.log(confirm)
   
    
    
  
    if(password == confirm){
  
     //checking if user already has an account
    pool.query('select * from users where email = $1' ,[email],(error, results)=> {
      
      if (results.rowCount > 0) {
  
        res.status(200).json('user already exists')
      
      }else{
  
        pool.query('INSERT INTO users (email,name,password,profilepic) VALUES ($1,$2,$3,$4) RETURNING email',[email,name,password,profilepic],(error, results) => 
        {
    
            if (error) 
              {
                res.status(401).json('system error')
              }
            else{
            
                res.status(200).json('successfully registered')
              
            }  
           
                
        });
      }
      });
  
    }else{
  
      res.send('password dont match')
    }
    
  };


  