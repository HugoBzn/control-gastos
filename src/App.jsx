import { useState } from "react";
import Header from "./components/Header";
import IconoNuevoGasto from "./assets/img/nuevo-gasto.svg";
import Modal from "./components/Modal";

function App() {
  const [presupuesto, setPresupuesto] = useState(0);
  const [isValidPresupuesto, setIsValidPresupuesto] = useState(false);

  const [modal, setModal] = useState(false);
  const [animarModal, setAnimarModal] = useState(false);

  // Transición del modal
  const handleNuevoGasto = () => {
    setModal(true);

    setTimeout(() => {
      setAnimarModal(true);
    }, 500);
  };

  return (
    <>
      <Header
        presupuesto={presupuesto}
        setPresupuesto={setPresupuesto}
        isValidPresupuesto={isValidPresupuesto}
        setIsValidPresupuesto={setIsValidPresupuesto}
      />

      {isValidPresupuesto && (
        <div className="nuevo-gasto">
          <img src={IconoNuevoGasto} alt="icono nuevo gasto" onClick={handleNuevoGasto} />
        </div>
      )}

      {modal && <Modal setModal={setModal} animarModal={animarModal} setAnimarModal={setAnimarModal} />}
    </>
  );
}

export default App;
