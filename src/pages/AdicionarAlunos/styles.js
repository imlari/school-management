import { styled } from "styled-components";

export const AddStudentsContainer = styled.div` 
    display: flex;
    width: 100%;
    height: calc(100vh - 50px);
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: rgb(86, 86, 86);

    h3 {
        margin-top: 20px;
    }
`;

export const AddStudentsInput = styled.input`
    background-color: rgb(233, 233, 233);
    max-width: 200px;
    height: 40px;
    padding: 10px;
    /* text-align: center; */
    border: 2px solid white;
    border-radius: 5px;
    color: rgb(86, 86, 86);
    /* box-shadow: 3px 3px 2px rgb(249, 255, 85); */

    &:focus{
    box-shadow: 0 0 0 0;
    border: 0 none;
    outline: 0;
}
`;

export const AddStudentsButton = styled.button`
    border: none;
    background-color: #499F68;
    text-decoration: none;
    width: 180px;
    height: 30px;
    border-radius: 5px;
    color: #FFF;
    gap: 5px;
    cursor: pointer;

    
    margin-top: 20px;
    background-color: #006494;
`;

export const SelectStudents = styled.select`
    border: none;
    background-color: rgb(233, 233, 233);
    border-radius: 5px;
`;



