import React, { useState, useEffect } from 'react'
import { useParams } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import shortid from 'shortid';
import database from '../../firebase';
import FileResizer from 'react-image-file-resizer';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { Load_ProductData } from '../Redux/Action';
import DashboardOwner from './DashboardOwner';




const initData = {
  product_name: "",
  productid: "",
  price: "",
  priceid: "",
  imgdata: "",
  product_detail: "",
  detailid: ""

}

let myfordata = "";

const Product = () => {

  const [state, setState] = useState(initData);
  const [data, setdata] = useState({});

  const { id } = useParams();
  let matchid=id;

  const { imgdata } = state;
  const { Loadproduct } = useSelector(state => state.cartreducer);
  
  const dispatch = useDispatch();

  useEffect(() => {
    
    dispatch(Load_ProductData());
     Object.keys(Loadproduct).map((id,index)=>{
      if(matchid===id)
      {
         setState({...Loadproduct[id]})
      }
 })
  }, [id]);

  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  }
  const handleSubmit = (e) => {
    const idData = shortid.generate();
    state.productid =idData
    state.priceid = idData
    state.detailid =idData
    

    if (id) {
      loadupdateData()
     }
    else {
      dataInsert()
     }
 
     
     e.preventDefault();
   
     
  }
   const loadupdateData = () => {
     if (myfordata !== null) {
       state.imgdata = myfordata;
       state.productid=productid;
       state.priceid=priceid;
       state.detailid=detailid;

       updateData();
     }
 
     else {
       state.imgdata = imgdata;
       updateData();
     }
 
   }
  const updateData = () => {

    database.ref(`product_table/${id}`).set(state, (err) => {
      if (err) {
        alert("data not update" + err);
      }
      else {
        alert("data update");
      }
    })
  }



  const dataInsert = () => {
    database.ref("product_table").push(state, (err) => {
      if (err) {
        alert("Data not insert" + err);
      }
      else {
        alert("Data inserted");
      }
    })
  }


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
          "jpeg",
          200,
          0,
          (uri) => {
            myfordata = uri
            state.imgdata = uri;

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
  
  const {product_name,productid}=state;
  const {price,priceid}=state;
  const{product_detail,detailid}=state;

  return (
    <>
     <DashboardOwner/>
      <div className="container" style={{ marginTop: "170px", alginSelf: "center" }}>
        <form
          onSubmit={handleSubmit}
          className="container border border-danger col-sm-offset-2 col-sm-4  mt-4"
          style={{ backgroundColor: 'white' }}
        >
          <h3 className="text-center text-danger" style={{ margin: "30px" }}>Add Courses Name</h3>
          <div className="container mb-4">
            <label className='text-danger fw-bold'>Name</label>
            <input
              type="text"
              name="product_name"
              className="form-control form-control-lg "
              value ={product_name || ""}
              onChange={handleChange}
              placeholder="Enter the product name"
                          />
          </div>

          <div className="container mb-4">
            <label className='text-danger fw-bold'>Price</label>
            <input
              type="text"
              name="price"
              className="form-control form-control-lg "
              value={price || ""}
              onChange={handleChange}
              placeholder="Enter the price"
            />
          </div>

          <div className="container mb-4">
            <label className='text-danger fw-bold'>Photo</label>
            <input
              type="file"
              name="imgdata"
              className="form-control form-control-lg "
              onChange={imageLoad}
              placeholder="Upload photo"
            />
          </div>

          <div className="container mb-4">
            <label className='text-danger fw-bold'>Product Detail</label>
            <input
              type="text"
              name="product_detail"
              className="form-control form-control-lg "
              onChange={handleChange}
              value={product_detail || ""}
              placeholder="Enter about the product "
            />
          </div>

          <div className="container text-center">
            <button
              type="submit"
              className="btn btn-success  text mb-4">
              {id ? "update" : "register"}
            </button>
          </div>
        </form>
      </div>


    </>

  )
}

export default Product;
