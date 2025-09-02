import axios from "axios";
import { useEffect, useState } from "react"
import { useCookies } from "react-cookie";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToWatchLater } from "../slicers/slicer"; 
import store from "../store/store";

export function UserDashboard(){

    const [videos, setVideos] = useState([{id:0, title:null, description:null, url:null, likes:0, views:0, dislikes:0, comments:null, category_id:0}]);
   
    let navigate = useNavigate();
    const dispatch = useDispatch();

    function handleSignout(){
        removeCookie('admin_id');
        navigate('/admin-login');
    }

    function LoadVideos(){
        axios.get(`http://localhost:3000/videos`)
        .then(response=>{
            setVideos(response.data);
        })
    }

    useEffect(()=>{
         
            LoadVideos();
          
    },[])

    function handleSaveClick(video){
        dispatch(addToWatchLater(video));
    }
    return(
        <div className="bg-light p-2">
            <nav className="d-flex justify-content-between">
                <div>User Dashboard</div>
                <div>
                    <div className="input-group">
                        <input type="text" placeholder="Search Videos" className="form-control" />
                        <button className="btn btn-warning bi bi-search"></button>
                    </div>
                </div>
                <div>
                    <span className="bi bi-save"> {store.getState().videosCount} Videos </span>
                </div>
            </nav>
            <div className="d-flex flex-wrap">
                {
                    videos.map(video=>
                        <div style={{width:'250px'}} key={video.id} className="card m-2 p-2">
                            <iframe className="w-100" src={video.url} height="200" ></iframe>
                            <div className="card-header" style={{height:'80px'}}>
                                {video.title}
                            </div>
                            <div className="card-body">
                                {video.description}
                            </div>
                            <div className="card-footer text-center">
                                <span className="bi bi-eye"> {video.views} </span>
                                <span className="bi bi-hand-thumbs-up mx-3 "> {video.likes} </span>
                                 <span className="bi bi-hand-thumbs-down "> {video.dislikes} </span>
                                <div> 
                                    <button onClick={()=> {handleSaveClick(video)}} className="btn w-100 btn-success bi bi-save2-fill"></button>
                                </div> 
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    )
}