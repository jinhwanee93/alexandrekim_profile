import React, { useState } from "react"
import {
  HeroContainer
} from './Hero.style';

export default function Hero() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <HeroContainer>
        <h1>Hello, I am Alexandre Kim, I am a front-end web developer.</h1>
      </HeroContainer>
      
      <div>
        <p> You clicked {count} times </p>
        <button onClick={() => setCount(count + 1)}>
          Click Me!
        </button>
        <button onClick={() => setCount(0)}>
          Reset
        </button>
      </div>
    </div>
  )
}
