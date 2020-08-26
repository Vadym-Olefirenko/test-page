import React from 'react';
import { Container} from 'reactstrap';
import './header.scss';
import logo from './logo.svg'

const Header = () => {
    return (
        <>
            <header className="header">
                <Container>
                    <div className="header__top">
                        <img src={logo} alt="logo"/>
                    </div>
                </Container>
            </header>
        </>
    )
}

export default Header;