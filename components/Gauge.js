import React, { useState } from 'react';
import { View, Text, Pressable } from 'react-native';
import { SegmentedArc } from '@shipt/segmented-arc-for-react-native';

const Gauge = () => {
  const [showArcRanges, setShowArcRanges] = useState(false);

  const segments = [
    {
      scale: 0.25,
      filledColor: '#4D5061',
      emptyColor: '#F2F3F5',
      data: { label: 'Underloads' }
    },
    {
      scale: 0.25,
      filledColor: '#30A250',
      emptyColor: '#F2F3F5',
      data: { label: 'Loads in Range' }
    },
    {
      scale: 0.25,
      filledColor: '#FF746E',
      emptyColor: '#F2F3F5',
      data: { label: 'Overloads' }
    },
    {
      scale: 0.25,
      filledColor: '#E20C1E',
      emptyColor: '#F2F3F5',
      data: { label: 'Unsafe Loads' }
    }
  ];

  const ranges = ['75', '85', '94', '103', '113', '122'];

  const _handlePress = () => {
    setShowArcRanges(!showArcRanges);
  };

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <SegmentedArc
        segments={segments}
        fillValue={70}
        isAnimated={true}
        animationDelay={1000}
        showArcRanges={true}
        ranges={ranges}
      >
        {metaData => (
          <Pressable onPress={_handlePress} style={{ alignItems: 'center' }}>
            <Text style={{ fontSize: 16, paddingTop: 16 }}>{metaData.lastFilledSegment.data.label}</Text>
            <Text style={{ lineHeight: 80, fontSize: 15 }}>Average Payload</Text>
          </Pressable>
        )}
      </SegmentedArc>
    </View>
  );
};

export default Gauge;