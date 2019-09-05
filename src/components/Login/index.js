import React, { useState } from 'react';
import './style.scss';

export default function Login() {
    return (
        <div>
            <div className="login-container">
                <div className="login-logo">
                    <form >
                        <div className="body">
                            <input type="text" name='email' placeholder='Email'/>
                            <input type="password" name='password' placeholder='Senha'/>
                        </div>
                        <div className="footer">
                            <input type='submit' value='Entrar'/>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

