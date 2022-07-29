import React from "react";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const Edit = () => {

    const [nom, setNom] = useState("");
    const [prenom, setPrenom] = useState("");
    const [email, setEmail] = useState("");
    const [adresse, setAdresse] = useState("");
    const [telephone, setTelephone] = useState("");
    const [grade, setGrade] = useState("");
    const [specialite, setSpecialite] = useState("");
    const [salaire, setSalaire] = useState("");

    const { id } = useParams();

    useEffect(() => {
        axios.get(`http://localhost:3000/api/v1/employees/${id}`).then((response) => {
          setNom(response.data.nom),  
          setPrenom(response.data.prenom),
          setEmail(response.data.email),
          setAdresse(response.data.adresse),
          setTelephone(response.data.telephone),
          setGrade(response.data.grade),
          setSpecialite(response.data.specialite),
          setSalaire(response.data.salaire)
        });
      }, []);
    
    const navigate = useNavigate();

    const data = {
        Nom: nom,
        Prenom: prenom,
        Email: email,
        Adresse: adresse,
        Telephone: telephone,
        Grade: grade,
        Specialiste: specialite,
        Salaire: salaire
    }

    const Update = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:3000/api/v1/employees/${id}`, data).then(navigate("/"));
      }

    return (
        <div className="container__create">
            <h1>Modifier l'utilisateur</h1>
            <form>
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
                 <button type="submit" className="btn btn-primary" onClick={Update}>Mise à jour</button>
            </form>
        </div>
    )
}

export default Edit;