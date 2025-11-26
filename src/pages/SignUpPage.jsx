import { useState } from 'react';
import { KeyRound, Mail, Smartphone, UserIcon } from 'lucide-react';
import FormContainer from '../components/FormContainer';

const apiURL = import.meta.env.VITE_API_URL

const SignUpPage = () => {
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    fetch(`${apiURL}/api/auth/register`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        username: name,
        telephone: phone,
        email: email,
        password: password
      }).then(response => {
        console.log(response);
      }).catch(error => {
        console.log(error);
      })
    })
  };

  const fields = [
    {
      name: 'name',
      label: 'Ingrese su nombre',
      icon: UserIcon,
      value: name,
      onChange: setName,
      type: 'text',
      placeholder: 'Ej.: Juan',
    },
    {
      name: 'lastName',
      label: 'Ingrese su apellido',
      icon: UserIcon,
      value: lastName,
      onChange: setLastName,
      type: 'text',
      placeholder: 'Ej.: Perez',
    },
    {
      name: 'phone',
      label: 'Ingrese su telefono',
      icon: Smartphone,
      value: phone,
      onChange: setPhone,
      type: 'tel',
      placeholder: 'Ej.: 123456789',
    },
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
    <FormContainer
      title="Crear cuenta"
      fields={fields}
      onSubmit={handleSubmit}
      submitLabel="Completar"
    />
  );
};

export default SignUpPage;
