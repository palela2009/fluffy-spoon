import { useState } from "react"
import styles from "./Auth.module.css"
import { cn } from "../utils"

export const AuthPage = () => {
  // login or register
  const [activeForm, setActiveForm] = useState("login")

  return (
    <div className={styles.formContainer}>
      <div className={styles.formSwitch}>
        <button
          onClick={() => setActiveForm("login")}
          className={cn(
            styles.switchBtns,
            activeForm === "login" && styles.activeBtn
          )}
        >
          Login
        </button>
        <button
          onClick={() => setActiveForm("register")}
          className={cn(
            styles.switchBtns,
            activeForm === "register" && styles.activeBtn
          )}
        >
          Register
        </button>
      </div>
      <form className={styles.authForm}>
        <h2 className={styles.formTitle}>{activeForm}</h2>
        <p className={styles.formDesc}>
          {activeForm === "login"
            ? "Enter your credentials to access your account"
            : "Enter your information to create an account"}
        </p>
        {activeForm === "register" && (
          <>
            <div className="inputGroup">
              <label>Username</label>
              <input placeholder="John Doe" type="text" />
            </div>
          </>
        )}
        <div className="inputGroup">
          <label>Email</label>
          <input placeholder="name@example.com" type="email" />
        </div>
        <div className="inputGroup">
          <label>Password</label>
          <input type="password" />
        </div>
        {activeForm === "register" && (
          <>
            <div className="inputGroup">
              <label>Confirm Password</label>
              <input type="password" />
            </div>
          </>
        )}
        <button className={styles.submitBtn}>{activeForm}</button>
      </form>
    </div>
  )
}
