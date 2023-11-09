import { useEffect, useState } from "react";

import useAuth from "../../../../hooks/useAuth";
import BidRow from "./BidRow";


const MyBids = () => {
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
      fetch(`https://skill-sync-server.vercel.app/my_bid?email=${email}&${selectedSort}`)
        .then((res) => res.json())
        .then((data) => setBids(data));
      setLoading(true);
    },[email, selectedSort]);
  
    console.log(bids);
    const [selectedSort, setSelectedSort] = useState();
    
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
                      <th>
                      <select
                  className="md:text-lg border-none"
                  value={selectedSort}
                  onChange={(e) => setSelectedSort(e.target.value)}
                  name="category"
                >
                  <option value="sortBy=deadline">Normal</option>
                  <option value="sortBy=deadline&order=asc">Deadline low to high</option>
                  <option value="sortBy=deadline&order=desc">Deadline high to low </option>
                
                </select>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {/* row 1 */}
                    {bids.map((bid) => (
                      <BidRow key={bid._id} bid={bid} currentDate={currentDate} setBids={setBids} bids={bids}></BidRow>
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

export default MyBids;