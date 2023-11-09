import {  useLoaderData } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import Swal from "sweetalert2";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const BidPage = () => {
  const jobData = useLoaderData();
  const { user } = useAuth();

  const job = jobData[0];
  // console.log(job);

  const {
    _id,
    jobTitle,
    deadline,
    employerEmail,
    description,
    category,
    minPrice,
    maxPrice,
  } = job;

  const handelBid = (e) => {
    e.preventDefault();

    const form = e.target;

    const jobId = _id ;
    const bidderEmail = user.email;
    const offerDeadline = form.deadline.value;
    const offerPrice = form.offerPrice.value;
    const status = 'Pending'

    const jobBid = {
      jobTitle,
      jobId,
      employerEmail,
      bidderEmail,
      offerPrice,
      offerDeadline,
      status
    };
    console.log(jobBid);
    fetch("http://localhost:5000/bid", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(jobBid),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          console.log("success");
          form.reset();
          Swal.fire({
            title: "Requested!",
            text: "Job requested successfully",
            icon: "success",
            confirmButtonText: "Cool",
          })
        }
      })
      .catch((error) => {
        console.error(error);
        toast("Already Sent a request for this");
      });
  };

  return (
    <div className="flex md:grid md:grid-cols-3  flex-col-reverse ">
      <div className="bg-[#f4f3f0] py-4 md:p-20 px-10 col-span-1 md:col-span-2 ">
        <h2 className="text-3xl text-left mb-6 font-extrabold space-x-3">
          Place Your Bid
        </h2>
        <form className="md:max-w-3xl mx-auto" onSubmit={handelBid} action="">
          <div className="form-control md:w-full">
            <label className="label">
              <span className="label-text text-xl font-bold">Email:</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="email"
                value={user?.email}
                placeholder="Email"
                className=" w-full bg-transparent text-lg font-semibold active:border-none border-none "
                readOnly
              />
            </label>
            {user?.email !== employerEmail && (
              <>
                <label className="label">
                  <span className="label-text text-xl font-bold">
                    Employer Email:
                  </span>
                </label>
                <label className="input-group">
                  <input
                    type="text"
                    name="buyerEmail"
                    value={employerEmail}
                    placeholder="Email"
                    className=" w-full bg-transparent text-lg font-semibold active:border-none border-none "
                    readOnly
                  />
                </label>
              </>
            )}
          </div>
          {/* row */}

          <div className="md:flex gap-4 flex-row">
            <div>
              <label className="label">
                <span className="label-text text-lg font-bold">Bid Price</span>
              </label>
              <label className="input-group mb-3 align-middle">
                <input
                  type="text"
                  name="offerPrice"
                  placeholder="Offer Your Price"
                  defaultValue={minPrice}
                  className="input  input-bordered"
                />
              </label>
            </div>
            <div>
              <label className="label">
                <span className="label-text text-lg font-bold">Deadline</span>
              </label>
              <label className="input-group">
                <input type="date" defaultValue={deadline} name="deadline" />
              </label>
            </div>
          </div>
          <div className="text-end">
            <input
              className="btn btn-success rounded-md text-blue-900 "
              disabled={user?.email === employerEmail}
              type="submit"
              value="Bid on the project"
            />
          </div>
        </form>
      </div>
      <div className="border bg-[#f4f3f0] md:px-10 p-4  ">
        <h2 className="text-xl text-left md:mt-12 font-semibold ">
          Job details :
        </h2>
        <div className="divider"></div>

        <div className="space-y-2">
          <h2 className="card-title">{jobTitle}</h2>
          <div className=" text-right font-bold text-orange-900 text-xs">
            {category}
          </div>
          <p className="font-medium text-sm">{description}</p>
          <p className="font-semibold">
            Bid Range: {minPrice}$ - {maxPrice}$
          </p>
          <p className="text-sm">
            <span className="font-bold">Deadline:</span> {deadline}
          </p>
        </div>
      </div>
      <ToastContainer/>
    </div>
  );
};

export default BidPage;
