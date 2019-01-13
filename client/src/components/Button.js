import styled from 'styled-components'

export default styled.button`
  width: 40vw;
  height: 10vh;
  padding: 10px;
  margin: 20px;
  background-color: #4C7E16;

  color: #FFF;
  font-size: 24px;
  font-family: 'Roboto', sans-serif;
  font-weight: lighter;

  @media screen and (max-device-width: 414px) {
    width: 50vw;
    height: 8vh;
  }
`