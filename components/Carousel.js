import React from "react";
import { Text, Dimensions, StyleSheet, View, Image } from "react-native";
import { SwiperFlatList } from "react-native-swiper-flatlist";
import AreaChartExample from "@components/Charts";
import ExtrasExample from "@components/StackedAreaChart";
import BarChartExample from "@components/BarChart";
import Gauge from "@components/Gauge";
import StackedBarChartExample from "@components/StackedBarChart";
import InteractiveChart from "@components/InteractiveChart";
//autoplay autoplayDelay={2}  autoplayLoop
import PieChartWithDynamicSlices from "@components/PieChart";

const Carousel = ({ isVisible }) => (
  <View style={styles.container}>
    {isVisible ? (
      <>
        <SwiperFlatList index={0}>
          <View style={styles.child}>
            <InteractiveChart />
          </View>
          <View style={styles.child}>
            <StackedBarChartExample />
          </View>
          <View style={styles.child}>
            <PieChartWithDynamicSlices />
          </View>

          <View style={styles.child}>
            <BarChartExample />
          </View>
          <View style={styles.child}>
            <Gauge />
          </View>
        </SwiperFlatList>
      </>
    ) : (
      <>
        <View style={styles.child}>
          <InteractiveChart />
        </View>
        <View style={styles.child}>
          <StackedBarChartExample />
        </View>
        <View style={styles.child}>
          <PieChartWithDynamicSlices />
        </View>

        <View style={styles.child}>
          <BarChartExample />
        </View>
        <View style={styles.child}>
          <Gauge />
        </View>
      </>
    )}
  </View>
);

const { width } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "white" },
  child: { width, justifyContent: "center" },
  text: { fontSize: width * 0.5, textAlign: "center" },
});

export default Carousel;
