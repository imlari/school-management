import React,{ useState } from "react";
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { FcHome } from "react-icons/fc";
import './styles.js'
import { AddStudentsContainer, AddStudentsButton, AddStudentsInput, SelectStudents } from "./styles.js";


function AdicionarAlunos(){

    const [nomeAluno, setNomeAluno] = useState('');
    const [idadeAluno, setIdadeAluno] = useState('');
    const [plano, setPlano] = useState('');

    const navigate = useNavigate();


    /* async function handleAdd(){

        if(nomeAluno === '' || idadeAluno === '' ){
            return toast.warn('Preencha todos os campos!');
        }

        await firebase.firestore().collection('alunos')
        .add({
            idade: idadeAluno,
            plano: plano,
            nome: nomeAluno
        }).then(()=>{
            toast.success('Aluno cadastrado com sucesso!')
            setIdadeAluno('');
            setNomeAluno('');
            setPlano('');
            navigate('/', { replace: true})
        }).catch(() => toast.warn('Erro ao cadastrar o usuario!'))
    } */

    function goHome(){
        navigate('/', { replace: true})
    }

   return(
   <AddStudentsContainer>
        <h3>Nome</h3>
        <AddStudentsInput type='text' placeholder="Digite o nome do aluno" value={nomeAluno} onChange={(e) => setNomeAluno(e.target.value)}/>
        <h3>Idade</h3>
        <AddStudentsInput type='tel' min='8' placeholder="Digite a idade do aluno" 
        value={idadeAluno}onChange={(e) => setIdadeAluno(e.target.value)}/>
        <h3>Plano</h3>
        <SelectStudents value={plano} onChange={(e) => setPlano(e.target.value)}>
            <option>Anual</option>
            <option>Mensal</option>
            <option>Trimestral</option>
        </SelectStudents>
        <AddStudentsButton /* onClick={ handleAdd } */>Adicionar Aluno</AddStudentsButton>
        <AddStudentsButton onClick={ goHome } className='btn-home'><FcHome/>Home</AddStudentsButton>
    </AddStudentsContainer>
   );
}


export default AdicionarAlunos;