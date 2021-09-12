import React from "react";
import { useState, useEffect } from "react";

import Loader from "../../Loader";
import Error from "../../Error";
import { useDispatch, useSelector } from "react-redux";
import {login} from "../../../actions/userActions"

function Login({history}) {
  const [value, setValue] = useState();

  const handleChange = (e) => {
    setValue({
      ...value,
      [e.target.name]: e.target.value,
    });
    console.log(value);
  };

  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { loading, error, userInfo } = userLogin;

  useEffect(() => {
    if (userInfo) {
      history.push("/resources");
    }
  }, [history, userInfo]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password} = value;
    dispatch(login(email, password));
  };


  return (
    <div className="container mt-5 p-3">
      <h1>Login Now</h1>
      {error && <Error msg="Invalid Credentials" />}
      {loading && <Loader />}
      <form autocomplete="off">
        <div class="form-group">
          <label class="form-label mt-4">Email</label>
          <input
            type="email"
            class="form-control"
            placeholder="Email address"
            onChange={handleChange}
            name="email"
            required
          />
        </div>

        <div class="form-group">
          <label class="form-label mt-4">Password</label>
          <input
            type="password"
            class="form-control"
            placeholder="Password"
            onChange={handleChange}
            name="password"
            required
          />
        </div>

        <button
          type="submit"
          class="btn btn-outline-primary mt-4 px-5 py-2"
          onClick={handleSubmit}
          disabled={value === undefined}
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default Login;
