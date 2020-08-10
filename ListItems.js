import * as React from 'react'
import { ListItem, Text, Overlay, PricingCard } from 'react-native-elements'
import TouchableScale from 'react-native-touchable-scale'

export default function ListItems() {
  const listAvatars = [
    {
      name: 'Amy Farha',
      avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
      subtitle: 'Vice President'
    },
    {
      name: 'Chris Jackson',
      avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
      subtitle: 'Vice Chairman'
    },
  ]

  const listIcons = [
    {
      title: 'Appointments',
      icon: 'av-timer'
    },
    {
      title: 'Trips',
      icon: 'flight-takeoff'
    },
  ]

  const [overlayVisible, setOverlayVisible] = React.useState(false)
  const toggleOverlay = () => setOverlayVisible(!overlayVisible)

  return (
    <>
      <Text h3>ListItems</Text>
      <Text h4>Implementation with Avatar</Text>
      {
        listAvatars.map((item, index) => (
          <ListItem
            key={index}
            leftAvatar={{ source: { uri: item.avatar_url } }}
            title={item.name}
            subtitle={item.subtitle}
            bottomDivider
          />
        ))
      }
      <Text h4>Implementation with Icons</Text>
      {
        listIcons.map((item, index) => (
          <ListItem
            key={index}
            leftIcon={ {name: item.icon} }
            title={item.title}
            bottomDivider
            chevron
          />
        ))
      }
      <Text h4>Using RN FlatList & Custom Avatar</Text>
      {
        listAvatars.map((item, index) => (
          <ListItem
            key={index}
            leftAvatar={{
              source: item.avatar_url && { uri: item.avatar_url },
              title: item.name[0]
            }}
            badge={ {value: 3, textStyle: {color: 'orange' }, containerStyle: { marginTop: -20 }}}
            title={item.name}
            bottomDivider
            chevron
          />
        ))
      }
      <Text h4>Linear Gradient + Scale Feedback</Text>
      {
        listAvatars.map((item, index) => (
          <ListItem
            key={index}
            Component={TouchableScale}
            leftAvatar={{rounded: true, source: {uri: item.avatar_url}}}
            linearGradientProps={{
              colors: ['#FF9800', '#F44336'],
              start: { x: 1, y: 0 },
              end: { x: 0.2, y: 0 },
            }}
            friction={90}
            tension={100}
            activeScale={0.95}
            title={item.name}
            titleStyle={{ color: 'white', fontWeight: 'bold' }}
            subtitle={item.subtitle}
            subtitleStyle={{ color: 'white' }}
            chevron={{ color: 'white' }}
            containerStyle={{borderRadius: 20, margin: 10}}
            // contentContainerStyle={{borderWidth: 3}}
            checkmark={{color: '#fff'}}
            // rightTitle="RightTitle"
            // rightSubtitle="RightSubtitle"
            rightTitleStyle={{color: '#fff'}}
            switch
            badge
            onPress={() => toggleOverlay()}
          />
        ))
      }
      <Text h4>React Native Touchable Scale</Text>
      <TouchableScale style={{marginVertical: 4}} activeScale={0.7}>
        <Text>This is a Touchable Scale.This is a Touchable Scale.</Text>
      </TouchableScale>
      <Overlay isVisible={overlayVisible} onBackdropPress={toggleOverlay}>
        <PricingCard 
          title="Free"
          price="$0"
          info={['1 User', 'Basic Support', 'All Core Features']}
          button={{ title: 'GET STARTED', icon: 'flight-takeoff' }}
          color="steelblue"
        />
      </Overlay>
    </>
  )
}