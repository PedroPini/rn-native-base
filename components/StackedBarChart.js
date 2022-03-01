import React from "react";
import { StackedBarChart, YAxis, Grid, XAxis } from "react-native-svg-charts";

import {
  Checkbox,
  Stack,
  Icon,
  Box,
  Center,
  NativeBaseProvider,
  Text,
  VStack,
} from "native-base";
import { MaterialCommunityIcons } from "@expo/vector-icons";
export default class StackedBarChartExample extends React.PureComponent {
  render() {
    const data = [
      {
        month: new Date(2015, 0, 1),
        apples: 3840,
        bananas: 1920,
        cherries: 960,
        dates: 400,
        oranges: 400,
      },
      {
        month: new Date(2015, 1, 1),
        apples: 1600,
        bananas: 1440,
        cherries: 960,
        dates: 400,
      },
      {
        month: new Date(2015, 2, 1),
        apples: 640,
        bananas: 960,
        cherries: 3640,
        dates: 400,
      },
      {
        month: new Date(2015, 3, 1),
        apples: 3320,
        bananas: 1000,
        cherries: 2000,
        dates: 1400,
        oranges: 1700,
      },
      {
        month: new Date(2015, 3, 1),
        apples: 3320,
        bananas: 480,
        cherries: 640,
        dates: 400,
      },
      {
        month: new Date(2015, 3, 1),
        apples: 5000,
        bananas: 900,
        cherries: 2000,
        dates: 2000,
        peache: 800,
      },
      {
        month: new Date(2015, 3, 1),
        apples: 2620,
        bananas: 480,
        cherries: 340,
        dates: 400,
      },
      {
        month: new Date(2015, 3, 1),
        apples: 3320,
        bananas: 2480,
        cherries: 2640,
        dates: 2400,
      },
      {
        month: new Date(2015, 3, 1),
        apples: 2320,
        bananas: 5000,
        cherries: 1340,
        dates: 400,
      },
      {
        month: new Date(2015, 3, 1),
        apples: 1120,
        bananas: 3000,
        cherries: 1640,
        dates: 1400,
      },
      {
        month: new Date(2015, 3, 1),
        apples: 1500,
        bananas: 2700,
        cherries: 3000,
        dates: 3900,
      },
      {
        month: new Date(2015, 3, 1),
        apples: 2320,
        bananas: 4480,
        cherries: 3640,
        dates: 3400,
      },
      {
        month: new Date(2015, 3, 1),
        apples: 3320,
        bananas: 4680,
        cherries: 640,
        dates: 4500,
      },
      {
        month: new Date(2015, 3, 1),
        apples: 6320,
        bananas: 480,
        cherries: 3640,
        dates: 2400,
      },
      {
        month: new Date(2015, 3, 1),
        apples: 3320,
        bananas: 480,
        cherries: 640,
        dates: 6700,
      },
      {
        month: new Date(2015, 3, 1),
        apples: 3320,
        bananas: 4980,
        cherries: 3840,
        dates: 400,
      },
      {
        month: new Date(2015, 3, 1),
        apples: 3320,
        bananas: 2480,
        cherries: 640,
        dates: 2400,
      },
      {
        month: new Date(2015, 3, 1),
        apples: 3320,
        bananas: 3380,
        cherries: 340,
        dates: 4300,
      },
      {
        month: new Date(2015, 3, 1),
        apples: 4320,
        bananas: 4280,
        cherries: 640,
        dates: 400,
      },
    ];

    const colors = ["#7b4173", "#a55194", "#ce6dbd", "#de9ed6"];
    const keys = ["apples", "bananas", "cherries", "dates"];
    const contentInset = { top: 20, bottom: 20 };
    return (
      <>
        <Box alignItems="flex-start">
          <VStack space={2} alignItems="center">
            <Text fontSize="lg">Productivity Rate</Text>
          </VStack>
          <Stack
            direction={{
              base: "row",
              md: "row",
            }}
            space={3}
            alignItems="flex-start"
          >
            <Checkbox
              value="dark"
              style={{ backgroundColor: "#7b4173" }}
              size="md"
              icon={
                <Icon as={<MaterialCommunityIcons name="soldering-iron" />} />
              }
              defaultIsChecked
            >
              EX01
            </Checkbox>
            <Checkbox
              style={{ backgroundColor: "#a55194" }}
              value="red"
              size="md"
              icon={<Icon as={<MaterialCommunityIcons name="gold" />} />}
              defaultIsChecked
            >
              EX02
            </Checkbox>
            <Checkbox
              value="blue"
              style={{ backgroundColor: "#ce6dbd" }}
              size="md"
              icon={<Icon as={<MaterialCommunityIcons name="podium-gold" />} />}
              defaultIsChecked
            >
              EX03
            </Checkbox>
            <Checkbox
              value="bluae"
              style={{ backgroundColor: "#de9ed6" }}
              size="md"
              icon={
                <Icon as={<MaterialCommunityIcons name="podium-silver" />} />
              }
              defaultIsChecked
            >
              EX04
            </Checkbox>
          </Stack>
        </Box>
        <YAxis
          data={data}
          contentInset={contentInset}
          svg={{
            fill: "grey",
            fontSize: 10,
          }}
          formatLabel={(value) => `${value}`}
        />
        <XAxis
          style={{ marginHorizontal: -10 }}
          data={data}
          formatLabel={(value, index) => index}
          contentInset={{ left: 10, right: 10 }}
          svg={{ fontSize: 10, fill: "black" }}
        />
        <StackedBarChart
          style={{ height: 400 }}
          keys={keys}
          colors={colors}
          data={data}
          showGrid={true}
          contentInset={{ top: 30, bottom: 30 }}
        />
        <Grid />
      </>
    );
  }
}
