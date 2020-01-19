import React, { useState, useEffect } from 'react';

import api from '../../../services/api'
import { BrowserRouter as Link, NavLink} from "react-router-dom";


import { Row, Col, Card, CardTitle, CardText, Button } from 'reactstrap';

// import { Container } from './styles';

export default function Listar() {

    const [ formularios, setFormularios ] = useState([])

    useEffect(() => {
        api.get('formulario')
            .then(res => res)
            .then(res => {
                console.log(res);
                setFormularios(res.data)
            })
    }, []);

  return (
    <Row>
        {
            formularios && formularios.map(form => (
            <Col sm="6" key={form.id}>
                <Card body style={{ backgroundColor: '#f5f5f5', borderColor: '#333' }}>
                    <CardTitle>{ form.nome } </CardTitle>
                    <CardText>{ form.descricao}</CardText>
                    <NavLink to={`/formulario/${form.id}`} id={form.id}>Ver formulario</NavLink>
                </Card>
              </Col>
            ))}
    </Row>
  );
}
