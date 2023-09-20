import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { Load_ProductData } from '../Redux/Action';
import { Button} from 'react-bootstrap';
import database from '../../firebase';
import { Link } from 'react-router-dom';
import DashboardOwner from '../Components/DashboardOwner';
import "../../css/Product.css"


const ProductReport = () => {

  // ===============Data call from store============

  const { Loadproduct } = useSelector(state => state.cartreducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(Load_ProductData());
  }, []);

  

  // ============Delete Section===========

  const onDelete = (id) => {

    database.ref(`product_table/${id}`).remove((err) => {
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
   <DashboardOwner/>

    <div className="container border border-danger "
      style={{ backgroundColor: '#0B0B45', borderRadius: '10px', marginTop:"20px" }}>
      <table id="table" className="container text-light mt-10">
        <thead style={{backgroundColor:"#B0B045"}}>
          <tr className='text-center'>
            <td className='product' >Sno</td>
            <td className='product'>Product Id</td>
            <td className='product'>Prduct Name</td>
            <td className='product'>Price ID</td>
            <td className='product' >Price</td>
            <td className='product'>Photo</td>
            <td className='product'>Detail id</td>
            <td className='product'>Product Details</td>
            <td className='product'>Action</td>
            
          </tr>
        </thead>
        <tbody>
          {
            Object.keys(Loadproduct).map((id, index) => {
              return (
                <tr key={id} className="text-center">
                  <td scope="row" className='product' >{index + 1}</td>
                  <td className='product'>{Loadproduct[id].productid}</td>
                  <td className='product'>{Loadproduct[id].product_name}</td>
                  <td className='product'>{Loadproduct[id].priceid}</td>
                  <td className='product'>{Loadproduct[id].price}</td>
                  <td className='product'><img src={Loadproduct[id].imgdata} width="80" height="80"/></td>
                  <td className='product'>{Loadproduct[id].detailid}</td>
                  <td className='product'>{Loadproduct[id].product_detail}</td>
                  
                  <td className='tdata'>
                    <Link to={`/edit_ProductReport/${id}`}>
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

export default ProductReport;