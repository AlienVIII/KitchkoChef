import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import dayjs from 'dayjs';
// import 'utils/loadInitial';
import {AppState} from 'react-native';

import NetInfo from '@react-native-community/netinfo';
import {updateNetStatus} from 'state/loader/actions';
import {getDailyWeather} from 'state/weather/actions';
import {appid} from 'configs/endpoints';
import AntDesign from 'react-native-vector-icons/AntDesign';

class InitApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isConnected: false,
      appState: AppState.currentState,
      mins: dayjs().format('m'),
    };
  }

  componentDidMount() {
    AntDesign.loadFont();
    const {doGetDailyWeather} = this.props;
    this.unsubcript = NetInfo.addEventListener(this.handleConnectivityChange);
    this.loop = setInterval(() => {
      this.onInterval();
    }, 2000);

    doGetDailyWeather({q: 'Kagawa-ken', units: 'metric', appid});
    AppState.addEventListener('change', this._handleAppStateChange);
  }

  componentWillUnmount() {
    this.unsubcript();
    clearInterval(this.loop);
    AppState.removeEventListener('change', this._handleAppStateChange);
  }

  handleConnectivityChange = newStatus => {
    const {isConnected, doUpdateNetStatus} = this.props;
    if (newStatus.isConnected !== isConnected) {
      return doUpdateNetStatus(newStatus.isConnected);
    }
    return null;
  };

  onInterval = () => {
    const {doGetDailyWeather} = this.props;
    let today = dayjs();
    const min = parseInt(today.format('m'), 10);
    if ((min + 1) % 60 === 0) {
      doGetDailyWeather({q: 'Kagawa-ken', units: 'metric', appid});
    }
  };

  _handleAppStateChange = nextAppState => {
    if (
      this.state.appState.match(/inactive|background/) &&
      nextAppState === 'active'
    ) {
      clearInterval(this.loop);
      const {doGetDailyWeather} = this.props;
      this.loop = setInterval(() => {
        this.onInterval();
      }, 2000);
      doGetDailyWeather({q: 'Kagawa-ken', units: 'metric', appid});
    }
    this.setState({appState: nextAppState});
  };

  render() {
    return null;
  }
}

const mapStateToProps = ({loaderStore}) => {
  const {isConnected = true} = loaderStore;
  return {
    isConnected,
  };
};

const mapDispatchToProps = dispatch => ({
  doUpdateNetStatus: bindActionCreators(updateNetStatus, dispatch),
  doGetDailyWeather: bindActionCreators(getDailyWeather, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(InitApp);
