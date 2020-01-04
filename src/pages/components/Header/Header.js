import React from 'react';
import {
  HeaderContainer,
  HeaderLogo,
  HeaderLogoContainer,
  HeaderNav,
  HeaderNavContainer,
} from './Header.style';

export default function Header() {

  return (
    <div>
      <HeaderContainer>

        <HeaderLogoContainer>
          <HeaderLogo>AK</HeaderLogo>
        </HeaderLogoContainer>

        <HeaderNavContainer>
          <HeaderNav>01. About</HeaderNav>
          <HeaderNav>02. Work</HeaderNav>
          <HeaderNav>03. Contact</HeaderNav>
          <HeaderNav>04. Resume</HeaderNav>
        </HeaderNavContainer>

      </HeaderContainer>
    </div>
  )
}
