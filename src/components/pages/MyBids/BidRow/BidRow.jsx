/* eslint-disable react/prop-types */
import { useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const BidRow = ({ bid }) => {
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
const [current , setCurrent] = useState(status);

  const handleComplete = (_id) => {
    console.log(_id);
    const status = 'Completed';

    const done = {
        status
    }
    Swal.fire({
      title: "Are you sure?",
      text: "Please double check before submitting",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, submit",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://skill-sync-server.vercel.app/complete_job/${_id}`, {
            method: "PUT",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(done),
          })
            .then((res) => res.json())
            .then((data) => {
              console.log(data);
              if ( data.modifiedCount > 0) {
                console.log("success");
                setCurrent(done.status)
                console.log(done.status);
                
                Swal.fire({
                  title: "Success!",
                  text: "Thank you for your hard work",
                  icon: "success",
                  confirmButtonText: "OK",
                })
               
              }
            });
      }
    });
  };
  return (
    <tr>
      <th>
        <label>
          <div>
            <h2 className="text-xs font-semibold">{current}</h2>
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
          {( `${current}` === "In progress") && (
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
