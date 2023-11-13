const UserModel = require('../model/userModel')
const jwt = require('jsonwebtoken');

const userLogin = async (req, res) => {

  const { email, password } = req.body

  if (!email || !password) {
    return res.json({ message: 'All fields are required!' })
  }

  try {

    const user = await UserModel.findOne({ email })

    if (!user || user.password !== password) {
      return res.json({ message: 'email or password incorrect' })
    }

    // generate token
    const token = jwt.sign({
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
    }, process.env.SECRET || 'teamSky', { expiresIn: '6h' });

    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      token
    })


  } catch (error) {
    res.json({ error, message: 'please try again later' })
  }
}



const userRegister = async (req, res) => {
  const { email, password, name } = req.body

  if (!name || !email || !password) {
    return res.json({ message: 'All fields are required!' })
  }

  try {
    const user = new UserModel({ email, password, name })
    await user.save()

    res.json(user)
  } catch (error) {

    res.json({ error, message: 'please try again later' })
  }

}


module.exports = { userLogin, userRegister }
