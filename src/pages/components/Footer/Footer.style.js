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
`;

export const FooterEmailContainer = styled.div`
    width: 40px;
    position: fixed;
    bottom: 0px;
    left: auto;
    right: 40px;
`;

export const FooterEmail = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;

    a {
        color: white;
        font-family: monospace;
        font-size: 12px;
        letter-spacing: 0.1em;
        writing-mode: vertical-rl;
        margin: 20px auto;
        padding: 10px;
        text-decoration: none;
    }

    ::after {
      content: "";
      display: block;
      width: 1px;
      height: 96px;
      background-color: white;
      margin: 0px auto;
    }
`;

export const FooterSocialContainer = styled.div`
    width: 40px;
    position: fixed;
    bottom: 0px;
    right: auto;
    left: 40px;
`;

export const FooterSocial = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;

    a {
        color: white;
        font-family: monospace;
        font-size: 12px;
        letter-spacing: 0.1em;
        writing-mode: vertical-rl;
        margin: 20px auto;
        padding: 10px;
        text-decoration: none;
    }

    ::after {
      content: "";
      display: block;
      width: 1px;
      height: 96px;
      background-color: white;
      margin: 0px auto;
    }
`;

export const FooterSocialIcons = styled.li`
    list-style: none;
    color: white;
    padding: 10px;

    a {
      margin: 0;
      padding: 0;
    }
`;
