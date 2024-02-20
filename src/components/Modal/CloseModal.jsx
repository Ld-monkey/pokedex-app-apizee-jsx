function CloseModal({ toggleModal }) {
  return (
    <div
      className="close-modal"
      style={{
        position: 'absolute',
        width: '100%',
        height: '100%',
      }}
      onClick={() => toggleModal()}
      onKeyDown={() => toggleModal()}
    />
  );
}

export default CloseModal;
