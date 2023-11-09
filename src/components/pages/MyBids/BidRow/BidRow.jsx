/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const BidRow = ({ bid, bids, setBids }) => {
  const {
    _id,
    jobTitle,
    jobId,
    employerEmail,
    // bidderEmail,
    offerPrice,
    offerDeadline,
    status,
  } = bid;

  const handleComplete = (_id) => {
    console.log(_id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/bid/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0)
              Swal.fire("Deleted!", "Your post has been deleted.", "success");
            const remaining = bids.filter((bid) => bid._id !== _id);
            setBids(remaining);
          });
      }
    });
  };
  return (
    <tr>
      <th>
        <label>
          <div>
            <h2 className="text-xs font-semibold">{status}</h2>
          </div>
        </label>
      </th>
      <td>
        <div className="flex items-center space-y-3">
          <div>
            <div className="font-bold text-lg">{jobTitle}</div>
            <p className="text-sm opacity-50">${offerPrice}</p>
          </div>
        </div>
      </td>
      <td>
        <div className="flex flex-col items-start space-y-2">
          <div>
            <p>{employerEmail}</p>
          </div>
          <p>{offerDeadline}</p>
          <div>
            <Link
              to={`/job/${jobId}`}
              className="btn underline btn-xs text-xs bg-transparent border-none hover:to-blue-700 "
            >
              details
            </Link>
          </div>
        </div>
      </td>
      <td>
        <div className=" w-1/2 space-y-3">
          {(`${status}` !== "Pending" || `${status}` === 'Completed') && (
            <button
              onClick={() => handleComplete(_id)}
              className="btn btn-info btn-sm rounded-md text-xs w-fit"
            >
              Complete
            </button>
          )}
        </div>
      </td>
    </tr>
  );
};

export default BidRow;
