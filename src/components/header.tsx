import React from 'react';
import { Link } from 'gatsby';
import { Navegacion } from './navegacion';

export interface GatsbyLinkProps {

}

export const Header = () => {
    return (
        <header>
            <div>
                <Link to='/'>
                    Bienes Raices
                </Link>

                <Navegacion />
            </div>
        </header>
    )
}