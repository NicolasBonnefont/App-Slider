import React, { useState } from 'react';
import { StyleSheet, Text, View, } from 'react-native';
import Slider from '@react-native-community/slider';


export default function App() {


  const [slide, setSlide] = useState(0)

  function atualizaSlide(e) {

    setSlide(e)
  }
  return (
    <View style={styles.full}>
      <View style={styles.container}>
        <Text>Valor do Slide: {slide} </Text>
        <Slider
          style={{ width: 200, height: 20 }}
          minimumValue={0}
          maximumValue={100}
          onValueChange={(e) => atualizaSlide(e.toFixed(0))}

        />
      </View>
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    //flex: 1,
    marginTop: 15,
  },
  full: {
    flex: 1
  }
});
