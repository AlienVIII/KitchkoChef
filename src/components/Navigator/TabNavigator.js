import React, {memo, useMemo} from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  StyleProp,
  ViewStyle,
  Image,
} from 'react-native';
import {
  NavigationHelpersContext,
  useNavigationBuilder,
  DefaultNavigatorOptions,
  TabRouter,
  TabActions,
  TabRouterOptions,
  createNavigatorFactory,
} from '@react-navigation/native';
import {
  PRIMARY_DARK,
  PRIMARY_GRAY_BACKGROUND,
  PRIMARY_LIGHT,
  ACTIVATED_SIDEBAR,
} from 'constants/colors';
import {
  size_4,
  size_5,
  size_50,
  size_60,
  size_36,
  size_49,
  txtSize_16,
  size_140,
  size_25,
  size_34,
  txtSize_24,
  size_12,
} from 'constants/dimentions';
import Header from 'components/common/Header';
import {HelveticaNeue} from 'constants/fonts';
import {ifIphoneX, isIphoneX} from 'helpers/iphoneX';

const Icon = memo(({name}) => {
  switch (name) {
    case 'EnergyConsumption': {
      return (
        <Image
          source={require('assets/imgs/icons/sidebar/consumption.png')}
          resizeMode="contain"
          style={styles.icon}
        />
      );
    }
    case 'EnergyGeneration': {
      return (
        <Image
          source={require('assets/imgs/icons/sidebar/solar-panel.png')}
          resizeMode="contain"
          style={styles.icon}
        />
      );
    }
    case 'CostSaving': {
      return (
        <Image
          source={require('assets/imgs/icons/sidebar/cost-saving.png')}
          resizeMode="contain"
          style={styles.icon}
        />
      );
    }
    case 'SelfSufficiencyRate': {
      return (
        <Image
          source={require('assets/imgs/icons/sidebar/self-supply.png')}
          resizeMode="contain"
          style={styles.icon}
        />
      );
    }
    case 'CO₂Reduction': {
      return (
        <Image
          source={require('assets/imgs/icons/sidebar/CO2.png')}
          resizeMode="contain"
          style={styles.icon}
        />
      );
    }
    default:
      return (
        <Image
          source={require('assets/imgs/icons/sidebar/home.png')}
          resizeMode="contain"
          style={styles.homeIcon}
        />
      );
  }
});

// Props accepted by the view
type TabNavigationConfig = {
  tabBarStyle: StyleProp<ViewStyle>,
  contentStyle: StyleProp<ViewStyle>,
};

// Supported screen options
type TabNavigationOptions = {
  title?: string,
};

// The props accepted by the component is a combination of 3 things
type Props = DefaultNavigatorOptions<TabNavigationOptions> &
  TabRouterOptions &
  TabNavigationConfig;

