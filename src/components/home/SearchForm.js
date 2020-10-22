import React, { useState } from "react";

import { connect } from "react-redux";

const SearchForm = (props) => {
  const [state, setState] = useState({
    description: "",
    location: "",
    full_time: false,
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name === "full_time") {
      setState((prevState) => ({ ...state, [name]: !prevState.full_time }));
    } else {
      setState({ ...state, [name]: value });
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(state);
    props.onSubmit(state);
  };

  return (
    <div>
      <div className="catagory_area">
        <div className="container">
          {/* form added */}
          <form onSubmit={handleSubmit}>
            <div className="row ">
              <div className="col-lg-3 col-md-4">
                <div className="single_input form-group">
                  <input
                    className="form-control"
                    type="text"
                    name="text"
                    placeholder="Search keyword"
                    value={state.description || ""}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="col-lg-3 col-md-4">
                <div className="single_input form-group">
                  <input
                    className="form-control"
                    type="text"
                    name="location"
                    placeholder="Location"
                    value={state.location || ""}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="col-lg-3 col-md-12">
                <div className="job_btn">
                  <button type="submit" className="boxed-btn3">
                    Find Job
                  </button>
                </div>
              </div>
            </div>
            <div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  name="full_time"
                  onChange={handleChange}
                  checked={state.full_time}
                />
                <label className="form-check-label">full time only</label>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SearchForm;
