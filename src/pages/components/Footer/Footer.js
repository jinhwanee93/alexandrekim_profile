import React from 'react';

import {
  FooterContainer,
  FooterEmail,
  FooterLink
} from './Footer.style';

export default function Footer() {
  return(
    <div>
      <FooterContainer>
        <FooterLink href="https://www.github.com/jinhwanee93">
          Designed & built by Alexandre Kim
        </FooterLink>
        <FooterEmail>
          alexandrekim93@gmail.com 
          <div>
          </div>
        </FooterEmail>
      </FooterContainer>
    </div>
  )
}