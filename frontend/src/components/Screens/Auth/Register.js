import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import Loader from "../../Loader";
import Error from "../../Error";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../../../actions/userActions";

function Register({ history }) {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [pic, setPic] = useState(
    "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg"
  );
  const [password, setPassword] = useState("");
  // const [error, setError] = useState(false);
  // const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();
  const userRegister = useSelector((state) => state.userRegister);
  const { loading, error, userInfo } = userRegister;

  const handleSubmit = async (e) => {
    e.preventDefault();

    dispatch(register(name, email, password, pic));
  };

  useEffect(() => {
    if (userInfo) {
      history.push("/resources");
    }
  }, [history, userInfo]);

  const postDetails = (pics) => {
    console.log(pics);
    if (pics.type) {
      const data = new FormData();
      data.append("file", pics);
      data.append("upload_preset", "devresources");
      data.append("cloud_name", "dsr04ptlz");
      fetch(" https://api.cloudinary.com/v1_1/dsr04ptlz/image/upload", {
        method: "post",
        body: data,
      })
        .then((res) => res.json())
        .then((data) => {
          setPic(data.url.toString());
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  return (
    <div className="container mt-4 p-3">
      <h1>Join devResources.io ✌</h1>
      {error && <Error msg="Account already exists" />}
      {loading && <Loader />}
      <form autocomplete="off" enctype="multipart/form-data">
        <div class="form-group">
          <label class="form-label mt-4">Name</label>
          <input
            type="text"
            class="form-control"
            placeholder="Name"
            onChange={(e) => setName(e.target.value)}
            name="name"
          />
        </div>

        <div class="form-group">
          <label class="form-label mt-4">Email address</label>
          <input
            type="email"
            class="form-control"
            placeholder="Enter email"
            onChange={(e) => setEmail(e.target.value)}
            name="email"
          />
        </div>
        <div class="form-group">
          <label class="form-label mt-4">Password</label>
          <input
            type="password"
            class="form-control"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            name="password"
          />
        </div>

        <div class="form-group">
          <label for="formFile" class="form-label mt-4">
            Profile Pic
          </label>
          <input
            class="form-control"
            type="file"
            id="formFile"
            onChange={(e) => postDetails(e.target.files[0])}
            name="file"
          />
        </div>
        <button
          type="submit"
          class="btn btn-outline-primary mt-4 px-5 py-2"
          onClick={handleSubmit}
          // disabled={email === undefined && password == undefined && name === undefined && name === undefined}
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default Register;
