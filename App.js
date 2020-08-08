import * as React from 'react';
import { StyleSheet, Text, ScrollView, View } from 'react-native';
import { Avatar, Accessory, ListItem, Badge, Icon, withBadge, BottomSheet, Button, Divider } from 'react-native-elements'

import BG from './BG'
import BGComponents from './BGComponents'
import Cards from './Cards'
import Checkboxes from './Checkboxes'

export default function App() {
  const BadgedIcon = withBadge(1)(Icon)

  return (
    <ScrollView style={styles.container}>
      <Text>Avatars</Text>
      <Avatar
        rounded
        source={{
          uri:
            'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
        }}
      />
      <Avatar
        rounded
        size="large"
        source={{
          uri:
            'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
        }}
        activeOpacity={0.5}
      >
        <Accessory />
      </Avatar>
      <ListItem
        leftAvatar={{
          title: 'A',
          source: { uri: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg'},
          showAccessory: true,
        }}
        title='Alladin'
        subtitle='CEO'
        chevron
      />
      <ListItem
        leftAvatar={{
          title: 'A',
          source: { uri: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg'},
          showAccessory: true,
        }}
        title='Alladin'
        subtitle='CEO'
        chevron
      />
      <Badge value={<Text>My Custom Badge</Text>} />
      <Badge value="99+" status="error" />
      <Badge status="success" />
      <Badge status="primary" />
      <Badge status="error" />
      <Badge status="warning" />
      <View>
        <Avatar
          rounded
          source={{
            uri: 'https://randomuser.me/api/portraits/men/41.jpg'
          }}
          size="large"
        />
        <Badge status="error" containerStyle={{ position: 'absolute', top: -4, right: -4}} />
      </View>
      <BadgedIcon type="ionicon" name="ios-chatbubbles" />
      <BottomSheet
        list={[
          {title: 'List Item 1'},
          {title: 'List Item 2'},
          {
            title: 'Cancel',
            containerStyle: {backgroundColor: 'red'},
            titleStyle: {color: 'white'}
          }
        ]}
        cancelButtonIndex={1}
        buttonProps={{title: 'Open Button Sheet'}}
      />
      <BottomSheet
        list={[
          {
            title: 'Appoinments',
            leftIcon: {name: 'av-timer'}
          },
          {
            title: 'Trips',
            leftIcon: {name: 'flight-takeoff'}
          },
          {
            title: 'Cancel',
            leftIcon: {name: 'close', color: 'white'},
            containerStyle: {backgroundColor: 'red'},
            titleStyle: {color: 'white'},
          }
        ]}
        buttonProps={{
          title: 'Open Bottom Sheet with Icons',
          icon: {
            name: 'chevron-down',
            size: 15,
            color: 'white',
            type: 'entypo'
          }
        }}
        cancelButtonIndex = {2}
      />
      <Button
       title="Solid Button"
      />
      <Button
       title="Clear Button"
       type="clear"
      />
      <Button
       title="Solid Button"
       type="outline"
      />
      <Button
        icon={
          <Icon
            name="arrow-forward"
            size={15}
            color="white"
          />
        }
        title="Button with Icon Component"
      />
      <Button
        icon={
          <Icon
            name="arrow-forward"
            size={15}
            color="white"
          />
        }
        iconRight
        title="Button with right icon"
      />
      <Button
        title="Loading button"
        loading
        raised
        buttonStyle={{marginVertical: 5}}
        linearGradientProps={{
          colors: ['red', 'pink'],
          start: { x: 0, y: 0.5 },
          end: { x: 1, y: 0.5 },
        }}
      />
      <BG />
      <BGComponents />
      <Cards />
      <Divider style={{marginVertical: 10, backgroundColor: 'blue', height: 2, marginHorizontal: '10%'}}/>
      <Checkboxes />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    borderWidth: 2,
  },
});
