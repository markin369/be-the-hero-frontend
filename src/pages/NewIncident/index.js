import React, {useState} from 'react';
import LogoImg from '../../assets/logo.svg';
import { Link, useHistory } from 'react-router-dom';
import {FiArrowLeft} from 'react-icons/fi';
//import './styles.css';
import { Container, Content} from './styles';
import api from '../../services/api';

export default function NewIncident(){
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [value, setValue] = useState('');
    const ongId = localStorage.getItem('ongId');
    const history = useHistory();

    async function handleNewIncident(e){
        e.preventDefault();
        const data = {
            title,
            description,
            value,
        }
        try{
            await api.post('incidents', data, {                
                headers:{
                    Authorization: ongId,
                }
            });
            history.push('/profile');
        }catch(erro){
            alert('Erro ao cadastrar novo caso, tente novamente mais tarde');
        }
    }
    return(
                
        <Container>
            <Content>                
                <section>
                <img src={LogoImg} alt="Be The Hero"/>                
                <h1>Cadastro de Casos</h1>
                <p>Descreva o caso detalhadamente para encontrar um héroi para resolver isso.</p>
                <Link className="back-link" to="/profile">
                    <FiArrowLeft size={16} color="#E02041"/>
                    Voltar para home
                </Link>
                </section>                
                
                <form onSubmit={handleNewIncident}>
                    <input 
                        placeholder="Titulo do caso"
                        value={title}
                        onChange={e => setTitle(e.target.value)} 
                    />
                    <textarea 
                        placeholder="Descrição do caso"
                        value={description}
                        onChange={e => setDescription(e.target.value)} 
                    />
                    <input 
                        placeholder="Valor em reais"
                        value={value}
                        onChange={e => setValue(e.target.value)} 
                    />                    

                    <button className="button" type="submit">Cadastrar</button>
                </form>
                </Content>
        </Container>            
        
    );
}