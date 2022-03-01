import { useEffect, useState } from 'react'
import { listUsers } from '../services/users'

function useUsers() {
  const [users, setUsers] = useState([])

  useEffect(() => {
    const getUsers = async () => {
      const { users } = await listUsers()
      if (users) setUsers(users)
    }
    getUsers()
  }, [])

  return users
}

export default useUsers
