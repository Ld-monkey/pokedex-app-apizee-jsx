import './Modal.scss';

function Modal() {
  return (
    <div className="modal-container">
      <div className="modal-container__header">
        <h1>Nom du pokemon</h1>
        <button type="button" className="modal-container__header-button">
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
