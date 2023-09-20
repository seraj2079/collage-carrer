import React, { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import shortid from 'shortid';
import database from '../../firebase';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { Load_StateData, Load_CityData, Load_AreaData } from '../Redux/Action';
import { useParams } from 'react-router-dom';
import AreaReport from "../Report/AreaReport";
import Dashboard from '../Components/Dashboard';


const initData = {
  state_name: "",
  stateid: "",
  city_name: "",
  cityid: "",
  area_name: "",
  areaid: ""
}

let cityDataArray = [];

const AreaRegis = () => {

  const [state, setState] = useState(initData);
  const [register, setRegister] = useState(false);
  const [update, setUpdate] = useState(false);
  const { id } = useParams();
  let matchid = id;

  const { Loadstate } = useSelector(state => state.cartreducer);
  const { Loadcity } = useSelector(state => state.cartreducer);
  const { Loadarea } = useSelector(state => state.cartreducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(Load_StateData());
    Object.keys(Loadstate).map((id, index) => {
      if (matchid === id) {
        setState({ ...Loadstate[id] })
      }
    })

    dispatch(Load_CityData());
    Object.keys(Loadcity).map((id, index) => {
      if (matchid === id) {
        setState({ ...Loadcity })
      }
    })

    dispatch(Load_AreaData());
    Object.keys(Loadarea).map((id, index) => {
      if (matchid === id) {
        setState({ ...Loadarea[id] })
      }
    })

  }, [id]);



  const stateid1 = shortid.generate();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  }

  const handleSubmit = (e) => {

    
    
    if (id) {
      state.cityid=cityid;
      state.stateid=stateid;
      state.areaid= areaid;
        updateData();

      updateData()
    }
    else {
      const areaid1=shortid.generate();
          state.areaid=areaid1;
     
      dataInsert()
    }
    e.preventDefault();
  }

    const dataInsert = () => {
    database.ref("area_table").push(state, (err) => {
      if (err) {
        alert("Area Not Register");
      }
      else {
        alert("Area Register");
        setRegister(true);
      }
    });
  }
  

  
    const updateData = () => {
      database.ref(`area_table/${id}`).set(state, (err) => {
          if (err) {
              alert("City not update");
          }
          else {
              alert("City updated");
              setUpdate(true);
          }
      })
  }

// ========================id call====================
  cityDataArray = [];
  Object.keys(Loadcity).map((id, index) => {
    if (state.state_name === Loadcity[id].state_name) {
      cityDataArray.push(Loadcity[id].city_name)
    }
  })


  if (state.state_name) {
    Object.keys(Loadstate).map((id, index) => {
      if (state.state_name === Loadstate[id].state_name) {
        state.stateid = Loadstate[id].stateid;
      }
    })
  }


  if (state.city_name) {
    Object.keys(Loadcity).map((id, index) => {
      if (state.city_name === Loadcity[id].city_name) {
        state.cityid = Loadcity[id].cityid;
      }
    })
  }


  const { state_name, stateid } = state;
  const { city_name, cityid } = state;
  const { area_name, areaid } = state;

  return (
    <>
      {
        register ? <><Dashboard /></> :
        update ?<><AreaReport/></> :
          <>
            <Dashboard />
            <div className="container" style={{ marginTop: "170px" }}>
              <form
                onSubmit={handleSubmit}
                className="container border border-danger col-sm-offset-2 col-sm-4  mt-4"
                style={{ backgroundColor: '#0B0B45', borderRadius: '10px' }}>

                <h3 className="text-center text-danger mt-4">Area Registration</h3>

                <div className="container mb-3">
                  <select className="form-control mb-3 mt-4" name="state_name" onChange={handleChange} value={state_name || ""} >
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
                  <select className="form-control mb-3" name="city_name" onChange={handleChange} value={city_name || ""} >
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
                  <input
                    type="text"
                    name="area_name"
                    value={area_name || ""}
                    className="form-control  mb-3"
                    onChange={handleChange}
                    placeholder="Enter Area"
                  />
                </div>

                <div className="container text-center">
                  <button
                    type="submit"
                    className="btn btn-warning text mb-4">
                    {id ? "update" : "register"}

                  </button>
                </div>
              </form>
            </div>

          </>
      }
    </>
  )
}

export default AreaRegis;


// import React,{useState,useEffect} from 'react'
// import { useParams } from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle.min.js';
// import shortid, { generate } from 'shortid';
// import database from '../../firebase';
// import Dashboard from '../Components/Dashboard';
// import { useDispatch } from 'react-redux';
// import { useSelector } from 'react-redux';
// import { Load_StateData,Load_CityData,Load_AreaData } from '../Redux/Action';





