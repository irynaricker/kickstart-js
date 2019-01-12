import styled from 'styled-components'

export default styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  @media screen and (max-device-width: 414px) {
    flex-direction: column;
  }
`