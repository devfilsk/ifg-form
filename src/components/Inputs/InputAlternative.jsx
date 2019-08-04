import React, {Component} from 'react';
import {Col, FormGroup, Input, Row} from "reactstrap";

const InputAlternative = (props) => {

    const changeValue = (e, index) => {
        e.preventDefault();
        props.alterOptions(index, e.target.value)
    };

    const removeAlternative = (e, index) => {
        props.remove(index);
    };

    const letters = {
        0: 'A)',
        1: 'B)',
        2: 'C)',
        3: 'D)',
        4: 'E)',
        5: 'F)',
        6: 'G)',
        7: 'H)',
        8: 'I)',
        9: 'J)',
    };
    return (
        <div>
            { props.options.map((value, index) => (
                <Row className=''>
                    <Col md={10} tag={'div'}>
                        <FormGroup style={{'display': 'flex', 'flexDirection': 'row', 'position': 'relative'}}>
                            <span>{letters[index]}</span>
                            <Input type="text" id='alternative-input'
                                   className='input-questions'
                                   // value={props.options[index+1] ? props.options[index+1]: ''}
                                   value={ props.options[index] }
                                   onChange={e => changeValue(e, index)}
                                   placeholder='Adicionar Alternativa'/>

                            { props.options.length === (index + 1)? (
                                    <button type="button" className="btn btn-info btn-flat" onClick={props.addAlternative(index)}>
                                        <i className="fa fa-user fa-plus"></i>
                                    </button>
                            ): ''}

                            {index+1 !== props.options.length ? (
                                <div className='btn-remove-opt' onClick={e => removeAlternative(e, index)}>
                                    <i className="fa fa-user fa-times"></i>
                                </div>
                                ) : ''}

                        </FormGroup>
                    </Col>
                </Row>
            ))}
        </div>

    );
}

export default InputAlternative;
