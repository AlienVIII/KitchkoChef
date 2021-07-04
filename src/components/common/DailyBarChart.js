import React, {memo, useMemo} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {
  PRIMARY_DARK,
  // PRIMARY_GRAY_BACKGROUND,
  PRIMARY_LIGHT_GREEN,
  PRIMARY_LIGHT_BLUE,
  PRIMARY_PURPLE,
} from 'constants/colors';
import DailyBlock from './DailyBlock';
import {
  size_1,
  txtSize_16,
  txtSize_24,
  size_18,
  // size_46,
  size_5,
  size_25,
  size_8,
  size_10,
} from 'constants/dimentions';
import {Default_Regular} from 'constants/fonts';

const grid = [1, 2, 3, 4];

const DailyBarChart = ({
  max,
  half,
  percentData,
  dimentions: {width = 0, height = 0},
  startColor = PRIMARY_LIGHT_GREEN,
  middleColor = PRIMARY_LIGHT_BLUE,
  endColor = PRIMARY_PURPLE,
}) => {
  const blockWidth = useMemo(() => (width - 192) / 23, [width]); // 181 design
  // const renderItem = ({item, index}) => {
  //   return (
  //     <DailyBlock
  //       width={blockWidth}
  //       height={height}
  //       startColor={startColor}
  //       middleColor={middleColor}
  //       endColor={endColor}
  //       pos={index}
  //       isLatest={percentData?.length === index + 1}
  //       {...item}
  //     />
  //   );
  // };

  const Bars = memo(({data}) =>
    data.map((item, index) => (
      <DailyBlock
        key={item.label + index}
        width={blockWidth}
        height={height}
        startColor={startColor}
        middleColor={middleColor}
        endColor={endColor}
        pos={index}
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
        {/* <View> */}
        <Text style={styles.leftLabelTxt}>0</Text>
        {/* </View> */}
      </View>
      <View style={styles.wrapBarchart}>
        <View style={styles.wrapData}>
          <Bars data={percentData} />
        </View>
        {grid.map(v => (
          <View key={v} style={styles.grid} />
        ))}
      </View>
      {/* {isShow ? (
        <FlatList
          style={styles.wrapData}
          contentContainerStyle={styles.contentContainerStyle}
          horizontal
          renderItem={renderItem}
          keyExtractor={({label}, i) => label + i}
        />
      ) : null} */}
      {/* <View style={styles.wrapBottomLabel}>
        <Text style={styles.itemLabel}>
          24<Text style={styles.unit}>時</Text>
        </Text>
      </View> */}
    </View>
  );
};

export default memo(DailyBarChart);

const styles = StyleSheet.create({
  wrapper: {
    height: '100%',
    position: 'relative',
    width: '100%',
    overflow: 'visible',
    flexDirection: 'row',
    // paddingLeft: 5,
  },
  grid: {
    borderTopWidth: size_1,
    borderColor: 'rgba(160,160,160,0.2)', /// PRIMARY_GRAY_BACKGROUND,
    flex: 1,
    width: '100%',
  },
  wrapLeftLabel: {
    // position: 'absolute',
    marginRight: size_5,
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    marginTop: -size_25,
    marginBottom: -size_8,
    // top: -size_18,
    // bottom: -size_46,
    // left: -size_18,
  },
  leftLabelTxt: {
    textAlign: 'right',
    fontSize: txtSize_24,
    fontFamily: Default_Regular,
    color: PRIMARY_DARK,
  },
  // wrapBottomLabel: {
  //   position: 'absolute',
  //   width: 1,
  //   height: size_10,
  //   bottom: -size_10,
  //   right: 15,
  //   backgroundColor: PRIMARY_DARK,
  //   overflow: 'visible',
  //   alignItems: 'center',
  // },
  wrapData: {
    alignItems: 'flex-end',
    flexDirection: 'row',
    position: 'absolute',
    top: 0,
    left: size_10,
    right: 0,
    bottom: 0,
    justifyContent: 'space-between',
    // overflow: 'visible',
  },
  // contentContainerStyle: {
  //   alignItems: 'flex-end',
  //   overflow: 'visible',
  // },
  // itemLabel: {
  //   position: 'absolute',
  //   top: 10,
  //   left: -12,
  //   width: 50,
  //   fontSize: txtSize_24,
  //   fontFamily: Default_Regular,
  //   color: PRIMARY_DARK,
  // },
  // unit: {
  //   fontSize: txtSize_16,
  //   fontFamily: HelveticaNeue_Medium,
  //   color: PRIMARY_DARK,
  // },
  yUnit: {
    fontSize: txtSize_16,
    textAlign: 'right',
    letterSpacing: -0.4,
    fontFamily: Default_Regular,
    color: PRIMARY_DARK,
    // marginTop: -size_38,
    position: 'absolute',
    top: -size_18,
    width: 50,
  },
  wrapBarchart: {
    flex: 1,
    justifyContent: 'space-between',
    borderBottomWidth: size_1,
    borderColor: PRIMARY_DARK,
  },
});
