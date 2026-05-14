import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8080/api/jobs')
      .then(res => setJobs(res.data));
  }, []);

  return (
    <div>
      <h1>Job Portal</h1>
      {jobs.map(job => (
        <div key={job.id}>
          <h2>{job.title}</h2>
          <p>{job.company}</p>
          <p>{job.location}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
