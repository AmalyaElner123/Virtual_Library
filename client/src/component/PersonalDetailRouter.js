import { useDispatch,useSelector } from "react-redux";
import { useNavigate } from "react-router";

function PersonalDetailRouter (){
    const dispatch = useDispatch();
    const appData = useSelector(state=>state);
   const navigate = useNavigate();
    const privatearea=()=>{
       const s = sessionStorage.getItem("token");
       if(appData.token!="email or password incorect!"){
       console.log("good email or password ")

navigate("/personalDetails")
       }
       else{console.log("wrong email or password ");navigate("/privateArea")
    }
                }


    return(

<div> <input type="button" value="אזור אישי" onClick={privatearea}></input></div>
    );
}export default PersonalDetailRouter