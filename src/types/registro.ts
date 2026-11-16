export interface FormularioRegistroProps {
  nombre: string;
  correo: string;
  contrasena: string;
  errorNombre: string;
  errorCorreo: string;
  errorContrasena: string;
  esValido: boolean;
  alCambiarNombre: (valor: string) => void;
  alCambiarCorreo: (valor: string) => void;
  alCambiarContrasena: (valor: string) => void;
  alEnviar: (e: React.FormEvent<HTMLFormElement>) => void;
}