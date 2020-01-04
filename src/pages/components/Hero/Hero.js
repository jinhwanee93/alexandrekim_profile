// import React, { useState } from "react"
import React from "react"
import {
  HeroContainer,
  HeroTitle
} from './Hero.style';

export default function Hero() {
  // const [count, setCount] = useState(0);



  return (
    <div>
      <HeroContainer>
        <HeroTitle>Hello, I am Alexandre Kim, I am a front-end web developer.</HeroTitle>
      </HeroContainer>
      
      {/* <div>
        <p> You clicked {count} times </p>
        <button onClick={() => setCount(count + 1)}>
          Click Me!
        </button>
        <button onClick={() => setCount(0)}>
          Reset
        </button>
      </div> */}
    </div>
  )
}
