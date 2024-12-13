import React, { useState, FormEvent } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

interface LoginData {
  email: string;
  contrasena: string;
}

const Login: React.FC = () => {
  const [datos, setDatos] = useState<LoginData>({
    email: "",
    contrasena: "",
  });
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setDatos((prevDatos) => ({
      ...prevDatos,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!datos.email || !datos.contrasena) {
      alert("Por favor, complete todos los campos");
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:5000/api/login",
        datos
      );
      console.log(response.data);

      // Aquí puedes manejar la respuesta del servidor, por ejemplo:
      if (response.data.success) {
        // Guardar el token en el localStorage o en un estado global
        localStorage.setItem("token", response.data.token);
        // Redirigir al usuario a la página de inicio
        navigate("/Inicio");
      } else {
        alert(response.data.message || "Error al iniciar sesión");
      }
    } catch (error) {
      console.error("Error al iniciar sesión:", error);
      alert("Error al iniciar sesión. Por favor, intente nuevamente.");
    }
  };

  return (
    <div
      className="container-fluid d-flex align-items-center justify-content-center"
      style={{
        minHeight: "calc(100vh - 56px)",
        paddingTop: "56px",
      }}
    >
      <div className="row w-100">
        <div className="col-md-6 offset-md-3 col-lg-4 offset-lg-4">
          <form onSubmit={handleSubmit} className="bg-white p-4 rounded shadow">
            <h2 className="text-center mb-4">Iniciar Sesión</h2>

            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Correo Electrónico
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="Ingrese su email"
                name="email"
                value={datos.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="contrasena" className="form-label">
                Contraseña
              </label>
              <input
                type="password"
                className="form-control"
                id="contrasena"
                placeholder="Ingrese su contraseña"
                name="contrasena"
                value={datos.contrasena}
                onChange={handleChange}
                required
              />
            </div>

            <button type="submit" className="btn btn-primary w-100">
              Iniciar Sesión
            </button>
            <div className="text-center mt-3">
              <p>
                ¿No tienes una cuenta?{" "}
                <Link to="/Registro">Regístrate aquí</Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
