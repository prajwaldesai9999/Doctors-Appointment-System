import { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export default function Login() {
  const { login } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(email, password);
    alert("Logged in successfully!");
  };

  const styles = {
    container: {
      minHeight: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      background: "linear-gradient(135deg, #74ebd5, #ACB6E5)",
    },
    form: {
      background: "#fff",
      padding: "30px",
      borderRadius: "10px",
      width: "320px",
      boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
      display: "flex",
      flexDirection: "column",
      gap: "15px",
    },
    title: {
      textAlign: "center",
      marginBottom: "10px",
    },
    input: {
      padding: "10px",
      borderRadius: "6px",
      border: "1px solid #ccc",
      fontSize: "14px",
    },
    button: {
      padding: "10px",
      border: "none",
      borderRadius: "6px",
      background: "#4CAF50",
      color: "#fff",
      fontSize: "16px",
      cursor: "pointer",
    },
  };

  return (
    <div style={styles.container}>
      <form onSubmit={handleSubmit} style={styles.form}>
        <h2 style={styles.title}>Login</h2>

        <input
          style={styles.input}
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          style={styles.input}
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button style={styles.button} type="submit">
          Login
        </button>
      </form>
    </div>
  );
}
