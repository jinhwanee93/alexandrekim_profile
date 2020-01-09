import styled from 'styled-components';

export const HeaderContainer = styled.div`
    align-items: center;
    background: #333;
    border-bottom: 2px solid white;
    display: flex;
    justify-content: space-between;
    padding: 20px 0;
    position: fixed;
    width: 100%;
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
    margin: 0 20px;
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

    a {
      color: white;
      text-decoration: none;
      transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1) 0s;
    }

    :hover {
        text-decoration: underline;
    }
`;
