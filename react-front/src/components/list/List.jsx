import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import {Link, useParams} from "react-router-dom";

const URL = "http://localhost:3000/api/v1/employees/";

const List = () => {

    const { id } = useParams();

    const [users, setUsers] = useState([]);

    const loadUsers = () => {
        axios.get(`http://localhost:3000/api/v1/employees/${id}`).then((response) => {
          setUsers(response.data);
        });
      }

    useEffect(() => {
        axios.get(URL).then((response) => {
            setUsers(response.data);
        })
        loadUsers
    }, [])

    
    const deleteUser = () => {
        axios.delete(`http://localhost:3000/api/v1/employees/${id}`).then(loadUsers());
      }
    

    return (
        <div className="container__create">
            <h2>Liste des employees</h2>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">Nom</th>
                        <th scope="col">Prenom</th>
                        <th scope="col">Email</th>
                        <th scope="col">Adresse</th>
                        <th scope="col">Telephone</th>
                        <th scope="col">Grade</th>
                        <th scope="col">Specialite</th>
                        <th scope="col">Salaire</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map((user, index) => 
                        
                        <tr key={index}>
                            <th scope="row">{user.nom}</th>
                            <td>{user.prenom}</td>
                            <td>{user.email}</td>
                            <td>{user.telephone}</td>
                            <td>{user.grade}</td>
                            <td>{user.specialite}</td>
                            <td>{user.salaire}</td>
                            <td>
                                <Link className="btn btn-primary" to={`/edit-employee/${user.id}`}>Modifier</Link>
                                <Link
                                    onClick={()=>deleteUser(user.id)}
                                    to={'/'}
                                    className="btn btn-danger"
                                >
                                    Supprimer
                                </Link>
                            </td>
                        </tr>
                        )

                    }
                </tbody>

             </table>
        </div>
    )
}

export default List;