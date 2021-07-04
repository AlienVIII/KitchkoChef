import React, {memo, useMemo} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {
  PRIMARY_DARK,
  // PRIMARY_GRAY_BACKGROUND,
  PRIMARY_LIGHT_GREEN,
  PRIMARY_LIGHT_BLUE,
  PRIMARY_PURPLE,
} from 'constants/colors';
import MonthlyBlock from './MonthlyBlock';
import {
  size_1,
  txtSize_16,
  txtSize_24,
  size_34,
  size_290,
  size_18,
  size_5,
  size_9,
  size_25,
} from 'constants/dimentions';
import {Default_Regular} from 'constants/fonts';

const grid = [1, 2, 3, 4];

const MonthlyBarChart = ({
  data,
  max,
  half,
  percentData,
  dimentions: {width = 0, height = 0},
  startColor = PRIMARY_LIGHT_GREEN,
  middleColor = PRIMARY_LIGHT_BLUE,
  endColor = PRIMARY_PURPLE,
}) => {
  const blockWidth = useMemo(() => (width - size_290) / 12, [width]);

  const Bars = memo(({barData}) =>
    barData.map((item, index) => (
      <MonthlyBlock
        key={item.label + index}
        width={blockWidth}
        height={height}
        startColor={startColor}
        middleColor={middleColor}
        endColor={endColor}
        pos={index}
        isLatest={barData?.length === index + 1}
        {...item}
      />
    )),
  );

  return (
    <View style={styles.wrapper}>
      <View style={styles.wrapLeftLabel}>
        <Text style={styles.yUnit}>kWh</Text>
        <Text style={styles.leftLabelTxt}>{max}</Text>
        <Text style={styles.leftLabelTxt}>{half}</Text>
        <Text style={styles.leftLabelTxt}>0</Text>
      </View>
      <View style={styles.wrapBarchart}>
        <View style={styles.wrapData}>
          <Bars barData={percentData} />
        </View>
        {grid.map(v => (
          <View key={v} style={styles.grid} />
        ))}
      </View>
    </View>
  );
};

export default memo(MonthlyBarChart);

const styles = StyleSheet.create({
  wrapper: {
    height: '100%',
    position: 'relative',
    width: '100%',
    overflow: 'visible',
    flexDirection: 'row',
  },
  grid: {
    borderTopWidth: size_1,
    borderColor: 'rgba(160,160,160,0.2)', //PRIMARY_GRAY_BACKGROUND,
    flex: 1,
    width: '100%',
  },
  wrapLeftLabel: {
    // position: 'absolute',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    marginTop: -size_25,
    marginBottom: -size_9,
    marginRight: size_5,
    // left: -size_38,
  },
  leftLabelTxt: {
    textAlign: 'right',
    flexDirection: 'row',
    fontSize: txtSize_24,
    fontFamily: Default_Regular,
    color: PRIMARY_DARK,
  },
  wrapData: {
    alignItems: 'flex-end',
    flexDirection: 'row',
    position: 'absolute',
    top: 0,
    left: size_34,
    right: size_34,
    bottom: 0,
    justifyContent: 'space-between',
  },
  yUnit: {
    fontSize: txtSize_16,
    textAlign: 'right',
    letterSpacing: -0.4,
    fontFamily: Default_Regular,
    color: PRIMARY_DARK,
    position: 'absolute',
    top: -size_18,
  },
  wrapBarchart: {
    flex: 1,
    justifyContent: 'space-between',
    borderBottomWidth: size_1,
    borderColor: PRIMARY_DARK,
  },
});
