import React from 'react'
import { Image, Text, View } from 'react-native'
import Style from './Styles/Style'

const Details = () => {
  return (
    <View style={Style.container}>
      <View>
        <Text style = {Style.headline}> Turkey earthquake fault lines mapped from space </Text>
      </View>

      <View>
        <Image style = {Style.screen} source={require ('./images/Turkey.jpg')} />
      </View>

      <View>
        <Text style={Style.details}>
          More than 22,000 people are already confirmed dead and an unknown number still lie trapped, with the window for their rescue closing rapidly.

          And yet the science will go on. The insights gleaned from this event will save lives in the future.

          Take a look at the map on this page. It is the most precise yet produced of how the ground lurched in response to the enormous energies that were unleashed.

          The data behind it was acquired in the early hours of Friday by the European Union's Sentinel-1A satellite as it traversed north to south over Turkey at an altitude of 700km (435 miles).

          The Sentinel carries a radar instrument that is able to sense the ground in all weathers, day and night.

  
        </Text>
      </View>
    </View>
  )
}

export default Details