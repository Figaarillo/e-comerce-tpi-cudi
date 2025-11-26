import { KeyRound, Mail } from "lucide-react";
import { useState } from "react";
import FormContainer from "../components/FormContainer";

const apiURL = import.meta.env.VITE_API_URL

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {

    // console.log('Email:', email);
    // console.log('Password:', password);

    // TODO: hace un fetch a localhost:3000/api/auth/login por medio de un pot

    const response = fetch(`${apiURL}/api/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: email,
        password: password
      })
    })
  };

  const fields = [
    {
      name: 'email',
      label: 'Ingrese su correo',
      icon: Mail,
      value: email,
      onChange: setEmail,
      type: 'email',
      placeholder: 'Ej.: 2XN0a@example.com',
    },
    {
      name: 'password',
      label: 'Ingrese su contraseña',
      icon: KeyRound,
      value: password,
      onChange: setPassword,
      type: 'password',
      placeholder: 'Ej.: 123456',
    },
  ];

  return (
    <FormContainer title="Iniciar sesión" fields={fields} onSubmit={handleSubmit} submitLabel="Ingresar" />
  );
}

export default LoginPage
