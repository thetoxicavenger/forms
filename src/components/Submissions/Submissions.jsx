import React from "react";
import Submission from "../Submission";

function Submissions({ submissions = [], deleteSubmission }) {
  return (
    <>
      <h1>Submissions</h1>
      {submissions.map((submission) => {
        return (
          <Submission
            key={submission.id}
            {...submission}
            deleteSubmission={deleteSubmission}
          />
        );
      })}
    </>
  );
}

export default Submissions;
