import React, { useEffect, useState } from 'react';
import {
  View, StyleSheet
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import * as Font from "expo-font";
import { AppLoading } from "expo";

import RootNavigator from './navigation/index';

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);

  useEffect(() => {
    fetchFonts();
  }, []);

  const fetchFonts = async () => {
    await Font.loadAsync({
      Lato: require("./assets/fonts/Lato-Regular.ttf"),
      LatoBold: require("./assets/fonts/Lato-Bold.ttf"),
      ApercuBold: require("./assets/fonts/ApercuBold.otf"),
      ApercuBoldItalic: require("./assets/fonts/ApercuBoldItalic.otf"),
      ApercuItalic: require("./assets/fonts/ApercuItalic.otf"),
      ApercuLight: require("./assets/fonts/ApercuLight.otf"),
      ApercuLightItalic: require("./assets/fonts/ApercuLightItalic.otf"),
      ApercuMedium: require("./assets/fonts/ApercuMedium.otf"),
      ApercuMediumItalic: require("./assets/fonts/ApercuMediumItalic.otf"),
      ApercuProMedium: require("./assets/fonts/ApercuProMedium.otf"),
      ApercuProRegular: require("./assets/fonts/ApercuProRegular.otf"),
      ApercuRegular: require("./assets/fonts/ApercuRegular.otf"),
    });
  };

  if (!fontLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => {
          setFontLoaded(true);
        }}
        onError={console.warn}
      />
    );
  }

  return (
    <NavigationContainer>
      <View style={styles.container}>
        <RootNavigator />
      </View>
    </NavigationContainer>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
