import React, { useState, useEffect } from "react";
import { useHistory, Link } from 'react-router-dom';
import axios from 'axios';

let PetPage = () => {

    let [allPets,setAllPets] = useState([]);

    useEffect(()=>{
        axios.get('http://localhost:8000/api/pets')
        .then(res=>{
            console.log(res.data);
            res.data.result.sort((a,b)=>sortPets(a,b));
            setAllPets(res.data.result)
        })
        .catch(err=>console.log('front end get all pets error',err))
    },[])

    let sortPets=(a,b)=>{
        var nameA = a.type.toUpperCase(); // ignore upper and lowercase
        var nameB = b.type.toUpperCase(); // ignore upper and lowercase
        if (nameA < nameB) {
            return -1;
        }
        if (nameA > nameB) {
            return 1;
        }      
        // names must be equal
        return 0;
            }

    return (
        <>
            <div className="container ">
                <div className="row d-flex justify-content-between">
                    <h1 className="col">Pet Shelter</h1>
                    <Link to={'/pets/new'} className="col align-self-center">Add a pet to the shelter</Link>
                </div>
                <div className="row">
                    <h2>These Pets are looking for a good home</h2>                    
                </div>
                <table className="table table-striped" style={{width:'800px'}}>
                    <thead>
                        <th >Name</th>
                        <th >Type</th>
                        <th >Actions</th>           
                    </thead>
                    <tbody>
                        {
                            allPets.map((petObj,idx)=>{
                                return(
                                <tr key={idx}>
                                    <td>{petObj.name}</td>
                                    <td>{petObj.type}</td>
                                    <td>
                                        <Link to={`/pets/${petObj._id}`}>details</Link> | <Link to={`/pets/${petObj._id}/edit`}>edit</Link>
                                    </td>
                                </tr>
                                )
                            })
                        }
                    </tbody>
                </table>





            </div>
        </>
    )
}

export default PetPage;