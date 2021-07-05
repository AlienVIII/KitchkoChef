import Reactotron from 'reactotron-react-native';
import {reactotronRedux} from 'reactotron-redux';
import {NativeModules} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage'; // defaults to localStorage for web

import url from 'url';

if (__DEV__) {
  const {hostname} = url.parse(NativeModules.SourceCode.scriptURL);
  Reactotron.setAsyncStorageHandler(AsyncStorage)
    .configure({name: 'Kitchko Chef', host: hostname})
    .useReactNative({
      overlay: false, // just turning off overlay
      networking: {
        // optionally, you can turn it off with false.
        ignoreUrls:
          /symbolicate|https:\/\/clients3\.google\.com\/generate_204|socket\.io/,
      },
    })
    .use(reactotronRedux())
    .connect();
  // Let's clear Reactotron on every time we load the app
  Reactotron.clear();
  // Totally hacky, but this allows you to not both importing reactotron-react-native
  // on every file.  This is just DEV mode, so no big deal.
  // eslint-disable-next-line no-console
  console.tron = Reactotron;
}
