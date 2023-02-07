import cerrarBtn from "../assets/img/cerrar.svg";

const Modal = ({ setModal, animarModal, setAnimarModal }) => {
  
    // Transisión
  const ocultarModal = () => {
    setAnimarModal(false);

    setTimeout(() => {
      setModal(false);
    }, 500);
  };

  return (
    <div className="modal">
      <div className="cerrar-modal">
        <img src={cerrarBtn} alt="cerrar modal" onClick={ocultarModal} />
      </div>

      <form className={`formulario ${animarModal ? "animar" : "cerrar"}`}>
        <legend>Nuevo gasto</legend>
      </form>
    </div>
  );
};

export default Modal;
