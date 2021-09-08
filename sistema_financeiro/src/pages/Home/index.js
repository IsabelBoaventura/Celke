import React, { useEffect, useState } from 'react';
import {Container, ConteudoTitulo, Titulo, ButtonSuccess, BotaoAcao, BotaoAntProx, ButtonPrimary, Table, TextDanger, TextSuccess} from '../../styles/custom_adm';

export const  Home=() =>{

    const [data, setData] = useState([]);
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
                "tipo": 1,
                "situacao": 1
            }, 
            {
                "id": 2,
                "nome": "luz", 
                "valor":  150.58, 
                "tipo": 1,
                "situacao": 1
            },
            {
                "id": 3,
                "nome": "telefone", 
                "valor":  75, 
                "tipo": 1,
                "situacao": 2
            },
            {
                "id": 4,
                "nome": "Salario", 
                "valor":  1100, 
                "tipo": 2,
                "situacao": 2
            }


        ]
        setData(valores);
        console.log( data );
    };

    useEffect (() => {
        listarExtrato();

    }, []);
    return (
        
        <Container>
            <h1>Pagina Home </h1>
            <ConteudoTitulo>            
                <Titulo>Listar Situacao Financeira</Titulo>
                <BotaoAcao>
                    <ButtonSuccess>Cadastrar </ButtonSuccess>
                </BotaoAcao>                
            </ConteudoTitulo>          
            
            <BotaoAntProx>                
                <ButtonPrimary onClick={()=>anterior()} >Anterior</ButtonPrimary>
                <span>{ dataView.mes + "/" + dataView.ano}</span>
                <ButtonPrimary onClick={()=>proximo()} >Proximo</ButtonPrimary>
            </BotaoAntProx>
            <p>Ano Atual: {dataView.ano}</p>
            <p>Mes Atual: {dataView.mes}</p>
           
            <Table>
                <thead>
                    <tr>
                        <th>ID </th><th>Nome </th><th>Tipo</th><th>Valor</th><th>Situacao</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map(item => (
                        <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.nome}</td>
                            
                            <td>{item.tipo === 1?<TextDanger>Pagamento</TextDanger>:<TextSuccess>Recebimento</TextSuccess>}</td>
                            <td>{item.valor}</td>
                            <td>{item.situacao === 1? <span>Efetuado</span>:<span>Pendente</span>}</td>
                        </tr>
                    ))}

                </tbody>
                <tfoot>
                    <tr>
                        <td>Total</td>
                        <td></td> 
                        <td></td>                      
                        <td><b>R$ 2.500,00</b></td> 
                        <td>*valores aleatorios*</td>
                    </tr>
                </tfoot>
            </Table>
        </Container>
    );
}