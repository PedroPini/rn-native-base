import React from "react";
import {Image as Images} from "react-native";
import { Icon, Image,Center } from "native-base";
import { G, Path } from "react-native-svg";
import Logo from '../assets/logo.png';

const LOGO = Images.resolveAssetSource(Logo).uri;
const NativeBaseIcon = () => {
  return (
    <Center>
    <Image 
    size={150} alt="fallback text" borderRadius={10} source={{
      uri: LOGO
    }} fallbackSource={{
      uri: "https://www.w3schools.com/css/img_lights.jpg"
    }} />   
    </Center> 
  );
};

export default NativeBaseIcon;
