import React from 'react'
import { Input, Icon } from 'react-native-elements'
// import Icon from 'react-native-vector-icons'

export default function Inputs() {
  return (
    <>
      <Input
        placeholder="Enter your name"
        label="Your Name"
        autoCorrect
        // caretHidden
        clearTextOnFocus
      />
      <Input
        placeholder="Input With Icon"
        leftIcon={
          <Icon
            name="chevron-left"
            type="font-awesome"
          />
        }
      />
      <Input
        placeholder="Input With Custom Icon and Error Message"
        leftIcon={
          <Icon
            name="user"
            type="font-awesome"
            size={24}
          />
        }
        errorMessage="Input invalid"
        renderErrorMessage="false"
      />
      <Input
        placeholder="Password"
        secureTextEntry
      />
    </>
  )
}