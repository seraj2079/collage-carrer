export const Load_State_Table='Load_State_Table';

const loadData='https://college-career-portal-default-rtdb.firebaseio.com/';


export const Load_StateData = () => {
    
        return async dispatch => 
                   {
                    try 
                    { 
                   const result = await fetch(`${loadData}/state_table.json`,{
                       method:'GET',
                       headers: {
                           'Content-Type':'application/json',
                         }
                   }
                   );
                   
                  const state_data = await result.json();
                   if (state_data) 
                   {
                       dispatch({
                           type:Load_State_Table ,
                           payload: state_data
                       })
                   }
                   else {
                           console.log("App category data not data fetch");
                   }
            }     
                                                                                                                                                                                   
   
   catch (error) 
   {
       console.log(error);
   }
 }
}





// ======================CityData====================




export const Load_City_Table='Load_City_Table';
export const Load_CityData = () => {
    
        return async dispatch => 
                   {
                    try 
                    { 
                   const result = await fetch(`${loadData}/city_table.json`,{
                       method:'GET',
                       headers: {
                           'Content-Type':'application/json',
                         }
                   }
                   );
                   
                  const city_data = await result.json();
                   if (city_data) 
                   {
                       dispatch({
                           type:Load_City_Table ,
                           payload: city_data
                       })
                   }
                   else {
                           console.log("App category data not data fetch");
                   }
            }     
                                                                                                                                                                                   
   
   catch (error) 
   {
       console.log(error);
   }
 }
}


// ==========================AreaData===============================================================================




export const Load_Area_Table='Load_Area_Table';
export const Load_AreaData = () => {
    
        return async dispatch => 
                   {
                    try 
                    { 
                   const result = await fetch(`${loadData}/area_table.json`,{
                       method:'GET',
                       headers: {
                           'Content-Type':'application/json',
                         }
                   }
                   );
                   
                  const area_data = await result.json();
                   if (area_data) 
                   {
                       dispatch({
                           type:Load_Area_Table ,
                           payload: area_data
                       })
                   }
                   else {
                           console.log("App category data not data fetch");
                   }
            }     
                                                                                                                                                                                   
   
   catch (error) 
   {
       console.log(error);
   }
 }
}



export const Load_CollegeType_Table='Load_CollegeType_Table';
export const Load_CollegeTypeData = () => {
    
        return async dispatch => 
                   {
                    try 
                    { 
                   const result = await fetch(`${loadData}/collegetype_table.json`,{
                       method:'GET',
                       headers: {
                           'Content-Type':'application/json',
                         }
                   }
                   );
                   
                  const college_data = await result.json();
                   if (college_data) 
                   {
                       dispatch({
                           type:Load_CollegeType_Table,
                           payload: college_data
                       })
                   }
                   else {
                           console.log("App category data not data fetch");
                   }
            }     
                                                                                                                                                                                   
   
   catch (error) 
   {
       console.log(error);
   }
 }
}



export const Load_Product_Table='Load_Product_Table';
export const Load_ProductData = () => {
    
        return async dispatch => 
                   {
                    try 
                    { 
                   const result = await fetch(`${loadData}/product_table.json`,{
                       method:'GET',
                       headers: {
                           'Content-Type':'application/json',
                         }
                   }
                   );
                   
                  const product_data = await result.json();
                   if (product_data) 
                   {
                       dispatch({
                           type:Load_Product_Table,
                           payload: product_data
                       })
                   }
                   else {
                           console.log("App category data not data fetch");
                   }
            }     
                                                                                                                                                                                   
   
   catch (error) 
   {
       console.log(error);
   }
 }
}



// ===============================Registration===========================


export const Load_Registration_Table='Load_Registration_Table';
export const Load_RegistrationData = (stnm,ctnm,arnm) => {
    
        return async dispatch => 
                   {
                    try 
                    { 
                   const result = await fetch(`${loadData}/user_reg/${stnm}/${ctnm}/${arnm}.json`,{
                       method:'GET',
                       headers: {
                           'Content-Type':'application/json',
                         }
                   }
                   );
                   
                  const registration_data = await result.json();
                   if (registration_data) 
                   {
                       dispatch({
                           type:Load_Registration_Table,
                           payload: registration_data
                       })
                   }
                   else {
                           console.log("App category data not data fetch");
                   }
            }     
                                                                                                                                                                                   
   
   catch (error) 
   {
       console.log(error);
   }
 }
}
// ===============================Registration= Image==========================


