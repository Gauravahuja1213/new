import React from "react";
import "./Ta.css";
function Ta() {
  return (
    <><div class='whatsapp_bg'>
         History appears here
    </div><div>
    
        <div className="container-fluid cola">
          <div className="row" display='table-row'>
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
                      multiple />
                  </div>
                  <label>Description</label>
                  <textarea
                    type="text"
                    class="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Description"
                    cols="50" 
                    rows="1" />

                </div><center>
                <button type="button" className="btna">
                  SUBMIT
                </button></center>

              </form>
            </div>
          </div>
        </div>
      </div></>
  );
}
export default Ta;
