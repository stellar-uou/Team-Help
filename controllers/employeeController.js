const Employee = require('../models/employeeModel');

exports.getAllEmployees = (req, res) => {
    Employee.getAllEmployees((err, results) => {
        if (err) return res.status(500).send(err);
        res.json(results);
    });
};

exports.getEmployeeById = (req, res) => {
    const id = req.params.id;
    Employee.getEmployeeById(id, (err, results) => {
        if (err) return res.status(500).send(err);
        if (results.length === 0) return res.status(404).send('Employee not found');
        res.json(results[0]);
    });
};

exports.getEmployeeByName = (req, res) => {
    const name = req.params.name;
    Employee.getEmployeeByName(name, (err, results) => {
        if (err) return res.status(500).send(err);
        res.json(results);
    });
};

exports.createEmployee = (req, res) => {
    const data = req.body;
    Employee.createEmployee(data, (err, results) => {
        if (err) return res.status(500).send(err);
        res.json({ message: 'Employee created', id: results.insertId });
    });
};

exports.updateEmployee = (req, res) => {
    const id = req.params.id;
    const data = req.body;
    Employee.updateEmployee(id, data, (err, results) => {
        if (err) return res.status(500).send(err);
        res.json({ message: 'Employee updated' });
    });
};

exports.deleteEmployee = (req, res) => {
    const id = req.params.id;
    Employee.deleteEmployee(id, (err, results) => {
        if (err) return res.status(500).send(err);
        res.json({ message: 'Employee deleted' });
    });
};
