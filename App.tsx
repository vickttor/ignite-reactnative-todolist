import { StyleSheet, View } from 'react-native';
import { defaultTheme } from './src/themes/default';
import { AppBar } from './src/layout/Appbar';

import Toast from 'react-native-toast-message';

// Configs
import "./src/lib/dayjs";

// Screens
import { HomeScreen } from './src/screens/Home';

export default function App() {
  return (
    <View style={styles.container}>
      <AppBar />
      <HomeScreen/>
      <Toast position='top' autoHide topOffset={60} visibilityTime={3000}  />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: defaultTheme.gray600,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
});
