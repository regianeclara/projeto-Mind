import React from 'react';
import {  BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';

// IMPORTS ADMIN
import Dashboard from './views/admin/usuarios';

import Usuarios from './views/admin/usuarios';
import UsuarioEditar from './views/admin/usuarios/usuarios.editar';
import UsuarioCadastrar from './views/admin/usuarios/usuarios.cadastrar'

// IMPORTS CLIENT
import Home from './views/admin/login';
import Login from './views/admin/login';

import PrivateRoute from './services/wAuth';

export default function Routes(){

    return(
        <BrowserRouter>
            <Switch>
                {/* Rota Cliente */}
                <Route path="/" exact component={Home} />

                {/* Rota Admin */}
                <Route path="/admin/login" exact component={Login} />
                <PrivateRoute path="/admin" exact component={Dashboard} />
                                
                <PrivateRoute path="/admin/usuarios" exact component={Usuarios} />
                <Route path="/admin/usuarios/cadastrar" exact component={UsuarioCadastrar} />
                <PrivateRoute path="/admin/usuarios/editar/:idUsuario" exact component={UsuarioEditar} />

            </Switch>
        </BrowserRouter>
    )
}