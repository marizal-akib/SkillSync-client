import { useEffect, useState } from "react";

const AllJob = () => {
  const [jobs, setJobs] = useState([]);
  const [count, setCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);
  const jobPerPage = 9;
  console.log(jobs.length);

  const numberOfPages = Math.ceil(count / jobPerPage);

  const pages = [...Array(numberOfPages).keys()];

  useEffect(() => {
    fetch(`http://localhost:5000/jobs?page=${currentPage}&size=${jobPerPage}`)
      .then((res) => res.json())
      .then((data) => setJobs(data));
  }, [currentPage, jobPerPage]);

  useEffect(() => {
    fetch("http://localhost:5000/all_jobs")
      .then((res) => res.json())
      .then((data) => setCount(data.length));
  });

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
      <h2 className="p-4 text-2xl font-semibold">{count} jobs</h2>
      <div className="grid md:grid-cols-3 grid-cols-1 gap-4 mx-4">
        {jobs.map((job) => (
          <div key={job._id} className="card  bg-base-100 shadow-xl">
            <div className="card-body">
              <h2 className="card-title">
                {job.jobTitle}
                <div className="badge border-none font-bold text-orange-900 text-xs">{job.category}</div>
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
        <h2>current page : {currentPage}</h2>
        <button className="btn rounded-r-none" onClick={handlePrev}>Prev</button>
        {pages.map((page) => (
          <button
            onClick={() => setCurrentPage(page)}
            key={page}
            
            className={`btn btn-square  border-none text-base m-1 ${currentPage === page ? 'bg-orange-500 underline' : 'bg-transparent'} `}
          >
            {page}
          </button>
        ))}
        <button className="btn rounded-l-none" onClick={handleNext}>Next</button>
      </div>
    </div>
  );
};

export default AllJob;
