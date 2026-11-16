import React from 'react';
import { type FormularioRegistroProps } from '../types/registro';

export const FormularioRegistro: React.FC<FormularioRegistroProps> = ({
  nombre,
  correo,
  contrasena,
  errorNombre,
  errorCorreo,
  errorContrasena,
  esValido,
  alCambiarNombre,
  alCambiarCorreo,
  alCambiarContrasena,
  alEnviar
}) => {
  return (
    <form onSubmit={alEnviar} className="space-y-4">
      <div>
        <label htmlFor="nombre" className="block text-sm font-medium text-slate-700 mb-1">
          Nombre de usuario
        </label>
        <input
          id="nombre"
          type="text"
          placeholder="Ej. SofiaDev"
          value={nombre}
          onChange={(e) => alCambiarNombre(e.target.value)}
          className="w-full px-4 py-2.5 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-300"
        />
        {errorNombre && <p className="text-xs text-red-700 mt-1">{errorNombre}</p>}
      </div>

      <div>
        <label htmlFor="correo" className="block text-sm font-medium text-slate-700 mb-1">
          Correo electrónico
        </label>
        <input
          id="correo"
          type="email"
          placeholder="correo@ejemplo.com"
          value={correo}
          onChange={(e) => alCambiarCorreo(e.target.value)}
          className="w-full px-4 py-2.5 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-300"
        />
        {errorCorreo && <p className="text-xs text-red-700 mt-1">{errorCorreo}</p>}
      </div>

      <div>
        <label htmlFor="contrasena" className="block text-sm font-medium text-slate-700 mb-1">
          Contraseña
        </label>
        <input
          id="contrasena"
          type="password"
          placeholder="Mínimo 6 caracteres"
          value={contrasena}
          onChange={(e) => alCambiarContrasena(e.target.value)}
          className="w-full px-4 py-2.5 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-300"
        />
        {errorContrasena && <p className="text-xs text-red-700 mt-1">{errorContrasena}</p>}
      </div>

      <button
        type="submit"
        disabled={!esValido}
        className={`w-full py-3 rounded-lg font-semibold text-white transition ${
          esValido
            ? 'bg-pink-500 hover:bg-pink-600 cursor-pointer'
            : 'bg-slate-300 cursor-not-allowed'
        }`}
      >
        Registrar
      </button>
    </form>
  );
};