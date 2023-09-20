import React, { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import shortid from "shortid";
import database from '../../firebase';
import logo from '../img/logo.png';
import { Load_AreaData, Load_StateData, Load_CityData, Load_RegistrationData,Load_AdminData } from "../Redux/Action";
import { } from "../Redux/Action";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import DashboardOwner from '../Components/DashboardOwner'
import Dashboard from "../Components/Dashboard";

let cityDataArray = [];
let areaDataArray = [];

const i = 0;
global.registered_contact = 0;
global.registered_contactid = 0;
global.registered_state = 0;
global.registered_city = 0;
global.registered_area = 0


const initialData = {
  member_number: "",
  pass: "",
  state_name: "",
  stateid: "",
  city_name: "",
  cityid: "",
  area_name: "",
  areaid: ""
}


const SignIn = () => {
  const [state, setstate] = useState(initialData);
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [login,setLogin] =useState(false);
  const loginuser=[];


  // const[login,setLogin]=useState({});
  const { Loadstate } = useSelector(state => state.cartreducer);
  const { Loadcity } = useSelector(state => state.cartreducer);
  // console.log(('............................'),Loadcity)
  const { Loadarea } = useSelector(state => state.cartreducer);
  const { Loaduserreg } = useSelector(state => state.cartreducer)
  const { Loadadmin } = useSelector(state => state.cartreducer)


  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(Load_StateData());
    dispatch(Load_CityData());
    dispatch(Load_AreaData());
    dispatch(Load_AdminData());
  }, []);

  const errors = {
    uname: "invalid username"
  };


  const handleChange = (e) => {
    const { name, value } = e.target;
    setstate({ ...state, [name]: value });
  }


  cityDataArray = [];
  Object.keys(Loadcity).map((id, index) => {
    // console.log('citydata---------', cityDataArray)   
    if (state.state_name === Loadcity[id].state_name) {
      cityDataArray.push(Loadcity[id].city_name)
      console.log('citydataArray-------------', cityDataArray)
    }
  })


  areaDataArray = [];
  Object.keys(Loadarea).map((id, index) => {
    if (state.city_name === Loadarea[id].city_name) {
      areaDataArray.push(Loadarea[id].area_name)
    }
  })


  const handleSubmit = (event) => {
    dispatch(Load_RegistrationData(state.state_name,state.city_name,state.area_name));
    dispatch(Load_AdminData(state.state_name,state.city_name,state.area_name));
    

    event.preventDefault();
    var { uname, pass ,state_name,city_name,area_name} = document.forms[0];
    Object.keys(Loaduserreg).map((id, index) => {

      // Compare user info
      if (Loaduserreg) {
        if (
            Loaduserreg[id].state_name === state_name.value && 
            Loaduserreg[id].city_name === city_name.value && 
            Loaduserreg[id].area_name === area_name.value && 
            Loaduserreg[id].mobile_number === uname.value && 
            Loaduserreg[id].password === pass.value) {
          setIsSubmitted(true);
          global.registered_contact = Loaduserreg[id].mobile_number
          global.registered_contactid = Loaduserreg[id].password
          global.registered_state = Loaduserreg[id].state_name
          global.registered_city = Loaduserreg[id].city_name
          global.registered_area = Loaduserreg[id].area_name
          alert('login', Loaduserreg[id].password);
          dispatch(Load_RegistrationData(state.state_name,state.city_name,state.area_name));
        }

      }
      else {
        // Username not found
        alert('incorrect number')
        setErrorMessages({ name: "username", message: errors.username });
        alert("Incorrect Mobile Number");
      }

    }
    )

    Object.keys(Loadadmin).map((id, index) => {

      // Compare user info
      if (Loadadmin) {
        if (
            Loadadmin[id].state_name === state_name.value && 
            Loadadmin[id].city_name === city_name.value && 
            Loadadmin[id].area_name === area_name.value && 
            Loadadmin[id].mobile_number === uname.value && 
            Loadadmin[id].password === pass.value) {
          setLogin(true);
          global.registered_contact = Loadadmin[id].mobile_number
          global.registered_contactid = Loadadmin[id].password
          global.registered_state = Loadadmin[id].state_name
          global.registered_city = Loadadmin[id].city_name
          global.registered_area = Loadadmin[id].area_name
          alert('login', Loadadmin[id].password);
          dispatch(Load_AdminData(state.state_name,state.city_name,state.area_name));
        }

      }
      else {
        // Username not found
        alert('incorrect number')
        setErrorMessages({ name: "username", message: errors.username });
        alert("Incorrect Mobile Number");
      }

    }
    )

  };

  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );

  const renderForm =
    (
      <>
        <div className="container" style={{ marginTop: "150px" }}>
          <form onSubmit={handleSubmit}
            className="container border border-danger
            col-sm-offset-1 col-sm-4 mt-4 "
            style={{ backgroundColor: "#0B0B45", borderRadius: "8px" }}>


            <div className="container mt-4 text-center">
              <img className="rounded-circle border border-light m-2 text-cneter" src={logo}
                style={{ height: "100px", widht: ":80px", borderRadius: "30px" }} />
            </div>


            <h3 className="text-center text-warning ">
              SignIn
            </h3>

            <div className="container mb-3">
              <select class="form-control mb-3" name="state_name"  onChange={handleChange}>
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
              <select class="form-control mb-3" name="city_name" onChange={handleChange} >
                <option selected> Select City Name</option>
                {
                  Object.keys(cityDataArray).map((id, index) => {
                    console.log('cityDataarray---------------',cityDataArray)
                    return (
                      <option>{cityDataArray[id]}</option>
                    )
                  })
                }
              </select>

            </div>

            <div className="container mb-3">

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
            <div className="container mb-4">
              <input
                type="text"
                name="uname"
                className="form-control"
                placeholder="Mobile no." />
              {renderErrorMessage("uname")}

            </div>

            <div className="container mb-4">
              <input
                type="password" 
                name="pass"
                className="form-control"
                placeholder="Password" />
              {renderErrorMessage("pass")}

            </div>


            <div className="container text-center">
                 <button
                type="submit"
                className="btn btn-warning text mb-4">
                Log In
              </button>
              



            </div>
            <div className="container text-center">
              <NavLink to="MemberLogin">  <h4 className="text-center text-warning mb-8" style={{ marginLeft: "180px" }}>
                <label>  Register </label>
              </h4></NavLink>
            </div>

          </form>

        </div>
      </>
    );

    return(
      <div>
      {
        isSubmitted ?
          <div>
            {
            <DashboardOwner/>
            
            }
          </div>
          :
          login ?
          <div>
            {
          
            <Dashboard/>
            }
          </div>
          :
          <div className="app">
            <div className="login-form">
              {renderForm}
            </div>
          </div>
      }
    </div>
    )
}

export default SignIn;