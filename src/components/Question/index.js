import React from 'react';
import {Col, ListGroup, ListGroupItem, Row} from "reactstrap";

import Alternative from "../Alternative/index";

const Question = (props) => {
    return (
        <div>
            <Row>
                {props.questions.length > 0 ? props.questions.map((value, i) => (
                    <Col md={12}>
                        <ListGroup>
                            <ListGroupItem active tag="a" href="#" action>{value}</ListGroupItem>
                            <Alternative options={props.options} count={props.count}/>
                        </ListGroup>
                    </Col>
                )) : ''}
            </Row>
        </div>
    );
}

export default Question;
