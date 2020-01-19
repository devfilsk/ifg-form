import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import './style.scss';

import api from '../../services/api'

export default function Login() {
    const { register, handleSubmit } = useForm();

    const [ matricula, setMatricula ] = useState('');
    const [ passoword, setPassword ] = useState('');

    // useEffect(async () => {
    //
    // })

    async function onSubmit(data) {
        console.log(data)
        api.post('login', data)
        .then(res => res)
        .then(res => console.log('response', res))
        // const result = await api.post('login', {'email': matricula, 'password': passoword});
        // console.log("resultado", result)
    }

    return (
        <div>
            <div className="login-container">
                <div className="login-logo">
                    <form onSubmit={handleSubmit} onSubmit={handleSubmit(onSubmit)}>
                        <input ref={register} type="text" name='email' placeholder='Matrícula'/>
                        <input ref={register} type="password" name='password' placeholder='Senha' onChange={e => setPassword(e.target.value)}/>
                        <input type='submit' value='Entrar'/>
                    </form>
                </div>
            </div>
        </div>
    );
};

