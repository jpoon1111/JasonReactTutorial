import "./Modal.css";

function Modal({ title, cancelAction, confirmAction }) {
  


  return (
    <div>
      <div className="modal">
        <p className="modal__title">{title}</p>
        <div className="modal__buttons">
          <button className="btn btn__cancel" onClick={cancelAction}>
            Cancel
          </button>
          <button className="btn" onClick={confirmAction}>
            Confirm
          </button>
        </div>
      </div>
      <div className="backdrop" />
    </div>
  );
}

export default Modal;
