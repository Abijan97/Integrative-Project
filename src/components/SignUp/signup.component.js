import React,{useState} from "react";
import "./login.css";
import { Link } from "react-router-dom";

 const Signup=() =>{

        const [email,setEmail]=useState("");
        const [password,setpassword]=useState("");
        const [notificationType,setnotificationType]=useState("");
        const [mobile,setMobile]=useState("");
        
        
        

      
     

        const changeonClick = e => {
            e.preventDefault();

            const formData=new FormData();

            //connect database
            formData.append("email",email);
            formData.append("password",password);
            formData.append("notificationType",notificationType);
            formData.append("mobile",mobile);
            
          

          
            //add to database

            // axios
            // .post('http://localhost:5001/agents/add',formData)
            // .then(res=>console.log(res.data))
            // .catch((err)=>{
            //     console.log(err); 
               
            
        

          
          

            setEmail('');
            setpassword('');
            setnotificationType('');
            setMobile('');

           
        
        };

      
        
          

        
    

 
    return (

      <div className="div-signup">
            <div className=""> 
            
                <h3>Signup</h3>
                
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
                <label>Mobile </label>
                <input  type="password"
                    required
                    className="form-control"
                    value={mobile}
                    onChange={(e)=>setMobile(e.target.value)}
            
                    />
                    
              </div>
              <div className="form-group mb-3"> 
                <label>notification Type </label>
                <select
              required
              className="form-control"
              value={notificationType}
              onChange={(e)=>setnotificationType(e.target.value)}>
                  <option>Email</option>
                  <option>Mobile</option>
                {/* get these from database */}
          </select>
                    
              </div>
            

             


              <div className="form-group mb-3"> 
                <input type="submit"  value="SIGN UP" className="btn btn-primary" />

              </div>
            </form>
            <div className=" mb-3"> 
            <span>Already have an account? <Link to="/">Sign In</Link></span>
              </div>
        </div>
      </div>
    
    );
  
}


export default Signup;