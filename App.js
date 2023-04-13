import React, {useEffect} from 'react';
import {StyleSheet, View} from 'react-native';
import Crashes from 'appcenter-crashes';
import Analytics from 'appcenter-analytics';
import {Basic} from './src/Basic';

const App = () => {
  const checkPreviousSession = async () => {
    const didCrash = Crashes.hasCrashedInLastSession();
    if (didCrash) {
      const report = await Crashes.lastSessionCrashReport();
      alert('Sorry about that crash');
      console.log('report', report);
    }
  };

  useEffect(() => {
    checkPreviousSession().then();
  }, []);
  const onPress = async () => {
    await Analytics.trackEvent('Calculate', {
      Internet: 'WiFi',
      Gps: 'Off',
    });
  };

  return (
    <View style={SS.container}>
      <Basic />
    </View>
  );
};

const SS = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'pink',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
