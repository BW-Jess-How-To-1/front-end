import React from 'react';
import styled from 'styled-components';
import NavBar from './NavBar';

const Head = styled.div`
    font-family: 'Handlee', cursive;
    margin-bottom: 80px;
`;

const Title = () => {
    return (
        <Head>
            <div className="logo" >
                <h1>How To..</h1>
                <p>This is where some clever description goes.</p>
            </div>
            <NavBar />
        </Head>
    )
}

export default Title;