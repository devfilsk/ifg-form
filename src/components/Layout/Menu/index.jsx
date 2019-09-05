import React, {Component} from 'react';
import { BrowserRouter as Link, NavLink} from "react-router-dom";

class Menu extends Component {
    render() {
        return (
            <div>
                <aside className="main-sidebar">
                    <section className="sidebar">
                        <div className="user-panel">
                            <div className="pull-left image">
                                <img src="https://api.adorable.io/avatars/57/abott@adorable.png" className="img-circle" alt="User"/>
                            </div>
                            <div className="pull-left info">
                                <p>Alexander Pierce</p>
                                <a href="fake_url"><i className="fa fa-circle text-success"></i> Online</a>
                            </div>
                        </div>
                        <form action="#" method="get" className="sidebar-form">
                            <div className="input-group">
                                <input type="text" name="q" className="form-control" placeholder="Search..."/>
                                <span className="input-group-btn">
                                    <button type="submit" name="search" id="search-btn" className="btn btn-flat">
                                      <i className="fa fa-search"></i>
                                    </button>
                                </span>
                            </div>
                        </form>
                        <ul className="sidebar-menu" data-widget="tree">
                            <li className="header">MAIN NAVIGATION</li>
                            <li className="active treeview menu-open">
                                <a href="fake_url">
                                    <i className="fa fa-dashboard"></i> <span>Dashboard</span>
                                    <span className="pull-right-container">
                              <i className="fa fa-angle-left pull-right"></i>
                            </span>
                                </a>
                                <ul className="treeview-menu">
                                    <li><a href="index.html"><i className="fa fa-circle-o"></i> Dashboard v1</a></li>
                                    <li className="active"><a href="index2.html"><i
                                        className="fa fa-circle-o"></i> Dashboard v2</a></li>
                                </ul>
                            </li>
                            {/*Multiplos expansivel sem arrow*/}
                            {/*<li className="treeview">*/}
                            {/*    <a href="fake_url">*/}
                            {/*        <i className="fa fa-files-o"></i>*/}
                            {/*        <span>Layout Options</span>*/}

                            {/*    </a>*/}
                            {/*    <ul className="treeview-menu">*/}
                            {/*        <li><a href="pages/layout/top-nav.html"><i className="fa fa-circle-o"></i> Top*/}
                            {/*            Navigation</a></li>*/}
                            {/*        <li><a href="pages/layout/boxed.html"><i className="fa fa-circle-o"></i> Boxed</a>*/}
                            {/*        </li>*/}
                            {/*        <li><a href="pages/layout/fixed.html"><i className="fa fa-circle-o"></i> Fixed</a>*/}
                            {/*        </li>*/}
                            {/*        <li><a href="pages/layout/collapsed-sidebar.html"><i*/}
                            {/*            className="fa fa-circle-o"></i> Collapsed Sidebar</a></li>*/}
                            {/*    </ul>*/}
                            {/*</li>*/}
                            <li>
                                <NavLink to="/novo-formulario">
                                    <i className="fa fa-th"></i> <span>Meus formulários</span>
                                    <span className="pull-right-container">
                                    <small className="label pull-right bg-green">new</small>
                                    </span>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/">
                                    <i className="fa fa-th"></i> <span>Novo Formulário</span>
                                    <span className="pull-right-container">
                                    <small className="label pull-right bg-green">new</small>
                                    </span>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/questoes">
                                    <i className="fa fa-calendar"></i> <span>Adicionar Questões</span>
                                    <span className="pull-right-container">
                                      <small className="label pull-right bg-red">3</small>
                                      <small className="label pull-right bg-blue">17</small>
                                    </span>
                                    <span className="pull-right-container">
                                      <span className="label label-primary pull-right">4</span>
                                    </span>
                                </NavLink>
                            </li>
                            <li>
                                <a href="pages/mailbox/mailbox.html">
                                    <i className="fa fa-envelope"></i> <span>Mailbox</span>
                                    <span className="pull-right-container">
                                      <small className="label pull-right bg-yellow">12</small>
                                      <small className="label pull-right bg-green">16</small>
                                      <small className="label pull-right bg-red">5</small>
                                    </span>
                                </a>
                            </li>
                            <li className="treeview">
                                <a href="fake_url">
                                    <i className="fa fa-share"></i> <span>Multilevel</span>
                                    <span className="pull-right-container">
                                      <i className="fa fa-angle-left pull-right"></i>
                                    </span>
                                </a>
                                <ul className="treeview-menu">
                                    <li><a href="fake_url"><i className="fa fa-circle-o"></i> Level One</a></li>
                                    <li className="treeview">
                                        <a href="fake_url"><i className="fa fa-circle-o"></i> Level One
                                            <span className="pull-right-container">
                                              <i className="fa fa-angle-left pull-right"></i>
                                            </span>
                                        </a>
                                        <ul className="treeview-menu">
                                            <li><a href="fake_url"><i className="fa fa-circle-o"></i> Level Two</a></li>
                                            <li className="treeview">
                                                <a href="fake_url"><i className="fa fa-circle-o"></i> Level Two
                                                    <span className="pull-right-container">
                                                      <i className="fa fa-angle-left pull-right"></i>
                                                    </span>
                                                </a>
                                                <ul className="treeview-menu">
                                                    <li><a href="fake_url"><i className="fa fa-circle-o"></i> Level Three</a>
                                                    </li>
                                                    <li><a href="fake_url"><i className="fa fa-circle-o"></i> Level Three</a>
                                                    </li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li>
                                    <li><a href="fake_url"><i className="fa fa-circle-o"></i> Level One</a></li>
                                </ul>
                            </li>
                            {/*<li className="header">LABELS</li>*/}
                            {/*<li><a href="fake_url"><i className="fa fa-circle-o text-red"></i> <span>Important</span></a></li>*/}
                            {/*<li><a href="fake_url"><i className="fa fa-circle-o text-yellow"></i> <span>Warning</span></a></li>*/}
                            {/*<li><a href="fake_url"><i className="fa fa-circle-o text-aqua"></i> <span>Information</span></a>*/}
                            {/*</li>*/}
                        </ul>
                    </section>
                </aside>
            </div>
        );
    }
}

export default Menu;
