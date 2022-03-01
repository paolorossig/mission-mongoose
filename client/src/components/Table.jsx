import AddButton from './AddButton'
import useUsers from '../hooks/useUsers'

function Table({ toggleShowForm }) {
  const users = useUsers()

  return (
    <div className="flex flex-col gap-4">
      <div className="flex justify-between">
        <h1>Lista de usuarios:</h1>
        <AddButton onClick={toggleShowForm} />
      </div>
      <table className="table-auto overflow-hidden rounded-xl p-4">
        <thead className="text-dark-900 bg-gray-100">
          <tr>
            <th>Id</th>
            <th>Usuario Github</th>
            <th>Correo</th>
            <th>Fecha de creación</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user._id}>
              <td>{user._id.slice(-4)}</td>
              <td>{user.userGithub}</td>
              <td>{user.email}</td>
              <td>{new Date(user.createdAt).toLocaleDateString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Table
