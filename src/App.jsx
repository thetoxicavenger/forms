import React from "react";
import CreateSubmission from "./components/CreateSubmission";

function App() {
  const [submissions, setSubmissions] = React.useState([]);
  return (
    <div>
      <CreateSubmission save={setSubmissions} />
    </div>
  );
}

export default App;
