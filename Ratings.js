import * as React from 'react'
import { Animated, View } from 'react-native'
import { Rating, AirbnbRating, SearchBar, Slider, Text, Icon } from 'react-native-elements'

export default function Ratings() {

  const ratingIs = (rating) => {
    console.log("Rating is : " + rating)
  }

  const [queryString, setQueryString] = React.useState('')
  const [sliderValue, setSliderValue] = React.useState(3)

  return (
    <>
      <AirbnbRating />
      <AirbnbRating
        count={7}
        reviews={["Terrible", "Bad", "Meh", "Hmm...", "Very Good", "Wow", "Amazing"]}
        defaultRating={7}
        size={20}
      />
      <Rating
        showRating
        onFinishRating={(rating) => ratingIs(rating)}
        style={{ paddingVertical: 10 }}
      />
      <Rating
        type='heart'
        ratingCount={3}
        imageSize={60}
        // fractions={2}
        showRating
        onFinishRating={(rating) => ratingIs(rating)}
      />
      <SearchBar
        placeholder="Search"
        value={queryString}
        onChangeText={input => setQueryString(input)}
      />
      <Slider
        value={sliderValue}
        onValueChange={value => setSliderValue(value)}
        onSlidingComplete={() => console.log(sliderValue)}
        thumbStyle={{ height: 40, width: 40, backgroundColor: 'transparent' }}
        thumbProps={{
          Component: Animated.Image,
          source: {
            uri: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
          },
        }}
      />
      <View style={{ flex: 1, alignItems: 'stretch', justifyContent: 'center' }}>
      <Slider
        value={sliderValue}
        onValueChange={setSliderValue}
        maximumValue={50}
        minimumValue={20}
        step={1}
        trackStyle={{ height: 10, backgroundColor: 'transparent' }}
        thumbStyle={{ height: 20, width: 20, backgroundColor: 'transparent' }}
        thumbProps={{
          children: (
            <Icon
              name="heartbeat"
              type="font-awesome"
              size={20}
              reverse
              containerStyle={{ bottom: 20, right: 20 }}
              color="#f50"
            />
          ),
        }}
      />
      <Text>Value: {sliderValue}</Text>
    </View>
    </>
  )
}