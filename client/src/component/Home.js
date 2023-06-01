//import '../App.css';
import { useDispatch,useSelector } from "react-redux";


function Home() {
const appData=useSelector(state=>state);
    return (
        <div className ='itemsMain' >
          <input type="button" value="pqush" onClick={(()=>console.log(appData))}/>
          <h1>About</h1>
          <h1>About</h1>
          <h1>About</h1>
          <h1>About</h1>
          <h1>About</h1>
          <h1>About</h1>
          <h1>About</h1>
        </div>
    )

}export default Home