function TabNavigator({
  initialRouteName,
  children,
  screenOptions,
  tabBarStyle,
  contentStyle,
}: Props) {
  const {state, navigation, descriptors} = useNavigationBuilder(TabRouter, {
    children,
    screenOptions,
    initialRouteName,
  });
  const {index: stateIndex, key, routes, routeNames} = state;

  const isShow = useMemo(() => stateIndex !== 0, [stateIndex]);

  const headerTitle = useMemo(() => {
    switch (stateIndex) {
      case 1: {
        return '電力消費量推移'; //'EnergyConsumption'
      }
      case 2: {
        return '発電量推移'; //'EnergyGeneration'
      }
      case 3: {
        return '電気代削減額状況'; //'CostSaving'
      }
      case 4: {
        return 'エネルギー自給率'; //'SelfSufficiencyRate'
      }
      case 5: {
        return 'CO₂消減量'; //'CO2Reduction'
      }
      default:
        return ''; // Home
    }
  }, [stateIndex]);

  const Btn = memo(({name, routeKey, index}) => {
    const title = descriptors[routeKey].options.title;
    const disabled = useMemo(() => routeNames[stateIndex] === name, [name]);
    const iconName = useMemo(() => title || name, [name, title]);
    const btnName = useMemo(() => {
      switch (title || name) {
        case 'EnergyConsumption': {
          return '電力消費量';
        }
        case 'EnergyGeneration': {
          return '発電量';
        }
        case 'CostSaving': {
          return '電気代削減額';
        }
        case 'SelfSufficiencyRate': {
          return 'エネルギー\n自給率';
        }
        case 'CO₂Reduction': {
          return 'CO₂消減量';
        }
        default:
          return '';
      }
    }, [title, name]);
    const borderColor = useMemo(
      () => (stateIndex === index ? ACTIVATED_SIDEBAR : 'transparent'),
      [index],
    );
    const homeStyle = useMemo(
      () => (btnName === '' ? {marginTop: size_34, marginBottom: size_12} : {}),
      [btnName],
    );

    if (index === 6) {
      return null;
    }

    const onTabPress = () => {
      const event = navigation.emit({
        type: 'tabPress',
        target: routeKey,
        canPreventDefault: true,
      });
      if (!event.defaultPrevented) {
        navigation.dispatch({
          ...TabActions.jumpTo(name),
          target: key,
        });
      }
    };
    return (
      <TouchableOpacity
        key={routeKey}
        onPress={onTabPress}
        disabled={disabled}
        style={StyleSheet.flatten([styles.btnTab, homeStyle])}>
        <Icon name={iconName} />

        <View style={StyleSheet.flatten([styles.activeLine, {borderColor}])}>
          <Text style={styles.btnTxt}>{btnName}</Text>
        </View>
      </TouchableOpacity>
    );
  });

  const tabStyle = ifIphoneX(styles.tabbarIpXWrapper, styles.tabbarWrapper);

  const Btns = memo(({showing}) =>
    showing ? (
      <View style={StyleSheet.flatten([tabStyle, tabBarStyle])}>
        {routes.map((route, index) => (
          <Btn
            key={route.key}
            index={index}
            routeKey={route.key}
            name={route.name}
          />
        ))}
      </View>
    ) : null,
  );

  const Screen = () => descriptors[routes[stateIndex].key].render();
  const screenWrapperStyle = isIphoneX && isShow ? {paddingRight: 30} : {};
  return (
    <NavigationHelpersContext.Provider value={navigation}>
      <View style={styles.container}>
        <Btns showing={isShow} />
        <View
          style={StyleSheet.flatten([styles.wrapScreen, screenWrapperStyle])}>
          <Header
            isShow={isShow}
            title={headerTitle}
            navigation={navigation}
            haveBackBtn={stateIndex === 6}
          />
          <Screen />
        </View>
      </View>
    </NavigationHelpersContext.Provider>
  );
}

export const createMyNavigator = createNavigatorFactory(TabNavigator);

const styles = StyleSheet.create({
  container: {flexDirection: 'row', flex: 1, backgroundColor: PRIMARY_LIGHT},
  tabbarWrapper: {
    backgroundColor: PRIMARY_GRAY_BACKGROUND,
    width: size_140,
    height: '100%',
  },
  tabbarIpXWrapper: {
    backgroundColor: PRIMARY_GRAY_BACKGROUND,
    width: size_140 + 30,
    height: '100%',
    paddingLeft: 30,
  },
  btnTab: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    paddingVertical: size_25,
  },
  activeLine: {
    borderBottomWidth: size_4,
    marginTop: size_5,
    paddingBottom: size_5,
    borderColor: 'transparent',
  },
  btnTxt: {
    color: PRIMARY_DARK,
    textAlign: 'center',
    fontSize: txtSize_16,
    fontFamily: HelveticaNeue,
    lineHeight: txtSize_24,
  },
  wrapScreen: {flex: 1, overflow: 'hidden'},
  icon: {width: size_49, height: size_36},
  homeIcon: {width: size_50, height: size_60},
});
