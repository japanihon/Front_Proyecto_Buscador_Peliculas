import React from 'react';
import {Link} from 'react-router-dom';

import './error404.scss';

export default function Erro404(){
    return (
        <div className="error404">
            <h1>Error 404</h1>
            <h2>Pagina no encontrada</h2>
            <Link to="/">
                <h3>Volver al inicio</h3>
            </Link>
        </div>
    );
}