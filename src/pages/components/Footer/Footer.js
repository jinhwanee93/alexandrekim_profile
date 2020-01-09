import React from 'react';
import Icon from 'react-simple-icons';

import {
  FooterContainer,
  FooterEmail,
  FooterEmailContainer,
  FooterLink,
  FooterSocial,
  FooterSocialContainer,
  FooterSocialIcons,
} from './Footer.style';

export default function Footer() {

  return(
    <div>
      <FooterContainer>
        <FooterLink href="https://www.github.com/jinhwanee93">
          Designed & built by Alexandre Kim
        </FooterLink>

        <FooterSocialContainer>
          <FooterSocial>
            <FooterSocialIcons>
              <a href="https://github.com/jinhwanee93">
                <Icon name="github"/>
              </a>
            </FooterSocialIcons>
            <FooterSocialIcons>
              <a href="https://linkedin.com/in/alexandrekim93">
                <Icon name="linkedin"/>
              </a>
            </FooterSocialIcons>
            <FooterSocialIcons>
              <a href="https://instagram.com/xandrekim">
                <Icon name="instagram"/>
              </a>
            </FooterSocialIcons>
          </FooterSocial>
        </FooterSocialContainer>

        <FooterEmailContainer>
          <FooterEmail>
            <a href="mailto:alexandrekim93@gmail.com">
              alexandrekim93@gmail.com
            </a>
          </FooterEmail>
        </FooterEmailContainer>

      </FooterContainer>
    </div>
  )
}