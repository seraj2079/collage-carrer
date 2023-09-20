import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import shortid from 'shortid';
import { Button } from 'react-bootstrap';
import database from '../../firebase';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { Load_StateData,Load_CityData } from '../Redux/Action';
import Dashboard from '../Components/Dashboard';
import AreaRegis from './AreaRegis';





const initData = {
  state_name: "",
  stateid: "",
  city_name: "",
  cityid: ""
}
const CityRegis = () => {
  const [state,setState] =useState(initData);
  const [stateData,setStateData] = useState({});
  const [register,setRegister]=useState(false);
  const [update,setUpdate]=useState(false);
  const {id}=useParams();
  let matchid=id;

  const { Loadstate } = useSelector(state => state.cartreducer);
  const { Loadcity } = useSelector(state => state.cartreducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(Load_StateData());
    Object.keys(Loadstate).map((id,index)=>{
      if(matchid===id)
      {
         setState({...Loadstate[id]})
      }
 })
  

    dispatch(Load_CityData());
    Object.keys(Loadcity).map((id,index)=>{
      if(matchid===id)
      {
         setState({...Loadcity[id]})
      }
 })
  }, [id]);

  
  const cityid1= shortid.generate();

  const handleChange =(e)=>{
      const {name,value}=e.target;
      setState({...state,[name]:value});
  
  }
  
  if(state.state_name)
  {
      Object.keys(Loadstate).map((id,index)=>{
       if(state.state_name === Loadstate[id].state_name)
       {
          state.stateid=Loadstate[id].stateid;
       }
      })
  }
      const handleSubmit =(e)=>{
      
      if(id)
      {
       loadupadteData()
      }
      else{
        const cityid1 = shortid.generate();
        const stateid1 = shortid.generate();
            
            state.cityid=cityid1;
        dataInsert()
      }
       
     
       e.preventDefault();
     }
    
     const loadupadteData=()=>{
      if (id){
        state.cityid=cityid;
        updateData()
      }
    
     }
     
     const updateData = () => {
      database.ref(`city_table/${id}`).set(state, (err) => {
        if (err) {
          alert("data not update" + err);
        }
        else {
          alert("data update");
          setUpdate(true);
          
        }
      
  
      })
    }
    
 const dataInsert=()=>{
  
  database.ref("city_table").push(state,(err)=>{
      if(err) {
          alert("City is not register");
      }
      else{
          alert("City is register");
          setRegister(true)
      }
  
  })
  }
   
  
  //  useEffect( () => {
    //   database.ref("state_table").on("value",(snapshot)=>
    //   {
    //       if(snapshot.val()!=null)
    //       {
    //           setStateData({...snapshot.val()});
    //       }
    //       else{
    //           setStateData({});
    //       }
    //   }
  
    //   )
    //  },
  
    // [] );  
  
 const {cityid,city_name,}=state;
 const {stateid,state_name}=state;

  return (
    <>{
      register ? <><AreaRegis/></>:
    <>
    <Dashboard/>
      <div className="container" style={{ marginTop: "170px" }}>
        <form
          onSubmit={handleSubmit}
          className="container border border-danger col-sm-offset-2 col-sm-4  mt-4"
          style={{ backgroundColor: '#0B0B45'  }}
        >
          <h3 className="text-center text-danger mt-4">City  Registration</h3>
          <div className="container mb-3">
            <select class="form-control mb-3" name="state_name" onChange={handleChange}value={state_name ||""} >
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
            <input
              type="text"
              name="city_name"
              className="form-control  mb-3"
              value={city_name ||""}
              onChange={handleChange}
              placeholder="Enter the city name"
            />
          </div>
           <div className="container text-center">
            <button
              type="submit"
              className="btn btn-warning text mb-4"
            >
              {id?"update":"register"}
            </button>
          </div>
        </form>
      </div>


    </>
    }</>
  )
}

export default CityRegis;
