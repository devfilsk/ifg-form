import React, {useEffect, useState} from 'react';
import { Col, FormGroup, ListGroupItemHeading} from 'reactstrap';

const Alternative = (props) => {

    const [dados, setDados ] = useState([]);

    useEffect(() => {
        setDados(props.data)
    })

    return (
        <div>
            {console.log('v', dados)}
            {props.data.map( (value, index) => (
                <Col md={12} key={value}>
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
