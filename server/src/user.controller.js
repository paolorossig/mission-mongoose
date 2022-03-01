import User from './user.model.js'

export async function registerUser(req, res) {
  try {
    const user = await User.create(req.body)
    res.status(201).json({ message: 'User created', user })
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
}

export async function listUsers(req, res) {
  try {
    const users = await User.find({})
    res.status(201).json({ message: 'Users retrieved', users })
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
}
