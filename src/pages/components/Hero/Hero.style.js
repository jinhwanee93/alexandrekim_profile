import styled from 'styled-components';

export const HeroContainer = styled.section`
    align-items: center;
    background: #333;
    display: flex;
    height: 56vh;
    justify-content: flex-start;
`;

export const HeroTitle = styled.h1`
    border-right: .15em solid white;
    color: white;
    font-family: monospace;
    font-size: 42px;
    overflow: hidden;
    white-space: nowrap;
    margin: 0 auto;
    letter-spacing: .15em;
    animation:
        typing 3.5s steps(40, end),
        blink-caret .75s step-end infinite;

    @keyframes typing {
        from { width: 0 }
        to { width: 100% }
    }

    @keyframes blink-caret {
        from, to { border-color: transparent }
        50% { border-color: white; }
    }
`;
