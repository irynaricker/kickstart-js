import React, { Component } from 'react'
import { connect } from 'react-redux'

import FormContainer from '../components/FormContainer'
import FlexContainer from '../components/FlexContainer'
import FlexColumn from '../components/FlexColumn'
import FlexRow from '../components/FlexRow'
import Button from '../components/Button'

class Register extends Component {
  render() {
    return (
      <FormContainer>
        <FlexColumn>
          <div style={{ width: `90%`,display: `flex`, flexDirection: `column`, alignItems: `center` }}>
            {this._renderField(`Email*:`)}
            {this._renderField(`Name*:`)}
            {this._renderField(`Mobile:`)}
            {this._renderField(`Password*:`)}
          </div>

          <FlexContainer height={`40%`}>
            <Button>{`SIGN UP`}</Button>
          </FlexContainer>
        </FlexColumn>
      </FormContainer>
    )
  }

  _renderField = field => {
    return (
      <div style={{ width: `80%`, display: `flex`, flexDirection: `row`, justifyContent: `flex-end` }}>
        <span style={{ color: `rgb(255, 255, 255)`, fontSize: `24px`, fontFamily: `'Roboto', sans-serif`, fontWeight: `400` }}>
          {`${field}: `}
        </span>
        <input style={{ width: `60vw`, height: `8vh`, marginBottom: `30px` }} />
      </div>
    )
  }
}

export default connect()(Register)