import {StyleSheet} from 'react-native';
import {PRIMARY_BLUE, PRIMARY_DARK} from 'constants/colors';
import {
  size_10,
  size_126,
  size_20,
  size_226,
  size_36,
  size_43,
  size_66,
  size_70,
  size_90,
  txtSize_100,
  txtSize_24,
  txtSize_60,
} from 'constants/dimentions';
import {Default_Regular, HelveticaNeue_Bold} from 'constants/fonts';

const styles = StyleSheet.create({
  //Detail
  container: {
    height: '100%',
    width: '100%',
    paddingBottom: size_66,
    paddingTop: size_43,
    paddingLeft: size_90,
    paddingRight: size_10,
    flexDirection: 'row',
  },
  contentWrapper: {
    height: '100%',
    flex: 1,
    paddingTop: size_226,
    alignItems: 'center',
  },
  detailName: {
    color: PRIMARY_DARK,
    fontWeight: 'bold',
    fontSize: txtSize_24,
    textAlign: 'center',
    lineHeight: size_36,
    fontFamily: HelveticaNeue_Bold,
    marginBottom: size_20,
  },
  spiltBlock: {height: size_70},
  detailValue: {
    color: PRIMARY_BLUE,
    fontFamily: Default_Regular,
    lineHeight: size_126,
    fontSize: txtSize_100,
    letterSpacing: -1,
  },
  detailUnit: {fontSize: txtSize_60, letterSpacing: -0.5},
});

export default styles;
