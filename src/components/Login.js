import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  async function submit(e) {
    e.preventDefault();

    try {
      const res = await axios.post("http://localhost:8000/", {
        email,
        password,
      });

      if (res.data == "exist") {
        navigate("/home", { state: { id: email } });
      } else if (res.data == "notexist") {
        setError("User has not signed up");
      }
    } catch (e) {
      setError("Wrong details");
      console.log(e);
    }
  }

  return (
    <div className="login">
      <h1>Login</h1>
      <form onSubmit={submit}>
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label>Password:</label>
          <input
            type="password"
            className="form-control"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>

      {error && <div className="alert alert-danger">{error}</div>}

      <br />
      <p>
        Don't have an account? Sign up <Link to="/signup">here</Link>.
      </p>
    </div>
  );
}

export default Login;
