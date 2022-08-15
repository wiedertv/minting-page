import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  html,
  body {
    color: ${({ theme }) => theme.colors.primary};
    background-color: ${({ theme }) => theme.backgrounds.primary};
    background-size: 600% 600%;
    overflow: hidden;
    padding: 0;
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  }
  a {
    color: inherit;
    text-decoration: none;
  }
  * {
    box-sizing: border-box;
  }

@media screen and (max-width: 1024px) {
  html,
  body {
    overflow-y: auto;
  }

  .circle-one {
    display: none;
  }

  .circle-two {
    display: none;
  }
}

.circle-one {
  background-color: ${({ theme }) => theme.colors.spheres};
  height: 30vh;
  width: 22vw;
  border-radius: 100%;
  top: 0;
  left: 0;
  position: absolute;
  filter: blur(120px);
  mix-blend-mode: difference;
  animation: AnimationName 28s ease-in-out infinite;
  z-index: 0;
}

.circle-two {
  background-color: ${({ theme }) => theme.colors.spheres};
  height: 40vh;
  width: 27.5vw;
  top: 0;
  right: 0;
  border-radius: 100%;
  filter: blur(120px);
  mix-blend-mode: difference;
  position: absolute;
  animation: CircleTwo 28s ease-in-out infinite;
  z-index: 0;
}

@-webkit-keyframes AnimationName {
  0% {
    top: -10%;
    left: -10%;
  }

  25% {
    left: 80%;
    top: 0;
  }

  50% {
    left: 80%;
    top: 80%;
  }

  75% {
    left: 0;
    top: 80%;
  }

  100% {
    top: -10%;
    left: -10%;
  }
}

@-moz-keyframes AnimationName {
  0% {
    top: -10%;
    left: -10%;
  }

  25% {
    left: 80%;
    top: 0;
  }

  50% {
    left: 80%;
    top: 80%;
  }

  75% {
    left: 0;
    top: 80%;
  }

  100% {
    top: -10%;
    left: -10%;
  }
}

@keyframes AnimationName {
  0% {
    top: -10%;
    left: -10%;
  }

  25% {
    left: 80%;
    top: 0;
  }

  50% {
    left: 80%;
    top: 80%;
  }

  75% {
    left: 0;
    top: 80%;
  }

  100% {
    top: -10%;
    left: -10%;
  }
}


@-webkit-keyframes CircleTwo {
  0% {
    top: 80%;
    left: 0;
  }

  25% {
    left: 80%;
    top: 80%;
  }

  50% {
    left: 80%;
    top: 0;
  }

  75% {
    left: 0;
    top: 80%;
  }

  100% {
    left: 0;
    top: 80%;
  }
}

@-moz-keyframes CircleTwo {
  0% {
    top: 80%;
    left: 0;
  }

  25% {
    top: -10%;
    left: -10%;
  }

  50% {
    left: 80%;
    top: 0;
  }

  75% {
    left: 80%;
    top: 80%;
  }

  100% {
    left: 0;
    top: 80%;
  }
}

@keyframes CircleTwo {
  0% {
    top: 80%;
    left: 0;
  }

  25% {
    top: -10%;
    left: -10%;
  }

  50% {
    left: 80%;
    top: 0;
  }

  75% {
    left: 80%;
    top: 80%;
  }

  100% {
    left: 0;
    top: 80%;
  }
}
`

export default GlobalStyle