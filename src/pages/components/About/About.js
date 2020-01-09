import React from 'react';
import {
    AboutContainer,
} from './About.style';

import profileImage from '../../../../static/images/profile_image.jpeg';

export default function About() {
  return(
    <AboutContainer id="about">
      <h2>About Me</h2>

      <p>Hello! I'm Alexandre Kim, a software engineer based in Los Angeles, CA who enjoys building things that live on the internet. I develop exceptional websites and web apps that provide intuitive, pixel-perfect user interfaces with efficient and modern backends.</p>
      <p>Here are a few technologies I've been working with recently:</p>

      <li>
        JavaScript(ES6+)
      </li>
      <li>
        React
      </li>
      <li>
        Redux
      </li>
      <li>
        Gatsby
      </li>
      <li>
        HTML & CSS
      </li>
      <li>
        Node.js
      </li>

      <div className="profile-image" style={{backgroundImage: `url(${profileImage})`}}/>
    </AboutContainer>
  )
}