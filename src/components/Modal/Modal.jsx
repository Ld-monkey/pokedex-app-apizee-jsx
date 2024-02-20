import './Modal.scss';

function Modal({ id, toggleModal }) {
  return (
    <div className="modal-container">
      <div className="modal-container__header">
        <h2>Nom du pokemon</h2>
        <button
          type="button"
          className="modal-container__header-button"
          onClick={toggleModal}
        >
          x
        </button>
      </div>
      <div className="modal-container__content">
        <ul>
          <li>hello world !</li>
        </ul>
      </div>
    </div>
  );
}

export default Modal;
