import styled from 'styled-components';

export const FooterContainer = styled.div`
  background: #333;
  border-top: 1px solid white;  
  display: flex;
  justify-content: center;
  padding: 40px 0;
`;

export const FooterLink = styled.a`
    color: white;
    font-family: monospace;
    text-decoration: none;
`

export const FooterEmail = styled.div`
    bottom: 240px;
    color: white;
    font-family: monospace;
    position: fixed;
    right: 0%;
    transform: rotate(90deg);
`
