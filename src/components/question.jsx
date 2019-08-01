import React, {Component} from 'react';
import {Card, CardTitle, Col, ListGroup, ListGroupItem, Row} from "reactstrap";
import Alternative from "./alternative";

const Question = (props) => {
    return (
        <div>
            <Row>
                {props.questions.length > 0 ? props.questions.map((value, i) => (
                    <Col md={12}>
                        <Card body>
                            <CardTitle>
                                <ListGroup>
                                    <ListGroupItem active tag="a" href="#" action>{props.countAsks} - {value}</ListGroupItem>
                                    <Alternative options={props.options} count={props.count}/>
                                </ListGroup>
                            </CardTitle>
                            {/*<CardText>*/}
                            {/*<Alternative options={options} count={count}/>*/}
                            {/*</CardText>*/}
                            {/*<Button>Go somewhere</Button>*/}
                        </Card>

                    </Col>
                )) : ''}
            </Row>
        </div>
    );
}

export default Question;
