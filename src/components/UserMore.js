import { useParams } from "react-router-dom";
import React  from 'react'
import {useEffect} from 'react'
import Loader from './Loader'
import Repo from "./Repo";

export default function UserMore(props) {
  const {idName}=useParams();
  useEffect(()=>{
        props.userDetails(idName);
  },[]);
  
  const {avatar_url,followers,following,location,bio,name,html_url} = props.user;
//   console.log(props.repo);
  if(props.loader)
  return <Loader/>
  else
  return (
        <div className="container">
            <div className="row">
                <div className="col-md-4" >
                     <img src={avatar_url} alt="" width="100%" className="img-responsive" /> 
                      <h2>{name}</h2>
                      <p>{bio}</p>
                      <p>Yaşadığı yer: {location}</p>
                      <p>Takipçi: {followers} Takip: {following}</p>
                </div>
                <div className="col-md-8">
                    {
                        props.repo.map((item)=><Repo repo={item} key={item.id} />)
                    }
                </div>
            </div>
        </div>
    
    )
}
