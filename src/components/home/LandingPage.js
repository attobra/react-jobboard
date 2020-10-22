import React, { useState, useEffect } from "react";
import _ from "lodash";
import { connect } from "react-redux";
import { initiateGetJobs } from "../actions/jobs";
import { resetErrors } from "../actions/errors";
import Header from "./Header";
// import Search from './Search';
// import Results from './Results';

import SearchForm from "./SearchForm";
import JobsContainer from "./JobsContainer";
import JobDetails from "./JobDetails";
import Spinner from "../layout/Spinner";

const LandingPage = (props) => {
  const [results, setResults] = useState([]);
  const [errors, setErrors] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [jobId, setJobId] = useState(-1);
  const [page, setPage] = useState("home");

  useEffect(() => {
    setResults(props.jobs);
  }, [props.jobs]);

  useEffect(() => {
    setErrors(props.errors);
  }, [props.errors]);

  const loadJobs = (selection) => {
    const { dispatch } = props;
    const { description, location, full_time, page = 1 } = selection;
    dispatch(resetErrors());
    setIsLoading(true);
    dispatch(initiateGetJobs({ description, location, full_time, page }))
      .then(() => {
        setIsLoading(false);
      })
      .catch(() => setIsLoading(false));
  };

  const handleSubmit = (selection) => {
    loadJobs(selection);
  };
  const handleItemClick = (jobId) => {
    setPage("details");
    setJobId(jobId);
  };

  let jobDetails = {};
  if (page === "details") {
    jobDetails = results.find((job) => job.id === jobId);
  }

  return (
    <div>
      <Header />
      <SearchForm onSubmit={handleSubmit} />
      {!_.isEmpty(errors) && (
        <div className="errorMsg">
          <p>{errors.error}</p>
        </div>
      )}
      <JobsContainer results={results} />
      {isLoading && <p className="loading">Loading...</p>}
      <div>
        <Results results={results} onItemClick={handleItemClick} />
      </div>
      <div>
        <JobDetails details={jobDetails} />
      </div>

      {/* <SearchForm />
      {loading ? <Spinner /> : <JobsContainer />} */}
    </div>
  );
};

const mapStateToProps = (state) => ({
  jobs: state.jobs,
  errors: state.errors,
});

export default connect(mapStateToProps)(LandingPage);
