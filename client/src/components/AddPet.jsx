import React, { useState, useEffect } from "react";
import { useHistory, Link } from 'react-router-dom';
import axios from 'axios';


let AddPet = () => {


    let [petInfo,setPetInfo] = useState({});
    let [formError, setFormError] = useState({});
    let history = useHistory()

    let updatePetInfo =(e)=>{
            setPetInfo({
                ...petInfo,
                [e.target.name]:e.target.value
            })
    }

    
    let addPet = (e)=>{
        e.preventDefault()
        axios.post('http://localhost:8000/api/pets',petInfo)
        .then(res=>{
            console.log(res);            
            setPetInfo(res.data.result);
            if(res.data.result){
            history.push('/');
            }
            else{
                setFormError(res.data.error);
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
                <h2>Know a pet needing a home?</h2>
            </div>
            <form onSubmit={(e)=>addPet(e)} >
                <div className="row ms-5 " style={{width:'800px', border:'2px solid black'}}>
                    <div className="col-3 me-3">
                        <div className="row mt-4">
                        <label>Pet Name:</label>
                        <input type="text" name="name" id=""  onChange={(e)=>updatePetInfo(e)} />
                        <div className="row justify-content-center text-danger">{formError.errors?.name.message}</div>
                        </div>
                        <div className="row">
                        <label>Pet Type:</label>
                        <input type="text" name="type" id="" onChange={(e)=>updatePetInfo(e)}/>
                        <div className="row justify-content-center text-danger">{formError.errors?.type.message}</div>
                        </div>
                        <div className="row">
                        <label> Pet Description</label>
                        <input type="text" name="description" id="" onChange={(e)=>updatePetInfo(e)}/>
                        <div className="row justify-content-center text-danger">{formError.errors?.description.message}</div>
                        </div>
                    </div>
                    <div className="col-3">
                        <p className="m-0">Skills (optional)</p>
                        <div className="row">
                        <label>Skill 1:</label>
                        <input type="text" name="skill1" id="" onChange={(e)=>updatePetInfo(e)}  />
                        </div>
                        <div className="row">
                        <label>Skill 2:</label>
                        <input type="text" name="skill2" id="" onChange={(e)=>updatePetInfo(e)}/>
                        </div>
                        <div className="row">
                        <label> Skill 3:</label>
                        <input type="text" name="skill3" id="" onChange={(e)=>updatePetInfo(e)} />
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

export default AddPet