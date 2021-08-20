import React, { useEffect, useState } from 'react';
export const  Home=() =>{
    var dataAtual = new Date();
    var ano = dataAtual.getFullYear();
    var mes = dataAtual.getMonth()+1;
    //console.log( mes + "/" + ano );
    //mes começa com zero (0) 
    const [dataView, setDataView] =  useState({
        ano , mes
    });

    const anterior = async () => {
       //console.log( "Anterior ");
        if( dataView.mes === 1){
            setDataView({
                ano: dataView.ano -1,
                mes: 12
            });
        }else{
            setDataView({
                ano: dataView.ano ,
                mes: dataView.mes -1
            }); 
        }
    };

    const proximo = async () => {
        //console.log( "Proximo ");
        if( dataView.mes === 12){
            setDataView({
                ano: dataView.ano +1,
                mes: 1
            });
        }else{
            setDataView({
                ano: dataView.ano ,
                mes: dataView.mes + 1
            }); 
        }
    };

    const listarExtrato = async e => {
        var valores = [
            {
                "id": 1,
                "nome": "agua", 
                "valor":  347, 
                "tipo": 3
            }, 
            {
                "id": 2,
                "nome": "luz", 
                "valor":  150.58, 
                "tipo": 3
            },
            {
                "id": 3,
                "nome": "telefone", 
                "valor":  75, 
                "tipo": 3
            }


        ]
    };

    useEffect (() => {
        listarExtrato();

    }, []);
    return (
        <div>
            <h1>Pagina Home </h1>
            <h2>Listar Situacao Financeira</h2>
            <p>Ano Atual: {dataView.ano}</p>
            <p>Mes Atual: {dataView.mes}</p>
            <button type="button" onClick={()=>anterior()} >Anterior</button>
            <button type="button" onClick={()=>proximo()} >Proximo</button>
        </div>
    );
}