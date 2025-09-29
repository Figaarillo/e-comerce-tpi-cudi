const TitleForm = ({ title }) => {
  return (
    <div className="sm:mx-auto sm:w-full sm:max-w-md">
      <h2 className="mt-6 text-center text-3xl font-extrabold text-emerald-600">
        {title}
      </h2>
    </div>
  );
}

export default TitleForm
