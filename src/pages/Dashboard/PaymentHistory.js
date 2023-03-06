import React, { useContext } from "react";
import { useQuery } from "react-query";
import Loading from "../../components/Loading";
import { AuthContext } from "../../context/AuthProvider";

const PaymentHistory = () => {
  const { user } = useContext(AuthContext);
  const { data: paymentHistoris = [], isLoading } = useQuery({
    queryKey: ["payments", user?.email],
    queryFn: async () => {
      const res = await fetch(`https://medicalist-server.vercel.app/payments/${user?.email}`);
      const data = await res.json();
      return data;
    },
  });

  if (isLoading) {
    return <Loading></Loading>;
  }
  return (
    <div>
      <h3 className="text-2xl mb-3">Your Payments History</h3>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Transaction ID</th>
              <th>Email</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {paymentHistoris.map((payment, i) => (
              <>
                <tr key={payment._id}>
                  <th>{i + 1}</th>
                  <td>{payment.transactionId}</td>
                  <td>{payment.email}</td>
                  <td>${payment.price}</td>
                </tr>
              </>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PaymentHistory;
