// Baseline to create jobs
import React from "react";

interface JobProps {
  name: string;
  description: string;
  qualification: string;
  salaryRange: string;
}

const JobCard: React.FC<JobProps> = ({
  name,
  description,
  qualification,
  salaryRange,
}) => {
  return (
    <div className="col-md-4">
      <div className="d-flex m-3">
        <div className="card" style={{ width: "18rem;" }}>
          <h2 className="job-title m-3">{name}</h2>
          <h5 className="job-description m-3">{description}</h5>
          <h5 className="job-qualification m-3">{qualification}</h5>
          <h5 className="job-salary-range m-3">{salaryRange}</h5>
          <div className="d-grid gap-2 d-md-flex justify-content-md-end">
            <a href="/ApplicationForm">
              <button
                className="btn btn-primary me-md-2 btn-lg b-3"
                type="button"
                style={{ marginBottom: "10px" }}
              >
                Apply
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobCard;
