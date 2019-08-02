import React, {Component} from 'react';
import {Col, FormGroup, Input, Row} from "reactstrap";

const InputAlternative = (props) => {

    return (
        <div>
            { props.options.length > 0 ? props.options.map((value, index) => (
                <Row className=''>
                    <Col md={10} tag={'div'}>
                        <FormGroup style={{'display': 'flex', 'flexDirection': 'row'}}>
                            <Input type="text" id='alternative-input'
                                   className='input-questions'
                                   // value={props.options[index+1] ? props.options[index+1]: ''}
                                   value={props.options.length === (index + 1)? props.value : props.options[index+1]}
                                   onChange={props.options.length === (index + 1)? props.changeValue : ''}
                                   placeholder='Adicionar Alternativa'/>

                            { props.options.length === (index + 1)? (
                                <div className="input-group-btn">
                                    <button type="button" className="btn btn-info btn-flat"
                                            onClick={props.addAlternative}
                                    >+
                                    </button>
                                </div>
                            ): ''}

                        </FormGroup>
                    </Col>
                </Row>
            )) : (
                <Row className=''>
                    {/*<Col md={10} tag={'div'}>*/}
                        {/*<FormGroup style={{'display': 'flex', 'flexDirection': 'row'}}>*/}
                            {/*<Input type="text" id='alternative-input'*/}
                                   {/*className='input-questions'*/}
                                   {/*value={props.value}*/}
                                   {/*onChange={props.changeValue}*/}
                                   {/*placeholder='Adicionar Alternativa'/>*/}

                                {/*<div className="input-group-btn">*/}
                                    {/*/!*{console.log('Index: ', index, 'length', props.options.length)}*!/*/}
                                    {/*<button type="button" className="btn btn-info btn-flat"*/}
                                            {/*onClick={props.addAlternative}*/}
                                    {/*>+*/}
                                    {/*</button>*/}
                                {/*</div>*/}

                        {/*</FormGroup>*/}
                    {/*</Col>*/}
                </Row>
            )}

        </div>

    );
}

export default InputAlternative;
