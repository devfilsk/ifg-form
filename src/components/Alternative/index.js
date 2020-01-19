import React from 'react';
import { ListGroupItem } from 'reactstrap';
import './style.scss';

export default function Alternative({ options }) {

    return (
        <div>
            {options.map( (value, index) => (
                <ListGroupItem className='text'>{ value }</ListGroupItem>
            )) }
        </div>

    );
};

