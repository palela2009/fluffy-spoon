import express from "express"
import mongoose from "mongoose"
import bcrypt from "bcrypt"

const saltRounds = 12

const userSchema = new mongoose.Schema(
  {
    email: String,
    username: String,
    password: String
  },
  { timestamps: true }
)

export const User = mongoose.model("User", userSchema)

const app = express()

app.use(express.json())

app.post("/users/register", async (req, res) => {
  const { username, email, password, confirmPassword } = req.body

  if (password === confirmPassword) {
    const hashedPassword = await bcrypt.hash(password, saltRounds)

    const newUser = new User({
      username,
      email,
      password: hashedPassword
    })

    await newUser.save()

    return res.status(201).json(newUser)
  }

  res.send("OK")
})

app.post("/users/login", async (req, res) => {
  const { email, password } = req.body

  const existingUser = await User.findOne({ email })

  if (
    existingUser !== null &&
    (await bcrypt.compare(password, existingUser.password))
  ) {
    return res.json(existingUser)
  }

  return res.status(401).json({
    message: "Invalid username or password"
  })
})

app.listen(3000, async () => {
  console.log("Running on port 3000")
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/fluffy-spoon")
    console.log("Connected to the database")
  } catch (error) {
    console.log(error)
  }
})
