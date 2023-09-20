

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { Load_AreaData, Load_CityData, Load_StateData,Load_RegistrationData, Load_RegistrationImage } from "../Redux/Action";
import { Button } from 'react-bootstrap';
import { NavLink } from "react-router-dom";
import database from '../../firebase';
import Dashboard from "./Dashboard";
import "../../css/USER.css"

const initData = {
  state_name: "",
  stateid: "",
  city_name: "",
  cityid: "",
  area_name: "",
  areaid: ""

}
const User = () => {


  //================data call from store====================
  const [state, setState] = useState(initData);
  const { Loadstate } = useSelector(state => state.cartreducer);
  const { Loadcity } = useSelector(state => state.cartreducer);
  const { Loadarea } = useSelector(state => state.cartreducer);
  const { Loaduserreg } = useSelector(state => state.cartreducer);
  const { Loaduserreg_img } = useSelector(state => state.cartreducer);

  console.log("Loadregis-=========", Loaduserreg);
  console.log("Loadregisimg-=========", Loaduserreg_img);


  let loadDataArray = [];
  {
    Object.keys(Loaduserreg).map((id1, index1) => {
      Object.keys(Loaduserreg[id1]).map((id2, index2) => {
        loadDataArray.push(Loaduserreg[id1][id2]);
      })
    })
  }
  const dispatch = useDispatch();
  useEffect(() => {

    dispatch(Load_StateData());
    dispatch(Load_CityData());
    dispatch(Load_AreaData());


  }, [dispatch])


  const handleChange = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  }


  let cityDataArray = [];
  Object.keys(Loadcity).map((id, index) => {
    if (state.state_name === Loadcity[id].state_name) {
      cityDataArray.push(Loadcity[id].city_name)
    }
  })


  let areaDataArray = [];
  Object.keys(Loadarea).map((id, index) => {
    if (state.city_name === Loadarea[id].city_name) {
      areaDataArray.push(Loadarea[id].area_name)
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

  if (state.area_name) {
    Object.keys(Loadarea).map((id, index) => {
      if (state.area_name === Loadarea[id].area_name) {
        state.areaid = Loadarea[id].areaid;
      }
    })
  }

  // =================delete section===============================

  const onDelete = (id1, stnm, ctnm, arnm,number) => {
    database.ref(`user_reg/${stnm}/${ctnm}/${arnm}/${id1}`).remove((err) => {
      if (err) {
        alert("data not deleted");
      }
      else {
        database.ref(`user_reg_img/${stnm}/${ctnm}/${arnm}/${number}/${id1}`).remove();
        alert("data deleted");
      }
    })
  }
  const handleSubmit = (e) => {
    dispatch(Load_RegistrationData(state.state_name, state.city_name, state.area_name));
    dispatch(Load_RegistrationImage(state.state_name, state.city_name, state.area_name));

  }

  const imageLoad = (id,number) => (

    Object.keys(Loaduserreg_img[number]).map((id1, index) => {
      console.log(id, number)
      global.imgData = Loaduserreg_img[number][id1].imgdata;

      return (
        <img src={global.imgData} height="40" width="40" />
      )
    })
  )
  

  
  return (
    <>
      <Dashboard />
      <div className='container' style={{ marginTop: "50px", flexDirection: "row" }}>
        <div className="row">
          <div className="container mb-3 col-sm-2">
            <label className='text-danger'>State Name</label>
            <select class="form-control mb-3 " name="state_name" onChange={handleChange} >
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


          <div className="container mb-3 col-sm-2">
            <label className='text-left text-danger'>City Name</label>
            <select class="form-control mb-3" name="city_name" onChange={handleChange}>
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

          <div className="container mb-3 col-sm-2">
            <label className='text-danger'>Area</label>
            <select class="form-control mb-3" name="area_name" onChange={handleChange} >
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
          <div className="container mb-3 col-sm-2" style={{ marginTop: "28px" }}>
            <button
              type="button"
              className="btn btn-success text "
              onClick={() => {
                handleSubmit()
              }}>
              Search
            </button>
          </div>
        </div>
      </div>
      <div className='container' style={{ marginTop: "50px", flexDirection: "row" }}>
        <div className="row">
          <h3 className="text text-center text-danger">Registration Detail </h3>

          <div className="container mb-2 col-sm-2" style={{ marginTop: "20px", marginRight: "20px" }}>
            <input
              type="text"
              name="search"
              className="form-control"
              onChange={handleChange}
              placeholder="Search" />
           </div>
        </div>
      </div>

      <div className="container border border-danger mb-2 mt-4"
        style={{ backgroundColor: "#0B0B45", borderRadius: '12px', fontSize: "14px" }}>
        <table id="table" className="container text-light mt-4 mb-2 mt-8">
          <thead className="text-center">
            <tr>
            <td className="User">Sno</td>
            <td className="User">Id</td>
            <td className="User">Mobile Number</td>
            <td className="User">College Name</td>
            <td className="User">Type</td>
            <td className="User">State Name</td>
            <td className="User">City Name</td>
            <td className="User">Area Name</td>
            <td className="User">College Address</td>
            <td className="User">Pincode</td>
            <td className="User">Image</td>
            <td className="User">Action</td>
          
            </tr>
          </thead>
          <tbody>
            {((Loaduserreg.length != 0 && Loaduserreg_img.length != 0)) ? <>{
              Object.keys(Loaduserreg).map((id1, index1) => {

                return (
                  <tr className="text-center" key={[id1]}>
                    <td scope="row" className="User">{index1 + 1}</td>
                    <td className="User">{Loaduserreg[id1].id}</td>
                    <td className="User">{Loaduserreg[id1].mobile_number}</td>
                    <td className="User">{Loaduserreg[id1].college_name}</td>
                    <td className="User">{Loaduserreg[id1].college_type}</td>
                    <td className="User">{Loaduserreg[id1].state_name}</td>
                    <td className="User">{Loaduserreg[id1].city_name}</td>
                    <td className="User">{Loaduserreg[id1].area_name}</td>
                    <td className="User">{Loaduserreg[id1].college_adress}</td>
                    <td className="User">{Loaduserreg[id1].pincode}</td>
                
                   <td className="tdata">{imageLoad(Loaduserreg[id1].id,Loaduserreg[id1].mobile_number)}  </td>
                
                    <td className="tdata">
                      <NavLink to={`/edit_UserReport/${id1}`}>
                        <Button className='m-2 btn btn-warning text text-light'>
                          Edit
                        </Button>
                      </NavLink>
                      <Button className="m-2 btn btn-danger text text-light"
                        onClick={() => onDelete(id1,Loaduserreg[id1].state_name, Loaduserreg[id1].city_name, Loaduserreg[id1].area_name,Loaduserreg_img[id1].number)}>
                        Delete
                      </Button>
                    </td>
                  </tr>
                );

             }
              )

            }</> :
              <>Pls Load</>
            }

          </tbody>

        </table>

      </div>
    </>
  );
}
export default User;
