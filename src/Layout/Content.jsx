import React, {Component} from 'react';
import CreateForm from "../views/formularios/createForm";
import CreateQuestions from "../views/perguntas/CreateQuestions";

class Content extends Component {
    render() {
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
                        <CreateQuestions/>
                    </section>
                </div>
            </div>
        );
    }
}

export default Content;
