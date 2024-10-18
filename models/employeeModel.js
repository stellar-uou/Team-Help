const db = require('../config/db');

const Employee = {
    getAllEmployees: (callback) => {
        db.query('SELECT * FROM employees', callback);
    },
    getEmployeeById: (id, callback) => {
        db.query('SELECT * FROM employees WHERE id = ?', [id], callback);
    },
    getEmployeeByName: (name, callback) => {
        db.query('SELECT * FROM employees WHERE name = ?', [name], callback);
    },
    createEmployee: (data, callback) => {
        db.query('INSERT INTO employees SET ?', data, callback);
    },
    updateEmployee: (id, data, callback) => {
        db.query('UPDATE employees SET ? WHERE id = ?', [data, id], callback);
    },
    deleteEmployee: (id, callback) => {
        db.query('DELETE FROM employees WHERE id = ?', [id], callback);
    }
};

module.exports = Employee;