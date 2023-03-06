import React from "react";
import { toast } from "react-hot-toast";
import { useQuery } from "react-query";

const AllUser = () => {
  const { data: users = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await fetch("https://medicalist-server.vercel.app/users");
      const data = await res.json();
      return data;
    },
  });

  const handleMakeeAdmin = (id) => {
    fetch(`https://medicalist-server.vercel.app/users/admin/${id}`, {
      method: "PUT",
      headers: {
        authorization: `bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          refetch();
          toast.success("Make Admin Successfully.");
        }
      });
  };

  const handleDeleteUser = (id) => {
    fetch(`https://medicalist-server.vercel.app/users/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          toast.error("User Deleted Successfully.");
          refetch();
        }
      });
  };
  return (
    <div>
      <h3 className="text-2xl mb-5">All User</h3>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>Admin</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, i) => (
              <>
                <tr key={user._id}>
                  <th>{i + 1}</th>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>
                    {user?.role !== "admin" && (
                      <button
                        onClick={() => handleMakeeAdmin(user._id)}
                        className="btn btn-xs btn-primary"
                      >
                        Make Admin
                      </button>
                    )}
                  </td>
                  <td>
                    <button
                      onClick={() => handleDeleteUser(user._id)}
                      className="btn btn-xs btn-error"
                    >
                      Delete
                    </button>
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

export default AllUser;
