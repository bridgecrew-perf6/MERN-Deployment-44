import React, { useState, useEffect } from "react";
import { useHistory, Link } from 'react-router-dom';
import axios from 'axios';
import { useParams } from "react-router-dom";



let EditPet = () => {


   let [petInfo,setPetInfo] = useState({});
    let [formError, setFormError] = useState({});
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


    let updatePetInfo =(e)=>{
            setPetInfo({
                ...petInfo,
                [e.target.name]:e.target.value
            })
    }

    
    let updatePet = (e)=>{
        e.preventDefault()
        axios.put(`http://localhost:8000/api/pets/${id}`,petInfo)
        .then(res=>{
            // console.log(res);            
            
            if(res.data.error){
                setFormError(res.data.error);
            }
            else
            {
            setPetInfo(res.data.result);
            history.push('/');
            }
            
        })
        .catch(err=>console.log('front end error adding pet',err))
        
        
    }

    

    return (
        <>

            <div className="row d-flex justify-content-between">
                <h1 className="col">Pet Shelter</h1>
                <Link to={'/'} className="col align-self-center">Back to home</Link>
            </div>
            <div className="row">
                <h2 className="ms-5">Edit:&emsp;{petInfo.name}</h2> 
            </div>
            <form onSubmit={(e)=>updatePet(e)} >
                <div className="row ms-5 " style={{width:'800px', border:'2px solid black'}}>
                    <div className="col-3 me-3">
                        <div className="row mt-4">
                        <label>Pet Name:</label>
                        <input type="text" name="name" id="" value={petInfo.name} onChange={(e)=>updatePetInfo(e)} />
                        <div className="row justify-content-center text-danger">{formError.errors?.name?.message}</div>
                        </div>
                        <div className="row">
                        <label>Pet Type:</label>
                        <input type="text" name="type" id="" value={petInfo.type} onChange={(e)=>updatePetInfo(e)}/>
                        <div className="row justify-content-center text-danger">{formError.errors?.type?.message}</div>
                        </div>
                        <div className="row">
                        <label> Pet Description</label>
                        <input type="text" name="description" id="" value={petInfo.description} onChange={(e)=>updatePetInfo(e)}/>
                        <div className="row justify-content-center text-danger">{formError.errors?.description?.message}</div>
                        </div>
                    </div>
                    <div className="col-3">
                        <p className="m-0">Skills (optional)</p>
                        <div className="row">
                        <label>Skill 1:</label>
                        <input type="text" name="skill1" id="" value={petInfo.skill1} onChange={(e)=>updatePetInfo(e)}  />
                        </div>
                        <div className="row">
                        <label>Skill 2:</label>
                        <input type="text" name="skill2" id="" value={petInfo.skill2} onChange={(e)=>updatePetInfo(e)}/>
                        </div>
                        <div className="row">
                        <label> Skill 3:</label>
                        <input type="text" name="skill3" id="" value={petInfo.skill3} onChange={(e)=>updatePetInfo(e)} />
                        </div>
                    </div>
                    <div className="row m-4 ">
                    <button type='submit' className="btn btn-primary" style={{width:'100px'}}>submit</button>
                    <Link to={'/'} className="btn btn-success" style={{width:'100px'}}>cancel</Link>
                    </div>
                </div>


            </form>


        </>
    )
}

export default EditPet