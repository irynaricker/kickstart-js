import React, { Component } from 'react'
import { connect } from 'react-redux'

import FormContainer from '../components/FormContainer'
import FlexContainer from '../components/FlexContainer'
import FlexColumn from '../components/FlexColumn'
import FlexRow from '../components/FlexRow'
import Button from '../components/Button'
import Title from '../components/Title'

class Login extends Component {
  render() {
    return (
      <FormContainer>
        <FlexColumn>
          <Title>
            {`Harvest Share`}
          </Title>

          <FlexRow height={`30%`}>
            <span style={{ whiteSpace: `pre-wrap`,color: `rgb(255, 255, 255)`, fontSize: `24px`, fontFamily: `'Roboto', sans-serif`, fontWeight: `400` }}>
              {`Find and share produce from\ngardens in your neighborhood!`}
            </span>
          </FlexRow>

          <FlexContainer height={`40%`}>
            <Button>{`SIGN UP`}</Button>
            <Button onClick={() => this.props.nav(`register`)}>{`LOGIN`}</Button>
          </FlexContainer>
        </FlexColumn>
      </FormContainer>
    )
  }
}

export default connect()(Login)