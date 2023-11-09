import { Link } from "react-router-dom";
import Swal from "sweetalert2";

/* eslint-disable react/prop-types */
const Row = ({ job, currentDate,jobs,setJobs}) => {
  const { _id, jobTitle, deadline ,category, minPrice, maxPrice } =
    job;

  const date1 = new Date(`${currentDate}`);
  const date2 = new Date(`${deadline}`);

  const handleDelete= _id =>{
    console.log(_id);
    Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.isConfirmed) {
        
        
        fetch(`https://skill-sync-server.vercel.app/job/${_id}`,{
            method: 'DELETE'
        })
        .then(res=>res.json())
        .then(data => {
            console.log(data);
            if(data.deletedCount > 0)
              Swal.fire(
            'Deleted!',
            'Your post has been deleted.',
            'success'
          )
          const remaining = jobs.filter(job=> job._id !==_id);
          setJobs(remaining);
        })

        }
      })
  }

  return (
    <tr>
      <th>
        <label>
          {date1 >= date2 ? (
            <div className="badge badge-error badge-md"></div>
          ) : (
            <div className="badge badge-primary badge-md"></div>
          )}
        </label>
      </th>
      <td>
        <div className="flex items-center space-y-3">
          <div>
            <div className="font-bold text-lg">{jobTitle}</div>
            <p className="text-sm opacity-50">${minPrice}</p>
            <p className="text-sm opacity-50">${maxPrice}</p>
          </div>
        </div>
      </td>
      <td>
        <div className="flex flex-col items-start space-y-2">
          <div>
            <span className="badge badge-ghost badge-sm">{category}</span>
          </div>
          <div>{deadline}</div>
          <div>
            <Link
              to={`/job/${_id}`}
              className="btn underline btn-ghost hover:to-blue-700 btn-xs"
            >
              details
            </Link>
          </div>
        </div>
      </td>
      <td>
        <div className="flex flex-col w-1/2 space-y-3">
          <Link to={`/update_job/${job._id}`} className="btn btn-success btn-sm rounded-md text-xs w-fit ">
            Update
          </Link>
          <button onClick={() => handleDelete(_id)} className="btn bg-orange-400 btn-sm rounded-md text-xs w-fit">
            Delete
          </button>
        </div>
      </td>
    </tr>
  );
};

export default Row;
