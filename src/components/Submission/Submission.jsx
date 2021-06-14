import React from "react";
import "./Submission.css";

function Submission({
  id,
  firstName,
  lastName,
  email,
  note,
  deleteSubmission,
}) {
  const onClick = () => {
    deleteSubmission(id);
  };
  return (
    <div className="p-1 mx-1 border">
      <ul>
        <li>First Name: {firstName}</li>
        <li>Last Name: {lastName}</li>
        <li>Email: {email}</li>
        <li>Note: {note}</li>
      </ul>
      <button onClick={onClick}>Delete x</button>
    </div>
  );
}

export default Submission;
