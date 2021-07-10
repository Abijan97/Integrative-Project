import React,{useState} from "react";
import { Link } from "react-router-dom";
import "./login.css";

 const SignIn=() =>{

        const [email,setEmail]=useState("");
        const [password,setpassword]=useState("");
      
     

        const changeonClick = e => {
            e.preventDefault();

            const formData=new FormData();

            //connect database
            formData.append("email",email);
            formData.append("password",password);
            
          

          
            //add to database

            // axios
            // .post('http://localhost:5001/agents/add',formData)
            // .then(res=>console.log(res.data))
            // .catch((err)=>{
            //     console.log(err); 
               
            
        

          
          

            setEmail('');
            setpassword('');

           
        
        };

      
        
          

        
    

 
    return (

      <div className="div-signin">
              <div className="form-group mb-3"> 
            <h3>login</h3>
                
              </div>
        
        <div>
        <form onSubmit={changeonClick}  encType='multipart/form-data'>
           

              <div className="form-group mb-3"> 
                <label>Email</label>
                <input  type="text"
                    required
                    className="form-control"
                    value={email}
                    onChange={(e)=>setEmail(e.target.value)}
            
                    />
                
              </div>

            
              <div className="form-group mb-3"> 
                <label>Password </label>
                <input  type="password"
                    required
                    className="form-control"
                    value={password}
                    onChange={(e)=>setpassword(e.target.value)}
            
                    />
                    
              </div>
            

             


              <div className="form-group mb-3"> 
                <input type="submit"  value="LOGIN" className="btn btn-primary" />

              </div>

            </form>
            
            <div className=" mb-3"> 
            <span>Doesn't have an account? <Link to="/signup">Sign Up</Link></span>
              </div>
        </div>
        
      </div>
    
    );
  
}


export default SignIn;