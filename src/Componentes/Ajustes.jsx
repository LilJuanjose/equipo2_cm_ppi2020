/*IMPORT-REACT*/
import React from 'react';
import { Link } from 'react-router-dom';
/*IMPORT-BOOTSTRAP*/
import 'bootstrap/dist/css/bootstrap.min.css';
/*IMPORT-COMPONENTS*/
import Footer from './Footer';
import Navbar from './Navbar-btn';
import '../Estilos/Ajustes.css';
/*IMPORT-IMAGES*/
import icon_edit from '../Images_proyectos/btn-icon-edit.png';

export default class Solicitud extends React.Component {
        render() {
                return (
                        <div className="App-a">
                                <Navbar id="header_global" />
                                <div className="mt-5"></div>
                                <div className="container">
                                        <div className="row mb-5 justify-content-center">
                                                        <div className="mt-1 col-12 col-lg-5" id="Bloque_ajustes">
                                                                <h1 className="text-center mt-4" id="Texto_inicio">Ajustes</h1>
                                                                <hr />
                                                                <div className="mt-5"></div>
                                                                <div class="mt-2 row justify-content-center mt-0 btn-group" id="btn-farm">
                                                                        <text type="summit" readonly="readonly" className="col-lg-11 col-11 btn btn-primary bg-light justify-content-between d-flex" id="text-box">Nombre: Androly-San <Link to="/Ajustes/Editar_nombre"><button type="button" className="btn-edit"><img src={icon_edit} className="" /></button></Link></text>
                                                                </div>
                                                                <div className="mt-5"></div>
                                                                <div class="mt-2 row justify-content-center mt-0 btn-group" id="btn-farm">
                                                                        <text type="summit" readonly="readonly" className="col-lg-11 col-11 btn btn-primary bg-light justify-content-between d-flex" id="text-box">Contraseña: *********<Link to="/Ajustes/Editar_contraseña"><button type="button" className="btn-edit"><img src={icon_edit} className="" /></button></Link></text>
                                                                </div>
                                                                <div className="mt-5"></div>
                                                                <div class="mt-2 row justify-content-center mt-0 btn-group" id="btn-farm">
                                                                        <text type="summit" readonly="readonly" className="col-lg-11 col-11 btn btn-primary bg-light justify-content-between d-flex" id="text-box">Correo: Andy@correo.com <Link to="/Ajustes/Editar_correo"><button type="button" className="btn-edit"><img src={icon_edit} className="" /></button></Link></text>
                                                                </div>
                                                                <div className="mt-5"></div>
                                                                <div class="mt-2 row justify-content-center btn-group" id="btn-farm">
                                                                        <select class="text-left col-11 col-lg-11 btn btn-primary bg-light text-dark sub-item" id="dropmenu">
                                                                                <option className="sub-item-big" disabled selected>Ajustes de notificaciones</option>
                                                                                <option className="sub-item">Activar notificaciones</option>
                                                                                <option className="sub-item" >Desactivar notificaciones</option>
                                                                        </select>
                                                                </div>
                                                                <div className="mt-5"></div>
                                                                <Link className="row justify-content-center mt-0"  id="btn_off" to="/">
                                                                        <button className="col-lg-10 col-10 btn btn-dark btn-block" type="submit">Cerrar Sesión</button>
                                                                </Link>
                                                                <div className="mb-5"></div>
                                                        </div>
                                                </div>
                                        </div>
                                <Footer />
                        </div>
                );
        }
}
