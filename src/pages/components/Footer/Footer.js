import React from 'react';
// import React, { useState } from 'react';
// import SimpleIcons from 'simple-icons';

import {
  FooterContainer,
  FooterEmail,
  FooterLink
} from './Footer.style';

export default function Footer() {
  // const [gitHub] = useState(SimpleIcons.get('github'));

  return(
    <div>
      <FooterContainer>
        <FooterLink href="https://www.github.com/jinhwanee93">
          Designed & built by Alexandre Kim
        </FooterLink>
        <FooterEmail>
          alexandrekim93@gmail.com
        </FooterEmail>
      </FooterContainer>
    </div>
  )
}