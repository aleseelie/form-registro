import { useFormularioRegistro } from './hooks/useFormRegistro';
import { FormularioRegistro } from './components/FormRegistro';

export function App() {
  const {
    nombre,
    setNombre,
    correo,
    setCorreo,
    contrasena,
    setContrasena,
    errorNombre,
    errorCorreo,
    errorContrasena,
    esValido,
    manejarEnvio
  } = useFormularioRegistro();

  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-4">
      <div className="bg-pink-100 w-full max-w-md rounded-2xl shadow-lg p-6 space-y-6">
        
        <div className="text-center">
          <h1 className="text-2xl font-bold text-black">
            Crear una cuenta
          </h1>
          <p className="text-sm text-slate-500 mt-1">
            Regístrate para empezar a comprar :D
          </p>
        </div>

        <FormularioRegistro
          nombre={nombre}
          correo={correo}
          contrasena={contrasena}
          errorNombre={errorNombre}
          errorCorreo={errorCorreo}
          errorContrasena={errorContrasena}
          esValido={esValido}
          alCambiarNombre={setNombre}
          alCambiarCorreo={setCorreo}
          alCambiarContrasena={setContrasena}
          alEnviar={manejarEnvio}
        />

      </div>
    </div>
  );
}

export default App;
