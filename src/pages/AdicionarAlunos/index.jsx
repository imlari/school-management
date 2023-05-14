import React,{ useState } from "react";
import { useNavigate } from 'react-router-dom';
import { FcHome } from "react-icons/fc";
import './styles.js'
import { AddStudentsContainer, AddStudentsButton, AddStudentsInput, SelectStudents } from "./styles.js";
import api from "../../services/index.js";
import { toast } from "react-toastify";


const AdicionarAlunos = () => {

    const [aluno, setAluno] = useState({
    nome: "",
    idade: "",
    plano: ""
  });

    const handleChange = e => {
    setAluno({ ...aluno, [e.target.name]: e.target.value });
  };

    const handleSubmit = e => {
    e.preventDefault();

    api.post("/students/add/", aluno)
      .then(response => {
        console.log('Aluno adicionado com sucesso:', response.data);
      })
      .catch(error => {
        console.error('Erro ao adicionar aluno:', error);
      });

        setAluno({ nome: '', plano: '', idade: '' });
        toast("Aluno adicionado com sucesso!");
    };
    
    const navigate = useNavigate();

    function goHome(){
        navigate('/', { replace: true})
    }

   return(
   <AddStudentsContainer>
        <h3>Nome</h3>
        <AddStudentsInput type='text' placeholder="Digite o nome do aluno" name="nome" value={aluno?.nome} onChange={handleChange} required/>
        <h3>Idade</h3>
        <AddStudentsInput type='tel' min='8' placeholder="Digite a idade do aluno" 
        name="idade" value={aluno?.idade} onChange={handleChange} required/>
        <h3>Plano</h3>
        <SelectStudents  name="plano" value={aluno?.plano} onChange={handleChange} required>
            <option>Anual</option>
            <option>Mensal</option>
            <option>Trimestral</option>
        </SelectStudents>
        <AddStudentsButton type="button" onClick={handleSubmit}>Adicionar Aluno</AddStudentsButton>
        <AddStudentsButton onClick={ goHome } className='btn-home'><FcHome/>Home</AddStudentsButton>
    </AddStudentsContainer>
   );
}


export default AdicionarAlunos;