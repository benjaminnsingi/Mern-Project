const { Employee } = require("../model/Employee");
const client = require("../db/Connection");
const { ObjectID } = require("mongodb");

/**
 * Create Employee
 */
const createEmployee = async (request, response) => {
    try {
       let employee = new Employee(
           request.body.nom,
           request.body.prenom,
           request.body.email,
           request.body.adresse,
           request.body.telephone,
           request.body.grade,
           request.body.specialite,
           request.body.salaire,
       );

       let result = await client.db().collection("employees").insertOne(employee);
       response.status(200).json(result);
    } catch (error) {
        console.log(error);
        response.status(500).json(error);
    }
}

/**
 * Get All Employees
 */
const getAllEmployees = async (request, response) => {

    try {
        let cursor = client.db().collection("employees").find();
        let result = await cursor.toArray();

        if (result.length > 0) {
            response.status(200).json(result);
        } else {
            response.status(204).json({message: "Aucun enregistrement trouvé"});
        }
    } catch (error) {
        console.log(error);
        response.status(500).json(error);
    }
}

/**
 * Edit Employee 
 */
const editEmployee = async (request, response) => {
    try {
        let id = new ObjectID(request.params.id);
        let Nom = request.body.nom;
        let Prenom = request.body.prenom;
        let Email = request.body.email;
        let Adresse = request.body.adresse;
        let Telephone = request.body.telephone;
        let Grade = request.body.grade;
        let Specialite = request.body.specialite;
        let Salaire = request.body.salaire;

        let result = await client.db().collection("employees").updateOne({_id:id}, {$set: {nom: Nom, prenom: Prenom, email: Email, adresse: Adresse, telephone: Telephone, grade: Grade, specialite: Specialite, salaire: Salaire}})
        response.status(200).json(result);

        if (result.modifiedCount === 1) {
            response.status(200).json({ message: "Modification réussie" });
        } else {
            response.status(404).json({ message: "Cet utilisateur n'existe pas" });
        }
    } catch (error) {
        console.log(error);
        response.status(500).json(error);
    }
}

/**
 * Delete user in database
 */
const deleteEmployee = async (request, response) => {
    try {
        let id = new ObjectID(request.params.id);

        let result = await client.db().collection("employees").deleteOne({_id:id});
        response.status(200).json(result);

        if (result.deletedCount === 1) {
            response.status(200).json({ message: "Suppression réussie" });
        } else {
            response.status(404).json({ message: "Cet utilisateur n'existe pas" });
        }
    } catch (error) {
        console.log(error);
        response.status(500).json(error);
    }
}

module.exports = {createEmployee, getAllEmployees, editEmployee, deleteEmployee};