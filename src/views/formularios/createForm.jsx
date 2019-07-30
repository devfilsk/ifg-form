import React, {Component} from 'react';
import { Row, Col, Button, FormGroup, Label, Input, Form } from 'reactstrap';
import './style.scss';
class CreateForm extends Component {


    render() {
        return (
            <div className='card-form'>
                <Row form>
                    <Col md={6}>
                        <FormGroup>
                            <Label for="exampleEmail">Nome do Formulário</Label>
                            <Input type="email" name="email" id="exampleEmail" placeholder="Nome" />
                        </FormGroup>
                    </Col>
                    <Col md={12}>
                        <FormGroup>
                            <Label for="examplePassword">Descrição</Label>
                            <Input type="textarea" name="text" id="descricao" placeholder='Texto que será exibido para as pessoas que vão responder o formulário'/>
                        </FormGroup>
                    </Col>
                    <Col md={4}>
                        <FormGroup>
                            <Label for="exampleSelect">Tipo do formulário</Label>
                            <Input type="select" name="select" id="exampleSelect">
                                <option disabled selected>Selecione um tipo</option>
                                <option>Questionário</option>
                                <option>Diagnóstico</option>
                                <option>Avaliação</option>
                            </Input>
                        </FormGroup>
                    </Col>
                    <Col md={4}>
                        <FormGroup>
                            <Label for="exampleCity">Campus</Label>
                            <Input type="text" name="city" id="exampleCity" placeholder="Campus de aplicação" />
                        </FormGroup>
                    </Col>
                    <Col md={4}>
                        <FormGroup>
                            <Label for="exampleSelect">Status inicial</Label>
                            <Input type="select" name="select" id="exampleSelect">
                                <option disabled selected>Selecione um Status</option>
                                <option>Ativo</option>
                                <option>Inativo</option>
                                <option>Finalizado</option>
                            </Input>
                        </FormGroup>
                    </Col>
                </Row>
                <Row form>
                    <Col md={12}>
                    <FormGroup>
                        <Button color="primary" size="lg" block>Salvar</Button>
                    </FormGroup>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default CreateForm;
