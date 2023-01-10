import React, { useState } from 'react'
import {BrowserRouter as Router, Link } from "react-router-dom";
import frontImg from "../../src/assets/img/pages/myworld.png";
import { useForm } from "react-hook-form";

const Login = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const handleEmailChange = (e) => {
    setEmail({ email: e.target.value });
  };
  const handlePasswordChange = (e) => {
    setPassword({ password: e.target.value });
  };

  const onSubmit = (data) => console.log(data);

  console.log('here---',watch("email")); // watch input value by passing the name of it
  console.log('here2---',watch("password")); // watch input value by passing the name of it
  return (
    <div className="authentication-wrapper authentication-cover">
      <div className="authentication-inner row m-0">
        <div className="d-none d-lg-flex col-lg-7 col-xl-8 align-items-center">
          <div className="flex-row text-center mx-auto">
            <img
              src={frontImg}
              alt="Auth Cover Bg color"
              width="520"
              className="img-fluid authentication-cover-img"
            />
            <div className="mx-auto">
              <h3>My World!</h3>
              <p>
                The totality of all space and time; all that is, <br /> has
                been, and will be.
              </p>
            </div>
          </div>
        </div>
        <div className="d-flex col-12 col-lg-5 col-xl-4 align-items-center authentication-bg p-sm-5 p-4">
          <div className="w-px-400 mx-auto">
            <div className="app-brand mb-4">
              <Router>
                <Link to="#!" className="app-brand-link gap-2 mb-2">
                  <span className="app-brand-text demo h3 mb-0 fw-bold">
                    My World
                  </span>
                </Link>
              </Router>
            </div>
            <h4 className="mb-2">Welcome to My World! 👋</h4>
            <p className="mb-4">
              Please sign-in to your account and start the adventure
            </p>
            <pre>{JSON.stringify(email, undefined, 2)}</pre>
            <pre>{JSON.stringify(password, undefined, 2)}</pre>
            <form
              id="formAuthentication"
              className="mb-3"
              method="POST"
              onSubmit={handleSubmit(onSubmit)}
            >
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email or Username
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="email"
                  name="email-username"
                  placeholder="Enter your email or username"
                  onChange={handleEmailChange}
                  {...register("email", { required: true })}
                />
                {errors.email && <span>Email is required</span>}
              </div>
              <div className="mb-3 form-password-toggle">
                <div className="d-flex justify-content-between">
                  <label className="form-label" htmlFor="password">
                    Password
                  </label>
                  <Router>
                    <Link to="#!">
                      <small>Forgot Password?</small>
                    </Link>
                  </Router>
                </div>
                <div className="input-group input-group-merge">
                  <input
                    type="password"
                    id="password"
                    className="form-control"
                    name="password"
                    placeholder="&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;"
                    aria-describedby="password"
                    onChange={handlePasswordChange}
                    {...register("password", { required: true })}
                  />
                  <span className="input-group-text cursor-pointer">
                  <i className="bx bx-hide"></i>
                  </span>
                  </div>
                  {errors.password && <span>Password is required</span>}
              </div>
              <div className="mb-3">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="remember-me"
                  />
                  <label className="form-check-label" htmlFor="remember-me">
                    Remember Me
                  </label>
                </div>
              </div>
              <button className="btn btn-primary d-grid w-100">Sign in</button>
            </form>

            <p className="text-center">
              <span>New on our platform?</span>
              <Router>
                <Link to="auth-register-cover.html">
                  <span>Create an account</span>
                </Link>
              </Router>
            </p>

            <div className="divider my-4">
              <div className="divider-text">or</div>
            </div>

            <div className="d-flex justify-content-center">
              <Router>
                <Link to="#!" className="btn btn-icon btn-label-facebook me-3">
                  <i className="tf-icons bx bxl-facebook"></i>
                </Link>
              </Router>
              <Router>
                <Link
                  to="#!"
                  className="btn btn-icon btn-label-google-plus me-3"
                >
                  <i className="tf-icons bx bxl-google-plus"></i>
                </Link>
              </Router>
              <Router>
                <Link to="#!" className="btn btn-icon btn-label-twitter">
                  <i className="tf-icons bx bxl-twitter"></i>
                </Link>
              </Router>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login