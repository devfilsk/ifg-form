import React, { useEffect, useState } from 'react';
import { Row, Col, Button, FormGroup, Label, Input, Form } from 'reactstrap';
import './style.scss';
import api from '../../services/api';

const CreateForm = () => {

    const [ name, setName ] = useState('');
    const [ descricao, setDescricao ] = useState('');
    const [ campus, setCampus ] = useState('');
    const [ status, setStatus ] = useState('');
    const [ tipo, setTipo ] = useState('');


    useEffect(() => {
    }, []);

    function handleSubmit(e){
        e.preventDefault();
        console.log(tipo)
        api.post('')
    }

    return (
        <div className='card-form'>
            <form onSubmit={handleSubmit}>
                <Col md={6}>
                    <FormGroup>
                        <Label for="exampleEmail">Nome do Formulário</Label>
                        <Input 
                            type="text" 
                            name="name" 
                            id="exampleEmail" 
                            placeholder="Nome"
                            onChange={e => setName(e.target.value)} 
                            value={name}/>
                    </FormGroup>
                </Col>
                <Col md={12}>
                    <FormGroup>
                        <Label for="examplePassword">Descrição</Label>
                        <Input 
                        type="textarea" 
                        name="descricao" 
                        id="descricao"
                        placeholder="Digite uma breve descrição do formulário" 
                        value={descricao} 
                        onChange={e => setDescricao(e.target.value)}/>
                    </FormGroup>
                </Col>
                <Col md={4}>
                    <FormGroup>
                        <Label for="exampleSelect">Tipo do formulário</Label>
                        <Input type="select" name="tipo" id="exampleSelect" defaultValue={tipo} onChange={e => setTipo(e.target.value)}>
                            <option disabled selected>Selecione um tipo</option>
                            <option value="1">Questionário</option>
                            <option value="2">Diagnóstico</option>
                            <option value="3">Avaliação</option>
                        </Input>
                    </FormGroup>
                </Col>
                <Col md={4}>
                    <FormGroup>
                        <Label for="exampleCity">Campus</Label>
                        <Input 
                            type="text" 
                            name="campus" 
                            id="exampleCity" 
                            placeholder="Campus de aplicação" 
                            value={campus}
                            onChange={e => setCampus(e.target.value)}/>
                    </FormGroup>
                </Col>
                <Col md={4}>
                    <FormGroup>
                        <Label for="exampleSelect">Status inicial</Label>
                        <Input 
                        type="select" 
                        name="status" 
                        id="exampleSelect"
                        defaultValue={status}
                        onChange={e => setStatus(e.target.value)}>
                            <option selected>Selecione um Status</option>
                            <option value="1">Ativo</option>
                            <option value="2">Inativo</option>
                            <option value="3">Finalizado</option>
                        </Input>
                    </FormGroup>
                </Col>
                <Col md={12}>
                <FormGroup>
                    <Button color="primary" size="lg" block>Salvar</Button>
                </FormGroup>
                </Col>
            </form>
           
        </div>
    );
}

export default CreateForm;
