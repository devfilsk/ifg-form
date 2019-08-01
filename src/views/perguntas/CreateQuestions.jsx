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

const CreateQuestions = (props) => {

    const [ options, setOptions ]           = useState([]);
    const [ tipo, setTipo ]                 = useState('');
    const [ option, setOption ]             = useState('');
    const [ ask, setAsk ]                   = useState([]);
    const [count, setCount]                 = useState(1);
    const [inputAsk, setInputAsk]                 = useState('');
    const [countAsks, setCountQuestion] = useState(1);

    const letters = {
        1  : 'A)',
        2  : 'B)',
        3  : 'C)',
        4  : 'D)',
        5  : 'E)',
        6  : 'F)',
        7  : 'G)',
        8  : 'H)',
        9  : 'I)',
        10 : 'J)',
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
        if(option.length > 0){
            setOptions(data => data.concat(letters[count]+' '+option));
            setOption('');
            setCount(count+1)
        }else{
            alert('Ops, preencha com mais letras')
        }
    };

    const saveQuestion = () => {
        console.log("Pergunta: ", ask);
        console.log("questões: ", options);
        let data = inputAsk;
        setAsk(data => data.concat(inputAsk));
    }

    return (
        <div>
            {ask.length > 0 || option !== '' ? (
                <Question questions={ask} options={options} count={count} countAsks={countAsks}/>
            ): ''}

            <ListGroup>
                <ListGroupItem tag="button" action active>
                    <ListGroupItemHeading></ListGroupItemHeading>
                    <ListGroupItemText tag='div'>
                        Criar uma nova pergunta
                    </ListGroupItemText>
                </ListGroupItem>
                <ListGroupItem tag="button" action>
                    {/*<ListGroupItemHeading>Preencha com os dados da pergunta</ListGroupItemHeading>*/}
                    <ListGroupItemText tag={'div'}>
                        <Row form tag='div'>
                            <Col md={3}>
                                <FormGroup>
                                    <Label for="examplePassword">Tipo de pergunta</Label>
                                    <Input type="select" name="select" id="tipo" onChange={e => setTipoContent(e)} defaultValue={0}>
                                        <option value={0} disabled={true}>Selecione um tipo</option>
                                        <option value={1}>Multipla Escolha</option>
                                        <option value={2}>Resposta Unica</option>
                                        <option value={3}>Texto Curto</option>
                                        <option value={4}>Texto longo</option>
                                    </Input>
                                </FormGroup>
                            </Col>
                            <div className='alternatives'>
                                <Alternative options={options} count={count}/>
                            </div>
                            <div className='hidden' id='text-question'>
                                <Col md={12}>
                                    <FormGroup>
                                        <Label for="exampleEmail">Pergunta</Label>
                                        <Input type="textarea" name="email" id="exampleEmail" value={inputAsk} placeholder="Texto da pergunta" onChange={e => setInputAsk(e.target.value)}/>
                                    </FormGroup>
                                </Col>
                            </div>
                            <div tag={'div'} className='hidden' id='mult-question'>
                                <Col md={10}>
                                    <FormGroup>
                                        <Label for="exampleEmail">Pergunta</Label>
                                        <Input type="textarea" name="email" id="exampleEmail" value={inputAsk} placeholder="Texto da pergunta" onChange={e => setInputAsk(e.target.value)}/>
                                    </FormGroup>
                                </Col>
                                <Col md={10} tag={'div'}>
                                    <FormGroup style={{'display': 'flex', 'flexDirection': 'row'}}>
                                        <Input type="text" className="form-control" id='alternative-input' value={option} onChange={e => setOption(e.target.value)} placeholder='Adicionar Alternativa'/>
                                        <div className="input-group-btn">
                                          <button type="button" className="btn btn-info btn-flat" onClick={addAlternative}>+</button>
                                        </div>
                                    </FormGroup>
                                </Col>
                            </div>
                            <Col md={12}>
                                <FormGroup>
                                    <CustomInput type="switch" id="exampleCustomSwitch" name="customSwitch"
                                                 label="Resposta Obrigatória"/>
                                </FormGroup>
                            </Col>
                            <Col md={12} tag='div'>
                                <Button color="primary" size="lg" block onClick={saveQuestion}>Adicionar Pergunta</Button>
                            </Col>
                        </Row>
                    </ListGroupItemText>
                </ListGroupItem>
            </ListGroup>
        </div>
    );
}

export default CreateQuestions;
