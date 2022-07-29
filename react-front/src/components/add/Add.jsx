import React from "react";
import { useState } from "react";
import {useNavigate} from "react-router-dom";
import axios from "axios";

const Url = "http://localhost:3000/api/v1/employees/"; 


const Add = () => {

    const [nom, setNom] = useState("");
    const [prenom, setPrenom] = useState("");
    const [email, setEmail] = useState("");
    const [adresse, setAdresse] = useState("");
    const [telephone, setTelephone] = useState("");
    const [grade, setGrade] = useState("");
    const [specialite, setSpecialite] = useState("");
    const [salaire, setSalaire] = useState("");

    const navigate = useNavigate();

    const data = {
        nom: nom,
        prenom: prenom,
        email: email,
        adresse: adresse,
        telephone: telephone,
        grade: grade,
        specialite: specialite,
        salaire: salaire
    }


    const handleSubmit = (e) => {
       e.preventDefault();
       axios.post(Url, data).then(navigate("/")); 

    }


    return (
        <div className="container__create">
            <h2>Creation d'utilisateur</h2>
            <form onSubmit={handleSubmit}>
                 <input type="text" className="form-control" placeholder="Nom" onChange={e => {setNom(e.target.value)}} value={nom}/>
                 <br/>
                 <input type="text"  className="form-control" placeholder="Prenom" onChange={e => {setPrenom(e.target.value)}} value={prenom}/>
                 <br/>
                 <input type="text" className="form-control"  placeholder="Email" onChange={e => {setEmail(e.target.value)}} value={email}/>
                 <br/>
                 <input type="text" className="form-control" placeholder="Adresse" onChange={e => {setAdresse(e.target.value)}} value={adresse}/>
                 <br/>
                 <input type="text" className="form-control" placeholder="Telephone" onChange={e => {setTelephone(e.target.value)}} value={telephone}/>
                 <br/>
                 <input type="text" className="form-control" placeholder="Grade" onChange={e => {setGrade(e.target.value)}} value={grade}/>
                 <br/>
                 <input type="text" className="form-control" placeholder="Specialite" onChange={e => {setSpecialite(e.target.value)}} value={specialite}/>
                 <br/>
                 <input type="number" className="form-control" placeholder="Salaire" onChange={e => {setSalaire(e.target.value)}} value={salaire}/>
                 <br/>
                 <button type="submit" className="btn btn-primary">Sauvegarder</button>
            </form>
        </div>
    )
}

export default Add;