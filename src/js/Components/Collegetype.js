import React,{useState,useEffect} from 'react'
import { useParams } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import shortid from 'shortid';
import database from '../../firebase';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import {Load_CollegeTypeData } from '../Redux/Action';
import Dashboard from './Dashboard';



const initData={
  college_type:'',
  colltypeid:''
}

const Collegetype = () => {
   
  const[state,setState]=useState(initData);
  const[data,setdata]=useState({});
  


  
    

  const { id } = useParams();
  
  const {Loadcollege} = useSelector(state => state.cartreducer);
  const dispatch = useDispatch();
  let matchid="";

  useEffect(() => {
    dispatch(Load_CollegeTypeData());
    Object.keys(Loadcollege).map((id,index)=>{
      if(matchid===id){
        setState({...Loadcollege[id]})
      }
    })
  }, [id]);







  const handleChange = (e) =>{
    const {name,value}=e.target;
    setState({...state,[name]:value});
}
    const handleSubmit=(e)=>{
    state.colltypeid=colltypeid;
   
    if (id) {
      updateData()
     }
    else {
      const idData=shortid.generate();
      state.colltypeid=idData;
      dataInsert()
      
     }
    e.preventDefault();
    }


    const updateData = () => {
      database.ref(`collegetype_table/${id}`).set(state, (err) => {
        if (err) {
          alert("data not update" + err);
        }
        else {
          alert("data update");
        
          
        }
        
  
      })
    }
  


    const dataInsert=()=>{
    database.ref("collegetype_table").push(state,(err)=>{
      if(err){
        alert("College type info is not insert");
      }
      else{
        alert("College type info inserted")
      
        
      }
    })
  }

  const{college_type,colltypeid}=state;
 return (
    <>
       <Dashboard/>
                <div className="container" style={{marginTop:"170px", alginSelf:"center"}}>
                <form 
                onSubmit={handleSubmit}
                className="container border border-danger col-sm-offset-2 col-sm-4  mt-4" 
                style={{backgroundColor:'#0B0B45' }}
                >
                <h3 className="text-center text-danger" style={{margin:"30px"}}> College Type Registration</h3>
                 <div className="container mb-4">
                    <input
                    type="text"
                    name="college_type"
                    className="form-control form-control-lg "
                    onChange={handleChange}
                    value={college_type ||""}
                    placeholder="Enter the state name"
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
    
  )
}

export default Collegetype;