import React, {memo, useEffect, useRef} from 'react';
import {View, StyleSheet, Text, Animated} from 'react-native';
import {
  PRIMARY_DARK,
  PRIMARY_LIGHT_GREEN,
  PRIMARY_LIGHT_BLUE,
  PRIMARY_PURPLE,
} from 'constants/colors';
import {barchartAnimationConfig} from 'configs/animation';
import {Default_Regular, HelveticaNeue_Medium} from 'constants/fonts';
import {
  size_1,
  size_10,
  size_18,
  size_43,
  txtSize_16,
  txtSize_24,
} from 'constants/dimentions';

const {timing, delay, sequence} = Animated;

const DailyBlock = (
  {
    green = 0,
    blue = 0,
    purple = 0,
    label,
    width = 0,
    height = 0,
    startColor = PRIMARY_LIGHT_GREEN,
    middleColor = PRIMARY_LIGHT_BLUE,
    endColor = PRIMARY_PURPLE,
    pos = 0,
  },
  i,
) => {
  const aniValue = useRef(new Animated.Value(0)).current;
  const greenHeight = green * height;

  const translateY = aniValue.interpolate({
    inputRange: [0, 1],
    outputRange: [height, height - greenHeight],
  });
  // const scaleY = aniValue.interpolate({
  //   inputRange: [0, 1],
  //   outputRange: [0, 1],
  // });

  useEffect(() => {
    const delayTime = pos * 58.7;
    sequence([
      delay(delayTime),
      timing(aniValue, barchartAnimationConfig),
    ]).start();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pos]);

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
      {label ? (
        <View style={styles.wrapItemLabel}>
          <View
            style={{
              width: size_1,
              height: size_10,
              backgroundColor: PRIMARY_DARK,
            }}
          />
          <View>
            <Text style={styles.itemLabel}>{label}</Text>
            <Text style={styles.unit}>時</Text>
          </View>
        </View>
      ) : null}
    </View>
  );
};

export default memo(DailyBlock);

const styles = StyleSheet.create({
  wrapItemLabel: {
    // position: 'absolute',
    height: 0,
    marginBottom: 0,
    // left: 0,
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
    // position: 'absolute',
    fontSize: txtSize_24,
    fontFamily: Default_Regular,
    color: PRIMARY_DARK,
    textAlign: 'center',
  },
  unit: {
    fontSize: txtSize_16,
    fontFamily: HelveticaNeue_Medium,
    color: PRIMARY_DARK,
    position: 'absolute',
    bottom: -size_43,
    right: -size_18,
  },
});
