import React from "react";

const DeleteModal = ({
  title,
  message,
  closeModal,
  doctorData,
  handleDeleteDoctor,
}) => {
  return (
    <div>
      <input type="checkbox" id="delete-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">{title}</h3>
          <p className="py-4">{message}</p>
          <div className="modal-action">
            <label
              onClick={() => handleDeleteDoctor(doctorData)}
              htmlFor="delete-modal"
              className="btn"
            >
              Delete
            </label>
            <button onClick={closeModal} className="btn btn-outline">
              cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteModal;
