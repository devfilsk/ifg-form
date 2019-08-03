import React, {Component} from 'react';
import {Col, FormGroup, Input, Row} from "reactstrap";

const InputAlternative = (props) => {

    const changeValue = (e, index) => {
        e.preventDefault();
        props.alterOptions(index, e.target.value)
    };

    return (
        <div>
            { props.options.length > 0 ? props.options.map((value, index) => (
                <Row className=''>
                    {console.log("f", props.options)}
                    <Col md={10} tag={'div'}>
                        <FormGroup style={{'display': 'flex', 'flexDirection': 'row'}}>
                            <Input type="text" id='alternative-input'
                                   className='input-questions'
                                   // value={props.options[index+1] ? props.options[index+1]: ''}
                                   value={ props.options.length == 1 ? props.options[index] : props.options[index+1]}
                                   onChange={e => changeValue(e, index)}
                                   placeholder='Adicionar Alternativa'/>

                            { props.options.length === (index + 1)? (
                                <div className="input-group-btn">
                                    <button type="button" className="btn btn-info btn-flat"
                                            onClick={props.addAlternative(index)}
                                    >+
                                    </button>
                                </div>
                            ): ''}

                        </FormGroup>
                    </Col>
                </Row>
            )) : (
                <Row className=''>
                    <Col md={10} tag={'div'}>
                        {console.log("f", props.options)}
                        <FormGroup style={{'display': 'flex', 'flexDirection': 'row'}}>
                            <Input type="text" id='alternative-input'
                                   className='input-questions'
                                   value={props.options[0]}
                                   onChange={e => changeValue(e, 0)}
                                   placeholder='Adicionar Alternativa'/>

                                <div className="input-group-btn">
                                    {/*{console.log('Index: ', index, 'length', props.options.length)}*/}
                                    <button type="button" className="btn btn-info btn-flat"
                                            onClick={props.addAlternative(0)}
                                    >+
                                    </button>
                                </div>

                        </FormGroup>
                    </Col>
                </Row>
            )}

        </div>

    );
}

export default InputAlternative;
