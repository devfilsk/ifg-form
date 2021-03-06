import React from 'react';
import {Switch, Route} from "react-router-dom";

import CreateForm from "../../../views/formularios/createForm";
import CreateQuestions from "../../../views/perguntas/CreateQuestions";
import Formularios from '../../../views/formularios/Listar'
import Formulario from '../../../views/formularios/Show'

export default function Content (){
    return (
        <div>
            <div className="content-wrapper">
                <section className="content-header">
                    <h1>
                        Data Tables
                        <small>advanced tables</small>
                    </h1>
                    <ol className="breadcrumb">
                        <li><a href="fake_url"><i className="fa fa-dashboard"></i> Home</a></li>
                        <li><a href="fake_url">Tables</a></li>
                        <li className="active">Data tables</li>
                    </ol>
                </section>

                <section className="content">
                <Switch>
                    <Route path='/novo-formulario' component={CreateForm}/>
                    <Route path='/formularios' component={Formularios}/>
                    <Route path='/formulario/:id' exact component={Formulario}/>
                    <Route path='/formulario/:id/questoes' exact component={CreateQuestions}/>
                    {/*<CreateQuestions/>*/}
                </Switch>
                </section>
            </div>
        </div>
    );
}

