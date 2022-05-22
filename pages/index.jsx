import { useState } from "react";

export default function Page() {
  const [contador, setContador] = useState(1);

  function adicionarContador() {
    setContador(contador + 1);
  }

  return (
    <div className="contador">
      <h4>Contador</h4>
      <p>{contador}</p>
      <button onClick={adicionarContador}>Adicionar</button>
    </div>
  );
}
