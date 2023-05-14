import React, { useState, useEffect } from "react";
import "./listaAlunos.css";
import api from "../../services";

const ListarAlunos = () => {
  const [listaAlunos, setListaAlunos] = useState([]);

  useEffect(() => {
    api
      .get("/students/")
      .then((response) => setListaAlunos(response.data.students))
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
  }, []);

  const excluirAluno = (id) => {
    api
      .delete(`/students/:${id}`)
      .then((response) => {
        console.log("Aluno excluído com sucesso");
        atualizarListaAlunos();
      })
      .catch((error) => {
        console.error("Erro ao excluir aluno:", error);
      });
  };

  const atualizarListaAlunos = () => {
    api
      .get("/students/")
      .then((response) => {
        setListaAlunos(response.data.students);
      })
      .catch((error) => {
        console.error("Erro ao obter a lista de alunos:", error);
      });
  };

  return (
    <div className="container-lista">
      <ul>
        {listaAlunos?.map((alunos, index) => {
          return (
            <li key={index}>
              <p>Nome: {alunos?.nome}</p>
              <p>Idade: {alunos?.idade}</p>
              <p>Plano: {alunos?.plano}</p>
              <button onClick={() => excluirAluno(alunos.id)}>
                Excluir Aluno
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ListarAlunos;
