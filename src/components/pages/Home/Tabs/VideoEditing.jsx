import { useEffect, useState } from "react";


const VideoEditing = () => {
    const [jobs, setJobs] = useState([]);
    const [count, setCount] = useState(0);
    const [currentPage, setCurrentPage] = useState(0);
  const [loading, setLoading] = useState(false);
    const jobPerPage = 9;
    const category ="Video Editing"
    console.log(jobs.length);
  
    const numberOfPages = Math.ceil(count / jobPerPage);
  
    const pages = [...Array(numberOfPages).keys()];
  
    useEffect(() => {
      fetch(`http://localhost:5000/jobs?page=${currentPage}&size=${jobPerPage}&category=${category}`)
        .then((res) => res.json())
        .then((data) => setJobs(data))
  
    setLoading(true);
  }, [currentPage, jobPerPage]);
  
    useEffect(() => {
         
      fetch(`http://localhost:5000/all_jobs?&category=${category}`)
        .then((res) => res.json())
        .then((data) => setCount(data.length));
setLoading(true);
    },[]);

    const handlePrev = () => {
      if (currentPage > 0) {
        setCurrentPage(currentPage - 1);
      }
    };
    const handleNext = () => {
      if (currentPage < pages.length - 1) {
        setCurrentPage(currentPage + 1);
      }
    };
    return (
      <div>
      {loading ? (
        <>
          <h2 className="p-4 text-2xl font-semibold">{count} jobs</h2>
          <div className="grid md:grid-cols-3 grid-cols-1 gap-4 mx-4">
            {jobs.map((job) => (
              <div key={job._id} className="card  bg-base-100 shadow-xl">
                <div className="card-body">
                  <h2 className="card-title">
                    {job.jobTitle}
                    <div className="badge border-none font-bold text-orange-900 text-xs">
                      {job.category}
                    </div>
                  </h2>
                  <p>{job.description}</p>
                  <p>
                    Price: {job.minPrice}$ - {job.maxPrice}$
                  </p>

                  <div className="card-actions justify-end">
                    <button className="btn btn-primary">Bid Now</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center m-10">
            <button className="btn rounded-r-none" onClick={handlePrev}>
              Prev
            </button>
            {pages.map((page) => (
              <button
                onClick={() => setCurrentPage(page)}
                key={page}
                className={`btn btn-square  border-none text-base m-1 ${
                  currentPage === page
                    ? "bg-orange-500 underline"
                    : "bg-transparent"
                } `}
              >
                {page}
              </button>
            ))}
            <button className="btn rounded-l-none" onClick={handleNext}>
              Next
            </button>
          </div>
        </>
      ) : (
        <span className="loading loading-infinity loading-lg"></span>
      )}
    </div>
    );
};

export default VideoEditing;