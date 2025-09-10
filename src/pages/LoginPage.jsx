import { KeyRound, Mail } from "lucide-react";
import { useState } from "react";

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
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mt-6 text-center text-3xl font-extrabold text-emerald-600">
          Crear cuenta
        </h2>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-gray-800 py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="flex flex-col">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-300 mb-6"
              >
                Ingrese su mail
              </label>
              <div className="relative mt-1 rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 flex items-center pointer-events-none">
                  <Mail className="h-5 text-gray-300 mx-2" />
                  <input
                    id="email"
                    type="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-emerald-500 focus:outline-none focus:ring-emerald-500 sm:text-sm text-gray-400"
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-300 mb-6"
              >
                Ingrese su contraseña
              </label>
              <div className="relative mt-1 rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 flex items-center pointer-events-none">
                  <KeyRound className="h-5 text-gray-300 mx-2" />
                  <input
                    id="password"
                    type="password"
                    value={password}
                    placeholder="*********"
                    onChange={e => setPassword(e.target.value)}
                    className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-emerald-500 focus:outline-none focus:ring-emerald-500 sm:text-sm text-gray-400"
                  />
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default LoginPage