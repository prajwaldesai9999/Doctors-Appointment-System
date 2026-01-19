import { useState } from "react";
import axios from "axios";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:5000/api/auth/register", {
      name,
      email,
      password,
    });
    alert("Registered successfully!");
  };

  const styles = {
    container: {
      minHeight: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      background: "linear-gradient(135deg, #ffecd2, #fcb69f)",
    },
    form: {
      background: "#fff",
      padding: "30px",
      borderRadius: "10px",
      width: "340px",
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
      background: "#ff7a18",
      color: "#fff",
      fontSize: "16px",
      cursor: "pointer",
    },
  };

  return (
    <div style={styles.container}>
      <form onSubmit={handleSubmit} style={styles.form}>
        <h2 style={styles.title}>Register</h2>

        <input
          style={styles.input}
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

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
          Register
        </button>
      </form>
    </div>
  );
}
