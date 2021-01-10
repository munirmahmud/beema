import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Button } from '../Button';
import { Logo } from '../Logo';

export const Navbar = (props) => {
    return (
        <NavbarContainer>
            <BrandWrapper>
                <Link to="/">
                    <Logo inline />
                </Link>
            </BrandWrapper>

            <NavigationWrapper>
                <Button small>Get Started</Button>
                <LoginButton small>Login</LoginButton>
            </NavigationWrapper>
        </NavbarContainer>
    )
};

const NavbarContainer = styled.nav`
    width: 100%;
    height: 65px;
    padding: 0 2em;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const BrandWrapper = styled.div`

    a {
        text-decoration: none;
    }
`;

const NavigationWrapper = styled.div`
    
`;

const LoginButton = styled(Button)`
    background-color: transparent;
    border: none;
    margin-left: 1.5em;

    &:hover {
        background-color: transparent;
        border: none;
        color: rgb(199, 199, 199);
    }
`;