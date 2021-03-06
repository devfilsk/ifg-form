import React, {useEffect, useState} from 'react';
import {
    ListGroupItem,
    ListGroup,
    ListGroupItemHeading,
    ListGroupItemText,
    Row,
    Col,
    FormGroup,
    Label, Input, CustomInput, Button
} from "reactstrap";
import Question from "../../components/Question";
import './createQuestions.scss';
import InputAlternative from "../../components/Inputs/InputAlternative";

const CreateQuestions = (props) => {

    const [options, setOptions] = useState(['']);
    const [tipo, setTipo] = useState('');
    const [option, setOption] = useState('');
    const [ask, setAsk] = useState([]);
    const [count, setCount] = useState(1);
    const [inputAsk, setInputAsk] = useState('');
    const [countAsks, setCountQuestion] = useState(1);
    const [qtd, setQtd] = useState(1);

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

    const addAlternative = (index) => {
        let i = options.length > 0 ? (options.length - 1) : options.length;
        if (options[i] !== '') {
            let data = options;
            setOptions(data => data.concat(''));
        } else {
            alert("Não é possível adicionar uma opção em branco!")
        }
    };

    const removeAlternative = (index) => {
        let dados = options.slice();
        dados.splice(index, 1);
        setOptions(dados);
    };

    const saveQuestion = () => {
        let data = inputAsk;
        setAsk(data => data.concat(`${countAsks} - ${inputAsk}`));
        setCountQuestion(countAsks + 1)
    };

    const alterOptions = (index, value) => {
        var newArray = options.slice();
        newArray[index] = (value);
        setOptions(newArray)
    };

    return (
        <div>
            {ask.length > 0 || option !== '' ? (
                <Question questions={ask} options={options} count={count} countAsks={countAsks}/>
            ) : ''}
            <ListGroup>
                <ListGroupItem tag="button" active>
                    <ListGroupItemHeading></ListGroupItemHeading>
                    <ListGroupItemText tag='div'>
                        Criar uma nova pergunta
                    </ListGroupItemText>
                </ListGroupItem>
                <ListGroupItem tag="button">
                    <Row form tag='div'>
                        <Col md={3}>
                            <FormGroup>
                                <Label for="examplePassword">Tipo de pergunta</Label>
                                <Input type="select" name="select" id="tipo" onChange={e => setTipoContent(e)}
                                       defaultValue={0}>
                                    <option value={0} disabled={true}>Selecione um tipo</option>
                                    <option value={1}>Multipla Escolha</option>
                                    <option value={2}>Resposta Unica</option>
                                    <option value={3}>Texto Curto</option>
                                    <option value={4}>Texto longo</option>
                                </Input>
                            </FormGroup>
                        </Col>
                    </Row>
                </ListGroupItem>
                <div className='hidden' id='text-question'>
                    <ListGroupItem>
                        <Row>
                            <Col md={12}>
                                <FormGroup>
                                    <Label for="exampleEmail">Pergunta</Label>
                                    <Input type="textarea" name="email" id="exampleEmail" value={inputAsk}
                                           placeholder="Texto da pergunta" onChange={e => setInputAsk(e.target.value)}/>
                                </FormGroup>
                            </Col>
                        </Row>
                    </ListGroupItem>
                </div>
                <div className='hidden' id='mult-question'>
                    <ListGroupItem>
                        <Row>
                            <Col md={10}>
                                <FormGroup>
                                    {/*<Label for="exampleEmail">Pergunta</Label>*/}
                                    <Input type="textarea" name="email" id="exampleEmail" value={inputAsk}
                                           className='input-questions'
                                           placeholder="Texto da pergunta" onChange={e => setInputAsk(e.target.value)}/>
                                </FormGroup>
                            </Col>
                        </Row>
                        <InputAlternative addAlternative={e => addAlternative}
                                          changeValue={e => setOption(e.target.value)}
                                          value={option}
                                          options={options}
                                          alterOptions={alterOptions}
                                          remove={removeAlternative}
                        />
                    </ListGroupItem>
                </div>
                <ListGroupItem>
                    <Row>
                        <Col md={12}>
                            <FormGroup>
                                <CustomInput type="switch" id="exampleCustomSwitch" name="customSwitch"
                                             label="Resposta Obrigatória"/>
                            </FormGroup>
                        </Col>
                    </Row>
                </ListGroupItem>
                <ListGroupItem>
                    <Row>
                        <Col md={12} tag='div'>
                            <Button color="primary" size="lg" block onClick={saveQuestion}>Adicionar Pergunta</Button>
                        </Col>
                    </Row>
                </ListGroupItem>


            </ListGroup>
        </div>
    );
}

export default CreateQuestions;
