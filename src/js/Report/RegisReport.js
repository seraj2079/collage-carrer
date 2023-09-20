import React,{useEffect}from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '../../css/dashboardcss.css';
import { useSelector,useDispatch } from 'react-redux';
import{ Load_RegisMemberData } from '../Redux/Action';
import DashboardMember from '../Components/DashboardMember';
import database from '../../firebase';
import "../../css/RegisCss.css"

const User= () => {

const dispatch = useDispatch();

const{Loadregismember}  = useSelector(state => state.cartreducer);
 console.log("Loadregismember==ui===========",Loadregismember );

useEffect(()=>{
  dispatch(Load_RegisMemberData());
  
},[dispatch])

let loadDataArray=[];


Object.keys(Loadregismember).map(key=>{
    Object.keys(Loadregismember[key]).map(key2=>{
      Object.keys(Loadregismember[key][key2]).map(key3=>{
        Object.keys(Loadregismember[key][key2][key3]).map(id =>{
   // ((Loadregismember[key][key2][id].registeredby===global.registered_membername)) ? loadDataArray.push({key, value: (Loadregismember[key][key2][id])}) :console.log("")
   loadDataArray.push(Loadregismember[key][key2][key3][id]);
   
        })
        })
    })
  })

  



    return (
        <>

                <DashboardMember/>

            
    <h3 className="text-center text-danger">Registration Detail</h3>
    <div className="container col-lg-4 "
      style={{ backgroundColor: '#0B0B45', borderRadius: '10px' }}>
      <table  id="table" style={{justifyContent:'center',width:"100%"}}>
        <thead style={{justifyContent:'center'}}>
        
          <tr>
            <td className="Regis">Sno</td>
            <td className="Regis">Id</td>
            <td className="Regis">Mobile Number</td>
            <td className="Regis">College Name</td>
            <td className="Regis">Type</td>
            <td className="Regis">State Name</td>
            <td className="Regis">City Name</td>
            <td className="Regis">Area Name</td>
            <td className="Regis">College Address</td>
            <td className="Regis">pin code</td>
            
          
          </tr>
        </thead>
        <tbody>
          {
             Object.keys(loadDataArray).map((id1, index) => 
               {
                console.log("loadDataArray[id1]",loadDataArray[id1]);
             return (
                           
                  <tr className="center" key={id1}>
                  <td className="Regis" scope='="row'>{index+ 1}</td>
                  <td className="Regis">{loadDataArray[id1].id}</td>
                  <td className="Regis">{loadDataArray[id1].mobile_number}</td>
                  <td className="Regis">{loadDataArray[id1].college_name}</td>
                  <td className="Regis">{loadDataArray[id1].college_type}</td>
                  <td className="Regis">{loadDataArray[id1].state_name}</td>
                  <td className="Regis">{loadDataArray[id1].city_name}</td>
                  <td className="Regis">{loadDataArray[id1].area_name}</td>
                  <td className="Regis">{loadDataArray[id1].college_adress}</td>
                  <td className="Regis">{loadDataArray[id1].pincode}</td>
                 
                </tr>
              );
            })
          } 
          
        </tbody>

      </table>
    </div>
     </>  
   )
  
 }  
export default User;
