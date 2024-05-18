/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {createStackNavigator} from '@react-navigation/stack';
import {React} from 'react';
import 'react-native-gesture-handler';

import {SafeAreaView, StyleSheet} from 'react-native';
import DetailScreen from './screens/DetailScreen';
import MusicList from './screens/MusicList';
import {NavigationContainer} from '@react-navigation/native';
import {UserContextProvider} from './components/UserContext';

function App() {
  const Stack = createStackNavigator();
  return (
    <UserContextProvider>
      <SafeAreaView style={styles.sectionContainer}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="Home" component={MusicList} />
            <Stack.Screen name="Details" component={DetailScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaView>
    </UserContextProvider>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    flex: 1,
  },
});
export default App;
