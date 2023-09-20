import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { Load_AreaData } from '../Redux/Action';
import { Button } from 'react-bootstrap';
import database from '../../firebase';
import { Link } from 'react-router-dom'
import Dashboard from '../Components/Dashboard';
import "../../css/Area.css"


const AreaReport = () => {

  // ===============Data call from store============

  const { Loadarea } = useSelector(state => state.cartreducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(Load_AreaData());
  }, []);

  // console.log("Area Data----", Loadarea)

  // ============Delete Section===========

  const onDelete = (id) => {

    database.ref(`area_table/${id}`).remove((err) => {
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
    <div className="container "
      style={{ backgroundColor: '#0B0B45', borderRadius: '10px' }}>
      <table className="container text-light mt-10">
        <thead>
          <tr className='text-center'>
            <td className='area'>Sno</td>
            <td className='area'>State Id</td>
            <td className='area'>State Name</td>
            <td className='area'>City Id</td>
            <td className='area'>City Name</td>
            <td className='area'>Area Id</td>
            <td className='area'>Area Name</td>
            <td className='area'>Action</td>
          </tr>
        </thead>
        <tbody>
          {
            Object.keys(Loadarea).map((id, index) => {
              return (
                <tr key={id} className="text-center">
                  <td scope="row" className='area'>{index + 1}</td>
                  <td className='area'>{Loadarea[id].stateid}</td>
                  <td className='area'>{Loadarea[id].state_name}</td>
                  <td className='area'>{Loadarea[id].cityid}</td>
                  <td className='area'>{Loadarea[id].city_name}</td>
                  <td className='area'>{Loadarea[id].areaid}</td>
                  <td className='area'>{Loadarea[id].area_name}</td>
                  <td className='area'>
                   <Link to={`/edit_AreaReport/${id}`}>
                    <Button className='m-2 btn btn-warning text text-light'>Edit</Button>
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

export default AreaReport;