// let cityDataArray=[];


// const initData = {
//   state_name: "",
//   stateid: "",
//   city_name: "",
//   cityid: "",
//   area_name:"",
//   areaid:""
// }


  
 
  
//   const AreaRegis = () => {
  
//     const [state, setState] = useState(initData);
//     const[register,setRegister]=useState(false);
//     const [update,setUpdate] =useState(false);
//     const {id}=  useParams();

//     const { Loadstate } = useSelector(state => state.cartreducer);
//     const { Loadcity } = useSelector(state => state.cartreducer);
//     const { Loadarea } = useSelector(state => state.cartreducer);
//     const dispatch = useDispatch();
   
//     let matchid=id;
   
//     useEffect(() => {
//       dispatch(Load_StateData());
//       dispatch(Load_CityData());
     
//       dispatch(Load_AreaData());
//       Object.keys(Loadarea).map((id,index)=>{
//         if(matchid===id)
//         {
//            setState({...Loadarea[id]})
//         }
//    })
//     }, [id]);
  





//     // const {state_name,stateid}=state;
//     // const{city_name,cityid}=state;
//     const{area_name,areaid}=state;
  







//   cityDataArray=[];
//       Object.keys(Loadcity).map((id,index)=>{
//      if(state.state_name===Loadcity[id].state_name)
//     {
//       cityDataArray.push(Loadcity[id].city_name)
//     }
//   })

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setState({ ...state, [name]: value });
//   }

//   if(state.state_name){
//     Object.keys(Loadstate).map((id,index)=>{
//       if(state.state_name===Loadstate[id].state_name){
//         state.stateid=Loadstate[id].stateid;
//       }
//     })
//   }
 

//   if(state.city_name){
//     Object.keys(Loadcity).map((id,index)=>{
//       if(state.city_name===Loadcity[id].city_name){
//         state.cityid=Loadcity[id].cityid;
//       }
//     })
//   }

//   const handleSubmit = (e) => {

//     const idData = shortid.generate();
//     state.areaid= idData;
//     // state.stateid=stateid;
//     // state.cityid=cityid;
//     state.areaid=areaid;

 

    
//     if(id)
//     {
//      loadupadteData()
//     }
//     else{
//       dataInsert()
//     }
     
   
//      e.preventDefault();
//    }
  
//    const loadupadteData=()=>{
//     if (id){
//       updateData()
//     }
  
//    }
   
//    const updateData = () => {
//     database.ref(`area_table/${id}`).set(state, (err) => {
//       if (err) {
//         alert("data not update" + err);
//       }
//       else {
//         alert("data update");
//         setUpdate(true);
        
//       }
    

//     })
//   }


  
// const dataInsert=()=>{
//     database.ref("area_table").push(state, (err) => {
//       if (err) {
//         alert("data not insert")
//       }
//       else {
//         alert("data inserted")
//         setRegister(true);
//       }
//     })


//   }

  
//   return (
//     <>{
//       register?<><Dashboard/></>:
//    <>
// <Dashboard/>
   
// <div className="container" style={{ marginTop: "170px" }}>
//         <form
//           onSubmit={handleSubmit}
//           className="container border border-danger col-sm-offset-2 col-sm-4  mt-4"
//           style={{ backgroundColor: '#0B0B45'}}
//         >
//           <h3 className="text-center text-danger">Area Registration</h3>
    
         
//           <div className="container mb-3">
//             <select class="form-control mb-3" name="state_name" onChange={handleChange} >
//               <option selected> Select State Name</option>
//               {
//                 Object.keys(Loadstate).map((id, index) => {
//                   return (
//                     <option>{Loadstate[id].state_name}</option>
//                   )


//                 })
//               }
//             </select>

//           </div>


//           <div className="container mb-3">
//             <select class="form-control mb-3" name="city_name" onChange={handleChange}  >
//               <option selected> Select City Name</option>
//               {
//                 Object.keys(cityDataArray).map((id, index) => {
//                   return (
//                     <option>{cityDataArray[id]}</option>
//                   )


//                 })
//               }
//             </select>

//           </div>

//             <div className="container mb-3">
//             <input
//               type="text"
//               name="area_name"
//               className="form-control  mb-3"
//               value={area_name ||""}
//               onChange={handleChange}
//               placeholder="Enter the city name"
//             />
//           </div>


//           <div className="container text-center">
//             <button
//               type="submit"
//               className="btn btn-warning text mb-4"
//             >
//               {id?"update":"register"}
//             </button>
//           </div>
//         </form>
//       </div>
   
//    </>
//    }</>
//   )
// }

// export default AreaRegis;
