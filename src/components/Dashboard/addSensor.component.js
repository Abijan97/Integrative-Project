
import React, {useState} from 'react';
//send http request to backend (connect to backend)
import axios from 'axios';
//alert



const CreateSensor=()=>{
    
        
         


        const [sensorType,setSensorType]=useState("");
        const [sensorId,setSensorId]=useState("");
        const [thresholdValue,setThresholdvalue]=useState("");
        const [location,setLocation]=useState("");
     

        const changeonClick = e => {
            e.preventDefault();

            const formData=new FormData();

            //connect database
            formData.append("sensorType",sensorType);
            formData.append("sensorId",sensorId);
            formData.append("thresholdValue",thresholdValue);
            formData.append("location",location);
          

          
            //add to database

            // axios
            // .post('http://localhost:5001/agents/add',formData)
            // .then(res=>console.log(res.data))
            // .catch((err)=>{
            //     console.log(err); 
               
            
        
            

            sensorType('');
            setSensorId('');
            setThresholdvalue('');
            setLocation('');
           
        
        };

      
        
          

        
    

    
        return(
    
          


            <form onSubmit={changeonClick}  encType='multipart/form-data'>
              <div className="form-group mb-3"> 
                <label>Sensor Type </label>
                <select
              required
              className="form-control"
              value={sensorType}
              onChange={(e)=>setSensorType(e.target.value)}>
                  <option>Temperature</option>
                  <option>Humidity</option>
                {/* get these from database */}
          </select>
              
              </div>

              <div className="form-group mb-3"> 
                <label>Sensor Id </label>
                <input  type="text"
                    required
                    className="form-control"
                    value={setSensorId}
                    onChange={(e)=>setSensorId(e.target.value)}
            
                    />
                
              </div>

            
              <div className="form-group mb-3"> 
                <label>threshold Value </label>
                <input  type="text"
                    required
                    className="form-control"
                    value={thresholdValue}
                    onChange={(e)=>setThresholdvalue(e.target.value)}
            
                    />
                    
              </div>
            
              <div className="form-group mb-3"> 
                <label>Location </label>
                <input  type="text"
                    required
                    className="form-control"
                    value={location}
                    onChange={(e)=>setLocation(e.target.value)}
            
                    />
            
              </div>
             


              <div className="form-group mb-3"> 
                <input type="submit"  value="Submit" className="btn btn-primary" />

              </div>
            </form>

       
        )
    }


export default CreateSensor;