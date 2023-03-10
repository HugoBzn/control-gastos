import { useState } from "react";
import Mensaje from "./Mensaje";

const NuevoPresupuesto = ({ presupuesto, setPresupuesto, setIsValidPresupuesto }) => {
  const [mensaje, setMensaje] = useState("");

  const handlePresupuesto = (e) => {
    // Mensaje de error
    e.preventDefault();
    if (!presupuesto || presupuesto < 0) {
      setMensaje("No es un presupuesto valido");
      return;
    }
    // En caso de éxito
    setMensaje("");
    setIsValidPresupuesto(true);
  };

  return (
    <div className="contenedor-presupuesto contenedor sombra">
      <form onSubmit={handlePresupuesto} className="formulario" action="">
        <div className="campo">
          <label htmlFor="">Definir presupuesto</label>
          <input
            type="number"
            className="nuevo-presupuesto"
            placeholder="0"
            onChange={(e) => setPresupuesto(Number(e.target.value))}
          />
        </div>

        <input type="submit" value="Añadir" />

        {mensaje && <Mensaje tipo="error">{mensaje}</Mensaje>}
      </form>
    </div>
  );
};

export default NuevoPresupuesto;
