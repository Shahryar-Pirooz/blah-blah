import User from '../models/user.js'
const register = async (req, res) => {
    try {
        const user = await User.create(req.body)
        res.status(201).json({ user })
    } catch (error) {
        res.status(500).json({
            status: 500,
            msg: 'something was wrong!!',
            error: error,
        })
    }
}
const login = async (req, res) => {
    res.send('login')
}
const updateUser = async (req, res) => {
    res.send('updateUser')
}
export { register, login, updateUser }
