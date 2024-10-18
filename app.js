const express = require('express');
require('dotenv').config();

const app = express();

// Middleware para lidar com JSON
app.use(express.json());

// Rotas
const employeeRoutes = require('./routes/employeeRoutes');
app.use('/api', employeeRoutes);

// Iniciar o servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
