import React, {memo, useEffect, useMemo, useRef} from 'react';
import {View, StyleSheet, Text, Animated} from 'react-native';
import {
  PRIMARY_DARK,
  PRIMARY_GREEN,
  PRIMARY_LIGHT_BLUE,
  PRIMARY_PURPLE,
} from 'constants/colors';
import {barchartAnimationConfig} from 'configs/animation';
import {Default_Regular, HelveticaNeue_Bold} from 'constants/fonts';
import {size_15, size_5, txtSize_18} from 'constants/dimentions';

const {timing, delay, sequence} = Animated;

const MonthlyBlock = (
  {
    green = 0,
    blue = 0,
    purple = 0,
    label,
    width = 0,
    height = 0,
    startColor = PRIMARY_GREEN,
    middleColor = PRIMARY_LIGHT_BLUE,
    endColor = PRIMARY_PURPLE,
    pos = 0,
    isLatest = false,
  },
  i,
) => {
  const aniValue = useRef(new Animated.Value(0)).current;
  const greenHeight = useMemo(() => green * height, [green, height]);
  const delayTime = useMemo(() => pos * 100, [pos]);

  const translateY = aniValue.interpolate({
    inputRange: [0, 1],
    outputRange: [height, height - greenHeight],
  });
  // const scaleY = aniValue.interpolate({
  //   inputRange: [0, 1],
  //   outputRange: [0, 1],
  // });

  useEffect(() => {
    sequence([
      delay(delayTime),
      timing(aniValue, barchartAnimationConfig),
    ]).start();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <View style={StyleSheet.flatten([styles.block, {width}])}>
      <View style={styles.wrapAnimation}>
        <Animated.View
          style={[
            styles.blockChild,
            {
              height: greenHeight,
              backgroundColor: startColor,
              transform: [{translateY}],
            },
          ]}>
          <View
            style={[
              styles.blockChild,
              {height: blue * height, backgroundColor: middleColor},
            ]}>
            {purple > 0 ? (
              <View
                style={[
                  styles.blockChild,
                  {height: purple * height, backgroundColor: endColor},
                ]}
              />
            ) : null}
          </View>
        </Animated.View>
      </View>
      <View style={styles.wrapItemLabel}>
        <Text
          style={StyleSheet.flatten([
            styles.itemLabel,
            isLatest ? {fontFamily: HelveticaNeue_Bold, top: size_5} : null,
          ])}>
          {label}
        </Text>
      </View>
    </View>
  );
};

export default memo(MonthlyBlock);

const styles = StyleSheet.create({
  wrapItemLabel: {
    position: 'absolute',
    height: size_5,
    bottom: -size_5,
    backgroundColor: PRIMARY_DARK,
    overflow: 'visible',
    alignItems: 'center',
  },
  block: {
    width: '100%',
    justifyContent: 'flex-end',
    position: 'relative',
    overflow: 'visible',
    alignItems: 'center',
  },
  wrapAnimation: {
    overflow: 'hidden',
    width: '100%',
    height: '100%',
  },
  blockChild: {
    width: '100%',
    justifyContent: 'flex-end',
  },
  itemLabel: {
    position: 'absolute',
    top: size_15,
    fontSize: txtSize_18,
    fontFamily: Default_Regular,
    color: PRIMARY_DARK,
  },
});
