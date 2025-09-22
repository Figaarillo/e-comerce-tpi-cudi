import  TitleForm from '../components/TitleForm'
import FormField from '../components/FormField'

const FormContainer = ({title, fields, onSubmit, submitLabel = 'Enviar', loading = false}) => {
  return (
    <div className="lex flex-col items-center justify-center py-12 sm:px-6 lg:px-8">
      <TitleForm title={title} />
      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-gray-800 py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <form onSubmit={onSubmit} className="space-y-10">
            {fields.map((field) => (
              <FormField key={field.name} {...field}/>
            ))}

            <button type="submit" disabled={loading} className={`w-full flex justify-center border rounded-md ${loading ? "bg-gray-500 cursor-not-allowed" : "bg-emerald-600 hover:bg-emerald-700"} py-2 px-4 text-sm font-medium text-white`}>
              {loading ? "Cargando..." : submitLabel}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default FormContainer