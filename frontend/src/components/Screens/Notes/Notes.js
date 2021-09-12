import { useEffect, useState } from "react";
// import axios from "axios";
// import notes from "../../../noteslocal"; 
import { useDispatch, useSelector } from "react-redux";

function Notes() {
  const deleteHandler = (id) => {
    if (window.confirm("Are you sure?")) {
    }
  };
  const dispatch = useDispatch();
  const resourceList = useSelector((state) => state.resourceList);
  const { loading, resources, error } = resourceList;

  // Resources States
  // const [res, setRes] = useState([]);

  // GET Resources
  useEffect(() => {
    // const getAll = async () => {
    //   const { data } = await axios.get("/api/notes/");
    //   console.log("API CALL => ", data );
    //   setRes(data)
    // };
    // getAll();

    dispatch(listResources())
  }, [dispatch]);

  return (
    <div className="container mt-4 p-3">
      <div className="row p-2 w-120">
        <h1>My Resources</h1>
        <br />
        {res.map((note) => (
          <div className="col-12 col-md-4 col-lg-4" key={note._id}>
            <div
              className="p-3 mx-1 my-2"
              style={{ boxShadow: "4px 4px 10px rgba(0,0,0,0.1)" }}
            >
              <img
                style={{ width: "100%", height: "auto", padding: "6px 0px" }}
                src="data:image/jpeg;base64,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"
                alt=""
              />

              <div className="content px-1 py-2">
              <span class="badge bg-info mb-2 ">{note.category}</span> 
              <span class="badge bg-warning mx-2">Free</span>
              <span class="badge bg-danger">Paid</span>

                <h3 className="">{note.title}</h3>
                <p className="">{note.content}</p>
                <a href={`/edit/${note._id}`}>
                  <button
                    type="button"
                    class="btn btn-primary px-3 py-1 btn-sm"
                  >
                    Edit
                  </button>
                </a>
                <a href="">
                  <button
                    type="button"
                    class="btn btn-primary px-3 py-1 mx-2 btn-sm"
                    onClick={() => deleteHandler(note._id)}
                  >
                    Delete
                  </button>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Notes;
