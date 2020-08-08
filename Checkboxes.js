import * as React from 'react'
import { CheckBox } from 'react-native-elements'

export default function Checkboxes() {
  const [checked, setChecked] = React.useState(false)

  const toggleChecked = () => {
    setChecked(!checked)
  }

  return (
    <>
      <CheckBox
        title='Click Here'
        checked={checked}
        onPress={toggleChecked}
      />
      <CheckBox
        center
        title='Click Here'
        checked={checked}
        onPress={toggleChecked}
      />
      <CheckBox
        right
        title='Click Here'
        checked={checked}
        onPress={toggleChecked}
      />
      <CheckBox
        right
        title='Click Here'
        checked={checked}
        onPress={toggleChecked}
        checkedIcon='dot-circle-o'
        uncheckedIcon='circle-o'
      />
      <CheckBox
        center
        title='Icon Right'
        iconRight
        checkedColor='red'
        checked={checked}
        onPress={toggleChecked}
        iconType='material'
        checkedIcon='clear'
        uncheckedIcon='add'
        checkedTitle='Checked Title'
      />
    </>
  )
}