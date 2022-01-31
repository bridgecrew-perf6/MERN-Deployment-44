import React, { useState, useEffect } from "react";
import { useHistory, Link } from 'react-router-dom';
import axios from 'axios';
import {useParams} from 'react-router-dom';

let Details = ()=>{

    let [petInfo,setPetInfo] = useState({});
    let history = useHistory();
    let {id}=useParams();

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/pets/${id}`)
        .then(res=>{
            console.log(res);
            setPetInfo(res.data.result)
        })
        .catch(err=>console.log('front end get ',err))
    },[])
    
    let delPet= ()=>{
        axios.delete(`http://localhost:8000/api/pets/${id}`)
        .then(res=>{
            console.log('deleted pet',res);
            history.push('/');
        })
    }


    return(
        <>
        <div className="container ">
                <div className="row d-flex justify-content-between">
                    <h1 className="col">Pet Shelter</h1>
                    <Link to={'/'} className="col align-self-center">Go back home</Link>
                </div>
                <div className="d-flex">
                    <h2 className="me-5" >Details about: {petInfo.name}</h2>
                    <button onClick={delPet} className="btn btn-danger ms-5">Adopt Now</button>

                </div>
                <div className="col" style={{border:'2px solid black' , width:'600px'}}>
                    <div className="row align-content-center">
                        <h5 className="col-auto">Pet Type:</h5>
                        <h5 className="col">{petInfo.type}</h5>
                    </div>
                    <div className="row align-content-center">
                        <h5 className="col-auto">Description:</h5>
                        <h5 className="col">{petInfo.description}</h5>
                    </div>
                    <div className="row align-content-center">
                        <h5 className="col-auto">Skills:</h5>
                        <h5 className="">{petInfo.skill1}</h5>
                        <h5 className="">{petInfo.skill2}</h5>
                        <h5 className="">{petInfo.skill3}</h5>
                    </div>
                    
                </div>
        </div>
        
        </>
    )
}

export default Details