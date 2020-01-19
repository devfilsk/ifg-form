import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Row, Col, Button, FormGroup, Label, Input } from 'reactstrap';
import './style.scss';
import api from '../../../services/api';

const CreateForm = () => {

    const { register, handleSubmit } = useForm();

    useEffect(() => {
    }, []);

    const onSubmit = async (data) => {
        // console.log(data)
        await api.post('formulario', data)
            .then(res => res)
            .then(res => console.log('respose', res));
    }

    return (
        <div className='card-form'>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Col md={6}>
                    <FormGroup>
                        <Label for="exampleEmail">Nome do Formulário</Label>
                        <Input
                            innerRef={register}
                            type="text"
                            name="nome"
                            placeholder="Nome"
                            />
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
                            innerRef={register}/>
                    </FormGroup>
                </Col>
                <Col md={4}>
                    <FormGroup>
                        <Label for="exampleSelect">Tipo do formulário</Label>
                        <Input innerRef={register} type="select" name="tipo" id="exampleSelect">
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
                            innerRef={register}/>
                    </FormGroup>
                </Col>
                <Col md={4}>
                    <FormGroup>
                        <Label for="exampleSelect">Status inicial</Label>
                        <Input
                        type="select"
                        name="status"
                        id="exampleSelect"
                        innerRef={register}>
                            <option selected>Selecione um Status</option>
                            <option value="1">Ativo</option>
                            <option value="2">Inativo</option>
                            <option value="3">Finalizado</option>
                        </Input>
                    </FormGroup>
                </Col>
                <Col md={12}>
                <FormGroup>
                    <Button type={'submit'} color="primary" size="lg" block>Salvar</Button>
                </FormGroup>
                </Col>
            </form>

        </div>
    );
}

export default CreateForm;
