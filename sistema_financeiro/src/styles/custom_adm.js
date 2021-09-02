import styled from 'styled-components';

export const Container  = styled.section`
    width: 90%; //960px;
    max-width: 50%;//960px;
    margin: 0px auto;
`;

export const ConteudoTitulo  = styled.section`
   display: flex;
   justify-content: space-between;
`;


export const Titulo  = styled.h1`
   font-size: 23px;
   font-family: sans-serif;
   margin: 10px 15px;
   color: #1d1e1e;
`;

export const BotaoAntProx = styled.section`
    display: flex;  
    justify-content: space-between; 
    border-top: 1px solid #c1c1c1;
    padding-top: 5px;
`;

export const ButtonSuccess  = styled.button`
   background-color: #fff;
   color: #198754;
   padding: 5px 8px;
   border: 1px solid #198754;
   border-radius: 4px;
   cursor: pointer;
   font-size: 16px;
   :hover{
        background-color: #198754;
        color: #fff;

   }
`;



export const ButtonPrimary  = styled.button`
   background-color: #fff;
   color: #0d6efd;
   padding: 5px 8px;
   border: 1px solid #0d6efd;
   border-radius: 4px;
   cursor: pointer;
   font-size: 16px;
   :hover{
        background-color: #0d6efd;
        color: #fff;

   }
`;


export const ButtonSuccess2  = styled.button`
   background-color: #fff;
   color: #198754;
   padding: 5px 8px;
   border: 1px solid #198754;
   border-radius: 4px;
   cursor: pointer;
   font-size: 16px;
   :hover{
        background-color: #198754;
        color: #fff;

   }
`;

export const BotaoAcao = styled.section`
   margin: 5px;
`;
