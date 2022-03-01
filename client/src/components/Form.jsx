import BackButton from './BackButton'

function Form({ handleSubmit, toggleShowForm }) {
  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <div className="flex justify-center">
        <BackButton onClick={toggleShowForm} />
        <h1>Formulario de registro</h1>
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="userGithub">Usuario Github:</label>
        <input
          type="text"
          id="userGithub"
          placeholder="Ingresa un usuario"
          required
        />
        <label htmlFor="email">Correo:</label>
        <input
          type="email"
          id="email"
          placeholder="Ingresa un correo"
          required
        />
      </div>
      <label className="flex items-center text-gray-200">
        <input type="checkbox" id="terms" className="mr-2" required />
        Acepto los términos y condiciones
      </label>
      <button
        type="submit"
        className="bg-primary-400 hover:bg-primary-900 rounded-xl py-2 px-4"
      >
        Registrarse
      </button>
    </form>
  )
}

export default Form
