import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import {Link, useParams} from "react-router-dom";

const Employees = () => {

    const { id } = useParams();

    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:3000/api/v1/employees/${id}`).then((response) => {
            setUsers(response.data);
        })
    }, [])
    

    return (
        <div className="container__create">
            <h2>Liste des employees</h2>
            {
                users && (
                   <>
                    <p>{users.nom}</p>
                    <p>{users.prenom}</p>
                    <p>{users.telephone}</p>
                    <p>{users.grade}</p>
                    <p>{users.specialite}</p>
                    <p>{users.salaire}</p>
                   </>
                )
            }
        </div>
    )
}

export default Employees;