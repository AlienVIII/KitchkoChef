import {StyleSheet, Platform} from 'react-native';
import {
  PRIMARY_DARK,
  PRIMARY_GRAY_BACKGROUND,
  PRIMARY_LIGHT,
  PRIMARY_LIGHT_BLUE,
  PRIMARY_ORANGE,
} from 'constants/colors';
import {
  size_160,
  size_80,
  size_10,
  borderRadius_12,
  size_40,
  size_60,
  txtSize_18,
  size_20,
  txtSize_24,
  size_85,
  size_240,
  size_1000,
  size_30,
  size_1,
  size_24,
} from 'constants/dimentions';
import {Default_Regular, HelveticaNeue} from 'constants/fonts';
import {ifIphoneX, isIphoneX} from 'helpers/iphoneX';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    paddingBottom: size_80,
    paddingHorizontal: ifIphoneX(30, 0),
  },
  contentWrapper: {
    flex: 1,
    flexDirection: 'row',
    overflow: 'visible',
    paddingHorizontal: size_80,
  },
  energyFlowWrapper: {
    borderRadius: borderRadius_12,
    backgroundColor: PRIMARY_LIGHT,
    width: size_1000,
    height: isIphoneX ? size_1000 : '100%',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
      },
      android: {
        elevation: 3,
      },
    }),
  },
  rightWrapper: {
    overflow: 'visible',
    paddingLeft: size_80,
    flex: 1,
    paddingTop: size_80,
  },
  diagramTitle: {
    marginTop: size_40,
    fontSize: size_24,
    marginLeft: size_40,
    color: PRIMARY_LIGHT_BLUE,
    alignSelf: 'flex-start',
    lineHeight: size_30,
    fontFamily: Default_Regular,
  },
  diagramWrapper: {
    marginTop: -size_10,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    transform: [{rotate: '45deg'}],
  },
  motionDotsWrapper: {
    position: 'absolute',
    width: size_240,
    height: size_240,
    transform: [{rotate: '-45deg'}],
  },
  row: {flexDirection: 'row'},
  detailBtn: {
    backgroundColor: PRIMARY_GRAY_BACKGROUND,
    height: size_60,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: size_40,
  },
  detailBtnTxt: {
    color: PRIMARY_DARK,
    fontSize: txtSize_18,
    fontFamily: HelveticaNeue,
  },
  selfSuffiBtn: {
    overflow: 'visible',
    borderRadius: borderRadius_12,
    backgroundColor: PRIMARY_LIGHT,
    padding: size_40,
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
      },
      android: {
        elevation: 3,
      },
    }),
  },
  selfSuffiTxtWrapper: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    marginTop: isIphoneX ? size_24 : 0,
  },
  todaySelfSuffiTxt: {
    flex: 1,
    textAlignVertical: 'bottom',
    color: PRIMARY_DARK,
    fontFamily: HelveticaNeue,
    fontSize: txtSize_24,
  },
  aboutSelfSuffiWrapper: {alignItems: 'flex-end'},
  aboutSelfSuffiTxtWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: -size_40,
    marginRight: -size_20,
    justifyContent: 'flex-start',
    paddingVertical: size_10,
  },
  aboutSelfSuffiTxt: {
    color: PRIMARY_LIGHT_BLUE,
    fontFamily: HelveticaNeue,
    fontSize: txtSize_18,
    textDecorationLine: 'underline',
  },
  iconWrapper: {
    width: size_160,
    height: size_160,
    borderWidth: size_1,
    borderColor: PRIMARY_ORANGE,
    backgroundColor: PRIMARY_LIGHT,
    borderRadius: size_80,
    position: 'absolute',
    marginTop: -size_80,
    left: size_40,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 2,
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
      },
      android: {
        elevation: 5,
      },
    }),
  },
  paddingBtm: {flex: 1},
  icon: {
    width: size_80,
    height: size_85,
    alignSelf: 'center',
  },
});

export default styles;
