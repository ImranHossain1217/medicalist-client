import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { useQuery } from "react-query";
import DeleteModal from "../../components/DeleteModal";
import Loading from "../../components/Loading";

const ManageDoctors = () => {
  const [deleteDoctor, setDeleteDoctor] = useState(null);

  const closeModal = () => {
    setDeleteDoctor(null);
  };

  const {
    data: doctors = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["doctors"],
    queryFn: async () => {
      const res = await fetch("https://medicalist-server.vercel.app/doctors");
      const data = await res.json();
      return data;
    },
  });

  const handleDeleteDoctor = (doctor) => {
    fetch(`https://medicalist-server.vercel.app/doctors/${doctor._id}`, {
      method: "DELETE",
      headers: {
        authorization: `bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          toast.error(`Doctor ${doctor.name} deleted succussfully.`);
          refetch();
        }
      });
  };

  if (isLoading) {
    return <Loading></Loading>;
  }
  return (
    <div>
      <h3 className="text-2xl mb-5">Manage Doctor</h3>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Avatar</th>
              <th>Name</th>
              <th>Email</th>
              <th>Specialty</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {doctors.map((doctor, i) => (
              <>
                <tr key={doctor._id}>
                  <th>{i + 1}</th>
                  <td>
                    <div className="avatar">
                      <div className="w-16 rounded-full">
                        <img src={doctor.img} alt={doctor.name} />
                      </div>
                    </div>
                  </td>
                  <td>{doctor.name}</td>
                  <td>{doctor.email}</td>
                  <td>{doctor.specailty}</td>
                  <td>
                    <label
                      onClick={() => setDeleteDoctor(doctor)}
                      htmlFor="delete-modal"
                      className="btn btn-xs btn-error"
                    >
                      Delete
                    </label>
                  </td>
                </tr>
              </>
            ))}
          </tbody>
        </table>
      </div>
      {deleteDoctor && (
        <DeleteModal
          title={`Are you sure you want to delete?`}
          message={`If you delete ${deleteDoctor.name}.It cannot be save.`}
          doctorData={deleteDoctor}
          closeModal={closeModal}
          handleDeleteDoctor={handleDeleteDoctor}
        ></DeleteModal>
      )}
    </div>
  );
};

export default ManageDoctors;
