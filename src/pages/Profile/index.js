import React, {useEffect, useState} from 'react';
import logoImg from '../../assets/logo.svg';
import {Link, useHistory} from 'react-router-dom';
import {FiPower, FiTrash2} from 'react-icons/fi';
//import './styles.css';
import { Container, Title, Box, BoxTitle, BoxText, BoxHeader } from "./styles";
import api from '../../services/api';

export default function Profile(){
    const ongId = localStorage.getItem('ongId');
    const ongName = localStorage.getItem('ongName');
    const [incidents, setIncidents] = useState([]);
    const history = useHistory();
    const [title, setTitle] = useState('');    
    useEffect(()=>{                        
        api.get('profile', {
            headers: {
                Authorization: ongId,
            }
        }).then(response => {
            setIncidents(response.data);
            setTitle(response.data.length!==0?<h1>Casos Cadastrados</h1>:<center><h3>Ainda não temos nenhum caso cadastrado..</h3></center>);
        });
    }, [ongId]);

    async function handleDeleteincident(id){
        try{
            await api.delete(`incidents/${id}`, {
                headers: {
                    Authorization: ongId,
                }
            });
            
            setIncidents(incidents.filter(incident => incident.id !== id));
            console.log("Excluido: "+incidents[0].id);
            incidents.map(incident => {
                if(incidents.length===1&&incident.id===id)
                    return setTitle(<center><h3>Ainda não temos casos cadastrados...</h3></center>);
                return setTitle(<h1>Casos Cadastrados</h1>)
            })
            //setTitle(incidents[0].id!==id?<h1>Casos Cadastrados</h1>:<center><h3>Ainda não temos nenhum caso cadastrado..</h3></center>);
        }catch(error){
            alert('Erro ao tentar excluir, tente novamente');
        }        
    }
    function handleLogout(){
        localStorage.clear();
        history.push('/');
    }
    return(
        <>                                        
            <BoxHeader> 
                <BoxTitle>               
                <img src={logoImg} alt="Be The Hero"/>                                
                </BoxTitle>                
                <span>Bem vindo, {ongName}</span>
                <BoxText>
                <Link className="button" to="incidents/new">
                    Cadastrar Novo Caso
                </Link>
                <button onClick={handleLogout} type="button">
                    <FiPower size={18} color="#E02041"/>
                </button>
                </BoxText>                
            </BoxHeader>   
            <Title>{title}</Title>                
        <Container>                
                {incidents.map(incident => (
                    <Box key={incident.id}>
                        <strong>CASO:</strong>
                        <p>{incident.title}</p>

                        <strong>DESCRIÇÃO:</strong>
                        <p>{incident.description}</p>

                        <strong>VALOR:</strong>
                        <p>{Intl.NumberFormat('pt-br', {style: 'currency', currency: 'BRL'}).format(incident.value)}</p>

                        <button className="btn-remove" onClick={() => window.confirm('Tem certeza que deseja excluir o caso?')?handleDeleteincident(incident.id):""} type="button">
                            <FiTrash2 size={20} color="a8a8b3"/>
                        </button>
                </Box>
                ))}
            
        </Container>
        </>        
    );
}