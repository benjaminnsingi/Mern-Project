class Employee {
    constructor(nom, prenom, email, adresse, telephone, grade, specialite, salaire) {
      this.nom = nom;
      this.prenom = prenom;
      this.email = email;
      this.adresse = adresse;
      this.telephone = telephone;
      this.grade = grade;
      this.specialite = specialite;
      this.salaire = salaire;
    }
}

module.exports = {Employee};