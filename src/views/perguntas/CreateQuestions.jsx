import React, {Component} from 'react';
import {ListGroupItem, ListGroup, ListGroupItemHeading, ListGroupItemText} from "reactstrap";

class CreateQuestions extends Component {
    render() {
        return (
            <div>
                <ListGroup>
                    <ListGroupItem tag="button" action active>
                        <ListGroupItemHeading></ListGroupItemHeading>
                        <ListGroupItemText>
                            Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius
                            blandit.
                        </ListGroupItemText>
                    </ListGroupItem>
                    <ListGroupItem tag="button" action>
                        <ListGroupItemHeading>List group item heading</ListGroupItemHeading>
                        <ListGroupItemText>
                            Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius
                            blandit.
                        </ListGroupItemText>
                    </ListGroupItem>
                    <ListGroupItem tag="button" action>
                        <ListGroupItemHeading>List group item heading</ListGroupItemHeading>
                        <ListGroupItemText>
                            Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius
                            blandit.
                        </ListGroupItemText>
                    </ListGroupItem>
                </ListGroup>
            </div>
        );
    }
}

export default CreateQuestions;
