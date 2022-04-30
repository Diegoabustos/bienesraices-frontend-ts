import React from "react";
import { Link } from 'gatsby';

export const Navegacion = () => {
    return (
        <nav>
            <Link to={'/'}>Inicio</Link>
            <Link to={'/nosotros'}>Nosotros</Link>
            <Link to={'/propiedades'}>Propiedad</Link>
        </nav>
    )
}; 