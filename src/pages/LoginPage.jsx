import { KeyRound, Mail } from "lucide-react";
import { useState } from "react";
import FormField from "../components/FormField";
import TitleForm from "../components/TitleForm";

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <div className="flex flex-col items-center justify-center py-12 sm:px-6 lg:px-8">
      <TitleForm title="Crear cuenta" />
      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-gray-800 py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <form onSubmit={handleSubmit} className="space-y-10">
            <FormField
              fieldName="email"
              FieldIcon={Mail}
              fieldValue={email}
              onChange={setEmail}
            />
            <FormField
              fieldName="password"
              FieldIcon={KeyRound}
              fieldValue={password}
              onChange={setPassword}
            />

            <button
             className="w-full flex justify-center border rounded-md border-transparent bg-emerald-600 py-2 px-4 text-sm font-medium text-white hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
             type="submit"
             >Enviar  </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default LoginPage