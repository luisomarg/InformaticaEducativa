import React, { useState, FormEvent } from "react";
import axios from "axios";

// Definición de tipos para el estado del formulario
interface FormularioRegistroProps {
  onSubmit?: (datos: DatosRegistro) => void;
}

interface DatosRegistro {
  nombre: string;
  email: string;
  contrasena: string;
  rol: "docente" | "estudiante";
}

const RegistroUsuario: React.FC<FormularioRegistroProps> = ({ onSubmit }) => {
  // Estado para manejar los datos del formulario
  const [datos, setDatos] = useState<DatosRegistro>({
    nombre: "",
    email: "",
    contrasena: "",
    rol: "estudiante", // Valor por defecto
  });

  // Función para manejar cambios en los inputs
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setDatos((prevDatos) => ({
      ...prevDatos,
      [name]: value,
    }));
  };

  // Función para manejar el submit del formulario
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Validaciones básicas
    if (!datos.nombre || !datos.email || !datos.contrasena) {
      alert("Por favor, complete todos los campos");
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:5000/api/registro",
        datos
      );
      console.log(response.data);
      alert("Usuario registrado exitosamente");
      // Limpiar el formulario después del registro exitoso
      setDatos({
        nombre: "",
        email: "",
        contrasena: "",
        rol: "estudiante",
      });
    } catch (error) {
      console.error("Error al registrar usuario:", error);
      alert("Error al registrar usuario. Por favor, intente nuevamente.");
    }

    // Llamar a la función onSubmit si está definida
    if (onSubmit) {
      onSubmit(datos);
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
            <h2 className="text-center mb-4">Registro de Usuario</h2>

            <div className="mb-3">
              <label htmlFor="nombre" className="form-label">
                Nombre Completo
              </label>
              <input
                type="text"
                className="form-control"
                id="nombre"
                placeholder="Ingrese su nombre"
                name="nombre"
                value={datos.nombre}
                onChange={handleChange}
                required
              />
            </div>

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

            <div className="mb-3">
              <label htmlFor="rol" className="form-label">
                Rol
              </label>
              <select
                className="form-select"
                id="rol"
                name="rol"
                value={datos.rol}
                onChange={handleChange}
              >
                <option value="estudiante">Usuario</option>
                <option value="docente">docente</option>
              </select>
            </div>

            <button type="submit" className="btn btn-primary w-100">
              Registrarse
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegistroUsuario;