export const Load_Registration_ImageTable='Load_Registration_ImageTable';
export const Load_RegistrationImage = (stnm,ctnm,arnm) => {
    
        return async dispatch => 
                   {
                    try 
                    { 
                   const result = await fetch(`${loadData}/user_reg_img/${stnm}/${ctnm}/${arnm}.json`,{
                       method:'GET',
                       headers: {
                           'Content-Type':'application/json',
                         }
                   }
                   );
                   
                  const registration_imagedata = await result.json();
                   if (registration_imagedata) 
                   {
                       dispatch({
                           type:Load_Registration_ImageTable,
                           payload: registration_imagedata
                       })
                   }
                   else {
                           console.log("App category data not data fetch");
                   }
            }     
                                                                                                                                                                                   
   
   catch (error) 
   {
       console.log(error);
   }
 }
}


// =========================Memberregistrated by========================

export const Load_RegistrationMember_Table='Load_RegistrationMember_Table';
export const Load_RegisMemberData = () => {
    
        return async dispatch => 
                   {
                    try 
                    { 
                   const result = await fetch(`${loadData}/user_reg.json`,{
                       method:'GET',
                       headers: {
                           'Content-Type':'application/json',
                         }
                   }
                   );
                   
                  const regismember_data = await result.json();
                  console.log("regismember_action===========",regismember_data);
                   if (regismember_data) 
                   {
                       dispatch({
                           type:Load_RegistrationMember_Table,
                           payload: regismember_data
                       })
                   }
                   else {
                           console.log("App category data not data fetch");
                   }
            }     
                                                                                                                                                                                   
   
   catch (error) 
   {
       console.log(error);
   }
 }
}




// ============================Member=======================




export const Load_Member_Table='Load_Member_Table';
export const Load_MemberData = () => {
    
        return async dispatch => 
                   {
                    try 
                    { 
                   const result = await fetch(`${loadData}/member_table.json`,{
                       method:'GET',
                       headers: {
                           'Content-Type':'application/json',
                         }
                   }
                   );
                   
                  const member_data = await result.json();
                
                   if (member_data) 
                   {
                       dispatch({
                           type:Load_Member_Table,
                           payload: member_data
                       })
                   }
                   else {
                           console.log("App category data not data fetch");
                   }
            }     
                                                                                                                                                                                   
   
   catch (error) 
   {
       console.log(error);
   }
 }
}



export const Load_MemberImg_Table='Load_MemberImg_Table';
export const Load_MemberImgData = () => {
    
        return async dispatch => 
                   {
                    try 
                    { 
                   const result = await fetch(`${loadData}/member_img_table.json`,{
                       method:'GET',
                       headers: {
                           'Content-Type':'application/json',
                         }
                   }
                   );
                   
                  const member_imgdata = await result.json();
                
                   if (member_imgdata) 
                   {
                       dispatch({
                           type:Load_MemberImg_Table,
                           payload: member_imgdata
                       })
                   }
                   else {
                           console.log("App category data not data fetch");
                   }
            }     
                                                                                                                                                                                   
   
   catch (error) 
   {
       console.log(error);
   }
 }
}

// ===================admin data=========================================

export const Load_Admin_Table='Load_Admin_Table';
export const Load_AdminData = (stnm,ctnm,arnm) => {
    
        return async dispatch => 
                   {
                    try 
                    { 
                   const result = await fetch(`${loadData}/admin_table/${stnm}/${ctnm}/${arnm}.json`,{
                       method:'GET',
                       headers: {
                           'Content-Type':'application/json',
                         }
                   }
                   );
                   
                  const admin_data = await result.json();
                   if (admin_data) 
                   {
                       dispatch({
                           type:Load_Admin_Table,
                           payload: admin_data
                       })
                   }
                   else {
                           console.log("App category data not data fetch");
                   }
            }     
                                                                                                                                                                                   
   
   catch (error) 
   {
       console.log(error);
   }
 }
}

// =======================Admin image========================

export const Load_Admin_ImageTable='Load_Admin_ImageTable';
export const Load_AdminImage = (stnm,ctnm,arnm) => {
    
        return async dispatch => 
                   {
                    try 
                    { 
                   const result = await fetch(`${loadData}/admin-table_img/${stnm}/${ctnm}/${arnm}.json`,{
                       method:'GET',
                       headers: {
                           'Content-Type':'application/json',
                         }
                   }
                   );
                   
                  const admin_imagedata = await result.json();
                   if (admin_imagedata) 
                   {
                       dispatch({
                           type:Load_Admin_ImageTable,
                           payload: admin_imagedata
                       })
                   }
                   else {
                           console.log("App category data not data fetch");
                   }
            }     
                                                                                                                                                                                   
   
   catch (error) 
   {
       console.log(error);
   }
 }
}

////////////////login member detail////////////////////////
export const LOGIN_MEMBER_DETAIL='LOGIN_MEMBER_DETAIL';
export const loginMember=(loginDetail)=>{
 
    return async dispatch=>{
        dispatch({
            type:LOGIN_MEMBER_DETAIL,
            payload: loginDetail
        })
    }
}