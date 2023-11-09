import { useEffect, useState } from "react";
import useAuth from "../../../hooks/useAuth";
import Req from "./Req";



const Request = () => {
    const [currentDate, setCurrentDate] = useState();
    const [loading, setLoading] = useState(false);
    const [bids, setBids] = useState([]);
    const {user} = useAuth();
    const email = user?.email;
  
  
    useEffect(() => {
      const today = new Date();
      const month = today.getMonth() + 1;
      const year = today.getFullYear();
      const date = today.getDate();
      const currentDate = `${year}-${month}-${date}`;
      setCurrentDate(currentDate);
    }, []);
  
    useEffect(() => {
      fetch(`https://skill-sync-server.vercel.app/bid_req?email=${email}&sortBy=deadline&order=asc`)
        .then((res) => res.json())
        .then((data) => setBids(data));
      setLoading(true);
    },[email]);
  
    console.log(bids);
  
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
                      <th className="text-2xl text-start">My Bids</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    {/* row 1 */}
                    {bids.map((bid) => (
                      <Req key={bid._id} bid={bid} currentDate={currentDate} setBids={setBids} bids={bids}></Req>
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

export default Request;