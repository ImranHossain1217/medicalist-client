import React, { useContext } from "react";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import Loading from "../../components/Loading";
import { AuthContext } from "../../context/AuthProvider";

const MyAppiontment = () => {
  const { user } = useContext(AuthContext);

  const { data: bookings = [], isLoading } = useQuery({
    queryKey: ["bookings", user?.email],
    queryFn: async () => {
      const res = await fetch(
        `https://medicalist-server.vercel.app/bookings?email=${user?.email}`,
        {
          headers: {
            authorization: `bearer ${localStorage.getItem("accessToken")}`,
          },
        }
      );
      const data = await res.json();
      return data;
    },
  });

  if (isLoading) {
    return <Loading></Loading>;
  }
  return (
    <div>
      <h3 className="text-2xl mb-5">My Appointment</h3>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Treatment</th>
              <th>Date</th>
              <th>Time</th>
              <th>Price</th>
              <th>Payment</th>
            </tr>
          </thead>
          <tbody>
            {Array.from(bookings)?.map((booking, i) => (
              <>
                <tr key={booking._id}>
                  <th>{i + 1}</th>
                  <td>{booking.name}</td>
                  <td>{booking.treatmentName}</td>
                  <td>{booking.date}</td>
                  <td>{booking.slot}</td>
                  <td>${booking.price}</td>
                  <td>
                    {booking.price && !booking.paid && (
                      <Link to={`/dashboard/payment/${booking._id}`}>
                        <button className="btn btn-primary btn-xs">Pay</button>
                      </Link>
                    )}
                    {booking.paid && <p className="text-green-500">Paid</p>}
                  </td>
                </tr>
              </>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyAppiontment;
