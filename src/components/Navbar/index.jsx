import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Logo } from '../Logo';

export const Navbar = () => {
    return (
        <NavbarContainer>
            <BrandWrapper>
                <Link to="/">
                    <Logo inline />
                </Link>
            </BrandWrapper>
        </NavbarContainer>
    )
};

const NavbarContainer = styled.nav`
    width: 100%;
    height: 65px;
    padding: 0 2em;
    display: flex;
    align-items: center;
`;

const BrandWrapper = styled.div`

    a {
        text-decoration: none;
    }
`;