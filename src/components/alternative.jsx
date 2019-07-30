import React, {Component} from 'react';
import { Col, FormGroup, ListGroupItemHeading} from 'reactstrap';

const Alternative = (props) => {

    return (
        <div>
            {props.data.map( (value, index) => (
                <Col md={12}>
                    {console.log("Value alt: ", value)}
                    <FormGroup>
                        <ListGroupItemHeading className='text'>{value}</ListGroupItemHeading>
                    </FormGroup>
                </Col>
            )) }
        </div>

    );
};

export default Alternative;
