import React from "react";
import moment from "moment";
import { Link } from "react-router-dom";

const JobCard = (props) => {
  const {
    id,
    type,
    created_at,
    company,
    location,
    title,
    company_logo,
    index,
  } = props;

  return (
    <div className="col-lg-12 col-md-12" index={index + 1}>
      <div className="single_jobs white-bg d-flex justify-content-between">
        <div className="jobs_left d-flex align-items-center">
          <div className="thumb">
            <img
              className="company-logo"
              src={company_logo}
              alt="company logo"
            />
          </div>
          <div className="jobs_conetent">
            <Link to={"/job/" + id}>
              <h4>{title}</h4>
            </Link>
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
        <div className="jobs_right">
          <div className="apply_now">
            {/* <a class="heart_mark" href="#"> <i class="ti-heart"></i> </a> */}
            <Link to={"/job/" + id} className="boxed-btn3">
              Apply Now
            </Link>
          </div>
          <div className="date">
            <p>Date line: {created_at}</p>
            <p>Posted {moment(new Date(created_at)).fromNow()} </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobCard;
