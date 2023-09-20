const INIT_DATA = {
    Loadstate: [],
    Loadcity: [],
    Loadarea: [],
    Loadcollege: [],
    Loadproduct: [],
    Loaduserreg: [],
    Loadmember: [],
    Loadmemberimg:[],
    Loaduserreg_img: [],
    Loadadmin: [],
    Loadadmin_img: [],
    Loadregismember:[],
    LoadMember_Detail:[]
};
export const cartreducer = (state = INIT_DATA, action) => {
    switch (action.type) {
        case "Load_State_Table":
            return { ...state, Loadstate: action.payload };

        case "Load_City_Table":
            return { ...state, Loadcity: action.payload };

        case "Load_Area_Table":
            return { ...state, Loadarea: action.payload };

        case "Load_CollegeType_Table":
            return { ...state, Loadcollege: action.payload };

        case "Load_Product_Table":
            return { ...state, Loadproduct: action.payload };

        case "Load_Registration_Table":

            return { ...state, Loaduserreg: action.payload };
         case "Load_Registration_ImageTable":

            return { ...state, Loaduserreg_img: action.payload };

         case "Load_RegistrationMember_Table":
            // console.log("Loadregismember-reducer-------------",action.payload);
            return { ...state, Loadregismember: action.payload };
            

        case "Load_Member_Table":
            return { ...state, Loadmember: action.payload };
    
       case "Load_MemberImg_Table":
        return { ...state, Loadmemberimg: action.payload };


        case "Load_Admin_Table":

            return { ...state, Loadadmin: action.payload };

        case "Load_Admin_ImageTable":

            return { ...state, Loadadmin_img: action.payload };

        case "LOGIN_MEMBER_DETAIL":

            return { ...state, LoadMember_Detail: action.payload };    
        default: return state;



    }
}