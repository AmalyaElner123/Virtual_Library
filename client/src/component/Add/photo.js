import { useState ,useEffect} from "react";
import {storage} from './fireBase'
import {listAll, ref,uploadBytes,getDownloadURL} from 'firebase/storage'
import {v4} from 'uuid'
import { useDispatch,useSelector } from "react-redux";

function Photo() {
    const appData=useSelector(state=>state);
    const dispatch = useDispatch();

    const [imageUpload, setImageUpload] = useState(null);
const [imageList, setImageList] = useState([listAll]);
const imagesListRef = ref(storage,'images/') 
const [urlimg,setUrlimg]=useState("");

useEffect(()=>{
    listAll(imagesListRef).then((response)=>{response.items.forEach((item) => {
        getDownloadURL(item).then((url)=> { setImageList((prev)=>[...prev,url])})
    });})
    console.log()},[]);

const  uploadP =()=>{
if(imageUpload===null)return;
const imageRef = ref(storage, 'images/'+imageUpload.name + v4());
    uploadBytes(imageRef, imageUpload).then((snapshot)=>{getDownloadURL(snapshot.ref).then(url=> {setUrlimg(url);console.log("urlimg");console.log(url);            dispatch({type:"FETCH_URL",payload : url}); console.log("appData.url");console.log(appData.url)
});})
}


    return (
        <div>
         <input type="file" onChange={(event)=>{setImageUpload(event.target.files[0])}} onClick={uploadP}></input>
         <button type="button" >upload</button>
         {/* {imageList.map((url)=>{return <img src={url}></img>})} */}
        </div>
    )

}
 export default Photo;