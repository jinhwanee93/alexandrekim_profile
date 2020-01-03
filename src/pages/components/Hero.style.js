import styled from 'styled-components';

export const HeroContainer = styled.div`
    background-color: black;
    color: white;
    height: 300px;
    position: relative;

    h1 {
        font-family: 'Open Sans', sans-serif;
        left: 50%;
        margin: 0;
        position: absolute;
        text-align: center;
        top: 50%;
        transform: translate(-50%,-50%);
    }
`;
