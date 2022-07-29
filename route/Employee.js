const express = require('express');
const {createEmployee, getAllEmployees, editEmployee, deleteEmployee} = require('../controller/Employee')
const router = express.Router();

router.route("/employees").post(createEmployee);
router.route("/employees").get(getAllEmployees);
router.route("/employees/:id").put(editEmployee);
router.route("/employees/:id").delete(deleteEmployee);

module.exports = router;