import express from "express"
import mongoose from "mongoose"
import bcrypt from "bcrypt"
import cors from "cors"
import session from "express-session"
import MongoStore from "connect-mongo"

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

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true
  })
)

app.use(express.json())

app.use(
  session({
    secret: "alksdjflaksjdflasdjf",
    cookie: {
      maxAge: 1000 * 60 * 60 * 3
    },
    store: MongoStore.create({
      mongoUrl: "mongodb://127.0.0.1:27017/fluffy-spoon"
    })
  })
)

app.post("/users/register", async (req, res) => {
  const { username, email, password, confirmPassword } = req.body

  if (password === confirmPassword) {
    const saltRounds = 12
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
    req.session.userId = existingUser._id.toString()
    return res.json(existingUser)
  }

  return res.status(401).json({
    message: "Invalid username or password"
  })
})

app.get("/users/status", async (req, res) => {
  // console.log(req.session.userId)

  if (req.session.userId) {
    const loggedInUser = await User.findById(req.session.userId).select(
      "username email"
    )

    if (loggedInUser) {
      return res.json({
        user: loggedInUser.toObject()
      })
    }
  }

  return res.json({
    user: null
  })
})

app.delete("/user/logout", async (req, res) => {
  res.clearCookie("connect.sid")
  req.session.destroy()

  res.json({
    message: "Logged out"
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
