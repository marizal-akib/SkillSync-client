import { Link, useLoaderData } from "react-router-dom";

const BidPage = () => {
  const jobData = useLoaderData();

  const job = jobData[0];
  console.log(job);

  const { _id, jobTitle, deadline, description, category, minPrice, maxPrice } =
    job;

  return (
    <div>
      {jobTitle}
      {description}
    </div>
  );
};

export default BidPage;
