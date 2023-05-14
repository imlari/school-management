import React, { useState } from "react";
import "./editarAlunos.css";

const EditarAlunos = () => {
  const [matricula, setMatricula] = useState("");
  const [nome, setNome] = useState("");
  const [plano, setPlano] = useState("");
  const [idade, setIdade] = useState("");
  const [vencimento, setVencimento] = useState("");
  const [informacoes] = useState(false);

  return (
    <div className="container-edit">
      <input
        type="text"
        value={matricula}
        placeholder="Digite a matricula"
        onChange={(e) => setMatricula(e.target.value)}
      />
      {informacoes ? (
        <div className="form-info">
          <h3>Nome</h3>
          <input
            type="text"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />
          <h3>Idade</h3>
          <input
            type="number"
            min="8"
            value={idade}
            onChange={(e) => setIdade(e.target.value)}
          />
          <h3>Plano</h3>
          <select value={plano} onChange={(e) => setPlano(e.target.value)}>
            <option>Anual</option>
            <option>Mensal</option>
            <option>Trimestral</option>
          </select>
          <h3>Vencimento</h3>
          <input
            type="text"
            value={vencimento}
            onChange={(e) => setVencimento(e.target.value)}
          />
          <button>Editar</button>
        </div>
      ) : (
        ""
      )}
      <button>Pesquisar</button>
    </div>
  );
}

export default EditarAlunos;
