import React, {useEffect, useState} from 'react';
import {Col, FormGroup, Label, ListGroupItem} from 'reactstrap';
import './style.scss';

const Alternative = (props) => {

    const [options, setOptions ] = useState([]);

    useEffect(() => {
        setOptions(props.options)
    });

    return (
        <div>
            {options.map( (value, index) => (
                <ListGroupItem className='text'>{ value }</ListGroupItem>
            )) }
        </div>

    );
};

export default Alternative;
