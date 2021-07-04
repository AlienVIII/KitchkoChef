import {StyleSheet} from 'react-native';
import {PRIMARY_BLUE, PRIMARY_DARK} from 'constants/colors';
import {
  size_129,
  size_126,
  size_150,
  size_268,
  txtSize_100,
  size_194,
  size_75,
  size_90,
  size_40,
  size_180,
  size_34,
  txtSize_24,
  size_353,
} from 'constants/dimentions';
import {Default_Regular, HelveticaNeue_Bold} from 'constants/fonts';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    paddingBottom: size_129,
    paddingLeft: size_90,
    paddingRight: size_150,
  },
  topWrapper: {
    flexDirection: 'row',
    width: '100%',
    flex: 1,
    paddingTop: size_180,
  },
  contentWrapper: {
    height: '100%',
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'row',
    paddingBottom: size_194,
  },
  splitBlock: {
    width: size_268,
    height: 1,
  },
  desciptionWrapper: {top: size_75, left: 0, position: 'absolute'},
  detailWrapper: {
    alignItems: 'center',
  },
  detailName: {
    color: PRIMARY_DARK,
    fontSize: txtSize_24,
    lineHeight: size_34,
    fontFamily: HelveticaNeue_Bold,
    marginBottom: size_40,
  },
  detailValue: {
    color: PRIMARY_BLUE,
    fontSize: txtSize_100,
    textAlignVertical: 'bottom',
    lineHeight: size_126,
    height: size_126,
    fontFamily: Default_Regular,
  },
  barchartWrapper: {
    flexDirection: 'row',
    width: '100%',
    height: size_353,
    marginTop: -15,
    overflow: 'visible',
  },
});
export default styles;
