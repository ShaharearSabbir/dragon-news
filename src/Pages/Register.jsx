import React, { use } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";

const Register = () => {
  const { createUser, setUser, updateUser } = use(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photo = form.photoUrl.value;
    const email = form.email.value;
    const password = form.password.value;
    const updatedData = { displayName: name, photoURL: photo };
    createUser(email, password)
      .then((result) => {
        const user = result.user;
        updateUser(updatedData)
          .then(() => {
            setUser({ ...user, updatedData });
            navigate(location.state ? location.state : "/");
          })
          .catch((error) => {
            setUser(user);
            console.log(error);
          });
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl p-5">
        <h2 className="text-2xl font-semibold text-center mb-6">
          Register Your Account
        </h2>
        <hr className="border mb-6 border-base-300 w-full" />
        <form onSubmit={handleRegister}>
          <fieldset className="fieldset">
            <label className="label">Name</label>
            {/* Name */}
            <input
              type="text"
              name="name"
              className="input w-full"
              placeholder="Name"
              required
            />
            <label className="label">Name</label>
            {/* Photo Url */}
            <input
              name="photoUrl"
              type="text"
              className="input w-full"
              placeholder="Photo Url"
              required
            />
            <label className="label">Email</label>
            {/* Email */}
            <input
              name="email"
              type="email"
              className="input w-full"
              placeholder="Email"
              required
            />
            <label className="label">Password</label>
            {/* Password */}
            <input
              name="password"
              type="password"
              className="input w-full"
              placeholder="Password"
              required
            />
            <button type="submit" className="btn btn-primary mt-4">
              Register
            </button>
          </fieldset>
          <p className="my-6 text-center font-semibold">
            Already Have An Account ?{" "}
            <Link className="text-secondary" to="/auth/login">
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
