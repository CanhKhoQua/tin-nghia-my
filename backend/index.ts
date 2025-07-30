const express = require('express'); //Create a weh server and define API routes
const sql = require('mssql'); //Allows Node.js to connect to MSSQL
const cors = require('cors'); //Middleware

const app = express();
app.use(cors());
app.use(express.json());

const PORT = 3001;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

const config = {
    user: 'user',
    password: 'user',
    server: 'Kobe\\KOBE',
    database: 'Test',
    options: {
        encrypt: false,
        port: 1433,
        trustServerCertificate: true
    }
}

app.get('/api/products', async (req, res) => {
    try {
        await sql.connect(config);
        const result = await sql.query('SELECT * FROM Products');
        res.json(result.recordset);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});