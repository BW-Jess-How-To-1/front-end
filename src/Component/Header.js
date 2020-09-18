import React from 'react';
import styled from 'styled-components';

const Head = styled.div`
    font-family: 'Handlee', cursive;
    margin-bottom: 80px;
`;

const Title = () => {
    return (
        <Head>
            <h1>How To..</h1>
            <p>This is where some clever description goes.</p>
        </Head>
    )
}

export default Title;