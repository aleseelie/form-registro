import { useState } from 'react';
import Swal from 'sweetalert2';

export const useFormularioRegistro = () => {
  const [nombre, setNombre] = useState<string>('');
  const [correo, setCorreo] = useState<string>('');
  const [contrasena, setContrasena] = useState<string>('');

  let errorNombre = '';
  let errorCorreo = '';
  let errorContrasena = '';

  if (nombre !== '' && nombre.trim().length < 3) {
    errorNombre = 'El nombre debe tener al menos 3 letras.';
  }

  if (correo !== '' && (!correo.includes('@') || !correo.includes('.'))) {
    errorCorreo = 'Ingresa un correo válido (ejemplo@correo.com).';
  }

  if (contrasena !== '' && contrasena.length < 6) {
    errorContrasena = 'La contraseña debe tener al menos 6 caracteres.';
  }

  const esValido =
    nombre.trim().length >= 3 &&
    correo.includes('@') &&
    correo.includes('.') &&
    contrasena.length >= 6;

  const manejarEnvio = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!esValido) return;

    Swal.fire({
      title: '¡Registro exitoso!',
      text: `¡Bienvenido, ${nombre}!`,
      icon: 'success',
      confirmButtonText: 'Aceptar',
      confirmButtonColor: '#4f46e5'
    });

    setNombre('');
    setCorreo('');
    setContrasena('');
  };

  return {
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
  };
};