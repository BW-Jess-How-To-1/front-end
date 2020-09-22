import React from 'react';
import { Link, Route } from 'react-router-dom';
import styled from 'styled-components';
import FormBox from './FormBox';
import PostForm from './PostForm';

const Head = styled.div`
    font-family: 'Handlee', cursive;
    margin-bottom: 80px;
`;

const Title = () => {
    return (
        <Head>
            <div>
                <h1>How To..</h1>
                <p>This is where some clever description goes.</p>
            </div>
            <div>
                <Link to='/' >Login</Link>
                <Link to='/post' >Post</Link>
            </div>
            <Route exact path="/" component={FormBox} />
            <Route path="/post" component={PostForm} />
        </Head>
    )
}

export default Title;