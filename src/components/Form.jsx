import React from 'react'

const Form = ({Field}) => {

  return (
    <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
      <div className="bg-gray-800 py-8 px-4 shadow sm:rounded-lg sm:px-10">
        <form onSubmit={handleSubmit} className="space-y-10">


          <button
            className="w-full flex justify-center border rounded-md border-transparent bg-emerald-600 py-2 px-4 text-sm font-medium text-white hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
            type="submit"
          >
            Enviar
          </button>
        </form>
      </div>
    </div>
  );
}

export default Form