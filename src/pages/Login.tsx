import React, { useState, useContext } from "react";
import styles from "../styles/Login.module.css";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router";

function LoginForm() {
  const [email, setEmail] = useState<string>("testas@testas.lt");
  const [password, setPassword] = useState<string>("testas");
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    try {
      login(email, password);
      navigate("/dashboard", { replace: true });
    } catch (error) {
      console.log("Klaida, ", error);
    }
  };

  return (
    <div className={styles.loginContainer}>
      <div className={styles.loginForm}>
        <form className={styles.form} onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            placeholder="El. paštas"
            required
            value={email}
            className={styles.input}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            name="password"
            placeholder="Slaptažodis"
            required
            value={password}
            className={styles.input}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className={styles.button}>Prisijungti</button>
        </form>
      </div>
    </div>
  );
}

export default LoginForm;
