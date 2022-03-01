import Form from './components/Form'
import Table from './components/Table'
import useToggle from './hooks/useToogle'
import { registerUser } from './services/users'

function App() {
  const [showForm, toggleShowForm] = useToggle()

  const handleSubmit = async (e) => {
    e.preventDefault()
    const { userGithub, email } = e.target
    const data = { userGithub: userGithub.value, email: email.value }

    const response = await registerUser(data)
    console.log(response)
    return toggleShowForm()
  }

  return (
    <main className="bg-dark-900 grid h-screen place-content-center text-white">
      <div className="bg-dark-700 rounded-3xl p-10">
        {showForm ? (
          <Form handleSubmit={handleSubmit} toggleShowForm={toggleShowForm} />
        ) : (
          <Table toggleShowForm={toggleShowForm} />
        )}
      </div>
    </main>
  )
}

export default App
