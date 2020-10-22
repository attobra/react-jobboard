import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Spinner from "./Spinner";

const JobDetails = ({ details }) => {
  const {
    type,
    title,
    description,
    location,
    company,
    company_url,
    company_logo,
    how_to_apply,
  } = details;

  // const { loading, job } = props;
  let jobInfo = (
    <div>
      <div className="row">
        <div className="col-md-12">
          <Link to="/" className="submit_btn">
            <button className="boxed-btn3 w-100 mt-2" type="submit">
              Go Back to Search
            </button>
          </Link>
        </div>
      </div>

      <div className="job_details_area">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="job_details_header">
                <div className="single_jobs white-bg d-flex justify-content-between">
                  <div className="jobs_left d-flex align-items-center">
                    <div className="thumb">
                      <img className="company-logo" src={company_logo} alt="" />
                    </div>
                    <div className="jobs_conetent">
                      <a href={company_url}>
                        <h4>{title}</h4>
                      </a>
                      <div className="links_locat d-flex align-items-center">
                        <div className="location">
                          <p>
                            {" "}
                            <i className="fa fa-map-marker"></i> {location}
                          </p>
                        </div>
                        <div className="location">
                          <p>
                            {" "}
                            <i className="fa fa-clock-o"></i> {type}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="descript_wrap white-bg">
                <div className="single_wrap">
                  <h4>Job description</h4>
                  <div dangerouslySetInnerHTML={{ __html: description }}></div>
                </div>
              </div>
              <div className="apply_job_form white-bg">
                <h4>Apply for the job</h4>
                <div dangerouslySetInnerHTML={{ __html: how_to_apply }}></div>
                <form action="#">
                  <div className="row">
                    <div className="col-md-12">
                      <div className="submit_btn">
                        <a href={company_url} className="boxed-btn3 w-100">
                          Apply Now
                        </a>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="job_sumary">
                <div className="summery_header">
                  <h3>Job Summary</h3>
                </div>
                <div className="job_content">
                  <ul>
                    <li>
                      Published on: <span>{created_at}</span>
                    </li>
                    <li>
                      Company: <span>{company}</span>
                    </li>

                    <li>
                      Location: <span>{location}</span>
                    </li>
                    <li>
                      Job Nature: <span>{type} </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
  // let content = loading ? <Spinner /> : jobInfo;

  return <div>{jobInfo}</div>;
};

export default JobDetails;
