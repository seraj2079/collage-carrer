import React,{useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import shortid from "shortid";
import database from '../../firebase';
import logo from '../img/logo.png';

 const initialData={
    member_name:"",
    memberid:"",
    member_number:"",
    member_address:""
 }
const Profile =() =>{
const [state,setstate] =useState(initialData);

const handleChange =(e)=>{
    const {name,value}=e.target;
    setstate({...state,[name]:value});

}
const handleSubmit =(e)=>{
    const idData = shortid.generate();
    state.memberid=idData;

e.preventDefault();

database.ref("Profile_table").push(state,(err)=>{
    if(err) {
        alert("Sign up is not successfull");
    }
    else{
        alert("Sign Up successed");
    }

})
}

    return(
        <>
        <div className="container" style={{marginTop:"150px"}}>
            <form onSubmit={handleSubmit}
            className="container border border-danger
            col-sm-offset-1 col-sm-4 mt-4"
            style={{backgroundColor:"#0B0B45", borderRadius:"20px"}}>

            <div className="container mt-4 text-center">
                  <img className="rounded-circle border border-light m-2 text-cneter" src={logo} 
                    style={{height:"100px",widht:":80px",borderRadius:"30px"}}/>
            </div>


                <h3 className="text-center text-warning ">
                   Profile
                </h3>

                <div className="container mb-4">
                    <input  
                    type="text"
                    name="member_name"
                    className="form-control"
                    onChange={handleChange}
                    placeholder="Enter the member name"/>
                
                </div>
                

                <div className="container mb-4">
                    <input  
                    type="text"
                    name="member_number"
                    className="form-control"
                    onChange={handleChange}
                    placeholder="Enter the mobile no."/>
                
                </div>
                

                <div className="container mb-4">
                    <input  
                    type="text"
                    name="member_address"
                    className="form-control"
                    onChange={handleChange}
                    placeholder="Enter the address."/>
                
                

                <div className="container mb-4"></div>
                 <input id="upload" type="file" 
                  onchange="readURL(this);"
                  className="form-control border-2"
                  placeholder=" upload image"></input>
                </div>
          <div  className="container text-center">
            <button
            type="submit"
            className="btn btn-warning text mb-4"> 
              Update
            </button> 
           </div>
               
            </form>

        </div>
        </>
    );
}

export default Profile;