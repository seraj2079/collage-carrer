import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { Load_CollegeTypeData } from '../Redux/Action';
import { Button } from 'react-bootstrap';
import database from '../../firebase';
import { Link } from 'react-router-dom'
import Dashboard from '../Components/Dashboard';
import "../../css/College.css"


const CollegetypeReport = () => {

  // ================data call from store======================

  const { Loadcollege } = useSelector(state => state.cartreducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(Load_CollegeTypeData());
  }, []);

  // console.log("State Data----", Loadstate)

  // ===================delete section=============

  const onDelete = (id) => {

    database.ref(`collegetype_table/${id}`).remove((err) => {
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
      <table id="table" className="container text-light">
        <thead style={{backgroundColor:"#0B0B45"}}>
          <tr className='text-center'>
            <td className='college'>Sno</td>
            <td className='college'>College type Id</td>
            <td className='college'>college type name</td>
            <td className='college'>Action</td>
          </tr>
        </thead>
        <tbody>
          {
            Object.keys(Loadcollege).map((id, index) => {
              return (
                <tr key={id}  scope="row" className="text-center">
                  <td className='college'>{index + 1}</td>
                  <td className='college'>{Loadcollege[id].colltypeid}</td>
                  <td className='college'>{Loadcollege[id].college_type}</td>
                  <td className='college'>
                    <Link to={`/edit_CollegeTypeReport/${id}`}>
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

export default CollegetypeReport;
