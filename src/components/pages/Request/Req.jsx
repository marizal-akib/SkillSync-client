/* eslint-disable react/prop-types */
import { useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import "react-step-progress-bar/styles.css";
import { ProgressBar } from "react-step-progress-bar";

const Req = ({ bid,currentDate }) => {
  const {
    _id,
    jobTitle,
    jobId,
    // employerEmail,
    bidderEmail,
    offerPrice,
    offerDeadline,
    status,
  } = bid;
  const [current, setCurrent] = useState(status);
  const [value, setValue] = useState(status);

  const handleComplete = (_id) => {
    console.log(_id);
    const on = [value];

    const status = on[0];

    const done = {
      status,
    };

    console.log(done);

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
        fetch(`http://localhost:5000/bid_req/${_id}`, {
          method: "PUT",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(done),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.modifiedCount > 0) {
              console.log("success");
              setCurrent(done.status);
              console.log(done.status);

              Swal.fire({
                title: "Success!",
                text: "Thank you for your hard work",
                icon: "success",
                confirmButtonText: "OK",
              });
            }
          });
      }
    });
  };

  const date1 = new Date(`${currentDate}`);
  const date2 = new Date(`${offerDeadline}`);

  const differenceInMs = Math.abs(date2 - date1);

  const differenceInDays = differenceInMs / (1000 * 60 * 60 * 24);

  const maxDifference = 5; // Maximum difference in days
  const progress = (differenceInDays / maxDifference) *10;
  console.log(progress);
  return (
    <tr>
      <th>
        <label>
          <div className="space-y-2">
            <h2 className="text-xs font-semibold">{current}</h2>
            {
                (current === "In progress" ) && <ProgressBar
                percent={progress}
                filledBackground="linear-gradient(to right, #fefb72, #f0bb31)"
              />
            }
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
            <p>{bidderEmail}</p>
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
        <div className="flex flex-col w-1/2 space-y-3">
            {
                (  `${current}` === "Pending" ) &&
            <>
          <button
            onClick={() => handleComplete(_id, setValue("In progress"))}
            className="btn btn-success btn-sm rounded-md text-xs w-fit "
          >
            Accept
          </button>
          <button
            onClick={() => handleComplete(_id, setValue("Rejected"))}
            className="btn bg-orange-400 btn-sm rounded-md text-xs w-fit"
          >
            Reject
          </button>
            </>
            }
        </div>
      </td>
    </tr>
  );
};

export default Req;
