import styled from 'styled-components'

export default styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  width: ${({ width }) => width || `100%`};
  height: ${({ height }) => height || `100%`};
`