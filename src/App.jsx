import React from "react";
import CreateSubmission from "./components/CreateSubmission";
import Submissions from "./components/Submissions";
import "./App.css";

function App() {
  const [submissions, setSubmissions] = React.useState({});

  const save = (submission) =>
    setSubmissions((prev) => ({
      ...prev,
      [submission.id]: submission,
    }));

  const submissionsArr = Object.values(submissions);
  const deleteSubmission = (id) => {
    setSubmissions((prevSubmissions) => {
      const newSubmissions = {};
      for (let submissionId in prevSubmissions) {
        if (submissionId !== id) {
          newSubmissions[submissionId] = prevSubmissions[submissionId];
        }
      }
      return newSubmissions;
    });
  };
  return (
    <div className="flex">
      <div>
        <CreateSubmission save={save} />
      </div>
      <div className="grow ml-2">
        <Submissions
          submissions={submissionsArr || []}
          deleteSubmission={deleteSubmission}
        />
      </div>
    </div>
  );
}

export default App;
