import styled from 'styled-components';

export const HeaderContainer = styled.div`
    align-items: center;
    background: #333;
    border-bottom: 2px solid white;
    display: flex;
    justify-content: space-between;
    padding: 10px;
`;

export const HeaderLogoContainer = styled.div`
  display: flex;
  justify-content: flex-start;
`;

export const HeaderLogo = styled.div`
    color: white;
    font-family: monospace;
    font-size: 20px;
    cursor: pointer;
`;

export const HeaderNavContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const HeaderNav = styled.h2`
    color: white;
    font-family: monospace;
    font-size: 14px;
    margin: 0 20px;
    cursor: pointer;

    :hover {
        text-decoration: underline;
    }
`;
