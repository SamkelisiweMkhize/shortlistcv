const userLogin = (req, res) => {
  const {email, password} = req.body

  res.json({
    name: 'edson',
    email: email,
    isAdmin: false,
    _id: 'jhghjkjhghjhgfg',
  })
}

module.exports = {userLogin}
