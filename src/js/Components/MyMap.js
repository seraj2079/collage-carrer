import React from 'react'
import { Route, Routes } from 'react-router-dom';
import SignIn from '../LogIn/SignIn';
import MemberLogin from '../LogIn/MemeberLogin';
import Dashboard from './Dashboard';
import DashboardMember from './DashboardMember';
import StateRegis from '../Location/StateRegis';
import CityRegis from '../Location/CityRegis';
import AreaRegis from '../Location/AreaRegis';
import DashboardOwner from './DashboardOwner';
import ProductReport from'../Report/ProductReport'
import StateReport from '../Report/StateReport';
import Product from './Product';
import CityReport from '../Report/CityReport';
import AreaReport from '../Report/AreaReport';
import RegisReport from '../Report/RegisReport';
import CollegetypeReport from '../Report/CollegetypeReport';
import Collegetype from './Collegetype';
import Registration from './Registration';
import User from './User';
import MemberRegis from './MemberRegis';
import MemberReport from '../Report/MemberReport';

const MyMap = () => {
  return (
  <>
    <Routes forceRefresh={true}>
    <Route path="/" element={<SignIn/>}/>
    
    <Route path="/Dashboard" element={<Dashboard/>}/>
    <Route path="/DashboardMember" element={<DashboardMember/>}/>
    <Route path="/MemberLogin" element={<MemberLogin/>}/>
    <Route path="/SignIn/Dashboard" element={<Dashboard/>}/>
    <Route path="/User" element={<User/>}/>
   {/* ===================================Location==================================== */}
       <Route path="/StateRegis" element={<StateRegis/>}/>
       <Route path="/CityRegis" element={<CityRegis/>}/>
       <Route path="/AreaRegis" element={<AreaRegis/>}/>
   {/* ==================================Report==========================================*/}
     <Route path="/StateReport" element={<StateReport/>}/>
     <Route path="/CityReport" element={<CityReport/>}/>
     <Route path="/AreaReport" element={<AreaReport/>}/>
     <Route path="/RegisReport" element={<RegisReport/>}/>
     <Route path="/CollegetypeReport" element={<CollegetypeReport/>}/>
    {/* ==================================Component======================================*/}
    <Route path="/Collegetype" element={<Collegetype/>}/>
    <Route path ="/MemberRegis" element={<MemberRegis/>}/>
    <Route path="/MemberReport" element={<MemberReport/>}/>
    
    
    
    
    {/* ==================================Member======================================*/}
    <Route path="/MemberLogin/DashboardMember" element={<DashboardMember/>}/>
   <Route path="/Registration" element={<Registration/>}/>
    <Route path="/RegisReport" element={<RegisReport/>}/>
    


    {/* ==================================College owner======================================*/}
    <Route path="/DashboardOwner" element={<DashboardOwner/>}/>
    <Route path="/SignIn/DashboardOwner" element={<DashboardOwner/>}/>
    <Route path="/Product" element={<Product/>}/>
    <Route path="/ProductReport" element={<ProductReport/>}/>
    

    {/* {=====================================edit work==============================================} */}

            <Route path="/edit_StateReport/:id" element={<StateRegis/>}/>
            <Route path="/edit_CityReport/:id" element={<CityRegis/>}/>
            <Route path="/edit_AreaReport/:id" element={<AreaRegis/>}/>
            <Route path="/edit_ProductReport/:id" element={<Product/>}/>
            <Route path="/edit_MemberReport/:id" element={<MemberRegis/>}/>
            {/* <Route path="/edit_RegisReport/:id1" element={<Registration/>}/> */}
            <Route path="/edit_UserReport/:id" element={<Registration/>}/>
            
    
    </Routes>
  </>
  )
}

export default MyMap;

