import React, {useEffect, useState} from 'react';
import {
    ListGroupItem,
    ListGroup,
    ListGroupItemHeading,
    ListGroupItemText,
    Row,
    Col,
    FormGroup,
    Label, Input, CustomInput, Button, Card, CardTitle, CardText
} from "reactstrap";
import Alternative from "../../components/alternative";
import Question from "../../components/question";
import './createQuestions.scss';
import InputAlternative from "../../components/Inputs/InputAlternative";

const CreateQuestions = (props) => {

    const [options, setOptions] = useState([]);
    const [tipo, setTipo] = useState('');
    const [option, setOption] = useState('');
    const [ask, setAsk] = useState([]);
    const [count, setCount] = useState(1);
    const [inputAsk, setInputAsk] = useState('');
    const [countAsks, setCountQuestion] = useState(1);
    const [qtd, setQtd ] = useState(1);

    const letters = {
        1: 'A)',
        2: 'B)',
        3: 'C)',
        4: 'D)',
        5: 'E)',
        6: 'F)',
        7: 'G)',
        8: 'H)',
        9: 'I)',
        10: 'J)',
    };

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
        let data = options;
        if (option.length > 0) {
            setOptions(data => data.concat(letters[count] + ' ' + option));
            setOption('');
            setCount(count + 1)
        } else {
            alert('Ops, preencha com mais letras')
        }
    };

    const saveQuestion = () => {
        console.log("Pergunta: ", ask);
        console.log("questões: ", options);
        let data = inputAsk;
        setAsk(data => data.concat(`${countAsks} - ${inputAsk}`));
        setCountQuestion(countAsks + 1)
    }

    const changeOption = (e) => {
        // e => setOption(e.target.value)
        console.log("event", e)

    }

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
                        <Row className=''>
                            <Col md={10} tag={'div'}>
                                <FormGroup style={{'display': 'flex', 'flexDirection': 'row'}}>
                                    <Input type="text" id='alternative-input'
                                           className='input-questions'
                                           value={options.length > 0 ? options[0] : option}
                                           onChange={e => setOption(e.target.value)}
                                           placeholder='Adicionar Alternativa'/>

                                    { options.length == 0 ? (
                                        <div className="input-group-btn">
                                            <button type="button" className="btn btn-info btn-flat"
                                                    onClick={addAlternative}
                                            >+
                                            </button>
                                        </div>
                                    ): ''}

                                </FormGroup>
                            </Col>
                        </Row>
                        <InputAlternative addAlternative={e=>addAlternative()} changeValue={e => setOption(e.target.value)} value={option} options={options}/>
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
