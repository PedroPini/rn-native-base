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
import { SafeAreaView, Image, View } from "react-native";

import NativeBaseIcon from "@components/NativeBaseIcon";
import Example from "@components/TodoList";
import Card from "@components/Card";
import Carousel from "@components/Carousel";
// import ThemeScreen from "@components/Menu.tsx";

// Define the config
const config = {
  useSystemColorMode: false,
  initialColorMode: "dark",
};
import SafeViewAndroid from "@components/SafeViewAndroid";

// extend the theme
export const theme = extendTheme({ config });

export default function Charts() {
  return (
    <NativeBaseProvider>
      <SafeAreaView style={SafeViewAndroid.AndroidSafeArea}>
        <ScrollView>
          <Center
            _dark={{ bg: "blueGray.900" }}
            _light={{ bg: "blueGray.50" }}
            px={4}
            flex={1}
          >
            <VStack space={5} alignItems="center">
              <Carousel isVisible={true} />
              <Card />
              <ToggleDarkMode />
            </VStack>
            {/* <ThemeScreen/> */}
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
