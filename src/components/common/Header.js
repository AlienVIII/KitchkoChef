import React, {memo, useCallback} from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import {useSelector} from 'react-redux';
import {PRIMARY_DARK} from 'constants/colors';
import {
  size_115,
  size_36,
  size_40,
  size_50,
  txtSize_20,
  txtSize_24,
  txtSize_36,
  txtSize_45,
  txtSize_26,
} from 'constants/dimentions';
import {Default_Regular, HelveticaNeue_Bold} from 'constants/fonts';
import AntDesign from 'react-native-vector-icons/AntDesign';

const Header = ({isShow, title, haveBackBtn = false, navigation}) => {
  const {datetime = '', clock = ''} = useSelector(
    ({intervalDataStore}) => intervalDataStore.time,
  );

  const goBack = useCallback(() => navigation.goBack(), [navigation]);

  if (isShow) {
    return (
      <View style={styles.wrapper}>
        <View style={styles.childWrapper}>
          {haveBackBtn ? (
            <TouchableOpacity
              onPress={goBack}
              style={styles.backBtn}
              hitSlop={{bottom: 17, left: 17, right: 17}}>
              <AntDesign name="left" color={PRIMARY_DARK} size={txtSize_26} />
            </TouchableOpacity>
          ) : null}
        </View>
        <Text style={styles.headerText}>{title}</Text>
        <View style={styles.childWrapper}>
          <View style={styles.wrapTxt}>
            <Text style={styles.headerDegree}>{datetime}</Text>
            <Text style={styles.time}>{clock}</Text>
          </View>
        </View>
      </View>
    );
  }
  return null;
};

export default memo(Header);

const styles = StyleSheet.create({
  wrapper: {
    width: '100%',
    alignItems: 'flex-end',
    flexDirection: 'row',
    paddingBottom: size_50,
    paddingHorizontal: size_40,
    height: size_115,
  },
  childWrapper: {
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    height: '100%',
    flex: 1,
  },
  headerText: {
    color: PRIMARY_DARK,
    fontFamily: HelveticaNeue_Bold,
    fontSize: txtSize_24,
    textAlignVertical: 'bottom',
    lineHeight: size_36,
    letterSpacing: -0.3,
    marginLeft: -size_40,
  },
  headerDegree: {
    color: PRIMARY_DARK,
    fontFamily: Default_Regular,
    fontSize: txtSize_20,
  },
  time: {
    color: PRIMARY_DARK,
    fontFamily: Default_Regular,
    fontSize: txtSize_36,
    letterSpacing: -0.4,
    lineHeight: txtSize_45,
  },
  wrapTxt: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  backBtn: {
    alignSelf: 'flex-start',
    height: '100%',
    justifyContent: 'flex-end',
  },
});
