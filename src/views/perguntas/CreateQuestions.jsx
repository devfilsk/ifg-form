import React, {useEffect, useState} from 'react';
import {
    ListGroupItem,
    ListGroup,
    ListGroupItemHeading,
    ListGroupItemText,
    Row,
    Col,
    FormGroup,
    Label, Input, CustomInput, Button, InputGroup, InputGroupAddon
} from "reactstrap";
import Alternative from "../../components/alternative";

const CreateQuestions = (props) => {

    const [ displayData, setDisplayData ] = useState([]);
    const [ tipo, setTipo ] = useState('');
    const [ alternative, setAlternative ] = useState('');

    const setTipoContent = (e) => {
        let mult = document.getElementById('mult-question');
        let text = document.getElementById('text-question');
        setTipo(e.target.value);
        switch (e.target.value) {
            case "1":
                mult.classList.add("mult-question");
                text.classList.add("hidden");
                mult.classList.remove("hidden");
                break;
            case "2":
                mult.classList.add("mult-question");
                text.classList.add("hidden");
                mult.classList.remove("hidden");
                break;
            case "3":
                text.classList.add("mult-question");
                mult.classList.add("hidden");
                text.classList.remove("hidden");
                break;
            case "4":
                text.classList.add("mult-question");
                mult.classList.add("hidden");
                text.classList.remove("hidden");
                break;
            default:
                mult.classList.add('hidden');
                text.classList.add('hidden');
        }
    };

    const addAlternative = () => {
        let data = displayData;
        setDisplayData(data => data.concat(alternative));
        setAlternative('');
    };

    return (
        <div>
            <ListGroup>
                <ListGroupItem tag="button" action active>
                    <ListGroupItemHeading></ListGroupItemHeading>
                    <ListGroupItemText>
                        Criar uma nova pergunta
                    </ListGroupItemText>
                </ListGroupItem>
                <ListGroupItem tag="button" action>
                    {/*<ListGroupItemHeading>Preencha com os dados da pergunta</ListGroupItemHeading>*/}
                    <ListGroupItemText>
                        <Row form>
                            <Col md={3} addonType="append">
                                <FormGroup>
                                    <Label for="examplePassword">Tipo</Label>
                                    <Input type="select" name="select" id="tipo" onChange={e => setTipoContent(e)}>
                                        <option disabled selected>Selecione um tipo</option>
                                        <option value={1}>Multipla Escolha</option>
                                        <option value={2}>Resposta Unica</option>
                                        <option value={3}>Texto Curto</option>
                                        <option value={4}>Texto longo</option>
                                    </Input>
                                </FormGroup>
                            </Col>
                            <div className='alternatives'>
                                <Alternative data={displayData}/>
                            </div>
                            <div className='hidden' id='text-question'>
                                <Col md={12}>
                                    <FormGroup>
                                        <Label for="exampleEmail">Pergunta</Label>
                                        <Input type="textarea" name="email" id="exampleEmail" placeholder="Texto da pergunta"/>
                                    </FormGroup>
                                </Col>
                            </div>
                            <div className='hidden' id='mult-question'>
                                <Col md={10}>
                                    <div className="input-group input-group-sm">
                                        <input type="text" className="form-control" id='alternative-input' value={alternative} onChange={e => setAlternative(e.target.value)}/>
                                        <span className="input-group-btn">
                                          <button type="button" className="btn btn-info btn-flat" onClick={addAlternative}>+</button>
                                        </span>
                                    </div>
                                </Col>
                            </div>
                            <Col md={12}>
                                <FormGroup>
                                    <CustomInput type="switch" id="exampleCustomSwitch" name="customSwitch"
                                                 label="Resposta Obrigatória"/>
                                </FormGroup>
                            </Col>
                            <Col md={12}>
                                <FormGroup>
                                    <Button color="primary" size="lg" block>Adicionar Pergunta</Button>
                                </FormGroup>
                            </Col>
                        </Row>
                    </ListGroupItemText>
                </ListGroupItem>
            </ListGroup>
        </div>
    );
}

export default CreateQuestions;
