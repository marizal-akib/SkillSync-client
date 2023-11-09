import { useEffect, useState } from "react";
import Row from "./Row";
import useAuth from "../../../hooks/useAuth";

const PostedJobs = () => {
  const [currentDate, setCurrentDate] = useState();
  const [loading, setLoading] = useState(false);
  const [jobs, setJobs] = useState([]);
  const {user} = useAuth();
  const email = user.email;


  useEffect(() => {
    const today = new Date();
    const month = today.getMonth() + 1;
    const year = today.getFullYear();
    const date = today.getDate();
    const currentDate = `${year}-${month}-${date}`;
    setCurrentDate(currentDate);
  }, []);

  useEffect(() => {
    fetch(`https://skill-sync-server.vercel.app/my_post?email=${email}&sortBy=deadline&order=asc`)
      .then((res) => res.json())
      .then((data) => setJobs(data));
    setLoading(true);
  },[email]);

  console.log(jobs);

//   const { _id, jobTitle, deadline, description, category, minPrice, maxPrice } =
//     job;

  console.log(currentDate);
  return (
    <div>
      {loading ? (
        <div>
          <div className="overflow-x-auto">
            <table className="table">
              {/* head */}
              <thead>
                <tr>
                  <th></th>
                  <th>To-Day : {currentDate}</th>
                  <th className="text-2xl text-start">My Posted Jobs</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {/* row 1 */}
                {jobs.map((job) => (
                  <Row key={job._id} job={job} currentDate={currentDate} setJobs={setJobs} jobs={jobs}></Row>
                ))}
              </tbody>
              {/* foot */}
            </table>
          </div>
        </div>
      ) : (
        <div className=" p-80 ml-64 ">
          <span className="loading loading-infinity loading-lg"></span>
        </div>
      )}
    </div>
  );
};

export default PostedJobs;
