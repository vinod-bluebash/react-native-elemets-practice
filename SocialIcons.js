import * as React from 'react'
import { View, Text } from 'react-native'
import { SocialIcon, Tile, Tooltip } from 'react-native-elements'

export default function SocialIcons () {

  return (
    <>
      <SocialIcon
        type='twitter'
      />

      <SocialIcon
        raised={false}
        type='gitlab'
      />

      <SocialIcon
        light
        type='medium'
      />

      <SocialIcon
        light
        raised={false}
        type='medium'
      />

      <SocialIcon
        title='Sign In With Facebook'
        button
        type='facebook'
      />

      <SocialIcon
        title='Some Twitter Message'
        button
        type='twitter'
      />

      <SocialIcon
        button
        raised
        type='medium'
      />

      <SocialIcon
        button
        light
        type='instagram'
      />
      <Tile
        imageSrc= {{uri: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg'}}
        title="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores dolore exercitationem"
        titleStyle={{textShadowColor: '#ddd', textShadowOffset: {width: 3, height: 3}}}
        caption="Some Caption Text"
        icon={{ name: 'play-circle', type: 'font-awesome' }}
        featured
      />
      <Tooltip
        popover={<Text>Info Here</Text>}
      >
        <Text>Press Me</Text>
      </Tooltip>
    </>
  )
}