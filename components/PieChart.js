import React from "react";
import { Dimensions } from "react-native";
import { PieChart } from "react-native-svg-charts";
import { Box, Text, View, VStack } from "native-base";
class PieChartWithDynamicSlices extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      selectedSlice: {
        label: "",
        value: 0,
      },
      labelWidth: 0,
    };
  }
  render() {
    const { labelWidth, selectedSlice } = this.state;
    const { label, value } = selectedSlice;
    const keys = ["CT", "OT", "OD", "OS", "SNP"];
    const values = [15, 25, 35, 45, 55];
    const colors = ["#600080", "#9900cc", "#c61aff", "#d966ff", "#ecb3ff"];
    const data = keys.map((key, index) => {
      return {
        key,
        value: values[index],
        svg: { fill: colors[index] },
        arc: {
          outerRadius: 70 + values[index] + "%",
          padAngle: label === key ? 0.1 : 0,
        },
        onPress: () =>
          this.setState({
            selectedSlice: { label: key, value: values[index] },
          }),
      };
    });
    const deviceWidth = Dimensions.get("window").width;

    return (
      <View style={{ justifyContent: "center", flex: 1 }}>
        <Box alignItems="flex-start">
          <VStack space={2} alignItems="center">
            <Text fontSize="lg">Time Utilisation</Text>
          </VStack>
        </Box>
        <PieChart
          style={{ height: 400 }}
          outerRadius={"80%"}
          innerRadius={"45%"}
          data={data}
        />
        <Text
          onLayout={({
            nativeEvent: {
              layout: { width },
            },
          }) => {
            this.setState({ labelWidth: width });
          }}
          style={{
            position: "absolute",
            left: deviceWidth / 2 - labelWidth / 2,
            textAlign: "center",
          }}
        >
          {`${label} \n ${value}`}
        </Text>
      </View>
    );
  }
}

export default PieChartWithDynamicSlices;
