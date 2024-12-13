const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const app = express();
const jwt = require("jsonwebtoken");

// Middleware
app.use(cors());
app.use(express.json());

// Configuración de la conexión a MySQL
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "dbusuario",
});

// Conectar a MySQL
db.connect((err) => {
  if (err) {
    console.error("Error conectando a la base de datos:", err);
    return;
  }
  console.log("Conectado a la base de datos MySQL");
});

// Ruta para el registro de usuarios
app.post("/api/registro", (req, res) => {
  const { nombre, email, contrasena, rol } = req.body;
  const query =
    "INSERT INTO usuarios (nombre, email, contrasena, rol) VALUES (?, ?, ?, ?)";

  db.query(query, [nombre, email, contrasena, rol], (err, result) => {
    if (err) {
      console.error("Error al registrar usuario:", err);
      res.status(500).json({ error: "Error al registrar usuario" });
      return;
    }
    res.status(201).json({ message: "Usuario registrado exitosamente" });
  });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Servidor corriendo en el puerto ${PORT}`));

app.post("/api/login", (req, res) => {
  const { email, contrasena } = req.body;
  const query = "SELECT * FROM usuarios WHERE email = ? AND contrasena = ?";

  db.query(query, [email, contrasena], (err, result) => {
    if (err) {
      console.error("Error al iniciar sesión:", err);
      res
        .status(500)
        .json({ success: false, message: "Error al iniciar sesión" });
      return;
    }

    if (result.length > 0) {
      // Usuario autenticado
      const token = jwt.sign(
        { id: result[0].id, email: result[0].email },
        "tu_secreto_jwt",
        { expiresIn: "1h" }
      );
      res.json({ success: true, message: "Inicio de sesión exitoso", token });
    } else {
      // Usuario no encontrado o contraseña incorrecta
      res
        .status(401)
        .json({ success: false, message: "Credenciales inválidas" });
    }
  });
});
