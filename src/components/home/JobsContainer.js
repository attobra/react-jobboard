import React from "react";
import { connect } from "react-redux";
import JobCard from "./JobCard";

const JobsContainer = ({ results }) => {
  // const { jobs } = this.props;

  return (
    <div className="job_listing_area">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="section_title">
              <h3>Job Listing</h3>
            </div>
          </div>
          {/* <div className="col-lg-6">
                    <div className="brouse_job text-right">
                        <a href="jobs.html" className="boxed-btn4">Browse More Job</a>
                    </div>
                </div> */}
        </div>
        <div className="job_lists">
          <div className="row">
            {results.map((job, index) => (
              <JobCard key={job.id} {...job} index={index} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobsContainer;
