import React from 'react';
import {Container} from 'reactstrap';

import Header from '../header/header';
import Form from '../form/form';

export default function App () {
    
    return (
        <>      
            <Header />
             <Container>
                <Form/>
            </Container>
        </>
    )
};