import React, { useState, useEffect } from 'react';

import api from '../../../services/api';

import { Button } from 'reactstrap';

// import { Container } from './styles';

export default function Show({ history, match }) {
    const [ form, setForm ] = useState({});

    useEffect(() => {
        console.log("historico", history)
        console.log("Match", match)
        getForms();
        console.log("Response", form)
        
    }, []);

    const getForms = async () =>  {
        await api.get(`formulario/${match.params.id}`)
            .then(res => res)
            .then(res => {
                console.log('res', res)
                setForm(res.data)
            });
    }
    
  return (
    <div >
        <Button color="primary">Adicionar questões</Button>
        <h1>{form.nome}</h1>
    </div>
  );
}
