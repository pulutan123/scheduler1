import React, { useState } from "react";
import axios from "axios";
import { useLocation, useNavigate, Link } from "react-router-dom";

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useNavigate();

  async function submit(e) {
    e.preventDefault();

    try {
      const res = await axios.post("http://localhost:8000/signup", {
        email,
        password,
      });

      if ((res.data = "exist")) {
        alert("User already exist");
      } else if ((res.data = "notexist")) {
        history("/home", { state: { id: email } });
      }
    } catch (e) {
      alert("Wrong details");
      console.log(e);
    }
  }

  return (
    <div className="signup">
      <h1>Signup</h1>
      <form onSubmit={submit}>
        <input
          type="email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          placeholder="Email"
          name=""
          id=""
        />
        <input
          type="password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          placeholder="Password"
          name=""
          id=""
        />
        <button type="submit">Submit</button>
        <Link to="/login">Login Page</Link>
      </form>

      <br />
      <p>OR</p>
    </div>
  );
}

export default Signup;
