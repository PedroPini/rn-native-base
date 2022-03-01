import React from "react";
import {
  Text,
  Link,
  HStack,
  Center,
  Heading,
  Switch,
  useColorMode,
  NativeBaseProvider,
  extendTheme,
  VStack,
  ScrollView,
  Code,
} from "native-base";
import { SafeAreaView, Image } from 'react-native';

import NativeBaseIcon from "@components/NativeBaseIcon";
import Example from "@components/TodoList";
import Card from "@components/Card";
import Carousel from "@components/Carousel";
// Define the config
const config = {
  useSystemColorMode: false,
  initialColorMode: "dark",
};
import SafeViewAndroid from "@components/SafeViewAndroid";
import  ChartsImg  from './assets/index';
import { Image as Images}  from "native-base";
// extend the theme
export const theme = extendTheme({ config });


const Picture1 = Image.resolveAssetSource(require('./assets/Picture1.png')).uri;
const Picture2 = Image.resolveAssetSource(require('./assets/Picture2.png')).uri;
const Picture3 = Image.resolveAssetSource(require('./assets/Picture3.png')).uri;
const Picture5 = Image.resolveAssetSource(require('./assets/Picture5.png')).uri;
const Picture6 = Image.resolveAssetSource(require('./assets/Picture6.png')).uri;
const Picture7 = Image.resolveAssetSource(require('./assets/Picture7.png')).uri;
const Picture8 = Image.resolveAssetSource(require('./assets/Picture8.png')).uri;
const Picture9 = Image.resolveAssetSource(require('./assets/Picture9.png')).uri;
const Picture10 = Image.resolveAssetSource(require('./assets/Picture10.png')).uri;

export default function App() {
  return (
    
    <NativeBaseProvider>
      <SafeAreaView style={SafeViewAndroid.AndroidSafeArea}>
      <ScrollView >
      <Center
        _dark={{ bg: "blueGray.900" }}
        _light={{ bg: "blueGray.50" }}
        px={4}
        flex={1}
      >
        <VStack space={5} alignItems="center">
          <NativeBaseIcon />
          <Heading size="lg">Welcome </Heading>
          
          <Images 
          size={400} alt="fallback text" borderRadius={10} source={{
            uri: Picture1
          }} fallbackSource={{
            uri: "https://www.w3schools.com/css/img_lights.jpg"
          }} />   
          <Images 
          size={400} alt="fallback text" borderRadius={10} source={{
            uri: Picture2
          }} fallbackSource={{
            uri: "https://www.w3schools.com/css/img_lights.jpg"
          }} />   
           <Images 
          size={400} alt="fallback text" borderRadius={10} source={{
            uri: Picture3
          }} fallbackSource={{
            uri: "https://www.w3schools.com/css/img_lights.jpg"
          }} />   
           <Images 
          size={400} alt="fallback text" borderRadius={10} source={{
            uri: Picture5
          }} fallbackSource={{
            uri: "https://www.w3schools.com/css/img_lights.jpg"
          }} />   
           <Images 
          size={400} alt="fallback text" borderRadius={10} source={{
            uri: Picture6
          }} fallbackSource={{
            uri: "https://www.w3schools.com/css/img_lights.jpg"
          }} />   
           <Images 
          size={400} alt="fallback text" borderRadius={10} source={{
            uri: Picture7
          }} fallbackSource={{
            uri: "https://www.w3schools.com/css/img_lights.jpg"
          }} />   
           <Images 
          size={400} alt="fallback text" borderRadius={10} source={{
            uri: Picture8
          }} fallbackSource={{
            uri: "https://www.w3schools.com/css/img_lights.jpg"
          }} />   
           <Images 
          size={400} alt="fallback text" borderRadius={10} source={{
            uri: Picture9
          }} fallbackSource={{
            uri: "https://www.w3schools.com/css/img_lights.jpg"
          }} />   
           <Images 
          size={400} alt="fallback text" borderRadius={10} source={{
            uri: Picture10
          }} fallbackSource={{
            uri: "https://www.w3schools.com/css/img_lights.jpg"
          }} />   
          
          {/* <Carousel/> */}
          
          <Card/>
          <Example/>
          <ToggleDarkMode />
        </VStack>
       
      </Center>
      </ScrollView>
      </SafeAreaView>
    </NativeBaseProvider>
    
    
  );
}

// Color Switch Component
function ToggleDarkMode() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <HStack space={2} alignItems="center">
      <Text>Dark</Text>
      <Switch
        isChecked={colorMode === "light"}
        onToggle={toggleColorMode}
        aria-label={
          colorMode === "light" ? "switch to dark mode" : "switch to light mode"
        }
      />
      <Text>Light</Text>
    </HStack>
  );
}
