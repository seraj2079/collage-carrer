import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { Load_CityData } from '../Redux/Action';
import { Button } from 'react-bootstrap';
import database from '../../firebase';
import { Link } from 'react-router-dom'
import Dashboard from '../Components/Dashboard';
import "../../css/City.css"

const CityReport = () => {

  // ===========data call from store==============

  const { Loadcity } = useSelector(state => state.cartreducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(Load_CityData());
  }, []);

  // console.log("City Data----", Loadcity)

  // ==============Delete Section============

  const onDelete = (id) => {

    database.ref(`city_table/${id}`).remove((err) => {
      if (err) {
        alert("data not deleted");
      }
      else {
        alert("data deleted");
      }
    })
  }

  return (
    <>
    <Dashboard/>
    <div className="container border border-danger "
      style={{ backgroundColor: '#0B0B45', borderRadius: '10px' }}>
      <table id="id" className="container text-light mt-10">
        <thead style={{backgroundColor:"#0B0B45"}}>
          <tr className='text-center'>
            <td className='city'>Sno</td>
            <td className='city'>State Id</td>
            <td className='city'>State Name</td>
            <td className='city'>City Id</td>
            <td className='city'>City Name</td>
            <td className='city'>Action</td>
          </tr>
        </thead>
        <tbody>
          {
            Object.keys(Loadcity).map((id, index) => {
              return (
                <tr key={id} className="text-center">
                  <td scope="row" className='city'>{index + 1}</td>
                  <td className='city'>{Loadcity[id].stateid}</td>
                  <td className='city'>{Loadcity[id].state_name}</td>
                  <td className='city'>{Loadcity[id].cityid}</td>
                  <td className='city'>{Loadcity[id].city_name}</td>
                  <td className='city'>
                  <Link to={`/edit_CityReport/${id}`}>

                    <Button className='m-2 btn btn-warning text text-light' >Edit</Button>
                    </Link>
                    <Button className='m-2 btn btn-danger text text-light' onClick={() => onDelete(id)} >Delete</Button>
                  </td>
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

export default CityReport;