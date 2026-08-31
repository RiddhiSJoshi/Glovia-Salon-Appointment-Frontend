import { useState } from "react";

import "./Login.scss";

function Login() {
  const [role, setRole] = useState("customer");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log({
      email,
      password,
      role,
    });

    alert(
      "Login API will be connected here."
    );
  };

  return (
    <div className="login-page">

      <div className="login-container">

        <div className="login-brand">
          <div className="login-logo">
            G
          </div>

          <h1>
            Welcome to Glōvia
          </h1>

          <p>
            Sign in to continue to your Glōvia experience.
          </p>
        </div>

        <div className="role-selector">

          <button
            type="button"
            className={
              role === "customer"
                ? "active"
                : ""
            }
            onClick={() =>
              setRole("customer")
            }
          >
            Customer
          </button>

          <button
            type="button"
            className={
              role === "salon"
                ? "active"
                : ""
            }
            onClick={() =>
              setRole("salon")
            }
          >
            Salon
          </button>

          <button
            type="button"
            className={
              role === "admin"
                ? "active"
                : ""
            }
            onClick={() =>
              setRole("admin")
            }
          >
            Admin
          </button>

        </div>

        <form
          className="login-form"
          onSubmit={handleSubmit}
        >

          <label>
            Email

            <input
              type="email"
              value={email}
              onChange={(event) =>
                setEmail(event.target.value)
              }
              placeholder="Enter your email"
              required
            />
          </label>

          <label>
            Password

            <input
              type="password"
              value={password}
              onChange={(event) =>
                setPassword(event.target.value)
              }
              placeholder="Enter your password"
              required
            />
          </label>

          <div className="login-options">
            <label className="remember">
              <input
                type="checkbox"
              />

              Remember me
            </label>

            <button
              type="button"
              className="forgot-password"
            >
              Forgot password?
            </button>
          </div>

          <button
            type="submit"
            className="primary-btn"
          >
            Sign In
          </button>

        </form>

        <p className="login-note">
          Selected portal:{" "}
          <strong>
            {role}
          </strong>
        </p>

      </div>

    </div>
  );
}

export default Login;