import React from 'react'
import { View, Text, Image, ScrollView } from 'react-native'
import { Card, ListItem, Icon, Button } from 'react-native-elements'

const users = [
  {
    name: 'brynn',
    avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg'
  },
  {
    name: 'Nikhil',
    avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg'
  },
  {
    name: 'Apurv',
    avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg'
  },
  {
    name: 'Shivam',
    avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg'
  }
]

const Cards = () => {

  return (
    <View>
      <Card title="CARD WITH DIVIDER">
      {
        users.map((u, i) => {
          return (
            <View key={i} >
              <Image
                // style={styles.image}
                resizeMode="cover"
                source={{ uri: u.avatar }}
              />
              <Text >{u.name}</Text>
            </View>
          );
        })
      }
      </Card>
      <Card containerStyle={{padding: 0}} >
      {
        users.map((u, i) => {
          return (
            <ListItem
              key={i}
              roundAvatar
              title={u.name}
              leftAvatar={{ source: { uri: u.avatar } }}
            />
          );
        })
      }
      </Card>
      <Card
        title='HELLO WORLD'
        image={{ uri: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg'}}>
        <Text style={{marginBottom: 10}}>
          The idea with React Native Elements is more about component structure than actual design.
        </Text>
        <Button
          icon={<Icon name='code' color='#ffffff' />}
          buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
          title='VIEW NOW' />
      </Card>
    </View>
  )
}

export default Cards