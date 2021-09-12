import React from "react";

function CreateNote() {
  return (
    <div className="container mt-4 p-3">
      <h1>Create New Resource</h1>
      <form autocomplete="off">

        <div class="form-group">
          <label for="" class="form-label mt-4">
            Resource Name
          </label>
          <input type="text" class="form-control" placeholder="Resource Name" />
        </div>

        <div class="form-group">
          <label for="" class="form-label mt-4">
            Resource Thumbnail
          </label>
          <input
            type="url"
            class="form-control"
            placeholder="Resource Thumbnail"
          />
        </div>

        <div class="form-group">
          <label for="" class="form-label mt-4">
            Resource Link
          </label>
          <input type="url" class="form-control" placeholder="Resource Link" />
        </div>

        <div class="form-group">
          <label for="exampleTextarea" class="form-label mt-4">
            Resource Description
          </label>
          <textarea
            class="form-control"
            rows="3"
            placeholder="Resource Description"
          ></textarea>
        </div>
        
        <div class="form-group">
          <label class="form-label mt-4">Resource Category</label>
          <select class="form-select" id="exampleSelect1">
            <option name="TE">Text Editors</option>
            <option name="CL">Coding Platform</option>
            <option name="JA">JS Animation</option>
            <option name="CG">CSS Gradients</option>
            <option name="CF">CSS Frameworks</option>
            <option name="TG">Typography</option>
            <option name="I">Icons</option>
            <option name="WB">Website Builders</option>
            <option name="CP">Color Pickers</option>
            <option name="CP">Others</option>
          </select>
        </div>
    <button type="submit" class="btn btn-outline-primary mt-4">Contribute &nbsp;❤✨</button>
      </form>
    </div>
  );
}

export default CreateNote;
