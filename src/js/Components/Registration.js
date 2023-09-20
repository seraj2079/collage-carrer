import React, { useState, useEffect} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import shortid, { generate } from 'shortid';
import database from '../../firebase';
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import FileResizer from 'react-image-file-resizer';
import { useParams } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import User from './User';
import DashboardMember from './DashboardMember';
import Dashboard from './Dashboard';
import { Load_AreaData, Load_CityData, Load_CollegeTypeData, Load_MemberData, Load_StateData } from '../Redux/Action';

let cityDataArray = [];
let areaDataArray = [];

let  myImgData=""


const initData = {
  id:"",
  mobile_number: "",
  college_name: "",
  state_name: "",
  stateid: "",
  city_name: "",
  cityid: "",
  area_name: "",
  areaid: "",
  college_adress: "",
  pincode: "",
  college_type: "",
  colltypeid: "",
  password:"",
  registeredby:"",
}
const initImgData={
  id:"",
  imgdata:""
}



const Registration = () => {



  const [state, setState] = useState(initData);
  const [userimg, setUserImg] = useState(initImgData);
  const [register,setRegister]=useState(false);
  const [update,setUpdate] = useState(false);


const {id}=useParams();
let matchid=id;

console.log("match--------",matchid);

const { LoadMember_Detail } = useSelector(state => state.cartreducer);
const { Loadstate } = useSelector(state => state.cartreducer);
const { Loadcity } = useSelector(state => state.cartreducer);
const { Loadarea } = useSelector(state => state.cartreducer);
const {Loadcollege } = useSelector(state => state.cartreducer);
const { Loaduserreg} = useSelector(state => state.cartreducer);
const { Loaduserreg_img } = useSelector(state => state.cartreducer);
console.log("LoadMember_Detail===========",LoadMember_Detail);
const dispatch = useDispatch();

useEffect(()=>{
  dispatch(Load_StateData());
  dispatch(Load_CityData());
  dispatch(Load_AreaData());
  dispatch(Load_CollegeTypeData());
  dispatch(Load_MemberData());
},[]);

useEffect(()=>{

  setState({...Loaduserreg[matchid]});
if(matchid)
{
  Object.keys(Loaduserreg_img[Loaduserreg[matchid].mobile_number]).map((id,index)=>{
    global.imgid=id;
 
    setUserImg({...(Loaduserreg_img[Loaduserreg[matchid].mobile_number])[id]});
  })
}
},[matchid]);



  
console.log("userimg------------",userimg);
  const handlechange = (e) => {
      const { name, value } = e.target;
      setState({ ...state, [name]: value });
  }

  const handleSubmit = (e) => {

      const idData = shortid.generate();
      state.id = idData;
      userimg.id = idData;
      state.password=idData;
      
      
      if(id) {
          
          loadupdateData()
      }
      else{
         
          dataInsert();
      }
  e.preventDefault();
  }

  const loadupdateData = () => {
    if (myImgData !== null) {
        userimg.imgdata = myImgData;
     
      updateData();
    }

    else {
        userimg.imgdata =  myImgData;
      updateData();
    }

  }
  let stnm=state.state_name;
  let ctnm=state.city_name;
  let arnm=state.area_name;
  let number=state.mobile_number;
  
      const updateData = () => {
          database.ref(`user_reg/${stnm}/${ctnm}/${arnm}/${id}`).set(state, (err) => {
              if (err) {
                  alert("registration not update");
              }
              else {
                  database.ref(`user_reg_img/${stnm}/${ctnm}/${arnm}/${number}/${global.imgid}`).set(userimg);
                  alert("registration updated");
                  setUpdate(true);
              }
          });
      }

     let loadDataArray=[];
       {
        Object.keys(Loaduserreg).map((id1,index1)=>{
          Object.keys(Loaduserreg[id1]).map((id2,index2)=>{
            loadDataArray.push(Loaduserreg[id1][id2]);
          })
        })
       }

    
      //  if(Loadmember){
      //   Object.keys(Loadmember).map((id,index)=>{
      //     Object.keys(Loadmember[id]).map((id1,index)=>{
      //       if(global.registered_membername === Loadmember[id][id1].member_name){
                 
      //       }
      //     })
      //   })
      // }
      
      
      const dataInsert = () => {
        state.registeredby = LoadMember_Detail.member_name; 
       database.ref(`user_reg/${stnm}/${ctnm}/${arnm}`).push(state, (err) => {

              if (err) {
                  alert("Registration Unsucessfull");
              }
              else {
                  database.ref(`user_reg_img/${stnm}/${ctnm}/${arnm}/${number}`).push(userimg);
                  alert("Registration Sucessfull "+state.password);
                  setRegister(true);
              }
          });
      
    }
  
  
  cityDataArray = [];
  Object.keys(Loadcity).map((id, index) => {
      if (state.state_name === Loadcity[id].state_name) {
          cityDataArray.push(Loadcity[id].city_name)
      }
  })

  areaDataArray = [];
  Object.keys(Loadarea).map((id, index) => {
      if (state.city_name === Loadarea[id].city_name) {
          areaDataArray.push(Loadarea[id].area_name)
      }
  })

// ---------id gen-------

  if(state.state_name){
      Object.keys(Loadstate).map((id,index)=>{
        if(state.state_name===Loadstate[id].state_name){
          state.stateid=Loadstate[id].stateid;
        }
      })
    }
   
  
    if(state.city_name){
      Object.keys(Loadcity).map((id,index)=>{
        if(state.city_name===Loadcity[id].city_name){
          state.cityid=Loadcity[id].cityid;
        }
      })
    }
  
    if(state.area_name){
      Object.keys(Loadarea).map((id,index)=>{
        if(state.area_name===Loadarea[id].area_name){
          state.areaid=Loadarea[id].areaid;
        }
      })
    }
  
    if(state.college_type){
      Object.keys(Loadcollege).map((id,index)=>{
        if(state.college_type===Loadcollege[id].college_type){
         state.colltypeid=Loadcollege[id].colltypeid;
        }
      })
    }
  
      const{college_name}=state;
      const {state_name,stateid}=state;
      const {city_name,cityid} =state;
      const {area_name,areaid} =state;
      const {college_type}=state;
      const {college_adress,pincode,mobile_number} =state;
      


  const imageLoad = (e) => {

      var fileInput = false;
      if (e.target.files[0]) {
          fileInput = true;
      }
      if (fileInput) {
          try {
              FileResizer.imageFileResizer(
                  e.target.files[0],
                  300,
                  300,
                  "JPEG",
                  200,
                  0,
                  (uri) => {
                      myImgData = uri;
                      userimg.imgdata = uri;
                  },
                  "base64",
                  300,
                  300
              );
          }
          catch (err) {
              console.log("error in image section");
          }
      }


  }

  
  return (
  

    <>

    <div>
      {
        global.registered_contact === "8109967168" ? <Dashboard/>:<DashboardMember/>
      }
    </div>

      <div className="container" style={{ marginTop: "140px" }}>
        <form
          onSubmit={handleSubmit}
          className="container border border-danger col-sm-offset-3 col-sm-5  mt-4"
          style={{ backgroundColor: '#ff00' }}>
          <h3 className="text-center text-danger mt-4">Registration</h3>

          <div className="container mb-3">

            <label className='text-danger'>Mobile Number</label>
            <input
              type="number"
              name="mobile_number"
              value={mobile_number ||""}
              className="form-control  mb-3"
              onChange={handlechange}
              placeholder="Enter the mobile number"
            />
          </div>


          <div className="container mb-3">
            <label className='text-danger'>CollegeName</label>
            <input
              type="text"
              name="college_name"
              value={ college_name ||""}
              className="form-control  mb-3"
              onChange={handlechange}
              placeholder="Enter the college name"
            />
          </div>

          <div className="container mb-4">
            <label className='text-danger'>Collegelogo</label>
           <input type="file"
           onChange={imageLoad}
           name="imgdata"
           
           placeholder="uplode your college logo"
           className="form-control  mb-3"
           />
          </div>


          <div className="container mb-3">
            <label className='text-danger'>College type</label>
            <select class="form-control mb-3" name="college_type" value={ college_type ||""} onChange={handlechange} >
              <option selected> Select college type</option>
              {
                Object.keys(Loadcollege).map((id, index) => {
                  return (
                    <option>{Loadcollege[id].college_type}</option>
                  )


                })
              }
            </select>

          </div>



          <div className="container mb-3">
            <label className='text-danger'>State Name</label>
            <select class="form-control mb-3" name="state_name" value={state_name ||""} onChange={handlechange} >
              <option selected> Select State Name</option>
              {
                Object.keys(Loadstate).map((id, index) => {
                  return (
                    <option>{Loadstate[id].state_name}</option>
                  )


                })
              }
            </select>

          </div>


          <div className="container mb-3">
            <label className='text-left text-danger'>City Name</label>
            <select class="form-control mb-3" name="city_name" value={ city_name ||""} onChange={handlechange}>
              <option selected> Select City Name</option>
              {
                Object.keys(cityDataArray).map((id, index) => {
                  return (
                    <option>{cityDataArray[id]}</option>
                  )


                })
              }
            </select>

          </div>

          <div className="container mb-3">
            <label className='text-danger'>Area</label>
            <select class="form-control mb-3" name="area_name" value={area_name ||""} onChange={handlechange} >
              <option selected> Select area</option>
              {
                Object.keys(areaDataArray).map((id, index) => {
                  return (
                    <option>{areaDataArray[id]}</option>
                  )


                })
              }
            </select>

          </div>

          <div className="container mb-3">
            <label className='text-danger'>College address</label>
            <input
              type="text"
              name="college_adress"
              value={college_adress ||""}
              className="form-control  mb-3"
              onChange={handlechange}
              placeholder="Enter the college address"
            />
          </div>

          <div className="container mb-3">
            <label className='text-danger'>College Area Pincode</label>
            <input
              type="text"
              name="pincode"
              value={pincode ||""}
              className="form-control  mb-3"
              onChange={handlechange}
              placeholder="Enter area pincode"
            />
          </div>


          <div className="container text-center">
            <button
              type="submit"
              className="btn btn-success text mb-4"
              
            >
              {id?  "update":"register"}
            </button>
          </div>
        </form>
      </div>

            </>
  )
}
export default Registration;
