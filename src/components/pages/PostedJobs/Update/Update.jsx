import  { useContext, useState } from 'react';
import { AuthContext } from '../../../../providers/AuthProvider';
import { useLoaderData, useNavigate } from 'react-router-dom';
import Swal from "sweetalert2";

const Update = () => {
    const { user } = useContext(AuthContext);
    const jobData = useLoaderData();
    const navigate = useNavigate();
    
    const job = jobData[0];
    console.log(job);
    
    const { _id, jobTitle, deadline,description ,minPrice, category, maxPrice} =
    job;
    const [selectedCategory, setSelectedCategory] = useState(`${category}`);
    console.log(user?.email);
  
    const handleUpdateJob = (e) => {
      e.preventDefault();
  
      const form = e.target;
  
      const jobTitle = form.job_name.value;
      const employerEmail = form.email.value;
      const deadline = form.deadline.value;
      const category = form.category.value;
      const description = form.description.value;
      const minPrice = form.minPrice.value;
      const maxPrice = form.maxPrice.value;
  
      const newJob = {
        jobTitle,
        employerEmail,
        minPrice,
        maxPrice,
        category,
        deadline,
        description,
      };
      console.log(newJob);
      fetch(`http://localhost:5000/update_job/${_id}`, {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(newJob),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if ( data.modifiedCount > 0) {
            console.log("success");
            form.reset();
            Swal.fire({
              title: "Success!",
              text: "Job post updated successfully",
              icon: "success",
              confirmButtonText: "OK",
            }).then(res =>{
              if (res.isConfirmed) {
                  navigate('/posted_jobs')
                
              }
            })
          }
        });
    };
    return (
      <div className="bg-[#f4f3f0] py-4 md:p-20 px-2 ">
        <h2 className="text-3xl text-center mb-6 font-extrabold space-x-3">
          Update Job
        </h2>
        <form className="md:max-w-3xl mx-auto" onSubmit={handleUpdateJob} action="">
          <div className="form-control md:w-full">
            <label className="label">
              <span className="label-text text-lg font-bold">Email</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="email"
                value={user?.email}
                placeholder="Email"
                
                className=" w-full bg-transparent text-xl font-semibold active:border-none border-none "
                readOnly
              />
            </label>
          </div>
          {/* row */}
          <div className="md:flex gap-4">
            <div className="form-control md:w-full ">
              <label className="label">
                <span className="label-text text-lg font-bold">Job Name</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="job_name"
                  placeholder="Job Name"
                  defaultValue ={jobTitle}
                  className="input w-full input-bordered"
                />
              </label>
            </div>
          </div>
          {/* row */}
          <div className="md:flex gap-4">
            <div className="form-control md:w-full">
              <label className="label">
                <span className="label-text text-lg font-bold">Description</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="description"
                  placeholder="Description"
                  defaultValue ={description}
                  className="input w-full input-bordered"
                />
              </label>
            </div>
          </div>
          <div className="md:flex gap-4 items-end justify-end">
            <div>
              <label className="label">
                <span className="label-text text-lg font-bold">Offer Price</span>
              </label>
              <label className="input-group mb-3 align-middle">
                <h2 className="text-xs font-medium p-2">Min Price</h2>
                <input
                  type="text"
                  name="minPrice"
                  placeholder="Min Price"
                  defaultValue ={minPrice}
                  className="input  input-bordered"
                />
              </label>
              <label className="input-group mb-3 align-middle">
                <h2 className="text-xs font-medium p-2">Max Price</h2>
                <input
                  type="text"
                  name="maxPrice"
                  placeholder="Max Price"
                  defaultValue ={maxPrice}
                  className="input input-bordered"
                />
              </label>
            </div>
            <div className="form-control md:w-full ">
              <div className="form-control md:w-full ">
                <label className="label">
                  <span className="label-text md:text-lg font-bold">
                    Category
                  </span>
                </label>
                <label className="input-group">
                  <select
                    className="md:text-lg border-none"
                   value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    name="category"
                  >
                    <option value="Coding">Coding</option>
                    <option value="Digital Marketing">Digital Marketing</option>
                    <option value="Graphic Design">Graphic Design</option>
                    <option value="Video Editing">Video Editing</option>
                    <option value="Web Design and Development">
                      Web Design and Development
                    </option>
                  </select>
                </label>
              </div>
              <div className="form-control md:w-full">
                <label className="label">
                  <span className="label-text text-lg font-bold">Deadline</span>
                </label>
                <label className="input-group">
                  <input type="date" defaultValue={deadline} name="deadline" />
                </label>
              </div>
            </div>
          </div>
          <div className="text-end">
            <input
              className="btn btn-success rounded-md   text-blue-900"
              type="submit"
              value="Update job"
            />
          </div>
        </form>
      </div>
    );
  };

export default Update;