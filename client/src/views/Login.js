import React, { Component } from 'react'
import { connect } from 'react-redux'

import FlexContainer from '../components/FlexContainer'
import FlexColumn from '../components/FlexColumn'
import FlexRow from '../components/FlexRow'
import Button from '../components/Button'

class Login extends Component {
  render() {
    return (
      <div style={{ width: `100vw`, height: `100vh`, backgroundColor: `rgba(100, 100, 0, 0.5)` }}>
        <FlexColumn>
          <FlexRow height={`30%`}>
            <span style={{ color: `rgb(255, 255, 255)`, fontSize: `24px`, fontFamily: `Roboto` }}>
              {`Find and share produce from overflowing gardens in your neighborhood!`}
            </span>
          </FlexRow>

          <FlexContainer height={`40%`}>
            <Button>{`SIGN UP`}</Button>
            <Button>{`LOGIN`}</Button>
          </FlexContainer>
        </FlexColumn>
      </div>
    )
  }
}

export default connect()(Login)