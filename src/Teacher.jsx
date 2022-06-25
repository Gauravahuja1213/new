import React from "react";
import "./Teacher.css";
function Teacher() {
  return (
    <div>
      <h1 className="heading">Upload File</h1>
      <div className="container-fluid cola">
        <div className="row">
          <div className=" cola col-10 mx-auto color">
            <form>
              <div className="form-group">
                <div class="mb-3">
                  <label for="formFileMultiple" class="form-label">
                    Upload File
                  </label>
                  <input
                    class="form-control"
                    type="file"
                    id="formFileMultiple"
                    multiple
                  />
                </div>
                <label>Description</label>
                <textarea
                  type="text"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Description"
                  cols="100"
                  rows="5"
                />
                
                </div>
                <button
                  type="button"
                  className="btn btn-primary btn-lg btn-block btna"
                >
                  Submit
                </button>
              
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Teacher;
